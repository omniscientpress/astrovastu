# Hero banner image specifications

Use these specs when supplying replacement hero images for divinejyothi.com.

## How heroes work (after full-bleed update)

Each homepage carousel slide uses one **full-width background image** with text overlaid on the left. The image fills the entire hero area — not a small card on the right.

## Deliver 4 images (one per slide)

| Slide | Filename suggestion | Subject |
|-------|---------------------|---------|
| 1 — Brand | `hero-brand.webp` | Integrated guidance / Om / three disciplines |
| 2 — Marriage | `hero-marriage.webp` | Marriage & family compatibility |
| 3 — Vastu | `hero-vastu.webp` | Home, office, or plot / Vastu |
| 4 — Numerology | `hero-numerology.webp` | Names, numbers, chart alignment |

## Exact sizes to design

### Master file (what you send us)

| Spec | Value |
|------|-------|
| **Dimensions** | **1920 × 1280 px** (3:2 ratio) |
| **Optional retina** | 2560 × 1707 px (we downscale) |
| **Format** | PNG or JPG (we convert to WebP) |
| **Colour** | sRGB |
| **Max file size** | Under 3 MB per image (we compress to ~200–350 KB for web) |

This matches the current hero assets (1536×1024) and scales cleanly to desktop, tablet, and mobile.

### Safe zones (important)

```
┌─────────────────────────────────────────────┐
│ ████████████ TEXT ZONE ██████   │  IMAGE  │
│ ████████████ (left 45%) ██████   │ SUBJECT │
│ ██████████████████████████████   │ (right) │
│                                 │         │
│  Keep this area darker or       │  Put    │
│  less busy — text sits here     │  focal  │
│                                 │  point  │
└─────────────────────────────────────────────┘
```

- **Desktop:** Main subject on the **right 55%**. Left side can be darker (navy gradient covers it).
- **Mobile:** Image is full width behind stacked text — keep the **centre** clear and strong; avoid cutting faces or symbols at the edges.
- **Avoid:** Small text baked into the image (site text is HTML).

### What we generate for production

| Breakpoint | Display width | Served size |
|------------|---------------|-------------|
| Mobile | 390–430 px | ~800 px wide WebP |
| Tablet | 768–1024 px | ~1200 px wide WebP |
| Desktop | 1152–1920 px | ~1920 px wide WebP |

You only need **one master per slide** — we handle responsive crops and WebP conversion.

## Logo (header)

- Use **transparent PNG** with gold text only (no black or white box).
- Recommended: **1024 × 682 px** or similar wide ratio.
- Gold reads best on a **dark background** — the header now uses a subtle navy pill behind the logo so it pops on the cream bar.

## Icons (situation cards, pillars, etc.)

| Type | Size | Format |
|------|------|--------|
| Situation icons | 96 × 96 px (SVG preferred) or 192 × 192 PNG | SVG or PNG |
| Pillar icons | 96 × 96 px | SVG or PNG |
| Favicon / app icon | 512 × 512 px | PNG |

SVG is preferred for icons — stays sharp at any size.

## Challenges to expect

1. **Text readability** — Busy images behind text need a dark gradient; we add this in code, but very bright right-side images can still compete with buttons.
2. **File size** — Full-bleed heroes are larger than card thumbnails; each image must be compressed (target ~200–350 KB WebP) or the site loads slowly on mobile data.
3. **Crop on mobile** — One image must work at 16:9 desktop and tall mobile; centre-weighted composition helps.
4. **Four unique assets** — Each slide needs its own image; reusing one image across slides looks repetitive.
5. **Logo on light header** — Gold-on-transparent PNG can look flat on cream; the navy pill fixes this without changing your whole header colour.
6. **No admin panel yet** — Image swaps still go through us (or git) until the admin panel is built in a few months.

## Current assets in repo

```
public/graphics/hero/
  hero-integrated-guidance.webp  (1536×1024) — slide 1
  hero-marriage-family.webp      (1536×1024) — slide 2
  hero-vastu-space.webp          (1536×1024) — slide 3
  hero-numerology-name.webp      (1536×1024) — slide 4
```

Replace these files (or send new masters) when your final artwork is ready.
