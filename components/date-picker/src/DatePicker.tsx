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
import type { InputContextProps } from "@cyclone-ui/input";
import { Input } from "@cyclone-ui/input";
import { LabelText } from "@cyclone-ui/label-text";
import { Popover } from "@cyclone-ui/popover";
import type { DPDay, DPPropGetter } from "@rehookify/datepicker";
import {
  DatePickerProvider as RehookifyDatePickerProvider,
  useDatePickerContext
} from "@rehookify/datepicker";
import { AnimatePresence } from "@tamagui/animate-presence";
import {
  createStyledContext,
  styled,
  Theme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons-2";
import { XStack, YStack } from "@tamagui/stacks";
import type { PropsWithChildren } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { DimensionValue } from "react-native";
export type DatePickerChangeEventHandler = (
  event: CustomEvent<Date | null>
) => any;

export type DatePickerInputEventHandler = (event: CustomEvent<string>) => any;

export interface DatePickerExtraProps {
  /**
   * Date shown and selected in the calendar popover.
   */
  selectedDate?: Date | null;

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
}

export type DatePickerContextProps = Omit<
  InputContextProps,
  "onChange" | "onInput"
> & {
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

export const DatePickerContext = createStyledContext<DatePickerContextProps>({
  size: "$true",
  circular: false,
  disabled: false,
  focused: false
});

export const DEFAULT_DATE_FORMAT = "MM.DD.YYYY";

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

const CALENDAR_WIDTH = "$37xl";
const CALENDAR_CELL_SIZE = "$9xl";

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

  const prevNextAnimation = useCallback(() => {
    if (listenTo === "years") {
      if (previousYearsSum === null) {
        return { enterStyle: { opacity: 0 } };
      }

      return {
        enterStyle: {
          opacity: 0,
          x: yearsSum < previousYearsSum ? -15 : 15
        },
        exitStyle: {
          opacity: 0,
          x: yearsSum < previousYearsSum ? -15 : 15
        }
      };
    }

    if (listenTo === "month") {
      if (previousMonth === null) {
        return { enterStyle: { opacity: 0 } };
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
        return {
          enterStyle: { opacity: 0, x: 15 },
          exitStyle: { opacity: 0, x: 15 }
        };
      }
      if (previousMonth === "January" && calendar?.month === "December") {
        return {
          enterStyle: { opacity: 0, x: -15 },
          exitStyle: { opacity: 0, x: -15 }
        };
      }
      return {
        enterStyle: { opacity: 0, x: isPreviousDate ? -15 : 15 },
        exitStyle: { opacity: 0, x: isPreviousDate ? -15 : 15 }
      };
    }

    if (listenTo === "year") {
      if (previousYear === null) {
        return { enterStyle: { opacity: 0 } };
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

      return {
        enterStyle: { opacity: 0, x: isPreviousDate ? -15 : 15 },
        exitStyle: { opacity: 0, x: isPreviousDate ? -15 : 15 }
      };
    }

    return {
      enterStyle: {},
      exitStyle: {}
    };
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
  const {
    data: { calendars, weekDays },
    propGetters: { dayButton }
  } = useDatePickerContext();

  const days = calendars[0]?.days ?? [];
  const { prevNextAnimation, prevNextAnimationKey } = useDateAnimation({
    listenTo: "month"
  });

  // divide days array into sub arrays that each has 7 days, for better stylings
  const subDays = useMemo(
    () =>
      days.reduce((ret, day, i) => {
        if (i % 7 === 0) {
          ret.push([]);
        }

        if (ret.length > 0) {
          ret[ret.length - 1] ??= [];
          ret[ret.length - 1]?.push(day);
        }

        return ret;
      }, [] as DPDay[][]),
    [days]
  );

  return (
    <AnimatePresence key={prevNextAnimationKey}>
      <YStack
        transition="200ms"
        justifyContent="center"
        gap="$xl"
        {...prevNextAnimation()}>
        <XStack width="100%" gap="$md" justifyContent="space-between">
          {weekDays.map(day => (
            <View
              key={day}
              width={CALENDAR_CELL_SIZE}
              alignItems="center"
              justifyContent="center">
              <LabelText textAlign="center" size="$sm" color="$foregroundBody">
                {day}
              </LabelText>
            </View>
          ))}
        </XStack>
        <YStack gap="$md" flexWrap="wrap">
          {subDays.map((days, i) => {
            return (
              <XStack
                key={days[0]?.$date.toString() ?? i}
                width="100%"
                gap="$xs"
                rowGap="$xs"
                alignItems="center"
                justifyContent="space-between">
                {days.map(day => (
                  <Button
                    key={day.$date.toString()}
                    {...swapOnClick(dayButton(day))}
                    theme={"primary"}
                    variant={
                      day.now
                        ? "subtle"
                        : !day.inCurrentMonth
                          ? "ghost"
                          : day.selected
                            ? "inverse"
                            : "ghost"
                    }
                    borderColor={day.now ? "$border" : undefined}
                    size={CALENDAR_CELL_SIZE}
                    width={CALENDAR_CELL_SIZE}
                    flexGrow={0}
                    flexShrink={0}
                    noPadding={true}
                    borderRadius="$button"
                    disabled={!day.inCurrentMonth}>
                    <Button.Text>{day.day}</Button.Text>
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
  const {
    data: { years },
    propGetters: { previousYearsButton, nextYearsButton }
  } = useDatePickerContext();

  return (
    <View
      flexDirection="row"
      gap="$3xl"
      width="100%"
      height={40}
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$10xl"
        width="$10xl"
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(previousYearsButton())}>
        <Button.Icon>
          <ChevronLeft />
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
        <LabelText
          color="$foreground"
          textAlign="center"
          userSelect="auto"
          tabIndex={0}>
          {`${years[0]?.year} - ${years[years.length - 1]?.year}`}
        </LabelText>
      </View>
      <Button
        variant="ghost"
        size="$10xl"
        width="$10xl"
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(nextYearsButton())}>
        <Button.Icon>
          <ChevronRight />
        </Button.Icon>
      </Button>
    </View>
  );
}

function YearSlider() {
  const {
    data: { calendars },
    propGetters: { subtractOffset }
  } = useDatePickerContext();
  const { setHeader } = useHeaderType();
  const year = calendars[0]?.year;

  return (
    <View
      flexDirection="row"
      gap="$3xl"
      width="100%"
      height={40}
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$10xl"
        width="$10xl"
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(subtractOffset({ months: 12 }))}>
        <Button.Icon>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <View flexGrow={1} flexShrink={1} flexBasis={0} minWidth={0}>
        <LabelText
          onPress={() => setHeader("year")}
          userSelect="text"
          tabIndex={0}
          size="$6xl"
          textAlign="center"
          cursor="pointer"
          color="$foreground"
          hoverStyle={{
            color: "$foregroundHover"
          }}>
          {year}
        </LabelText>
      </View>
      <Button
        variant="ghost"
        size="$10xl"
        width="$10xl"
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(subtractOffset({ months: -12 }))}>
        <Button.Icon>
          <ChevronRight />
        </Button.Icon>
      </Button>
    </View>
  );
}

const CalendarHeader = () => {
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
      gap="$3xl"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$10xl"
        width="$10xl"
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(subtractOffset({ months: 1 }))}>
        <Button.Icon>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <YStack
        gap="$md"
        alignItems="center"
        flexGrow={1}
        flexShrink={1}
        flexBasis={0}
        minWidth={0}>
        <LabelText
          transition="200ms"
          onPress={() => setHeader("year")}
          userSelect="auto"
          tabIndex={0}
          size="$4xl"
          cursor="pointer"
          color="$foreground"
          hoverStyle={{
            color: "$foregroundHover"
          }}>
          {year}
        </LabelText>
        <LabelText
          transition="200ms"
          onPress={() => setHeader("month")}
          userSelect="auto"
          cursor="pointer"
          tabIndex={0}
          size="$8xl"
          color="$foreground"
          fontWeight="600"
          lineHeight="$xs"
          hoverStyle={{
            color: "$foregroundHover"
          }}>
          {month}
        </LabelText>
      </YStack>
      <Button
        variant="ghost"
        size="$10xl"
        width="$10xl"
        flexGrow={0}
        flexShrink={0}
        noPadding={true}
        {...swapOnClick(subtractOffset({ months: -1 }))}>
        <Button.Icon>
          <ChevronRight />
        </Button.Icon>
      </Button>
    </XStack>
  );
};

type ItemPickerProps = PropsWithChildren<
  DPPropGetter & {
    active: boolean;
    flexBasis?: "unset" | DimensionValue | undefined;
  }
>;

const ItemPicker = ({
  active,
  flexBasis,
  children,
  ...rest
}: ItemPickerProps) => {
  return (
    <Button
      variant={active ? "surface" : "ghost"}
      flexGrow={1}
      flexBasis={flexBasis ?? "unset"}
      {...rest}>
      <Button.Text>{children}</Button.Text>
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

  return (
    <AnimatePresence key={prevNextAnimationKey}>
      <View
        {...prevNextAnimation()}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap="$xl"
        transition="100ms"
        $platform-native={{
          justifyContent: "space-between",
          width: "100%"
        }}>
        {months.map(month => (
          <ItemPicker
            active={month.active}
            key={month.$date.toString()}
            flexBasis="30%"
            {...swapOnClick(
              monthButton(month, {
                onClick: onChange as any
              })
            )}>
            {month.month}
          </ItemPicker>
        ))}
      </View>
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
        gap="$xl"
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
  const [header, setHeader] = useState<"day" | "month" | "year">("day");

  return (
    <Theme name={"primary"}>
      <HeaderTypeProvider type={header} setHeader={setHeader}>
        <XStack justifyContent="center">
          <YStack width={CALENDAR_WIDTH} alignItems="center" gap="$2xl">
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

const DatePickerTextBox = Input.TextBox.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Popover.Trigger asChild={true}>
        <Input.TextBox ref={forwardedRef} {...props}>
          {children}
        </Input.TextBox>
      </Popover.Trigger>
    );
  },
  { staticConfig: { componentName: "DatePickerValue" } }
);

const DatePickerTextBoxValue = Input.TextBox.Value.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Input.TextBox.Value
        ref={forwardedRef}
        placeholder={DEFAULT_DATE_FORMAT}
        nativePaddingInline={16}
        {...props}>
        {children}
      </Input.TextBox.Value>
    );
  },
  { staticConfig: { componentName: "DatePickerValue" } }
);

type DatePickerProviderProps = PropsWithChildren<
  Partial<DatePickerContextProps> & Pick<DatePickerExtraProps, "selectedDate">
>;

const DatePickerProvider = ({
  children,
  onChange,
  onFocus,
  focused,
  selectedDate = null,
  ...props
}: DatePickerProviderProps) => {
  const [date, setDate] = useState<Date | null>(selectedDate);
  const [offsetDate, setOffsetDate] = useState<Date>(
    () => selectedDate ?? new Date()
  );

  useEffect(() => {
    setDate(selectedDate);

    if (selectedDate) {
      setOffsetDate(selectedDate);
    }
  }, [selectedDate]);

  const selectedDates = useMemo(() => {
    if (!date) {
      return [];
    }

    return [date];
  }, [date]);

  const handleChange = useCallback(
    (dates: Date[] | null) => {
      const value =
        Array.isArray(dates) && dates.length > 0 && dates[0] ? dates[0] : null;

      setDate(value);
      onChange?.(
        new CustomEvent("change", {
          detail: value
        })
      );
    },
    [onChange]
  );

  return (
    <RehookifyDatePickerProvider
      config={{
        selectedDates,
        onDatesChange: handleChange,
        offsetDate,
        onOffsetChange: setOffsetDate,
        calendar: {
          startDay: 0
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
        focused={focused}>
        {children}
      </DatePickerContext.Provider>
    </RehookifyDatePickerProvider>
  );
};

const { Provider: HeaderTypeProvider, useStyledContext: useHeaderType } =
  createStyledContext({
    type: "day",
    setHeader: (_: "day" | "month" | "year") => {}
  });

const DatePickerPopoverContent = styled(Popover.Content, {
  name: "DatePickerPopover",
  context: DatePickerContext,

  flexBasis: "auto",
  flexGrow: 0,
  flexShrink: 0
});

const DatePickerControlImpl = Input.styleable<DatePickerExtraProps>(
  (
    {
      children,
      onChange,
      onInput,
      onFocus,
      onBlur,
      focused,
      selectedDate,
      ...props
    },
    forwardedRef
  ) => {
    const handleOpenChanged = useCallback(
      (open: boolean, _via?: "hover" | "press") => {
        if (open) {
          onFocus?.();
        } else {
          onBlur?.();
        }
      },
      [onFocus, onBlur]
    );

    return (
      <DatePickerProvider
        {...props}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        focused={focused}
        selectedDate={selectedDate}>
        <Popover
          keepChildrenMounted={true}
          open={!!focused}
          onOpenChange={handleOpenChanged}>
          <Input
            ref={forwardedRef}
            {...props}
            focused={focused}
            onInput={onInput}>
            {children}
          </Input>

          <DatePickerPopoverContent disableFocusScope={true}>
            <DatePickerPopoverBody />
          </DatePickerPopoverContent>
        </Popover>
      </DatePickerProvider>
    );
  },
  { staticConfig: { componentName: "DatePicker" } }
);

export const DatePicker = withStaticProperties(DatePickerControlImpl, {
  TextBox: withStaticProperties(DatePickerTextBox, {
    Value: DatePickerTextBoxValue
  }),
  Separator: Input.Separator,
  Trigger: Input.Trigger
});
