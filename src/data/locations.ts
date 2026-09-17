import type { ImageMetadata } from 'astro';
import photoPlaza from '../assets/img/cafe-plaza.jpg';
import photoBroadway from '../assets/img/cafe-broadway.jpg';
import photoValleyWest from '../assets/img/cafe-valley-west.jpg';
import photoFifthStreet from '../assets/img/cafe-fifth-street.png';
import photoHarris from '../assets/img/cafe-harris.jpg';
import photoFortuna from '../assets/img/cafe-fortuna.jpg';

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
  address: string | null;
  zip: string | null;
  phone: string | null;
  hours: WeekHours | null;
  /**
   * Confirmed by the client. Only verified cafés are published into
   * schema.org, because wrong hours in a search result are worse than none.
   */
  verified: boolean;
  /**
   * A locating line shown under the name — a cross street or landmark, for a
   * café whose common name is not its street. Client-supplied only.
   */
  locating?: string;
  photo: ImageMetadata | null;
  /** Shown to the client during review, never rendered to visitors. */
  internalNote?: string;
};

const h = (o: Time, c: Time): DayHours => ({ open: o, close: c });

/** Builds a week from weekday / Saturday / Sunday, the way the client states them. */
const week = (weekday: DayHours, sat: DayHours, sun: DayHours): WeekHours => [
  sun,
  weekday,
  weekday,
  weekday,
  weekday,
  weekday,
  sat,
];

/*
  All six cafés confirmed by the client. Their figures superseded the incumbent
  site entirely: the old locations page carried a hidden gallery whose entries
  disagreed both with the visible page and with each other (Harris appeared as
  "Mon–Sat 5:30am–6pm", 5th Street as both "6am–5:30pm" and "6am–6pm"). None of
  that stale data survives here.

  Photo-to-café mapping was recovered from that same gallery, which paired each
  media id with a title and the original filename, so the assignments below are
  confirmed rather than inferred.
*/
export const locations: Location[] = [
  {
    slug: 'plaza',
    name: 'Plaza',
    city: 'Arcata',
    address: '900 G St.',
    zip: '95521',
    phone: null,
    hours: week(h('06:30', '17:00'), h('07:00', '17:00'), h('07:00', '16:00')),
    verified: true,
    photo: photoPlaza,
  },
  {
    slug: 'valley-west',
    name: 'Valley West',
    city: 'Arcata',
    address: "5000 Valley West Blvd. 'Pad #1'",
    zip: '95521',
    phone: null,
    hours: week(h('06:00', '17:00'), h('06:30', '16:00'), h('06:30', '16:00')),
    verified: true,
    photo: photoValleyWest,
  },
  {
    slug: 'broadway',
    name: 'Broadway',
    city: 'Eureka',
    address: '1225 Broadway St.',
    zip: '95501',
    phone: null,
    hours: week(h('06:00', '17:30'), h('06:00', '17:00'), h('06:30', '16:00')),
    verified: true,
    photo: photoBroadway,
  },
  {
    slug: 'fifth-street',
    name: '5th Street',
    city: 'Eureka',
    address: '1836 5th St.',
    zip: '95501',
    phone: null,
    hours: week(h('06:00', '17:30'), h('06:30', '17:00'), h('06:30', '16:00')),
    verified: true,
    photo: photoFifthStreet,
  },
  {
    slug: 'harris',
    name: 'Harris',
    city: 'Eureka',
    address: '3101 Montgomery St.',
    zip: '95503',
    phone: null,
    // Opens earliest of the six.
    hours: week(h('05:30', '17:30'), h('05:30', '17:00'), h('05:30', '16:00')),
    verified: true,
    // Named for the street it fronts, addressed on the one it sits at the corner of.
    locating: 'Corner of Harris & Montgomery',
    photo: photoHarris,
    internalNote:
      'ZIP corrected to 95503 with the client: Montgomery St is in the Myrtletown area of Eureka, and county property records plus every public listing agree. The client originally supplied 95501. The locating line is verified, not assumed: geocoded to 40.7802145,-124.1385639, and an OpenStreetMap query shows the only two named streets within 35m are Montgomery Street and Harris Street, so the cafe is on that corner. A cafe-specific number, (707) 442-2504, appears in public listings if per-cafe numbers are ever wanted.',
  },
  {
    slug: 'fortuna',
    name: 'Fortuna',
    city: 'Fortuna',
    address: '466 North Fortuna Blvd.',
    zip: '95540',
    phone: null,
    hours: week(h('06:30', '16:30'), h('07:00', '16:00'), h('07:00', '16:00')),
    verified: true,
    photo: photoFortuna,
  },
];

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
