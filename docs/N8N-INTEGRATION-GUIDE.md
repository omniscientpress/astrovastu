# n8n Integration Guide — Divine Jyothi

**Purpose:** Wire every website automation to n8n on your VPS.  
**Audience:** You (owner) + anyone deploying Dokploy / env vars.  
**Last updated:** August 2026

---

## 1. What the website already calls

The Next.js site **never exposes n8n URLs to the browser**. Every flow goes through a server API route that proxies to n8n:

```
Browser / React UI          Next.js API (private)              n8n webhook
──────────────────          ─────────────────────              ────────────
BookForm                    POST /api/intake          ───────►  Workflow 10
LoShuCalculator             POST /api/lo-shu-lead     ───────►  Workflow 11 (you create)
RelationshipBlueprint       POST /api/razorpay/verify ───────►  Workflow 12 (you create)
                            (after Razorpay success)
WhatsApp inbound            (provider)                ───────►  Workflow 30
Cron 05:00 IST              (n8n schedule)          ───────►  Workflow 20
```

### Environment variables (website container)

Set these in Dokploy for the **divine-jyothi** app:

| Variable | Required | Points to |
|----------|----------|-----------|
| `N8N_INTAKE_WEBHOOK` | For booking briefs | Workflow 10 test URL |
| `N8N_INTAKE_SECRET` | Optional | Bearer token n8n checks |
| `N8N_LOSHU_WEBHOOK` | For Lo Shu leads | Workflow 11 test URL |
| `N8N_LOSHU_SECRET` | Optional | Bearer token |
| `N8N_COMPATIBILITY_PAYMENT_WEBHOOK` | For ₹299 PDF | Workflow 12 test URL |
| `N8N_COMPATIBILITY_PAYMENT_SECRET` | Optional | Bearer token |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | For payments | Razorpay dashboard |
| `RAZORPAY_KEY_ID` | For payments | Same as above |
| `RAZORPAY_KEY_SECRET` | For payments | Razorpay secret (server only) |
| `REVALIDATE_SECRET` | For horoscope | Workflow 20 → site revalidate |

**Webhook URL format (n8n):**

```
Production:  https://n8n.divinejyothi.com/webhook/astro/intake
Test:        https://n8n.divinejyothi.com/webhook-test/astro/intake
```

Use **production** URLs in Dokploy once workflows are activated.

---

## 2. Relationship Blueprint — what was yours vs mine

| Piece | Source |
|-------|--------|
| Element map (Water/Earth/Wood/Metal/Fire) | **Your spec** |
| 5 clash pairs + bridge elements + remedies EN/TE | **Your spec** |
| `getCompatibility(num1, num2)` output shape | **Your spec** |
| Dual-person form (Name, Gender, DOB) | **Your spec** |
| Circular SVG meter + blur paywall + ₹299 Razorpay CTA | **Your spec** |
| Form → Loading → Results flow | **Your spec** |
| Compare **Kua** numbers (derived from DOB + gender) | **My choice** — you said Kua/Driver; I picked Kua as primary |
| Excellent = same element; Neutral = productive pair; Bridging = clash | **My choice** — needed 3 statuses when all pairs are clash or productive |
| Contact email + WhatsApp on form | **My addition** — needed for PDF delivery + Razorpay prefill |
| Placement on Marriage + Numerology pages | **My addition** from earlier planning discussion |
| `support@divinejyothi.com` on Contact page | **My addition** for digital-report support |

Nothing was mixed up with the **Family Compatibility** astrology block on the homepage — that is a separate, human-consultation feature. The Relationship Blueprint is a **Lo Shu elemental tool** (numerology), not KP chart matching.

---

## 3. Install n8n on the VPS (core level)

### 3.1 Prerequisites on the same VPS

| Service | Port | Purpose |
|---------|------|---------|
| **n8n** | 5678 (internal) | Automation hub |
| **kp-report-api** | 8000 (internal) | KP charts for Workflow 10 |
| **divine-jyothi** | 3000 | Next.js site (already deployed) |

All should sit on the same Docker network so n8n can reach `http://kp-api:8000`.

### 3.2 Deploy n8n with Dokploy (recommended pattern)

1. In Dokploy → **New Application** → Docker / Compose.
2. Use the official image: `n8nio/n8n:latest`
3. **Persistent volume** on `/home/node/.n8n` (credentials survive restarts).
4. Environment:

```env
N8N_HOST=n8n.divinejyothi.com
N8N_PORT=5678
N8N_PROTOCOL=https
WEBHOOK_URL=https://n8n.divinejyothi.com/
GENERIC_TIMEZONE=Asia/Kolkata
N8N_SECURE_COOKIE=true
```

5. Reverse proxy: `n8n.divinejyothi.com` → container port 5678.
6. **Protect the admin UI** with basic auth or IP allowlist — only webhooks need to be public.

### 3.3 Deploy kp-report-api (for Workflow 10)

From your `kp/` folder — Docker build + expose port 8000 on the internal network.

Workflow 10 CONFIG → `KP_API_BASE=http://kp-api:8000` (use the Docker service name).

---

## 4. Import the astrology pack (6 workflows)

**Location in repo:** `C:\projects\DJ\n8n-packs\astrology-pack\workflows\`

| File | ID | Trigger |
|------|-----|---------|
| `00-error-handler.json` | 00 | On workflow error |
| `01-sub-claude-call.json` | 01 | Sub-workflow (no webhook) |
| `02-sub-voice-guard.json` | 02 | Sub-workflow (no webhook) |
| `10-consultation-intake.json` | 10 | `POST /webhook/astro/intake` |
| `20-daily-horoscope-pipeline.json` | 20 | Cron 05:00 IST |
| `30-whatsapp-astro-agent.json` | 30 | `POST /webhook/astro/whatsapp` |

### Import steps

```bash
# SSH to VPS
ssh -i ~/.ssh/genmedha_vps root@200.97.162.87

# If n8n CLI is available inside the container:
docker exec -it <n8n-container> n8n import:workflow --separate --input=/path/to/workflows
```

**Or via UI:** n8n → Workflows → Import from file → select each JSON.

### After import (critical order)

1. Create credential **Anthropic API** → Header `x-api-key` (not Bearer).
2. Open workflows **01** and **02** → copy their IDs from the URL.
3. In workflows **10, 20, 30** → open **CONFIG** node → paste:
   - `SUB_CLAUDE_WORKFLOW_ID` = ID of 01
   - `SUB_VOICE_WORKFLOW_ID` = ID of 02
4. On workflows **10, 20, 30** → Settings → **Error Workflow** = `00 Error Handler`.
5. Configure each CONFIG node (emails, API URLs) — see `n8n-packs/astrology-pack/README.md`.
6. **Activate** workflows one at a time: 00 → 01 → 02 → 10 → 30 → 20.

### Wire Workflow 10 to the website

1. Activate Workflow 10.
2. Open **Booking Webhook** node → copy **Production URL**.
3. In Dokploy (divine-jyothi app) set:

```env
N8N_INTAKE_WEBHOOK=https://n8n.divinejyothi.com/webhook/astro/intake
```

4. Test from `/book` with a full astrology birth chart (date + time + place).

**Payload the site sends** (from `lib/intake.ts`):

```json
{
  "name": "Ravi Kumar",
  "phone": "+919876543210",
  "email": "ravi@example.com",
  "service": "Marriage & Relationships",
  "preferred_time": "Weekday evening IST",
  "question": "Package tier: Couple",
  "date": "1990-05-15",
  "time": "14:30",
  "place": "Hyderabad",
  "lat": 17.385,
  "lon": 78.486,
  "tz": 5.5,
  "time_confidence": "exact",
  "source": "divinejyothi.com/book"
}
```

> **Note:** Intake only fires for **astrology** bookings with complete birth date, time, and place. Vastu/numerology bookings still go to WhatsApp only.

---

## 5. Create Workflow 11 — Lo Shu lead capture

**Not in the astrology pack.** Build this in n8n UI (15 minutes).

### Trigger

- Node: **Webhook**
- Method: POST
- Path: `astro/lo-shu-lead`
- Response: Immediately `200 { "ok": true }`

### Suggested flow

```
Webhook → Set (normalize fields) → Google Sheets / Airtable row
                                  → Email to astrologer (optional)
                                  → WhatsApp template to user (optional)
```

### Payload from website (`/api/lo-shu-lead`)

```json
{
  "name": "Priya",
  "whatsappNumber": "+919885099448",
  "gender": "female",
  "dob": "28-05-1990",
  "kuaNumber": 4,
  "source": "divinejyothi.com/home"
}
```

### Website env

```env
N8N_LOSHU_WEBHOOK=https://n8n.divinejyothi.com/webhook/astro/lo-shu-lead
```

### Test

1. Open homepage Lo Shu calculator → fill form → Generate.
2. Check n8n **Executions** tab for a green run.
3. Lo Shu lead is **non-blocking** — calculator still works if webhook fails.

---

## 6. Create Workflow 12 — Relationship Blueprint PDF delivery

**Not in the astrology pack.** This runs **after Razorpay payment is verified** on the server.

### Trigger

- Node: **Webhook**
- Method: POST
- Path: `astro/compatibility-pdf`
- Response: `200 { "ok": true }`

### Payload from website (`/api/razorpay/verify`)

```json
{
  "event": "digital_report_purchased",
  "reportType": "relationship-blueprint",
  "razorpayPaymentId": "pay_xxxxx",
  "razorpayOrderId": "order_xxxxx",
  "contact": {
    "name": "Priya",
    "email": "priya@example.com",
    "phone": "+919885099448"
  },
  "personA": {
    "name": "Priya",
    "gender": "female",
    "dob": "28-05-1990",
    "kuaNumber": 4,
    "driverNumber": 1
  },
  "personB": {
    "name": "Arjun",
    "gender": "male",
    "dob": "15-03-1988",
    "kuaNumber": 9,
    "driverNumber": 6
  },
  "compatibility": {
    "matchStatus": "Needs Bridging",
    "matchPercentage": 52,
    "bridgeElement": "wood",
    "elementA": "wood",
    "elementB": "fire"
  },
  "source": "divinejyothi.com/services/astrology/marriage"
}
```

### Suggested flow

```
Webhook
  → Execute Workflow 01 (Claude) — generate full report markdown
  → HTML to PDF (Gotenberg / APITemplate / Puppeteer node)
  → Send Email (SMTP) with PDF attachment to contact.email
  → Google Sheets row (payment ID, email, status)
  → Optional: WhatsApp PDF link via provider
```

### Website env

```env
N8N_COMPATIBILITY_PAYMENT_WEBHOOK=https://n8n.divinejyothi.com/webhook/astro/compatibility-pdf
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=xxxxx
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxx
```

### Test (use Razorpay test mode first)

1. Set test keys in Dokploy.
2. Run Relationship Blueprint on Marriage page → pay with test card `4111 1111 1111 1111`.
3. Confirm n8n execution → email received.

---

## 7. Workflow 20 — Daily horoscope (optional phase)

1. Configure `SITE_PUBLISH_URL` in Workflow 20 CONFIG.
2. Add to website (not built yet): `app/api/revalidate/horoscope/route.ts` secured with `REVALIDATE_SECRET`.
3. n8n POSTs to that URL after publishing → Next.js rebuilds horoscope data.

---

## 8. Workflow 30 — WhatsApp agent

1. Point your WhatsApp provider webhook to:  
   `https://n8n.divinejyothi.com/webhook/astro/whatsapp`
2. Set CONFIG: `BOOKING_LINK=https://divinejyothi.com/book`, pricing text, vector store URL.
3. Ingest site content into vector DB (services, FAQs, pricing) — one-time.

---

## 9. End-to-end test checklist

| # | Action | Expect |
|---|--------|--------|
| 1 | `curl -X POST $N8N_INTAKE_WEBHOOK -H 'Content-Type: application/json' -d @sample-intake.json` | Workflow 10 runs, email brief |
| 2 | Submit `/book` with astrology birth details | Same + WhatsApp opens |
| 3 | Generate Lo Shu grid on homepage | Workflow 11 execution |
| 4 | Razorpay test payment on Relationship Blueprint | Workflow 12 execution + PDF email |
| 5 | Send WhatsApp message to bot number | Workflow 30 classifies + replies |
| 6 | Wait for 05:00 IST cron | Workflow 20 horoscope run |

**Sample intake file:** `n8n-packs/astrology-pack/sample-data/consultation-intake.sample.json`

---

## 10. Security checklist

- [ ] n8n admin UI behind auth — not public
- [ ] `RAZORPAY_KEY_SECRET` only in server env (never `NEXT_PUBLIC_`)
- [ ] Optional `N8N_*_SECRET` bearer tokens on each webhook
- [ ] Razorpay signature verified server-side before n8n is called (already implemented)
- [ ] Webhook URLs only in server env — never in client bundle

---

## 11. What is NOT automated yet

| Feature | Status |
|---------|--------|
| Lo Shu full PDF (free tier blur → WhatsApp only) | Lead capture only; full PDF via Relationship Blueprint ₹299 |
| Workflow 11 / 12 JSON in astrology pack | **You create in n8n UI** (specs above) |
| Horoscope display page | Website route not built |
| CI/CD for n8n workflows | Manual import / `n8n import:workflow` |

---

## 12. Quick reference — file map

| Website file | n8n workflow |
|--------------|--------------|
| `app/api/intake/route.ts` | 10 Consultation Intake |
| `app/api/lo-shu-lead/route.ts` | 11 Lo Shu Lead (create) |
| `app/api/razorpay/verify/route.ts` | 12 Compatibility PDF (create) |
| `lib/intake.ts` | Payload shape for 10 |
| `lib/lo-shu-lead.ts` | Payload shape for 11 |
| `lib/compatibility-payment.ts` | Payload shape for 12 |
| `n8n-packs/astrology-pack/` | Workflows 00–30 |

---

## Need help next?

1. **SSH + Dokploy walkthrough** — I can run commands on your VPS if you want live setup.
2. **Exportable Workflow 11 & 12 JSON** — I can add importable files to `n8n-packs/`.
3. **PDF template** — Claude prompt + HTML layout for the Relationship Blueprint report.
