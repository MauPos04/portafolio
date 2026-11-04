# Changelog

## 0.3.0 — 2026-11-04 (local, not yet released)

- Split the single long page into three tabs with their own URLs: Overview (`/`), Projects (`/projects`) and Experience (`/experience`), with a shared sticky header, per-route titles and the Contact block on every page. Old `/#projects`, `/#experience`, `/#certifications` and `/#testimonials` links redirect to the new routes.
- Replace the purple/navy styling with a dark zinc palette and a single blue accent (#60A5FA) reserved for links, focus and the active tab; Inter for text and JetBrains Mono for metadata. This reverts the dark purple identity and the large 3D project cards approved on 2026-09-30.
- Remove the decorative effects (spotlights, spinning and moving borders, gradient blobs, WebGL globe and canvases, confetti, blurred text reveal, 3D pin, testimonial marquee, carousel autoplay) and their dependencies: three, three-globe, @react-three/fiber, @react-three/drei, lottie-react, framer-motion and next-themes.
- Remove template copy (bento cards, "My approach", the agency-style footer text), the Hostinger card and the generic X/Instagram links. Project, experience, certification and recommendation texts are kept verbatim.
- Projects use flat cards with a manual carousel and `next/image`; technologies are grouped (TypeScript and Docker added); work experience is a timeline and Ditek stays as a project.
- Accessibility: one h1 per route that receives focus after navigation, landmarks and a skip link, named social links, no buttons nested in links, visible focus ring and `prefers-reduced-motion` support.
- The footer shows the version, build date and 7-character commit, marking local builds.
- Recolor the two workflow illustrations to neutral grays.

## 0.2.0 — 2026-09-30

- Refresh the hero and skills for applied AI and software engineering.
- Retain large 3D project cards, prioritizing four AI projects and revealing secondary work on demand.
- Add a generalized Support Triage workflow illustration, with no confidential screenshots or source links.
- Update sports/stock forecasting content from CV v4 and current repository documentation.
- Add Grupo Bios experience and separate dated certifications from technology experience.
- Keep design explorations and notebooks available through accessible disclosure controls.
- Preserve existing AI SVG icons and add visible keyboard focus and explicit public-project CTAs.
- Defer the 3D globe's WebGL initialization until its container approaches the viewport, preserving its layout and appearance.
