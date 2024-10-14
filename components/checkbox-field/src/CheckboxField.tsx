import { Checkbox } from "@cyclone-ui/checkbox";
import { Field, FieldValueType, Label, LabelProps } from "@cyclone-ui/form";
import { withStaticProperties } from "@tamagui/web";
import { forwardRef } from "react";

const CheckboxFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} valueType={FieldValueType.BOOLEAN} {...rest}>
      {children}
    </Field>
  );
});

export const CheckboxFieldLabel = forwardRef<
  typeof Label,
  Omit<LabelProps, "htmlFor">
>((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field.Label ref={forwardedRef} paddingBottom={0} {...rest}>
      {children}
    </Field.Label>
  );
});

export const CheckboxField = withStaticProperties(CheckboxFieldGroup, {
  Label: CheckboxFieldLabel,
  Control: Checkbox,
  Details: Field.Details
});
