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
import { Theme, withStaticProperties } from "@tamagui/core";
import { useCallback } from "react";

const InputFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const InputFieldControl = Input.styleable(
  ({ children, ...props }, forwardedRef) => {
    const store = useFieldStore();
    const name = store.get.name();
    const size = store.get.size();
    const disabled = store.get.disabled();
    const focused = store.get.focused();

    return (
      <Input
        ref={forwardedRef}
        name={name}
        focused={focused}
        disabled={disabled}
        size={size}
        {...props}>
        {children}
      </Input>
    );
  }
);

const InputFieldControlTextBox = Input.TextBox.styleable(
  ({ children, ...props }, forwardedRef) => {
    const store = useFieldStore();
    const disabled = store.get.disabled();
    const validating = store.get.validating();

    return (
      <Input.TextBox ref={forwardedRef} {...props}>
        {children}
        <Field.ThemeIcon />
      </Input.TextBox>
    );
  }
);

const InputFieldControlTextBoxValue = Input.TextBox.Value.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { focus, blur, change } = useFieldActions();

    const store = useFieldStore();
    const theme = store.get.theme();
    const disabled = store.get.disabled();
    const formattedValue = store.get.formattedValue();
    const initialValue = store.get.initialValue();

    const handleChange = useCallback(
      (event: CustomEvent<{ text: string }>) => {
        change(event.detail.text);
      },
      [change]
    );

    return (
      <Theme name={theme}>
        <Input.TextBox.Value
          ref={forwardedRef}
          {...props}
          theme={theme}
          disabled={disabled}
          onFocus={focus}
          onBlur={blur}
          onChange={handleChange}
          value={formattedValue}
          defaultValue={String(initialValue ?? "")}
        />
      </Theme>
    );
  }
);

const InputFieldControlTrigger = Input.Trigger.styleable(
  ({ children, ...props }, forwardedRef) => {
    const store = useFieldStore();
    const disabled = store.get.disabled();

    return (
      <Input.Trigger ref={forwardedRef} disabled={disabled} {...props}>
        {children}
      </Input.Trigger>
    );
  }
);

export const InputField = withStaticProperties(InputFieldGroup, {
  Label: Field.Label,
  Control: withStaticProperties(InputFieldControl, {
    TextBox: withStaticProperties(InputFieldControlTextBox, {
      Value: InputFieldControlTextBoxValue
    }),
    Trigger: InputFieldControlTrigger
  }),
  Details: Field.Details,
  Icon: Field.Icon
});
