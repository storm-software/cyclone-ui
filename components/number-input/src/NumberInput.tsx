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
import { useFormControl } from "@cyclone-ui/helpers";
import { Minus, Plus } from "@cyclone-ui/icons";
import type { InputChangeEventHandler } from "@cyclone-ui/input";
import { Input, InputContext } from "@cyclone-ui/input";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, withStaticProperties } from "@tamagui/core";
import { createContext, use, useCallback, useMemo, useState } from "react";

export interface NumberInputProps {
  /**
   * The amount the decrease and increase buttons change the value by.
   *
   * @defaultValue 1
   */
  increment?: number;

  /**
   * The value of a controlled input. Inside a `Field`, the field holds the
   * value instead.
   */
  value?: string;

  /** The initial value of an uncontrolled input outside a `Field`. */
  defaultValue?: string;
}

interface NumberInputContextValue {
  increment: number;
  value: unknown;
  /** The text box's value, or `undefined` to show the field's value. */
  displayValue?: string;
  change: (value: string) => void;
}

const NumberInputContext = createContext<NumberInputContextValue>({
  increment: 1,
  value: undefined,
  change: () => undefined
});

const NumberInputImpl = createStyledHOC(
  Input,
  (
    {
      children,
      increment = 1,
      value: valueProp,
      defaultValue = "",
      onChange,
      ...props
    }: Omit<GetProps<typeof Input>, keyof NumberInputProps> & NumberInputProps,
    forwardedRef
  ) => {
    const formControl = useFormControl();
    const [localValue, setLocalValue] = useState(defaultValue);
    const value = valueProp ?? (formControl ? formControl.value : localValue);
    const displayValue = valueProp ?? (formControl ? undefined : localValue);

    const formOnChange = formControl?.onChange;
    const handleChange = useCallback<InputChangeEventHandler>(
      event => {
        setLocalValue(event.detail);
        if (onChange) {
          onChange(event);
        } else {
          formOnChange?.(event.detail);
        }
      },
      [formOnChange, onChange]
    );
    const context = useMemo(
      () => ({
        increment,
        value,
        displayValue,
        change: (nextValue: string) =>
          handleChange(new CustomEvent("change", { detail: nextValue }))
      }),
      [displayValue, handleChange, increment, value]
    );

    return (
      <NumberInputContext value={context}>
        <Input ref={forwardedRef} {...props} onChange={handleChange}>
          {children}
        </Input>
      </NumberInputContext>
    );
  },
  { displayName: "NumberInput" }
);

const NumberInputTextBox = createStyledHOC(
  Input.TextBox,
  ({ children, ...props }, forwardedRef) => {
    const { disabled } = InputContext.useStyledContext();
    const { increment, value, change } = use(NumberInputContext);
    const updateValue = useCallback(
      (direction: 1 | -1) => {
        const numericValue = Number(value);
        const currentValue = Number.isFinite(numericValue) ? numericValue : 0;

        change(String(currentValue + direction * increment));
      },
      [change, increment, value]
    );

    return (
      <Input.TextBox ref={forwardedRef} {...props}>
        <Field.Icon
          position="start"
          aria-label="Decrease value"
          accessibilityLabel="Decrease value"
          disabled={disabled}
          onClick={() => updateValue(-1)}>
          <Minus aria-hidden={true} />
        </Field.Icon>
        {children}
        <Field.Icon
          position="end"
          aria-label="Increase value"
          accessibilityLabel="Increase value"
          disabled={disabled}
          onClick={() => updateValue(1)}>
          <Plus aria-hidden={true} />
        </Field.Icon>
      </Input.TextBox>
    );
  },
  { displayName: "NumberInputTextBox" }
);

const NumberInputTextBoxValue = createStyledHOC(
  Input.TextBox.Value,
  (props, forwardedRef) => {
    const { displayValue } = use(NumberInputContext);

    return (
      <Input.TextBox.Value
        ref={forwardedRef}
        {...props}
        value={props.value ?? displayValue}
        type="number"
      />
    );
  },
  { displayName: "NumberInputTextBoxValue" }
);

/**
 * A `type="number"` text input with decrease and increase buttons that change
 * its value by `increment`. Wrap it in a `Field` to connect it to a form.
 */
export const NumberInput = withStaticProperties(NumberInputImpl, {
  TextBox: withStaticProperties(NumberInputTextBox, {
    Value: NumberInputTextBoxValue
  }),
  Trigger: Input.Trigger
});
