import { config, collection, fields } from '@keystatic/core';

/*
  The editing dashboard at /keystatic. In production it saves through
  Keystatic Cloud, which commits each save straight to main, and Vercel
  redeploys from there. In `astro dev` it writes to the files on disk.

  Everything here is written for the client, not for developers: labels are
  the words on the site, and nothing asks for a format they could get wrong.
*/

// Keystatic Cloud "team/project", from the project's settings page.
const CLOUD_PROJECT = 'jitter-bean-coffee/jitterbeancoffee';

/** "06:30" → "6:30 am", every quarter hour of the day. */
const times = Array.from({ length: 96 }, (_, i) => {
  const hh = Math.floor(i / 4);
  const mm = (i % 4) * 15;
  const value = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  const hour = hh % 12 === 0 ? 12 : hh % 12;
  const label = `${hour}:${String(mm).padStart(2, '0')} ${hh < 12 ? 'am' : 'pm'}`;
  return { value, label };
});

const day = (label: string) =>
  fields.conditional(fields.checkbox({ label: `Open ${label}`, defaultValue: true }), {
    true: fields.object(
      {
        open: fields.select({ label: 'Opens', options: times, defaultValue: '06:00' }),
        close: fields.select({ label: 'Closes', options: times, defaultValue: '16:00' }),
      },
      { layout: [6, 6] },
    ),
    false: fields.empty(),
  });

const position = fields.integer({
  label: 'Position',
  description: 'Lower numbers show first on the site.',
  validation: { isRequired: true, min: 1 },
});

export default config({
  storage: import.meta.env.PROD ? { kind: 'cloud' } : { kind: 'local' },
  cloud: { project: CLOUD_PROJECT },
  ui: {
    brand: { name: 'Jitter Bean' },
    navigation: ['cafes', 'menu', 'coffees'],
  },
  collections: {
    cafes: collection({
      label: 'Cafés',
      path: 'src/content/cafes/*',
      slugField: 'name',
      format: { data: 'yaml' },
      columns: ['city', 'position'],
      schema: {
        name: fields.slug({
          name: {
            label: 'Name',
            description: 'The name locals use, e.g. "Harris" or "5th Street".',
            validation: { isRequired: true },
          },
        }),
        position,
        city: fields.text({ label: 'City', validation: { isRequired: true } }),
        address: fields.text({
          label: 'Street address',
          validation: { isRequired: true },
        }),
        zip: fields.text({
          label: 'ZIP code',
          validation: { isRequired: true, pattern: { regex: /^\d{5}$/, message: 'Five digits.' } },
        }),
        locating: fields.text({
          label: 'Cross street or landmark',
          description: 'Optional. Shown under the name, e.g. "Corner of Harris & Montgomery".',
        }),
        photo: fields.image({
          label: 'Photo',
          directory: 'src/assets/img/cafes',
          publicPath: '../../assets/img/cafes/',
          validation: { isRequired: true },
        }),
        hours: fields.conditional(
          fields.checkbox({
            label: 'Show hours on the site',
            description:
              'Turn off for a café that has not opened yet. It will show "Not yet listed" instead.',
            defaultValue: true,
          }),
          {
            true: fields.object({
              monday: day('Monday'),
              tuesday: day('Tuesday'),
              wednesday: day('Wednesday'),
              thursday: day('Thursday'),
              friday: day('Friday'),
              saturday: day('Saturday'),
              sunday: day('Sunday'),
            }),
            false: fields.empty(),
          },
        ),
        notes: fields.text({
          label: 'Private notes',
          description: 'Never shown on the site.',
          multiline: true,
        }),
      },
    }),

    menu: collection({
      label: 'Menu',
      path: 'src/content/menu/*',
      slugField: 'name',
      format: { data: 'yaml' },
      columns: ['position'],
      schema: {
        name: fields.slug({
          name: { label: 'Board name', validation: { isRequired: true } },
        }),
        position,
        sections: fields.array(
          fields.object({
            name: fields.text({ label: 'Section name', validation: { isRequired: true } }),
            sizes: fields.text({ label: 'Sizes', description: 'Optional, e.g. "12oz · 16oz".' }),
            note: fields.text({ label: 'Note', description: 'Optional line under the section name.' }),
            items: fields.array(
              fields.object({
                name: fields.text({ label: 'Drink', validation: { isRequired: true } }),
                size: fields.text({
                  label: 'Size',
                  description: 'Optional. Only when it differs from the section sizes.',
                }),
                note: fields.text({ label: 'Note', description: 'Optional, e.g. "Made with Red Bull".' }),
                price: fields.text({
                  label: 'Price',
                  description: 'Optional. Leave blank to show no price, e.g. "$4.50" or "$4.50 / $5.25".',
                }),
                signature: fields.checkbox({
                  label: 'Signature drink',
                  description: 'Listed on the home page under "Only here".',
                }),
              }),
              { label: 'Drinks', itemLabel: (p) => p.fields.name.value || 'New drink' },
            ),
          }),
          { label: 'Sections', itemLabel: (p) => p.fields.name.value || 'New section' },
        ),
      },
    }),

    coffees: collection({
      label: 'Bagged coffee',
      path: 'src/content/coffees/*',
      slugField: 'name',
      format: { data: 'yaml' },
      columns: ['level', 'position'],
      schema: {
        name: fields.slug({
          name: { label: 'Name', validation: { isRequired: true } },
        }),
        position,
        level: fields.text({
          label: 'Roast level',
          description: 'As printed on the bag, e.g. "Medium Roast".',
          validation: { isRequired: true },
        }),
        darkness: fields.integer({
          label: 'Darkness',
          description: '0 is the lightest, 100 the darkest. Sets the color of the roast swatch.',
          validation: { isRequired: true, min: 0, max: 100 },
        }),
        bag: fields.image({
          label: 'Bag photo',
          directory: 'src/assets/img/coffees',
          publicPath: '../../assets/img/coffees/',
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
