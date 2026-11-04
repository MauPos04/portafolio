# Mauricio Posada Palma — portfolio

Personal portfolio built with Next.js 14 (App Router), React 18, TypeScript and Tailwind CSS.

Current version: **0.3.0** (local, not yet released). See [CHANGELOG.md](CHANGELOG.md).

## Structure

The site is split into three tabs, each with its own URL:

| Route | Content |
|---|---|
| `/` (Overview) | Hero, current role, featured certifications, stack and four selected projects |
| `/projects` | AI & Data Science, Web & Product, design sketches and other projects |
| `/experience` | Work experience, certifications, technologies and recommendations |

The header (name, tabs and Contact) and the Contact block live in `app/layout.tsx`, so every route shows them. Old single-page links such as `/#projects` are redirected by `components/LegacyHashRedirect.tsx`.

All content comes from `data/index.ts`. Private projects are listed without links, screenshots of internal systems or confidential details.

## Design system

- Dark-only zinc palette defined as CSS variables in `app/globals.css` and mapped in `tailwind.config.ts`.
- One accent color (`--accent`, blue #60A5FA) used only for links, the focus ring and the active tab.
- Inter for text and JetBrains Mono for metadata, both loaded with `next/font` (the build needs network access to fetch them).
- No infinite animations; transitions are 150–200 ms and `prefers-reduced-motion` is respected.

## Scripts

```bash
npm run dev     # development server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Versioning and build info

- The version lives in `package.json`; every product change gets a SemVer bump and a dated CHANGELOG entry. From v0.3.0 on, commit messages use `[vX.Y.Z] Summary`.
- `next.config.mjs` exposes the version, build date and the first 7 characters of the commit (`VERCEL_GIT_COMMIT_SHA` on Vercel, `git` locally). The footer shows them under "Build" and marks local builds and uncommitted changes.

## Publishing

Production is deployed by Vercel from `main`. Changes go through a feature branch, are merged with `--no-ff` into `development` and then into `main`, and are pushed with `git push --atomic`, only after explicit approval.
