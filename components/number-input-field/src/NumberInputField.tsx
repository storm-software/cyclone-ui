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

import { InputField } from "@cyclone-ui/input-field";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import { withStaticProperties } from "@tamagui/core";
import { Minus, Plus } from "@tamagui/lucide-icons-2";
import { createContext, use, useCallback } from "react";

const NumberInputFieldContext = createContext({ increment: 1 });

const NumberInputFieldGroup = InputField.styleable<{ increment?: number }>(
  ({ children, increment = 1, ...props }, forwardedRef) => {
    return (
      <NumberInputFieldContext value={{ increment }}>
        <InputField ref={forwardedRef} {...props}>
          {children}
        </InputField>
      </NumberInputFieldContext>
    );
  }
);

const NumberInputFieldControlTextBox = InputField.Control.TextBox.styleable(
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const disabled = field.disabled.get();
    const value = field.value.get();
    const { increment } = use(NumberInputFieldContext);
    const { change } = useFieldActions();
    const updateValue = useCallback(
      (direction: 1 | -1) => {
        const numericValue = Number(value);
        const currentValue = Number.isFinite(numericValue) ? numericValue : 0;

        change(String(currentValue + direction * increment));
      },
      [change, increment, value]
    );

    return (
      <InputField.Control.TextBox ref={forwardedRef} {...props}>
        <InputField.Icon
          position="start"
          aria-label="Decrease value"
          accessibilityLabel="Decrease value"
          disabled={disabled}
          onClick={() => updateValue(-1)}>
          <Minus aria-hidden={true} />
        </InputField.Icon>
        {children}
        <InputField.Icon
          position="end"
          aria-label="Increase value"
          accessibilityLabel="Increase value"
          disabled={disabled}
          onClick={() => updateValue(1)}>
          <Plus aria-hidden={true} />
        </InputField.Icon>
      </InputField.Control.TextBox>
    );
  }
);

const NumberInputFieldControlTextBoxValue =
  InputField.Control.TextBox.Value.styleable((props, forwardedRef) => {
    const { change } = useFieldActions();
    const handleChange = useCallback(
      (event: CustomEvent<string>) => {
        change(event.detail);
      },
      [change]
    );

    return (
      <InputField.Control.TextBox.Value
        ref={forwardedRef}
        {...props}
        onChange={handleChange}
        type="number"
      />
    );
  });

export const NumberInputField = withStaticProperties(NumberInputFieldGroup, {
  Label: InputField.Label,
  Link: InputField.Link,
  Control: withStaticProperties(InputField.Control, {
    TextBox: withStaticProperties(NumberInputFieldControlTextBox, {
      Value: NumberInputFieldControlTextBoxValue
    }),
    Trigger: InputField.Control.Trigger
  }),
  Details: InputField.Details,
  Icon: InputField.Icon
});
