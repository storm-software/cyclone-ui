/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

// Largest first, so the first unit the difference reaches is the one shown.
// ponytail: months and years are 30 and 365 days, close enough for "3 months ago".
const RELATIVE_TIME_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 31_536_000],
  ["month", 2_592_000],
  ["week", 604_800],
  ["day", 86_400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1]
];

/**
 * Formats a date relative to `now`, such as "3 days ago", "in 2 hours" or
 * "yesterday", in the largest unit the difference reaches.
 *
 * @param date - The date to describe.
 * @param now - The time it is relative to, in milliseconds.
 * @param locale - The locale to format in; the runtime's by default.
 * @returns The relative time text.
 */
export const formatRelativeTime = (
  date: Date,
  now: number = Date.now(),
  locale?: string
) => {
  const seconds = (date.getTime() - now) / 1000;
  const [unit, unitSeconds] = RELATIVE_TIME_UNITS.find(
    ([, unitSeconds]) => Math.abs(seconds) >= unitSeconds
  ) ?? ["second", 1];

  return new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(
    Math.round(seconds / unitSeconds),
    unit
  );
};
