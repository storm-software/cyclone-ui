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

import {
  DATE_RANGE_SEPARATOR,
  DatePicker,
  DEFAULT_DATE_FORMAT,
  getDateFormat,
  getDateRangeFormat,
  type DatePickerMode,
  type DateSeparator
} from "@cyclone-ui/date-picker";
import { Field, useFieldVariant } from "@cyclone-ui/field";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import type { MaskitoOptions, MaskitoPostprocessor } from "@maskito/core";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { formatDate } from "@stryke/date/format";
import { useComposedRefs, withStaticProperties } from "@tamagui/core";
import { Calendar } from "@tamagui/lucide-icons-2";
import type { RefObject } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

interface DatePickerFieldConfig {
  mode: DatePickerMode;
  separator: DateSeparator;
}

const DatePickerFieldContext = createContext<DatePickerFieldConfig>({
  mode: "single",
  separator: "."
});

const toDate = (value: unknown) => {
  if (value == null || value === "") {
    return null;
  }

  const date =
    value instanceof Date ? value : new Date(value as string | number);

  return Number.isNaN(date.getTime()) ? null : date;
};

const parseInputDate = (value: string, separator: DateSeparator = ".") => {
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

const parseInputDateRange = (
  value: unknown,
  separator: DateSeparator = "."
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

const getDatePart = (selectionStart: number): DatePart => {
  if (selectionStart <= 2) {
    return "month";
  }

  return selectionStart <= 5 ? "day" : "year";
};

const stepDate = (date: Date, part: DatePart, amount: number) => {
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

const rejectInvalidDate =
  (separator: DateSeparator): MaskitoPostprocessor =>
  (elementState, initialElementState) =>
    elementState.value.length === DEFAULT_DATE_FORMAT.length &&
    !parseInputDate(elementState.value, separator)
      ? initialElementState
      : elementState;

const rejectInvalidDateRange =
  (separator: DateSeparator): MaskitoPostprocessor =>
  (elementState, initialElementState) =>
    elementState.value.length === getDateRangeFormat(separator).length &&
    !parseInputDateRange(elementState.value, separator)
      ? initialElementState
      : elementState;

const DATE_MASK_OPTIONS_DOT = maskitoDateOptionsGenerator({
  mode: "mm/dd/yyyy",
  separator: "."
});

const DATE_MASK_OPTIONS_SLASH = maskitoDateOptionsGenerator({
  mode: "mm/dd/yyyy",
  separator: "/"
});

export const DATE_MASK_DOT = {
  ...DATE_MASK_OPTIONS_DOT,
  // Maskito's final date postprocessor normalizes impossible dates (for
  // example, 04.31 to 05.01). This field must reject them instead.
  postprocessors: [
    DATE_MASK_OPTIONS_DOT.postprocessors[0],
    rejectInvalidDate(".")
  ]
};

export const DATE_MASK_SLASH = {
  ...DATE_MASK_OPTIONS_SLASH,
  // Maskito's final date postprocessor normalizes impossible dates (for
  // example, 04.31 to 05.01). This field must reject them instead.
  postprocessors: [
    DATE_MASK_OPTIONS_SLASH.postprocessors[0],
    rejectInvalidDate("/")
  ]
};

export const DATE_MASK = DATE_MASK_DOT;

const createRangeMask = (separator: DateSeparator): MaskitoOptions => {
  const digit = /\d/;
  const dateMask = [
    digit,
    digit,
    separator,
    digit,
    digit,
    separator,
    digit,
    digit,
    digit,
    digit
  ];

  return {
    mask: [...dateMask, ...DATE_RANGE_SEPARATOR, ...dateMask],
    postprocessors: [rejectInvalidDateRange(separator)]
  };
};

export const DATE_RANGE_MASK_DOT = createRangeMask(".");
export const DATE_RANGE_MASK_SLASH = createRangeMask("/");

export const format = (value: any, separator: DateSeparator = ".") => {
  const date = toDate(value);
  if (!date) {
    return "";
  }

  return formatDate(date, getDateFormat(separator));
};

export const formatRange = (value: any, separator: DateSeparator = ".") => {
  if (!Array.isArray(value)) {
    return "";
  }

  return value
    .slice(0, 2)
    .map(date => format(date, separator))
    .filter(Boolean)
    .join(DATE_RANGE_SEPARATOR);
};

export const parse = (value: any, separator: DateSeparator = ".") => {
  if (
    typeof value === "string" &&
    new RegExp(`^[\\d\\${separator}]*$`).test(value)
  ) {
    return parseInputDate(value, separator);
  }

  return toDate(value);
};

export const parseRange = (value: any, separator: DateSeparator = ".") => {
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

const DatePickerFieldGroup = Field.styleable<{
  mode?: DatePickerMode;
  separator?: DateSeparator;
}>((props, forwardedRef) => {
  const { children, mode = "single", separator = ".", ...rest } = props;

  const handleFormat = useCallback(
    (value: any) =>
      mode === "range"
        ? formatRange(value, separator)
        : format(value, separator),
    [mode, separator]
  );
  const handleParse = useCallback(
    (value: any) =>
      mode === "range" ? parseRange(value, separator) : parse(value, separator),
    [mode, separator]
  );

  const config = useMemo(() => ({ mode, separator }), [mode, separator]);

  return (
    <DatePickerFieldContext.Provider value={config}>
      <Field
        ref={forwardedRef}
        {...rest}
        format={handleFormat}
        parse={handleParse}
        mask={
          mode === "range"
            ? separator === "."
              ? DATE_RANGE_MASK_DOT
              : DATE_RANGE_MASK_SLASH
            : separator === "."
              ? DATE_MASK_DOT
              : DATE_MASK_SLASH
        }>
        {children}
      </Field>
    </DatePickerFieldContext.Provider>
  );
});

const DatePickerFieldControl = DatePicker.TextBox.Value.styleable(
  ({ children, onKeyDown, ...props }, forwardedRef) => {
    const { blur, change, focus } = useFieldActions();
    const inputRef = useRef<HTMLInputElement>(null);
    const composedRef = useComposedRefs(forwardedRef, inputRef);
    const ref = useFieldRef(composedRef);

    const field = FieldApi.use();
    const { mode, separator } = useContext(DatePickerFieldContext);
    const name = field.name.get();
    const size = field.size.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const formattedValue = field.formattedValue.get();
    const variant = useFieldVariant(
      props.placeholder ??
        (mode === "range" ? getDateRangeFormat(separator) : DEFAULT_DATE_FORMAT)
    );
    const [inputValue, setInputValue] = useState(formattedValue);
    const selectionRef = useRef<{ end: number; start: number } | null>(null);
    const selectedDates = useMemo(
      () =>
        mode === "range"
          ? (parseInputDateRange(inputValue, separator) ?? [])
          : [],
      [inputValue, mode, separator]
    );
    const selectedDate = useMemo(
      () => (mode === "single" ? parseInputDate(inputValue, separator) : null),
      [inputValue, mode, separator]
    );

    useEffect(() => {
      // eslint-disable-next-line react/set-state-in-effect
      setInputValue(formattedValue);
    }, [formattedValue]);

    useLayoutEffect(() => {
      const selection = selectionRef.current;
      if (!selection) {
        return;
      }

      inputRef.current?.setSelectionRange(selection.start, selection.end);
      selectionRef.current = null;
    }, [inputValue]);

    const handleChange = useCallback(
      (event: CustomEvent<Date | null>) => {
        setInputValue(format(event.detail, separator));
        change?.(event.detail);
        blur?.();
      },
      [blur, change, separator]
    );

    const handleDatesChange = useCallback(
      (event: CustomEvent<Date[]>) => {
        setInputValue(formatRange(event.detail, separator));
        change?.(event.detail);

        if (event.detail.length >= 2) {
          blur?.();
        }
      },
      [blur, change, separator]
    );

    const handleInput = useCallback(
      (event: CustomEvent<string>) => {
        const value = event.detail;
        setInputValue(value);

        const parsedValue =
          mode === "range"
            ? parseInputDateRange(value, separator)
            : parseInputDate(value, separator);
        if (value === "" || parsedValue) {
          change?.(value);
        }
      },
      [change, mode, separator]
    );

    const handleBlur = useCallback(() => {
      setInputValue(formattedValue);
      blur?.();
    }, [blur, formattedValue]);

    const handleKeyDown = useCallback(
      (event: any) => {
        onKeyDown?.(event);

        if (
          event.defaultPrevented ||
          (event.key !== "ArrowUp" && event.key !== "ArrowDown")
        ) {
          return;
        }

        const input = event.currentTarget as HTMLInputElement;
        const dates =
          mode === "range"
            ? parseInputDateRange(input.value, separator)
            : [parseInputDate(input.value, separator)];
        const selectionStart = input.selectionStart ?? 0;
        const dateIndex =
          mode === "range" && selectionStart >= DEFAULT_DATE_FORMAT.length
            ? 1
            : 0;
        const date = dates?.[dateIndex];
        if (!date) {
          return;
        }

        event.preventDefault();
        selectionRef.current = {
          start: input.selectionStart ?? 0,
          end: input.selectionEnd ?? 0
        };

        const nextDate = stepDate(
          date,
          getDatePart(
            selectionStart -
              (dateIndex === 1
                ? DEFAULT_DATE_FORMAT.length + DATE_RANGE_SEPARATOR.length
                : 0)
          ),
          event.key === "ArrowUp" ? 1 : -1
        );
        if (mode === "range") {
          const nextDates = [...(dates ?? [])];
          nextDates[dateIndex] = nextDate;
          if (
            nextDates.length === 2 &&
            nextDates[0] &&
            nextDates[1] &&
            nextDates[1] < nextDates[0]
          ) {
            return;
          }

          setInputValue(formatRange(nextDates, separator));
          change?.(nextDates);
        } else {
          setInputValue(format(nextDate, separator));
          change?.(nextDate);
        }
      },
      [change, mode, onKeyDown, separator]
    );

    return (
      <DatePicker
        name={name}
        size={size}
        focused={focused}
        mode={mode}
        separator={separator}
        variant={variant}
        disabled={disabled}
        selectedDate={selectedDate}
        selectedDates={selectedDates}
        onChange={mode === "single" ? handleChange : undefined}
        onDatesChange={mode === "range" ? handleDatesChange : undefined}
        onInput={handleInput}
        onFocus={focus}
        onBlur={handleBlur}>
        <DatePicker.TextBox>
          {children}
          <DatePicker.TextBox.Value
            ref={ref as RefObject<HTMLInputElement>}
            {...props}
            value={inputValue}
            onKeyDown={handleKeyDown}
          />
          <Field.ThemeIcon position="end" />
        </DatePicker.TextBox>

        <DatePicker.Separator />
        <DatePicker.Trigger>
          <Calendar />
        </DatePicker.Trigger>
      </DatePicker>
    );
  }
);

export const DatePickerField = withStaticProperties(DatePickerFieldGroup, {
  Label: Field.Label,
  Link: Field.Link,
  Control: DatePickerFieldControl,
  Details: Field.Details,
  Icon: Field.Icon
});
