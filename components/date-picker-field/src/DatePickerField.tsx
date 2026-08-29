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

import { DatePicker, DEFAULT_DATE_FORMAT } from "@cyclone-ui/date-picker";
import { Field } from "@cyclone-ui/field";
import { getSized } from "@cyclone-ui/helpers";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import type { MaskitoPostprocessor } from "@maskito/core";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { formatDate } from "@stryke/date/format";
import { useComposedRefs, withStaticProperties } from "@tamagui/core";
import { Calendar } from "@tamagui/lucide-icons-2";
import type { RefObject } from "react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

const toDate = (value: unknown) => {
  if (value == null || value === "") {
    return null;
  }

  const date =
    value instanceof Date ? value : new Date(value as string | number);

  return Number.isNaN(date.getTime()) ? null : date;
};

const parseInputDate = (value: string) => {
  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(value);
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

const rejectInvalidDate: MaskitoPostprocessor = (
  elementState,
  initialElementState
) =>
  elementState.value.length === DEFAULT_DATE_FORMAT.length &&
  !parseInputDate(elementState.value)
    ? initialElementState
    : elementState;

const DATE_MASK_OPTIONS = maskitoDateOptionsGenerator({
  mode: "mm/dd/yyyy",
  separator: "."
});

export const DATE_MASK = {
  ...DATE_MASK_OPTIONS,
  // Maskito's final date postprocessor normalizes impossible dates (for
  // example, 04.31 to 05.01). This field must reject them instead.
  postprocessors: [DATE_MASK_OPTIONS.postprocessors[0], rejectInvalidDate]
};

export const format = (value: any) => {
  const date = toDate(value);
  if (!date) {
    return "";
  }

  return formatDate(date, DEFAULT_DATE_FORMAT);
};

export const parse = (value: any) => {
  if (typeof value === "string" && /^[\d.]*$/.test(value)) {
    return parseInputDate(value);
  }

  return toDate(value);
};

const DatePickerFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const handleFormat = useCallback(format, []);
  const handleParse = useCallback(parse, []);

  return (
    <Field
      ref={forwardedRef}
      {...rest}
      format={handleFormat}
      parse={handleParse}
      mask={DATE_MASK}>
      {children}
    </Field>
  );
});

const DatePickerFieldTrigger = DatePicker.Trigger.styleable(
  (props, forwardedRef) => {
    const { focus } = useFieldActions();

    const field = FieldApi.use();
    const size = field.size.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();

    const iconColor = disabled
      ? "$borderDisabled"
      : focused
        ? "$borderFocused"
        : "$border";
    const iconHoverColor = disabled ? "$borderDisabled" : "$borderHover";

    const adjustedIcon = useMemo(() => getSized(size, { shift: -9 }), [size]);

    return (
      <DatePicker.Trigger
        ref={forwardedRef}
        {...props}
        flexBasis="4%"
        color={iconColor}
        onPress={focus}>
        <DatePicker.Trigger.Icon>
          <Calendar
            size={adjustedIcon}
            transition="200ms"
            color={iconColor}
            $group-button-hover={{
              color: iconHoverColor
            }}
            $group-field-hover={{
              color: iconHoverColor
            }}
          />
        </DatePicker.Trigger.Icon>
      </DatePicker.Trigger>
    );
  }
);

const DatePickerFieldControl = DatePicker.TextBox.Value.styleable(
  ({ children, onKeyDown, ...props }, forwardedRef) => {
    const { blur, change, focus } = useFieldActions();
    const inputRef = useRef<HTMLInputElement>(null);
    const composedRef = useComposedRefs(forwardedRef, inputRef);
    const ref = useFieldRef(composedRef);

    const field = FieldApi.use();
    const name = field.name.get();
    const size = field.size.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const formattedValue = field.formattedValue.get();
    const [inputValue, setInputValue] = useState(formattedValue);
    const selectionRef = useRef<{ end: number; start: number } | null>(null);
    const selectedDate = useMemo(
      () => parseInputDate(inputValue),
      [inputValue]
    );

    useEffect(() => {
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
        setInputValue(format(event.detail));
        change?.(event.detail);
        blur?.();
      },
      [change, blur]
    );

    const handleInput = useCallback(
      (event: CustomEvent<string>) => {
        const value = event.detail;
        setInputValue(value);

        if (value === "" || parseInputDate(value)) {
          change?.(value);
        }
      },
      [change]
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
        const date = parseInputDate(input.value);
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
          getDatePart(input.selectionStart ?? 0),
          event.key === "ArrowUp" ? 1 : -1
        );
        setInputValue(format(nextDate));
        change?.(nextDate);
      },
      [change, onKeyDown]
    );

    return (
      <DatePicker
        name={name}
        size={size}
        focused={focused}
        disabled={disabled}
        selectedDate={selectedDate}
        onChange={handleChange}
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
          <Field.ThemeIcon />
        </DatePicker.TextBox>

        <DatePicker.Separator />
        <DatePickerFieldTrigger />
      </DatePicker>
    );
  }
);

export const DatePickerField = withStaticProperties(DatePickerFieldGroup, {
  Label: Field.Label,
  Control: DatePickerFieldControl,
  Details: Field.Details,
  Icon: Field.Icon
});
