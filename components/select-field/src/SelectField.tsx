import { Field, FieldValueType } from "@cyclone-ui/form";
import { Select } from "@cyclone-ui/select";
import { withStaticProperties } from "@tamagui/web";

const SelectFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} valueType={FieldValueType.STRING} {...rest}>
      {children}
    </Field>
  );
});

export const SelectField = withStaticProperties(SelectFieldGroup, {
  Label: Field.Label,
  Control: Select,
  Details: Field.Details
});
