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

import { Field } from "@cyclone-ui/field";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import { TextArea } from "@cyclone-ui/text-area";
import { Theme, useComposedRefs, withStaticProperties } from "@tamagui/core";
import type { FocusEvent } from "react";
import { useCallback, useLayoutEffect, useRef } from "react";

const TextAreaFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const TextAreaFieldControl = TextArea.styleable((props, forwardedRef) => {
  const field = FieldApi.use();
  const name = field.name.get();
  const theme = field.theme.get();
  const size = field.size.get();
  const disabled = field.disabled.get();
  const focused = field.focused.get();
  const formattedValue = field.formattedValue.get();

  const { blur, change, focus, mount } = useFieldActions();
  const elementRef = useRef<HTMLTextAreaElement>(null);
  const controlRef = useFieldRef(useComposedRefs(forwardedRef, elementRef));
  const handleChange = useCallback(
    (event: CustomEvent<string>) => {
      change(event.detail);
    },
    [change]
  );
  const handleBlur = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      if (event.currentTarget.contains(event.relatedTarget)) {
        return;
      }

      void blur();
    },
    [blur]
  );

  useLayoutEffect(() => {
    mount(controlRef);
  }, [controlRef, mount]);

  return (
    <Theme name={theme}>
      <TextArea
        ref={controlRef}
        {...props}
        name={name}
        size={size}
        focused={focused}
        disabled={disabled}
        value={formattedValue}
        onFocus={focus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </Theme>
  );
});

export const TextAreaField = withStaticProperties(TextAreaFieldGroup, {
  Label: Field.Label,
  Link: Field.Link,
  Control: TextAreaFieldControl,
  Details: Field.Details,
  Icon: Field.Icon
});
