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
import { useFieldActions, useFieldStore } from "@cyclone-ui/form-state";
import { isSet } from "@storm-stack/types/type-checks/is-set";
import { withStaticProperties } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";
import { useCallback } from "react";

const CheckboxFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const CheckboxFieldLabel = Field.Label.styleable(
  ({ children, ...props }, forwardedRef) => {
    const store = useFieldStore();
    const disabled = store.get.disabled();

    return (
      <Field.Label ref={forwardedRef} paddingBottom={0} {...props}>
        <XStack gap="$0.5" alignContent="center" verticalAlign="center">
          {children}
          {disabled && <Field.ThemeIcon disabled={true} />}
        </XStack>
      </Field.Label>
    );
  }
);

const CheckboxFieldControl = Checkbox.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { focus, change, blur } = useFieldActions<boolean>();
    const handleCheckedChange = useCallback(
      async (checked: boolean) => {
        await change(checked);
        await blur();
      },
      [blur, change]
    );

    const store = useFieldStore<boolean>();
    const disabled = store.get.disabled();
    const focused = store.get.focused();
    const value = store.get.value();
    const initialValue = store.get.initialValue();

    return (
      <Checkbox
        ref={forwardedRef}
        {...props}
        onFocus={focus}
        onBlur={blur}
        onCheckedChange={handleCheckedChange}
        checked={isSet(value) ? value : "indeterminate"}
        defaultChecked={isSet(initialValue) ? initialValue : "indeterminate"}
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
