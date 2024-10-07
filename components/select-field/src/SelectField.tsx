import { FieldValueType } from "@cyclone-ui/form";
import { FormField } from "@cyclone-ui/form-field";
import { Select } from "@cyclone-ui/select";
import { withStaticProperties } from "@tamagui/web";

const SelectFieldGroup = FormField.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <FormField ref={forwardedRef} valueType={FieldValueType.STRING} {...rest}>
      {children}
    </FormField>
  );
});

export const SelectField = withStaticProperties(SelectFieldGroup, {
  Label: FormField.Label,
  Control: Select,
  Details: FormField.Details
});
