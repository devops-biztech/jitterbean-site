import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  The client edits these through Keystatic (keystatic.config.ts), and a save
  goes live with no review. These schemas are the last check before that
  happens: an entry that fails one fails the build, and the previous deploy
  stays up rather than publishing something broken.
*/

const time = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Expected "HH:MM", 24-hour.');

/** Keystatic's conditional field: `value` is present only when the box is ticked. */
const day = z
  .discriminatedUnion('discriminant', [
    z.object({ discriminant: z.literal(true), value: z.object({ open: time, close: time }) }),
    z.object({ discriminant: z.literal(false) }),
  ])
  .refine((d) => !d.discriminant || d.value.open < d.value.close, 'A café has to open before it closes.');

/** Keystatic writes an empty optional text field as "". */
const optionalText = z
  .string()
  .optional()
  .transform((s) => s?.trim() || undefined);

const cafes = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/cafes' }),
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      position: z.number().int(),
      city: z.string().min(1),
      address: z.string().min(1),
      zip: z.string().regex(/^\d{5}$/),
      locating: optionalText,
      photo: image(),
      hours: z.discriminatedUnion('discriminant', [
        z.object({
          discriminant: z.literal(true),
          value: z.object({
            monday: day,
            tuesday: day,
            wednesday: day,
            thursday: day,
            friday: day,
            saturday: day,
            sunday: day,
          }),
        }),
        z.object({ discriminant: z.literal(false) }),
      ]),
      notes: optionalText,
    }),
});

const menu = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/menu' }),
  schema: z.object({
    name: z.string().min(1),
    position: z.number().int(),
    sections: z.array(
      z.object({
        name: z.string().min(1),
        sizes: optionalText,
        note: optionalText,
        items: z.array(
          z.object({
            name: z.string().min(1),
            size: optionalText,
            note: optionalText,
            price: optionalText,
            signature: z.boolean().default(false),
          }),
        ),
      }),
    ),
  }),
});

const coffees = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/coffees' }),
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      position: z.number().int(),
      level: z.string().min(1),
      darkness: z.number().min(0).max(100),
      bag: image(),
    }),
});

export const collections = { cafes, menu, coffees };
