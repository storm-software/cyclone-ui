import { Checkbox } from "@cyclone-ui/checkbox";
import { FieldValueType } from "@cyclone-ui/form";
import { FormField } from "@cyclone-ui/form-field";
import { Label, LabelProps } from "@cyclone-ui/label";
import { withStaticProperties } from "@tamagui/web";
import { forwardRef } from "react";

const CheckboxFieldGroup = FormField.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <FormField ref={forwardedRef} valueType={FieldValueType.BOOLEAN} {...rest}>
      {children}
    </FormField>
  );
});

export const CheckboxFieldLabel = forwardRef<
  typeof Label,
  Omit<LabelProps, "htmlFor">
>((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <FormField.Label ref={forwardedRef} paddingBottom={0} {...rest}>
      {children}
    </FormField.Label>
  );
});

export const CheckboxField = withStaticProperties(CheckboxFieldGroup, {
  Label: CheckboxFieldLabel,
  Control: Checkbox,
  Details: FormField.Details
});
