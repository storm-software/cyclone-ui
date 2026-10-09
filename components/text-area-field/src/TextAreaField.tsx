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
import type { TextAreaProps } from "@cyclone-ui/text-area";
import { TextArea } from "@cyclone-ui/text-area";
import {
  createStyledHOC,
  Theme,
  useComposedRefs,
  withStaticProperties
} from "@tamagui/core";
import { useCallback, useLayoutEffect, useRef } from "react";

const TextAreaFieldGroup = createStyledHOC(Field, (props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const TextAreaFieldLabel = createStyledHOC(
  Field.Label,
  ({ variant = "floating", ...props }, forwardedRef) => (
    <Field.Label ref={forwardedRef} {...props} variant={variant} />
  )
);

// Typed as `TextArea`: wrapping an HOC-made component otherwise infers `any`
// props, and the inferred type is not portable in declarations.
const TextAreaFieldControl: typeof TextArea = createStyledHOC(
  TextArea,
  (props: TextAreaProps, forwardedRef) => {
    const field = FieldApi.use();
    const name = field.name.get();
    const theme = field.theme.get();
    const size = field.size.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const formattedValue = field.formattedValue.get();
    const variant = useFieldVariant(props.placeholder);
    const shouldShowPlaceholder = useFieldShouldShowPlaceholder(formattedValue);

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
      // Tamagui v3 types `onBlur` as an intersection of the web and native
      // handlers; this handler reads the web focus event.
      (event: any) => {
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
          variant={variant}
          disabled={disabled}
          placeholder={shouldShowPlaceholder ? props.placeholder : undefined}
          value={formattedValue}
          onFocus={focus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Theme>
    );
  }
);

export const TextAreaField = withStaticProperties(TextAreaFieldGroup, {
  Label: TextAreaFieldLabel,
  Link: Field.Link,
  Control: TextAreaFieldControl,
  Details: Field.Details,
  Icon: Field.Icon
});
