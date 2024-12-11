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

import { FieldApi } from "@cyclone-ui/form-state";
import { getSized } from "@cyclone-ui/helpers";
import type { InputValueProps } from "@cyclone-ui/input";
import { InputField } from "@cyclone-ui/input-field";
import { withStaticProperties } from "@tamagui/core";
import { Search } from "@tamagui/lucide-icons";
import { useMemo } from "react";

const SearchInputFieldGroup = InputField.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <InputField ref={forwardedRef} {...props}>
        {children}
      </InputField>
    );
  }
);

const SearchInputFieldLabel = InputField.Label.styleable(
  ({ children, hideOptional = true, ...props }, forwardedRef) => {
    return (
      <InputField.Label
        ref={forwardedRef}
        hideOptional={hideOptional}
        {...props}>
        {children}
      </InputField.Label>
    );
  }
);

const SearchInputFieldControl = InputField.Control.styleable(
  ({ children, ...props }, forwardedRef) => {
    return (
      <InputField.Control ref={forwardedRef} {...props}>
        {children}
      </InputField.Control>
    );
  }
);

const SearchInputFieldControlTextBox = InputField.Control.TextBox.styleable<
  Partial<Pick<InputValueProps, "placeholder" | "clearable">>
>(
  (
    { children, placeholder = "Search...", clearable = true, ...props },
    forwardedRef
  ) => {
    const field = FieldApi.use();
    const size = field.size.get();

    const adjusted = useMemo(() => getSized(size, { shift: -4 }), [size]);

    return (
      <InputField.Control.TextBox ref={forwardedRef} {...props}>
        <InputField.Icon size={adjusted}>
          <Search />
        </InputField.Icon>

        <InputField.Control.TextBox.Value
          placeholder={placeholder}
          clearable={clearable}
        />

        {children}
      </InputField.Control.TextBox>
    );
  }
);

export const SearchInputField = withStaticProperties(SearchInputFieldGroup, {
  Label: SearchInputFieldLabel,
  Control: withStaticProperties(SearchInputFieldControl, {
    TextBox: SearchInputFieldControlTextBox,
    Trigger: InputField.Control.Trigger
  }),
  Details: InputField.Details,
  Icon: InputField.Icon
});
