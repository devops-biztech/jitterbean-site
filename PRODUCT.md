# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, deployed to Vercel. The wholesale inquiry form posts to an Astro server endpoint that sends mail via a transactional provider (Resend or SendGrid) — chosen by the user over static-host form handling for control over validation and autoresponders. This requires the Vercel adapter and at least one server-rendered route; the rest of the site is static.

Image generation is unavailable in the build environment, so surfaces are built code-first.

## Users

**Primary: local Humboldt County customers**, usually on a phone, usually mid-errand or pre-commute. Their job is almost always one of three things, in this order of frequency:

1. "Is the one near me open right now, and where exactly is it?"
2. "What can I order?" — browsing drinks, often for someone else in the car.
3. "Which location should I go to?" — choosing between six.

**Secondary: prospective wholesale buyers** (cafés, restaurants, offices, grocers) evaluating whether a local roaster can supply them. They need to know the coffee is real and then reach a human.

**Tertiary: job seekers.** The incumbent site devotes significant homepage space to hiring, which indicates ongoing recruiting need across six locations.

## Product Purpose

Jitter Bean Coffee Co. is a locally owned, locally roasted coffee company operating six cafés in Humboldt County, California. The site exists to get local customers to a specific open door with a known menu, to make the wholesale program reachable, and to represent a business whose stated differentiator is how it treats people.

Success is not engagement. Success is a customer finding correct hours for the right location in under ten seconds, and a wholesale lead arriving in the client's inbox.

## Positioning

Locally owned *and* locally roasted, at six-location scale, in a single rural county. Both halves matter: chains have scale but roast elsewhere; single-shop roasters roast locally but can't be on your route. Jitter Bean is the only one that is both, for this geography.

The company's own stated position, verbatim from the incumbent site and confirmed as binding voice:

> "We truly desire to bring to our customers a ray of hope that there are still businesses in our world that still care about them as individuals. To the best of our ability, we will strive to give each customer a warm greeting, a top-quality product, and the good feeling that they do matter."

## Operating Context

- **Six cafés**, all in Humboldt County. Customers pick by commute, not by brand preference between locations — so location identity (which street, which side of town) carries more weight than it would for a single-shop business.
- **Mobile, outdoors, often in a car.** Humboldt is rural and coastal; daylight glare and one-handed use are the real conditions.
- **Hours differ per location and per day**, including different weekend hours. This is the highest-traffic, highest-consequence data on the site.
- **Reusable mug program.** Customers are encouraged to bring clean reusable mugs for a discount; branded JB mugs are sold in-store. This is an active operational ritual, not a marketing line.
- **Retail bags are sold in person only.** Four roasts (House, Espresso, French, Sumatra) in 12oz; wholesale offers 5lb and 12oz.
- **Gift cards are sold through Clover**, off-site, at a third-party URL.

## Capabilities and Constraints

- **No ecommerce.** Confirmed by the user. The incumbent Wix store is being retired, not ported. Retail coffee directs to "call the office or visit a location."
- **Wholesale inquiry form must be preserved.** Existing fields: first name, last name, email, "What are you interested in? 5lb or 12oz options available", "Where are you located?", and a free-text message.
- **Six locations, all confirmed by the client.** Plaza (900 G St, Arcata 95521), Valley West (5000 Valley West Blvd 'Pad #1', Arcata 95521), Broadway (1225 Broadway St, Eureka 95501), 5th Street (1836 5th St, Eureka 95501), Harris (3101 Montgomery St, Eureka 95501) and Fortuna (466 North Fortuna Blvd, Fortuna 95540). Harris is named for its area but sits on Montgomery St; that is the client's own naming. Per-café phone numbers are still undecided — the cafés are reached through the office number.
- **Menu prices are intentionally absent.** The menu ships without prices, matching current practice, but is modeled as structured content with an optional price field so prices can be enabled later without a redesign.
- **Menu content is currently trapped in two flat ~2MB PNGs** with no text layer. The rebuild converts this to structured, selectable, indexable content. Full item list is recovered and on hand (see Evidence).
- **Office address is not a café:** 2905 Hubbard Ln A, Eureka, CA 95501-4848. It must never be presented as a visitable location.
- **The incumbent site's conflicting data was resolved by the client, not carried over.** Its homepage, its visible locations page and a hidden gallery in that page's markup all published different hours; the gallery alone disagreed with itself. The client's confirmed figures supersede all of it and match what the locations page displayed for Plaza and Broadway. The phone conflict is also resolved: (707) 476-9393 is confirmed current, and the 707-616-8087 number found in the incumbent structured data is not used anywhere.

## Brand Commitments

- **Name:** Jitter Bean Coffee Co. The incumbent site also renders it "JitterBeanCoffeeCo." in titles; the spaced form is correct for display.
- **Voice:** warm, plainspoken, sincere, occasionally playful. The mission statement above is the anchor. Drink names carry real personality already — "Jumpin' Jitter Java", "Blustery Bean", "JB Special", the "Explosion" and "TNT" families — and this vocabulary is the client's own and should be preserved verbatim.
- **Existing logo** is a raster PNG of a cartoon bean character with "JITTER BEAN COFFEE CO." lettering, used on cups. A vector original has not been supplied.
- **Asset strategy:** build with assets pulled from the incumbent CDN, structured so each is a one-file swap. An explicit asset request list is owed to the user for the client.

## Evidence on Hand

Recovered from the incumbent site and stored in this repo during scaffolding:

- **Full menu content**, transcribed from the two menu PNGs: Hot Drinks (7 espresso drinks, 10 non-espresso, 5 extras) and Cold Drinks (6 Explosions, 4 milkshakes, TNT fruit smoothie, 8 cold beverages, 8 kids beverages), including size annotations (12oz/16oz/20oz, kids 8oz/10.5oz) and modifier notes.
- **Verbatim brand copy**: mission statement, careers pitch, reusable-mug program, sourcing/origins paragraph.
- **All six café addresses and hours**, client-confirmed, in `src/data/locations.ts`.
- **Café-to-photograph mapping**, recovered from the incumbent locations page's gallery data, which paired each media id with its title and original filename. Confirmed, not inferred.
- **Contact facts**: administrator@jitterbeancoffee.com, (707) 476-9393 (client-confirmed), office at 2905 Hubbard Ln A.
- **Raster assets**: logo, cup photography, drink photography, location images, pulled from static.wixstatic.com.

**Absences that must not be fabricated:** no testimonials, no reviews, no awards, no founding date, no roast dates or origin countries beyond the generic sourcing paragraph, no employee names or photos, no pricing, no wholesale client list, and no hours or addresses for the four unverified locations.

## Product Principles

1. **Hours and location are the product.** Every other consideration yields to a customer finding the right open door fast, one-handed, in daylight.
2. **Six doors, one company.** Each location must feel individually findable and locally specific without fragmenting the brand.
3. **Never publish an unverified fact.** The incumbent site's contradictory hours and phone numbers are the exact failure being replaced. Absent data shows as absent.
4. **The menu is text, not a picture.** It must be selectable, searchable, screen-readable, and legible on a phone without zooming.
5. **The warmth is literal, not decorative.** The client's stated reason for existing is that customers feel they matter. Copy and interaction should hold that, not ornament it.

## Accessibility & Inclusion

No formal standard was specified by the client. Baseline requirement derived from the operating context: the menu must be real text with sufficient contrast for outdoor daylight reading, hours must be machine-readable for screen readers and search engines, and all interactive targets must be usable one-handed on a phone. Target WCAG 2.2 AA.
