/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Button } from "@cyclone-ui/button";
import { ColorThemeName } from "@cyclone-ui/colors";
import { Input, InputContextProps } from "@cyclone-ui/input";
import { LabelText } from "@cyclone-ui/label-text";
import { Popover } from "@cyclone-ui/popover";
import type { DPDay, DPPropGetter } from "@rehookify/datepicker";
import {
  DatePickerProvider as RehookifyDatePickerProvider,
  useDatePickerContext
} from "@rehookify/datepicker";
import { StormDate } from "@storm-stack/date-time/storm-date";
import { StormDateTime } from "@storm-stack/date-time/storm-date-time";
import { AnimatePresence } from "@tamagui/animate-presence";
import {
  createStyledContext,
  styled,
  Theme,
  View,
  withStaticProperties
} from "@tamagui/core";
import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { DimensionValue } from "react-native";

export type DatePickerChangeEventHandler = (
  event: CustomEvent<Date | null>
) => any;

export type DatePickerExtraProps = {
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
  onInput?: DatePickerChangeEventHandler;
};

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
  onInput?: DatePickerChangeEventHandler;
};

export const DatePickerContext = createStyledContext<DatePickerContextProps>({
  size: "$true",
  circular: false,
  disabled: false,
  focused: false
});

export const DEFAULT_DATE_FORMAT = "MM.DD.YYYY";

// Rehookify internally return `onClick` and that's incompatible with native
const swapOnClick = <D extends any = any>(d: D) => {
  (d as any).onPress = (d as any).onClick;

  return d;
};

export function useDateAnimation({
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

  const [currentMonth, setCurrentMonth] = useState<string | null>(null);
  const [currentYear, setCurrentYear] = useState<string | null>(null);
  const [currentYearsSum, setCurrentYearsSum] = useState<number | null>(null);

  const sumYears = useCallback(() => {
    return years.reduce((ret, date) => ret + date.year, 0);
  }, [years]);

  useEffect(() => {
    if (listenTo === "years") {
      if (currentYearsSum !== sumYears()) {
        setCurrentYearsSum(sumYears());
      }
    }
  }, [years, sumYears, listenTo, currentYearsSum]);

  useEffect(() => {
    if (listenTo === "month") {
      if (calendar && currentMonth !== calendar.month) {
        setCurrentMonth(calendar.month);
      }
    }
  }, [listenTo, currentMonth]);

  useEffect(() => {
    if (listenTo === "year") {
      if (calendar?.year && currentYear !== calendar?.year) {
        setCurrentYear(calendar?.year);
      }
    }
  }, [listenTo, currentYear]);

  const prevNextAnimation = useCallback(() => {
    if (listenTo === "years") {
      if (currentYearsSum === null) {
        return { enterStyle: { opacity: 0 } };
      }

      return {
        enterStyle: { opacity: 0, x: sumYears() < currentYearsSum ? -15 : 15 },
        exitStyle: { opacity: 0, x: sumYears() < currentYearsSum ? -15 : 15 }
      };
    }

    if (listenTo === "month") {
      if (currentMonth === null) {
        return { enterStyle: { opacity: 0 } };
      }

      const isPreviousDate =
        StormDate.create(
          new Date(
            Number(calendar?.year ?? 0),
            StormDateTime.getMonthIndex(calendarListenTo) + 1,
            1
          )
        ).epochMilliseconds <
        StormDate.create(
          new Date(
            Number(calendar?.year ?? 0),
            StormDateTime.getMonthIndex(currentMonth) + 1,
            1
          )
        ).epochMilliseconds;

      if (currentMonth === "December" && calendar?.month === "January") {
        return {
          enterStyle: { opacity: 0, x: 15 },
          exitStyle: { opacity: 0, x: 15 }
        };
      }
      if (currentMonth === "January" && calendar?.month === "December") {
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
      if (currentYear === null) {
        return { enterStyle: { opacity: 0 } };
      }

      const isPreviousDate =
        StormDate.create(
          new Date(
            Number(calendar?.year ?? 0),
            StormDateTime.getMonthIndex(calendar?.month) + 1,
            1
          )
        ).epochMilliseconds <
        StormDate.create(
          new Date(
            Number(currentYear),
            StormDateTime.getMonthIndex(calendar?.month) + 1,
            1
          )
        ).epochMilliseconds;

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
    currentYearsSum,
    sumYears,
    currentMonth,
    calendarListenTo,
    calendar?.year,
    calendar?.month,
    currentYear
  ]);

  return {
    prevNextAnimation,
    prevNextAnimationKey: listenTo === "years" ? sumYears() : calendarListenTo
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
        animation="normal"
        justifyContent="center"
        gap="$2"
        {...prevNextAnimation()}>
        <XStack gap="$1">
          {weekDays.map(day => (
            <View key={day} justifyContent="center" width="$4">
              <LabelText textAlign="center" size="$4" color="$secondary">
                {day}
              </LabelText>
            </View>
          ))}
        </XStack>
        <YStack gap="$1" flexWrap="wrap">
          {subDays.map((days, i) => {
            return (
              <XStack
                key={days[0]?.$date.toString() ?? i}
                gap="$0.5"
                rowGap="$0.5"
                alignItems="center">
                {days.map(day => (
                  <Button
                    key={day.$date.toString()}
                    {...swapOnClick(dayButton(day))}
                    theme={ColorThemeName.BASE}
                    variant={
                      day.now
                        ? "secondary"
                        : !day.inCurrentMonth
                          ? "ghost"
                          : day.selected
                            ? "primary"
                            : "outlined"
                    }
                    borderColor={day.now ? "$primary" : undefined}
                    flexBasis="14%"
                    padding="$1"
                    borderRadius={0}
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

export function YearRangeSlider() {
  const {
    data: { years },
    propGetters: { previousYearsButton, nextYearsButton }
  } = useDatePickerContext();

  return (
    <View
      flexDirection="row"
      gap="$3"
      width="100%"
      height={40}
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$4"
        width="$5"
        flexShrink={1}
        {...swapOnClick(previousYearsButton())}>
        <Button.Icon>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <View y={2} flexDirection="column" alignItems="center" flexBasis="50%">
        <LabelText
          color="$color"
          textAlign="center"
          userSelect="auto"
          tabIndex={0}>
          {`${years[0]?.year} - ${years[years.length - 1]?.year}`}
        </LabelText>
      </View>
      <Button
        variant="ghost"
        size="$4"
        width="$5"
        flexShrink={1}
        {...swapOnClick(nextYearsButton())}>
        <Button.Icon>
          <ChevronRight />
        </Button.Icon>
      </Button>
    </View>
  );
}

export function YearSlider() {
  const {
    data: { calendars },
    propGetters: { subtractOffset }
  } = useDatePickerContext();
  const { setHeader } = useHeaderType();
  const year = calendars[0]?.year;

  return (
    <View
      flexDirection="row"
      gap="$3"
      width="100%"
      height={40}
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$4"
        width="$5"
        flexShrink={1}
        {...swapOnClick(subtractOffset({ months: 12 }))}>
        <Button.Icon>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <View flexBasis="50%">
        <LabelText
          onPress={() => setHeader("year")}
          selectable={true}
          tabIndex={0}
          size="$6"
          cursor="pointer"
          color="$color"
          hoverStyle={{
            color: "$accent10"
          }}>
          {year}
        </LabelText>
      </View>
      <Button
        variant="ghost"
        size="$4"
        width="$5"
        flexShrink={1}
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
    return (
      <XStack
        width="100%"
        alignItems="center"
        justifyContent="center"
        height={40}>
        <LabelText
          textAlign="center"
          userSelect="auto"
          tabIndex={0}
          color="$color">
          Select a month
        </LabelText>
      </XStack>
    );
  }

  return (
    <XStack
      width="100%"
      alignItems="center"
      gap="$3"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$4"
        width="$5"
        flexShrink={1}
        {...swapOnClick(subtractOffset({ months: 1 }))}>
        <Button.Icon>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <YStack gap="$1" alignItems="center" flexBasis="50%">
        <LabelText
          animation="normal"
          onPress={() => setHeader("year")}
          userSelect="auto"
          tabIndex={0}
          size="$5"
          cursor="pointer"
          color="$color"
          hoverStyle={{
            color: "$accent10"
          }}>
          {year}
        </LabelText>
        <LabelText
          animation="normal"
          onPress={() => setHeader("month")}
          userSelect="auto"
          cursor="pointer"
          tabIndex={0}
          size="$8"
          color="$color"
          fontWeight="600"
          lineHeight="$1"
          hoverStyle={{
            color: "$accent10"
          }}>
          {month}
        </LabelText>
      </YStack>
      <Button
        variant="ghost"
        size="$4"
        width="$5"
        flexShrink={1}
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
    key: string;
    flexBasis?: "unset" | DimensionValue | undefined;
  }
>;

const ItemPicker = ({
  active,
  flexBasis,
  key,
  children,
  ...rest
}: ItemPickerProps) => {
  return (
    <View flexGrow={1} flexBasis={flexBasis}>
      <Button
        key={key}
        variant={active ? "primary" : "secondary"}
        paddingVertical="$3"
        {...rest}>
        <Button.Text>{children}</Button.Text>
      </Button>
    </View>
  );
};

const MonthPicker = ({
  onChange = (e, date) => {}
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
        gap="$2"
        animation="100ms"
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

export function YearPicker({
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
        animation="100ms"
        flexDirection="row"
        flexWrap="wrap"
        gap="$2"
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
    <Theme name={ColorThemeName.BASE}>
      <HeaderTypeProvider type={header} setHeader={setHeader}>
        <XStack justifyContent="center">
          <YStack alignItems="center" gap="$2.5" maxWidth={425}>
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
        {...props}>
        {children}
      </Input.TextBox.Value>
    );
  },
  { staticConfig: { componentName: "DatePickerValue" } }
);

const DatePickerProvider = ({
  children,
  onChange,
  onFocus,
  focused,
  ...props
}: PropsWithChildren<Partial<DatePickerContextProps>>) => {
  const [date, setDate] = useState<Date | null>(null);
  const selectedDates = useMemo(() => {
    if (!date) {
      return [];
    }

    date.setMonth(date.getMonth() - 1);
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
  context: DatePickerContext
});

const DatePickerControlImpl = Input.styleable<DatePickerExtraProps>(
  (
    { children, onChange, onInput, onFocus, onBlur, focused, ...props },
    forwardedRef
  ) => {
    const handleOpenChanged = useCallback(
      (open: boolean, via?: "hover" | "press") => {
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
        focused={focused}>
        <Popover
          keepChildrenMounted={true}
          open={!!focused}
          onOpenChange={handleOpenChanged}>
          <Input ref={forwardedRef} {...props} focused={focused}>
            {children}
          </Input>

          <DatePickerPopoverContent>
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
