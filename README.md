# Mohamed Kamaleldin — Personal Portfolio (`mokamaleldin`)

Personal portfolio website for **Mohamed Kamaleldin (محمد كمال الدين)** — **Media Technology & AI Automation Engineer** specializing in Systems Analysis, Solution Design, Workflow Optimization, Software Engineering, and AI Automation.

The visual layout, typography, color system, sticky profile card, floating icon navigation, feature cards, and section rhythm faithfully recreate the **Sawad** portfolio reference while presenting Mohamed's verified professional work, career history, ventures, and LinkedIn recommendations in **English (LTR)** and **Arabic (RTL)**.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript 5
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Localization & RTL:** `next-intl` (`/en` and `/ar` with native `dir="rtl"` support)
- **Motion:** `motion` (`motion/react`) with `prefers-reduced-motion` support
- **3D / WebGL:** `three`, `@react-three/fiber`, `@react-three/drei` (restrained orbital decoration on the profile card with automatic SVG fallback and hardware/reduced-motion gating)
- **Icons:** `lucide-react` + custom social/brand SVGs
- **Validation:** `zod` (client + server validation on `/api/contact`)
- **Testing:** `vitest`

---

## Project Structure

```text
new-protfolio/
├─ public/
│  └─ images/
│     ├─ profile/profile-main.webp      # Single profile portrait swap point
│     ├─ projects/{kashida,id8media,sahwa,7analaan,duthur,skillhours}/
│     └─ branding/{mk-dark.svg,mk-light.svg}
├─ src/
│  ├─ app/
│  │  ├─ [locale]/                      # Localized routes (/en, /ar)
│  │  │  ├─ page.tsx                    # Homepage
│  │  │  ├─ projects/page.tsx           # Selected Projects
│  │  │  ├─ projects/[slug]/page.tsx    # Individual Case Study pages
│  │  │  ├─ experience/page.tsx         # Experience, 4-Stage Approach & 9 Recommendations
│  │  │  ├─ tools/page.tsx              # Categorized Engineering Tools
│  │  │  └─ contact/page.tsx            # Dedicated Contact page
│  │  ├─ api/contact/route.ts           # Validated contact endpoint + Resend / mailto fallback
│  │  ├─ icon.svg                       # MK Monogram browser favicon
│  │  ├─ apple-icon.tsx                 # Apple Touch Icon generator
│  │  ├─ sitemap.ts & robots.ts         # SEO crawlers
│  ├─ components/
│  │  ├─ layout/                        # SiteShell, FloatingNavigation, ProfileCard, Footer
│  │  ├─ home/                          # Hero, Stats, FeatureCards, RecentProjects, Ventures...
│  │  ├─ projects/                      # ProjectRow, ProjectDetail, ProjectCoverFallback
│  │  ├─ experience/                    # ExperienceItem, RecommendationCard
│  │  ├─ sections/                      # SectionHeading, ToolsGrid, ContactSection
│  │  ├─ three/                         # ProfileOrbit (R3F), OrbitFallback (SVG), useCanRender3D
│  │  └─ motion/                        # Reveal animation wrapper & Sawad spring constants
│  ├─ data/                             # Single source of truth for all portfolio content
│  │  ├─ site-config.ts
│  │  ├─ projects.ts
│  │  ├─ experience.ts
│  │  ├─ recommendations.ts
│  │  ├─ tools.ts
│  │  ├─ socials.ts
│  │  └─ ventures.ts
│  ├─ i18n/                             # next-intl routing & navigation
│  ├─ messages/                         # en.json & ar.json interface strings
│  └─ lib/                              # Dynamic experience duration calculator & date helpers
└─ CONTENT_TODO.md                      # List of optional asset replacements & verifications
```

---

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` (redirects automatically to `/en`, with `/ar` available via the top navigation toggle).

### Verification Scripts

```bash
npm test          # Runs Vitest unit tests (dynamic career duration from Sept 30, 2021)
npm run typecheck # Runs TypeScript strict check
npm run build     # Builds production Next.js bundle
```

---

## Updating Content & Replacing the Profile Photo

1. **Replacing Mohamed's Portrait Photo:**
   Replace `/public/images/profile/profile-main.webp` (or update `siteConfig.profileImage.src` in `src/data/site-config.ts`).
2. **Adding or Editing Projects:**
   Edit `src/data/projects.ts`. Any project with `status: 'published'` and `featured: true` automatically appears on the homepage, `/projects`, `/sitemap.xml`, and updates the `FEATURED PROJECTS` hero counter.
3. **Enabling Email Delivery (Resend):**
   Verify a sending domain in Resend, then set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (an address on that verified domain), and `CONTACT_RECIPIENT_EMAIL` in Vercel's Production environment. Never commit API keys. Until the key and sender are configured, the form clearly informs the visitor and opens their default mail client pre-addressed to `mohammed.kamal.eliwa@gmail.com`.
4. **Connecting Custom Domain (`mokamaleldin.com`):**
   Set `NEXT_PUBLIC_SITE_URL=https://mokamaleldin.com` in Vercel's Production environment for canonical URLs and sitemap generation. Add the apex and `www` domains to the project, redirect `www` to the apex, and copy the project's recommended DNS records into GoDaddy.
5. **Visitor Analytics & Performance:**
   The localized root layout includes Vercel Web Analytics and Speed Insights for both English and Arabic routes. Enable each feature in the Vercel project dashboard and redeploy. Web Analytics reports visitors and page views; Speed Insights measures real visitor performance. Keep the included tiers unless an upgrade is explicitly wanted.
