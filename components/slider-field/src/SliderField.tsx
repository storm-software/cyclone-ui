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

import { Field, getFieldLabelId } from "@cyclone-ui/field";
import type { SliderProps, SliderValue } from "@cyclone-ui/slider";
import { Slider } from "@cyclone-ui/slider";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import type { TamaguiElement } from "@tamagui/core";
import { createStyledHOC, withStaticProperties } from "@tamagui/core";
import type { FocusEvent } from "react";
import { forwardRef, useCallback } from "react";

const SliderFieldGroup = createStyledHOC(Field, (props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const SliderFieldControl = forwardRef<TamaguiElement, SliderProps>(
  (
    { value: controlledValue, defaultValue, onChange, min = 0, ...props },
    forwardedRef
  ) => {
    const { focus, change, blur } = useFieldActions<SliderValue>();

    const field = FieldApi.use();
    const name = field.name.get();
    const disabled = field.disabled.get();
    const value = field.value.get();

    const handleChange = useCallback(
      (next: SliderValue, activeThumb: number) => {
        void change(next);
        onChange?.(next, activeThumb);
      },
      [change, onChange]
    );

    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        // Moving focus between the thumbs of a range slider stays in the field.
        if (
          (
            event.currentTarget as unknown as {
              contains: (target: EventTarget | null) => boolean;
            }
          ).contains(event.relatedTarget)
        ) {
          return;
        }

        void blur();
      },
      [blur]
    );

    return (
      <Slider
        ref={forwardedRef}
        // The thumbs are not labelable elements, so they reference the field
        // label by id rather than through its `htmlFor`.
        aria-labelledby={getFieldLabelId(name)}
        {...props}
        name={name}
        min={min}
        size={field.size.get()}
        onFocus={focus}
        onBlur={handleBlur}
        onChange={handleChange}
        // A slider always shows a value, so until the form has one it shows
        // `defaultValue` (an array for a range), or the minimum.
        value={controlledValue ?? value ?? defaultValue ?? min}
        disabled={disabled}
      />
    );
  }
);

SliderFieldControl.displayName = "SliderFieldControl";

export const SliderField = withStaticProperties(SliderFieldGroup, {
  Label: Field.Label,
  Link: Field.Link,
  Control: SliderFieldControl,
  Details: Field.Details
});
