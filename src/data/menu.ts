/**
 * The menu, transcribed from the two flat PNGs the incumbent site served in
 * place of text. Prices are deliberately absent — the client does not publish
 * them — but every item carries an optional `price`, so turning prices on is a
 * data edit rather than a redesign.
 */

export type Item = {
  name: string;
  /** Sizes this item is poured in, when it differs from the section default. */
  size?: string;
  /** Parenthetical the printed menu carries, e.g. "Made with Red Bull". */
  note?: string;
  price?: string;
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
  id: 'hot' | 'cold';
  name: string;
  sections: Section[];
};

export const boards: Board[] = [
  {
    id: 'hot',
    name: 'Hot Drinks',
    sections: [
      {
        id: 'espresso',
        name: 'Espresso Drinks',
        sizes: '12oz · 16oz',
        note: '20oz sizes available upon request.',
        items: [
          { name: 'Mocha' },
          { name: 'White Mocha' },
          { name: 'Latte' },
          { name: 'Cappuccino' },
          { name: "Jumpin' Jitter Java" },
          { name: 'Americano' },
          { name: 'Double Espresso' },
        ],
      },
      {
        id: 'non-espresso',
        name: 'Non Espresso Drinks',
        sizes: '12oz · 16oz',
        items: [
          { name: 'Coffee' },
          { name: 'Cafe au Lait' },
          { name: 'Mocha au Lait' },
          { name: 'Matcha Latte' },
          { name: 'Hot Chocolate' },
          { name: 'Steamer' },
          { name: 'Chai Tea Latte' },
          { name: 'Tea Latte' },
          { name: 'Hot Tea' },
          {
            name: 'Coffee-To-Go',
            size: '96oz',
            note: 'In an insulated carrier, comes with cups, cream & sugar',
          },
        ],
      },
      {
        id: 'extras',
        name: 'Extras',
        items: [
          { name: 'Espresso' },
          { name: 'Alternate Milk' },
          { name: 'Flavor' },
          { name: 'Cold Foam' },
          { name: 'Whipped Cream' },
        ],
      },
    ],
  },
  {
    id: 'cold',
    name: 'Cold Drinks',
    sections: [
      {
        id: 'explosions',
        name: 'Explosions',
        sizes: '16oz',
        note: 'Blended with premium ice cream.',
        items: [
          { name: 'Mocha Explosion' },
          { name: 'White Mocha Explosion' },
          { name: 'Latte Explosion' },
          { name: 'Caramel Explosion' },
          { name: 'Chai Explosion' },
          { name: 'Jet Explosion', size: '20oz', note: 'Made with Red Bull' },
        ],
      },
      {
        id: 'milkshakes',
        name: 'Milkshakes',
        sizes: '16oz',
        items: [
          { name: 'Vanilla Milkshake' },
          { name: 'Chai Milkshake' },
          { name: 'JB Special' },
          { name: 'Blustery Bean' },
        ],
      },
      {
        id: 'tnt',
        name: "'TNT' Fruit Smoothie",
        note: 'Seasonal flavors may be available.',
        items: [
          { name: 'Wild Berry' },
          { name: 'Strawberry' },
          { name: 'Mango' },
        ],
      },
      {
        id: 'cold-beverages',
        name: 'Cold Beverages',
        sizes: '16oz',
        items: [
          { name: 'Cold Brew' },
          { name: 'Italian Soda' },
          { name: 'Cremosa' },
          { name: 'Iced Tea' },
          { name: 'Lemon Tea' },
          { name: 'Bottled Water', size: '20oz' },
          { name: 'Red Bull' },
          { name: 'Ice "JET"', note: 'Red Bull with flavor' },
        ],
      },
      {
        id: 'kids',
        name: 'Kids Beverages',
        items: [
          { name: 'Hot Chocolate', size: '8oz' },
          { name: 'Apple Juice', size: '10.5oz' },
          { name: 'Steamer', size: '8oz' },
          { name: 'Italian Soda', size: '10.5oz' },
          { name: 'Cremosa', size: '10.5oz' },
          { name: '"TNT" Fruit Smoothie', size: '10.5oz' },
          { name: 'Little Bean Shake', size: '10.5oz' },
          { name: 'Milk', size: '10.5oz' },
        ],
      },
    ],
  },
];

export const itemCount = boards.reduce(
  (n, b) => n + b.sections.reduce((m, s) => m + s.items.length, 0),
  0,
);
