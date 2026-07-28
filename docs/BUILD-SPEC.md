# Divine Jyothi — Complete Site Build Prompt (v2)

You are building the production website for **Divine Jyothi** (divinejyothi.com), a consultation practice run by **Siva Kola** from Hyderabad, India. This build **replaces** the existing astrology-only site at divinejyothi.com, merging its useful content into a new three-pillar structure: **KP Astrology · Vastu · Numerology**.

Read this entire prompt before writing code. The voice and content rules matter as much as the technical spec.

**Before starting, read §13 (Execution Plan).** This build runs in phases with a designated model per phase. Do not attempt the whole spec in one pass.

---

## 1. Brand & Positioning

**Brand:** Divine Jyothi
**Pillars:** KP Astrology · Vastu · Numerology
**Founder:** Siva Kola, Founder & Consultant, Hyderabad
**Core promise:** "Clear guidance for timing, space, and name decisions."
**Framework:** Timing (KP Astrology) · Space (Vastu) · Name (Numerology) — one integrated method, so recommendations never conflict with each other.

**The differentiator — this drives all copy:** Divine Jyothi sells clarity in a category built on fear. Positioning is *practical over theatrical*:
- Clear recommendations you can act on — not vague forecasts or fear-selling
- No guaranteed outcomes: charts and assessments indicate tendencies and favorable windows; they do not promise results
- Integrated when it matters: single-pillar sessions when one question is enough; a combined Audit when timing, space, and name all affect the same decision
- Confidential by default: birth details and floor plans stay private

### Voice rules (strict)

**Banned — never appears anywhere on the site:**
"accurate predictions" · "guaranteed" / "guarantee" / "money back guarantee" / "satisfaction guarantee" · "unlock your destiny" · "cosmic wisdom" / "cosmic contract" / "cosmic level" · "decoding your destiny" · "balancing energies" · "written in the stars" · "soulmate" · "India's first" · "revolutionary" · "the hard truth about…" · any success-rate percentage · any fabricated statistic or uncited study · predictions "down to the month" / "exact month" / "with remarkable accuracy" · fear framing (doshas as threats, "dangerous periods," manufactured anxiety followed by a paid remedy).

**Required instead:** plain, specific, confident language. Name the real technique (7th cusp Sub-Lord, Dasha periods, Nakshatra compatibility, Sub-Lord theory) rather than mystical filler. Every service states what the client concretely walks away with.

**Guarantee replacement** (procedural, not outcome-based): "Free reschedule or cancellation with 24+ hours notice. Full refund if we cancel."

---

## 2. Migration Rules — what comes from the old site

The previous site is astrology-only and heavily oversold. Carry forward **content and taxonomy**, not voice.

### CARRY FORWARD
- The 7 KP service verticals and their **sub-topic depth** (see §6 seed content — richer than a bare list)
- **Family Compatibility Analysis** — the flagship differentiator, reframed per §5 (mandatory reframe)
- **Telugu domain vocabulary** — harvest into `/locales/te.ts` NOW even though Telugu ships later: Pelli Koothuru (bride), Pelli Koduku (groom), Athagaru (mother-in-law), Mavagaru (father-in-law), Maradalu (sister-in-law), Bava (brother-in-law), Muhurtham, Gruha Pravesham, ముహూర్తం, ఉద్యోగం & విద్య, వివాహం & బంధాలు, సంతానం, ధనం & ఆస్తి, ఆరోగ్యం, ప్రశ్న శాస్త్రం
- **Tiered packages** for Marriage (Individual / Couple / Family) — good commercial structure, now with fixed prices
- **Deliverables**: written PDF summary · personalised remedies · session recording on request
- **Operations**: UPI payment after slot confirmation · 24-hour reschedule/refund window · Google Meet/Zoom or phone or in-person Hyderabad · Mon–Sat 9:00 AM–9:00 PM IST · +91 98850 99448 · consult@divinejyothi.com
- The KP explainer framing (K.S. Krishnamurti, Sub-Lord theory, finer segments vs broad windows)

### DO NOT CARRY FORWARD
- **All client statistics.** No "10,000+ Happy Clients," no "50,000+ Consultations," no "5,000+ Couples Matched," no "1,200+ Delayed Marriages Resolved," no "98% Marriage Success Rate," no "Client Satisfaction %," no "Countries Served." These are unverified and the site's honesty positioning cannot survive them. Do not build a stats-counter component at all.
- The uncited "over 60% of marital conflicts stem from family interference" claim and any similar invented research
- "Money Back Guarantee" / "100% Satisfaction Guarantee" / "100% Secure Payment" badges
- All six generic testimonials (unsourced, written in-house) — replace with real reviews before launch
- Health service claims of "health diagnosis" or "chronic disease prediction"
- Fear-framed section headings and destiny/soulmate copy
- Broken patterns to avoid repeating: client-only-rendered booking page (must be static HTML), identical meta descriptions across pages, `#` placeholder social links, count-up numbers that render as `0+`

---

## 3. Tech Stack & Constraints

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS**, static-first (SSG), no database
- **No CMS.** Testimonials, FAQs, services, pricing live in typed files under `/data/`
- **No payment gateway.** Booking = WhatsApp or form → slot confirmed → pay via UPI. Do NOT integrate Razorpay/Stripe
- Deploy: **Hostinger VPS via Dokploy** — `output: 'standalone'`, no Vercel-only features
- Fonts: **Inter** primary; load **Noto Sans Telugu** for the Telugu vocabulary already present in data files
- All UI strings via `/locales/en.ts` so a Telugu locale drops in later without refactoring. Build English-only now
- `trailingSlash: true`
- Mobile-first — most traffic is mobile + WhatsApp referrals
- Accessibility: semantic HTML, visible focus states, contrast-checked palette, alt text on every image
- Every page must render its content in server HTML (no content-less client-only pages)

### OUT of scope this phase
- SEO extras: schema.org, sitemap.xml, robots.txt, OG image generation → **Phase 3**
- Telugu pages / language toggle → post-launch (but keep `/locales/te.ts` populated with vocabulary)
- Blog authoring system → routes + card layout + 3 placeholder posts only
- Client accounts, dashboards, payment processing, analytics

---

## 4. Design System & Logo

**Palette:** deep navy/indigo (#1e1b4b family) for hero and dark bands · warm cream (#faf7f2 family) for alternating sections · gold/amber accent for CTAs and highlights · WhatsApp green reserved **only** for WhatsApp actions.

**Feel:** premium, calm, editorial — closer to a modern professional-services firm than a typical astrology site. Generous whitespace, soft-radius cards, subtle borders, restrained shadows. Alternating navy/cream section rhythm.

**No mystical clip-art:** no zodiac-wheel stock art, glowing mandalas, or starfield backgrounds. Permitted illustration style: minimal gold line-art only.

### Logo treatment — NEW LOGO, display prominently
A new Divine Jyothi logo will be supplied. It must read as the brand anchor, not an afterthought:
- Store at `/public/brand/` as **SVG** (preferred) plus PNG fallback; variants: `logo-full`, `logo-mark`, and light/dark versions
- **Header:** logo mark + "Divine Jyothi" wordmark at generous size (mark ~40–44px tall desktop, ~32–36px mobile), with the pillar line "KP Astrology · Vastu · Numerology" as a small caption beneath the wordmark. Do not shrink it to fit the nav — reduce nav item size instead if needed
- **Hero:** the logo mark appears as a large, clean brand element on the right side of the hero (or centred above the H1 on mobile), sized ~180–220px. No glow effects, no drop shadows, no animation beyond a gentle fade-in
- **Footer:** logo mark + wordmark, light-on-dark variant
- Use as the favicon set (`favicon.ico`, `apple-touch-icon`, 192/512 PNGs) and the site's brand image
- Never stretch, recolour, or place the logo on a busy background. Enforce clear space equal to the height of the mark's cap on all sides
- Build a single `<Logo variant="full" | "mark" theme="light" | "dark" />` component so sizing stays consistent everywhere

Replace the old site's generic `ॐ` glyph entirely — it is not the brand mark.

---

## 5. Hero Banner Carousel (homepage)

The homepage hero is a **rotating banner carousel** — 4 slides, one per strategic message. This is the primary structural change from v1.

**Behaviour:** auto-advance every 6–7 seconds, pause on hover and on focus, respect `prefers-reduced-motion` (no auto-advance), swipeable on touch, dot indicators + arrow controls, keyboard accessible. **Slide 1 must be fully rendered in server HTML** (the others may hydrate) so the page never appears empty. Fixed height across slides — no layout shift on rotation. Each slide: navy background, badge, H1, one-line subtitle, short paragraph, two CTAs (green WhatsApp + gold Book), and the logo mark.

**Slide 1 — Brand / integrated method**
Badge: `KP Astrology · Vastu · Numerology`
H1: "Clear guidance for timing, space, and name decisions."
Sub: Divine Jyothi with Siva Kola in Hyderabad — integrated KP Astrology, Vastu, and Numerology for career, marriage, property, naming, and important life decisions.
CTAs: [Message on WhatsApp] · [Book Consultation]

**Slide 2 — Marriage & Family Compatibility (headline differentiator)**
Badge: `Marriage · Family Compatibility`
H1: "Marriage matching that looks at the whole family."
Sub: Most matching stops at the couple. We also help you understand the household you're marrying into — in-law dynamics, family expectations, and how to prepare for them.
Body: KP 7th-cusp Sub-Lord matching, marriage timing for both charts, plus our Family Compatibility review — an approach almost no one else offers.
CTAs: [Ask about Marriage on WhatsApp] · [Explore Marriage & Family →] (→ `/services/astrology/marriage`)

**Slide 3 — Vastu**
Badge: `Vastu`
H1: "Space that works — without breaking walls."
Sub: Home, office, and plot assessment with practical remedies. We tell you what actually matters before you buy, build, or renovate.
CTAs: [Ask about Vastu] · [Explore Vastu →]

**Slide 4 — Numerology**
Badge: `Numerology`
H1: "Names and numbers checked against your chart."
Sub: Name spelling, baby names, business names, and mobile numbers — cross-checked with your birth chart, not chosen from a generic number table.
CTAs: [Ask about Numerology] · [Explore Numerology →]

Below the carousel, a static micro-trust line: "Hyderabad-based · Online worldwide · By appointment · Practical guidance, not fear-based prediction."

---

## 6. Family Compatibility — MANDATORY REFRAME

This is the flagship differentiator, carried from the old site's strongest idea. **The old framing must not be reproduced.**

The old version profiled named relatives who are not clients and never consented — predicting a specific mother-in-law's jealousy, offering a "crisis prediction" and a "power dynamics map," and framing the whole thing with manufactured dread ("The Hard Truth About Marital Breakdown"). Delivered to an anxious bride, that plants suspicion which can become self-fulfilling. It is also indefensible for a brand built on honesty.

**Reframe: from verdicts about other people → preparation for the client.**

- Analyse **the client's own chart in a family context** — their patterns under household stress, communication tendencies, where they will need patience
- Describe **dynamics and tendencies**, never a person's character. "Households where authority is concentrated with elders often need X" — not "your mother-in-law will be difficult"
- Frame relatives by **role** (mother-in-law, father-in-law, sister-in-law, brother-in-law, extended family) and require that any relative's chart is reviewed **only with that person's knowledge and consent** — state this explicitly on the page
- Output is **preparation**, not prophecy: what to expect culturally and practically, communication approaches that tend to work, timing for first visits and family ceremonies
- **No conflict matrix, no crisis prediction, no power dynamics map, no "insurance policy for your marriage."**

**Page copy direction:** "Marriage in India is rarely just two people. We help you understand the household you're joining — the expectations, the rhythms, and where you'll want to be patient — so you go in prepared rather than surprised. This is preparation, not prediction: we describe tendencies, never verdicts about individuals. Any family member's chart is reviewed only with their knowledge."

Include an explicit honesty note: "We won't tell you a relative will be a problem. We'll help you navigate a family system you're about to join."

---

## 7. Site Map

```
/                        Home (hero carousel)
/services                Services hub
/services/astrology      Pillar: KP Astrology
/services/vastu          Pillar: Vastu
/services/numerology     Pillar: Numerology
/services/astrology/{career|marriage|childbirth|finance|health|muhurtham|prashna}
/services/vastu/{home-vastu|office-vastu|plot-vastu|vastu-remedies}
/services/numerology/{name-analysis|baby-name|business-name|mobile-number}
/pricing                 Fixed price list + packages
/about                   Siva Kola, method, KP explainer, "What we won't do"
/testimonials            All testimonials
/blog                    Index + 3 placeholder posts
/faq                     Full FAQ
/contact                 Contact, hours, location
/book                    Booking form (must render server-side)
/privacy  /terms  /refund
```

Header nav: Home · Services · Pricing · About · FAQ · Contact + gold **Book Consultation** button, with the logo treatment from §4.
Footer: logo + brand blurb · Services (3 pillars + top services) · Company (About, Testimonials, Blog, FAQ, Contact, Book) · Contact (+91 98850 99448, consult@divinejyothi.com, Mon–Sat 9:00 AM – 9:00 PM IST, "Hyderabad — in-person by appointment · Online consultations worldwide") · legal links. **Real social URLs or omit the icons entirely — no `#` placeholders.**

---

## 8. Page Specifications

### 8.1 Home
1. **Hero carousel** (§5)
2. **Trust strip** (cream) — verifiable items ONLY: `{{YEARS}}+ Years Experience` · `4.9★ on Google` (must be an anchor to the Google Business profile) · `English · Telugu · Hindi` · `Online & In-person, by appointment`. No client or consultation counts. `{{YEARS}}` is a placeholder — owner supplies a defensible number
3. **"I need help with…"** — 8 situation cards → matching service pages: Career & education · Marriage & relationships · Childbirth & family · Property & house planning · Business & office · Naming & number alignment · Muhurtham & auspicious timing · Urgent Prashna question. Each: title, 1–2 line description, pillar tag
4. **The Divine Jyothi method** (navy) — Timing / Space / Name cards, each naming its discipline and 2 concrete uses. This is the ONLY pillar presentation on Home; do not repeat pillars in a second format
5. **Family Compatibility feature block** (cream) — a distinct section, since it is a headline differentiator: short reframed pitch per §6, 3 supporting points, [Explore Marriage & Family →]
6. **How consultation works** — 4 steps: Share your question (WhatsApp or form) → Confirm a slot (proposed IST times) → Pay via UPI (after confirmation; no card checkout on site) → Consultation (Google Meet/Zoom, phone, or in-person Hyderabad). Then a deliverables ribbon: "Every consultation includes: a written summary (PDF) · specific recommendations · session recording on request"
7. **Founder block** (cream) — Siva Kola, languages, Hyderabad, [About Divine Jyothi →]
8. **Testimonials** — 3 cards from `/data/testimonials.ts`, [All testimonials →]
9. **Packages preview** — 3 cards from `/data/packages.ts`, [Full pricing →]
10. **FAQ preview** — 5 accordions
11. **Final CTA band** (navy) — "Ready for clear next steps?" + WhatsApp + Book

### 8.2 Services hub
Intro: "Start from your situation. We'll recommend KP Astrology, Vastu, Numerology, or the Divine Jyothi Audit when all three matter together."
Then: the 8 situation cards (shared component) · three pillar cards with plain-voice taglines — Astrology: "When to act — career, marriage, muhurtham, and timing windows" · Vastu: "Space that works — home, office, and plot guidance without demolition-first advice" · Numerology: "Names and numbers checked against your chart — not random luck" · specialty grids per pillar (title, 1-line scope, fixed from-price, duration, View →) · closing band: "Not sure which service fits? Message us with your question — we'll suggest the right starting point."

### 8.3 Pillar pages (3)
Each: navy hero (what this discipline answers, one sentence) · "Best for" situation list · that pillar's specialty grid · "How {pillar} works here" explainer — Astrology: KP Sub-Lord explainer; Vastu: assessment-first, remedies without demolition; Numerology: chart-cross-checked method, not standalone number magic · booking band.

### 8.4 Service detail pages (15)
Template for ALL service pages:
1. Navy hero: pillar badge · H1 · one-line subtitle · 2–3 sentences naming real techniques · [Book {Service} on WhatsApp] + [View pricing]
2. Breadcrumb back-link + chips: `₹{price}` · `{duration}`
3. Two columns: **"Is this for you?"** (3–4 real situations) | **"What's included"** (6–8 checklist items)
4. **"What we cover"** cards (3–5) with concrete sub-topics and real terminology
5. **"What you'll walk away with"** — REQUIRED on every page: 2–3 concrete deliverables (e.g. "A favourable date range and dates to avoid," "Written summary PDF within 24 hours," "Specific remedies aligned with your current Dasha — no gemstone upselling")
6. Booking card: ONE primary CTA ([WhatsApp to book], green) + ONE secondary ([Use booking form]). **Never more than two booking actions per page section** — the old build stacked four
7. Related services (2–3, cross-pillar where natural: Marriage ↔ Baby Name ↔ Home Vastu)

### 8.5 Marriage page — expanded (flagship)
Same template plus:
- **Family Compatibility** section per §6, with role-based sub-cards (mother-in-law / father-in-law / sister-in-law / brother-in-law / extended family), each describing *dynamics and preparation*, plus the consent note
- **What we analyse** — 6 factors, stated as method not promise: 7th cusp Sub-Lord · Venus & Jupiter placement · Dasha periods for both charts · Kuja/Mangal Dosha (intensity and cancellation factors — framed as analysis, never as threat) · Nakshatra compatibility · Ashtakoota (36-point) combined with KP Sub-Lord analysis
- **Tiered packages** (fixed prices, §9)
- Honesty note: "Matching indicates compatibility tendencies and favourable timing. It does not predict whether a marriage will succeed — that depends on the people in it."

### 8.6 Seed content per service
Expand each into full page copy using the template. Sub-topics harvested from the old site:
- **Career** — course selection, job timing, promotion timing, government vs private, foreign career, competitive exams, business vs job · ₹2,000 · 30–45 min
- **Marriage** — kundali matching (7th cusp Sub-Lord, beyond guna counting), marriage timing for both charts, delayed marriage analysis & remedies, post-marriage harmony, love vs arranged clarity, second marriage possibility, Kuja Dosha analysis, Family Compatibility · tiered, §9 · 45–90 min
- **Childbirth** — progeny timing, conception windows, obstacle analysis, C-section muhurtham support, child's prospects. Careful, respectful tone; no pressure language · ₹2,000 · 45–60 min
- **Finance** — money flow, property purchase timing, financial instability analysis, loan clearance, inheritance, property dispute timing · ₹2,000 · 30–45 min
- **Health** — chart insight that **complements, never replaces** medical care; timing support for planned procedures; stress and wellbeing patterns. **Mandatory disclaimer: "This is not medical advice or diagnosis. Always consult a qualified doctor."** No "diagnosis," no "disease prediction" · ₹2,000 · 30 min
- **Muhurtham** — marriage, Gruha Pravesham, business opening, vehicle purchase, naming ceremonies, travel · ₹2,000 · 30–45 min
- **Prashna** — focused answers without birth details, Yes/No format, lost items, urgent decisions, result timing · ₹1,000 · 15 min
- **Home Vastu** — room-by-room harmony for the home you live in · ₹3,500 · 45–60 min
- **Office Vastu** — layout guidance for work and business flow · ₹3,500 · 45–60 min
- **Plot Vastu** — evaluate land before you buy or build · ₹3,500 · 30–45 min
- **Vastu Remedies** — fix what you can, without breaking walls · ₹3,500 · 30–45 min
- **Name Analysis** — spelling that supports your chart · ₹1,500 · 30–45 min
- **Baby Name** — names parents can actually use, with number harmony · ₹1,500 · 30–45 min
- **Business Name** — name and chart alignment before you print · ₹1,500 · 30–45 min
- **Mobile Number** — method-first number selection · ₹1,500 · 20–30 min

### 8.7 About
Meet Siva Kola ({{YEARS}}+ years, Hyderabad, English/Telugu/Hindi, online worldwide + in-person by appointment) · **Why Divine Jyothi exists** (conflicting-advice story → Timing, Space, Name reviewed together) · **Our approach** (Practical over theatrical / No guaranteed outcomes / Integrated when it matters / Confidential by default) · **What is the KP System?** (K.S. Krishnamurti, Sub-Lord theory, finer segments vs broad windows) · **How we work** bullets · **"What we won't do"** — no fear-mongering, no guaranteed outcomes, no predictions of death or catastrophe, no pushing remedies you don't need, no verdicts about people who aren't in the room · trust strip (verifiable only) · [Message Siva Kola].

### 8.8 Testimonials
Grid from `/data/testimonials.ts`: `{ name, city, service, quote, language: "en" | "te" }`. Filter chips by pillar. Seed with 6 entries marked `// PLACEHOLDER — replace with real client reviews before launch`. Include "Read our reviews on Google" linking to the Google Business profile. Do not reuse the old site's testimonials.

### 8.9 FAQ
Grouped accordions:
- **Booking & sessions** — online or in person? how to prepare? what details do you need? reply time? reschedule policy?
- **Approach & honesty** — "Are outcomes guaranteed?" (No — tendencies and favourable windows, not promises) · "Do you predict death or negative events?" (No) · "What if a reading doesn't match what happens?" · "Will you pressure me to buy remedies?" (No)
- **Family Compatibility** — "Do you analyse my in-laws without telling them?" (No — role-based dynamics only; any individual chart requires that person's knowledge) · "Will you tell me if a relative is a problem?" (No — preparation, not verdicts)
- **Privacy** — birth details and floor plans stay private; recordings only on request
- **Method** — What is KP? Why Sub-Lord theory? How is your Vastu different (remedies without demolition)? Is numerology checked against my chart?

The skeptic-facing questions are the brand's strongest content. Answer them head-on and plainly.

### 8.10 Contact & Book
**Contact:** phone, WhatsApp deep link, email, hours (Mon–Sat 9–9 IST), "Hyderabad — in-person by appointment · Online worldwide," typical reply time.
**Book** (must render in server HTML): name · WhatsApp number · service (select, grouped by pillar) · package tier where applicable · preferred date/time (IST hint) · your question (textarea) · conditional fields — birth details block (date/time/place) for astrology, property type for Vastu, name(s) to check for Numerology. **Directly above the birth-details block: "Your birth details and floor plans stay private. Never shared, never published."** On submit, compose a pre-filled WhatsApp message carrying all form context and open `wa.me/919885099448`; show the note "We'll confirm your slot, then share UPI details for payment." No backend needed for MVP.

### 8.11 Blog (structure only)
Index card grid + 3 static MDX placeholders: "What is the KP Sub-Lord system?", "Vastu without demolition: what actually matters", "How we check a baby name against the chart". No CMS, tags, or comments.

---

## 9. Pricing — FIXED AMOUNTS (no ranges)

All prices are single fixed figures. Ranges are banned — they create ambiguity and invite negotiation. Every figure lives in `/data/pricing.ts` for one-file editing.

**Per-session (from §8.6):** Prashna ₹1,000 · Numerology services ₹1,500 each · KP Astrology services (Career, Childbirth, Finance, Health, Muhurtham) ₹2,000 each · Vastu services ₹3,500 each.

**Marriage tiers** (replacing the old ₹2,000–5,000 / ₹5,000–8,000 / ₹10,000–15,000 ranges — set at the low-to-mid point so no returning visitor sees an increase):

| Tier | Scope | Price | Duration |
|---|---|---|---|
| **Individual** | One chart — 7th house analysis, marriage timing, Kuja Dosha analysis, basic compatibility | **₹3,000** | 45 min |
| **Couple** (most popular) | Both charts — detailed kundali matching, timing for both, Dasha alignment, post-marriage guidance | **₹6,500** | 60–75 min |
| **Family** | Everything in Couple + Family Compatibility review (role-based dynamics, household preparation, ceremony timing) | **₹12,000** | 90 min |

**Packages:** KP Focused Question **₹2,000** (one clear question, 30 min) · KP Full Consultation **₹4,000** (broader life-area review, 45–60 min) · Prashna **₹1,000** (15 min) · **Divine Jyothi Audit** — flagship, Timing + Space + Name reviewed together for one major decision — **{{AUDIT_PRICE}}** (owner to set; suggest ₹8,000–₹10,000 territory, then fix a single figure).

**Payment section copy:** UPI after slot confirmation · no card checkout on the site · free reschedule or cancellation with 24+ hours notice · full refund if we cancel · "Prices are per session. No hidden remedy upselling."

---

## 10. Shared Components

`Logo` (§4) · `HeroCarousel` (§5, slide 1 SSR) · `WhatsAppButton` (pre-fills page-specific context: "Hi Divine Jyothi, I'd like to ask about {service}.") · `BookingBand` (one green + one gold, max) · `SituationCards` (shared Home/Services) · `TrustStrip` (verifiable only; rating links to Google) · `ServiceCard` · `PriceChip` · `DeliverablesList` · `FamilyCompatibilityBlock` · `TestimonialCard` · `FaqAccordion` · `Section` (navy/cream alternation). One floating **"Chat with us"** WhatsApp button bottom-right, all pages — no other floating widgets.

## 11. Data Files

`/data/services.ts` — all 15: `{ slug, pillar, title, subtitle, description, isThisForYou[], included[], covered[], deliverables[], price, duration, tiers?, related[] }`
`/data/pricing.ts` · `/data/packages.ts` · `/data/testimonials.ts` · `/data/faqs.ts` · `/locales/en.ts` · `/locales/te.ts` (vocabulary only, unused this phase)

## 12. Acceptance Checklist

- [ ] `grep -riE "guarantee|accurate prediction|destiny|cosmic|balancing energies|soulmate|india's first|success rate"` returns nothing
- [ ] No client-count or consultation-count figure anywhere; no stats-counter component exists
- [ ] Trust strip shows only verifiable items; 4.9★ links to Google reviews
- [ ] New logo present in header, hero, footer, favicon set — via the `Logo` component, never stretched or recoloured
- [ ] Hero carousel: 4 slides, slide 1 in server HTML, pauses on hover/focus, honours `prefers-reduced-motion`, no layout shift
- [ ] Family Compatibility uses the reframed language; consent note present; no conflict matrix / crisis prediction / power dynamics map
- [ ] Every service page has a "What you'll walk away with" block
- [ ] Health page carries the medical disclaimer; no "diagnosis" or "disease prediction" wording
- [ ] All prices are single fixed figures — no ranges anywhere
- [ ] Max two booking actions per page section; WhatsApp green used only for WhatsApp
- [ ] `/book` and every other page render content in server HTML
- [ ] Each page has a unique meta description (basic tags only; full SEO is Phase 3)
- [ ] No `#` placeholder links anywhere
- [ ] All copy flows through the locale dictionary
- [ ] Booking form shows the privacy line adjacent to birth-details input
- [ ] Builds as standalone output; runs with no external service
- [ ] Lighthouse mobile 90+ on Home and one service page

---

## 13. Execution Plan & Model Switching

This build runs in **six phases**. Each phase names the model it should run on.

**You cannot switch your own model.** `/model` is a user-typed command. At every phase boundary you must:

1. Stop.
2. Print: `PHASE <n> COMPLETE. Next phase runs best on <model>. Run /model <alias> then tell me to continue.`
3. Print a one-paragraph summary of what changed and anything the next phase needs to know.
4. Wait. Do not begin the next phase in the same session turn.

If the user says continue without switching, proceed anyway — the model note is a recommendation, not a gate. Never claim you have switched models.

### Phase 0 — Orientation · model: `opus` · effort `high`
Read this spec end to end. Read `CLAUDE.md`. Inspect the existing repo if one is present. Produce a written implementation plan: file tree, component list, data-file schemas, and the order you intend to build in. **Write no code.** Get the plan approved before Phase 1.

### Phase 1 — Foundation · model: `opus`
Next.js 15 App Router + TypeScript + Tailwind scaffold · `output: 'standalone'` and `trailingSlash: true` · design tokens (navy / cream / gold / WhatsApp green) · `Section`, `Logo`, `WhatsAppButton`, `BookingBand`, `TrustStrip`, `ServiceCard`, `PriceChip`, `DeliverablesList`, `FaqAccordion`, `TestimonialCard` · header and footer · `/locales/en.ts` and `/locales/te.ts` · empty typed data files with full schemas.
Gate: `npm run build` passes; header and footer render; no page content yet.

### Phase 2 — Hero carousel & homepage · model: `opus`
`HeroCarousel` per §5 — 4 slides, **slide 1 in server HTML**, pause on hover/focus, `prefers-reduced-motion` respected, no layout shift, keyboard and touch accessible. Then the full homepage section order from §8.1, including the Family Compatibility feature block.
Gate: homepage renders complete in `curl` output with JS disabled; carousel controls keyboard-navigable.

### Phase 3 — Content population · model: `fable` (or `sonnet`)
Fill `/data/services.ts` with all 15 services from §8.6, `/data/pricing.ts` from §9, plus packages, FAQs, and placeholder testimonials. Then generate all 15 service detail pages against the §8.4 template, the 3 pillar pages, and the services hub. Every service page gets a "What you'll walk away with" block.
This is the largest phase and suits a long autonomous run. Describe the outcome; the model plans the path.
Gate: all 15 pages build and render; no service page is missing a deliverables block.

### Phase 4 — Remaining pages · model: `sonnet`
Pricing, About (including "What we won't do"), Testimonials, FAQ, Contact, Book (§8.10 — **must render server-side**), Blog index with 3 placeholder posts, Privacy, Terms, Refund.
Gate: every route returns content in server HTML; no `#` placeholder links anywhere.

### Phase 5 — Audit · model: `opus` · effort `xhigh`
Run the §12 acceptance checklist as an actual task, not a read-through. Start with:

```bash
grep -riE "guarantee|accurate prediction|destiny|cosmic|balancing energies|soulmate|india's first|success rate|happy clients|consultations completed" src/ app/ data/ locales/
```

This must return nothing. Old-site phrasing is exactly what an AI reaches for when writing astrology copy, so treat any hit as a real defect, not a false positive. Then verify every other checklist item and report pass/fail per line.
Gate: all checklist items pass; Lighthouse mobile 90+ on Home and one service page.

### Phase 6 — Deploy · model: `sonnet` · **requires explicit human approval**
**divinejyothi.com is live and serving real traffic. Never deploy without the user explicitly approving that specific action in the current session.**
Deploy to a Dokploy staging app or preview path first. Show the user the staging URL and wait. Only cut over to production on explicit instruction. Do not run deploy commands inside an autonomous multi-step run.

### Standing rules across all phases
- `{{YEARS}}`, `{{AUDIT_PRICE}}`, the Google Business URL, and the logo files are **owner-supplied**. Never invent a value. If one is missing, leave the placeholder visible and list it in your phase summary.
- Never invent statistics, client counts, ratings, or testimonials.
- If any instruction here conflicts with something already in the repo, stop and ask.
