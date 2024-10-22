import { Field } from "@cyclone-ui/form";
import { RadioGroup } from "@cyclone-ui/radio-group";
import { withStaticProperties } from "@tamagui/web";

const RadioGroupFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

export const RadioGroupField = withStaticProperties(RadioGroupFieldGroup, {
  Label: Field.Label,
  Control: RadioGroup,
  Details: Field.Details
});
