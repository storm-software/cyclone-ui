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

import { Checkbox } from "@cyclone-ui/checkbox";
import { Field } from "@cyclone-ui/field";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import type { CheckedState } from "@tamagui/checkbox-headless";
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
      <XStack gap="$xs" alignContent="center">
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
  Link: Field.Link,
  Control: CheckboxFieldControl,
  Details: Field.Details
});
