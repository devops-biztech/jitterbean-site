# Jitter Bean Coffee Co.

Rebuild of jitterbeancoffee.com — a locally owned, locally roasted six-café coffee company in Humboldt County, California. Replaces an unfinished Wix site.

Astro 5, static, deployed to Vercel. One serverless route handles the wholesale inquiry form; everything else is prerendered HTML.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # .vercel/output
```

## What lives where

| Thing | File |
|---|---|
| The six cafés, hours, verification flags | `src/data/locations.ts` |
| Every drink on the menu | `src/data/menu.ts` |
| Contact facts, roasts, nav, timezone | `src/data/site.ts` |
| Open / closed logic | `src/lib/open-state.ts` |
| Design tokens | `src/styles/tokens.css` |
| The live hours board | `src/components/HoursBoard.astro` |
| Wholesale form endpoint | `src/pages/api/wholesale.ts` |
| Product context and durable constraints | `PRODUCT.md` |
| The design system as built | `DESIGN.md`, `.impeccable/design.json` |
| The visual direction contract | `.impeccable/surfaces/` |

Two components carry the world's devices and are worth reading before adding UI: `Starburst.astro` (the spot-ink flash) and `Stamp.astro` (the net-weight mark). Note that Astro's scoped styles do **not** reach a child component's internal markup — position them with a scoped `:global()` descendant, e.g. `.count__badge :global(svg)`, or the rules silently do nothing.

Client photography and the logo are in `src/assets/img/`, pulled from the incumbent Wix CDN and structured so each is a one-file swap. Astro generates responsive WebP at build.

## Environment

Copy `.env.example` to `.env` and fill it in. Set the same three variables in the Vercel project.

```
RESEND_API_KEY=
WHOLESALE_FROM=
WHOLESALE_TO=administrator@jitterbeancoffee.com
```

Without them the form fails loudly in production and tells the visitor to email the office directly — it never pretends to have sent. In `astro dev` it logs the submission instead.

## Hours and open/closed

Hours are per café, per weekday, in `locations.ts` as 24-hour strings. Open/closed is computed client-side against `America/Los_Angeles` regardless of the visitor's own clock, refreshed every 30 seconds and on tab focus. A café inside its last hour shows `CLOSING SOON` rather than `OPEN`.

To add a café's hours, fill in `address`, `zip` and `hours`. Setting `verified: true` is what publishes that café into schema.org — see below.

## Two rules this codebase enforces

**1. Nothing unverified is published as fact.** The old site published contradictory hours on two different pages and two different phone numbers. Here, a café with `hours: null` renders as visibly pending rather than guessed, and `verified: false` keeps it out of structured data entirely, because wrong hours in a search result are worse than no hours.

**2. The menu is text.** The old menu was two flat 2MB PNGs with no text layer — unreadable to search engines, screen readers, and anyone on a phone. It is now structured content. Prices are modelled but empty: add a `price` to any item and it renders, with no redesign needed.

## Still blocked on the client

- **A vector logo.** The current mark is raster.
- **The Clover gift card URL**, which currently points at clover.com generically.
- **Per-café phone numbers**, if the client wants them. Every café currently routes to the office number.

Resolved and no longer blocking: all six addresses and hour sets are client-confirmed and `verified: true`, so every café publishes `openingHoursSpecification` and `alternateName` to search engines. Café-to-photo mapping was recovered from the old site's gallery data and is confirmed rather than guessed. The phone number is confirmed as (707) 476-9393. Harris's ZIP was corrected to 95503 — Montgomery St is in Myrtletown, and the 95501 originally supplied would have published a wrong postal code.

Harris carries a `locating` line — "Corner of Harris & Montgomery" — which closes the gap between the name locals use and the street it is addressed on. It was verified rather than assumed: the address geocodes to 40.7802145,-124.1385639, and an OpenStreetMap query returns Montgomery Street and Harris Street as the only named streets within 35m. The client's own storefront photo shows the Harris St Safeway behind the café, which corroborates it. The `locating` field is optional and available on any café whose common name is not its street.
