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

import { Button } from "@cyclone-ui/button";
import { Field } from "@cyclone-ui/field";
import {
  HeadingExtraSmallText,
  HeadingLargeText,
  HeadingMediumText,
  HeadingSmallText
} from "@cyclone-ui/heading-text";
import type { FormControlSize, StyleEnv } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormFontScale,
  getFormFontSize,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldLabelDefaults,
  useFieldOptions,
  useFieldVariant,
  useFormControl
} from "@cyclone-ui/helpers";
import { CalendarDots, CaretLeft, CaretRight } from "@cyclone-ui/icons";
import type { InputContextProps } from "@cyclone-ui/input";
import { Input } from "@cyclone-ui/input";
import { Popover } from "@cyclone-ui/popover";
import type { MaskitoOptions, MaskitoPostprocessor } from "@maskito/core";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import type { DPDay, DPPropGetter } from "@rehookify/datepicker";
import {
  DatePickerProvider as RehookifyDatePickerProvider,
  useDatePickerContext
} from "@rehookify/datepicker";
import { formatDate } from "@stryke/date/format";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { GetProps } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Theme,
  useComposedRefs,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { PropsWithChildren, RefObject } from "react";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import type { DimensionValue } from "react-native";

export type DatePickerMode = "single" | "range";

export type DatePickerChangeEventHandler = (
  event: CustomEvent<Date | null>
) => any;

export type DatePickerDatesChangeEventHandler = (
  event: CustomEvent<Date[]>
) => any;

export type DatePickerInputEventHandler = (event: CustomEvent<string>) => any;

export type DateSeparator = "." | "/";

export interface DatePickerExtraProps {
  /**
   * Determines whether one date or a start and end date can be selected.
   */
  mode?: DatePickerMode;

  /**
   * Separator used by the text input's date format.
   */
  separator?: DateSeparator;

  /**
   * Date shown and selected in the calendar popover.
   */
  selectedDate?: Date | null;

  /**
   * Dates shown and selected when `mode` is `range`.
   */
  selectedDates?: Date[];

  /**
   * Callback that is called when the text input's text changes.
   *
   * @remarks
   * This is called after `onInput` and is useful for cases where you want to handle the input after it has been provided.
   */
  onChange?: DatePickerChangeEventHandler;

  /**
   * Callback that is called when the selected range changes.
   */
  onDatesChange?: DatePickerDatesChangeEventHandler;

  /**
   * Callback that is called when the user provides input to the text field.
   *
   * @remarks
   * This is called before `onChange` and is useful for cases where you want to prevent certain characters from being inputted.
   */
  onInput?: DatePickerInputEventHandler;
}

export type DatePickerContextProps = Omit<
  InputContextProps,
  "onChange" | "onInput"
> & {
  mode: DatePickerMode;
  separator: DateSeparator;

  /**
   * Callback that is called when the text input's text changes.
   *
   * @remarks
   * This is called after `onInput` and is useful for cases where you want to handle the input after it has been provided.
   */
  onChange?: DatePickerChangeEventHandler;

  /**
   * Callback that is called when the user provides input to the text field.
   *
   * @remarks
   * This is called before `onChange` and is useful for cases where you want to prevent certain characters from being inputted.
   */
  onInput?: DatePickerInputEventHandler;
};

export const DatePickerContext = createStyledContext<
  DatePickerContextProps,
  | "mode"
  | "separator"
  | "size"
  | "circular"
  | "disabled"
  | "focused"
  | "variant"
  | "hasValidationMessage"
>(
  {
    mode: "single",
    separator: ".",
    size: "md",
    circular: false,
    disabled: false,
    focused: false,
    variant: "outlined",
    hasValidationMessage: false
  } as DatePickerContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: []
  }
);

export const DEFAULT_DATE_FORMAT = "MM.DD.YYYY";

export const getDateFormat = (separator: DateSeparator = ".") =>
  `MM${separator}DD${separator}YYYY`;

export const DATE_RANGE_SEPARATOR = " – ";

export const getDateRangeFormat = (separator: DateSeparator = ".") => {
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
    ...DATE_MASK_OPTIONS_DOT.postprocessors.slice(0, 1),
    rejectInvalidDate(".")
  ]
};

export const DATE_MASK_SLASH = {
  ...DATE_MASK_OPTIONS_SLASH,
  // Maskito's final date postprocessor normalizes impossible dates (for
  // example, 04.31 to 05.01). This field must reject them instead.
  postprocessors: [
    ...DATE_MASK_OPTIONS_SLASH.postprocessors.slice(0, 1),
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

  return formatDate(
    date,
    getDateFormat(separator) as Parameters<typeof formatDate>[1]
  );
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

// The month picker always renders a uniform grid of this many columns.
const MONTH_PICKER_COLUMNS = 2;

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
] as const;

/**
 * The form font for a control size.
 *
 * @remarks
 * Tamagui v3 reads a unitless `lineHeight` as a ratio, so the scaled pixel
 * leading `getFormFontSize` returns for `sm`/`lg` is pinned in `px`.
 */
const getFormFontStyle = (size: FormControlSize, env: StyleEnv) => {
  const style = getFormFontSize(size, env);

  return {
    fontFamily: style.fontFamily,
    fontWeight: style.fontWeight,
    fontStyle: style.fontStyle,
    letterSpacing: style.letterSpacing,
    textTransform: style.textTransform,
    color: style.color,
    fontSize: style.fontSize,
    lineHeight:
      typeof style.lineHeight === "number"
        ? `${style.lineHeight}px`
        : style.lineHeight
  };
};

// Calendar headings take `controlSize` as a prop rather than reading
// `DatePickerContext`: v3 merges every context value into a consumer's props,
// so the picker's input `variant` ("outlined", "inlined", ...) would replace
// the heading's `variant: "base"` and drop its `display-*` font family.
const CalendarHeading = styled(HeadingLargeText, {
  variants: { controlSize: formSizeVariants(getFormFontStyle) }
});

const CalendarHeadingSmallText = styled(HeadingSmallText, {
  variants: { controlSize: formSizeVariants(getFormFontStyle) }
});

const CalendarExtraSmallHeading = styled(HeadingExtraSmallText, {
  variants: { controlSize: formSizeVariants(getFormFontStyle) }
});

const CalendarRangeHeading = styled(HeadingMediumText, {
  variants: { controlSize: formSizeVariants(getFormFontStyle) }
});

const EMPTY_DATES: Date[] = [];

const getMonthIndex = (month?: string | null) => {
  if (!month) {
    return -1;
  }

  return (MONTH_NAMES as readonly string[]).indexOf(month);
};

// Rehookify internally return `onClick` and that's incompatible with native
const swapOnClick = (d: any) => {
  const { onClick, ...props } = d;

  return {
    ...props,
    onPress: onClick
  };
};

// Enter and exit offsets are flat `enter:`/`exit:` clauses; `exit:` applies
// while AnimatePresence keeps the element mounted to exit.
const slide = (offset: number) => ({
  opacity: "enter:0 exit:0",
  x: `enter:${offset}px exit:${offset}px`
});

function useDateAnimation({
  listenTo
}: {
  listenTo: "years" | "year" | "month";
}) {
  const {
    data: { years, calendars }
  } = useDatePickerContext();

  const calendar = calendars && calendars.length > 0 ? calendars[0] : undefined;
  const calendarListenTo =
    calendar && listenTo !== "years" ? calendar[listenTo] : undefined;

  const yearsSum = years.reduce((ret, date) => ret + date.year, 0);
  const month = calendar?.month ?? null;
  const year = calendar?.year ?? null;

  const previousYearsSumRef = useRef<number | null>(null);
  const previousMonthRef = useRef<string | null>(null);
  const previousYearRef = useRef<string | null>(null);

  const previousYearsSum = previousYearsSumRef.current;
  const previousMonth = previousMonthRef.current;
  const previousYear = previousYearRef.current;

  useEffect(() => {
    previousYearsSumRef.current = yearsSum;
    previousMonthRef.current = month;
    previousYearRef.current = year;
  });

  const prevNextAnimation = useCallback(():
    ReturnType<typeof slide> | { opacity?: string } => {
    if (listenTo === "years") {
      if (previousYearsSum === null) {
        return { opacity: "enter:0" };
      }

      return slide(yearsSum < previousYearsSum ? -15 : 15);
    }

    if (listenTo === "month") {
      if (previousMonth === null) {
        return { opacity: "enter:0" };
      }

      const isPreviousDate =
        new Date(
          Number(calendar?.year ?? 0),
          getMonthIndex(calendarListenTo) + 1,
          1
        ).getTime() <
        new Date(
          Number(calendar?.year ?? 0),
          getMonthIndex(previousMonth) + 1,
          1
        ).getTime();

      if (previousMonth === "December" && calendar?.month === "January") {
        return slide(15);
      }
      if (previousMonth === "January" && calendar?.month === "December") {
        return slide(-15);
      }
      return slide(isPreviousDate ? -15 : 15);
    }

    if (listenTo === "year") {
      if (previousYear === null) {
        return { opacity: "enter:0" };
      }

      const isPreviousDate =
        new Date(
          Number(calendar?.year ?? 0),
          getMonthIndex(calendar?.month) + 1,
          1
        ).getTime() <
        new Date(
          Number(previousYear),
          getMonthIndex(calendar?.month) + 1,
          1
        ).getTime();

      return slide(isPreviousDate ? -15 : 15);
    }

    return {};
  }, [
    listenTo,
    yearsSum,
    previousYearsSum,
    previousMonth,
    previousYear,
    calendar,
    calendarListenTo
  ]);

  return {
    prevNextAnimation,
    prevNextAnimationKey: listenTo === "years" ? yearsSum : calendarListenTo
  };
}

const DayPicker = () => {
  const { size } = DatePickerContext.useStyledContext();
  const cellSize = getFormSizeToken(size);
  const {
    data: { calendars, weekDays },
    propGetters: { dayButton }
  } = useDatePickerContext();

  const { prevNextAnimation, prevNextAnimationKey } = useDateAnimation({
    listenTo: "month"
  });

  // divide days array into sub arrays that each has 7 days, for better stylings
  const subDays = useMemo(() => {
    const days = calendars[0]?.days ?? [];

    return days.reduce((ret, day, i) => {
      if (i % 7 === 0) {
        ret.push([]);
      }

      if (ret.length > 0) {
        ret[ret.length - 1] ??= [];
        ret[ret.length - 1]?.push(day);
      }

      return ret;
    }, [] as DPDay[][]);
  }, [calendars]);

  return (
    <AnimatePresence key={prevNextAnimationKey}>
      <YStack
        transition="200ms"
        justifyContent="center"
        gap="xl"
        {...prevNextAnimation()}>
        <XStack width="100%" gap="md" justifyContent="space-between">
          {weekDays.map(day => (
            <View
              key={day}
              width={cellSize}
              alignItems="center"
              justifyContent="center">
              <CalendarExtraSmallHeading
                controlSize={size}
                textAlign="center"
                color="inkSubtle">
                {day}
              </CalendarExtraSmallHeading>
            </View>
          ))}
        </XStack>
        <YStack gap="md" flexWrap="wrap">
          {subDays.map((days, i) => {
            return (
              <XStack
                key={days[0]?.$date.toString() ?? i}
                width="100%"
                columnGap="xs"
                rowGap="xs"
                alignItems="center"
                justifyContent="space-between">
                {days.map(day => (
                  <Button
                    key={day.$date.toString()}
                    {...swapOnClick(dayButton(day))}
                    theme="base"
                    variant={
                      day.now
                        ? "outlined"
                        : !day.inCurrentMonth
                          ? "ghost"
                          : day.selected || day.range === "in-range"
                            ? "primary"
                            : "ghost"
                    }
                    ghostOpacity={0.75}
                    borderColor={day.now ? "hairline" : undefined}
                    size={cellSize}
                    width={cellSize}
                    flexGrow={0}
                    flexShrink={0}
                    noPadding={true}
                    borderRadius="button"
                    disabled={!day.inCurrentMonth}>
                    <Button.Text fontSize={16 * getFormFontScale(size)}>
                      {day.day}
                    </Button.Text>
                  </Button>
                ))}
              </XStack>
            );
          })}
        </YStack>
      </YStack>
    </AnimatePresence>
  );
};

function YearRangeSlider() {
  const { size } = DatePickerContext.useStyledContext();
  const cellSize = getFormSizeToken(size);
  const scale = getFormSizeScale(size);
  const {
    data: { years },
    propGetters: { previousYearsButton, nextYearsButton }
  } = useDatePickerContext();

  return (
    <View
      flexDirection="row"
      gap="3xl"
      width="100%"
      height={40 * scale}
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        ghostOpacity={0.75}
        size={cellSize}
        width={cellSize}
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(previousYearsButton())}>
        <Button.Icon>
          <CaretLeft weight="black" />
        </Button.Icon>
      </Button>
      <View
        y={2}
        flexGrow={1}
        flexShrink={1}
        flexBasis={0}
        minWidth={0}
        flexDirection="column"
        alignItems="center">
        <CalendarRangeHeading
          controlSize={size}
          color="accent"
          textAlign="center"
          userSelect="auto"
          tabIndex={0}>
          {`${years[0]?.year} - ${years[years.length - 1]?.year}`}
        </CalendarRangeHeading>
      </View>
      <Button
        variant="ghost"
        ghostOpacity={0.75}
        size={cellSize}
        width={cellSize}
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(nextYearsButton())}>
        <Button.Icon>
          <CaretRight weight="black" />
        </Button.Icon>
      </Button>
    </View>
  );
}

function YearSlider() {
  const { size } = DatePickerContext.useStyledContext();
  const cellSize = getFormSizeToken(size);
  const scale = getFormSizeScale(size);
  const {
    data: { calendars },
    propGetters: { subtractOffset }
  } = useDatePickerContext();
  const { setHeader } = useHeaderType();
  const year = calendars[0]?.year;

  return (
    <View
      flexDirection="row"
      gap="3xl"
      width="100%"
      height={40 * scale}
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        ghostOpacity={0.75}
        size={cellSize}
        width={cellSize}
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(subtractOffset({ months: 12 }))}>
        <Button.Icon>
          <CaretLeft />
        </Button.Icon>
      </Button>
      <View flexGrow={1} flexShrink={1} flexBasis={0} minWidth={0}>
        <CalendarHeadingSmallText
          controlSize={size}
          onPress={() => setHeader("year")}
          userSelect="text"
          textAlign="center"
          cursor="pointer"
          color="accent hover:accentHover"
          tabIndex={0}>
          {year}
        </CalendarHeadingSmallText>
      </View>
      <Button
        variant="ghost"
        ghostOpacity={0.75}
        size={cellSize}
        width={cellSize}
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(subtractOffset({ months: -12 }))}>
        <Button.Icon>
          <CaretRight />
        </Button.Icon>
      </Button>
    </View>
  );
}

const CalendarHeader = () => {
  const { size } = DatePickerContext.useStyledContext();
  const cellSize = getFormSizeToken(size);
  const {
    data: { calendars },
    propGetters: { subtractOffset }
  } = useDatePickerContext();
  const { type: header, setHeader } = useHeaderType();

  const month = calendars[0]?.month;
  const year = calendars[0]?.year;

  if (header === "year") {
    return <YearRangeSlider />;
  }

  if (header === "month") {
    return <YearSlider />;
  }

  return (
    <XStack
      width="100%"
      alignItems="center"
      gap="3xl"
      justifyContent="space-between">
      <Button
        variant="ghost"
        ghostOpacity={0.75}
        size={cellSize}
        width={cellSize}
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(subtractOffset({ months: 1 }))}>
        <Button.Icon>
          <CaretLeft />
        </Button.Icon>
      </Button>
      <YStack alignItems="center" minWidth={0}>
        <CalendarHeadingSmallText
          controlSize={size}
          transition="200ms"
          userSelect="auto"
          cursor="pointer"
          color="accent hover:accentHover"
          onPress={() => setHeader("year")}
          tabIndex={0}>
          {year}
        </CalendarHeadingSmallText>
        <CalendarHeading
          controlSize={size}
          transition="200ms"
          userSelect="auto"
          cursor="pointer"
          color="accent hover:accentHover"
          onPress={() => setHeader("month")}
          tabIndex={0}>
          {month}
        </CalendarHeading>
      </YStack>
      <Button
        variant="ghost"
        ghostOpacity={0.75}
        size={cellSize}
        width={cellSize}
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(subtractOffset({ months: -1 }))}>
        <Button.Icon>
          <CaretRight />
        </Button.Icon>
      </Button>
    </XStack>
  );
};

type ItemPickerProps = PropsWithChildren<
  DPPropGetter & {
    active: boolean;
    flexBasis?: "unset" | DimensionValue | undefined;
    flexShrink?: number;
    minWidth?: DimensionValue;
  }
>;

const ItemPicker = ({
  active,
  flexBasis,
  flexShrink,
  minWidth,
  children,
  ...rest
}: ItemPickerProps) => {
  const { size } = DatePickerContext.useStyledContext();

  return (
    <Button
      size={getFormSizeToken(size)}
      variant={active ? "primary" : "ghost"}
      ghostOpacity={0.75}
      flexGrow={1}
      flexBasis={flexBasis ?? "unset"}
      flexShrink={flexShrink}
      minWidth={minWidth}
      {...rest}>
      <Button.Text fontSize={16 * getFormFontScale(size)}>
        {children}
      </Button.Text>
    </Button>
  );
};

const MonthPicker = ({
  onChange = (_e, _date) => {}
}: {
  onChange?: (e: MouseEvent, date: Date) => void;
}) => {
  const {
    data: { months },
    propGetters: { monthButton }
  } = useDatePickerContext();

  const { prevNextAnimation, prevNextAnimationKey } = useDateAnimation({
    listenTo: "year"
  });

  // Chunk into explicit rows so every row has the same number of equally
  // sized cells, regardless of the length of each month's name.
  const monthRows = useMemo(
    () =>
      months.reduce(
        (ret, month, i) => {
          if (i % MONTH_PICKER_COLUMNS === 0) {
            ret.push([]);
          }
          ret[ret.length - 1]?.push(month);

          return ret;
        },
        [] as (typeof months)[]
      ),
    [months]
  );

  return (
    <AnimatePresence key={prevNextAnimationKey}>
      <YStack {...prevNextAnimation()} gap="xl" transition="100ms" width="100%">
        {monthRows.map((row, i) => (
          <XStack key={row[0]?.$date.toString() ?? i} width="100%" gap="xl">
            {row.map(month => (
              <ItemPicker
                active={month.active}
                key={month.$date.toString()}
                flexBasis={0}
                flexShrink={1}
                minWidth={0}
                {...swapOnClick(
                  monthButton(month, {
                    onClick: onChange as any
                  })
                )}>
                {month.month}
              </ItemPicker>
            ))}
          </XStack>
        ))}
      </YStack>
    </AnimatePresence>
  );
};

function YearPicker({
  onChange = () => {}
}: {
  onChange?: (e: MouseEvent, date: Date) => void;
}) {
  const {
    data: { years, calendars },
    propGetters: { yearButton }
  } = useDatePickerContext();
  const selectedYear = calendars[0]?.year;

  const { prevNextAnimation, prevNextAnimationKey } = useDateAnimation({
    listenTo: "years"
  });

  return (
    <AnimatePresence key={prevNextAnimationKey}>
      <View
        {...prevNextAnimation()}
        transition="100ms"
        flexDirection="row"
        flexWrap="wrap"
        gap="xl"
        width="100%"
        justifyContent="space-between">
        {years.map(year => (
          <ItemPicker
            active={year.year === Number(selectedYear)}
            key={year.$date.toString()}
            flexBasis="20%"
            {...swapOnClick(
              yearButton(year, {
                onClick: onChange as any
              })
            )}>
            {year.year}
          </ItemPicker>
        ))}
      </View>
    </AnimatePresence>
  );
}

const DatePickerPopoverBody = () => {
  const { size } = DatePickerContext.useStyledContext();
  const [header, setHeader] = useState<"day" | "month" | "year">("day");

  return (
    <Theme name="base">
      <HeaderTypeProvider type={header} setHeader={setHeader}>
        <XStack justifyContent="center">
          <YStack
            // Seven day cells plus the six unscaled gaps between them.
            width={getSized(getFormSizeToken(size)) * 7 + getSpaced("md") * 6}
            alignItems="center"
            gap="2xl">
            <CalendarHeader />
            {header === "month" && (
              <MonthPicker onChange={() => setHeader("day")} />
            )}
            {header === "year" && (
              <YearPicker onChange={() => setHeader("day")} />
            )}
            {header === "day" && <DayPicker />}
          </YStack>
        </XStack>
      </HeaderTypeProvider>
    </Theme>
  );
};

const DatePickerTextBox = createStyledHOC(
  Input.TextBox,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Input.TextBox ref={forwardedRef} {...props}>
        {children}
      </Input.TextBox>
    );
  },
  { displayName: "DatePickerValue" }
);

/**
 * The text box state a `DatePicker` connected to a form control (such as
 * `Field`) shares with its `TextBox.Value`.
 */
interface DatePickerFieldState {
  value: string;
  inputRef: RefObject<HTMLInputElement | null>;
  onKeyDown: (event: any) => void;
}

const DatePickerFieldContext = createContext<DatePickerFieldState | undefined>(
  undefined
);

const DatePickerTextBoxValue = createStyledHOC(
  Input.TextBox.Value,
  (
    { children, placeholder, value: valueProp, onKeyDown, ...props },
    forwardedRef
  ) => {
    const { mode, separator, size } = DatePickerContext.useStyledContext();
    const fieldState = use(DatePickerFieldContext);
    const ref = useComposedRefs(forwardedRef, fieldState?.inputRef);
    const fieldOnKeyDown = fieldState?.onKeyDown;
    const handleKeyDown = useMemo(
      () =>
        fieldOnKeyDown
          ? (event: any) => {
              onKeyDown?.(event);
              fieldOnKeyDown(event);
            }
          : onKeyDown,
      [fieldOnKeyDown, onKeyDown]
    );

    return (
      <Input.TextBox.Value
        ref={ref}
        value={valueProp ?? fieldState?.value}
        onKeyDown={handleKeyDown}
        placeholder={
          placeholder === undefined
            ? undefined
            : placeholder === DEFAULT_DATE_FORMAT
              ? mode === "range"
                ? getDateRangeFormat(separator)
                : getDateFormat(separator)
              : placeholder
        }
        nativePaddingInline={16 * getFormSizeScale(size)}
        {...props}>
        {children}
      </Input.TextBox.Value>
    );
  },
  { displayName: "DatePickerValue" }
);

type DatePickerTriggerProps = GetProps<typeof Field.Icon>;

const DatePickerTrigger = createStyledHOC(
  Field.Icon,
  (props: DatePickerTriggerProps, forwardedRef) => {
    const { size } = DatePickerContext.useStyledContext();

    return (
      <Field.Icon
        ref={forwardedRef}
        {...props}
        controlSize={size}
        pointerEvents="none"
      />
    );
  },
  { displayName: "DatePickerTrigger" }
);

type DatePickerProviderProps = PropsWithChildren<
  Partial<DatePickerContextProps> &
    Pick<
      DatePickerExtraProps,
      "onDatesChange" | "selectedDate" | "selectedDates"
    >
>;

const DatePickerProvider = ({
  children,
  onChange,
  onDatesChange,
  onFocus,
  focused,
  mode = "single",
  separator = ".",
  variant = "outlined",
  selectedDate = null,
  selectedDates: controlledSelectedDates = EMPTY_DATES,
  ...props
}: DatePickerProviderProps) => {
  const [dates, setDates] = useState<Date[]>(() =>
    mode === "range"
      ? controlledSelectedDates
      : selectedDate
        ? [selectedDate]
        : []
  );
  const [offsetDate, setOffsetDate] = useState<Date>(
    () =>
      (mode === "range" ? controlledSelectedDates[0] : selectedDate) ??
      new Date()
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect, react/set-state-in-effect
    setDates(
      mode === "range"
        ? controlledSelectedDates
        : selectedDate
          ? [selectedDate]
          : []
    );

    const firstDate =
      mode === "range" ? controlledSelectedDates[0] : selectedDate;
    if (firstDate) {
      // eslint-disable-next-line react/set-state-in-effect
      setOffsetDate(firstDate);
    }
  }, [controlledSelectedDates, mode, selectedDate]);

  const handleChange = useCallback(
    (nextDates: Date[]) => {
      const value = mode === "range" ? nextDates : (nextDates[0] ?? null);

      setDates(nextDates);
      if (mode === "range") {
        onDatesChange?.(
          new CustomEvent("change", {
            detail: nextDates
          })
        );
      } else {
        onChange?.(
          new CustomEvent("change", {
            detail: value as Date | null
          })
        );
      }
    },
    [mode, onChange, onDatesChange]
  );

  return (
    <RehookifyDatePickerProvider
      config={{
        selectedDates: dates,
        onDatesChange: handleChange,
        offsetDate,
        onOffsetChange: setOffsetDate,
        calendar: {
          startDay: 0
        },
        dates: {
          mode
        },
        locale: {
          locale: "en-US",
          day: "numeric",
          year: "numeric",
          weekday: "short",
          monthName: "long",
          hour: "2-digit",
          minute: "2-digit",
          hour12: undefined,
          second: undefined
        }
      }}>
      <DatePickerContext.Provider
        {...props}
        onChange={onChange}
        onFocus={onFocus}
        mode={mode}
        separator={separator}
        variant={variant}
        focused={focused}>
        {children}
      </DatePickerContext.Provider>
    </RehookifyDatePickerProvider>
  );
};

const { Provider: HeaderTypeProvider, useStyledContext: useHeaderType } =
  createStyledContext(
    {
      type: "day",
      setHeader: (_: "day" | "month" | "year") => {}
    },
    {
      keys: ["type", "setHeader"]
    }
  );

const DatePickerPopoverContent = styled(Popover.Content, {
  displayName: "DatePickerPopover",
  context: DatePickerContext,

  flexBasis: "auto",
  flexGrow: 0,
  flexShrink: 0
});

// Date pickers float their field label by default.
const FLOATING_LABEL = { variant: "floating" } as const;

// Passed to the inner `Input` so it does not fall back to the form control's
// handlers: the picker drives the field's value and focus itself.
const noop = () => {};

const getDateMask = (mode: DatePickerMode, separator: DateSeparator) =>
  mode === "range"
    ? separator === "."
      ? DATE_RANGE_MASK_DOT
      : DATE_RANGE_MASK_SLASH
    : separator === "."
      ? DATE_MASK_DOT
      : DATE_MASK_SLASH;

const DatePickerControlImpl = createStyledHOC(
  Input,
  (
    props: Omit<GetProps<typeof Input>, keyof DatePickerExtraProps> &
      DatePickerExtraProps,
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), any prop left unset falls back
    // to the control's state, which connects the picker to the form.
    const formControl = useFormControl();
    const fieldVariant = useFieldVariant();
    useFieldLabelDefaults(FLOATING_LABEL);
    const {
      children,
      onChange: onChangeProp,
      onDatesChange: onDatesChangeProp,
      onInput: onInputProp,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      name = formControl?.name,
      size = formControl?.size,
      disabled = formControl?.disabled,
      focused = formControl?.focused,
      mode = "single",
      separator = ".",
      variant = formControl ? fieldVariant : "outlined",
      selectedDate: selectedDateProp,
      selectedDates: selectedDatesProp,
      ...rest
    } = props;

    // The field formats, parses and masks its value for the picker's mode.
    const fieldOptions = useMemo(
      () => ({
        overrides: {
          format: (value: any) =>
            mode === "range"
              ? formatRange(value, separator)
              : format(value, separator),
          parse: (value: any) =>
            mode === "range"
              ? parseRange(value, separator)
              : parse(value, separator),
          mask: getDateMask(mode, separator),
          // The picker has no clear button.
          clearable: false
        }
      }),
      [mode, separator]
    );
    useFieldOptions(fieldOptions);

    const formattedValue = formControl?.formattedValue ?? "";
    const formOnChange = formControl?.onChange;
    const formOnBlur = formControl?.onBlur;
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState(formattedValue);
    const selectionRef = useRef<{ end: number; start: number } | null>(null);
    const inputDates = useMemo(
      () =>
        mode === "range"
          ? (parseInputDateRange(inputValue, separator) ?? [])
          : [],
      [inputValue, mode, separator]
    );
    const inputDate = useMemo(
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
        formOnChange?.(event.detail);
        formOnBlur?.();
      },
      [formOnBlur, formOnChange, separator]
    );

    const handleDatesChange = useCallback(
      (event: CustomEvent<Date[]>) => {
        setInputValue(formatRange(event.detail, separator));
        formOnChange?.(event.detail);

        if (event.detail.length >= 2) {
          formOnBlur?.();
        }
      },
      [formOnBlur, formOnChange, separator]
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
          formOnChange?.(value);
        }
      },
      [formOnChange, mode, separator]
    );

    const handleBlur = useCallback(() => {
      setInputValue(formattedValue);
      formOnBlur?.();
    }, [formOnBlur, formattedValue]);

    const handleKeyDown = useCallback(
      (event: any) => {
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
          formOnChange?.(nextDates);
        } else {
          setInputValue(format(nextDate, separator));
          formOnChange?.(nextDate);
        }
      },
      [formOnChange, mode, separator]
    );

    const fieldState = useMemo(
      () =>
        formControl
          ? { value: inputValue, inputRef, onKeyDown: handleKeyDown }
          : undefined,
      [formControl, handleKeyDown, inputValue]
    );

    const onChange =
      onChangeProp ??
      (formControl && mode === "single" ? handleChange : undefined);
    const onDatesChange =
      onDatesChangeProp ??
      (formControl && mode === "range" ? handleDatesChange : undefined);
    const onInput = onInputProp ?? (formControl ? handleInput : undefined);
    const onFocus = onFocusProp ?? formControl?.onFocus;
    const onBlur = onBlurProp ?? (formControl ? handleBlur : undefined);
    const selectedDate =
      selectedDateProp === undefined && formControl
        ? inputDate
        : selectedDateProp;
    const selectedDates =
      selectedDatesProp === undefined && formControl
        ? inputDates
        : selectedDatesProp;

    const handleOpenChanged = useCallback(
      (open: boolean, _via?: "hover" | "press") => {
        // eslint-disable-next-line no-console
        console.log("[DP] openChange", open, _via, "focused=", focused);

        if (open) {
          onFocus?.();
        } else {
          onBlur?.();
        }
      },
      [onFocus, onBlur]
    );

    return (
      <DatePickerFieldContext value={fieldState}>
        <DatePickerProvider
          {...rest}
          name={name}
          size={size}
          disabled={disabled}
          onChange={onChange}
          onDatesChange={onDatesChange}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
          focused={focused}
          mode={mode}
          separator={separator}
          variant={variant}
          selectedDate={selectedDate}
          selectedDates={selectedDates}>
          <Popover
            keepChildrenMounted={true}
            open={!!focused}
            onOpenChange={handleOpenChanged}
            offset={getSpaced("2xl")}>
            <Popover.Trigger asChild={true}>
              <Input
                ref={forwardedRef}
                {...rest}
                name={name}
                size={size}
                disabled={disabled}
                focused={focused}
                variant={variant}
                onChange={noop}
                onFocus={noop}
                onBlur={noop}
                onInput={onInput}>
                {children ??
                  (formControl && (
                    <>
                      <DatePickerTextBox>
                        <DatePickerTextBoxValue />
                      </DatePickerTextBox>
                      <Input.Separator />
                      <DatePickerTrigger>
                        <CalendarDots />
                      </DatePickerTrigger>
                    </>
                  ))}
              </Input>
            </Popover.Trigger>

            <DatePickerPopoverContent disableFocusScope={true}>
              <DatePickerPopoverBody />
            </DatePickerPopoverContent>
          </Popover>
        </DatePickerProvider>
      </DatePickerFieldContext>
    );
  },
  { displayName: "DatePicker" }
);

export const DatePicker = withStaticProperties(DatePickerControlImpl, {
  TextBox: withStaticProperties(DatePickerTextBox, {
    Value: DatePickerTextBoxValue
  }),
  Separator: Input.Separator,
  Trigger: withStaticProperties(DatePickerTrigger, {
    Icon: Button.Icon,
    Text: Button.Text
  })
});
