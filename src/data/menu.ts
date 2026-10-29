/**
 * The menu, transcribed from the two flat PNGs the incumbent site served in
 * place of text. It lives in src/content/menu, one YAML file per board, and
 * the client edits it through Keystatic at /keystatic. Prices are optional:
 * the client did not publish them at launch, and adding one is a data edit
 * rather than a redesign.
 */
import { getCollection } from 'astro:content';

export type Item = {
  name: string;
  /** Sizes this item is poured in, when it differs from the section default. */
  size?: string;
  /** Parenthetical the printed menu carries, e.g. "Made with Red Bull". */
  note?: string;
  price?: string;
  /** Listed on the home page under "Only here". */
  signature: boolean;
};

export type Section = {
  id: string;
  name: string;
  /** The size line the printed board prints beside the section head. */
  sizes?: string;
  note?: string;
  items: Item[];
};

export type Board = {
  /** The file name, e.g. "hot", used for the page anchors. */
  id: string;
  name: string;
  sections: Section[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const boards: Board[] = (await getCollection('menu'))
  .sort((a, b) => a.data.position - b.data.position || a.data.name.localeCompare(b.data.name))
  .map(({ id, data }) => ({
    id,
    name: data.name,
    sections: data.sections.map((s) => ({ ...s, id: slugify(s.name) })),
  }));

export const itemCount = boards.reduce(
  (n, b) => n + b.sections.reduce((m, s) => m + s.items.length, 0),
  0,
);
