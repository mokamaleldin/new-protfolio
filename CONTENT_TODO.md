# Assets & Content Verification Checklist (`CONTENT_TODO.md`)

This document tracks assets that currently use clean typographic placeholders or items flagged for final owner confirmation before public launch.

## 1. Replaceable Visual Assets

| Asset Path | Current State | Action Needed |
| :--- | :--- | :--- |
| `public/images/profile/profile-main.webp` | Authentic studio photograph of Mohamed Kamaleldin composited onto Sawad's warm orange backdrop | Replace file directly whenever a newer portrait session photo is preferred (`src/data/site-config.ts`). |
| `public/images/projects/7analaan/cover.png` | Real screenshot of the live `7analaan.com` platform | Ready for production. |
| `public/images/projects/kashida/cover.webp` | Clean `KS / 01` typographic card treatment (`placeholder: true` in `src/data/projects.ts`) | Drop approved public screenshot of `kashida.io` and set `placeholder: false`. |
| `public/images/projects/id8media/cover.webp` | Clean `ID8 / 02` typographic card treatment (`placeholder: true`) | Add publicly shareable broadcast/news interface screenshot approved for portfolio use. |
| `public/images/projects/sahwa/cover.webp` | Clean `SW / 03` typographic card treatment (`placeholder: true`) | Add public screenshot of `sahwa.world`. |
| `public/images/projects/duthur/cover.webp` | Clean `DT / 05` typographic card treatment (`placeholder: true`) | Add storefront screenshot from `duthur.co` or the standalone Next.js + Supabase store. |
| `public/images/projects/skillhours/cover.webp` | Clean `SH / 06` typographic card treatment (`placeholder: true`) | Add iOS Simulator / device screenshots (EN & AR dark/light scenes) and set `placeholder: false`. |

## 2. Content & Configuration Items to Confirm

1. **Recommendation #6 Surname (`src/data/recommendations.ts`):**
   - Currently displayed as **Enas Khaled** (`إيناس خالد`) matching the primary LinkedIn heading. Confirm whether she prefers `Enas Khaled` or `Enas Abuiweimer` publicly.
2. **Optional Telegram Link (`src/data/socials.ts`):**
   - `telegram` is configured in `src/data/socials.ts` with `enabled: false` and `href: undefined` so no unverified handle is shown. Set `enabled: true` and provide `href` if you want Telegram visible in the profile card.
3. **DUTHUR Storefront Cutover Note (`src/data/projects.ts`):**
   - Case study accurately distinguishes the live `duthur.co` storefront from the standalone trilingual Next.js + Supabase platform (`duthur-website`). Update once the DNS cutover is finalized.
4. **SkillHours Store Links (`src/data/projects.ts`):**
   - No App Store or Google Play URLs are fabricated. Once published to App Store Connect, add `liveUrl` to the `skillhours` entry in `src/data/projects.ts`.
