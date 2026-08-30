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

import { Field } from "@cyclone-ui/field";
import { Select } from "@cyclone-ui/select";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import type { SelectOption } from "@stryke/types/form";
import type { GetProps } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/core";
import type { Atom } from "jotai";
import { useAtomValue } from "jotai";
import type { PropsWithChildren } from "react";
import { memo, useCallback, useLayoutEffect } from "react";

const SelectFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const SelectFieldItem = memo(
  (props: PropsWithChildren<{ itemAtom: Atom<SelectOption> }>) => {
    const item = useAtomValue(props.itemAtom);
    const { value, name, index } = item;

    return (
      <Select.Items.Item {...item} tabIndex={index} textValue={String(value)}>
        {name}
      </Select.Items.Item>
    );
  }
);

const SelectFieldControl = Select.styleable<
  Pick<GetProps<typeof Select.TextBox.Value>, "placeholder">
>(({ placeholder, children, ...props }, forwardedRef) => {
  const { focus, blur, change, mount } = useFieldActions();
  const handleChange = useCallback(
    (event: CustomEvent<string | null>) => {
      change(event.detail);
    },
    [change]
  );

  const field = FieldApi.use();
  const name = field.name.get();
  const disabled = field.disabled.get();
  const focused = field.focused.get();
  const size = field.size.get();
  const itemsAtoms = field.itemsAtoms.get();
  const value = field.value.get();
  const formattedValue = field.formattedValue.get();
  const initialValue = field.initialValue.get();
  const displayValue = formattedValue || String(value ?? initialValue ?? "");

  const selectRef = useFieldRef();
  useLayoutEffect(() => {
    mount(selectRef);
  }, [mount]);

  return (
    <Select
      ref={forwardedRef}
      {...props}
      name={name}
      focused={focused}
      disabled={disabled}
      size={size}
      onFocus={focus}
      onBlur={blur}
      onChange={handleChange}
      value={displayValue}
      defaultValue={String(initialValue ?? "")}>
      <Select.TextBox>
        {children}
        <Select.TextBox.Value
          ref={selectRef}
          placeholder={displayValue ? undefined : placeholder}
          placeholding={!displayValue}>
          {displayValue}
        </Select.TextBox.Value>

        <Field.ThemeIcon position="end" render="span" role={undefined} />
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
