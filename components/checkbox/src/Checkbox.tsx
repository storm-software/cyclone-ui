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

import { getSized, getSpaced } from "@cyclone-ui/helpers";
import { Check } from "@cyclone-ui/vectors";
import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
import type { GetProps, SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { Minus } from "@tamagui/lucide-icons-2";

const CheckboxGroupFrame = styled(XGroup, {
  name: "Checkbox",

  transition: "medium",
  justifyContent: "space-between",
  alignContent: "center",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$borderPrimary",
  outlineStyle: "none",
  tabIndex: 0,

  // this fixes a flex bug where it overflows container
  minWidth: 0,
  borderRadius: "$control",

  hoverStyle: {
    borderColor: "$borderPrimaryHover"
  },

  focusStyle: {
    outlineColor: "$borderAccent",
    outlineWidth: 3,
    outlineOffset: "$lg",
    outlineStyle: "solid",
    borderColor: "$borderAccent"
  },

  focusVisibleStyle: {
    outlineColor: "$borderAccent",
    outlineWidth: 3,
    outlineOffset: "$lg",
    outlineStyle: "solid",
    borderColor: "$borderAccent"
  },

  variants: {
    size: {
      "...size": (
        val: SizeTokens | number,
        { props }: VariantSpreadExtras<any>
      ) => {
        if (!val || props.circular) {
          return;
        }

        const size = getSized(val, {
          scale: 0.5
        });

        return {
          height: size,
          width: size,
          borderRadius: props.circular ? 100_000 : "$control"
        };
      }
    },

    circular: {
      true: {
        borderRadius: 100_000
      }
    },

    focused: {
      true: {
        outlineColor: "$borderAccent",
        outlineWidth: 3,
        outlineOffset: "$lg",
        outlineStyle: "solid",
        borderColor: "$borderAccent"
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$borderPrimaryDisabled",

        hoverStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        focusStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        pressStyle: {
          borderColor: "$borderPrimaryDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    circular: false,
    focused: false,
    disabled: false
  }
});

type CheckboxGroupFrameProps = GetProps<typeof CheckboxGroupFrame>;

const BaseCheckbox = styled(TamaguiCheckbox, {
  name: "Checkbox",

  unstyled: true,
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",

  variants: {
    size: {
      "...size": (val: SizeTokens | number) => {
        if (!val) {
          return;
        }

        const space = getSpaced(val, { scale: 0.05 });

        return {
          padding: space
        };
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false
  }
});

const CheckboxIcon = styled(Check, {
  name: "CheckboxIndicator",

  color: "$foregroundOnPrimary",
  height: "95%",
  width: "90%",
  strokeWidth: 3
});

const MinusIcon = styled(Minus, {
  name: "CheckboxIndicator",

  color: "$foregroundOnPrimary",
  width: "90%",
  height: "100%",
  strokeWidth: 5
});

export const Checkbox = BaseCheckbox.styleable<{
  focused?: CheckboxGroupFrameProps["focused"];
}>(
  (
    {
      focused = false,
      disabled,
      name,
      size = "$true",
      checked = false,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <CheckboxGroupFrame focused={focused} disabled={disabled} size={size}>
        <BaseCheckbox
          ref={forwardedRef}
          {...props}
          id={name}
          checked={checked}
          size={size}
          disabled={disabled}>
          <TamaguiCheckbox.Indicator
            justifyContent="center"
            alignItems="center">
            {checked === "indeterminate" ? (
              <View
                transition="medium"
                display="flex"
                justifyContent="center"
                alignItems="center"
                enterStyle={{
                  scale: 0.8,
                  y: 10,
                  opacity: 0.2
                }}
                exitStyle={{
                  scale: 0.8,
                  y: -10,
                  opacity: 0.5
                }}>
                <MinusIcon />
              </View>
            ) : (
              <CheckboxIcon />
            )}
          </TamaguiCheckbox.Indicator>
        </BaseCheckbox>
      </CheckboxGroupFrame>
    );
  },
  {
    staticConfig: { componentName: "Checkbox" }
  }
);
