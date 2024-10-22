import { Field, useFieldActions } from "@cyclone-ui/form";
import { Input } from "@cyclone-ui/input";
import { withStaticProperties } from "@tamagui/web";

const InputFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const InputFieldControl = Input.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;
  const { focus, blur, change } = useFieldActions();

  return (
    <Input
      ref={forwardedRef}
      {...rest}
      onFocus={focus}
      onBlur={blur}
      onChangeText={change}>
      {children}
    </Input>
  );
});

export const InputField = withStaticProperties(InputFieldGroup, {
  Label: Field.Label,
  Control: InputFieldControl,
  Details: Field.Details
});
