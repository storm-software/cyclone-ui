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

import { getSpaced } from "@cyclone-ui/helpers";
import { Check } from "@cyclone-ui/vectors";
import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
import type { GetProps, SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { getVariableValue, styled, View } from "@tamagui/core";
import { Minus } from "@tamagui/lucide-icons-2";

const CheckboxGroupFrame = styled(View, {
  name: "Checkbox",

  transition: "200ms",
  justifyContent: "space-between",
  alignContent: "center",
  backgroundColor: "$backgroundElevated",
  boxShadow: "none",
  borderWidth: 1,
  borderColor: "$border",
  outlineStyle: "none",
  tabIndex: 0,

  // this fixes a flex bug where it overflows container
  minWidth: 0,
  borderRadius: "$control",

  hoverStyle: {
    borderColor: "$borderHover"
  },

  focusStyle: {
    boxShadow: "$ring",
    borderColor: "$borderFocused"
  },

  focusVisibleStyle: {
    boxShadow: "$ring",
    borderColor: "$borderFocused"
  },

  variants: {
    size: {
      "...size": (
        val: SizeTokens | number,
        { props, tokens }: VariantSpreadExtras<any>
      ) => {
        if (!val || props.circular) {
          return;
        }

        const size = getVariableValue((tokens.size as any)[val] ?? val) * 0.8;

        return {
          height: size,
          minHeight: size,
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
        borderColor: "$borderFocused"
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$borderDisabled",

        hoverStyle: {
          borderColor: "$borderDisabled"
        },

        focusStyle: {
          borderColor: "$borderDisabled"
        },

        pressStyle: {
          borderColor: "$borderDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$6xl",
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
    size: "$6xl",
    disabled: false
  }
});

const CheckboxIcon = styled(Check, {
  name: "CheckboxIndicator",

  color: "$foregroundInverse",
  height: "90%",
  width: "90%",
  strokeWidth: 3
});

const MinusIcon = styled(Minus, {
  name: "CheckboxIndicator",

  color: "$foregroundInverse",
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
      size = "$6xl",
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
            alignItems="center"
            zIndex={1}
            y={checked === "indeterminate" ? undefined : -1}>
            {checked === "indeterminate" ? (
              <View
                transition="200ms"
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
