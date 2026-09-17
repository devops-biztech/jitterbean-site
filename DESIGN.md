---
name: Jitter Bean Coffee Co.
description: A printed mid-century coffee tin — charcoal tin body, ivory label bands, two rationed spot inks.
colors:
  tin-field: "#2a2725"
  tin-panel: "#383838"
  tin-panel-lit: "#433f3c"
  ink: "#1c1a18"
  label: "#f4e9d8"
  label-warm: "#ece0cb"
  label-dim: "#d6c9b2"
  spot-orange: "#f07838"
  spot-orange-lit: "#ff9457"
  spot-orange-ink: "#ff9457"
  spot-red: "#9b2a18"
  paper: "#fffdf8"
  ok: "#1d6b3f"
  text: "#f4e9d8"
  text-dim: "#b3a894"
  text-faint: "#afa89d"
  on-label: "#1c1a18"
  on-label-dim: "#5c5346"
  on-label-faint: "#6b6255"
  roast-1: "#c8a06a"
  roast-2: "#a8763f"
  roast-3: "#7b4f28"
  roast-4: "#4a2c18"
typography:
  display:
    fontFamily: "Bevan, Clarendon, Georgia, serif"
    fontSize: "clamp(3rem, 1.6rem + 6.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bevan, Clarendon, Georgia, serif"
    fontSize: "clamp(2.4rem, 1.6rem + 4vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bevan, Clarendon, Georgia, serif"
    fontSize: "clamp(1.45rem, 1.25rem + 1vw, 2rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  prose:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(0.8rem, 0.76rem + 0.2vw, 0.9rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.12em"
  descriptor:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(0.8rem, 0.76rem + 0.2vw, 0.9rem)"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.18em"
  stamp:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(0.8rem, 0.76rem + 0.2vw, 0.9rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.2em"
rounded:
  band: "2px"
  mark: "3px"
  control: "5px"
  field: "6px"
  panel: "8px"
  tin: "14px"
  full: "999px"
spacing:
  sp-1: "0.25rem"
  sp-2: "0.5rem"
  sp-3: "0.75rem"
  sp-4: "1rem"
  sp-5: "1.5rem"
  sp-6: "2rem"
  sp-7: "3rem"
  sp-8: "4rem"
  sp-9: "6rem"
  sp-10: "8rem"
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2.5rem)"
components:
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
  button-quiet-hover:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
  button-loud:
    backgroundColor: "{colors.spot-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.5rem"
  button-loud-hover:
    backgroundColor: "{colors.spot-orange-lit}"
    textColor: "{colors.ink}"
  button-submit:
    backgroundColor: "{colors.spot-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem 2rem"
  button-submit-disabled:
    backgroundColor: "{colors.label-dim}"
    textColor: "{colors.on-label-dim}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.on-label}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.75rem"
  label-panel:
    backgroundColor: "{colors.label}"
    textColor: "{colors.on-label}"
    rounded: "{rounded.tin}"
    padding: "1rem"
  tin-panel:
    backgroundColor: "{colors.tin-panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.tin}"
    padding: "1.5rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.5rem 0.75rem"
  nav-link-current:
    backgroundColor: "{colors.label}"
    textColor: "{colors.ink}"
  stamp-mark:
    backgroundColor: "transparent"
    textColor: "{colors.label-dim}"
    typography: "{typography.stamp}"
    rounded: "{rounded.mark}"
    padding: "0.32em 0.7em"
  flash-open:
    backgroundColor: "{colors.spot-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.75rem 1.5rem"
  flash-closing:
    backgroundColor: "{colors.spot-red}"
    textColor: "{colors.label}"
    typography: "{typography.label}"
    rounded: "{rounded.band}"
    padding: "0.75rem 1.5rem"
---

# Design System: Jitter Bean Coffee Co.

## Overview

**Creative North Star: "The Coffee Tin"**

The site is a printed object, not a page about coffee. Every surface is either the
charcoal body of a keywind tin or an ivory label band lithographed onto it, keylined
in ink black with the tin's own rounded corners. Depth comes from the label sitting
*on* the body — a hard 2px keyline plus an offset-and-blur lift — never from a glass
card floating in a gradient. Halftone dot texture and a faint off-register second-ink
edge are carried as real printing artifacts, at 6–9% opacity, so they read as press
behaviour rather than as a filter.

The palette is rationed the way a two-plate press rations plates. The tin body and
the label stock do the work; brand orange and litho red are spot inks, spent on live
state and on flashes. Type is a two-face pairing: Bevan, a spurred Clarendon slab
matched to the client's own logo, set tight and low-leaded for every heading; Archivo
for everything else, with letterspaced uppercase carrying the small structural labels
a printed tin uses for net weights, descriptors and column heads. Numbers are tabular
everywhere, because the hours board is the product.

It refuses the arrangement this category ships by default: the full-bleed latte-art
hero with a centred tagline and three cards under it. It also refuses the two named
anti-references — corporate chain polish and the generic small-business template.

**Key Characteristics:**
- Charcoal tin field with ivory label bands, keylined and cornered like a printed tin
- Two spot inks only, spent on state and flashes, never on decoration
- Bevan slab caps against letterspaced Archivo uppercase labels
- Printed-matter motion: one beat, no easing theatrics, no parallax
- Tabular figures on every time and number
- Coffee colour used as a real data scale, not as a mood

## Colors

Two press plates over a tin body: a warm ivory label stock on charcoal metal, with
orange and red spent sparingly as spot ink.

### Primary
- **Brand Orange** (`{colors.spot-orange}`): the live-state and affordance ink. It
  fills the OPEN starburst flash, the open-count badge, the today-column rule on the
  hours sheet (at 14% as a wash plus a 2px inset edge), the loud call-to-action, the
  focus ring, the caret, the selection highlight, the link underline, the skip link
  and the scrollbar thumb on hover. It is also the mascot's own colour. It sets no
  headings and no body copy.
- **Brand Orange Lit** (`{colors.spot-orange-lit}`): hover state for orange-filled
  controls only. It never appears at rest.
- **Brand Orange Ink** (`{colors.spot-orange-ink}`): orange at text weight on
  `{colors.tin-panel}`. One caller ships it — the program panel's action line — plus
  the Stamp's `orange` tone, which is defined and currently uncalled. Same value as
  Brand Orange Lit, different job: lit is a hover state, ink is the text-on-panel
  role, and the two are kept apart so a future hover change cannot silently move a
  contrast floor.

### Secondary
- **Litho Red** (`{colors.spot-red}`): reserved. It has exactly two jobs — the
  CLOSING SOON band on a café in its last open hour, and error text plus invalid
  field borders on the wholesale form. Nothing else may claim it.

### Tertiary
- **Roast Ramp** (`{colors.roast-1}` → `{colors.roast-4}`): coffee colour used as a
  real four-step data scale. Each swatch is mixed by its own roast depth
  (`color-mix(in oklab, var(--roast-4) calc(var(--depth) * 100%), var(--roast-1))`),
  so the colour encodes the value rather than illustrating it.

### Neutral
- **Tin Field** (`{colors.tin-field}`): the page ground and the masthead. Also the
  `theme-color`, so the browser chrome joins the tin.
- **Tin Panel** (`{colors.tin-panel}`): raised panels — programs, the menu call,
  the wholesale aside, the footer.
- **Tin Panel Lit** (`{colors.tin-panel-lit}`): scrollbar thumb at rest; the one
  place the metal catches light.
- **Ink Black** (`{colors.ink}`): every keyline and every border on a label band,
  and the text struck onto orange.
- **Label Stock** (`{colors.label}`): the ivory band. Body text on the tin
  (`{colors.text}`) is the same value — the stock and the ink are one warm white.
- **Label Warm** (`{colors.label-warm}`): the table head band, one shade down from
  the sheet so the head reads as a separate printing.
- **Label Dim** (`{colors.label-dim}`): stamp marks on the tin body, and the
  disabled control fill.
- **Warm Tint Dim / Faint** (`{colors.text-dim}`, `{colors.text-faint}`): secondary
  and tertiary text on the tin body — tinted from the label stock, never grey.
- **On-Label Ink Dim / Faint** (`{colors.on-label-dim}`, `{colors.on-label-faint}`):
  the same two steps for text sitting on ivory.
- **Form Paper** (`{colors.paper}`): the one surface brighter than label stock — the
  fill of an editable field, so a field reads as paper laid on the band (17.07:1
  against ink).
- **Success Green** (`{colors.ok}`): the single success tone, on form status text and
  as a 16% `color-mix` wash behind the success notice. 5.42:1 on label stock. It is a
  status colour, not a third spot ink, and never appears outside form feedback.

### Named Rules
**The Two-Plate Rule.** Orange and red are spot inks on a press, not a palette.
Orange marks live state, action and the mascot; red marks CLOSING SOON and error.
Neither sets a heading: every section head on the tin is `{colors.text}`, and the
footer heads are `{colors.label-dim}` (7.18:1 on panel). If a new surface wants
either ink for emphasis, it does not get it — it gets the label band.

**The Client Artwork Exception.** The two-ink ration governs everything the design
system draws. It does not govern a piece of client artwork whose own colour carries
its meaning. The reusable-mug poster is full-colour green and ships unrecoloured,
shown at its own colour rather than duotoned onto the ink ramp: its whole message is
*go green*, and printing it orange would have made the system contradict the copy it
illustrates. The test is decoration or content — decoration gets rationed, content
does not. This is an exception with a stated reason, not a loosening; nothing the
system itself draws may claim it.

**The Never-Grey Rule.** Secondary and tertiary text is tinted from the stock it sits
on. `{colors.text-dim}` and `{colors.text-faint}` on the tin, `{colors.on-label-dim}`
and `{colors.on-label-faint}` on ivory. A neutral grey anywhere is a bug.

**The Audited Floor Rule.** Every tint in this system was chosen by computation and
recomputed against the shipped code, never estimated by eye. `{colors.text-faint}`
and `{colors.on-label-faint}` are the dimmest text tints that ship: 6.3:1 on the tin
field and 4.99:1 on label stock. They are the floor, not a suggestion, and the
product's WCAG 2.2 AA commitment is what makes them binding.

**The Orange-By-Ground Rule.** Orange does not set headings, and where it does run at
text weight it picks its value from the ground it lands on. On `{colors.tin-field}`,
base `{colors.spot-orange}` is legal at 5.26:1. On `{colors.tin-panel}` it measures
4.16:1 and fails — that ground takes `{colors.spot-orange-ink}` instead (5.37:1), and
the Stamp's orange tone additionally sits at 0.95 opacity so its composite against
the panel clears the floor at 4.99:1 rather than relying on being `aria-hidden`. On
label stock, orange is never text (2.35:1); it appears there only as a fill with ink
struck on top of it (6.15:1).

## Typography

**Display Font:** Bevan (with Clarendon, Georgia, serif) — self-hosted, subset Latin
and Latin-Extended
**Body Font:** Archivo (with system-ui, -apple-system, Segoe UI, sans-serif) —
self-hosted variable weight 400–700

**Character:** Bevan is the spurred Clarendon slab the client's own logo is drawn in;
set in caps at 0.86–0.95 line-height with negative tracking it reads as struck label
type, not as a web headline. Archivo carries every other job, and earns its keep in
uppercase: letterspaced small caps do the structural labelling a printed tin does.

### Hierarchy
- **Display** (400, `clamp(3rem, 1.6rem + 6.5vw, 6rem)`, 0.95): page `h1`. The
  homepage lockup pushes further — `clamp(2.4rem, 8.6vw, 6rem)` at 0.86 line-height
  and −0.035em — because a wordmark on a band is set tighter than a headline.
- **Headline** (400, `clamp(2.4rem, 1.6rem + 4vw, 4.5rem)`, 0.95): `h2`, section
  openers and board titles.
- **Subhead** (400, `clamp(1.9rem, 1.5rem + 2vw, 3rem)`, 0.95): interior section
  heads and menu board titles, in `{colors.text}`.
- **Title** (400, `clamp(1.45rem, 1.25rem + 1vw, 2rem)`, 0.95): `h3`, card and panel
  heads. Café names on the board step down again to `--step-1` at line-height 1.
- **Body** (400, `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`, 1.6): default text.
- **Prose** (400, `clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem)`, 1.65, 68ch max): the lead
  passage under a heading, set one step up and in `{colors.text-dim}`.
- **Label** (700, `clamp(0.8rem, 0.76rem + 0.2vw, 0.9rem)`, +0.12em, uppercase):
  buttons, nav, table heads, form labels, city lines, disclosure summaries.
- **Descriptor** (600, same size, +0.18em, uppercase): the letterspaced line a tin
  prints under its lockup. Used once per surface at most.
- **Stamp** (700, same size, +0.2em, uppercase): net-weight and lot marks only.

### Named Rules
**The Tabular Figures Rule.** Every `time`, `.tabular` and `[data-hours]` element runs
`font-variant-numeric: tabular-nums` with `'tnum' 1`. Hours align in their column or
the board stops being a board.

**The Two-Face Rule.** Bevan sets headings and café names and nothing else. Every
label, number, button and body line is Archivo. A third face, or Bevan below
`--step-1`, is out of system.

**The Letterspacing Ladder Rule.** Uppercase Archivo tracks by job, not by taste:
0.12em for controls and labels, 0.16em for footer heads, 0.18em for descriptors,
0.2em for stamps. Headings track negative (−0.02em, −0.035em on the lockup).

## Layout

One centred column: `width: min(100% - var(--gutter) * 2, 1360px)` with a fluid
gutter of `clamp(1rem, 0.5rem + 2.5vw, 2.5rem)`. Reading measure is capped at 68ch
for prose and tightened by hand where a block should read narrower (46ch for the
board note, 52ch for the menu call, 60ch for the descriptor).

Vertical rhythm runs on a 10-step scale from 0.25rem to 8rem. Sections separate at
`{spacing.sp-9}` (6rem) on the homepage and `{spacing.sp-8}` on interior pages; the
hours board sits closer at `{spacing.sp-6}` so it is visible without scrolling. The
footer is pushed off by `{spacing.sp-10}`. Internal padding is `{spacing.sp-5}` for
panel text blocks and `clamp(2rem, 6vw, 6rem)` for the large call panels.

Grids are intrinsic rather than breakpoint-driven: the footer is
`repeat(auto-fit, minmax(210px, 1fr))`, the roast ramp is four equal columns, the
programs row is an asymmetric `0.8fr / 1.2fr` set to `align-items: stretch`. Four
real breakpoints exist: **1120px**, where the hours board swaps from the dense table
to stacked disclosure cards — the dense sheet needs about 1040px of its own, and
below that `overflow: clip` was cutting the Status column and the OPEN flash off the
right edge; **900px**, where the split, programs and menu-call grids drop to one
column; **700px**, where the tin band retunes its padding and the mascot shrinks; and
**640px**, where the masthead shrinks its mark from 150px to 104px and centres,
because on a phone the chrome must not eat the fold the board needs.

Side-by-side cards are stretched, not left to their own heights: `.programs` stretches
its items and each panel is `grid-template-rows: auto 1fr`, so two cards of unequal
copy end on the same line. The column weights do most of that work before stretch is
asked to — `0.67fr / 1.33fr`, chosen so a portrait poster and a landscape photograph
resolve to near-equal heights on their own (measured flush at 750px each at 1440 and
675px at 1150).

**The One Dataset, Two Renderings Rule.** The hours board ships the same data twice —
a dense café-by-day table above 1120px, stacked per-café disclosures below — and
neither is a degraded version of the other. Both render all six cafés as real text.

## Elevation & Depth

Depth is printing, not glass. Every lift is an offset plus a blur in near-black
(`rgba(12, 10, 9, 0.4–0.5)`), so a label band reads as a thing resting on metal. The
keyline does at least as much work as the shadow: 2px ink black around every label
band and panel, 1px hairlines for internal rules. There are no flat halos, no glows,
and no hard offset shadows — this is not a neobrutalist world.

### Shadow Vocabulary
- **Lift 1** (`box-shadow: 0 2px 4px rgba(12, 10, 9, 0.4)`): stacked hours cards and
  the CLOSING SOON band. A label lying flat.
- **Lift 2** (`box-shadow: 0 6px 18px rgba(12, 10, 9, 0.45)`): the hours sheet, the
  menu sheet, roast bags.
- **Lift 3** (`box-shadow: 0 14px 40px rgba(12, 10, 9, 0.5)`): the masthead band only.
  One element per page earns it.
- **Drop shadows on artwork**: the mascot (`drop-shadow(0 10px 22px rgba(12,10,9,.55))`)
  and the starburst flash (`drop-shadow(0 2px 3px rgba(28,26,24,.35))`) — cut shapes
  get a drop-shadow, boxes get a box-shadow.

### Named Rules
**The Keyline-First Rule.** Separation is a 2px ink keyline. Shadow is what the
keyline sits on top of, never the only edge a surface has.

**The Printed-Matter Motion Rule.** Everything moves in one beat: `--beat` 260ms
(`--beat-slow` 460ms where a longer move is needed) on `--press`
`cubic-bezier(0.16, 0.84, 0.3, 1)`. Transitions carry colour and border only. The one
authored moment in the whole system is the stamp: the status flash lands from
`scale(1.5) rotate(-7deg)` at zero opacity to rest, fired once per flash on landing
and never replayed, and fully suppressed under `prefers-reduced-motion`, where the
flash is simply present. No parallax, no scroll reveals, no easing theatrics.

## Shapes

Six named corners carry the whole system and nothing is set by literal. **The tin
corner** (`{rounded.tin}`, 14px) belongs to every label band, sheet and large card —
the die-cut corner of a printed tin. **The panel corner** (`{rounded.panel}`, 8px)
belongs to the smaller inset blocks: the signatures panel, the wholesale notice, the
locations pending block. **The field corner** (`{rounded.field}`, 6px) belongs to
inputs, textareas and roast bags. **The control corner** (`{rounded.control}`, 5px)
belongs to every button, nav item, submit and skip link. **The mark corner**
(`{rounded.mark}`, 3px) belongs to struck marks — the Stamp border, the disclosure
marker box, the menu size chips. **The band corner** (`{rounded.band}`, 2px) belongs
to the CLOSING SOON band and the global focus ring.

The full-round pill was deliberately removed as a control default; `{rounded.full}`
survives in exactly three non-control places, the scrollbar thumb and the two 6px
roast swatch bars, where the shape is a bar and not a button. A nested inner keyline
follows its parent at `calc(var(--radius-tin) - 6px)`, inset 7px, so the label
carries the second rule a printed edge has.

Borders are the primary form language: `{keyline}` 2px ink for structure,
`{keyline-hair}` 1px at 18–45% ink for internal rules. Panels use `overflow: clip` so
artwork is cropped by the tin corner rather than overhanging it. The halftone is a
`radial-gradient` dot at `6px 6px` on a `::after` at `z-index: -1`, with its ink
colour set per-surface via `--halftone-ink` (ivory at 6–8% on the tin, ink at 7% on a
label sheet).

**The Crop-Within-The-Margin Rule.** A photograph the system chose is cropped freely
to its grid: the crew photo holds `16 / 10` with `object-fit: cover` and loses
whatever the frame loses. A piece of client artwork is fitted only within its own
blank margin — measure the margin first, crop no further than it, and never into the
art. The mug poster is 1100×1424 (0.772) with a blank band of about 4% at the bottom
edge and more at the top; a `1 / 1` box would need 162px a side and eat the headline,
which is why it was matted before, while `4 / 5` needs 24.5px a side and lands inside
the blank band. So it ships `aspect-ratio: 4 / 5` with `object-fit: cover`, filling
its panel edge to edge with nothing printed lost. Below 900px it reverts to
`aspect-ratio: auto` and runs at its native ratio, uncropped.

Extending a canvas outward is not an alternative: this poster's artwork runs to its
own edges, so gradient extrapolation smeared the edge lettering into horizontal
streaks and mirroring produced reversed letters. Neither shipped. Measure, then crop
inside the measurement.

**The Off-Register Rule.** The homepage band carries a 1px orange keyline offset by
−3px/−2px/1px/−4px at 40% opacity behind the ink one. Off-register is asymmetric and
sub-pixel-scale; a symmetric second border is a frame, not a misregistration, and is
out of system.

## Components

### Buttons
- **Shape:** the control corner (5px), 2px border, uppercase Archivo label type
  tracked 0.12em.
- **Quiet (`.btn`):** transparent on the tin, bordered in `{colors.text-faint}`,
  text in `{colors.text}`, padding `0.75rem 1.5rem`. Hover inverts to the label band:
  ivory fill, ivory border, ink text.
- **Loud (`.btn--loud`):** filled `{colors.spot-orange}` with ink text; hover lifts to
  `{colors.spot-orange-lit}`. One per section at most — this is a spot ink.
- **Submit:** orange fill with a 2px *ink* border (it sits on a label band, so it
  takes the band's keyline), `0.75rem 2rem`, `:active` presses 1px down, disabled
  goes `{colors.label-dim}` on `{colors.on-label-dim}` with `cursor: progress`.
- **Focus:** the global ring — `3px solid {colors.spot-orange}`, 3px offset, 2px
  radius. No component overrides it except form fields.

### Cards / Containers
- **Corner Style:** the tin corner (14px), `overflow: clip`.
- **Background:** ivory `{colors.label}` when the content is data to be read
  (hours sheet, menu sheet, stacked hours cards, the wholesale form); tin
  `{colors.tin-panel}` when the content is a program, an aside or a call.
- **Border:** always 2px `{colors.ink}`.
- **Shadow:** Lift 2 for sheets, Lift 1 for stacked cards, none for tin panels —
  a panel of the same metal as the field does not need to float.
- **Internal Padding:** `{spacing.sp-5}` for text blocks, `clamp(1.5rem, 4vw, 3rem)`
  for sheets.
- **Multi-column sheets:** the menu sheet pairs its runs with an explicit two-column
  grid (`repeat(2, minmax(0, 1fr))`, `align-content: start`, collapsing to one
  column), not CSS `columns`. Column balancing left a long void under the shorter
  run; pairing is decided, not guessed.

### Inputs / Fields
- **Style:** `{colors.paper}` on the label band, ink text, 2px border at 35% ink, the
  field corner (6px), `0.75rem` padding. Labels above the field in uppercase Archivo
  700 tracked 0.12em in `{colors.on-label-dim}`; hints in italic at the same size.
- **Hover:** border deepens to 60% ink.
- **Focus:** the outline is suppressed and replaced in place — border goes
  `{colors.spot-orange}` with a `0 0 0 3px rgba(240,120,56,0.35)` ring, so the focus
  affordance stays inside the field's own rectangle.
- **Error:** `[aria-invalid='true']` takes a `{colors.spot-red}` border, with the
  message beneath in `{colors.spot-red}` at 600.
- **Success:** status text and the notice take `{colors.ok}`, the notice over a
  `color-mix(in oklab, var(--ok) 16%, transparent)` wash at the panel corner.

### Navigation
- Uppercase Archivo 600 at the label step, tracked 0.1em, in `{colors.text-dim}`, with
  a transparent 1px border reserving the space. Hover brightens to `{colors.text}` and
  reveals the border in `{colors.text-faint}`. The current page reads as a struck
  label plate: ivory fill, ink text, ink border and an inset 1px ink line. Below 640px
  the whole masthead centres and tightens tracking to 0.06em.

### Starburst (signature)
An authored vector flash: the point coordinates are computed (default 22 points,
0.82 inner-radius ratio, starting at 12 o'clock), never approximated with a polygon
mask. `stretch` swaps `preserveAspectRatio` to `none` so the burst prints as an oval
behind a line of words rather than forcing a square. **Callers must size it from the
outside:** the SVG is absolutely positioned at `inset: 0; width: 100%; height: 100%`
with an explicit box, because an auto-width absolute SVG falls back to its intrinsic
size and ignores `inset`. **The Global Reach Rule.** Astro scoped styles do not cross
into a child component's markup — reach the burst as `.owner :global(svg)` from an
element you own. This trap bit the build twice.

### Stamp (signature)
The net-weight / lot mark: uppercase Archivo 700 tracked 0.2em, 0.32em/0.7em padding,
a 2px `currentColor` border at 3px radius, rotated a degree or three off square
(`tilt`, default −3°) and held at 82% opacity because struck ink never sits at full
density, at the mark corner (3px). Three tones: `label` on the tin, `ink` on a label
band, and `orange` — which takes `{colors.spot-orange-ink}` and 0.95 opacity, because
it renders on a tin panel and has to clear the contrast floor on its own. Only
`label` and `ink` currently ship callers. It sits on a
panel edge as a struck mark. It is never placed above a heading as a kicker.

### Hours Board (signature)
The product surface. Above 1120px: an ivory sheet, café rows against Monday-first day
columns, café names in Bevan over uppercase city lines, a warm label-stock table head
with a 2px ink underline, 1px hairline row rules. Today prints as a column rule —
a 14% orange wash with `inset 2px 0 0` orange on both edges and 700 weight. The status
cell carries the flash: an orange starburst with ink text stamped over it for OPEN, a
`{colors.spot-red}` band at 2px radius with ivory text for CLOSING SOON (a band, not a
burst), the burst hidden with only dim ink text for CLOSED, and a plain
`{colors.on-label-faint}` "Not yet listed" where a café has no published hours. Below
1120px the same data renders as stacked ivory cards with a disclosure for the week,
whose marker is drawn rather than typed: an inline SVG of two 2px `currentColor`
strokes in a keylined box at the mark corner, with the vertical stroke collapsing via
`scaleY(0)` on `[open]` in the standard beat. The stroke weight is the system's, not
the font's.
State is recomputed on the café's clock every 30s and on visibility change; a café
with unpublished hours renders visibly absent, never invented.

## Do's and Don'ts

### Do:
- **Do** put data on the ivory label band and atmosphere on the tin body. If a
  visitor has to read numbers, it is a label.
- **Do** keyline every band and panel in 2px `{colors.ink}` and corner it at 14px.
- **Do** use the 5px control corner for every button, nav item and field control.
- **Do** spend orange on live state, the mascot, focus and one loud call per section;
  spend red on CLOSING SOON and errors only.
- **Do** pick the orange by its ground: `{colors.spot-orange}` for text on the tin
  field, `{colors.spot-orange-ink}` for text on a tin panel.
- **Do** set every time and count in tabular figures.
- **Do** keep motion to one 260ms beat on `cubic-bezier(0.16, 0.84, 0.3, 1)`, and
  keep the stamp as the only authored moment.
- **Do** encode roast depth with the ramp via `color-mix`, so the colour carries data.
- **Do** reach a child component's SVG with `:global(svg)` from an element you own,
  and give it an explicit box.
- **Do** render missing data as visibly absent, in `{colors.on-label-faint}`.
- **Do** take every corner from a named radius token; there are six, and they cover
  every shape the build makes.
- **Do** draw icons and markers as inline SVG with a 2px `currentColor` stroke.
- **Do** measure a piece of client artwork's blank margin before fitting it to a box,
  and pick the ratio that crops inside that margin.

### Don't:
- **Don't** use orange or red as decoration, as a heading colour, as a section
  background, or as a mood wash. They are spot inks.
- **Don't** recolour client artwork to bring it inside the ration when its colour is
  its message, and don't crop into its art or extend its canvas to make it fit.
- **Don't** set base `{colors.spot-orange}` at text weight on `{colors.tin-panel}` —
  it measures 4.16:1 and fails AA. That ground takes `{colors.spot-orange-ink}`.
  Never set orange as text on label stock at all.
- **Don't** reintroduce the full-round pill as a control shape. 999px is for the
  scrollbar thumb and the roast swatch bars.
- **Don't** invent a radius or write a literal one. Use the six tokens: 14px, 8px,
  6px, 5px, 3px, 2px.
- **Don't** hardcode a colour literal in a component. Every value, including form
  paper and the success tone, is a token.
- **Don't** use a neutral grey for secondary text. Tint from the stock.
- **Don't** add a third typeface, or set Bevan below `--step-1`.
- **Don't** replace the computed starburst with a decorative polygon or an image.
- **Don't** add parallax, scroll reveals, staggered entrances or a second easing curve.
- **Don't** ship a kicker or eyebrow above a heading — the Stamp is a struck corner
  mark, not a kicker, and the system has no eyebrow.
- **Don't** use a hard offset shadow. Depth here is offset plus blur in near-black.
