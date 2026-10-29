import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

/** "HH:MM" in 24h, America/Los_Angeles. */
export type Time = `${number}${number}:${number}${number}`;
export type DayHours = { open: Time; close: Time } | null;

/** Indexed by Date#getDay(): 0 = Sunday. */
export type WeekHours = [DayHours, DayHours, DayHours, DayHours, DayHours, DayHours, DayHours];

export type Location = {
  slug: string;
  /** The name locals use — this is how people pick between six. */
  name: string;
  city: string;
  address: string;
  zip: string;
  /** Null until the client turns hours on, e.g. for a café not yet open. */
  hours: WeekHours | null;
  /**
   * A locating line shown under the name — a cross street or landmark, for a
   * café whose common name is not its street. Client-supplied only.
   */
  locating?: string;
  photo: ImageMetadata;
};

/*
  The cafés live in src/content/cafes, one YAML file each, edited by the
  client through Keystatic at /keystatic. Whatever is there is client-entered,
  so it is published as-is; a café without hours renders as visibly pending.
*/
type Week = Extract<CollectionEntry<'cafes'>['data']['hours'], { discriminant: true }>['value'];

const toDay = (d: Week[keyof Week]): DayHours =>
  d.discriminant ? { open: d.value.open as Time, close: d.value.close as Time } : null;

const toWeek = (w: Week): WeekHours => [
  toDay(w.sunday),
  toDay(w.monday),
  toDay(w.tuesday),
  toDay(w.wednesday),
  toDay(w.thursday),
  toDay(w.friday),
  toDay(w.saturday),
];

export const locations: Location[] = (await getCollection('cafes'))
  .sort((a, b) => a.data.position - b.data.position || a.data.name.localeCompare(b.data.name))
  .map(({ id, data }) => ({
    slug: id,
    name: data.name,
    city: data.city,
    address: data.address,
    zip: data.zip,
    hours: data.hours.discriminant ? toWeek(data.hours.value) : null,
    locating: data.locating,
    photo: data.photo,
  }));

export const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
export const DAY_ABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

/**
 * Compact form: "6:30a". Used ONLY in the dense board, where six cafés by
 * seven days is genuinely width-constrained — the full form overflows the
 * sheet by 165px at 1100px wide. Everywhere else uses longTime.
 */
export function shortTime(t: Time): string {
  const [hh, mm] = t.split(':').map(Number);
  const suffix = hh < 12 ? 'am' : 'pm';
  const hour = hh % 12 === 0 ? 12 : hh % 12;
  return mm === 0 ? `${hour}${suffix}` : `${hour}:${String(mm).padStart(2, '0')}${suffix}`;
}

/** Full form: "6:30am". The default anywhere the times are read as prose. */
export function longTime(t: Time): string {
  const [hh, mm] = t.split(':').map(Number);
  const suffix = hh < 12 ? 'am' : 'pm';
  const hour = hh % 12 === 0 ? 12 : hh % 12;
  return mm === 0 ? `${hour}${suffix}` : `${hour}:${String(mm).padStart(2, '0')}${suffix}`;
}

/**
 * Collapses a week into the rows a printed board would use, merging
 * consecutive days that share hours: "Mon–Fri 6:00a–5:30p".
 */
export function hoursRows(
  hours: WeekHours,
  /** The compact form is for the dense grid only. */
  fmt: (t: Time) => string = longTime,
): { label: string; value: string }[] {
  const order = [1, 2, 3, 4, 5, 6, 0]; // Monday-first, the way a café board reads
  const rows: { label: string; value: string }[] = [];
  let run: number[] = [];

  const valueOf = (d: number) => {
    const day = hours[d];
    return day ? `${fmt(day.open)}–${fmt(day.close)}` : 'Closed';
  };

  const flush = () => {
    if (!run.length) return;
    const label = run.length === 1
      ? DAY_ABBR[run[0]]
      : `${DAY_ABBR[run[0]]}–${DAY_ABBR[run[run.length - 1]]}`;
    rows.push({ label, value: valueOf(run[0]) });
    run = [];
  };

  for (const d of order) {
    if (run.length && valueOf(d) !== valueOf(run[run.length - 1])) flush();
    run.push(d);
  }
  flush();
  return rows;
}
