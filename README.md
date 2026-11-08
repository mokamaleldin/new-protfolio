# Mohamed Kamaleldin — Client-Facing Portfolio (`mokamaleldin`)

Professional bilingual portfolio website for **Mohamed Kamaleldin (محمد كمال الدين)** — **Media Technology & AI Automation Engineer** specializing in Systems Analysis, Solution Design, Workflow Optimization, Software Development, and AI Automation for media organizations, businesses, and brands.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript 5
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Localization & RTL:** `next-intl` (`/en` default and `/ar` with native `dir="rtl"` support)
- **Motion:** `motion` (`motion/react`) with `prefers-reduced-motion` support
- **Icons & Illustrations:** `lucide-react` + unified 16:10 SVG project covers
- **Validation:** `zod` (client + server validation on `/api/contact`)
- **Testing:** `vitest`

---

## Site Architecture

| English | العربية | Route |
|---|---|---|
| Home | الرئيسية | `/en` or `/ar` |
| Projects | المشاريع | `/[locale]/projects` |
| How I Work | طريقة العمل | `/[locale]/approach` (with permanent redirect from `/[locale]/tools`) |
| Experience | الخبرة | `/[locale]/experience` |
| Contact | تواصل | `/[locale]/contact` |

---

## Verification Scripts

```bash
npm test          # Runs Vitest unit tests (career duration + /api/contact endpoint tests)
npm run typecheck # Runs TypeScript strict check
npm run build     # Builds production Next.js bundle
```

---

## Email Delivery Configuration (`/api/contact`)

To enable direct server-side email delivery via Resend in production:
1. Verify your sending domain (`mokamaleldin.com`) in Resend.
2. Set the following environment variables in Vercel (`Settings > Environment Variables`):
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_FROM_EMAIL`: An authorized address on your verified domain (e.g., `Portfolio Contact <contact@mokamaleldin.com>`)
   - `CONTACT_RECIPIENT_EMAIL`: `mohammed.kamal.eliwa@gmail.com`
3. When `RESEND_API_KEY` or `CONTACT_FROM_EMAIL` is missing or an upstream error occurs, `/api/contact` returns an explicit error status (`503` / `502`), keeps the visitor's message intact on the page for retry, and never redirects automatically to `mailto:`.
