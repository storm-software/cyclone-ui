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

import { Field, useFieldHasValidationMessage } from "@cyclone-ui/field";
import type { RatingProps } from "@cyclone-ui/rating";
import { Rating } from "@cyclone-ui/rating";
import { FieldApi, useFieldActions } from "@cyclone-ui/state/form";
import type { TamaguiElement } from "@tamagui/core";
import { createStyledHOC, withStaticProperties } from "@tamagui/core";
import { forwardRef, useCallback } from "react";

const RatingFieldGroup = createStyledHOC(Field, (props, forwardedRef) => {
  const { children, ...rest } = props;

  return (
    <Field ref={forwardedRef} {...rest}>
      {children}
    </Field>
  );
});

const RatingFieldControl = forwardRef<TamaguiElement, RatingProps>(
  (
    { value: controlledValue, onChange, emptyColor, ...props },
    forwardedRef
  ) => {
    const { focus, change, blur } = useFieldActions<number | null>();
    const hasValidationMessage = useFieldHasValidationMessage();

    const field = FieldApi.use();
    const name = field.name.get();
    const disabled = field.disabled.get();
    const value = field.value.get();

    const handleChange = useCallback(
      (next: number | null) => {
        void change(next);
        onChange?.(next);
      },
      [change, onChange]
    );

    return (
      <Rating
        ref={forwardedRef}
        {...props}
        // The field label's `htmlFor` targets this id, and the Tamagui `Label`
        // links it back to the rating with `aria-labelledby`.
        id={name}
        size={field.size.get()}
        onFocus={focus}
        onBlur={blur}
        onChange={handleChange}
        value={
          controlledValue === undefined ? (value ?? null) : controlledValue
        }
        emptyColor={
          emptyColor ?? (hasValidationMessage ? "accent" : "hairline")
        }
        disabled={disabled}
      />
    );
  }
);

RatingFieldControl.displayName = "RatingFieldControl";

export const RatingField = withStaticProperties(RatingFieldGroup, {
  Label: Field.Label,
  Link: Field.Link,
  Control: RatingFieldControl,
  Details: Field.Details
});
