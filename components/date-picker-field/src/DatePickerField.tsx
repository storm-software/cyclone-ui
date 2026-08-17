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

import { DatePicker } from "@cyclone-ui/date-picker";
import { Field } from "@cyclone-ui/field";
import { getSized } from "@cyclone-ui/helpers";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { formatDate } from "@stryke/date/format";
import { View, withStaticProperties } from "@tamagui/core";
import { Calendar } from "@tamagui/lucide-icons";
import type { RefObject } from "react";
import { useCallback, useMemo } from "react";

export const DATE_MASK = maskitoDateOptionsGenerator({
  mode: "mm/dd/yyyy",
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

export const format = (value: any) => {
  const date = toDate(value);
  if (!date) {
    return "";
  }

  return formatDate(date, "MM.DD.YYYY");
};

export const parse = (value: any) => {
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

    const adjustedIcon = useMemo(() => getSized(size, { shift: -9 }), [size]);

    return (
      <View flexBasis="6%">
        <DatePicker.Trigger ref={forwardedRef} {...props} onPress={focus}>
          <DatePicker.Trigger.Icon>
            <Calendar size={adjustedIcon} />
          </DatePicker.Trigger.Icon>
        </DatePicker.Trigger>
      </View>
    );
  }
);

const DatePickerFieldControl = DatePicker.TextBox.Value.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { blur, change, focus } = useFieldActions();
    const ref = useFieldRef(forwardedRef);

    const field = FieldApi.use();
    const name = field.name.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const formattedValue = field.formattedValue.get();
    const initialValue = field.initialValue.get();

    const handleChange = useCallback(
      (event: CustomEvent<Date | null>) => {
        change?.(event.detail);
        blur?.();
      },
      [change, blur]
    );

    const defaultValue = useMemo(() => format(initialValue), [initialValue]);

    return (
      <DatePicker
        name={name}
        focused={focused}
        disabled={disabled}
        onChange={handleChange}
        onFocus={focus}
        onBlur={blur}>
        <DatePicker.TextBox>
          {children}
          <DatePicker.TextBox.Value
            ref={ref as RefObject<HTMLInputElement>}
            {...props}
            value={formattedValue}
            defaultValue={defaultValue}
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
