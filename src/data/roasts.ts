import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';

export type Roast = {
  name: string;
  level: string;
  /** 0–1, light to dark. Drives the roast-level swatch. */
  depth: number;
  bag: ImageMetadata;
};

/** The bagged coffees, edited by the client in Keystatic under "Bagged coffee". */
export const roasts: Roast[] = (await getCollection('coffees'))
  .sort((a, b) => a.data.position - b.data.position || a.data.name.localeCompare(b.data.name))
  .map(({ data }) => ({
    name: data.name,
    level: data.level,
    depth: data.darkness / 100,
    bag: data.bag,
  }));
