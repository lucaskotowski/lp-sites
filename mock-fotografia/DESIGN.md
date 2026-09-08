---
name: Helena Braz Photography
description: A conversion-first photographer's portfolio built as a printed photo essay — warm newsprint, plate-blue ink, one reserved acid accent.
colors:
  paper: "#f2f1ec"
  paper-sink: "#e7e5dd"
  ink: "#17171a"
  ink-dim: "#575249"
  plate: "#16233f"
  plate-deep: "#0e1730"
  on-plate: "#e9e6dc"
  on-plate-dim: "#94a1ba"
  acid: "#dcf250"
  acid-deep: "#c7e02c"
  field-error: "#ff8f6b"
  hairline-paper: "rgba(23, 23, 26, 0.18)"
  hairline-paper-strong: "rgba(23, 23, 26, 0.42)"
  hairline-plate: "rgba(233, 230, 220, 0.20)"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.1rem, 1rem + 5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.9rem, 1.3rem + 3vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 125"
  masthead:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.15rem, 0.8rem + 0.8vw, 1.7rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 125"
  dek:
    fontFamily: "Piazzolla, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif"
    fontSize: "clamp(1.12rem, 0.7rem + 1vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "Piazzolla, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif"
    fontSize: "clamp(1.02rem, 0.55rem + 0.55vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "normal"
  caption:
    fontFamily: "Piazzolla, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
  folio:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 125"
rounded:
  sharp: "0"
spacing:
  gutter: "clamp(1.15rem, 4.2vw, 4rem)"
  rail: "4.25rem"
  section-y: "clamp(4rem, 10vw, 8rem)"
  feature-y: "clamp(3.5rem, 9vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0.72rem 1.05rem"
  button-primary-hover:
    backgroundColor: "{colors.acid-deep}"
    textColor: "{colors.ink}"
  button-primary-lg:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.ink}"
    padding: "1rem 1.5rem"
  button-submit:
    backgroundColor: "{colors.on-plate}"
    textColor: "{colors.plate-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "1rem 1.8rem"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.on-plate}"
    rounded: "{rounded.sharp}"
    padding: "0.65rem 0"
  input-focus:
    backgroundColor: "transparent"
    textColor: "{colors.on-plate}"
---

# Design System: Helena Braz Photography

## Overview

**Creative North Star: "The Printed Photo Essay"**

This portfolio is set like a printed photography journal, not a website that happens to show photos. The whole page is a sequence of numbered features — Casamentos, Ensaios, Eventos — and each one opens the way a magazine feature opens: on a single full-bleed photograph that has to carry the argument by itself, with a solid caption block dropped into one corner. It deliberately refuses the airy, evenly-spaced masonry grid that most photographer templates default to. Where a masonry grid says "here is everything, equally," this says "here is a story, in order."

The materials are two flat inks on warm stock. Full-width sections alternate between warm newsprint paper (#f2f1ec) and deep plate-blue ink (#16233f) — near-black type on the paper, warm off-white type on the plates. There are no gradients and no drop shadows anywhere. The only tonal overlay in the build is a single flat blue tint sitting on the opener photographs so the caption block stays legible. Depth is never faked with light; it only appears where a photograph physically crosses or bleeds past the editorial grid. One acid ink (#dcf250) exists in the system and it is spent entirely on the WhatsApp / contact action — it appears nowhere else, and that scarcity is what makes it read as "the thing to press."

Type is a two-voice pairing. Archivo, pushed to its expanded width axis and its heaviest weight, does every masthead, feature title, section head and folio number — it is loud, wide, and structural. Piazzolla, a warm optical serif almost always set in italic, does every dek, caption, pull-quote and body essay — it is the reading voice, and it never competes with Archivo for the headline job. The result feels editorial and confident rather than precious: this is a working photographer's book, printed with intent.

**Key Characteristics:**
- Full-width sections alternate warm-paper and plate-blue; type tone flips with the ground
- Every feature opens on a 100svh photograph with a solid plate-blue caption block
- One acid accent, reserved exclusively for the contact action
- Flat unmixed ink: zero gradients, zero drop shadows
- Archivo expanded-and-heavy for structure; Piazzolla italic for every reading voice
- Numbered wayfinding throughout — a fixed left index rail (01–07), inline folios, section-end counters
- Square corners everywhere; radius is 0
- One authored motion (the focus rack) plus a single gallery reveal, fully disabled under reduced-motion

## Colors

A two-ink press: warm paper and cold plate-blue, both flat, with one reserved acid highlight and a family of tinted neutrals that are never a true gray.

### Primary
- **Newsprint Paper** (`#f2f1ec`): the warm off-white ground for the page body and every "paper" section (feature bodies, FAQ). The base reading surface.
- **Plate Blue** (`#16233f`): the deep blue "ink plate" ground that alternates against paper — the opener caption blocks, testimonials, Estúdio, Processo, and the overlay menu. Carries warm off-white type.
- **Plate Blue Deep** (`#0e1730`): the darker plate used to distinguish adjacent blue zones (`.plate--deep` on Estúdio, the Contato section, the footer). Also the fill behind the outline step numerals.

### Secondary
- **Acid Ink** (`#dcf250`): reserved. Fills the WhatsApp button in every location, the WhatsApp focus ring, and the underline on the form's fallback "fala comigo no WhatsApp" link. It touches nothing else in the system.
- **Acid Ink Deep** (`#c7e02c`): the hover state for the acid WhatsApp button only.

### Neutral
- **Ink** (`#17171a`): near-black primary text on paper; also the fill for the FAQ plus/minus signs and the caption-label eyebrows inside figures.
- **Ink Dim** (`#575249`): a deliberately warm, tinted brown-gray — never a neutral gray — for secondary text on paper (figure captions, FAQ answers, next-link sub-labels, folios on paper).
- **Paper Sink** (`#e7e5dd`): a slightly recessed paper tone for the scrollbar track and the placeholder background behind loading images.
- **On Plate** (`#e9e6dc`): warm off-white — primary text, headings and the drop cap on all plate-blue grounds.
- **On Plate Dim** (`#94a1ba`): a blue-tinted dim tone (pulled from the plate hue, not a gray) for secondary text on plate — citations, mastheads' running descriptor, field labels, dim folios.
- **Field Error** (`#ff8f6b`): a warm coral, used only for invalid form fields (border and message). Literal value in CSS, not a `:root` token.

### Hairlines
- **Hairline Paper** (`rgba(23,23,26,0.18)`): default rules and dividers on paper. **Hairline Paper Strong** (`rgba(23,23,26,0.42)`) for the rare emphasised rule.
- **Hairline Plate** (`rgba(233,230,220,0.20)`): every divider, border and input underline on plate-blue grounds.

### Named Rules
**The Reserved Acid Rule.** `#dcf250` and its hover `#c7e02c` touch only the WhatsApp / contact action — the button, its focus ring, and the WhatsApp fallback link's underline. It never becomes a highlight, a hover tint, a bullet, or a decorative accent anywhere else. Its rarity is the entire reason it converts. Audit test: search the built CSS for `--acid` — every hit must resolve to a WhatsApp/contact element.

**The Paper/Plate Alternation Rule.** Full-width sections are either warm paper or plate-blue, never a third surface, and the type palette flips wholesale with the ground (`ink` / `ink-dim` on paper, `on-plate` / `on-plate-dim` on plate). Adjacent blue zones separate by dropping to `plate-deep`, not by adding a border or shadow.

**The Warm-Neutral Rule.** No neutral is a true gray. `ink-dim` is warm and tinted; `on-plate-dim` is pulled from the plate's blue. If a secondary tone reads as neutral gray, it is wrong.

## Typography

**Display Font:** Archivo (with Helvetica Neue, Arial fallback) — variable, used at its expanded width axis (`font-stretch: expanded`, ≈ wdth 125) and weights 700–900.
**Body Font:** Piazzolla (with Iowan Old Style, Palatino Linotype, Georgia fallback) — variable optical serif, weights 400–600, roman and italic, `font-optical-sizing: auto`.

**Character:** A hard split between a wide, heavy grotesque that builds the structure and a warm optical serif that does all the reading. Archivo is always loud and architectural; Piazzolla is almost always italic and never asked to be a headline. The two never blur roles.

### Hierarchy
- **Display** (Archivo 900 expanded, `clamp(2.1rem, 1rem + 5vw, 5.5rem)`, line-height ~0.88, tracking -0.03em): feature opener titles ("Casamentos") and the closing Contato headline. Set tight and wide, `text-wrap: balance`.
- **Headline** (Archivo 900 expanded, `clamp(1.9rem, 1.3rem + 3vw, 4rem)`, line-height 0.94–0.96, tracking -0.025em): plate section heads (Estúdio, Processo), FAQ head, and feature intro statements (`.feature__intro h3`).
- **Masthead** (Archivo 900 expanded, `clamp(1.15rem, 0.8rem + 0.8vw, 1.7rem)`, tracking 0.12em, uppercase): the "Helena Braz" nameplate inside the first opener caption block; the wordmark in the running header is the same treatment at `0.9rem` / tracking 0.24em.
- **Dek** (Piazzolla italic, `clamp(1.12rem, 0.7rem + 1vw, 1.6rem)`, line-height 1.5, max ~34ch): the single italic line under each opener title and the Estúdio lead-in. The voice that sits between a headline and body.
- **Body / Essay** (Piazzolla roman, `clamp(1.02rem, 0.55rem + 0.55vw, 1.18rem)`, line-height 1.72, max `64ch`): running essay copy in feature intros and Estúdio. `.essay .lead::first-letter` is set as an Archivo 800 expanded drop cap in plate-blue (on-plate on blue grounds).
- **Caption** (Piazzolla italic, `0.92rem`, line-height 1.45, `ink-dim`, max ~40ch): figure captions and pull-quote text. Each caption may lead with a bold label (`<b>`) rendered as an Archivo 600 uppercase eyebrow at `0.7rem` / tracking 0.14em.
- **Label** (Archivo 600 uppercase, `0.68–0.74rem`, tracking 0.14–0.22em): field labels, definition-list terms, `.u-label` credits, footer nav, section eyebrow labels inside figures.
- **Folio** (Archivo 700 expanded, `0.82rem`, tracking 0.04em, `font-variant-numeric: tabular-nums`): every number in the wayfinding system — rail digits, inline "01 / 07" counters, the portrait caption tag.

### Named Rules
**The Two-Voice Rule.** Archivo does structure (mastheads, titles, section heads, folios, nav, buttons, step numerals). Piazzolla does reading (deks, essay, captions, quotes, form inputs, status text). A serif headline or a grotesque body paragraph is a system violation.

**The Expanded-Display Rule.** Every Archivo instance at title or masthead scale carries `font-stretch: expanded` and weight 800–900. Archivo is never set at normal width and normal weight for display; the width is the identity.

**The Italic-Dek Rule.** Deks, pull-quotes, the Contato lede, the masthead's running descriptor and form status messages are set in Piazzolla *italic*. Italic is the system's secondary-voice signal, not emphasis within a sentence.

## Layout

**Container.** A single `.shell` wrapper: `max-width: 1640px`, centered, side padding `--gutter` (`clamp(1.15rem, 4.2vw, 4rem)`). Body copy is separately constrained to `--measure` (`64ch`).

**The index rail.** From `1180px` up, a fixed left rail `4.25rem` wide holds the section index (01–07) plus a vertical "Portfólio" tab; `<main>` and the header inner are inset by that width so content never sits under the rail. Below `1180px` the rail is hidden and wayfinding falls to the mobile overlay menu.

**Feature openers.** `min-height: 100svh`, flex-aligned to one edge. The photo is absolutely positioned to fill; the `.opener__plate` caption block is `min(46rem, 94%)` wide and positioned by modifier: default bottom-left, `.opener--right` bottom-right, `.opener--top` top-left. The three feature openers rotate through these positions. Under `720px` the plate goes full-width and all openers align to the bottom.

**Editorial gallery grid (`.plates`).** A 12-column grid, column gap `clamp(0.8rem, 2vw, 1.6rem)`, row gap `clamp(0.8rem, 2.4vw, 2rem)`. Below `720px` every figure is full width; from `720px` up figures span 4/5/6/7/8/12 columns via `.sp-*` classes, with `.pull` (align to bottom) and `.cap-side` (caption stacks in-column beside a neighbour) modifiers. Figures carry explicit aspect ratios: `.ar-32` (3:2), `.ar-45` (4:5), `.ar-11` (1:1), `.ar-21` (2:1), `.ar-219` (21:9).

**Full-bleed bands.** `.plates figure.bleed` spans `1 / -1` and uses negative margins (`calc(-1 * var(--gutter))`, extended by the rail width at ≥1180px) to escape the shell and the rail inset — a photograph that physically breaks the grid.

**Spacing rhythm.** No numeric spacing scale; spacing is fluid `clamp()` throughout. Plate/FAQ/Contato sections use `section-y` block padding (`clamp(4rem, 10vw, 8rem)`); feature bodies use `feature-y` (`clamp(3.5rem, 9vw, 7.5rem)`). Internal gaps step through `clamp()` ranges rather than fixed tokens.

**Breakpoints observed:** 420, 520, 560, 620, 720, 820, 860, 900, 1180 px. The structural ones are 720 (gallery grid engages, openers simplify), 900 (top nav hides, two-column blocks stack), 1180 (index rail appears).

### Named Rules
**The Numbered Wayfinding Rule.** The reader always knows which of the seven features they are in. It is carried three ways at once: the fixed left index rail (01–07, current item marked), an inline folio in each opener and section head ("01 / 07"), and a section-end counter pointing at the next feature ("02 / 07"). This is a deliberate photo-essay device, not decorative section numbering — the numerals are functional and consistent.

## Elevation & Depth

This system has **no shadows and no gradients**. Not "few" — none. There is no `box-shadow` in the build and no `linear-gradient`/`radial-gradient` anywhere. Surfaces are separated by flat color changes (paper vs. plate vs. plate-deep) and hairline rules, never by lift.

The only tonal overlay in the entire build is a single flat `rgba(14, 23, 48, 0.30)` tint layered over each opener photograph (`.opener__media::after`) so the caption block reads — and it is explicitly a flat fill, not a gradient scrim.

Depth is expressed exclusively through photography interacting with the grid: full-bleed figures that break past the shell and rail, varied aspect ratios that create an uneven column rhythm, the `clip-path` reveal that wipes each gallery figure open on entry, and the focus rack that resolves opener images from soft to sharp. The photographs are the z-axis.

### Named Rules
**The Flat Ink Rule.** No gradient, no drop shadow, no glow, no inset highlight — anywhere, in any state. A surface that needs to feel separated changes color or gains a 1px hairline. If depth is wanted, a photograph crosses the grid.

## Shapes

Uncompromisingly square. `border-radius` is `0` on every element that could take one — the WhatsApp button, the submit button, form inputs (explicit `border-radius: 0`), the overlay menu, figure frames, the portrait tag. The only nonzero radius in the build is a `1px` softening on the `:focus-visible` outline, which is imperceptible and exists only to keep the ring from looking broken at corners.

Forms are borderless except for a single bottom hairline that thickens and brightens on focus — inputs read as ruled lines on a page, not as boxes. Dividers throughout are 1px hairlines (2px for the lead testimonial's top rule and the focused input). Icons are inline SVG on a single consistent stroke (`stroke-width: 1.6`, round caps and joins); the WhatsApp and Instagram glyphs are filled variants of the same set. No icon font, no emoji.

### Named Rules
**The Zero Radius Rule.** Every corner in the system is square. If a component has a visible `border-radius`, it is off-system.

## Components

### Buttons
- **Shape:** square (`border-radius: 0`), no border.
- **Primary — WhatsApp / contact (`.wa`):** Archivo 700 uppercase, tracking 0.1em, acid (`#dcf250`) background, ink text, an inline filled WhatsApp glyph. Padding `0.72rem 1.05rem` in the header (`0.62rem 0.9rem`), `1rem 1.5rem` at large size (`.wa--lg`) in openers and Contato. This is the only button that carries the acid ink.
- **Hover / Active:** background shifts to `acid-deep` (`#c7e02c`); `:active` nudges `translateY(1px)`. Focus-visible ring is acid.
- **Submit (`.form__submit`):** the inverse treatment for a form context — `on-plate` (warm off-white) background, `plate-deep` text, Archivo 700 uppercase, padding `1rem 1.8rem`. Hover drops opacity to 0.88; disabled state is opacity 0.5 with a `progress` cursor. Never acid — the acid is saved for the WhatsApp fallback the form offers on success.
- **Next-link (`.next-link`):** not a button but the section-end forward affordance — a large Archivo 800 expanded link with an italic Piazzolla sub-label and an arrow icon that slides `0.35rem` right on hover.

### Cards / Figures
- **Corner style:** square. **Background:** `paper-sink` shows through behind loading images.
- **Shadow:** none (see Elevation).
- **Border:** none on the image; captions may carry a top hairline via `.cap-side`.
- **Internal padding:** none — figures are edge-to-edge images; the caption sits below with `0.7rem` top margin (or flush, in `.cap-side`).
- **Reveal:** `.reveal` figures animate in with opacity + 24px rise + a `clip-path: inset(0 0 12% 0)` → `inset(0)` wipe over 0.7–0.8s.

### Inputs / Fields
- **Style:** transparent background, no box — a single 1px `hairline-plate` bottom border only, `border-radius: 0`, Piazzolla `1rem` text in `on-plate`, caret `on-plate`. Labels are Archivo 600 uppercase `0.72rem` / tracking 0.14em in `on-plate-dim`, stacked above.
- **Focus:** outline removed; bottom border goes to `on-plate` and thickens to 2px. No glow.
- **Error:** field gains `data-invalid="true"` — bottom border turns `#ff8f6b`, and an Archivo `0.72rem` coral message appears in the reserved `.field__err` slot below (min-height reserved so layout doesn't jump).
- **Select:** `appearance: none`, options themed `plate` background / `on-plate` text. **Date:** `::-webkit-calendar-picker-indicator` is `filter: invert(1)` at 0.55 opacity so it reads on the dark ground.

### Navigation
- **Running header (`.site-header`):** fixed, transparent over the first opener with white wordmark and nav, then transitions to solid `paper` with ink text once scrolled past (toggled via `data-solid`). Nav links are Archivo 600 uppercase `0.78rem` / tracking 0.12em; hover and `aria-current` add a `currentColor` bottom border. Hidden below 900px.
- **Left index rail (`.index-rail`):** fixed, ≥1180px only. Tabular Archivo 700 digits 01–07 in a dim tone; the current section brightens to full and grows a 2px tick on the right edge. Rail tone (`--rail-fg` etc.) is swapped live by script between ink and on-plate depending on whether a dark section owns the viewport center.
- **Mobile overlay (`.overlay-nav`):** full-viewport `plate` panel sliding down from the top; an ordered list of huge Archivo 800 expanded links (`clamp(1.8rem, 9vw, 3rem)`), each prefixed with its dim folio. Closes on link click or Escape. Hamburger morphs to an X via `data-menu="open"` on `<body>`.

### Signature Component — the Feature Opener
Each of the three features (and the page hero) opens on a `100svh` photograph with a solid `plate` caption block set into one corner (position rotated: bottom-left / bottom-right / top-left). The block holds, in order: masthead (first opener only), the feature title in expanded Archivo display, one italic Piazzolla dek, then a foot row with the inline folio ("01 / 07") and the acid WhatsApp button. A flat `rgba(14,23,48,0.30)` tint sits between photo and block. The photo runs the focus rack on entry.

### Signature Component — the FAQ Accordion
Hairline-ruled rows on paper. The question is an Archivo 700 button; the toggle is a CSS-drawn plus/minus (`.sign`) whose vertical bar scales to zero when open. The answer panel animates via `grid-template-rows: 0fr → 1fr` (0.35s) with an inner `overflow: hidden` wrapper — no max-height guessing.

### Named Rules
**The One Authored Motion Rule.** The system has exactly one signature motion: the *focus rack* — opener photographs load blurred and slightly scaled (`blur(7px) saturate(.82) scale(1.05)`) and resolve to sharp over ~1–1.2s when they enter view. Supporting it: the gallery `clip-path` reveal, the bounded hero parallax drift, and small state transitions (header, accordion, arrow nudge). Everything is gated behind `prefers-reduced-motion` — under reduce, all reveals, racks and parallax are neutralized to their resting state.

## Do's and Don'ts

### Do:
- **Do** alternate full-width sections between warm paper (`#f2f1ec`) and plate-blue (`#16233f`), flipping the entire type palette with the ground.
- **Do** open every new feature on a single full-bleed `100svh` photograph with a solid plate caption block; vary the block's corner.
- **Do** keep a WhatsApp / contact action within one screen at every scroll position — it is the conversion target.
- **Do** set all structural type in Archivo at `font-stretch: expanded`, weight 800–900; all reading type in Piazzolla, deks and quotes in italic.
- **Do** number the features — rail, inline folio, and a section-end "0X / 07" counter pointing forward.
- **Do** let photographs break the grid (`.bleed`, varied aspect ratios) when you want depth or emphasis.
- **Do** keep every corner square (`border-radius: 0`) and every divider a 1px hairline.
- **Do** gate every motion behind `prefers-reduced-motion` with a defined resting state.

### Don't:
- **Don't** use the acid ink (`#dcf250` / `#c7e02c`) on anything but the WhatsApp / contact action. No highlights, hovers, bullets, or accents.
- **Don't** add a gradient, drop shadow, glow, or inset highlight — anywhere, in any state. Separate surfaces with color or a hairline.
- **Don't** introduce a third full-width surface color; adjacent blue zones differ only by `plate` vs. `plate-deep`.
- **Don't** set a headline in the serif or a body paragraph in the grotesque.
- **Don't** default to an even masonry / equal-tile photo grid — the layout is a numbered sequence, not a wall.
- **Don't** box the form inputs; they are ruled bottom-lines that thicken on focus.
- **Don't** use an icon font or emoji — icons are inline single-stroke SVG.
- **Don't** promote a page-specific section order (e.g. testimonials before the About/Estúdio section) into a global rule; that ordering is a conversion choice for this landing surface, recorded in the direction contract's STORY block.
