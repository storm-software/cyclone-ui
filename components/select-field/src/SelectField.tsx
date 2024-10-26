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
import { useFieldActions, useFieldStore } from "@cyclone-ui/form-state";
import { Select } from "@cyclone-ui/select";
import { SelectOption } from "@storm-stack/types/utility-types/form";
import { GetProps, withStaticProperties } from "@tamagui/core";
import { Atom, useAtomValue } from "jotai";
import { PropsWithChildren } from "react";

const SelectFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const SelectFieldItem = (
  props: PropsWithChildren<{ itemAtom: Atom<SelectOption> }>
) => {
  const item = useAtomValue(props.itemAtom);
  const { value, name } = item;

  return (
    <Select.Items.Item {...item} textValue={String(value)}>
      {name}
    </Select.Items.Item>
  );
};

const SelectFieldControl = Select.styleable<
  Pick<GetProps<typeof Select.Trigger.Value>, "placeholder">
>(({ placeholder, ...props }, forwardedRef) => {
  const { focus, blur, change, toggleFocused } = useFieldActions();

  const store = useFieldStore();
  const name = store.get.name();
  const disabled = store.get.disabled();
  const focused = store.get.focused();
  const validating = store.get.validating();
  const itemsAtoms = store.get.itemsAtoms();
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

        {!disabled && !validating && (
          <Field.Icon>
            <Select.Trigger.Chevron />
          </Field.Icon>
        )}
        {(disabled || validating) && <Field.ThemeIcon />}
      </Select.Trigger>

      <Select.Items>
        {itemsAtoms.map((itemAtom, index) => (
          <SelectFieldItem key={index} itemAtom={itemAtom} />
        ))}
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
