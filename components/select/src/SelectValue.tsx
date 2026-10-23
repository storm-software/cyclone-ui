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

"use client";

import { BodyText } from "@cyclone-ui/body-text";
import type { FieldLabelPlacement, FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFieldLabelInset,
  useFieldLabelPlacement,
  useFieldShouldShowPlaceholder,
  useFieldVariant,
  useFormControl
} from "@cyclone-ui/helpers";
import type { InputVariant } from "@cyclone-ui/input";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  Text,
  Theme,
  useComposedRefs,
  View
} from "@tamagui/core";
import { getSelectContentSize, SelectContext } from "./utilities";

const SelectValueFrame = styled(Text, {
  // `name` is a plain prop in v3, so the primitive uses `displayName`
  displayName: "SelectValue",
  context: SelectContext,
  transition: "200ms",
  cursor: "pointer",
  color: "primary hover:primary-hovered",
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  backgroundColor: "hover:transparent focus:transparent",

  variants: {
    // `styled.dynamic` re-brands the helper's carrier with this package's
    // `@tamagui/web` symbol type (runtime no-op; helpers resolves another copy).
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        const { fontSize, lineHeight, valuePaddingLeft, valuePaddingRight } =
          getSelectContentSize(val);

        return {
          fontSize,
          lineHeight: `${lineHeight}px`,
          paddingLeft: valuePaddingLeft,
          paddingRight: valuePaddingRight
        };
      })
    ),

    variant: styled.dynamic<InputVariant>(),

    // Styled by the `.resolve` below because the inset depends on `size`.
    labelPlacement: styled.dynamic<FieldLabelPlacement>(),

    placeholding: {
      true: {
        color: "primary-disabled"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        userSelect: "none",
        color:
          "primary-disabled hover:primary-disabled press:primary-disabled focus:primary-disabled"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    variant: "outlined",
    disabled: false,
    placeholding: false
  }
}).resolve(props => ({
  // An underlined control's text starts flush with its left edge.
  paddingLeft: props.variant === "underlined" ? 0 : undefined,
  ...(props.labelPlacement
    ? {
        // Drop the text under a floating label by the extra height an inset
        // label adds over a border one (see `getFieldLabelInset`).
        paddingTop:
          getSelectContentSize(props.size as FormControlSize | undefined)
            .valuePaddingLeft +
          getFieldLabelInset(
            props.labelPlacement as FieldLabelPlacement,
            props.size as FormControlSize | undefined
          ) -
          getFieldLabelInset("border")
      }
    : undefined)
}));

export const SelectValue = createStyledHOC(
  SelectValueFrame,
  (
    {
      children,
      placeholder: placeholderProp,
      ...props
    }: GetProps<typeof SelectValueFrame> & {
      placeholder?: string;
    },
    forwardedRef
  ) => {
    const { disabled, size, value, variant } = SelectContext.useStyledContext();
    const labelPlacement = useFieldLabelPlacement();
    // Inside a form control (such as `Field`), the value registers with the
    // form, and a resting floating label hides the placeholder.
    const formControl = useFormControl();
    const ref = useComposedRefs(forwardedRef, formControl?.inputRef);
    useFieldVariant(placeholderProp);
    const shouldShowPlaceholder = useFieldShouldShowPlaceholder(value);
    const placeholder =
      !formControl || (!value && shouldShowPlaceholder)
        ? placeholderProp
        : undefined;
    // Without children, the selected value itself, then the placeholder.
    const content = children ?? (value || placeholder);
    const placeholding = !!placeholder && content === placeholder && !disabled;

    return (
      <Theme name="base">
        <View flex={1} minWidth={0}>
          <SelectValueFrame
            pointerEvents="none"
            ref={ref}
            {...props}
            size={size}
            variant={variant}
            labelPlacement={labelPlacement}
            disabled={disabled}
            placeholding={placeholding}>
            <BodyText
              // Remounts when the placeholder appears (e.g. as a floating label
              // lifts), so it fades in with the field's 200ms entrance instead of
              // popping in; see `InputSeparator` for why `transition` names
              // `enter`.
              key={placeholding ? "placeholder" : "value"}
              {...(placeholding && {
                opacity: "enter:0",
                transition: { duration: "200ms", enter: "200ms" }
              })}
              render="span"
              color="inherit"
              fontSize={getSelectContentSize(size).fontSize}
              lineHeight={`${getSelectContentSize(size).lineHeight}px`}>
              {content}
            </BodyText>
          </SelectValueFrame>
        </View>
      </Theme>
    );
  },
  {
    displayName: "SelectValue"
  }
);
