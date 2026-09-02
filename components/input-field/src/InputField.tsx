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
import { Input } from "@cyclone-ui/input";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import { Theme, useComposedRefs, withStaticProperties } from "@tamagui/core";
import { X } from "@tamagui/lucide-icons-2";
import type { FocusEvent, RefObject } from "react";
import {
  createContext,
  use,
  useCallback,
  useLayoutEffect,
  useRef
} from "react";

const InputFieldTextBoxContext = createContext<{
  inputElementRef: RefObject<HTMLInputElement | null>;
} | null>(null);

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
    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        if (event.currentTarget.contains(event.relatedTarget)) {
          return;
        }

        void blur();
      },
      [blur]
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
        onBlur={handleBlur}
        onChange={handleChange}>
        {children}
      </Input>
    );
  }
);

const InputFieldControlTextBox = Input.TextBox.styleable(
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const clearable = field.clearable.get();
    const disabled = field.disabled.get();
    const formattedValue = field.formattedValue.get();
    const options = field.options.get();

    const inputElementRef = useRef<HTMLInputElement>(null);

    const { change } = useFieldActions();
    const handleClear = useCallback(() => {
      change(options?.defaultValue);
      inputElementRef.current?.focus();
    }, [change, options?.defaultValue]);

    return (
      <InputFieldTextBoxContext value={{ inputElementRef }}>
        <Input.TextBox ref={forwardedRef} {...props}>
          {children}
          {clearable && formattedValue && (
            <Field.ThemeIcon position="end" onClick={handleClear}>
              <X
                color={disabled ? "$borderDisabled" : "$border"}
                $group-field-hover={{
                  color: disabled ? "$borderDisabled" : "$borderHover"
                }}
              />
            </Field.ThemeIcon>
          )}
          <Field.ThemeIcon position="end" />
        </Input.TextBox>
      </InputFieldTextBoxContext>
    );
  }
);

const InputFieldControlTextBoxValue = Input.TextBox.Value.styleable(
  (props, forwardedRef) => {
    const field = FieldApi.use();
    const theme = field.theme.get();
    const formattedValue = field.formattedValue.get();
    const textBox = use(InputFieldTextBoxContext);

    const { mount } = useFieldActions();
    const inputRef = useFieldRef(
      useComposedRefs(forwardedRef, textBox?.inputElementRef)
    );

    useLayoutEffect(() => {
      mount(inputRef);
    }, [inputRef, mount]);

    return (
      <Theme name={theme}>
        <Input.TextBox.Value ref={inputRef} {...props} value={formattedValue} />
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
  Link: Field.Link,
  Control: withStaticProperties(InputFieldControl, {
    TextBox: withStaticProperties(InputFieldControlTextBox, {
      Value: InputFieldControlTextBoxValue
    }),
    Trigger: InputFieldControlTrigger
  }),
  Details: Field.Details,
  Icon: Field.Icon
});
