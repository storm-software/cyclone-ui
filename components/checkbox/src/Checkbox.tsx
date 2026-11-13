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

import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormControlAriaProps,
  getSized,
  getSpaced,
  useFieldHasValidationMessage,
  useFieldLabelDefaults,
  useFormControl
} from "@cyclone-ui/helpers";
import { Confirm, Minus } from "@cyclone-ui/icons";
import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
import type { CheckedState } from "@tamagui/checkbox-headless";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useCallback } from "react";

// Box size tokens, one step above the shared compact scale.
const checkboxSizeTokens = { sm: "6xl", md: "7xl", lg: "8xl" } as const;

// A checkbox's field label sits compactly beside it.
const INLINE_LABEL = { inline: { alignItems: "center" } } as const;
const INLINE_LABEL_SM = {
  ...INLINE_LABEL,
  inlineFontSize: "xs"
} as const;

const CheckboxGroupFrame = styled(View, {
  displayName: "Checkbox",
  transition: "200ms",
  justifyContent: "space-between",
  alignContent: "center",
  backgroundColor: "surface",
  // this fixes a flex bug where it overflows container
  boxShadow: "none focus:ring-offset focus-visible:ring-offset",
  borderWidth: 1,
  borderColor:
    "hairline hover:hairline-hovered focus:hairline-active focus-visible:hairline-active",
  outlineStyle: "none",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  borderRadius: "checkbox",
  tabIndex: 0,

  variants: {
    // The v2 `borderRadius: props.circular ? 100_000 : "control"` from this
    // variant is covered by the base `borderRadius` and the `circular` variant.
    // `styled.dynamic` re-brands the helper's carrier with this package's
    // `@tamagui/web` symbol type (runtime no-op; helpers resolves another copy).
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        if (!val) {
          return;
        }

        const size = getSized(checkboxSizeTokens[val]) * 0.8;

        return {
          height: size,
          minHeight: size,
          width: size
        };
      })
    ),

    circular: {
      true: {
        borderRadius: 100_000
      }
    },

    focused: {
      true: {
        borderColor: "primary-active"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "primary hover:primary-hovered"
      }
    },

    disabled: {
      true: {
        backgroundColor: "surface-disabled",
        userSelect: "none",
        cursor: "not-allowed",
        borderColor:
          "primary-disabled hover:primary-disabled press:primary-disabled focus:primary-disabled"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    circular: false,
    focused: false,
    disabled: false
  }
});

type CheckboxGroupFrameProps = GetProps<typeof CheckboxGroupFrame>;

const BaseCheckbox = styled(TamaguiCheckbox, {
  // `name` is a form prop on the v3 checkbox, so use `displayName` here
  displayName: "Checkbox",

  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",

  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((val: FormControlSize) => {
        if (!val) {
          return;
        }

        const space = getSpaced(checkboxSizeTokens[val], {
          scale: 0.05
        });

        return {
          padding: space
        };
      })
    ),

    disabled: {
      true: {
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "md",
    disabled: false
  }
});

export const Checkbox = createStyledHOC(
  BaseCheckbox,
  (
    props: GetProps<typeof BaseCheckbox> & {
      focused?: CheckboxGroupFrameProps["focused"];
      size?: FormControlSize;
      readOnly?: boolean;
    },
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), any prop left unset falls back
    // to the control's state, which connects the checkbox to the form.
    const formControl = useFormControl();
    const {
      focused = formControl?.focused ?? false,
      disabled = formControl?.disabled,
      readOnly = formControl?.readOnly ?? false,
      name = formControl?.name,
      size = formControl?.size ?? "md",
      checked = formControl ? formControl.value || false : true,
      defaultChecked = formControl
        ? formControl.defaultValue || false
        : undefined,
      onCheckedChange,
      onFocus = formControl?.onFocus,
      onBlur = formControl?.onBlur,
      ...rest
    } = props;

    useFieldLabelDefaults(size === "sm" ? INLINE_LABEL_SM : INLINE_LABEL);
    const formOnChange = formControl?.onChange;
    const handleCheckedChange = useCallback(
      (next: CheckedState) => {
        if (readOnly) return;
        formOnChange?.(next);
        onCheckedChange?.(next);
      },
      [formOnChange, onCheckedChange, readOnly]
    );

    const hasValidationMessage = useFieldHasValidationMessage();
    // A shown icon inverts the box: an `emphasis` fill with a `surface` icon.
    const filled = checked !== false;
    const fillColor = disabled ? "primary-disabled" : "emphasis";
    const idleColor = hasValidationMessage
      ? "primary"
      : filled
        ? "emphasis"
        : "hairline";
    const focusColor = hasValidationMessage
      ? "primary-active"
      : "hairline-active";

    const iconSize = getSized(checkboxSizeTokens[size]) * 0.6;

    // The full 3px ring overwhelms the small checkbox, so use the 1px ring.
    const ring = size === "sm" ? "ring-subtle" : "ring";

    return (
      <CheckboxGroupFrame
        focused={focused}
        hasValidationMessage={hasValidationMessage}
        disabled={disabled}
        size={size}
        // Contains the absolutely positioned fill.
        position="relative"
        // A call-site base replaces every lower-tier clause for the property
        // in v3, so restate the v2 frame/variant hover and disabled press here.
        borderColor={`${focused ? focusColor : idleColor} hover:${
          disabled ? "primary-disabled" : "primary-hovered"
        }${disabled ? " press:primary-disabled" : ""} group-hover/field:${
          focused ? focusColor : "primary-hovered"
        } focus:${focusColor} focus-visible:${focusColor}`}
        boxShadow={`focus:${ring} focus-visible:${ring}`}>
        {/* The inverted fill: always mounted, so it can both grow in when an
            icon shows and shrink out after the indicator unmounts. It covers
            the frame's border (a fill clipped inside it leaves a light fringe
            at the corners), so it draws the validation border itself. */}
        <View
          position="absolute"
          inset={-1}
          borderRadius="checkbox"
          borderWidth={1}
          borderColor={
            hasValidationMessage ? (focused ? focusColor : idleColor) : fillColor
          }
          pointerEvents="none"
          transition="200ms"
          backgroundColor={fillColor}
          scale={filled ? 1 : 0.4}
          opacity={filled ? 1 : 0}
        />
        <BaseCheckbox
          ref={forwardedRef}
          // `aria-required` only: a `required` hidden form input can't take
          // focus, so the browser would block a submit without saying why.
          aria-required={formControl?.required ? true : undefined}
          {...getFormControlAriaProps(formControl)}
          {...rest}
          // Names the hidden input the checkbox submits with its form.
          name={name}
          id={name}
          aria-readonly={readOnly || undefined}
          onFocus={onFocus}
          onBlur={onBlur}
          onCheckedChange={handleCheckedChange}
          checked={checked}
          defaultChecked={defaultChecked}
          size={size}
          disabled={disabled}>
          <TamaguiCheckbox.Indicator
            justifyContent="center"
            alignItems="center"
            zIndex={1}>
            {/* The indicator mounts when an icon shows, so the icon draws itself
                in; keyed so switching check ↔ minus redraws too. */}
            <View
              key={String(checked)}
              transition="200ms"
              scale="enter:0.8"
              opacity="enter:0.2"
              // The check's path sits 1/24 right of the icon's center, so nudge
              // it left; a slight drop sits it optically centered in the box.
              x={checked === "indeterminate" ? 0 : -iconSize / 28}
              y={checked === "indeterminate" ? 0 : iconSize / 48}>
              {checked === "indeterminate" ? (
                <Minus variant="bold" size={iconSize} color="surface" />
              ) : (
                <Confirm variant="bold" size={iconSize} color="surface" />
              )}
            </View>
          </TamaguiCheckbox.Indicator>
        </BaseCheckbox>
      </CheckboxGroupFrame>
    );
  },
  {
    displayName: "Checkbox"
  }
);
