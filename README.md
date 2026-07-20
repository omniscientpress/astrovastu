# AstroVastu v2

Lead-generation website for **AstroVastu** — KP Astrology · Vastu · Numerology.

WhatsApp-first conversion. Git-based content. Postgres for clients/bookings. Deployed via Docker on Dokploy (Hostinger VPS).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Zod-validated `/content` JSON (marketing copy)
- Prisma + PostgreSQL (clients, inquiries, bookings)
- `output: standalone` for Docker

## Quick start

```bash
cp .env.example .env
npm install
npx prisma generate
npm run dev
```

Open http://localhost:3000

## Forms / admin

- Booking (`/book/`) and inquiry (`/contact/`) work without Postgres — they still return a WhatsApp confirm link.
- To persist clients/bookings: set `DATABASE_URL`, then `npx prisma migrate dev --name init`.
- Optional email notifications: set `RESEND_API_KEY` and `RESEND_FROM_EMAIL`.
- Admin dashboard: set `ADMIN_PASSWORD`, open `/admin/`.

## Content edits

Non-devs edit files under `/content` only. See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm start` | Start standalone server |
| `npm run lint` | ESLint |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:migrate` | Run migrations (needs DATABASE_URL) |

## Phase status

**Phase 1 complete:** scaffold, design tokens, layout shell, content loaders, Prisma schema, Docker, brand logos.

**Phase 2 complete:** full pillar pages, booking → API/DB, contact inquiry API (Resend-ready), password-protected admin.

**Next (Phase 3):** SEO/schema/GA4, then Dokploy deploy when domain is ready.
