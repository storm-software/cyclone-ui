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
import { Input } from "@cyclone-ui/input";
import { LabelText } from "@cyclone-ui/label-text";
import type {
  DatePickerProviderProps,
  DPDay,
  DPPropGetter
} from "@rehookify/datepicker";
import {
  DatePickerProvider as RehookifyDatePickerProvider,
  useDatePickerContext
} from "@rehookify/datepicker";
import { Adapt } from "@tamagui/adapt";
import { AnimatePresence } from "@tamagui/animate-presence";
import type { FontSizeTokens } from "@tamagui/core";
import {
  createStyledContext,
  styled,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";
import { Popover } from "@tamagui/popover";
import { XStack, YStack } from "@tamagui/stacks";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { DimensionValue } from "react-native";

export type DatePickerContextProps = {
  size: FontSizeTokens;
  required: boolean;
  disabled: boolean;
};

export const DatePickerContext = createStyledContext<DatePickerContextProps>({
  size: "$true",
  required: false,
  disabled: false
});

export const DEFAULT_DATE_FORMAT = "MM/DD/YYYY";

/** Rehookify internally return `onClick` and that's incompatible with native */
const swapOnClick = <D extends any>(d: D) => {
  // @ts-ignore
  d.onPress = d.onClick;
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
      if (currentYearsSum === null) return { enterStyle: { opacity: 0 } };

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
        new Date(`${calendarListenTo} 1, ${calendar?.year}`) <
        new Date(`${currentMonth} 1, ${calendar?.year}`);

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
        new Date(`${calendar?.month} 1, ${calendar?.year}`) <
        new Date(`${calendar?.month} 1, ${currentYear}`);

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
  const theme = useThemeName();

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
        gap="$0.5"
        {...prevNextAnimation()}>
        <XStack gap="$1">
          {weekDays.map(day => (
            <LabelText key={day} textAlign="center" width={45} size="$4">
              {day}
            </LabelText>
          ))}
        </XStack>
        <YStack gap="$1" flexWrap="wrap">
          {subDays.map((days, i) => {
            return (
              <XStack
                key={days[0]?.$date.toString() ?? i}
                gap="$0.5"
                alignItems="center">
                {days.map(day => (
                  <View
                    key={day.$date.toString()}
                    width={45}
                    justifyContent="center"
                    alignItems="center">
                    <Button
                      variant={
                        !day.inCurrentMonth
                          ? "ghost"
                          : day.selected
                            ? "primary"
                            : "secondary"
                      }
                      padding="$1"
                      width={45}
                      borderRadius={0}
                      {...swapOnClick(dayButton(day))}
                      theme={day.selected ? "accent" : theme}
                      disabled={!day.inCurrentMonth}>
                      <Button.Text>{day.day}</Button.Text>
                    </Button>
                  </View>
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
      width="100%"
      height={40}
      alignItems="center"
      justifyContent="space-between">
      <Button variant="ghost" size="$4" {...swapOnClick(previousYearsButton())}>
        <Button.Icon>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <View y={2} flexDirection="column" alignItems="center">
        <LabelText
          color="$fg"
          textAlign="center"
          userSelect="auto"
          tabIndex={0}>
          {`${years[0]?.year} - ${years[years.length - 1]?.year}`}
        </LabelText>
      </View>
      <Button variant="ghost" size="$4" {...swapOnClick(nextYearsButton())}>
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
      width="100%"
      height={40}
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$4"
        {...swapOnClick(subtractOffset({ months: 12 }))}>
        <Button.Icon>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <LabelText
        onPress={() => setHeader("year")}
        selectable={true}
        tabIndex={0}
        size="$6"
        cursor="pointer"
        color="$fg"
        hoverStyle={{
          color: "$accent10"
        }}>
        {year}
      </LabelText>
      <Button
        variant="ghost"
        size="$4"
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
          color="$fg">
          Select a month
        </LabelText>
      </XStack>
    );
  }

  return (
    <XStack width="100%" alignItems="center" justifyContent="space-between">
      <Button
        variant="ghost"
        size="$4"
        {...swapOnClick(subtractOffset({ months: 1 }))}>
        <Button.Icon>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <YStack gap="$1" alignItems="center">
        <LabelText
          animation="normal"
          onPress={() => setHeader("year")}
          userSelect="auto"
          tabIndex={0}
          size="$5"
          cursor="pointer"
          color="$fg"
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
          color="$fg"
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

export function ItemPicker({
  active,
  flexBasis,
  key,
  children,
  ...rest
}: ItemPickerProps) {
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
}

export function MonthPicker({
  onChange = (e, date) => {}
}: {
  onChange?: (e: MouseEvent, date: Date) => void;
}) {
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
}

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
  );
};

const DatePickerControl = Input.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Popover.Trigger asChild={true}>
        <Input ref={forwardedRef} {...props}>
          {children}
        </Input>
      </Popover.Trigger>
    );
  },
  { staticConfig: { componentName: "DatePickerValue" } }
);

const DatePickerControlValue = Input.Value.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Input.Value
        ref={forwardedRef}
        placeholder={DEFAULT_DATE_FORMAT}
        {...props}>
        {children}
      </Input.Value>
    );
  },
  { staticConfig: { componentName: "DatePickerValue" } }
);

const DatePickerProvider =
  RehookifyDatePickerProvider as React.ComponentType<DatePickerProviderProps>;

const { Provider: HeaderTypeProvider, useStyledContext: useHeaderType } =
  createStyledContext({
    type: "day",
    setHeader: (_: "day" | "month" | "year") => {}
  });

const DatePickerPopoverContent = styled(Popover.Content, {
  name: "DatePickerPopover",
  context: DatePickerContext,

  justifyContent: "center",
  backgroundColor: "$base3",
  padding: 12,
  borderWidth: 1,
  borderColor: "$borderColor",
  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },
  elevate: true,

  animation: [
    "100ms",
    {
      opacity: {
        overshootClamping: true
      }
    }
  ]
});

const DatePickerPopoverArrow = styled(Popover.Arrow, {
  name: "DatePickerPopover",
  context: DatePickerContext,

  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor"
});

const DatePickerControlImpl = DatePickerControl.styleable<{
  onChange: (date?: Date | null) => any;
  onOpenChange: (opened: boolean) => any;
  open: boolean;
  date?: Date | null;
}>(
  (
    { children, onChange, onOpenChange, open, date, ...props },
    forwardedRef
  ) => {
    const handleDatesChange = useCallback(
      (dates: Date[]) => {
        onChange(Array.isArray(dates) && dates.length > 0 ? dates[0] : null);
      },
      [onChange]
    );

    const selectedDates = useMemo(() => {
      if (!date) {
        return [];
      }

      date.setMonth(date.getMonth() - 1);
      return [date];
    }, [date]);

    return (
      <DatePickerProvider
        config={{
          selectedDates,
          onDatesChange: handleDatesChange,
          calendar: {
            startDay: 1
          }
        }}>
        <Popover
          keepChildrenMounted={true}
          size="$5"
          allowFlip={true}
          open={open}
          onOpenChange={onOpenChange}>
          <Adapt when={"sm" as any} platform="touch">
            <Popover.Sheet
              modal={true}
              dismissOnSnapToBottom={true}
              snapPointsMode="fit">
              <Popover.Sheet.Frame padding="$4">
                <Adapt.Contents />
              </Popover.Sheet.Frame>
              <Popover.Sheet.Overlay
                animation="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Popover.Sheet>
          </Adapt>

          <DatePickerControl ref={forwardedRef} {...props}>
            {children}
          </DatePickerControl>

          <DatePickerPopoverContent>
            <DatePickerPopoverArrow />
            <DatePickerPopoverBody />
          </DatePickerPopoverContent>
        </Popover>
      </DatePickerProvider>
    );
  },
  { staticConfig: { componentName: "DatePicker" } }
);

export const DatePicker = withStaticProperties(DatePickerControlImpl, {
  Value: DatePickerControlValue
});
