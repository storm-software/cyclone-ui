/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { Field } from "@cyclone-ui/field";
import { useFieldActions } from "@cyclone-ui/form-state";
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
