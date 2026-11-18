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

import { formatDate } from "@stryke/date/format";

export type DateSeparator = "." | "/";

export const DEFAULT_DATE_FORMAT = "MM.DD.YYYY";

export const getDateFormat = (separator: DateSeparator = "/") =>
  `MM${separator}DD${separator}YYYY`;

export const DATE_RANGE_SEPARATOR = " – ";

export const getDateRangeFormat = (separator: DateSeparator = "/") => {
  const dateFormat = getDateFormat(separator);

  return `${dateFormat}${DATE_RANGE_SEPARATOR}${dateFormat}`;
};

const toDate = (value: unknown) => {
  if (value == null || value === "") {
    return null;
  }

  const date =
    value instanceof Date ? value : new Date(value as string | number);

  return Number.isNaN(date.getTime()) ? null : date;
};

export const parseInputDate = (
  value: string,
  separator: DateSeparator = "/"
) => {
  const match = new RegExp(
    `^(\\d{2})\\${separator}(\\d{2})\\${separator}(\\d{4})$`
  ).exec(value);
  if (!match) {
    return null;
  }

  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
    ? date
    : null;
};

export const parseInputDateRange = (
  value: unknown,
  separator: DateSeparator = "/"
) => {
  if (typeof value !== "string") {
    return null;
  }

  const [startValue, endValue, ...rest] = value.split(DATE_RANGE_SEPARATOR);
  if (!startValue || rest.length > 0) {
    return null;
  }

  const startDate = parseInputDate(startValue, separator);
  if (!startDate) {
    return null;
  }

  if (!endValue) {
    return [startDate];
  }

  const endDate = parseInputDate(endValue, separator);

  return endDate && endDate >= startDate ? [startDate, endDate] : null;
};

type DatePart = "month" | "day" | "year";

export const getDatePart = (selectionStart: number): DatePart => {
  if (selectionStart <= 2) {
    return "month";
  }

  return selectionStart <= 5 ? "day" : "year";
};

export const stepDate = (date: Date, part: DatePart, amount: number) => {
  const next = new Date(date);

  if (part === "day") {
    next.setDate(next.getDate() + amount);
    return next;
  }

  const day = next.getDate();
  next.setDate(1);

  if (part === "month") {
    next.setMonth(next.getMonth() + amount);
  } else {
    next.setFullYear(next.getFullYear() + amount);
  }

  next.setDate(
    Math.min(
      day,
      new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate()
    )
  );

  return next;
};

export const format = (value: any, separator: DateSeparator = "/") => {
  const date = toDate(value);
  if (!date) {
    return "";
  }

  return formatDate(
    date,
    getDateFormat(separator) as Parameters<typeof formatDate>[1]
  );
};

export const formatRange = (value: any, separator: DateSeparator = "/") => {
  if (!Array.isArray(value)) {
    return "";
  }

  return value
    .slice(0, 2)
    .map(date => format(date, separator))
    .filter(Boolean)
    .join(DATE_RANGE_SEPARATOR);
};

export const parse = (value: any, separator: DateSeparator = "/") => {
  if (
    typeof value === "string" &&
    new RegExp(`^[\\d\\${separator}]*$`).test(value)
  ) {
    return parseInputDate(value, separator);
  }

  return toDate(value);
};

export const parseRange = (value: any, separator: DateSeparator = "/") => {
  if (typeof value === "string") {
    return parseInputDateRange(value, separator);
  }

  if (!Array.isArray(value)) {
    return null;
  }

  const dates = value.slice(0, 2).map(toDate);
  if (!dates.every(Boolean)) {
    return null;
  }

  return dates.length === 2 && dates[1]! < dates[0]! ? null : dates;
};
