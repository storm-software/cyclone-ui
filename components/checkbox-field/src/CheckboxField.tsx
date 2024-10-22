import { Checkbox } from "@cyclone-ui/checkbox";
import {
  Field,
  FieldThemeIcon,
  Label,
  LabelProps,
  useFieldStore
} from "@cyclone-ui/form";
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

export const CheckboxFieldLabel = forwardRef<
  typeof Label,
  Omit<LabelProps, "htmlFor">
>((props, forwardedRef) => {
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
