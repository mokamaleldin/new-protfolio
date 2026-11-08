# Assets & Configuration Notes (`CONTENT_TODO.md`)

## 1. Visual Assets

| Asset Path | Current State |
| :--- | :--- |
| `public/images/profile/profile-sawad.webp` | Active portrait photograph referenced in `src/data/site-config.ts`. |
| `src/components/projects/ProjectCoverFallback.tsx` | Unified 16:10 SVG conceptual cover illustrations for all 5 published projects (`id8-media`, `kashida`, `duthur`, `7analaan`, `sahwa`) with localized `alt` text in English and Arabic. |

## 2. External Email Delivery (`RESEND_API_KEY`)

- `CONTACT_FROM_EMAIL` and `CONTACT_RECIPIENT_EMAIL` (`mohammed.kamal.eliwa@gmail.com`) are supported in `/api/contact`.
- Add `RESEND_API_KEY` in Vercel project settings (`new-protfolio` -> Settings -> Environment Variables) and redeploy to activate live email delivery from the contact form, then send a live test message to verify inbox receipt.
