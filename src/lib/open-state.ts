import type { Time, WeekHours } from '../data/locations';

export type Status =
  | { state: 'open'; closesAt: Time; minutesLeft: number }
  | { state: 'closing-soon'; closesAt: Time; minutesLeft: number }
  | { state: 'closed'; opensAt: Time | null; opensDayOffset: number }
  /** The client has not supplied hours for this café yet. */
  | { state: 'unpublished' };

/** Minutes since midnight for "HH:MM". */
export function toMinutes(t: Time): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

/**
 * The café clock, not the visitor's. Somebody checking from another timezone
 * still gets Humboldt's answer, which is the only answer that means anything.
 */
export function cafeNow(timeZone: string, at: Date = new Date()): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(at);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const days: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  // Intl renders midnight as "24" in some engines under hour12:false.
  const hour = Number(get('hour')) % 24;
  return { day: days[get('weekday')] ?? 0, minutes: hour * 60 + Number(get('minute')) };
}

const CLOSING_SOON_MINUTES = 60;

export function statusFor(
  hours: WeekHours | null,
  timeZone: string,
  at: Date = new Date(),
): Status {
  if (!hours) return { state: 'unpublished' };

  const { day, minutes } = cafeNow(timeZone, at);
  const today = hours[day];

  if (today) {
    const open = toMinutes(today.open);
    const close = toMinutes(today.close);
    if (minutes >= open && minutes < close) {
      const minutesLeft = close - minutes;
      return {
        state: minutesLeft <= CLOSING_SOON_MINUTES ? 'closing-soon' : 'open',
        closesAt: today.close,
        minutesLeft,
      };
    }
    // Still before opening today.
    if (minutes < open) return { state: 'closed', opensAt: today.open, opensDayOffset: 0 };
  }

  // Find the next day that has hours.
  for (let offset = 1; offset <= 7; offset++) {
    const next = hours[(day + offset) % 7];
    if (next) return { state: 'closed', opensAt: next.open, opensDayOffset: offset };
  }
  return { state: 'closed', opensAt: null, opensDayOffset: 0 };
}

/** "Closes 5:30p" / "Opens 6a tomorrow" — the line under a café's name. */
export function statusLabel(status: Status, shortTime: (t: Time) => string): string {
  switch (status.state) {
    case 'open':
      return `Open till ${shortTime(status.closesAt)}`;
    case 'closing-soon':
      return status.minutesLeft <= 1
        ? 'Closing now'
        : `Closing in ${status.minutesLeft} min`;
    case 'closed':
      if (!status.opensAt) return 'Closed';
      if (status.opensDayOffset === 0) return `Opens ${shortTime(status.opensAt)}`;
      if (status.opensDayOffset === 1) return `Opens ${shortTime(status.opensAt)} tomorrow`;
      return `Opens ${shortTime(status.opensAt)}`;
    case 'unpublished':
      return 'Hours not yet listed';
  }
}
