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
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/form-state";
import { Input } from "@cyclone-ui/input";
import { Theme, withStaticProperties } from "@tamagui/core";
import { useCallback, useLayoutEffect } from "react";

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
    const field = FieldApi.use();
    const name = field.name.get();
    const size = field.size.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();

    const { focus, blur, change } = useFieldActions();
    const handleChange = useCallback(
      (event: CustomEvent<string>) => {
        change(event.detail);
      },
      [change]
    );

    return (
      <Input
        ref={forwardedRef}
        {...props}
        name={name}
        focused={focused}
        disabled={disabled}
        size={size}
        onFocus={focus}
        onBlur={blur}
        onChange={handleChange}>
        {children}
      </Input>
    );
  }
);

const InputFieldControlTextBox = Input.TextBox.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Input.TextBox ref={forwardedRef} {...props}>
        {children}
        <Field.ThemeIcon />
      </Input.TextBox>
    );
  }
);

const InputFieldControlTextBoxValue = Input.TextBox.Value.styleable(
  ({ clearable = false, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const theme = field.theme.get();
    const formattedValue = field.formattedValue.get();
    const initialValue = field.initialValue.get();
    const options = field.options.get();

    const { change, mount } = useFieldActions();
    const handleClear = useCallback(() => {
      change(options?.defaultValue);
    }, [change, options?.defaultValue]);

    const inputRef = useFieldRef(forwardedRef);
    useLayoutEffect(() => {
      mount(inputRef);
    }, [mount]);

    return (
      <Theme name={theme}>
        <Input.TextBox.Value
          ref={inputRef}
          {...props}
          value={formattedValue}
          defaultValue={String(initialValue ?? "")}
          clearable={clearable}
          onClear={handleClear}
        />
      </Theme>
    );
  }
);

const InputFieldControlTrigger = Input.Trigger.styleable(
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const disabled = field.disabled.get();

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
