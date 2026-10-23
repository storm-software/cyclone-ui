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

import { Button } from "@cyclone-ui/button";
import { Calendar } from "@cyclone-ui/calendar";
import { Field } from "@cyclone-ui/field";
import {
  getFormSizeScale,
  getSpaced,
  useFieldLabelDefaults,
  useFieldOptions,
  useFieldVariant,
  useFormControl
} from "@cyclone-ui/helpers";
import { CalendarDots } from "@cyclone-ui/icons";
import type { InputContextProps } from "@cyclone-ui/input";
import { Input } from "@cyclone-ui/input";
import { Popover } from "@cyclone-ui/popover";
import type { MaskitoOptions, MaskitoPostprocessor } from "@maskito/core";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { formatDate } from "@stryke/date/format";
import type { GetProps } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  useComposedRefs,
  withStaticProperties
} from "@tamagui/core";
import type { RefObject } from "react";
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
    separator: "/",
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

const parseInputDate = (value: string, separator: DateSeparator = "/") => {
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
      separator = "/",
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
        <DatePickerContext.Provider
          {...rest}
          name={name}
          size={size}
          disabled={disabled}
          onChange={onChange}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
          focused={focused}
          mode={mode}
          separator={separator}
          variant={variant}>
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
              <Calendar
                mode={mode}
                size={size}
                selectedDate={selectedDate}
                selectedDates={selectedDates}
                onChange={onChange}
                onDatesChange={onDatesChange}
              />
            </DatePickerPopoverContent>
          </Popover>
        </DatePickerContext.Provider>
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
