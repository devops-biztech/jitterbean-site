import type { ImageMetadata } from 'astro';
import bagEspresso from '../assets/img/bag-espresso.png';
import bagFrench from '../assets/img/bag-french.png';
import bagHouse from '../assets/img/bag-house.png';
import bagSumatra from '../assets/img/bag-sumatra.png';

export const site = {
  name: 'Jitter Bean Coffee Co.',
  shortName: 'Jitter Bean',
  tagline: 'Locally Owned · Locally Roasted · Humboldt County, CA',
  /** The café timezone. Open/closed is computed here regardless of the visitor's clock. */
  timeZone: 'America/Los_Angeles',
  email: 'administrator@jitterbeancoffee.com',
  /**
   * Confirmed by the client. The incumbent site's own structured data carried
   * a second number (707-616-8087) that is not current; it is not used anywhere.
   */
  phone: '(707) 476-9393',
  phoneHref: '+17074769393',
  office: {
    street: '2905 Hubbard Ln, Suite A',
    city: 'Eureka',
    state: 'CA',
    zip: '95501',
    /** The office is not a café and is never listed as one. */
    note: 'Business office — not a café.',
  },
  giftCardUrl: 'https://www.clover.com/online-ordering/jitter-bean-office-eureka',
} as const;

/** Verbatim from the client. Do not paraphrase. */
export const mission =
  'At Jitter Bean Coffee Co., our goal is to provide an excellent product with the highest quality service possible. We truly desire to bring to our customers a ray of hope that there are still businesses in our world that still care about them as individuals. To the best of our ability, we will strive to give each customer a warm greeting, a top-quality product, and the good feeling that they do matter.';

export const sourcing =
  'Brewing coffee isn’t just about what you sip. It’s an ever-evolving process that many have failed to perfect. The key is knowing where it all starts and understanding where it comes from. Our coffee is globally sourced from nutrient-rich lands cultivated by those who have mastered the growing process. These regions — made up of a perfect blend of rain, sunshine and healthy soil — are the only places to find such delicious perfection.';

export type Roast = {
  name: string;
  level: string;
  /** 0–1, light to dark. Drives the roast-level swatch. */
  depth: number;
  bag: ImageMetadata;
};

export const roasts: Roast[] = [
  { name: 'House', level: 'Medium Roast', depth: 0.42, bag: bagHouse },
  { name: 'Sumatra', level: 'Medium/Dark Roast', depth: 0.64, bag: bagSumatra },
  { name: 'Espresso', level: 'Dark Roast', depth: 0.82, bag: bagEspresso },
  { name: 'French', level: 'Dark Roast', depth: 0.95, bag: bagFrench },
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/locations', label: 'Locations' },
  { href: '/menu', label: 'Menu' },
  { href: '/sourcing', label: 'Sourcing' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/contact', label: 'Contact' },
];
