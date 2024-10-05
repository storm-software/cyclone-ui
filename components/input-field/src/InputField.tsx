import { FieldValueType } from "@cyclone-ui/form";
import { FormField } from "@cyclone-ui/form-field";
import { Input } from "@cyclone-ui/input";
import { withStaticProperties } from "@tamagui/web";

const InputFieldGroup = FormField.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <FormField ref={forwardedRef} valueType={FieldValueType.STRING} {...rest}>
        {children}
      </FormField>
    );
  }
);

export const InputField = withStaticProperties(InputFieldGroup, {
  Label: FormField.Label,
  Value: Input,
  Details: FormField.Details
});
