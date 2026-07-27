# Handoff: Konsta — Landing Page (www.konstadeportista.com)

## Overview
One-page marketing site for **Proyecto Konsta**, a Colombian finswimming (monoaleta) athlete project.
Goal: emotional storytelling (athlete + family) that converts into **corporate sponsorship**, sales of the
"Colección Legado" limited-edition series, and downloads of the sponsorship brochure. Copy is in Spanish.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype of the intended look,
motion and behavior. They are **not production code to copy directly**. The task is to **recreate these
designs in the target codebase's existing environment** (React/Next, Vue, Astro, WordPress, etc.) using its
established patterns, component library and build tooling. If no codebase exists yet, pick the most
appropriate framework (a static-first stack such as Next.js/Astro suits this marketing page) and implement
the design there.

The prototype is authored as a single streaming HTML component file with **inline styles only**
(no stylesheets, no CSS classes). In a real codebase, convert these to the project's styling system
(CSS modules, Tailwind, styled-components…) — the inline styles are an artifact of the prototyping
environment, not a design requirement. The `<image-slot>` elements are **placeholders for the client's
photography/video** and must be replaced with real `<img>`/`<video>` (or a CMS image component).

## Fidelity
**High fidelity (hifi).** Colors, typography, spacing, radii, section order, copy and scroll motion are final
intent. Recreate pixel-closely, then swap placeholders for the real assets. The only deliberately
approximate parts: photography (placeholders), social links (`https://instagram.com` etc. are stubs), the
brochure download URL (`#`), and the 2026–2028 timeline milestones (drafted from the brief, pending client
confirmation).

## Brand Foundations

### Palette (from the brand manual — do not add colors)
| Token | Hex | Use |
|---|---|---|
| Azul Océano Real | `#004B87` | Accent: CTAs, highlighted words, Modo Tiburón section background, timeline dots, play badges |
| Negro Absoluto | `#111111` | Ink: all body/heading text, brochure CTA background |
| Blanco | `#FFFFFF` | Page background, text on blue/black |

Derived neutrals (tints of the above, used sparingly):
- `#454545` — body paragraph text
- `#6E7378` — eyebrows / footer meta
- `rgba(17,17,17,.09 / .12 / .14 / .35)` — hairlines, borders, muted timeline dots
- `rgba(255,255,255,.58 / .62 / .70 / .72)` — secondary text on blue/black
- `rgba(255,255,255,.86)` — sticky header background (with `backdrop-filter: blur(14px)`)
- `rgba(0,75,135,.38)` — marquee text stroke
- `rgba(0,75,135,.9)` — play badge fill

### Typography
Google Fonts: `Bebas Neue` (400) + `Montserrat` (300, 400, 500, 600).
- **Bebas Neue** — all headlines, the manifesto quote, big statements, timeline years. Uppercase by nature;
  `line-height` .86–1.04, `letter-spacing` .01–.04em.
- **Montserrat** — body copy (`300`, 1.72–1.78 line-height), eyebrows/labels/buttons
  (`600`, 10.5–11px, `letter-spacing: .18–.30em`, `text-transform: uppercase`).
- One deliberate exception: the word "ritual" in the hero headline is Montserrat 300 italic at `.58em`
  of the H1 size, `letter-spacing: -.01em`.

Type scale (fluid, all `clamp(min, vw, max)`):
| Role | clamp |
|---|---|
| Hero H1 | `clamp(52px, 7.4vw, 128px)` / lh .87 |
| Modo Tiburón climax | `clamp(54px, 8.6vw, 158px)` / lh .86 |
| Modo Tiburón lead-in | `clamp(34px, 4.3vw, 74px)` / lh 1.02 |
| Section H2 | `clamp(38px, 4.6vw, 78px)` / lh .93 |
| Visión H2 | `clamp(40px, 5.2vw, 92px)` / lh .9 |
| Aliados H2 | `clamp(44px, 6vw, 108px)` / lh .88 |
| Manifesto quote | `clamp(30px, 3.9vw, 66px)` / lh 1.04, `max-width: 22ch` |
| Body | `clamp(14.5px, 1.1vw, 16.5px)` / lh 1.78, `max-width: 46–48ch` |
| Card body | 15px / lh 1.75 |
| Eyebrow / button label | 10.5–11px, 600, tracking .2–.3em, uppercase |

### Spacing & geometry
- Page gutter: `clamp(20px, 4vw, 56px)`; section vertical rhythm: `clamp(60px, 10vh, 130px)`.
- Two-column grids: `grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr))`
  with `gap: clamp(28px, 5vw, 86px)` — collapses to one column without media queries.
  Modo Tiburón uses `minmax(min(100%, 320px), 1.4fr)` so the text column stays dominant.
- Buttons/pills: `border-radius: 999px`, padding `16–17px 26–28px`.
- Cards: `border-radius: 22px`, `1px solid rgba(17,17,17,.12)`, padding `clamp(22px, 2.6vw, 32px)`.
- Section dividers: `1px solid rgba(17,17,17,.12)` top borders.
- **Sculpted image radii are a signature of this design** (never uniform):
  - hero: `200px 200px 28px 28px` (capsule top), aspect 3 / 4.15
  - origen collage: `26px` (4/5.4) · `999px` circle (1/1) · `22px` (4/3.2)
  - familia: `28px 28px 28px 160px`, aspect 5/4
  - tiburón: `22px 22px 180px 22px`, aspect 3/4.4
  - legado: `26px 26px 26px 150px`, aspect 4/3
  - visión: `180px 26px 26px 26px`, aspect 4/5
  - manifiesto video 16/9 and aliados video 16/10: `26–28px`
- All photography renders **black & white**: `filter: grayscale(1) contrast(1.06)`.

## Screens / Sections (single page, in order)

The page is one scrolling document. Every section id is a nav anchor.

### Sticky header
`position: sticky; top: 0; z-index: 50`, background `rgba(255,255,255,.86)` + `backdrop-filter: blur(14px)`,
bottom hairline `rgba(17,17,17,.09)`, padding `18px clamp(20px,4vw,56px)`. Left: Konsta horizontal logo, 30px tall.
Right: nav (Modo Tiburón · Historia · Colección Legado · Visión 2029), three social icons (Instagram, TikTok,
YouTube — 17–18px, `currentColor`, `#111111`), then the blue pill CTA **"Ser aliado"** → `#aliados`.

### 01 — Hero (`#hero`)
Left text / right vertical portrait.
- Eyebrow: 46×1px blue rule + "MONOALETA · COLOMBIA".
- H1: "KONSTA: LA EXCELENCIA / NO ES UN DON, / ES UN *ritual*."
- Body: "Más allá de la velocidad. Más allá de la medalla. Un proyecto de vida construido con disciplina implacable y el respaldo de un equipo que rompe límites."
- CTAs: blue pill "CONOCE LA HISTORIA" → `#tiburon`; text link with 1px underline "ALIANZAS DE MARCA" → `#aliados`.
- Image: `konsta-hero` (athlete in pool, vertical, B&W).
- Floating badge over the image's bottom-left (`left: -18px; bottom: 34px`): white pill, 1px border, 6px blue
  pulsing dot (`km-drip`, 2.4s ease-in-out infinite), label "MODO TIBURÓN ACTIVO".
- Below the hero: a full-width hairline divider row reading "DISCIPLINA · FAMILIA · LEGADO" in `#6E7378`.

### Marquee band
Infinite horizontal scroll, `animation: km-marquee 26s linear infinite` (`translate3d(0)` → `translate3d(-50%)`),
two duplicated spans. Bebas `clamp(28px, 3.4vw, 54px)`, `color: transparent` with
`-webkit-text-stroke: 1px rgba(0,75,135,.38)`. Text: "MODO TIBURÓN · DISCIPLINA IMPLACABLE · MODO TIBURÓN · SIN ATAJOS ·".

### 02 — Modo Tiburón (`#tiburon`) — blue block
Full-bleed-inset blue panel: `margin: 0 clamp(10px,1.6vw,22px)`, `border-radius: clamp(28px,3vw,44px)`,
`background: #004B87`, `color: #FFFFFF`, padding `clamp(56px,10vh,130px) clamp(24px,4vw,72px)`,
`align-items: end`. Text-dominant (1.4fr) left, portrait right (`konsta-tiburon`).
- Eyebrow "02 — MODO TIBURÓN" at `rgba(255,255,255,.62)`.
- Lead-in at `rgba(255,255,255,.58)`: "MUCHOS VEN EL SALTO. POCOS VEN LAS HORAS DE MADRUGONES, EL FRÍO, LA TÉCNICA Y LA CONVICCIÓN." + **"ESTO NO ES SUERTE."** in full white.
- Climax: "ESTO ES / MODO TIBURÓN."
- CTA row: white pill with blue label **"ÚNETE AL EQUIPO (PATROCINIOS)"** → `#aliados`; then
  "SÍGUENOS EN NUESTRAS REDES" + the three social icons in white.

### 03 — El origen (`#origen`)
Text left; editorial collage right (2-col grid): tall portrait spanning both rows (`konsta-origen-1`,
center-aligned), a circular childhood photo (`konsta-origen-2`, offset down `clamp(0,4vw,54px)`),
and a training photo (`konsta-origen-3`).
H2 "UN CAMINO FORJADO EN LA UNIÓN Y LA RESILIENCIA" + the origin paragraph.

### 04 — La familia (`#familia`)
Reversed: image left (`konsta-familia`), text right. H2 "LA FAMILIA COMO EL MOTOR DEL ALTO RENDIMIENTO",
two paragraphs (family as the core; what the project offers brands: transparency, institutional trust).

### 05 — Propósito (`#proyecto`)
Two columns, `align-items: start`. Left: eyebrow, H2 "MÁS ALLÁ DE MI ONDULACIÓN: IMPULSANDO EL FUTURO DE LA
MONOALETA EN COLOMBIA", then a 4/3 image (`konsta-proyecto`). Right column (offset down `clamp(0,4vw,68px)`):
three paragraphs + a Bebas closer "NO ES SOLO PATROCINIO; / ES CONSTRUIR LEGADOS JUNTOS."
(`clamp(30px, 3.3vw, 56px)`).

### 06 — Manifiesto de compromiso (`#manifiesto`)
Centered, `max-width: 1040px`. Eyebrow → Bebas blockquote (`max-width: 22ch`) with the two
sentences "ES FALTA DE OPORTUNIDADES." and "COMO EQUIPO, SOMOS IMBATIBLES." in `#004B87`; attribution
"— KONSTA"; then a 16/9 video block (`max-width: 900px`, radius 28px) with a **74px blue play badge in the
bottom-right** (`pointer-events: none`, padding 24px). This is a video placeholder — wire it to the real
manifesto video (poster + click-to-play or lightbox).

### 07 — Colección Legado (`#legado`)
Left: eyebrow, H2 "COLECCIÓN LEGADO: EL VALOR DE IMPULSAR A OTROS", two paragraphs, then the 4/3
sculpted image (`konsta-legado`).
Right (offset down `clamp(0,3vw,54px)`): blue Bebas sub-head "¿CÓMO TRANSFORMAMOS TU COMPRA EN IMPACTO?",
two bordered cards — **"100% CON PROPÓSITO"** and **"DISEÑO DE AUTOR"** (blue uppercase label + 15px body),
a closing line, and the blue pill CTA **"VER COLECCIÓN EXCLUSIVA Y APOYAR"** (currently → `#aliados`;
point it at the catalogue/checkout).

### 08 — Visión 2029 (`#vision`)
Image left (`konsta-vision` — Konsta from behind at the pool edge, looking at the horizon),
text right: H2 "EL HORIZONTE: / THE WORLD GAMES 2029" (second line in blue) + three paragraphs.
Below, a **minimal timeline**: top hairline, 4 auto-fit columns (`minmax(min(100%,190px),1fr)`), each with a
9px dot pulled up onto the hairline (`margin: -34px 0 20px`), a Bebas year (34px) and a 13px caption.
Dots: 2026 and 2029 blue, 2027/2028 `rgba(17,17,17,.25)`; the 2029 year is blue.
Milestones (**draft — confirm with client**): 2026 defend departmental Ranking #1 · 2027 national
consolidation and records · 2028 international circuit and qualification · 2029 The World Games,
Karlsruhe, Germany, 19–29 July.

### 09 — Aliados estratégicos (`#aliados`)
Eyebrow, then two columns (`align-items: start`).
Left: H2 "SER PARTE DE KONSTA ES REDEFINIR LOS LÍMITES", a 16/10 video block (`konsta-brochure-video`,
66px blue play badge bottom-right) and, below it, the Bebas sign-off "DETERMINACIÓN IMPARABLE."
Right: the ecosystem paragraph, a blue Bebas question "¿TIENES LA VISIÓN CORPORATIVA PARA CONSTRUIR UN
LEGADO QUE TRASCIENDA EL PODIO?", then two large 20px-radius action cards:
1. **Black (`#111111`)** — "DESCARGAR BROCHURE TÉCNICO DE PATROCINIO" / sub "Dossier corporativo y ROI para
   marcas" + download arrow icon. `href` is `#` — wire to the PDF.
2. **Blue (`#004B87`)** — "CONTACTAR AL EQUIPO DE GESTIÓN" / sub "Canal directo gestionado por CONEX1ON PSH"
   + arrow icon. `mailto:hola@konstadeportista.com` — replace with the real address or a form.

### Footer
Top hairline, then a wrapping row: Konsta logo (24px), "www.konstadeportista.com · Monoaleta",
the three social icons, "© 2026" — all 10.5px, 500, tracking .18em, uppercase, `#6E7378`.

### Video production reference (not web UI)
The client's video script for section 09: 0–5s Konsta walking the pool deck at dawn, caption "4:00 AM";
5–15s his father Yorgos shouting from the stands; 15–25s fast underwater finswimming shots;
25–35s Konsta drying off, serious to camera; close on the Konsta logo + "Determinación imparable."

## Interactions & Behavior
- **Scroll reveals.** Every animated element carries `data-reveal` (opacity 0 → 1, `translateY(20–34px)` → none)
  or `data-reveal-clip` (`clip-path: inset(...)` → `inset(0 0 0 0)`). Transitions:
  `.8–1.1s cubic-bezier(.22,1,.36,1)` for text (staggered `.04s`–`.28s` within a block),
  `1.2–1.3s cubic-bezier(.65,0,.35,1)` for image clips.
  Clip directions vary intentionally: bottom-up `inset(0 0 100% 0)`, left-to-right `inset(0 100% 0 0)`,
  top-down `inset(100% 0 0 0)` (Modo Tiburón image).
  **Implementation note:** a clipped element's IntersectionObserver rect is zero-sized, so IO never fires on it.
  Drive reveals with a rAF-throttled scroll sweep over `getBoundingClientRect()` (reveal when
  `top < innerHeight * 0.92`), or observe an *unclipped* wrapper — never the clipped node itself.
  Reveals are one-shot (flag with `data-shown`).
- **Parallax.** Elements with `data-parallax="<factor>"` (−0.09 … +0.1) get
  `translate3d(0, p * factor * 190px, 0)` where `p = (rect.top + rect.height/2 − vh/2) / vh`, rAF-throttled on scroll.
- **Marquee** and the hero badge dot are pure CSS keyframes (`km-marquee`, `km-drip`).
- **Anchor nav** uses `html { scroll-behavior: smooth }`.
- Header stays visible at all times (sticky, translucent, blurred).
- Hover: links `#111111` → `#6E7378`. Add hover states for the pills/cards in implementation
  (e.g. 10% darker blue, subtle lift) — the prototype leaves them at default.
- Respect `prefers-reduced-motion`: skip reveals/parallax and render everything visible.
  (The prototype exposes this as a `scrollMotion` toggle.)

## State Management
Minimal — a marketing page. Needed state:
- `revealed` flags per element (or an IO/scroll driver as above).
- Prototype-only tweak flags worth keeping as config: `imageRadius` (default 26px, applied to non-sculpted
  wrappers only), `blackAndWhite` (default true, applies the grayscale filter), `scrollMotion` (default true).
- Optional in production: video lightbox open/closed; brochure-download analytics event;
  contact-form state if the mailto link becomes a form.
No data fetching in the prototype; a CMS-backed version would fetch section copy + media.

## Design Tokens
```
color.blue          #004B87
color.ink           #111111
color.white         #FFFFFF
color.body          #454545
color.muted         #6E7378
color.hairline      rgba(17,17,17,.12)
color.onBlue.muted  rgba(255,255,255,.58)

font.display        'Bebas Neue', sans-serif   (400)
font.text           'Montserrat', sans-serif   (300/400/500/600)

space.gutter        clamp(20px, 4vw, 56px)
space.section       clamp(60px, 10vh, 130px)
space.colGap        clamp(28px, 5vw, 86px)

radius.pill         999px
radius.card         20–22px
radius.image        26–28px  (+ sculpted variants listed above)
radius.panel        clamp(28px, 3vw, 44px)

ease.out            cubic-bezier(.22,1,.36,1)
ease.inOut          cubic-bezier(.65,0,.35,1)
filter.photo        grayscale(1) contrast(1.06)
```

## Assets
- `assets/konsta-logo.png` — horizontal Konsta logo, black wordmark + blue shark fin, on white
  (client-supplied). A negative/white version is still needed for the blue section and any dark surface.
- Social icons — inline SVG (Instagram, TikTok, YouTube), 17–19px, stroke/fill `currentColor`.
  Swap for the codebase's icon set if one exists.
- Play/arrow/download icons — inline SVG, `currentColor`.
- Fonts — Google Fonts (Bebas Neue, Montserrat); self-host in production.
- **All photography and both videos are placeholders.** Nine media slots, in DOM order:
  `konsta-hero`, `konsta-tiburon`, `konsta-origen-1`, `konsta-origen-2`, `konsta-origen-3`,
  `konsta-familia`, `konsta-proyecto`, `konsta-manifiesto-video`, `konsta-legado`, `konsta-vision`,
  `konsta-brochure-video`. Each has a Spanish caption describing the intended shot.

## Files
- `Konsta Landing.dc.html` — the full design (all 9 sections, inline styles + the reveal/parallax logic class).
- `image-slot.js` — prototyping helper that renders the drag-and-drop media placeholders. **Do not port it**;
  replace each `<image-slot>` with a real image/video element.
- `assets/konsta-logo.png` — logo asset.
- `brand-palette.png` — the client's palette reference (#004B87 / #111111 / #FFFFFF).
