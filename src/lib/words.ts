/*
  Counts and lists that appear in copy. The cafés, roasts and menu are
  client-edited, so a sentence like "Six locations." has to follow the data.
*/

const NUMBERS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
];

/** 6 → "six", 13 → "13". Pass `capital` for the start of a sentence. */
export function countWord(n: number, capital = false): string {
  const word = NUMBERS[n] ?? String(n);
  return capital ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

/** ["Arcata", "Eureka", "Fortuna"] → "Arcata, Eureka and Fortuna". House style: no serial comma. */
export function listJoin(items: string[]): string {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}
