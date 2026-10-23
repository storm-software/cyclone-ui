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

"use client";

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { Field } from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  getFormFontScale,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldLabelDefaults,
  useFieldOptions,
  useFieldVariant,
  useFormControl
} from "@cyclone-ui/helpers";
import { Clock } from "@cyclone-ui/icons";
import { Input, InputContext } from "@cyclone-ui/input";
import { Popover } from "@cyclone-ui/popover";
import { maskitoTimeOptionsGenerator } from "@maskito/kit";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Theme,
  useComposedRefs,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { PointerEvent, RefObject } from "react";
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
import { useWindowDimensions } from "react-native";

export type TimePickerChangeEventHandler = (event: CustomEvent<string>) => any;

export type TimePickerInputEventHandler = (event: CustomEvent<string>) => any;

export type TimePickerHourCycle = 12 | 24;

export interface TimePickerExtraProps {
  /**
   * Whether times are shown on a 12-hour clock with AM/PM, or a 24-hour clock.
   */
  hourCycle?: TimePickerHourCycle;

  /**
   * Time shown and selected in the clock popover, as a 24-hour `HH:mm` string.
   */
  selectedTime?: string | null;

  /**
   * Callback that is called when a time is selected in the clock popover, with
   * the 24-hour `HH:mm` value.
   */
  onChange?: TimePickerChangeEventHandler;

  /**
   * Callback that is called when the user provides input to the text field.
   */
  onInput?: TimePickerInputEventHandler;
}

/**
 * The text input's time format (and Maskito time mode) for an hour cycle.
 */
export const getTimeFormat = (hourCycle: TimePickerHourCycle = 12) =>
  hourCycle === 24 ? "HH:MM" : "HH:MM AA";

const createTimeMask = (hourCycle: TimePickerHourCycle) => ({
  ...maskitoTimeOptionsGenerator({ mode: getTimeFormat(hourCycle) }),
  // The picker steps the time on arrow and space keys itself (see
  // `handleKeyDown`). Maskito's meridiem stepping plugin would otherwise handle
  // and prevent the arrow keys first.
  plugins: []
});

export const TIME_MASK_12H = createTimeMask(12);
export const TIME_MASK_24H = createTimeMask(24);

/** A time of day, with `hours` from 0 to 23. */
interface Time {
  hours: number;
  minutes: number;
}

type TimePart = "hours" | "minutes" | "meridiem";

type ClockView = "hours" | "minutes";

const MIDNIGHT: Time = { hours: 0, minutes: 0 };

const pad = (value: number) => String(value).padStart(2, "0");

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

const toTime = (value: unknown): Time | null => {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime())
      ? null
      : { hours: value.getHours(), minutes: value.getMinutes() };
  }

  return typeof value === "string"
    ? (parse24HourTime(value) ?? parse12HourTime(value))
    : null;
};

const parseInputTime = (value: string, hourCycle: TimePickerHourCycle) =>
  hourCycle === 24 ? parse24HourTime(value) : parse12HourTime(value);

const toValue = ({ hours, minutes }: Time) => `${pad(hours)}:${pad(minutes)}`;

const toInputValue = (time: Time, hourCycle: TimePickerHourCycle) =>
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
const getTimePart = (selectionStart: number): TimePart => {
  if (selectionStart <= 2) {
    return "hours";
  }

  return selectionStart <= 5 ? "minutes" : "meridiem";
};

// Hours and minutes wrap without carrying over, like a native time input.
const stepTime = (
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

interface TimePickerClockProps {
  size?: FormControlSize;
  hourCycle: TimePickerHourCycle;
  time: Time | null;
  view: ClockView;
  onViewChange: (view: ClockView) => void;

  /**
   * Called with `final` false while the hand is dragged, and true once a value
   * is picked.
   */
  onChange: (time: Time, part: TimePart, final: boolean) => void;
}

/**
 * The hour and minute toggles, the meridiem toggle and the clock face shown in
 * the time picker's popover.
 */
const TimePickerClock = ({
  size = "md",
  hourCycle,
  time,
  view,
  onViewChange,
  onChange
}: TimePickerClockProps) => {
  const cellSize = getFormSizeToken(size);
  const cell = getSized(cellSize);
  const innerCellSize = getFormSizeToken(size, "compact");
  const innerCell = getSized(innerCellSize);
  const fontSize = 16 * getFormFontScale(size);
  const { width: viewportWidth } = useWindowDimensions();
  // As wide as the calendar: seven day cells plus the six gaps between them,
  // narrowed to fit inside the popover's bottom sheet padding on small screens.
  const diameter = Math.min(
    cell * 7 + getSpaced("md") * 6,
    viewportWidth - getSpaced("5xl") * 2
  );
  // Leaves room for the ticks around the edge.
  const radius = diameter / 2 - cell / 2 - getSpaced("2xl");
  const innerRadius = radius - cell / 2 - innerCell / 2 - getSpaced("md");
  // Absolute children are placed inside the face's 1px border.
  const center = diameter / 2 - 1;
  const base = time ?? MIDNIGHT;
  const pm = base.hours >= 12;
  const dragRef = useRef<number | null>(null);
  // The index of the label under the pointer, kept across views since the
  // pointer stays over the same spot.
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // 24-hour clocks put 1 to 12 on the outer ring and 00, 13 to 23 inside it.
  const getHours = (position: number, inner: boolean) =>
    hourCycle === 24
      ? inner
        ? position && position + 12
        : position || 12
      : position + (pm ? 12 : 0);

  const items = Array.from(
    { length: view === "hours" && hourCycle === 24 ? 24 : 12 },
    (_, i) => {
      const position = i % 12;
      const inner = i >= 12;
      const value =
        view === "minutes" ? position * 5 : getHours(position, inner);
      const itemRadius = inner ? innerRadius : radius;
      const itemAngle = (position * Math.PI) / 6;

      return {
        inner,
        value,
        label: pad(
          view === "hours" && hourCycle === 12 ? position || 12 : value
        ),
        // The label's center, relative to the face's center.
        x: itemRadius * Math.sin(itemAngle),
        y: -itemRadius * Math.cos(itemAngle),
        cell: inner ? innerCell : cell
      };
    }
  );

  const withValue = (value: number) =>
    view === "hours"
      ? { hours: value, minutes: base.minutes }
      : { hours: base.hours, minutes: value };

  // The pointer's position, relative to the face's center.
  const getPoint = (event: PointerEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();

    return {
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2
    };
  };

  const getItemIndexAt = ({ x, y }: { x: number; y: number }) =>
    items.findIndex(
      item => Math.hypot(x - item.x, y - item.y) <= item.cell / 2
    );

  // The clock position the hand points at, from 0 (12 o'clock) up to 12. It
  // falls between labels for minutes that are not a multiple of five.
  const position = view === "hours" ? base.hours % 12 : base.minutes / 5;
  const angle = (position * Math.PI) / 6;
  const onLabel = Number.isInteger(position);
  // Between labels, the hand reaches past them to a dot on the minute's tick,
  // 2px inside the edge.
  const handRadius = !onLabel
    ? center - 6
    : view === "hours" &&
        hourCycle === 24 &&
        (base.hours === 0 || base.hours > 12)
      ? innerRadius
      : radius;

  // Pick the label under the pointer, so it matches the hovered one, or else
  // the time at the pointer's angle (and, for 24-hour hours, its ring),
  // snapping to whole hours or minutes.
  const pick = (event: PointerEvent, final: boolean) => {
    const point = getPoint(event);
    const item = items[getItemIndexAt(point)];
    // Clockwise turns from 12 o'clock, from 0 up to 1.
    const turn = (Math.atan2(point.x, -point.y) / (2 * Math.PI) + 1) % 1;
    const next = item
      ? withValue(item.value)
      : withValue(
          view === "minutes"
            ? Math.round(turn * 60) % 60
            : getHours(
                Math.round(turn * 12) % 12,
                Math.hypot(point.x, point.y) < (radius + innerRadius) / 2
              )
        );

    // A drag only reports the values it moves through.
    if (final || next.hours !== time?.hours || next.minutes !== time.minutes) {
      onChange(next, view, final);
    }
  };

  const handlePointerDown = (event: PointerEvent) => {
    if (event.button !== 0) {
      return;
    }

    // Stops the drag from selecting text.
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    dragRef.current = event.pointerId;
    pick(event, false);
  };

  const handlePointerMove = (event: PointerEvent) => {
    setHoveredIndex(getItemIndexAt(getPoint(event)));

    if (dragRef.current === event.pointerId) {
      pick(event, false);
    }
  };

  const handlePointerUp = (event: PointerEvent) => {
    if (dragRef.current === event.pointerId) {
      dragRef.current = null;
      pick(event, true);
    }
  };

  return (
    <Theme name="base">
      <YStack width={diameter} alignSelf="center" alignItems="center" gap="6xl">
        <XStack
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          gap="2xl">
          <XStack alignItems="center" gap="xl">
            <Button
              variant={view === "hours" ? "primary" : "tertiary"}
              size={cellSize}
              aria-pressed={view === "hours"}
              onPress={() => onViewChange("hours")}>
              <Button.Text fontSize={fontSize}>
                {time
                  ? pad(hourCycle === 24 ? time.hours : time.hours % 12 || 12)
                  : "--"}
              </Button.Text>
            </Button>
            <BodyText fontSize={fontSize} color="subtle">
              :
            </BodyText>
            <Button
              variant={view === "minutes" ? "primary" : "tertiary"}
              size={cellSize}
              aria-pressed={view === "minutes"}
              onPress={() => onViewChange("minutes")}>
              <Button.Text fontSize={fontSize}>
                {time ? pad(time.minutes) : "--"}
              </Button.Text>
            </Button>
          </XStack>
          {hourCycle === 12 && (
            <XStack alignItems="center" gap="lg">
              {(["AM", "PM"] as const).map(meridiem => {
                const active = time !== null && pm === (meridiem === "PM");

                return (
                  <Button
                    key={meridiem}
                    variant="ghost"
                    size={cellSize}
                    paddingHorizontal="lg"
                    aria-pressed={active}
                    onPress={() =>
                      onChange(
                        {
                          hours:
                            (base.hours % 12) + (meridiem === "PM" ? 12 : 0),
                          minutes: base.minutes
                        },
                        "meridiem",
                        true
                      )
                    }>
                    <Button.Text
                      fontSize={fontSize}
                      color={
                        active
                          ? "primary"
                          : "subtlest group-hover/button:primary"
                      }>
                      {meridiem}
                    </Button.Text>
                  </Button>
                );
              })}
            </XStack>
          )}
        </XStack>

        <View
          role="group"
          aria-label={view === "hours" ? "Hours" : "Minutes"}
          position="relative"
          width={diameter}
          height={diameter}
          borderRadius={diameter / 2}
          borderWidth={1}
          borderColor="subtlest"
          cursor="pointer"
          style={{ touchAction: "none" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            dragRef.current = null;
          }}
          onPointerLeave={() => setHoveredIndex(-1)}>
          {/* Keyed by view, so the face fades in when switching views. */}
          <View
            key={view}
            position="absolute"
            left={0}
            top={0}
            width={diameter - 2}
            height={diameter - 2}
            transition="200ms"
            opacity="enter:0">
            {Array.from({ length: 60 }, (_, minute) => {
              const major = minute % 5 === 0;
              // The hours view only has the hour ticks.
              if (view === "hours" && !major) {
                return null;
              }

              const width = major ? 2 : 1;
              const length = (major ? 6 : 3) * getFormSizeScale(size);
              const tickAngle = (minute * Math.PI) / 30;
              // The tick's midpoint, leaving 2px between its outer end and the edge.
              const tickRadius = center - 2 - length / 2;

              return (
                <View
                  key={minute}
                  position="absolute"
                  width={width}
                  height={length}
                  left={center + tickRadius * Math.sin(tickAngle) - width / 2}
                  top={center - tickRadius * Math.cos(tickAngle) - length / 2}
                  rotate={`${minute * 6}deg`}
                  backgroundColor={major ? "subtle" : "outline"}
                />
              );
            })}
            {time && (
              <>
                {/* Centered on its midpoint, so it rotates without a transform origin. */}
                <View
                  position="absolute"
                  width={handRadius}
                  height={2}
                  left={
                    center + (handRadius / 2) * Math.sin(angle) - handRadius / 2
                  }
                  top={center - (handRadius / 2) * Math.cos(angle) - 1}
                  rotate={`${position * 30 - 90}deg`}
                  backgroundColor="primary"
                />
                {!onLabel && (
                  <View
                    position="absolute"
                    width={8}
                    height={8}
                    borderRadius={4}
                    left={center + handRadius * Math.sin(angle) - 4}
                    top={center - handRadius * Math.cos(angle) - 4}
                    backgroundColor="primary"
                  />
                )}
              </>
            )}
            <View
              position="absolute"
              width={6}
              height={6}
              borderRadius={3}
              left={center - 3}
              top={center - 3}
              backgroundColor="primary"
            />
            {items.map((item, index) => {
              const selected =
                time !== null &&
                item.value === (view === "hours" ? time.hours : time.minutes);

              return (
                <Button
                  // Keyed by view too, so labels never animate across the face.
                  key={`${view}-${item.label}`}
                  position="absolute"
                  left={center + item.x - item.cell / 2}
                  top={center + item.y - item.cell / 2}
                  variant={selected ? "primary" : "ghost"}
                  // The buttons take no pointer input, so their own `hover:`
                  // colors never apply. Only passed while hovered: even an
                  // `undefined` value replaces the variant's background.
                  {...(index === hoveredIndex && {
                    backgroundColor: selected
                      ? "primary-hovered"
                      : "elevated-hovered"
                  })}
                  size={item.inner ? innerCellSize : cellSize}
                  width={item.inner ? innerCellSize : cellSize}
                  circular={true}
                  noPadding={true}
                  // The face handles pointer input (so the hand can be dragged);
                  // the buttons stay for keyboard users.
                  pointerEvents="none"
                  aria-pressed={selected}
                  onPress={() => onChange(withValue(item.value), view, true)}>
                  <Button.Text
                    fontSize={item.inner ? fontSize * 0.875 : fontSize}>
                    {item.label}
                  </Button.Text>
                </Button>
              );
            })}
          </View>
        </View>
      </YStack>
    </Theme>
  );
};

const TimePickerTextBox = createStyledHOC(
  Input.TextBox,
  ({ children, ...props }, forwardedRef) => {
    return (
      <Input.TextBox ref={forwardedRef} {...props}>
        {children}
      </Input.TextBox>
    );
  },
  { displayName: "TimePickerValue" }
);

/**
 * The text box state a `TimePicker` connected to a form control (such as
 * `Field`) shares with its `TextBox.Value`.
 */
interface TimePickerFieldState {
  value: string;
  inputRef: RefObject<HTMLInputElement | null>;
  onKeyDown: (event: any) => void;
}

const TimePickerFieldContext = createContext<TimePickerFieldState | undefined>(
  undefined
);

const TimePickerTextBoxValue = createStyledHOC(
  Input.TextBox.Value,
  ({ children, value: valueProp, onKeyDown, ...props }, forwardedRef) => {
    const { size } = InputContext.useStyledContext();
    const fieldState = use(TimePickerFieldContext);
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
        nativePaddingInline={16 * getFormSizeScale(size)}
        {...props}>
        {children}
      </Input.TextBox.Value>
    );
  },
  { displayName: "TimePickerValue" }
);

type TimePickerTriggerProps = GetProps<typeof Field.Icon>;

const TimePickerTrigger = createStyledHOC(
  Field.Icon,
  (props: TimePickerTriggerProps, forwardedRef) => {
    const { size } = InputContext.useStyledContext();

    return (
      <Field.Icon
        ref={forwardedRef}
        {...props}
        controlSize={size}
        pointerEvents="none"
      />
    );
  },
  { displayName: "TimePickerTrigger" }
);

const TimePickerPopoverContent = styled(Popover.Content, {
  displayName: "TimePickerPopover",

  flexBasis: "auto",
  flexGrow: 0,
  flexShrink: 0
});

// Time pickers float their field label by default.
const FLOATING_LABEL = { variant: "floating" } as const;

// Passed to the inner `Input` so it does not fall back to the form control's
// handlers: the picker drives the field's value and focus itself.
const noop = () => {};

const TimePickerControlImpl = createStyledHOC(
  Input,
  (
    props: Omit<GetProps<typeof Input>, keyof TimePickerExtraProps> &
      TimePickerExtraProps,
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
      onInput: onInputProp,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      name = formControl?.name,
      size = formControl?.size,
      disabled = formControl?.disabled,
      focused = formControl?.focused,
      variant = formControl ? fieldVariant : "outlined",
      hourCycle = 12,
      selectedTime: selectedTimeProp,
      ...rest
    } = props;

    // The field formats, parses and masks its value for the hour cycle.
    const fieldOptions = useMemo(
      () => ({
        overrides: {
          format: (value: any) => format(value, hourCycle),
          parse,
          mask: hourCycle === 24 ? TIME_MASK_24H : TIME_MASK_12H,
          // The picker has no clear button.
          clearable: false
        }
      }),
      [hourCycle]
    );
    useFieldOptions(fieldOptions);

    const formattedValue = formControl?.formattedValue ?? "";
    const formOnChange = formControl?.onChange;
    const formOnBlur = formControl?.onBlur;
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState(formattedValue);
    const [view, setView] = useState<ClockView>("hours");
    const selectionRef = useRef<{ end: number; start: number } | null>(null);

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

    const handleInput = useCallback(
      (event: CustomEvent<string>) => {
        const value = event.detail;
        setInputValue(value);

        if (value === "" || parseInputTime(value, hourCycle)) {
          formOnChange?.(value);
        }
      },
      [formOnChange, hourCycle]
    );

    const handleBlur = useCallback(() => {
      setInputValue(formattedValue);
      formOnBlur?.();
    }, [formOnBlur, formattedValue]);

    const handleKeyDown = useCallback(
      (event: any) => {
        if (event.defaultPrevented) {
          return;
        }

        const input = event.currentTarget as HTMLInputElement;
        const part = getTimePart(input.selectionStart ?? 0);
        if (
          event.key !== "ArrowUp" &&
          event.key !== "ArrowDown" &&
          // Space swaps the meridiem.
          !(event.key === " " && part === "meridiem")
        ) {
          return;
        }

        const time = parseInputTime(input.value, hourCycle);
        if (!time) {
          return;
        }

        event.preventDefault();
        selectionRef.current = {
          start: input.selectionStart ?? 0,
          end: input.selectionEnd ?? 0
        };

        const nextTime = stepTime(
          time,
          part,
          event.key === "ArrowDown" ? -1 : 1,
          hourCycle
        );
        setInputValue(toInputValue(nextTime, hourCycle));
        formOnChange?.(toValue(nextTime));
      },
      [formOnChange, hourCycle]
    );

    const fieldState = useMemo(
      () =>
        formControl
          ? { value: inputValue, inputRef, onKeyDown: handleKeyDown }
          : undefined,
      [formControl, handleKeyDown, inputValue]
    );

    const onInput = onInputProp ?? (formControl ? handleInput : undefined);
    const onFocus = onFocusProp ?? formControl?.onFocus;
    const onBlur = onBlurProp ?? (formControl ? handleBlur : undefined);
    const selectedTime =
      selectedTimeProp === undefined && formControl
        ? parseInputTime(inputValue, hourCycle)
        : toTime(selectedTimeProp);

    const handleClockChange = useCallback(
      (time: Time, part: TimePart, final: boolean) => {
        if (final && part === "hours") {
          setView("minutes");
        }

        if (onChangeProp) {
          onChangeProp(new CustomEvent("change", { detail: toValue(time) }));
        } else if (formControl) {
          setInputValue(toInputValue(time, hourCycle));
          formOnChange?.(toValue(time));

          // Picking the minutes completes the time.
          if (final && part === "minutes") {
            formOnBlur?.();
          }
        }
      },
      [formControl, formOnBlur, formOnChange, hourCycle, onChangeProp]
    );

    const handleOpenChanged = useCallback(
      (open: boolean) => {
        if (open) {
          setView("hours");
          onFocus?.();
        } else {
          onBlur?.();
        }
      },
      [onFocus, onBlur]
    );

    return (
      <TimePickerFieldContext value={fieldState}>
        <Popover
          keepChildrenMounted={true}
          open={!!focused}
          onOpenChange={handleOpenChanged}
          placement="bottom"
          // Floating UI applies the offset on whichever side the popover flips to.
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
                    <TimePickerTextBox>
                      <TimePickerTextBoxValue />
                    </TimePickerTextBox>
                    <Input.Separator />
                    <TimePickerTrigger>
                      <Clock />
                    </TimePickerTrigger>
                  </>
                ))}
            </Input>
          </Popover.Trigger>

          <TimePickerPopoverContent disableFocusScope={true}>
            <TimePickerClock
              size={size}
              hourCycle={hourCycle}
              time={selectedTime}
              view={view}
              onViewChange={setView}
              onChange={handleClockChange}
            />
          </TimePickerPopoverContent>
        </Popover>
      </TimePickerFieldContext>
    );
  },
  { displayName: "TimePicker" }
);

export const TimePicker = withStaticProperties(TimePickerControlImpl, {
  TextBox: withStaticProperties(TimePickerTextBox, {
    Value: TimePickerTextBoxValue
  }),
  Separator: Input.Separator,
  Trigger: withStaticProperties(TimePickerTrigger, {
    Icon: Button.Icon,
    Text: Button.Text
  })
});
