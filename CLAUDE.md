# Divine Jyothi — Project Rules

Full spec: `docs/BUILD-SPEC.md`. Read it before any build work, and read §13 for the phase you are in.

## Project
Next.js 15 App Router · TypeScript · Tailwind · static-first (SSG) · `output: 'standalone'` · `trailingSlash: true`.
Deploys to a Hostinger VPS via Dokploy. **No Vercel-only features. No CMS. No payment gateway. No database.**

Three pillars: KP Astrology (Timing) · Vastu (Space) · Numerology (Name).
Practitioner: Siva Kola, Hyderabad. Booking runs through WhatsApp → slot confirmed → UPI payment.

## Voice — the most important rule in this repo

Divine Jyothi sells clarity in a category built on fear. All copy is practical, specific, and grown-up. Name real techniques (7th cusp Sub-Lord, Dasha periods, Nakshatra compatibility) instead of mystical filler.

**Never write any of these:**
`guarantee` · `guaranteed outcomes` · `money back guarantee` · `satisfaction guarantee` · `accurate predictions` · `unlock your destiny` · `destiny` · `cosmic wisdom` · `cosmic contract` · `decoding your destiny` · `balancing energies` · `written in the stars` · `soulmate` · `India's first` · `revolutionary` · `the hard truth about…` · any success-rate percentage · any statistic or study citation · `exact month` · `with remarkable accuracy` · fear framing (doshas as threats, manufactured anxiety followed by a paid remedy).

The previous site at divinejyothi.com used all of the above. When writing astrology copy, that phrasing is the default an LLM reaches for. Check yourself.

**Instead of a guarantee:** "Free reschedule or cancellation with 24+ hours notice. Full refund if we cancel."

## Hard constraints

- **No invented facts.** No client counts, consultation counts, ratings, success rates, or testimonials. If a number is needed and not supplied, leave the placeholder.
- **Owner-supplied values** — never fill these in yourself: `{{YEARS}}`, `{{AUDIT_PRICE}}`, the Google Business profile URL, logo files in `/public/brand/`.
- **Prices are single fixed figures.** Never a range.
- **Every service page** needs a "What you'll walk away with" deliverables block.
- **Health service:** no "diagnosis" or "disease prediction". Medical disclaimer required.
- **Family Compatibility:** preparation, not prediction. Describe household dynamics and tendencies, never verdicts about individuals. Any relative's chart requires that person's knowledge. No conflict matrix, no crisis prediction, no power dynamics map. See spec §6.
- **Max two booking actions** per page section. WhatsApp green is only for WhatsApp.
- **Every page renders content in server HTML.** No client-only pages.
- All UI strings go through `/locales/en.ts`.

## Deploy safety

divinejyothi.com is **live and serving real traffic**. Never deploy without explicit human approval in the current session. Staging or preview first, always. Never run deploy commands inside an autonomous multi-step run.

## Before finishing any content work

```bash
grep -riE "guarantee|accurate prediction|destiny|cosmic|balancing energies|soulmate|india's first|success rate|happy clients|consultations completed" src/ app/ data/ locales/
```

Must return nothing.
