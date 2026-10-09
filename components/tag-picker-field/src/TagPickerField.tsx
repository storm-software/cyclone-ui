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

import {
  Field,
  useFieldShouldShowPlaceholder,
  useFieldVariant
} from "@cyclone-ui/field";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import type { TagPickerProps } from "@cyclone-ui/tag-picker";
import { TagPicker } from "@cyclone-ui/tag-picker";
import type { TamaguiElement } from "@tamagui/core";
import { createStyledHOC, withStaticProperties } from "@tamagui/core";
import { forwardRef, useCallback, useLayoutEffect } from "react";

// A stable empty value while the form has no tags for the field.
const NO_TAGS: string[] = [];

const TagPickerFieldGroup = createStyledHOC(Field, (props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const TagPickerFieldControl = forwardRef<TamaguiElement, TagPickerProps>(
  (
    {
      children,
      value: controlledValue,
      onChange,
      placeholder,
      inputRef: inputRefProp,
      ...props
    },
    forwardedRef
  ) => {
    const field = FieldApi.use();
    const name = field.name.get();
    const size = field.size.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const value = field.value.get() as string[] | null | undefined;
    const formattedValue = field.formattedValue.get();
    const variant = useFieldVariant(placeholder);
    const shouldShowPlaceholder = useFieldShouldShowPlaceholder(formattedValue);

    const { focus, blur, change, mount } = useFieldActions<string[]>();
    const inputRef = useFieldRef(inputRefProp);

    useLayoutEffect(() => {
      void mount(inputRef);
    }, [inputRef, mount]);

    const handleChange = useCallback(
      (tags: string[]) => {
        void change(tags);
        onChange?.(tags);
      },
      [change, onChange]
    );

    return (
      <TagPicker
        ref={forwardedRef}
        {...props}
        // The field label's `htmlFor` targets the text box by this name.
        name={name}
        size={size}
        disabled={disabled}
        focused={focused}
        variant={variant}
        value={controlledValue ?? value ?? NO_TAGS}
        placeholder={shouldShowPlaceholder ? placeholder : undefined}
        inputRef={inputRef}
        onFocus={focus}
        onBlur={blur}
        onChange={handleChange}>
        {children}
        <Field.ThemeIcon position="end" />
      </TagPicker>
    );
  }
);

TagPickerFieldControl.displayName = "TagPickerFieldControl";

export const TagPickerField = withStaticProperties(TagPickerFieldGroup, {
  Label: Field.Label,
  Link: Field.Link,
  Control: TagPickerFieldControl,
  Details: Field.Details
});
