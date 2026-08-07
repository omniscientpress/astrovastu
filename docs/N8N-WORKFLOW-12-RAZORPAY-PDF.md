# n8n Workflow 12 — Relationship Blueprint PDF (Razorpay → PDF → WhatsApp)

**Use when:** Razorpay keys are live (test mode first).  
**Pairs with:** Website `RelationshipBlueprint` + `/api/razorpay/*` routes.

---

## Architecture — two paths (use both)

```
Path A (PRIMARY — already built)          Path B (BACKUP — this workflow)
────────────────────────────────          ────────────────────────────────
User pays → Razorpay modal                Razorpay fires payment.captured
         → /api/razorpay/verify           → n8n Webhook (this workflow)
         → signature check                → reads order notes
         → POST full JSON to n8n           → generates PDF + WhatsApp
```

**Why both?**

| Path | Strength |
|------|----------|
| **A** (`/api/razorpay/verify`) | Full compatibility object already computed; signature verified on your server; works even if Razorpay webhook is delayed |
| **B** (Razorpay → n8n) | Catches payments if user closes browser before verify runs; official Razorpay audit trail |

**Dedupe rule:** In n8n, check `razorpay_payment_id` in a Google Sheet / Data Store — skip if already processed.

---

## Razorpay order notes (now embedded at checkout)

When the user clicks **Unlock ₹299**, the website creates a Razorpay order with these **string notes**:

```json
{
  "report_type": "relationship-blueprint",
  "person1_name": "Priya",
  "person1_dob": "28-05-1990",
  "gender1": "female",
  "person2_name": "Arjun",
  "person2_dob": "15-03-1988",
  "gender2": "male",
  "whatsapp_number": "+919885099448",
  "email": "priya@example.com",
  "match_percentage": "52",
  "match_status": "Needs Bridging",
  "bridge_element": "wood",
  "source": "divinejyothi.com/services/astrology/marriage"
}
```

These appear on `payment.captured` webhook at:

```
$json.body.payload.payment.entity.notes
```

(or `payload.order.entity.notes` — read both in Code node).

---

## Razorpay dashboard setup (when keys arrive)

1. **Razorpay Dashboard** → Settings → **Webhooks** → Add endpoint:
   ```
   https://n8n.divinejyothi.com/webhook/razorpay/payment-captured
   ```
2. Events: tick **`payment.captured`** only (start narrow).
3. Copy **Webhook Secret** → n8n credential / env `RAZORPAY_WEBHOOK_SECRET`.
4. Test mode first: use test keys + test webhook URL.

### Website env (Dokploy)

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxx
N8N_COMPATIBILITY_PAYMENT_WEBHOOK=https://n8n.divinejyothi.com/webhook/astro/compatibility-pdf
```

---

## n8n workflow — node-by-node

```
[1 Webhook: POST razorpay/payment-captured]
        ↓
[2 IF: event === payment.captured AND report_type === relationship-blueprint]
        ↓
[3 Code: Verify signature + compatibility logic]
        ↓
[4 HTTP: APITemplate.io → pdf_url]
        ↓
[5 HTTP: WhatsApp Cloud API → send document]
        ↓
[6 (optional) Email: backup delivery to contact.email]
```

Import starter JSON: `docs/n8n-workflows/12-relationship-blueprint-razorpay.json`

---

## Node 1 — Webhook

| Setting | Value |
|---------|-------|
| Method | POST |
| Path | `razorpay/payment-captured` |
| Response | Immediately `200 { "status": "ok" }` |

**Razorpay sends** (simplified):

```json
{
  "event": "payment.captured",
  "payload": {
    "payment": {
      "entity": {
        "id": "pay_NbL0l0pP9qR7sT",
        "order_id": "order_NbL0k8pP8qR6sS",
        "email": "priya@example.com",
        "contact": "+919885099448",
        "amount": 29900,
        "currency": "INR",
        "notes": {
          "person1_dob": "28-05-1990",
          "person2_dob": "15-03-1988",
          "gender1": "female",
          "gender2": "male",
          "whatsapp_number": "+919885099448",
          "person1_name": "Priya",
          "person2_name": "Arjun",
          "report_type": "relationship-blueprint",
          "match_percentage": "52",
          "match_status": "Needs Bridging",
          "bridge_element": "wood"
        }
      }
    }
  }
}
```

---

## Node 2 — IF

```
{{ $json.body.event }} equals payment.captured
AND
{{ $json.body.payload.payment.entity.notes.report_type }} equals relationship-blueprint
```

---

## Node 3 — Code (compatibility + Kua calculation)

Paste this in an n8n **Code** node. It mirrors `lib/compatibility-engine.ts` + Kua math from `lib/lo-shu-grid.ts`.

```javascript
const crypto = require('crypto');

// --- Optional: verify Razorpay webhook signature ---
const webhookSecret = $env.RAZORPAY_WEBHOOK_SECRET || '';
const signature = $headers['x-razorpay-signature'] || '';
const rawBody = JSON.stringify($json.body);
if (webhookSecret && signature) {
  const expected = crypto.createHmac('sha256', webhookSecret).update(rawBody).digest('hex');
  if (expected !== signature) throw new Error('Invalid Razorpay webhook signature');
}

const payment = $json.body.payload.payment.entity;
const notes = payment.notes || {};

function parseDob(str) {
  const m = String(str).trim().match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (!m) throw new Error('Invalid DOB format — expected DD-MM-YYYY');
  return { day: +m[1], month: +m[2], year: +m[3] };
}

function reduce(n) {
  while (n > 9) n = String(n).split('').reduce((s, d) => s + +d, 0);
  return n;
}

function kuaNumber(year, gender) {
  const yd = reduce(String(year).split('').reduce((s, d) => s + +d, 0));
  let kua = gender === 'male' ? reduce(11 - yd) : reduce(4 + yd);
  if (kua === 5) kua = gender === 'male' ? 2 : 8;
  return kua;
}

function elementFromNumber(num) {
  if (num === 1) return 'water';
  if ([2, 5, 8].includes(num)) return 'earth';
  if ([3, 4].includes(num)) return 'wood';
  if ([6, 7].includes(num)) return 'metal';
  return 'fire';
}

const CLASHES = {
  'water|fire': { bridge: 'wood', remedy_en: 'Add green tones, living plants, or wooden decor in shared spaces.', remedy_te: 'పచ్చ రంగులు, మొక్కలు, చెక్క అలంకారాలు.' },
  'wood|earth': { bridge: 'fire', remedy_en: 'Warm red/orange accents, bright lighting, or candles.', remedy_te: 'ఎరుపు/నారింజ రంగులు, లైట్లు, కొవ్వొత్తులు.' },
  'fire|metal': { bridge: 'earth', remedy_en: 'Yellow/earthy tones, crystals, or clay pots.', remedy_te: 'పసుపు/మట్టి రంగులు, క్రిస్టల్స్, మట్టి కుండలు.' },
  'metal|wood': { bridge: 'water', remedy_en: 'Blue/black accents, a water fountain, or glass elements.', remedy_te: 'నీలం/నలుపు, నీటి ఫౌంటెన్, గాజు అలంకారాలు.' },
  'earth|water': { bridge: 'metal', remedy_en: 'White/gold tones, metal wind chimes, or metallic objects.', remedy_te: 'తెలుపు/బంగారు, మెటల్ మోగులు.' },
};

function clashRule(a, b) {
  const k1 = `${a}|${b}`, k2 = `${b}|${a}`;
  return CLASHES[k1] || CLASHES[k2] || null;
}

const p1 = parseDob(notes.person1_dob);
const p2 = parseDob(notes.person2_dob);
const g1 = notes.gender1 === 'male' ? 'male' : 'female';
const g2 = notes.gender2 === 'male' ? 'male' : 'female';
const kua1 = kuaNumber(p1.year, g1);
const kua2 = kuaNumber(p2.year, g2);
const el1 = elementFromNumber(kua1);
const el2 = elementFromNumber(kua2);
const clash = clashRule(el1, el2);

let matchStatus = notes.match_status || 'Neutral';
let matchPercentage = +(notes.match_percentage || 72);
let bridgeElement = notes.bridge_element || null;
let remedyEn = '';
let remedyTe = '';

if (clash) {
  matchStatus = 'Needs Bridging';
  bridgeElement = clash.bridge;
  remedyEn = clash.remedy_en;
  remedyTe = clash.remedy_te;
  if (!notes.match_percentage) matchPercentage = 50;
} else if (el1 === el2) {
  matchStatus = 'Excellent';
  matchPercentage = 96;
}

const label = { water: 'Water', earth: 'Earth', wood: 'Wood', metal: 'Metal', fire: 'Fire' };

return [{
  json: {
    razorpay_payment_id: payment.id,
    razorpay_order_id: payment.order_id,
    person1_name: notes.person1_name || 'Person 1',
    person2_name: notes.person2_name || 'Person 2',
    person1_dob: notes.person1_dob,
    person2_dob: notes.person2_dob,
    kua1, kua2,
    element1: label[el1],
    element2: label[el2],
    match_status: matchStatus,
    match_percentage: matchPercentage,
    bridge_element: bridgeElement ? label[bridgeElement] || bridgeElement : '—',
    remedy_en: remedyEn || 'Your elements support each other — favour shared calm spaces and balanced colours at home.',
    remedy_te: remedyTe || 'మీ అంశాలు ఒకదానికొకటి మద్దతు ఇస్తాయి.',
    lucky_colors: bridgeElement === 'wood' ? 'Green, teal' : bridgeElement === 'fire' ? 'Red, orange, gold' : bridgeElement === 'earth' ? 'Yellow, beige, brown' : bridgeElement === 'water' ? 'Blue, black, navy' : bridgeElement === 'metal' ? 'White, silver, gold' : 'Gold, cream, soft green',
    action_plan: 'Week 1: Place bridging element objects in your shared living area. Week 2: Align one daily habit (lighting, plants, or metal accent). Week 3: Review energy in the bedroom direction.',
    whatsapp_number: (notes.whatsapp_number || payment.contact || '').replace(/\D/g, ''),
    email: notes.email || payment.email || '',
    amount_inr: (payment.amount || 29900) / 100,
  }
}];
```

---

## Node 4 — APITemplate.io (PDF generation)

### Request

| Field | Value |
|-------|-------|
| Method | POST |
| URL | `https://rest.apitemplate.io/v2/create-pdf?template_id={{ $env.APITEMPLATE_TEMPLATE_ID }}` |
| Auth | Header `X-API-KEY: {{ $env.APITEMPLATE_API_KEY }}` |
| Content-Type | `application/json` |

### Body (exact JSON payload)

```json
{
  "person1_name": "{{ $json.person1_name }}",
  "person2_name": "{{ $json.person2_name }}",
  "person1_dob": "{{ $json.person1_dob }}",
  "person2_dob": "{{ $json.person2_dob }}",
  "kua1": "{{ $json.kua1 }}",
  "kua2": "{{ $json.kua2 }}",
  "element1": "{{ $json.element1 }}",
  "element2": "{{ $json.element2 }}",
  "match_percentage": "{{ $json.match_percentage }}",
  "match_status": "{{ $json.match_status }}",
  "bridge_element": "{{ $json.bridge_element }}",
  "remedy_en": "{{ $json.remedy_en }}",
  "remedy_te": "{{ $json.remedy_te }}",
  "lucky_colors": "{{ $json.lucky_colors }}",
  "action_plan": "{{ $json.action_plan }}",
  "brand_name": "Divine Jyothi",
  "report_title": "Relationship Blueprint",
  "payment_id": "{{ $json.razorpay_payment_id }}",
  "generated_date": "{{ $now.format('DD-MM-YYYY') }}"
}
```

### Response (map in next node)

```json
{
  "download_url": "https://pdf.apitemplate.io/.../Relationship-Blueprint.pdf",
  "transaction_ref": "abc123"
}
```

**n8n expression for pdf_url:** `{{ $json.download_url }}`

---

### Alternative — PDFMonkey

| Field | Value |
|-------|-------|
| Method | POST |
| URL | `https://api.pdfmonkey.io/api/v1/documents` |
| Auth | Bearer `{{ $env.PDFMONKEY_API_KEY }}` |

### Body

```json
{
  "document": {
    "document_template_id": "YOUR_TEMPLATE_UUID",
    "status": "pending",
    "payload": {
      "person1_name": "{{ $('Code').item.json.person1_name }}",
      "person2_name": "{{ $('Code').item.json.person2_name }}",
      "match_percentage": {{ $('Code').item.json.match_percentage }},
      "match_status": "{{ $('Code').item.json.match_status }}",
      "bridge_element": "{{ $('Code').item.json.bridge_element }}",
      "remedy_en": "{{ $('Code').item.json.remedy_en }}",
      "remedy_te": "{{ $('Code').item.json.remedy_te }}",
      "lucky_colors": "{{ $('Code').item.json.lucky_colors }}",
      "action_plan": "{{ $('Code').item.json.action_plan }}",
      "element_line": "{{ $('Code').item.json.person1_name }} ({{ $('Code').item.json.element1 }}) + {{ $('Code').item.json.person2_name }} ({{ $('Code').item.json.element2 }})"
    },
    "meta": {
      "razorpay_payment_id": "{{ $('Code').item.json.razorpay_payment_id }}",
      "_filename": "Relationship-Blueprint.pdf"
    }
  }
}
```

Then add a **Wait** node (3s) + **GET** `https://api.pdfmonkey.io/api/v1/documents/{{ $json.document.id }}` until `document.download_url` is present.

---

## Node 5 — WhatsApp Cloud API (Meta)

**Prerequisite:** Approved template with **document header** (e.g. `relationship_blueprint_pdf`).

| Field | Value |
|-------|-------|
| Method | POST |
| URL | `https://graph.facebook.com/v21.0/{{ $env.WHATSAPP_PHONE_NUMBER_ID }}/messages` |
| Auth | Bearer `{{ $env.WHATSAPP_ACCESS_TOKEN }}` |

### Body (exact JSON)

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "{{ $('Code').item.json.whatsapp_number }}",
  "type": "template",
  "template": {
    "name": "relationship_blueprint_pdf",
    "language": { "code": "en" },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "document",
            "document": {
              "link": "{{ $('APITemplate PDF').item.json.download_url }}",
              "filename": "Divine-Jyothi-Relationship-Blueprint.pdf"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          { "type": "text", "text": "{{ $('Code').item.json.person1_name }}" },
          { "type": "text", "text": "{{ $('Code').item.json.match_percentage }}" }
        ]
      }
    ]
  }
}
```

**Template body example (Meta Business Manager):**
```
Hi {{1}}, your Relationship Blueprint is ready. Compatibility score: {{2}}%. Guidance only — not a verdict on your relationship. — Divine Jyothi
```

**Phone format:** digits only, country code, no `+` → `919885099448`

---

## Node 5b — WATI (alternative provider)

| Field | Value |
|-------|-------|
| Method | POST |
| URL | `https://live-server-XXXX.wati.io/api/v1/sendTemplateMessage` |
| Header | `Authorization: Bearer {{ $env.WATI_TOKEN }}` |

### Body

```json
{
  "template_name": "relationship_blueprint_pdf",
  "broadcast_name": "blueprint_delivery",
  "parameters": [
    { "name": "name", "value": "{{ $('Code').item.json.person1_name }}" },
    { "name": "score", "value": "{{ $('Code').item.json.match_percentage }}" }
  ],
  "whatsappNumber": "{{ $('Code').item.json.whatsapp_number }}",
  "media": {
    "url": "{{ $('APITemplate PDF').item.json.download_url }}",
    "filename": "Relationship-Blueprint.pdf"
  }
}
```

---

## Node 5c — Interakt (alternative provider)

| Field | Value |
|-------|-------|
| Method | POST |
| URL | `https://api.interakt.ai/v1/public/message/` |
| Header | `Authorization: Basic {{ $env.INTERAKT_API_KEY }}` |

### Body

```json
{
  "countryCode": "+91",
  "phoneNumber": "{{ $('Code').item.json.whatsapp_number.slice(-10) }}",
  "type": "Template",
  "template": {
    "name": "relationship_blueprint_pdf",
    "languageCode": "en",
    "headerValues": [
      "{{ $('APITemplate PDF').item.json.download_url }}"
    ],
    "bodyValues": [
      "{{ $('Code').item.json.person1_name }}",
      "{{ $('Code').item.json.match_percentage }}"
    ]
  }
}
```

---

## Node 6 — Email backup (recommended)

| Field | Value |
|-------|-------|
| Node | Send Email (SMTP) |
| To | `{{ $('Code').item.json.email }}` |
| Subject | `Your Relationship Blueprint — Divine Jyothi` |
| Attachment | Download PDF from `download_url` via HTTP Request node first |

---

## Environment variables (n8n)

```env
RAZORPAY_WEBHOOK_SECRET=whsec_xxxxx
APITEMPLATE_API_KEY=xxxxx
APITEMPLATE_TEMPLATE_ID=xxxxx
WHATSAPP_PHONE_NUMBER_ID=xxxxx
WHATSAPP_ACCESS_TOKEN=xxxxx
```

---

## Is this the best Relationship Blueprint version?

| Layer | Status |
|-------|--------|
| Element + clash engine | ✅ Matches your spec (`lib/compatibility-engine.ts`) |
| Freemium UI (meter free, blur + paywall) | ✅ Per your UI prompt |
| Kua from DOB + gender | ✅ Correct Lo Shu method |
| Razorpay checkout (no redirect) | ✅ `react-razorpay` in-page modal |
| Server signature verification | ✅ Before n8n is called |
| Order notes for Razorpay webhook | ✅ **Just added** — ready when keys arrive |
| PDF template design | ⏳ You create in APITemplate / PDFMonkey |
| WhatsApp template approval | ⏳ Submit in Meta Business Manager |
| Live keys | ⏳ Next week — use `rzp_test_` until then |

**One gap to close when keys arrive:** Create the APITemplate PDF layout (navy/cream/gold) matching the site. I can draft the HTML template next if you want.

---

## Test checklist (test mode)

1. Set `rzp_test_*` keys in Dokploy → redeploy site.
2. Import n8n workflow → activate.
3. Add Razorpay test webhook URL.
4. Run Relationship Blueprint on Marriage page → pay with test card `4111 1111 1111 1111`.
5. Confirm: Path A execution (`/api/razorpay/verify`) **and** Path B (`payment.captured` webhook).
6. Dedupe should allow only one PDF send per `pay_` ID.
