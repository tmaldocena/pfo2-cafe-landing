# Café de las Olas — Specialty Coffee Landing Page (Prompt Final)

Build a landing page for a specialty coffee roastery/café called "Café de las Olas" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The page has a nautical-editorial theme anchored in the idea that **coffee, like the tide, always returns — each time more precise than the last**. The brand concept is rhythm, consistency, and calibrated repetition (not chaos, not "cozy randomness"). The font is **Oswald** (Google Fonts, weights 200-700). The page title is "Café de las Olas -- Specialty Coffee". The site is **bilingual (Spanish / English)** via a visible toggle in the navbar, with Spanish as default (this is an Argentine café). The hero heading "Café de las Olas" never translates.

> **Note for the builder**: this brief intentionally fixes brand-critical decisions (palette, typography, hero mechanic, copy, section order) while leaving some layout/interaction decisions open on purpose — marked clearly below as **[OPEN]**. Where something is marked open, use your own best design judgment instead of inventing a rigid spec; the goal is to see how you solve it, not to guess a hidden "correct" answer.

---

## BRAND IMAGE

A hand-drawn nautical line-art illustration: a bearded sailor/captain wearing a striped shirt and an anchor-emblem cap, sitting at a wooden table, holding a steaming mug of coffee, framed in a circular rope-bordered seal. Ink-on-paper aesthetic. ([Ver imagen](https://i.imgur.com/2SUTnwn.png)) This illustration anchors the entire palette below and is the centerpiece of the Hero Section.

---

## GLOBAL STYLES

- Font family: `'Oswald', sans-serif`
- Global reset: box-sizing border-box, margin 0, padding 0
- CSS class `.wave-heading`: gradient text using `background: linear-gradient(180deg, #1B2A4A 0%, #B5562F 100%)` with `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent` — used for headings on light backgrounds. For headings on dark backgrounds, use the inverse direction: `linear-gradient(180deg, #F2E8D5 0%, #B5562F 100%)`.
- Main wrapper has `overflowX: 'clip'`

### Color Palette (derived from the brand illustration)

| Token | Hex | Use |
|---|---|---|
| Ink Navy (dark base) | `#1B2A4A` | Primary dark background, line-art ink tone |
| Raw Paper (light base) | `#F2E8D5` | Primary light background, primary text on dark |
| Toasted Wood | `#8C5A3C` | Secondary accent, borders, card backgrounds |
| Rust Copper | `#B5562F` | Primary live accent — CTAs, gradient endpoints, active states |
| Rope Natural | `#C9B896` | Tertiary accent — dividers, subtle textures, inactive states |

This is a 5-color system, intentionally smaller than a typical brand palette, so contrast and hierarchy come from value (light/dark) and accent placement, not from introducing new hues.

---

## BILINGUAL SYSTEM (ES/EN)

- Implement via a `LanguageContext` (React Context + `useState`), defaulting to `"es"`.
- Toggle component in the navbar: compact pill switch showing "ES / EN", same interaction pattern as nav links.
- All copy stored in a single translations dictionary (e.g. `content.ts`), keyed by section, with `es` and `en` variants.
- **Exception**: the hero heading "Café de las Olas" is hardcoded and identical in both languages — it never translates.
- Everything else translates: nav links, hero subtext, all section headings/body copy, button labels, form fields, footer content.

---

## SECTION ORDER

1. HeroSection
2. MarqueeSection
3. AboutSection (Nuestra Historia / Our Story)
4. MenuSection (Nuestro Café / Our Coffee)
5. OriginsSection (Orígenes / Origins) — **[OPEN layout]**
6. EventsSection (Catas / Tastings) — **[OPEN — bonus section, minimal spec]**
7. TestimonialsSection — **[OPEN layout]**
8. ContactSection
9. Footer

---

## 1. HERO SECTION — "The Tide Recedes"

Full viewport height (`h-screen`), relative positioning, `overflowX: clip`.

**Core mechanic (fixed)**: on initial load (scroll = 0), a navy-ink colored band (`#1B2A4A`) covers roughly the bottom 70% of the hero, visually submerging the sailor illustration up to his chest — only the heading and navbar sit clearly above the "water line." As the user scrolls through the hero's own height (the first 100vh of scroll), the band recedes downward, progressively revealing the full illustration, the table, and the rest of the composition — like a tide going out.

- Implement with `useScroll({ target: heroRef, offset: ["start start", "end start"] })`.
- Map `scrollYProgress` (0 → 1) to the band's visible height or `translateY` (covering ~70% → 0%) via `useTransform`.
- A second, independent `useTransform` on the same `scrollYProgress` drives a subtler parallax on the heading itself (smaller output range, moving slower than the band) — so the scene reads with a sense of depth, not a single flat layer.
- A thin wave-shaped SVG path sits at the boundary of the receding band (a simple horizontal wave silhouette, not separately animated — it just rides along with the band's position).

**Navbar**: nav links "Historia / Story", "Café / Coffee", "Orígenes / Origins", "Contacto / Contact" — plus the language toggle. **[OPEN]** — decide spacing, sizing, and exact hover treatment; keep it legible against both the exposed-paper background above the waterline and (once scrolled) whatever sits behind it.

**Hero Heading**: "Café de las Olas" (never translated). Uses `.wave-heading` gradient. Large, condensed, confident — Oswald's condensed bold/black weights are built for exactly this. **[OPEN]** — choose the exact size scale and breakpoints; it must always fit on one line without manual truncation (apply the same lesson learned on the Kaizen project: either calculate a fit-to-width font-size, or pick a sizing strategy you can justify across breakpoints — don't just guess a fixed `vw` value and hope it fits).

**Subtext** (appears above the waterline, alongside the heading):
- ES: "como la marea, el café vuelve — cada vez más preciso que la vez anterior"
- EN: "like the tide, coffee returns — each time more precise than the last"

**CTA**: a primary button (see ContactButton-equivalent component below), label "Ver el Menú" / "View Menu", anchored to `#menu`.

**FadeIn**: standard staggered entrance for navbar, heading, subtext, and CTA — **[OPEN]** on exact delays/offsets, but keep the sequence logical (navbar first, heading next, supporting text and CTA last).

---

## 2. MARQUEE SECTION

Two rows of images scrolling horizontally based on page scroll position, same mechanic as a standard scroll-driven marquee (offset calculated from scroll position relative to section top, multiplied by a damping factor — **[OPEN]** on the exact multiplier and tile dimensions, but keep performance in mind: `willChange: transform`, passive scroll listener).

Content: coffee-related imagery — green beans, roasting drum, pour-over, latte art, the café's interior, bags of roasted beans. Since no exact URLs are provided for this project (unlike the Kaizen brief, which had fixed asset URLs), **source or generate placeholder coffee imagery** appropriate to a specialty roastery, or use descriptive `alt` text placeholders if no image source is available — note clearly in your output which approach you took.

Row 1 moves one direction on scroll, Row 2 moves the opposite direction — same contrapuntal effect as the Kaizen marquee.

---

## 3. ABOUT SECTION (Nuestra Historia / Our Story)

Full-height centered section. **[OPEN]** on decorative elements (the Kaizen version used four corner illustrations pulled from the brand's visual world — decide whether this section benefits from something equivalent here, e.g. small nautical motifs like a compass, anchor, or rope knot, or whether it should stay clean and typographic without them).

**Heading**: "Nuestra Historia" / "Our Story" using `.wave-heading` gradient.

**Animated paragraph** (character-by-character scroll-reveal, same `AnimatedText` mechanic as Kaizen — each character's opacity tied to scroll progress via `useScroll` with offset `['start 0.8', 'end 0.2']`):

- ES: "Creemos que el buen café no se persigue, se espera — como una marea que siempre vuelve, un poco más refinada cada vez. Granos de origen único, tostados en pequeños lotes, preparados con el mismo cuidado, taza tras taza. Este es el ritmo del mar, aplicado al café."
- EN: "We believe great coffee isn't chased, it's awaited — like a tide that always comes back, a little more refined each time. Single-origin beans, roasted in small batches, brewed with the same care, cup after cup. This is the rhythm of the sea, applied to coffee."

CTA below the text block (reuse the primary button component), label "Conocer el Menú" / "See the Menu".

---

## 4. MENU SECTION (Nuestro Café / Our Coffee)

Same numbered-list pattern as the Kaizen Services section: large number + name + description, vertical stack, separated by thin dividers (`rgba(27, 42, 74, 0.15)` on light background, or the inverse on dark — **[OPEN]** on which background this section uses; pick whichever creates the best rhythm against the sections before and after it).

**01 — Filtrado / Pour Over**
- ES: "Un método lento y deliberado — agua vertida en olas constantes hasta que la taza alcanza su versión más calma y clara de sí misma."
- EN: "A slow, deliberate method — water poured in steady waves until the cup reaches its calmest, clearest version of itself."

**02 — Espresso**
- ES: "Presión y precisión condensadas en treinta segundos — la marea reducida a una sola extracción intensa."
- EN: "Pressure and precision distilled into thirty seconds — the tide condensed into a single, intense pull."

**03 — Cold Brew**
- ES: "Paciencia por sobre el calor — veinte horas de reposo, de la misma forma en que el mar moldea la piedra: lento y sin apuro."
- EN: "Patience over heat — twenty hours of steeping, the same way the sea shapes stone, slowly and without rush."

**04 — Granos de Origen Único / Single Origin Beans**
- ES: "Granos de una sola finca, una sola cosecha — para que cada lote cuente la misma historia, refinada cosecha tras cosecha."
- EN: "Beans sourced from one farm, one harvest — so every batch tells the same story, refined harvest after harvest."

**05 — Tueste a Medida / Custom Roast**
- ES: "Curvas de tueste ajustadas en pequeños incrementos hasta que el grano revela exactamente aquello para lo que siempre estuvo preparado."
- EN: "Roast curves adjusted in small increments until the bean reveals exactly what it was always capable of."

Staggered FadeIn per item — **[OPEN]** on exact stagger timing.

---

## 5. ORIGINS SECTION (Orígenes / Origins) — **[OPEN layout]**

**Content is fixed, layout is not.** This section must present 3 coffee origins. You decide the presentation format — it could be sticky-stacking cards (like Kaizen's Projects section), a horizontal scroll-snap gallery, a simple responsive grid, or something else entirely. Whatever you choose, each origin needs: a name/location, and a tasting-note description. Use your judgment on whether/how to incorporate supporting imagery (real, placeholder, or omitted with a note).

**01 — Yirgacheffe, Etiopía / Ethiopia**
- ES: "Floral, cítrico, casi como té de jazmín — el origen al que más volvemos, porque nunca deja de enseñarnos algo nuevo sobre el mismo grano."
- EN: "Floral, citrus-bright, almost like jasmine tea — the origin we return to most, because it never stops teaching us something new about the same bean."

**02 — Huila, Colombia**
- ES: "Caramelo y manzana roja, un balance que refinamos cosecha tras cosecha — prueba de que la constancia y el carácter no son opuestos."
- EN: "Caramel and red apple, a balance we've refined harvest after harvest — proof that consistency and character aren't opposites."

**03 — Mogiana, Brasil**
- ES: "Profundo, a nuez, con notas de chocolate — el trasfondo constante debajo de cada blend, como una corriente que nunca deja de moverse."
- EN: "Deep, nutty, chocolate-forward — the steady undertone beneath every blend, like a current that never stops moving."

**Heading**: "Orígenes" / "Origins" using `.wave-heading` gradient — sizing and exact placement **[OPEN]**, consistent with whatever layout you choose for the cards below it.

---

## 6. EVENTS SECTION (Catas / Tastings) — **[OPEN — bonus section, minimal spec]**

This section has no prior equivalent in the brand system — **design it freely**, using only the constraints below:

- Purpose: announce recurring coffee tastings/cupping sessions hosted at the café (a real specialty-coffee practice: guided sessions where customers sample different origins/roasts side by side).
- Must include a heading (your choice of exact wording, in both languages) and at least one piece of information someone would need to attend (e.g. frequency, what to expect, or a CTA to reserve a spot — visual only, no backend).
- Must stay within the established palette and typography system.
- Everything else — layout, whether it includes imagery, whether it's a single block or a list of upcoming sessions, tone of the copy — is your call.

---

## 7. TESTIMONIALS SECTION — **[OPEN layout]**

**Content is fixed, layout is not.** Four customer testimonials. Kaizen used a draggable horizontal carousel with autoplay, arrows, and dot indicators — you may reuse that pattern, adapt it, or propose a different presentation (e.g. a static grid, a marquee-style auto-scroll, a single rotating quote). Make a deliberate choice and execute it cleanly rather than defaulting to the most complex option just because it's available.

**1. Lucía Fernández** — regular desde 2019 / regular since 2019
- ES: "No vengo buscando algo nuevo cada vez — vuelvo porque está exactamente tan bueno como la última vez. Esa constancia es rara de encontrar."
- EN: "I don't come here for something new every time — I come back because it's exactly as good as the last time. That consistency is rare."

**2. Martín Ibarra** — barista de profesión / professional barista
- ES: "Se nota que cada taza está calibrada, no improvisada. Esa es la diferencia entre una buena cafetería y una excelente."
- EN: "You can tell every cup is calibrated, not improvised. That's the difference between a good coffee shop and a great one."

**3. Carolina Sosa** — dueña de estudio de diseño cercano / owner of a nearby design studio
- ES: "El ritual diario de mi equipo. Mismo pedido, misma calidad, todos los días — se volvió parte de cómo arrancamos a trabajar."
- EN: "My team's daily ritual. Same order, same quality, every single day — it's become part of how we start work."

**4. Javier Ortiz** — fotógrafo / photographer
- ES: "Fotografié muchos cafés. Este es el único donde el cuidado se nota en la taza, no solo en la decoración."
- EN: "I've photographed a lot of cafés. This is the only one where the care shows in the cup, not just the decor."

---

## 8. CONTACT SECTION

White/paper background (`#F2E8D5`), visual markup only — no backend submission logic (`onSubmit` calls `preventDefault` only, sets local `submitted` state for an inline confirmation message).

**Heading**: "Visitanos" / "Visit Us".

**Subheading**:
- ES: "¿Preguntas, eventos, o solo querés saludar? Escribinos — leemos cada mensaje entre preparaciones."
- EN: "Questions, catering, or just want to say hello? Drop us a line — we read every message between brews."

**Form fields**: Name/Nombre (text), Email (email), Message/Mensaje (textarea) — same minimal, label-above-input, border-bottom-only styling as the Kaizen contact form (no full input boxes; keep it editorial). **[OPEN]** on exact spacing/sizing.

**Submit button**: primary button component, label "Enviar Mensaje" / "Send Message".

**Confirmation message** (shown after submit): "Mensaje enviado (solo demo)" / "Message sent (demo only)".

---

## 9. FOOTER

Dark background (`#1B2A4A`). **[OPEN]** on exact layout (Kaizen used a 3-column left/middle/right split — feel free to reuse or restructure), but must include:

- Wordmark: "CAFÉ DE LAS OLAS"
- Tagline:
  - ES: "Café que vuelve, como la marea — siempre un poco más preciso."
  - EN: "Coffee that returns, like the tide — always a little more precise."
- Quick links to the page's anchors (reuse nav translations).
- Social icons (Instagram, Facebook, a third of your choice). **Important — lesson learned from the Kaizen build**: recent versions of `lucide-react` (v0.4xx and up) removed brand/logo icons due to trademark policy. If you reach for Lucide's icon set for these, verify the icons you need actually exist in the installed version before writing the component; if they don't, implement small custom inline SVGs (24x24 viewBox, `stroke="currentColor"`, consistent stroke width) instead of guessing import names.
- Copyright line: "© 2026 Café de las Olas. All rights reserved." / "Todos los derechos reservados."
- Credit line:
  - ES: "Preparado con cuidado, calibrado de forma continua."
  - EN: "Brewed with care, calibrated continuously."

---

## REUSABLE COMPONENTS

**Primary Button** (equivalent to Kaizen's `ContactButton`): rounded-full pill, background using the Rust Copper accent (`#B5562F`) in a gradient toward a deeper tone, white or paper-colored text, uppercase, medium tracking. **[OPEN]** on exact gradient stops and shadow treatment — keep it visually anchored to the Rust Copper accent as the "live" color of the system, same role that terracotta played for Kaizen.

**FadeIn**: same reusable wrapper pattern as Kaizen — Framer Motion `whileInView`, configurable `delay`/`duration`/`x`/`y`, viewport `{ once: true }`.

**AnimatedText**: same character-by-character scroll-reveal mechanic as Kaizen's `AnimatedText` — reuse the approach (including the lesson learned there: characters need `whiteSpace: pre` to avoid collapsing spaces between words).

**WaveDivider** (new): the SVG wave-shaped path used both in the Hero's receding-tide mechanic and optionally as a section divider elsewhere on the page. **[OPEN]** on exact path geometry — it should read as a simple, smooth horizontal wave silhouette, not skeuomorphic or overly detailed.

---

## KEY DEPENDENCIES

- react, react-dom
- framer-motion
- lucide-react (verify icon availability in the installed version before relying on any specific icon name — see Footer note above)
- tailwindcss
- vite, typescript

---

## RESPONSIVE BREAKPOINTS

Tailwind's default breakpoints (sm: 640px, md: 768px, lg: 1024px), mobile-first. Verify Spanish strings (generally longer than English) don't overflow nav links, button labels, or the hero heading at narrow viewports — this was a real bug encountered on the Kaizen build and is worth checking proactively here too.
