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

import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldHasValidationMessage,
  useFieldLabelDefaults,
  useFormControl
} from "@cyclone-ui/helpers";
import { Check } from "@cyclone-ui/vectors";
import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
import type { CheckedState } from "@tamagui/checkbox-headless";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useCallback } from "react";

// A checkbox's field label sits compactly beside it.
const INLINE_LABEL = { inline: { alignItems: "center" } } as const;

const CheckboxGroupFrame = styled(View, {
  displayName: "Checkbox",
  transition: "200ms",
  justifyContent: "space-between",
  alignContent: "center",
  backgroundColor: "surfaceElevated",
  // this fixes a flex bug where it overflows container
  boxShadow: "none focus:ringOffset focus-visible:ringOffset",
  borderWidth: 1,
  borderColor: "border hover:active focus:active focus-visible:active",
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

        const size = getSized(getFormSizeToken(val, "compact")) * 0.8;

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
        borderColor: "active"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "accent hover:active"
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "disabled hover:disabled press:disabled focus:disabled"
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

        const space = getSpaced(getFormSizeToken(val, "compact"), {
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

const CheckboxIcon = styled(Check, {
  displayName: "CheckboxIndicator",
  color: "accent",
  strokeWidth: 3
});

// A plain bar rather than an icon so its thickness can be tuned to read as
// heavy as the check's stroke.
const MinusIcon = styled(View, {
  displayName: "CheckboxIndicator",
  backgroundColor: "accent",
  borderRadius: 9999
});

export const Checkbox = createStyledHOC(
  BaseCheckbox,
  (
    props: GetProps<typeof BaseCheckbox> & {
      focused?: CheckboxGroupFrameProps["focused"];
      size?: FormControlSize;
    },
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), any prop left unset falls back
    // to the control's state, which connects the checkbox to the form.
    const formControl = useFormControl();
    useFieldLabelDefaults(INLINE_LABEL);
    const {
      focused = formControl?.focused ?? false,
      disabled = formControl?.disabled,
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
    const formOnChange = formControl?.onChange;
    const handleCheckedChange = useCallback(
      (next: CheckedState) => {
        formOnChange?.(next);
        onCheckedChange?.(next);
      },
      [formOnChange, onCheckedChange]
    );
    const hasValidationMessage = useFieldHasValidationMessage();
    const idleColor = hasValidationMessage ? "accent" : "border";
    const focusColor = hasValidationMessage ? "active" : "borderActive";
    // The full 3px ring overwhelms the small checkbox, so use the 1px ring.
    const ring = size === "sm" ? "ringSubtleOffset" : "ringOffset";

    return (
      <CheckboxGroupFrame
        focused={focused}
        hasValidationMessage={hasValidationMessage}
        disabled={disabled}
        size={size}
        // A call-site base replaces every lower-tier clause for the property
        // in v3, so restate the v2 frame/variant hover and disabled press here.
        borderColor={`${focused ? focusColor : idleColor} hover:${disabled ? "disabled" : "active"}${disabled ? " press:disabled" : ""} group-hover/field:${focused ? focusColor : "active"} focus:${focusColor} focus-visible:${focusColor}`}
        boxShadow={`focus:${ring} focus-visible:${ring}`}>
        <BaseCheckbox
          ref={forwardedRef}
          {...rest}
          id={name}
          onFocus={onFocus}
          onBlur={onBlur}
          onCheckedChange={formOnChange ? handleCheckedChange : onCheckedChange}
          checked={checked}
          defaultChecked={defaultChecked}
          size={size}
          disabled={disabled}>
          <TamaguiCheckbox.Indicator
            justifyContent="center"
            alignItems="center"
            zIndex={1}
            y={checked === "indeterminate" ? undefined : -1}>
            {checked === "indeterminate" ? (
              <View
                transition="200ms"
                display="flex"
                justifyContent="center"
                alignItems="center"
                scale="enter:0.8 exit:0.8"
                y="enter:10px exit:-10px"
                opacity="enter:0.2 exit:0.5">
                <MinusIcon
                  width={getSized(getFormSizeToken(size, "compact")) * 0.42}
                  height={getSized(getFormSizeToken(size, "compact")) * 10}
                  backgroundColor={focused ? focusColor : "accent"}
                />
              </View>
            ) : (
              <CheckboxIcon
                width={getSized(getFormSizeToken(size, "compact")) * 0.6}
                height={getSized(getFormSizeToken(size, "compact")) * 0.6}
                color={focused ? focusColor : "accent"}
              />
            )}
          </TamaguiCheckbox.Indicator>
        </BaseCheckbox>
      </CheckboxGroupFrame>
    );
  },
  {
    displayName: "Checkbox"
  }
);
