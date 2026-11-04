# Portfolio v0.3.0 — tabs and sober redesign

Requested on 2026-10-25: fewer "vibe coder" colors and tabs, because the single page was too long (10.4 screens on desktop and 15.7 on mobile, measured in production at 40ab270). A three-expert review plus an independent QA produced the plan; an HTML mockup with three accent options was reviewed, and on 2026-11-04 Mauricio chose **accent A (blue #60A5FA)** and approved implementing it locally.

## Decisions

- Three routes act as tabs: `/` Overview, `/projects`, `/experience`. Navigation is a `<nav>` with links and `aria-current="page"` (not an ARIA tablist). Each page starts with an `<h1 tabIndex={-1}>` so focus lands on it after navigation; titles are unique per route.
- This supersedes the 2026-09-30 decision to "retain the existing large 3D project cards and dark purple visual identity": cards are flat and the palette is zinc with one accent.
- The accent is used only for links, the focus ring and the active tab. Headings are monochrome; brand icons are monochrome.
- Template copy is removed rather than rewritten; texts kept from the previous version are verbatim.
- Privacy rules from 2026-09-30 still apply: private projects have no links or internal screenshots, nothing presents Genius Sports as a project, Azure appears as a technology and certification, and credentials have no links until supplied.

## Pending decisions for Mauricio

- Title wording ("AI Analyst" vs "AI & Software Engineer") and "Bios" vs "BIOS".
- Contact line to replace the removed template sentence, if any.
- `public/XG_MAC.png` (no longer shown): keep elsewhere or delete.
- Testimonial signed "Inplay Genius Sports Supervisor": keep as is or change.
- Gap between April 2025 and April 2026, education section, CV download, real X/Instagram profiles, whether Ditek belongs to the freelance period.
- Optional clean-ups: 35 unreferenced files in `public/` (20.7 MB) and `bash.exe.stackdump`; the Sentry example routes and configs; the repository "Website" field on GitHub, which points to someone else's portfolio.
