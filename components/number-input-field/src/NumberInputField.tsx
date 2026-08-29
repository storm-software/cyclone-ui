/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { InputField } from "@cyclone-ui/input-field";
import { useFieldActions } from "@cyclone-ui/state/form";
import { withStaticProperties } from "@tamagui/core";
import { useCallback } from "react";

const NumberInputFieldGroup = InputField.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <InputField ref={forwardedRef} {...props}>
        {children}
      </InputField>
    );
  }
);

const NumberInputFieldControlTextBoxValue =
  InputField.Control.TextBox.Value.styleable((props, forwardedRef) => {
    const { change } = useFieldActions();
    const handleChange = useCallback(
      (event: CustomEvent<string>) => {
        change(event.detail);
      },
      [change]
    );

    return (
      <InputField.Control.TextBox.Value
        ref={forwardedRef}
        {...props}
        onChange={handleChange}
        type="number"
      />
    );
  });

export const NumberInputField = withStaticProperties(NumberInputFieldGroup, {
  Label: InputField.Label,
  Control: withStaticProperties(InputField.Control, {
    TextBox: withStaticProperties(InputField.Control.TextBox, {
      Value: NumberInputFieldControlTextBoxValue
    }),
    Trigger: InputField.Control.Trigger
  }),
  Details: InputField.Details,
  Icon: InputField.Icon
});
