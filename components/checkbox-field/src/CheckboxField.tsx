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

import { Checkbox } from "@cyclone-ui/checkbox";
import { Field } from "@cyclone-ui/field";
import { FieldApi, useFieldActions } from "@cyclone-ui/form-state";
import { CheckedState } from "@tamagui/checkbox-headless";
import { withStaticProperties } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";

const CheckboxFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} hideOptional={true} {...rest}>
      {children}
    </Field>
  );
});

const CheckboxFieldLabel = Field.Label.styleable(
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const disabled = field.disabled.get();

    return (
      <XStack gap="$0.5" alignContent="center">
        <Field.Label
          ref={forwardedRef}
          paddingBottom={0}
          hideRequired={true}
          textAlign="center"
          {...props}>
          {children}
        </Field.Label>
        {disabled && <Field.ThemeIcon disabled={true} />}
      </XStack>
    );
  }
);

const CheckboxFieldControl = Checkbox.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { focus, change, blur } = useFieldActions<CheckedState>();

    const field = FieldApi.use();
    const name = field.name.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const value = field.value.get();
    const initialValue = field.initialValue.get();

    return (
      <Checkbox
        ref={forwardedRef}
        {...props}
        name={name}
        onFocus={focus}
        onBlur={blur}
        onCheckedChange={change}
        checked={value || false}
        defaultChecked={initialValue || false}
        focused={focused}
        disabled={disabled}>
        {children}
      </Checkbox>
    );
  }
);

export const CheckboxField = withStaticProperties(CheckboxFieldGroup, {
  Label: CheckboxFieldLabel,
  Control: CheckboxFieldControl,
  Details: Field.Details
});
