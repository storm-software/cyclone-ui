import { Field, FieldValueType } from "@cyclone-ui/form";
import { Input } from "@cyclone-ui/input";
import { withStaticProperties } from "@tamagui/web";

const InputFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} valueType={FieldValueType.STRING} {...rest}>
      {children}
    </Field>
  );
});

export const InputField = withStaticProperties(InputFieldGroup, {
  Label: Field.Label,
  Control: Input,
  Details: Field.Details
});
