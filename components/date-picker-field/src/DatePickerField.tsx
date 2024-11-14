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

import { DatePicker } from "@cyclone-ui/date-picker";
import { Field } from "@cyclone-ui/field";
import {
  useFieldActions,
  useFieldRef,
  useFieldStore
} from "@cyclone-ui/form-state";
import { getSized } from "@cyclone-ui/theme-helpers";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { StormDate } from "@storm-stack/date-time/storm-date";
import { formatDate } from "@storm-stack/date-time/utilities/format-date";
import { withStaticProperties } from "@tamagui/core";
import { Calendar } from "@tamagui/lucide-icons";
import { LegacyRef, useCallback, useMemo } from "react";
import { TextInput } from "react-native";

export const DATE_MASK = maskitoDateOptionsGenerator({
  mode: "mm/dd/yyyy",
  separator: "/"
});

export const format = (value: any) => {
  return formatDate(value, {
    returnEmptyIfNotSet: true,
    returnEmptyIfInvalid: true
  });
};

export const parse = (value: any) => {
  const date = StormDate.create(value);
  return date.valid ? date : null;
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

    const store = useFieldStore();
    const size = store.get.size();

    const adjusted = useMemo(() => getSized(size, { shift: -2 }), [size]);

    // const handleReset = useCallback(() => {
    //   change(null);
    //   blur();
    // }, [blur, change]);

    return (
      <DatePicker.Trigger
        ref={forwardedRef}
        flexBasis="10%"
        {...props}
        onPress={focus}
        size={adjusted}>
        <DatePicker.Trigger.Icon>
          <Calendar />
        </DatePicker.Trigger.Icon>
      </DatePicker.Trigger>
    );
  }
);

const DatePickerFieldControl = DatePicker.TextBox.Value.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { blur, change, setFocused } = useFieldActions();

    const store = useFieldStore<Date>();
    const ref = useFieldRef(forwardedRef) as LegacyRef<TextInput>;

    const name = store.get.name();
    const disabled = store.get.disabled();
    const focused = store.get.focused();
    const value = store.get.value();
    const formattedValue = store.get.formattedValue();
    const initialValue = store.get.initialValue();

    const handleChange = useCallback(
      (date?: Date | null) => {
        change(date);
        blur();
      },
      [change, blur]
    );

    const defaultValue = useMemo(() => format(initialValue), [initialValue]);

    return (
      <DatePicker
        name={name}
        focused={focused}
        disabled={disabled}
        date={value}
        onChange={handleChange}
        open={focused}
        onOpenChange={setFocused}>
        <DatePicker.TextBox>
          {children}
          <DatePicker.TextBox.Value
            ref={ref}
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
