# Divine Jyothi — Visual Refinement & n8n Integration Plan

**Created:** 2026-08-05  
**Status:** Active working document  
**Related:** `BUILD-SPEC.md` · `CLAUDE.md` · `../assets/README.md` · `../../n8n-packs/astrology-pack/README.md`

This plan captures the site-wide visual improvements and n8n automation integration roadmap. The website build (Phases 0–5) is complete; this document covers what comes next.

---

## Current state summary

| Track | Status |
|---|---|
| Website v2 build (36 pages) | Complete — live at divinejyothi.com |
| Brand assets (logo, favicons, portrait) | In repo at `public/brand/` and `public/photos/` |
| Custom icons / hero graphics | **Not built** — site uses generic Lucide icons + repeated logo mark |
| Owner content placeholders | **Still missing** — see § Owner-supplied content |
| n8n workflow pack | Built in `n8n-packs/astrology-pack/` — **not deployed or wired to site** |
| KP API | Phase 2 complete in `kp/` — **not running in production** |
| Deploy pipeline | Hostinger VPS + Dokploy — manual deploy, no CI in repo |

---

## Part 1 — Why the site feels visually dull

| Area | Current state | Gap |
|---|---|---|
| **Hero carousel** | Same logo mark on all 4 slides; flat `#1e1b4b` navy | No slide-specific visuals; no depth, texture, or motion |
| **Situation cards** | Text-only cards with arrow | Spec calls for 8 custom situation icons — not built |
| **Three-pillar method** | Text cards with em-dashes | No pillar icons (Timing / Space / Name) |
| **How it works** | Numbered circles (1–4) | Spec calls for 4 step icons |
| **Service pages** | Navy text hero, no imagery | No service-specific line-art or photo |
| **Section rhythm** | Alternating navy/cream blocks | No dividers, ornaments, or visual breaks |
| **Testimonials** | Section hidden (empty data) | Homepage loses social proof entirely |
| **Blog** | 3 placeholder posts | No live content pipeline |
| **Trust strip** | Text chips only | Missing Google link, years experience (placeholders) |

**Brand constraint:** The spec bans zodiac wheels, starfields, glowing mandalas, and purple "cosmic" gradients. Allowed direction: **minimal gold line-art** derived from the logo mark, Sri Yantra as a flat watermark, and custom stroke icons.

---

## Part 2 — Hero banner refinement (Priority 1)

### Current implementation

Every slide in `components/HeroCarousel.tsx` shows the **same logo mark**. No background texture, slide art, or iconography.

### Proposed hero architecture

```
┌─────────────────────────────────────────────────────────────┐
│  [subtle Sri Yantra watermark @ 4% opacity]                 │
│  ┌──────────────────────┐  ┌─────────────────────────────┐  │
│  │ Badge                │  │  SLIDE-SPECIFIC VISUAL      │  │
│  │ H1                   │  │  (gold line-art panel)      │  │
│  │ Subtitle + body      │  │  + small logo mark corner   │  │
│  │ [WhatsApp] [Book]    │  │                             │  │
│  └──────────────────────┘  └─────────────────────────────┘  │
│  ◀  ● ● ● ●  ▶                                              │
└─────────────────────────────────────────────────────────────┘
```

### Per-slide visual concept

| Slide | Visual | Description |
|---|---|---|
| **1 — Brand** | Three-pillar triptych | Clock/calendar (Timing), floor plan (Space), name glyph (Name) — connected by thin gold lines |
| **2 — Marriage** | Family tree line-art | Abstract nodes for couple + elder roles (not faces) |
| **3 — Vastu** | Floor plan sketch | Simple room layout with directional markers |
| **4 — Numerology** | Name + number grid | Stylized letterforms with number alignment lines |

### Technical implementation

**Phase A — Asset creation (1–2 days)**

1. Create `/public/graphics/hero/` with 4 SVG illustrations (~200×200 viewBox, single-stroke gold `#e9c163`)
2. Create `/public/graphics/ornaments/`:
   - `sri-yantra-watermark.svg` — flat line-art, 3–5% opacity
   - `divider-flourish.svg` — horizontal gold rule between sections
   - `corner-bracket.svg` — optional frame for visual panel
3. Optionally create the 8 situation + 3 pillar + 4 step icons listed in `assets/README.md`

**Phase B — Component refactor (1 day)**

1. Extend slide data in `locales/en.ts`:

```typescript
{
  id: 'marriage',
  visual: '/graphics/hero/marriage-family.svg',
  visualAlt: 'Family compatibility illustration',
  // ...existing fields
}
```

2. Create `components/graphics/HeroVisual.tsx` — slide SVG with gold stroke, optional fade-in (respect `prefers-reduced-motion`)
3. Update `HeroCarousel.tsx`:
   - Replace static `<Logo>` with `<HeroVisual slide={slide} />`
   - Add watermark layer behind content
   - Add subtle radial gradient: `bg-[radial-gradient(ellipse_at_top_right,_#2e2871_0%,_#1e1b4b_70%)]`
4. Keep slide 1 in server HTML (spec requirement)

**Phase C — Polish (half day)**

- Gold `divider-flourish` between hero and trust strip
- Slide transition: crossfade + optional 8px upward text motion
- Mobile: visual above H1

**Do not do:**

- Animated starfields, particle effects, or zodiac wheels
- Different colored backgrounds per slide
- Stock astrology illustrations

---

## Part 3 — Site-wide visual improvements

### Tier 1 — High impact, low risk (do with hero)

| # | Improvement | Where | Effort |
|---|---|---|---|
| 1 | **Situation card icons** | `SituationCards.tsx` — 48px gold stroke icon per card | 4h icons + 1h code |
| 2 | **Pillar icons in method section** | Homepage three-pillar cards | 2h |
| 3 | **Step icons in How It Works** | Replace numbered circles with icon + number combo | 2h |
| 4 | **Section divider ornament** | Between major homepage sections | 1h |
| 5 | **Service card pillar tint** | Subtle left-border color per pillar | 2h |

### Tier 2 — Page-level depth (after hero)

| # | Improvement | Where | Notes |
|---|---|---|---|
| 6 | **Service page mini-hero art** | One line-art per service (15 SVGs) | Start with top 4: marriage, career, home-vastu, baby-name |
| 7 | **Pillar page hero panels** | `/services/astrology`, `/vastu`, `/numerology` | 3 SVGs |
| 8 | **About page photos** | Consulting space, Hyderabad context | Needs owner-supplied photos |
| 9 | **Founder portrait refresh** | Current portrait has starfield/cosmic geometry background — conflicts with brand rules | Re-crop to plain navy/gold vignette |
| 10 | **Pricing page visual hierarchy** | Tier comparison table with pillar color coding | UX improvement |
| 11 | **Book page illustration** | "What happens next" timeline with step icons | Reduces form-page dryness |

### Tier 3 — Content & trust (launch blockers)

| # | Improvement | File / location |
|---|---|---|
| 12 | **Real testimonials** | `data/testimonials.ts` — currently empty array |
| 13 | **Google Business link** | `lib/config.ts` → `googleBusinessUrl` |
| 14 | **Years of experience** | `lib/config.ts` → replace `{{YEARS}}` |
| 15 | **Audit package price** | `data/pricing.ts` → replace `{{AUDIT_PRICE}}` |
| 16 | **Social links** | `lib/config.ts` → facebook, instagram, youtube |
| 17 | **Blog content** | 3 placeholder posts → real articles or hide section |

### Tier 4 — SEO & post-launch (BUILD-SPEC Phase 3)

| Item | Current | Needed |
|---|---|---|
| `sitemap.xml` | Missing | Generate at build |
| Schema.org | Missing | LocalBusiness + Service markup |
| OG images | Generic icon-512 | Per-page or dynamic OG with brand template |
| Telugu locale | Vocabulary in `te.ts`, not rendered | Post-launch |

---

## Part 4 — Visual system additions

### New shared components

```
components/graphics/
  HeroVisual.tsx          ← slide-specific hero art
  SituationIcon.tsx       ← maps situation → SVG
  PillarIcon.tsx          ← timing | space | name
  StepIcon.tsx            ← booking flow steps
  OrnamentDivider.tsx     ← gold flourish between sections
  YantraWatermark.tsx     ← reusable low-opacity background
```

### Color extensions (tailwind.config.js)

```javascript
pillar: {
  timing: '#e9c163',   // gold (astrology)
  space: '#7f9e8b',    // muted sage (vastu)
  name: '#c4ac86',     // warm cream-gold (numerology)
}
```

Use as left-border or icon color only — not full section backgrounds.

### Icon style guide

- **Stroke:** 1.5px, round caps
- **Color:** `#e9c163` (gold-300) on navy; `#a67322` (gold-600) on cream
- **Size:** 24×24 (inline), 48×48 (cards), 200×200 (hero panels)
- **Source:** Derive curves from logo mark geometry — not generic Lucide
- **Full list:** `assets/README.md`

---

## Part 5 — n8n workflow integration

### Architecture

```
Public layer          Automation layer (n8n on VPS)       Backend
─────────────         ─────────────────────────────       ────────
divinejyothi.com  ──► Workflow 10: Consultation Intake ──► kp-report-api :8000
  /book form          Workflow 20: Daily Horoscope
WhatsApp inbound  ──► Workflow 30: WhatsApp Agent    ──► Vector store (FAQ + site content)
                      Workflows 00/01/02: infra
```

### Workflow 10 — Consultation Intake (highest website value)

**What it does:** Booking form → validates birth data → calls KP API → generates astrologer prep brief → emails you.

**Current gap:** `BookForm.tsx` submits to WhatsApp only — no structured data capture.

**Integration steps:**

| Step | Action |
|---|---|
| 1 | Deploy `kp-report-api` on VPS at `http://kp-api:8000` (Docker, same Dokploy stack) |
| 2 | Deploy n8n on VPS; import all 6 workflows; configure credentials |
| 3 | Set workflow 10 CONFIG: `KP_API_BASE`, `ASTROLOGER_EMAIL`, sub-workflow IDs |
| 4 | Expose webhook: `https://n8n.divinejyothi.com/webhook/astro/intake` |
| 5 | Add `app/api/intake/route.ts` — proxy POST to n8n (keeps webhook URL private) |
| 6 | Upgrade `BookForm.tsx`: on submit → POST to `/api/intake` **and** open WhatsApp |

**BookForm payload:**

```json
{
  "name": "...",
  "phone": "+91...",
  "service": "Marriage & Relationships",
  "preferred_time": "...",
  "question": "...",
  "birth_date": "1990-05-15",
  "birth_time": "14:30",
  "birth_place": "Hyderabad",
  "lat": 17.385,
  "lon": 78.486,
  "tz": 5.5,
  "time_confidence": "exact"
}
```

**UX:** Loading state while processing → success message → WhatsApp fallback on KP API error.

---

### Workflow 20 — Daily Horoscope Pipeline

**What it does:** Scheduled 05:00 IST → generates 12 signs → voice-check → publishes to site + WhatsApp + email.

**Website integration:**

| Step | Action |
|---|---|
| 1 | Add `app/api/revalidate/horoscope/route.ts` — secured with `REVALIDATE_SECRET` |
| 2 | Create `data/horoscope.ts` or JSON file updated by n8n |
| 3 | Add `/blog/daily-horoscope/` page or homepage widget |
| 4 | Set workflow 20 CONFIG: `SITE_PUBLISH_URL` |

**Alternative:** n8n writes JSON to repo or S3; Next.js reads at build/revalidate.

---

### Workflow 30 — WhatsApp Agent

**What it does:** Inbound WhatsApp → classify intent → RAG answer from site content → or escalate to human.

**Website integration (mostly config):**

| CONFIG key | Set to |
|---|---|
| `BOOKING_LINK` | `https://divinejyothi.com/book/` |
| `PRICING_TEXT` | Summary from `/data/pricing.ts` |
| `VECTOR_SEARCH_URL` | Vector DB endpoint |

**Vector store content to ingest (one-time):**

- All 15 service descriptions from `data/services.ts`
- FAQ entries from `data/faqs.ts`
- Pricing from `data/pricing.ts`
- About/method copy from `locales/en.ts`

---

### Workflows 00, 01, 02 — Infrastructure

- **00 Error Handler:** Slack/Discord alerts on workflow failure
- **01 Claude Call:** Shared by 10/20/30 — do not call from website
- **02 Voice Guard:** Regex enforcement for banned phrases

---

### n8n deployment checklist

```
Infrastructure (VPS / Dokploy)
├── [ ] n8n container (persistent volume for credentials)
├── [ ] kp-report-api container (port 8000, Swiss Ephemeris deps)
├── [ ] Reverse proxy: n8n.divinejyothi.com (webhooks only, auth on admin UI)
└── [ ] Environment: ANTHROPIC_API_KEY, SMTP, optional WhatsApp provider

n8n setup
├── [ ] Import 6 workflows from n8n-packs/astrology-pack/workflows/
├── [ ] Create credentials: Anthropic (x-api-key header!), WhatsApp, Vector Store
├── [ ] Copy workflow IDs of 01 + 02 into CONFIG of 10, 20, 30
├── [ ] Set 00 as error workflow on 10, 20, 30
├── [ ] Run: node tools/validate.mjs && node tools/test-logic.mjs
└── [ ] Activate workflows one at a time (10 first, then 30, then 20)

Website changes (astrovastu)
├── [x] app/api/intake/route.ts — proxy to n8n webhook (needs N8N_INTAKE_WEBHOOK env)
├── [ ] app/api/revalidate/horoscope/route.ts — for workflow 20
├── [x] BookForm.tsx — dual submit (API + WhatsApp)
├── [ ] Optional: horoscope display page
└── [ ] Environment: N8N_INTAKE_WEBHOOK, REVALIDATE_SECRET

Vector store (for workflow 30)
├── [ ] Ingest site content
├── [ ] Ingest any PDF guides / past blog posts
└── [ ] Test: "how much is career consultation?" → correct ₹2000 answer
```

**Estimated monthly cost:** ~$20–25 (tokens) + $6–12 VPS.

---

## Part 6 — Owner-supplied content

These values are **intentionally left as placeholders** in code. Do not invent them.

| Field | File | Current value |
|---|---|---|
| Years of experience | `lib/config.ts` | `{{YEARS}}` |
| Combined audit price | `data/pricing.ts` | `{{AUDIT_PRICE}}` |
| Google Business URL | `lib/config.ts` | empty string |
| Facebook URL | `lib/config.ts` | empty string |
| Instagram URL | `lib/config.ts` | empty string |
| YouTube URL | `lib/config.ts` | empty string |
| Testimonials | `data/testimonials.ts` | empty array |
| Custom photos | `assets/photos/` | not dropped yet |
| Custom icons | `assets/icons/` | not dropped yet |

Drop raw originals into `assets/` — see `assets/README.md` for the full list.

---

## Part 7 — Execution order (sprints)

### Sprint 1 — Visual lift (1 week)

1. Create hero SVG set (4 slides) + Sri Yantra watermark + divider ornament
2. Refactor `HeroCarousel` with `HeroVisual` component
3. Add situation icons to homepage cards
4. Add pillar icons to method section
5. Add step icons to How It Works

### Sprint 2 — Launch content (3–5 days)

6. Collect real testimonials (3–4 minimum)
7. Supply `{{YEARS}}`, `{{AUDIT_PRICE}}`, Google Business URL
8. Re-process founder portrait (remove cosmic background)
9. Add consulting-space photo to About/Contact

### Sprint 3 — n8n Phase 1 (1 week)

10. Deploy KP API + n8n on VPS
11. Wire workflow 10 (intake) to booking form
12. Test end-to-end: form submit → chart → email brief

### Sprint 4 — n8n Phase 2 (1 week)

13. Set up vector store; ingest site content
14. Wire workflow 30 (WhatsApp agent)
15. Configure escalation alerts

### Sprint 5 — Content automation (ongoing)

16. Wire workflow 20 (daily horoscope) + site revalidate hook
17. SEO: sitemap, schema.org, OG images
18. Service page hero art (top 4 services first)

### Sprint 6 — Deploy (explicit approval required)

19. Staging on Dokploy → review → production cutover

**Deploy safety:** divinejyothi.com is live. Never deploy without explicit approval in the current session. Staging first, always.

---

## Part 8 — Quick wins (start here today)

Highest visual return for least effort:

1. **Hero slide-specific SVGs** — replaces repeated logo mark
2. **Situation card icons** — 8 small gold icons for the "I need help with…" grid
3. **Sri Yantra watermark + gold divider** — depth on navy sections without breaking brand rules

Highest automation value:

1. **Workflow 10 → BookForm** — automated chart prep for every booking

---

## Workspace map

```
C:\projects\DJ\
├── astrovastu/              ← Main website (this repo)
│   ├── docs/
│   │   ├── BUILD-SPEC.md
│   │   └── VISUAL-AND-N8N-PLAN.md   ← this file
│   ├── public/brand/        ← logo, favicons
│   ├── public/photos/       ← founder portrait
│   └── public/graphics/     ← TO CREATE (hero SVGs, ornaments)
├── assets/                  ← drop raw originals here
├── kp/                      ← KP report API (Phase 2)
├── kp-report-api/           ← slim copy for n8n
├── n8n-packs/astrology-pack/← automation workflows
└── _DivineJyothi/           ← legacy v1 (superseded)
```

**Git remote:** `https://github.com/omniscientpress/astrovastu.git`  
**Production:** `https://divinejyothi.com` (Hostinger VPS via Dokploy)
