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

import { useFieldHasValidationMessage } from "@cyclone-ui/field";
import {
  formSizeVariants,
  getFormSizeToken,
  getSized,
  getSpaced,
  type FormControlSize
} from "@cyclone-ui/helpers";
import { Check } from "@cyclone-ui/vectors";
import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
import type { GetProps, VariantSpreadExtras } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import { Minus } from "@tamagui/lucide-icons-2";

const CheckboxGroupFrame = styled(View, {
  name: "Checkbox",

  transition: "200ms",
  justifyContent: "space-between",
  alignContent: "center",
  backgroundColor: "$surfaceElevated",
  boxShadow: "none",
  borderWidth: 1,
  borderColor: "$hairline",
  outlineStyle: "none",
  tabIndex: 0,

  // this fixes a flex bug where it overflows container
  minWidth: 0,
  borderRadius: "$control",

  hoverStyle: {
    borderColor: "$accentHover"
  },

  focusStyle: {
    boxShadow: "$ringOffset",
    borderColor: "$accentActive"
  },

  focusVisibleStyle: {
    boxShadow: "$ringOffset",
    borderColor: "$accentActive"
  },

  variants: {
    size: formSizeVariants(
      (val: FormControlSize, { props }: VariantSpreadExtras<any>) => {
        if (!val) {
          return;
        }

        const size = getSized(getFormSizeToken(val, "compact")) * 0.8;

        return {
          height: size,
          minHeight: size,
          width: size,
          borderRadius: props.circular ? 100_000 : "$control"
        };
      }
    ),

    circular: {
      true: {
        borderRadius: 100_000
      }
    },

    focused: {
      true: {
        borderColor: "$accentActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "$accent",
        hoverStyle: {
          borderColor: "$accentHover"
        }
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$accentDisabled",

        hoverStyle: {
          borderColor: "$accentDisabled"
        },

        focusStyle: {
          borderColor: "$accentDisabled"
        },

        pressStyle: {
          borderColor: "$accentDisabled"
        }
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
  name: "Checkbox",

  unstyled: true,
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",

  variants: {
    size: formSizeVariants((val: FormControlSize) => {
      if (!val) {
        return;
      }

      const space = getSpaced(getFormSizeToken(val, "compact"), {
        scale: 0.05
      });

      return {
        padding: space
      };
    }),

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
  name: "CheckboxIndicator",

  color: "$accent",
  strokeWidth: 3
});

const MinusIcon = styled(Minus, {
  name: "CheckboxIndicator",

  color: "$accent",
  width: "92%",
  height: "100%",
  strokeWidth: 6
});

export const Checkbox = BaseCheckbox.styleable<{
  focused?: CheckboxGroupFrameProps["focused"];
  size?: FormControlSize;
}>(
  (
    { focused = false, disabled, name, size = "md", checked = true, ...props },
    forwardedRef
  ) => {
    const hasValidationMessage = useFieldHasValidationMessage();
    const idleColor = hasValidationMessage ? "$accent" : "$hairline";
    const focusColor = hasValidationMessage
      ? "$accentActive"
      : "$hairlineActive";

    return (
      <CheckboxGroupFrame
        focused={focused}
        hasValidationMessage={hasValidationMessage}
        disabled={disabled}
        size={size}
        borderColor={focused ? focusColor : idleColor}
        focusStyle={{ boxShadow: "$ringOffset", borderColor: focusColor }}
        focusVisibleStyle={{
          boxShadow: "$ringOffset",
          borderColor: focusColor
        }}
        $group-field-hover={{
          borderColor: focused ? focusColor : "$accentHover"
        }}>
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
                <MinusIcon color={focused ? focusColor : "$accent"} />
              </View>
            ) : (
              <CheckboxIcon
                width={getSized(getFormSizeToken(size, "compact")) * 0.6}
                height={getSized(getFormSizeToken(size, "compact")) * 0.6}
                color={focused ? focusColor : "$accent"}
              />
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
