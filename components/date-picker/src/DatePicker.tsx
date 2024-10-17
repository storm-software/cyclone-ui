import { Button } from "@cyclone-ui/button";
import { ColorRole } from "@cyclone-ui/colors";
import { useFieldActions, useFieldStore } from "@cyclone-ui/form";
import { Input } from "@cyclone-ui/input";
import { ThemedIcon } from "@cyclone-ui/themeable-icon";
import { format } from "@formkit/tempo";
import type { DatePickerProviderProps, DPDay } from "@rehookify/datepicker";
import {
  DatePickerProvider as RehookifyDatePickerProvider,
  useDatePickerContext
} from "@rehookify/datepicker";
import { Adapt } from "@tamagui/adapt";
import { AnimatePresence } from "@tamagui/animate-presence";
import { isWeb } from "@tamagui/constants";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import { createStyledContext, styled, View } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { Calendar, ChevronLeft, ChevronRight, X } from "@tamagui/lucide-icons";
import { Popover } from "@tamagui/popover";
import { XStack, YStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import { useCallback, useEffect, useMemo, useState } from "react";

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

// const DatePickerInput = styled(Input, {
//   name: DATE_PICKER_NAME,
//   context: DatePickerContext,

//   placeholder: DEFAULT_DATE_FORMAT
// });

/** rehookify internally return `onClick` and that's incompatible with native */
export function swapOnClick<D>(d: D) {
  //@ts-ignore
  d.onPress = d.onClick;
  return d;
}

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
  }, [years, sumYears, currentYearsSum]);

  useEffect(() => {
    if (listenTo === "month") {
      if (calendar && currentMonth !== calendar.month) {
        setCurrentMonth(calendar.month);
      }
    }
  }, [calendarListenTo, currentMonth]);

  useEffect(() => {
    if (listenTo === "year") {
      if (calendar?.year && currentYear !== calendar?.year) {
        setCurrentYear(calendar?.year);
      }
    }
  }, [calendarListenTo, currentYear]);

  const prevNextAnimation = useCallback(() => {
    if (listenTo === "years") {
      if (currentYearsSum === null) return { enterStyle: { opacity: 0 } };

      return {
        enterStyle: { opacity: 0, x: sumYears() < currentYearsSum ? -15 : 15 },
        exitStyle: { opacity: 0, x: sumYears() < currentYearsSum ? -15 : 15 }
      };
    }

    if (listenTo === "month") {
      if (currentMonth === null) return { enterStyle: { opacity: 0 } };
      const newDate = new Date(`${calendarListenTo} 1, ${calendar?.year}`);
      const currentDate = new Date(`${currentMonth} 1, ${calendar?.year}`);

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
        enterStyle: { opacity: 0, x: newDate < currentDate ? -15 : 15 },
        exitStyle: { opacity: 0, x: newDate < currentDate ? -15 : 15 }
      };
    }

    if (listenTo === "year") {
      if (currentYear === null) return { enterStyle: { opacity: 0 } };
      const newDate = new Date(`${calendar?.month} 1, ${calendar?.year}`);
      const currentDate = new Date(`${calendar?.month} 1, ${currentYear}`);

      return {
        enterStyle: { opacity: 0, x: newDate < currentDate ? -15 : 15 },
        exitStyle: { opacity: 0, x: newDate < currentDate ? -15 : 15 }
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
        animation="medium"
        justifyContent="center"
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
                  <Button
                    key={day.$date.toString()}
                    variant={day.selected ? undefined : "ghost"}
                    circular={true}
                    outlined={true}
                    paddingVertical="$3"
                    width={45}
                    {...swapOnClick(dayButton(day))}
                    theme={day.selected ? "accent" : "base"}
                    disabled={!day.inCurrentMonth}>
                    <Button.Text
                      color={
                        day.selected
                          ? "$base12"
                          : day.inCurrentMonth
                            ? "$base11"
                            : "$base6"
                      }>
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

export function YearRangeSlider() {
  const {
    data: { years },
    propGetters: { previousYearsButton, nextYearsButton }
  } = useDatePickerContext();

  return (
    <View
      flexDirection="row"
      width="100%"
      alignItems="center"
      justifyContent="space-between">
      <Button variant="ghost" size="$4" {...swapOnClick(previousYearsButton())}>
        <Button.Icon scaleIcon={1.5}>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <View y={2} flexDirection="column" alignItems="center">
        <SizableText size="$5">
          {`${years[0]?.year} - ${years[years.length - 1]?.year}`}
        </SizableText>
      </View>
      <Button variant="ghost" size="$4" {...swapOnClick(nextYearsButton())}>
        <Button.Icon scaleIcon={1.5}>
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
  const { type: header, setHeader } = useHeaderType();
  const year = calendars[0]?.year;

  return (
    <View
      flexDirection="row"
      width="100%"
      height={50}
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$4"
        {...swapOnClick(subtractOffset({ months: 12 }))}>
        <Button.Icon scaleIcon={1.5}>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <SizableText
        onPress={() => setHeader("year")}
        selectable={true}
        tabIndex={0}
        size="$6"
        cursor="pointer"
        color="$color11"
        hoverStyle={{
          color: "$color12"
        }}>
        {year}
      </SizableText>
      <Button
        variant="ghost"
        size="$4"
        {...swapOnClick(subtractOffset({ months: -12 }))}>
        <Button.Icon scaleIcon={1.5}>
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
      <SizableText
        width="100%"
        textAlign="center"
        userSelect="auto"
        tabIndex={0}
        size="$8">
        Select a month
      </SizableText>
    );
  }

  return (
    <View
      flexDirection="row"
      width="100%"
      alignItems="center"
      justifyContent="space-between">
      <Button
        variant="ghost"
        size="$4"
        {...swapOnClick(subtractOffset({ months: 1 }))}>
        <Button.Icon scaleIcon={1.5}>
          <ChevronLeft />
        </Button.Icon>
      </Button>
      <YStack gap="$1" alignItems="center">
        <SizableText
          onPress={() => setHeader("year")}
          userSelect="auto"
          tabIndex={0}
          size="$5"
          cursor="pointer"
          color="$color11"
          hoverStyle={{
            color: "$color12"
          }}>
          {year}
        </SizableText>
        <SizableText
          onPress={() => setHeader("month")}
          userSelect="auto"
          cursor="pointer"
          tabIndex={0}
          size="$8"
          color="$base12"
          fontWeight="600"
          lineHeight="$1"
          hoverStyle={{
            color: "$base10"
          }}>
          {month}
        </SizableText>
      </YStack>
      <Button
        variant="ghost"
        size="$4"
        {...swapOnClick(subtractOffset({ months: -1 }))}>
        <Button.Icon scaleIcon={1.5}>
          <ChevronRight />
        </Button.Icon>
      </Button>
    </View>
  );
};

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
        flexDirection="row"
        flexWrap="wrap"
        gap="$2"
        animation="100ms"
        flexGrow={0}
        $platform-native={{
          justifyContent: "space-between",
          width: "100%"
        }}
        $gtXs={{ width: 285 }}>
        {months.map(month => (
          <Button
            variant="ghost"
            themeInverse={month.active}
            borderRadius="$true"
            flexGrow={1}
            flexBasis="30%"
            backgroundColor={month.active ? "$background" : "transparent"}
            key={month.$date.toString()}
            {...swapOnClick(
              monthButton(month, {
                onClick: onChange as any
              })
            )}>
            <Button.Text color={month.active ? "$accent10" : "$base11"}>
              {month.month}
            </Button.Text>
          </Button>
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
        animation="quick"
        flexDirection="row"
        flexWrap="wrap"
        gap="$2"
        width="100%"
        maxWidth={280}
        justifyContent="space-between">
        {years.map(year => (
          <Button
            variant="ghost"
            themeInverse={year.year === Number(selectedYear)}
            borderRadius="$true"
            flexBasis="30%"
            flexGrow={1}
            backgroundColor={
              year.year === Number(selectedYear) ? "$background" : "transparent"
            }
            key={year.$date.toString()}
            padding={0}
            {...swapOnClick(
              yearButton(year, {
                onClick: onChange as any
              })
            )}>
            <Button.Text
              color={
                year.year === Number(selectedYear) ? "$accent10" : "$base11"
              }>
              {year.year}
            </Button.Text>
          </Button>
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
        <YStack alignItems="center" gap="$2.5" maxWidth={325}>
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

// export const DatePickerFrame = Input.styleable((props, ref) => {
//   const [selectedDates] = useState<Date[]>([]);
//   const [, setOpen] = useState(false);
//   const themeName = useThemeName();

//   useEffect(() => {
//     setOpen(false);
//   }, [selectedDates]);

//   return (
//     <View $platform-native={{ minWidth: "100%" }}>
//       <Input ref={ref} theme={themeName} {...props}>
//         {props.children}
//       </Input>
//     </View>
//   );
// });

export const DatePickerControl = Input.styleable((props, ref) => {
  const { size, ...rest } = props;

  const store = useFieldStore<Date>();
  const { focus } = useFieldActions();

  const value = store.get.value();
  const reset = store.reset.value();

  return (
    <Input
      value={useMemo(
        () => (value ? format(value, DEFAULT_DATE_FORMAT) : ""),
        [value]
      )}
      ref={ref}
      placeholder={DEFAULT_DATE_FORMAT}
      {...rest}>
      {value ? (
        <Input.Icon onPress={reset}>
          <X />
        </Input.Icon>
      ) : (
        <Input.Icon onPress={focus}>
          <Calendar />
        </Input.Icon>
      )}
    </Input>
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

// const DatePickerPopoverArrow = styled(DatePickerPopoverContent.Arrow, {
//   name: DATE_PICKER_NAME,
//   context: DatePickerContext,

//   borderWidth: 1,
//       borderColor: "$borderColor"
// });

// export const DatePickerPopover = withStaticProperties(DatePickerImpl, {
//   Trigger,
//   Content: withStaticProperties(DatePickerContent, {
//     Arrow: styled(Popover.Arrow, {
//       borderWidth: 1,
//       borderColor: "$borderColor"
//     })
//   })
// });

const DatePickerControlImpl = DatePickerControl.styleable(
  ({ children, ...props }, forwardedRef) => {
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

    return (
      <DatePickerProvider
        config={{
          selectedDates: value ? [value] : [],
          onDatesChange: dates => change(dates.length > 0 ? dates[0] : null),
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

          <Popover.Trigger asChild={true}>
            <DatePickerControl ref={forwardedRef} {...props}>
              {children}
            </DatePickerControl>
          </Popover.Trigger>
          <DatePickerPopoverContent>
            <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
            <DatePickerPopoverBody />
          </DatePickerPopoverContent>
        </Popover>
      </DatePickerProvider>
    );
  }
);

export const DatePicker = withStaticProperties(DatePickerControlImpl, {
  Icon: ThemedIcon
});
