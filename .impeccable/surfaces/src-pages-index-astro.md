---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/locations.astro","src/pages/menu.astro","src/pages/wholesale.astro"]
---

# Home — surface brief

Scope: the Jitter Bean Coffee Co. homepage, and the visual world it establishes for Locations, Menu, Wholesale, Sourcing and Contact.
Visitor mode: **Persuade**.

Audience: a Humboldt local on a phone, mid-errand, usually pre-commute, deciding which of six cafés is open and on the way. Secondary: a wholesale buyer evaluating a local roaster. Tertiary: a job seeker.
Job: get to the right open door fast, know what can be ordered, and come away believing this is the local one worth choosing.
Action: tap through to a specific café, or open the menu. Wholesale's action is the inquiry form.
Proof/content: six real cafés with live open/closed state, a 40-item menu recovered from flat images, verbatim mission copy, and the client's own registered mascot.
Constraints: no ecommerce; four of six locations have no verified address or hours yet and must render as visibly absent, never invented; menu ships without prices but is modelled price-ready; anti-references named by the user are corporate chain polish and generic small-business template.

## Direction contract

THESIS: The site is a printed coffee tin, not a page about coffee. Banded label lockups, rationed spot inks and a cartoon mascot who already exists carry the whole system. It refuses the full-bleed latte-art hero with a centred tagline and three cards beneath it, which is the arrangement this category ships by default and the one the client is leaving behind.

OWN-WORLD: Charcoal tin body (#2A2725 field, #383838 panel) under warm ivory label bands (#F4E9D8), keylined in ink black (#1C1A18) with rounded tin-panel corners. Two spot inks only: brand orange #F07838 for live state and the mascot, litho red #9B2A18 for flashes and banners. Halftone dot texture and a faint off-register edge as real printing artifacts. Bevan for display slab caps, matching the logo's spurred Clarendon; Archivo for everything else, tabular figures for all hours. Devices: starburst flash badges, net-weight stamps, letterspaced descriptor lines, and the mascot breaking a keyline.

STORY: The visitor understands in one glance that Jitter Bean has six cafés and which are open right now. They believe it is genuinely local and genuinely a roaster, because the page shows six specific doors rather than claiming warmth. They tap the café on their route, or open the menu.

FIRST VIEWPORT: Full-bleed charcoal field with halftone grain. An ivory label band runs edge to edge, ink-keylined with rounded tin corners; inside it "JITTER BEAN COFFEE CO." in Bevan slab caps with the registered mark. The bean mascot sits mid-leap in orange, breaking the band's top keyline. Left below the band, "LOCALLY OWNED · LOCALLY ROASTED · HUMBOLDT COUNTY, CA" letterspaced in Archivo caps. Right, an orange litho starburst carrying the live count, "N OPEN NOW". The primary action is directly beneath: the first rows of the six-café board, each café a label panel with its town, its hours and an orange OPEN flash when it is open — visible without scrolling on desktop, and directly under the band on mobile.

FORM: The Coffee Tin — mid-century keywind coffee tin lithography (Hills Bros, MJB, Chock Full o'Nuts). Position 1 of 7 on my ordered grounded list; chosen by the user from the IMPECCABLE'S PICK card over the assigned roll, in re-roll round 1. Seed key 7fdf4680. Build path: code-led, no comp owed.

Signature interaction: the OPEN flash is stamped, not faded — a spot-ink starburst lands on each open café's panel with a single-beat print-registration slam, recomputed against real local time, and a café inside its last hour takes a litho-red CLOSING SOON band instead. Under prefers-reduced-motion the flash is simply present, no stamp. Motion grammar: everything moves as printed matter does — one beat, no easing theatrics, no parallax.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Addresses, hours and phone numbers for Valley West, 5th Street, Harris and Fortuna — user is sending them; until then those four panels render as an explicit "hours not yet listed" state.
- Conflicting hours for Plaza and Broadway between the incumbent homepage and locations page, and two different phone numbers on the incumbent site. Client must verify; the build uses the Locations-page values and flags them in content as unverified.
- Vector logo not supplied; the raster mark is in use and every image is structured for one-file swap.
