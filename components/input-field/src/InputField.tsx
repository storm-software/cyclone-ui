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
import { Input } from "@cyclone-ui/input";
import { withStaticProperties } from "@tamagui/web";

const InputFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const InputFieldControl = Input.Value.styleable((props, forwardedRef) => {
  const { focus, blur, change } = useFieldActions();

  const store = useFieldStore();

  const name = store.get.name();
  const size = store.get.size();
  const disabled = store.get.disabled();
  const focused = store.get.focused();
  const validating = store.get.validating();
  const formattedValue = store.get.formattedValue();
  const initialValue = store.get.initialValue();

  return (
    <Input name={name} focused={focused} disabled={disabled}>
      <Input.Value
        ref={forwardedRef}
        {...props}
        size={size}
        disabled={disabled}
        onFocus={focus}
        onBlur={blur}
        onChangeText={change}
        value={formattedValue}
        defaultValue={String(initialValue ?? "")}
      />

      {!disabled && !validating && <Field.ThemeIcon />}
      {(disabled || validating) && <Field.ThemeIcon />}
    </Input>
  );
});

export const InputField = withStaticProperties(InputFieldGroup, {
  Label: Field.Label,
  Control: InputFieldControl,
  Details: Field.Details,
  Icon: Field.Icon
});
