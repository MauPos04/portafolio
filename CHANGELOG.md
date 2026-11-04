# Changelog

## 0.4.1 — 2026-11-04

- Copy email falls back to a selection-based copy (`document.execCommand('copy')`) when the browser denies the async Clipboard API, as embedded and in-app browsers do ("Write permission denied"). Before, those browsers showed "Copy failed" and no confetti.
- Recolor the confetti to the site palette: blues (#60A5FA, #93C5FD, #3B82F6), white and zinc grays replace the original mint, magenta, yellow, purple and green. Animation and timing are unchanged.

## 0.4.0 — 2026-11-04

- Bring back three effects from 0.2.0 in the sober palette, each loaded only when it is needed:
  - Hero globe: the spinning three-globe with the 40 animated city-to-city arcs and ring pulses, recolored to zinc and white with blue arcs (#60A5FA/#93C5FD) and starting over Medellín. Desktop only (≥1024 px): it mounts once the page is idle and the hero is in view, fades in, can be dragged to rotate (no zoom or pan), stops rendering and pulsing off screen, and shows static arcs without rotation under `prefers-reduced-motion`. On touch screens it ignores drags, so the page still scrolls.
  - Project cards: the 3D pin hover. The card tilts back (rotateX 40°, scale 0.8) and shows a title pill, a light beam and rings on the floor. CSS only, limited to mouse or trackpad pointers with motion allowed; keyboard focus and touch keep the flat card.
  - Copy email: the original confetti Lottie (same animation and colors) plays once over the button after a successful copy, with the same 384 px footprint as 0.2.0. It does not play when copying fails or under reduced motion.
- Re-add three, three-globe, @react-three/fiber, @react-three/drei and lottie-react. They load only in async chunks, so the First Load JS of `/` stays at 101 kB (99.4 kB in 0.3.0).

## 0.3.0 — 2026-11-04

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
