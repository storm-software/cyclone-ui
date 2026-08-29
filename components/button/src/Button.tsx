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

import { getButtonSized, getSized } from "@cyclone-ui/helpers";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type {
  ColorTokens,
  GetProps,
  SizeTokens,
  ThemeableProps,
  UnionableNumber,
  UnionableString,
  Variable,
  VariantSpreadExtras
} from "@tamagui/core";
import { Text, View, createStyledContext, styled } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { ThemeableStack } from "@tamagui/stacks";
import type { TextContextStyles, TextParentStyles } from "@tamagui/text";
import { useCallback, useMemo } from "react";
import type { GestureResponderEvent } from "react-native";

type ButtonVariant =
  "surface" | "subtle" | "inverse" | "outlined" | "ghost" | "link";

type BorderRadiusSizeTokens =
  | number
  | `$${string}`
  | `$${number}`
  | "unset"
  | `$${string}.${string}`
  | `$${string}.${number}`
  | UnionableNumber
  | UnionableString
  | Variable<any>
  | any
  | undefined;

export type ButtonContextProps = TextContextStyles & {
  /**
   * The size of the button
   *
   * @defaultValue "$5xl"
   */
  size: SizeTokens;

  /**
   * The variant style of the button
   *
   * @defaultValue "surface"
   */
  variant: ButtonVariant;

  /**
   * The radius of the button's border
   *
   * @defaultValue "$button"
   */
  borderRadius: BorderRadiusSizeTokens;

  /**
   * Override the font color of the button
   */
  color?: ColorTokens | string;

  /**
   * remove default styles
   *
   * @defaultValue false
   */
  unstyled: boolean;

  /**
   * Should the button have a circular shape
   *
   * @defaultValue false
   */
  circular: boolean;

  /**
   * Should the button have a ringed outline
   *
   * @defaultValue false
   */
  ringed: boolean;

  /**
   * Should the button be disabled
   *
   * @defaultValue false
   */
  disabled: boolean;

  /**
   * Should the default padding be removed
   *
   * @defaultValue false
   */
  noPadding: boolean;

  /**
   * Should the pressed, scale animation be applied
   *
   * @defaultValue true
   */
  animate: boolean;
};

type ButtonExtraProps = TextParentStyles &
  ThemeableProps &
  Partial<ButtonContextProps> & {
    /**
     * An alternate way to provide an onPress handler
     */
    onClick?: null | ((event?: any) => void);
  };

export const ButtonContext = createStyledContext<ButtonContextProps>({
  size: "$10xl",
  variant: "surface",
  borderRadius: "$button",
  unstyled: false,
  circular: false,
  ringed: false,
  disabled: false,
  noPadding: false,
  animate: true
});

const ButtonFrame = styled(View, {
  name: "Button",
  context: ButtonContext,
  render: "button",
  role: "button",
  userSelect: "none",
  transition: "200ms",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  display: "flex",
  flexGrow: 1,
  flexShrink: 0,
  cursor: "pointer",
  flexWrap: "nowrap",
  flexDirection: "row",
  overflow: "hidden",
  borderRadius: "$button",
  minWidth: "fit-content",
  paddingHorizontal: "$2xl",

  focusVisibleStyle: {
    boxShadow: "$ring"
  },

  variants: {
    variant: {
      surface: {
        borderWidth: 1,
        borderColor: "$foreground",
        backgroundColor: "$backgroundElevated",

        hoverStyle: {
          backgroundColor: "$backgroundElevatedHover",
          borderColor: "$foregroundHover"
        },

        pressStyle: {
          backgroundColor: "$backgroundElevatedPressed",
          borderColor: "$foregroundPressed"
        }
      },

      subtle: {
        borderWidth: 1,
        borderColor: "$borderSubtle",
        backgroundColor: "$backgroundSubtle",

        hoverStyle: {
          backgroundColor: "$backgroundSubtleHover",
          borderColor: "$borderSubtleHover"
        },

        pressStyle: {
          backgroundColor: "$backgroundSubtlePressed"
        }
      },

      inverse: {
        borderWidth: 1,
        borderColor: "$border",
        backgroundColor: "$background",

        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderHover"
        },

        pressStyle: {
          backgroundColor: "$backgroundPressed"
        }
      },

      outlined: {
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "$background",

        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$backgroundHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$backgroundPressed"
        }
      },

      ghost: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "transparent"
        },

        pressStyle: {
          backgroundColor: "$backgroundElevatedPressed",
          borderWidth: 0,
          borderColor: "transparent"
        }
      },

      link: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "transparent"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderWidth: 0,
          borderColor: "transparent"
        }
      }
    },

    bordered: {
      false: {
        borderColor: "transparent",
        borderWidth: 0,

        hoverStyle: {
          borderColor: "transparent",
          borderWidth: 0
        }
      }
    },

    // Height/padding only. Avoid a `size` / `...size` variant — Tamagui (and its
    // compiler) treat those as a width+height shorthand and clip the label.
    frameSize: {
      ":string": getButtonSized,
      ":number": getButtonSized,
      true: (_val: boolean, extras: VariantSpreadExtras<any>) =>
        getButtonSized("$10xl", extras)
    },

    disabled: {
      true: (_val: boolean, { props }: VariantSpreadExtras<any>) => {
        const result = {
          cursor: "not-allowed",
          pointerEvents: "none"
        } as Partial<VariantSpreadExtras<any>>["props"];

        const variant = props.variant as ButtonVariant | undefined;
        if (variant === "surface") {
          result.backgroundColor = "$backgroundElevatedDisabled";
          result.borderColor = "$borderDisabled";
        } else if (variant === "subtle") {
          result.backgroundColor = "$backgroundSubtleDisabled";
          result.borderColor = "$borderSubtleDisabled";
        } else if (variant === "inverse") {
          result.backgroundColor = "$backgroundDisabled";
          result.borderColor = "$borderDisabled";
        } else if (variant === "outlined") {
          result.backgroundColor = "transparent";
          result.borderColor = "$borderDisabled";
        } else if (variant === "ghost" || variant === "link") {
          result.backgroundColor = "transparent";
          result.borderColor = "transparent";
        }

        return result;
      }
    },

    ringed: {
      true: {
        hoverStyle: {
          boxShadow: "$ring"
        },
        pressStyle: {
          boxShadow: "$ring"
        }
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    noPadding: {
      true: {
        padding: 0
      }
    },

    animate: {
      true: {
        pressStyle: {
          scale: 0.95
        }
      }
    }
  } as const,

  defaultVariants: {
    variant: "surface",
    frameSize: "$5xl",
    disabled: false,
    ringed: false,
    circular: false,
    bordered: true,
    noPadding: false,
    animate: false
  }
});

const ButtonTextFrame = styled(Text, {
  name: "ButtonText",
  context: ButtonContext,

  render: "span",
  transition: "200ms",
  userSelect: "none",
  borderRadius: 0,
  cursor: "pointer",
  textAlign: "center",
  textTransform: "capitalize",
  whiteSpace: "nowrap",
  fontFamily: "$heading-sm",
  fontWeight: "$true",
  fontSize: "$true",

  hoverStyle: {
    color: "$foreground"
  },

  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "auto",
  minWidth: "fit-content",
  zIndex: "$20",

  variants: {
    variant: {
      surface: {
        color: "$foreground"
      },

      subtle: {
        color: "$foregroundInverse"
      },

      inverse: {
        color: "$foregroundInverse"
      },

      outlined: {
        color: "$foreground"
      },

      ghost: {
        color: "$foreground"
      },

      link: {
        color: "$foreground",
        textDecorationLine: "underline",
        textDecorationColor: "$foreground",
        textDecorationStyle: "solid"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        pointerEvents: "none",
        color: "$foregroundDisabled",
        textDecoration: "none",

        hoverStyle: {
          color: "$foregroundDisabled",
          textDecoration: "none"
        },

        pressStyle: {
          color: "$foregroundDisabled",
          textDecoration: "none"
        }
      }
    }
  } as const,

  defaultVariants: {
    variant: "surface",
    disabled: false
  }
});

const colorForVariant = (
  variant: ButtonVariant,
  disabled: boolean,
  color?: ColorTokens | string
): ThemeableIconProps["color"] => {
  if (variant === "inverse" || variant === "subtle") {
    return (
      disabled ? "$foregroundInverseDisabled" : (color ?? "$foregroundInverse")
    ) as ThemeableIconProps["color"];
  }

  return (
    disabled ? "$foregroundDisabled" : (color ?? "$foreground")
  ) as ThemeableIconProps["color"];
};

const hoverColorForVariant = (variant: ButtonVariant, disabled: boolean) => {
  if (disabled) {
    if (variant === "inverse" || variant === "subtle") {
      return "$foregroundInverseDisabled";
    }

    return "$foregroundDisabled";
  }

  if (variant === "inverse" || variant === "subtle") {
    return "$foregroundInverseHover";
  }

  if (variant === "ghost" || variant === "outlined") {
    return "$foregroundGhostHover";
  }

  return "$foregroundHover";
};

const ButtonText = ButtonTextFrame.styleable<{ size?: SizeTokens }>(
  ({ children, size: _size, ...props }, forwardedRef) => {
    const { variant, disabled, color } = ButtonContext.useStyledContext();

    return (
      <ButtonTextFrame
        ref={forwardedRef}
        variant={variant}
        disabled={disabled}
        color={colorForVariant(variant, disabled, color)}
        {...props}
        borderRadius={0}
        $group-button-hover={{
          color: hoverColorForVariant(variant, disabled),
          textDecorationColor: hoverColorForVariant(variant, disabled)
        }}>
        {children}
      </ButtonTextFrame>
    );
  },
  {
    staticConfig: { componentName: "ButtonText" }
  }
);

const ButtonIcon = View.styleable<{ size?: SizeTokens }>(
  ({ children, size, ...props }, forwardedRef) => {
    const {
      variant,
      disabled,
      color,
      size: contextSize
    } = ButtonContext.useStyledContext();
    const adjusted = useMemo(
      () => getSized(size ?? contextSize, { shift: -6 }),
      [size, contextSize]
    );

    return (
      <View
        ref={forwardedRef}
        zIndex="$20"
        alignItems="center"
        flexGrow={0}
        flexShrink={0}>
        <ThemeableIcon
          {...props}
          disabled={disabled}
          size={adjusted}
          color={colorForVariant(variant, disabled, color)}
          $group-button-hover={{
            color: hoverColorForVariant(variant, disabled)
          }}>
          {children}
        </ThemeableIcon>
      </View>
    );
  },
  {
    staticConfig: { componentName: "ButtonIcon" }
  }
);

const ButtonGhostBackground = styled(ThemeableStack, {
  name: "Button",
  context: ButtonContext,

  transition: "200ms",
  opacity: 0,
  zIndex: "$10",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "$backgroundHover",
  borderColor: "$border",
  pointerEvents: "none",

  variants: {
    bordered: {
      false: {
        borderWidth: 0,

        hoverStyle: {
          borderWidth: 0
        }
      },
      true: {
        borderWidth: 1,

        hoverStyle: {
          borderWidth: 1,
          borderColor: "$borderHover"
        }
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,

  defaultVariants: {
    bordered: true,
    circular: false
  }
});

export type ButtonProps = ButtonExtraProps &
  Omit<GetProps<typeof ButtonFrame>, "frameSize" | "size">;

const ButtonContainerImpl = ButtonFrame.styleable<ButtonProps>(
  (
    {
      variant = "surface",
      size = "$10xl",
      disabled = false,
      circular = false,
      bordered = true,
      noPadding = false,
      ringed = false,
      animate = false,
      children,
      onPress,
      onClick,
      ...props
    },
    forwardedRef
  ) => {
    const handlePress = useCallback(
      (event: GestureResponderEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (!disabled) {
          if (onPress) {
            onPress?.(event);
          }
          if (onClick) {
            onClick?.(event);
          }
        }
      },
      [disabled, onPress, onClick]
    );

    const frame = (
      <ButtonFrame
        group={"button" as any}
        ref={forwardedRef}
        {...props}
        onPress={handlePress}
        frameSize={size}
        circular={circular}
        bordered={bordered}
        variant={variant}
        disabled={disabled}
        noPadding={noPadding}
        ringed={ringed}
        animate={animate}
        width={circular ? undefined : props.width}>
        {variant === "ghost" && (
          <ButtonGhostBackground
            circular={circular}
            bordered={bordered}
            width="100%"
            $group-button-hover={{
              opacity: disabled ? 0 : 0.25
            }}
          />
        )}
        {children}
      </ButtonFrame>
    );

    return (
      <ButtonContext.Provider
        {...props}
        variant={variant}
        size={size}
        disabled={disabled}
        circular={circular}
        noPadding={noPadding}
        ringed={ringed}
        animate={animate}>
        {frame}
      </ButtonContext.Provider>
    );
  },
  {
    staticConfig: { componentName: "Button" }
  }
);

export const Button = withStaticProperties(ButtonContainerImpl, {
  Text: ButtonText,
  Icon: ButtonIcon
});
