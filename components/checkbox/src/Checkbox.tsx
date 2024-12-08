/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { getRadius, getSized, getSpaced } from "@cyclone-ui/helpers";
import { Checkbox as TamaguiCheckbox } from "@tamagui/checkbox";
import { isWeb } from "@tamagui/constants";
import {
  GetProps,
  SizeTokens,
  styled,
  VariantSpreadExtras
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { Check, Minus } from "@tamagui/lucide-icons";

const CheckboxGroupFrame = styled(XGroup, {
  name: "Checkbox",

  animation: "normal",
  justifyContent: "space-between",
  alignContent: "center",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$borderColor",
  outlineStyle: "none",

  ...(isWeb
    ? {
        tabIndex: 0
      }
    : {
        focusable: true
      }),

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$accent10"
  },

  focusStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
  },

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineWidth: 3,
    outlineOffset: "$1.25",
    outlineStyle: "solid",
    borderColor: "$borderColorFocus"
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

        const size = getSized(val, {
          scale: 0.5
        });
        const radius = getRadius(val, { circular: props.circular, scale: 0.5 });

        return {
          height: size,
          width: size,
          borderRadius: radius
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
        outlineColor: "$accent10",
        outlineWidth: 3,
        outlineOffset: "$1.25",
        outlineStyle: "solid",
        borderColor: "$borderColorFocus"
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor: "$borderColorDisabled",

        hoverStyle: {
          borderColor: "$borderColorDisabled"
        },

        focusStyle: {
          borderColor: "$borderColorDisabled"
        },

        pressStyle: {
          borderColor: "$borderColorDisabled"
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

  color: "$color",

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
          scale: 0.4
        });

        return {
          height: size,
          width: size
        };
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

const MinusIcon = styled(Minus, {
  name: "CheckboxIndicator",

  color: "$color",

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
          scale: 0.4
        });

        return {
          height: size,
          width: size
        };
      }
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
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
            animation="normal"
            enterStyle={{
              scale: 0.8,
              y: 10,
              opacity: 0.2
            }}
            exitStyle={{
              scale: 0.8,
              y: -10,
              opacity: 0.5
            }}
            justifyContent="center"
            alignItems="center">
            {checked === "indeterminate" ? (
              <MinusIcon size={size} />
            ) : (
              <CheckboxIcon size={size} />
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
