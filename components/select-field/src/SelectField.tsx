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

import { Field } from "@cyclone-ui/field";
import {
  useFieldActions,
  useFieldApi,
  useFieldStore
} from "@cyclone-ui/form-state";
import { Select } from "@cyclone-ui/select";
import { GetProps, withStaticProperties } from "@tamagui/web";
import { Getter } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback, useMemo } from "react";

const SelectFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const SelectFieldItem = Select.Items.Item.styleable(
  ({ children, value, ...props }, forwardedRef) => {
    const store = useFieldStore();
    const fieldValue = store.get.value();
    const fieldDisabled = store.get.disabled();

    const selected = useMemo(() => fieldValue === value, [fieldValue, value]);
    const disabled = useMemo(
      () => Boolean(fieldDisabled || props.disabled),
      [fieldDisabled, props.disabled]
    );
    return (
      <Select.Items.Item
        ref={forwardedRef}
        {...props}
        value={value}
        textValue={String(value)}
        selected={selected}
        disabled={disabled}>
        {children}
      </Select.Items.Item>
    );
  }
);

const SelectFieldControl = Select.styleable<
  Pick<GetProps<typeof Select.Trigger.Value>, "placeholder">
>(({ placeholder, ...props }, forwardedRef) => {
  const { focus, blur, change, toggleFocused } = useFieldActions();
  const fieldApi = useFieldApi();

  const store = useFieldStore();
  const name = store.get.name();
  const disabled = store.get.disabled();
  const focused = store.get.focused();
  const validating = store.get.validating();
  const value = store.get.value();
  const formattedValue = store.get.formattedValue();
  const initialValue = store.get.initialValue();

  return (
    <Select
      ref={forwardedRef}
      {...props}
      name={name}
      focused={focused}
      disabled={disabled}
      onOpenChange={toggleFocused}
      onValueChange={change}
      value={formattedValue}
      defaultValue={String(initialValue ?? "")}>
      <Select.Trigger>
        {!disabled && <Field.ThemeIcon />}

        <Select.Trigger.Value
          onFocus={focus}
          onBlur={blur}
          placeholder={placeholder}
          placeholding={!value}
        />

        {!disabled && !validating && <Select.Trigger.Button />}
        {(disabled || validating) && <Field.ThemeIcon />}
      </Select.Trigger>

      <Select.Items>
        {useAtomCallback(
          useCallback((get: Getter) => {
            return get(fieldApi.atom.items)
              .filter(item => Boolean(item.value))
              .map((item, index) => {
                const { value, name, ...rest } = item;

                return (
                  <SelectFieldItem
                    {...rest}
                    key={index}
                    index={index}
                    value={value}>
                    {name}
                  </SelectFieldItem>
                );
              });
          }, [])
        )}
      </Select.Items>
    </Select>
  );
});

export const SelectField = withStaticProperties(SelectFieldGroup, {
  Label: Field.Label,
  Control: SelectFieldControl,
  Details: Field.Details,
  Icon: Field.Icon
});
