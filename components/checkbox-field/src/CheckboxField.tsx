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
import { Field, FieldThemeIcon } from "@cyclone-ui/field";
import { useFieldStore } from "@cyclone-ui/form-state";
import { withStaticProperties } from "@tamagui/core";
import { XStack, XStackProps } from "@tamagui/stacks";
import { forwardRef } from "react";

const CheckboxFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const InnerCheckboxFieldLabel = forwardRef<typeof XStack, XStackProps>(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    const store = useFieldStore();

    return (
      <XStack
        ref={forwardedRef}
        gap="$0.5"
        alignContent="center"
        verticalAlign="center"
        {...rest}>
        {children}
        {store.get.disabled() && <FieldThemeIcon disabled={true} />}
      </XStack>
    );
  }
);

export const CheckboxFieldLabel = Field.Label.styled((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field.Label ref={forwardedRef} paddingBottom={0} {...rest}>
      <InnerCheckboxFieldLabel>{children}</InnerCheckboxFieldLabel>
    </Field.Label>
  );
});

export const CheckboxField = withStaticProperties(CheckboxFieldGroup, {
  Label: CheckboxFieldLabel,
  Control: Checkbox,
  Details: Field.Details
});
