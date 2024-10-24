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
import { ColorRole } from "@cyclone-ui/colors";
import { useFieldActions, useFieldStore } from "@cyclone-ui/form-state";
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
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import { createStyledContext, styled, useThemeName, View } from "@tamagui/core";
import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";
import { Popover } from "@tamagui/popover";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { DimensionValue } from "react-native";

export const DATE_PICKER_NAME = "DatePicker";

const defaultContextValues = {
  size: "$true",
  scaleIcon: 1.3,
  color: undefined,
  required: false,
  disabled: false,
  theme: `${ColorRole.BASE}_DatePicker`
} as const;

export const DatePickerContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  required: boolean;
  disabled: boolean;
  theme: string;
}>(defaultContextValues);

export const defaultDatePickerGroupStyles = {
  size: "$true",
  fontFamily: "$body",
  color: "$color",
  backgroundColor: "$background",
  borderRadius: "$radius",
  borderWidth: 1,
  borderColor: "$borderColor",
  outlineWidth: 0,
  outlineColor: "transparent",
  outlineStyle: "none",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 2,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  }
} as const;

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
    sumYears,
    listenTo,
    currentYearsSum,
    currentMonth,
    calendarListenTo,
    calendar
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
        animation="slow"
        justifyContent="center"
        gap="$0.5"
        {...prevNextAnimation()}>
        <XStack gap="$1">
          {weekDays.map(day => (
            <SizableText key={day} textAlign="center" width={45} size="$4">
              {day}
            </SizableText>
          ))}
        </XStack>
        <YStack gap="$1" flexWrap="wrap">
          {subDays.map((days, i) => {
            return (
              <XStack
                key={days[0]?.$date.toString() ?? i}
                gap="$1"
                alignItems="center">
                {days.map(day => (
                  <View
                    width={45}
                    justifyContent="center"
                    alignItems="center"
                    padding="$0.5">
                    <Button
                      key={day.$date.toString()}
                      variant={day.selected ? undefined : "ghost"}
                      circular={true}
                      outlined={true}
                      width={40}
                      paddingVertical="$2.5"
                      {...swapOnClick(dayButton(day))}
                      theme={day.selected ? "accent" : theme}
                      disabled={!day.inCurrentMonth}>
                      <Button.Text
                        color={day.inCurrentMonth ? "$fg" : "$disabled"}>
                        {day.day}
                      </Button.Text>
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
        <Button.Icon scaleIcon={1.5} color="$fg">
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
        <Button.Icon scaleIcon={1.5} color="$fg">
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
        <Button.Icon scaleIcon={1.5} color="$fg">
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
        <Button.Icon scaleIcon={1.5} color="$fg">
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
        <Button.Icon scaleIcon={1.5} color="$fg">
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <YStack gap="$1" alignItems="center">
        <SizableText
          animation="slow"
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
        </SizableText>
        <SizableText
          animation="slow"
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
        </SizableText>
      </YStack>
      <Button
        variant="ghost"
        size="$4"
        {...swapOnClick(subtractOffset({ months: -1 }))}>
        <Button.Icon scaleIcon={1.5} color="$fg">
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
        variant={active ? undefined : "ghost"}
        paddingVertical="$3"
        key={key}
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

export const DatePickerControl = Input.styleable((props, ref) => {
  const store = useFieldStore<Date>();
  const { focus, change } = useFieldActions();

  const value = store.get.value();
  const reset = store.reset.value();

  return (
    <Popover.Trigger asChild={true}>
      <Input
        ref={ref}
        placeholder={DEFAULT_DATE_FORMAT}
        {...props}
        onChange={change}>
        {/* value ? (
          <Input.Icon onPress={reset}>
            <X />
          </Input.Icon>
        ) : (
          <Input.Icon onPress={focus}>
            <Calendar />
          </Input.Icon>
        ) */}
      </Input>
    </Popover.Trigger>
  );
});

const DatePickerProvider =
  RehookifyDatePickerProvider as React.ComponentType<DatePickerProviderProps>;

export const { Provider: HeaderTypeProvider, useStyledContext: useHeaderType } =
  createStyledContext({
    type: "day",
    setHeader: (_: "day" | "month" | "year") => {}
  });

const DatePickerPopoverContent = styled(Popover.Content, {
  name: DATE_PICKER_NAME,
  context: DatePickerContext,

  justifyContent: "center",

  animation: [
    "100ms",
    {
      opacity: {
        overshootClamping: true
      }
    }
  ],
  variants: {
    unstyled: {
      false: {
        padding: 12,
        borderWidth: 1,
        borderColor: "$borderColor",
        enterStyle: { y: -10, opacity: 0 },
        exitStyle: { y: -10, opacity: 0 },
        elevate: true
      }
    }
  } as const,
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

const DatePickerGroup = ({ children, ...props }: PropsWithChildren) => {
  const store = useFieldStore<Date>();
  const focused = store.get.focused();
  const value = store.get.value();

  const { focus, blur, change } = useFieldActions();
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        focus();
      } else {
        blur();
      }
    },
    [focus, blur]
  );

  const handleDatesChange = useCallback(
    (dates: Date[]) => {
      blur();

      // const next = dates.length > 0 ? dates[0] : null;
      // if (next) {
      //   next.setMonth(next.getMonth() - 1);
      // }

      change(dates.length > 0 ? dates[0] : null);
    },
    [change, blur]
  );

  return (
    <DatePickerProvider
      config={{
        selectedDates: value ? [value] : [],
        onDatesChange: handleDatesChange,
        calendar: {
          startDay: 1
        }
      }}>
      <Popover
        keepChildrenMounted={true}
        size="$5"
        allowFlip={true}
        open={focused}
        onOpenChange={handleOpenChange}>
        {children}
      </Popover>
    </DatePickerProvider>
  );
};

export const DatePicker = DatePickerControl.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DatePickerGroup>
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
          <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
          <DatePickerPopoverBody />
        </DatePickerPopoverContent>
      </DatePickerGroup>
    );
  }
);

// export const DatePicker = withStaticProperties(DatePickerControlImpl, {
//   Icon: ThemedIcon
// });
