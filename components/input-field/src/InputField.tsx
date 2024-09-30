import { FormField } from "@cyclone-ui/form-field";
import { Input } from "@cyclone-ui/input";
import { withStaticProperties } from "@tamagui/web";

export const InputField = withStaticProperties(FormField, {
  Label: FormField.Label,
  Value: Input,
  Details: FormField.Details
});
