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

export type TimePickerHourCycle = 12 | 24;

/**
 * The text input's time format (and Maskito time mode) for an hour cycle.
 */
export const getTimeFormat = (hourCycle: TimePickerHourCycle = 12) =>
  hourCycle === 24 ? "HH:MM" : "HH:MM AA";

/** A time of day, with `hours` from 0 to 23. */
export interface Time {
  hours: number;
  minutes: number;
}

export type TimePart = "hours" | "minutes" | "meridiem";

export const MIDNIGHT: Time = { hours: 0, minutes: 0 };

export const pad = (value: number) => String(value).padStart(2, "0");

// `HH:mm`, as both the 24-hour value and a 24-hour text input hold it.
const parse24HourTime = (value: string): Time | null => {
  const match = /^(\d{2}):(\d{2})$/.exec(value);
  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  return hours < 24 && minutes < 60 ? { hours, minutes } : null;
};

// `hh:mm AA`; Maskito puts a no-break space before the meridiem.
const parse12HourTime = (value: string): Time | null => {
  const match = /^(\d{2}):(\d{2})[ \u00A0]([AP])M$/i.exec(value);
  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours < 1 || hours > 12 || minutes > 59) {
    return null;
  }

  return {
    hours: (hours % 12) + (match[3]!.toUpperCase() === "P" ? 12 : 0),
    minutes
  };
};

export const toTime = (value: unknown): Time | null => {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime())
      ? null
      : { hours: value.getHours(), minutes: value.getMinutes() };
  }

  return typeof value === "string"
    ? (parse24HourTime(value) ?? parse12HourTime(value))
    : null;
};

export const parseInputTime = (
  value: string,
  hourCycle: TimePickerHourCycle
) => (hourCycle === 24 ? parse24HourTime(value) : parse12HourTime(value));

export const toValue = ({ hours, minutes }: Time) =>
  `${pad(hours)}:${pad(minutes)}`;

export const toInputValue = (time: Time, hourCycle: TimePickerHourCycle) =>
  hourCycle === 24
    ? toValue(time)
    : `${pad(time.hours % 12 || 12)}:${pad(time.minutes)}\u00A0${time.hours < 12 ? "AM" : "PM"}`;

/**
 * Format a time (a 24-hour `HH:mm` string, a `hh:mm AM` string or a `Date`) for
 * the text input.
 */
export const format = (value: any, hourCycle: TimePickerHourCycle = 12) => {
  const time = toTime(value);

  return time ? toInputValue(time, hourCycle) : "";
};

/**
 * Parse a time (a `hh:mm AM` string, a 24-hour `HH:mm` string or a `Date`) to
 * its 24-hour `HH:mm` value.
 */
export const parse = (value: any) => {
  const time = toTime(value);

  return time ? toValue(time) : null;
};

// Positions in the `hh:mm AA` (or `HH:mm`) text.
export const getTimePart = (selectionStart: number): TimePart => {
  if (selectionStart <= 2) {
    return "hours";
  }

  return selectionStart <= 5 ? "minutes" : "meridiem";
};

// Hours and minutes wrap without carrying over, like a native time input.
export const stepTime = (
  { hours, minutes }: Time,
  part: TimePart,
  amount: number,
  hourCycle: TimePickerHourCycle
) => {
  if (part === "hours") {
    return {
      hours:
        hourCycle === 24
          ? (hours + amount + 24) % 24
          : (((hours % 12) + amount + 12) % 12) + (hours >= 12 ? 12 : 0),
      minutes
    };
  }

  return part === "minutes"
    ? { hours, minutes: (minutes + amount + 60) % 60 }
    : { hours: (hours + 12) % 24, minutes };
};
