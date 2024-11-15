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
import { PropsWithChildren, useCallback } from "react";

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
  const { value, name, index } = item;

  return (
    <Select.Items.Item {...item} tabIndex={index} textValue={String(value)}>
      {name}
    </Select.Items.Item>
  );
};

const SelectFieldControl = Select.styleable<
  Pick<GetProps<typeof Select.TextBox.Value>, "placeholder">
>(({ placeholder, children, ...props }, forwardedRef) => {
  const { focus, blur, change } = useFieldActions();
  const handleChange = useCallback(
    (event: CustomEvent<string | null>) => {
      change(event.detail);
    },
    [change]
  );

  const store = useFieldStore();
  const name = store.get.name();
  const disabled = store.get.disabled();
  const focused = store.get.focused();
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
      onFocus={focus}
      onBlur={blur}
      onChange={handleChange}
      value={formattedValue}
      defaultValue={String(initialValue ?? "")}>
      <Select.TextBox>
        {children}
        <Select.TextBox.Value placeholder={placeholder} placeholding={!value} />

        <Field.ThemeIcon />
      </Select.TextBox>

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
