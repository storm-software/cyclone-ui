import { Field } from "@cyclone-ui/form-state";
import { Select } from "@cyclone-ui/select";
import { withStaticProperties } from "@tamagui/web";

const SelectFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

export const SelectField = withStaticProperties(SelectFieldGroup, {
  Label: Field.Label,
  Control: Select,
  Details: Field.Details
});
