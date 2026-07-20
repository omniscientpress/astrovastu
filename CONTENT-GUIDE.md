# Content Guide (AstroVastu)

Edit **only** files inside `/content`. After editing in the GitHub web editor, commit to `main` — Dokploy redeploys in a few minutes.

Invalid JSON or schema mismatches **fail the build** (Zod). That is intentional.

## Update WhatsApp / phone / stats

File: `content/site.json`

- `whatsapp` — digits only with country code (example: `919876543210`)
- `phone`, `email`, `hours`, `city`, `stats`

## Add a testimonial

File: `content/testimonials.json`

1. Copy an existing object in the array.
2. Set a unique `id`.
3. Fill `name`, `location`, `service` (`kp` | `vastu` | `numerology`), `rating` (1–5), `text`, `date`.
4. Set `approved: true` to show on the site.
5. Set `featured: true` to show on the Home page.
6. Commit.

## Add / edit an FAQ

File: `content/faqs.json`

- `category`: `general` | `astrology` | `vastu` | `numerology` | `pricing`

## Change pricing

File: `content/pricing.json`

Update `price`, `priceLabel`, `inclusions`, `duration`. Keep `id` stable if possible.

## Edit a service pillar

Files:

- `content/services/kp-astrology.json`
- `content/services/vastu.json`
- `content/services/numerology.json`

Do not change `slug` values.

## Need a new field?

Ask the developer to extend the Zod schema in `lib/content.ts` first — then add the field to JSON.
