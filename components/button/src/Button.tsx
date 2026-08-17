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

import {
  getButtonSized,
  getFontSizedFromSize,
  getSized
} from "@cyclone-ui/helpers";
import { LabelText } from "@cyclone-ui/label-text";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type {
  ColorTokens,
  GetProps,
  SizeTokens,
  TextProps,
  ThemeableProps,
  UnionableNumber,
  UnionableString,
  Variable,
  VariantSpreadExtras
} from "@tamagui/core";
import {
  Theme,
  View,
  createStyledContext,
  styled,
  useThemeName
} from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { LinearGradient } from "@tamagui/linear-gradient";
import { ThemeableStack } from "@tamagui/stacks";
import type { TextContextStyles, TextParentStyles } from "@tamagui/text";
import { useCallback, useMemo } from "react";
import type { GestureResponderEvent } from "react-native";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "outlined"
  | "gradient"
  | "ghost"
  | "glass"
  | "link";

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
   * @defaultValue "$true"
   */
  size: SizeTokens;

  /**
   * The variant style of the button
   *
   * @defaultValue "secondary"
   */
  variant: ButtonVariant;

  /**
   * The radius of the button's border
   *
   * @defaultValue "$true"
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
  size: "$true",
  variant: "tertiary",
  borderRadius: "$true",
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

  tag: "button",
  role: "button",
  // focusable: false,
  userSelect: "none",

  animation: "normal",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderColor: "$borderPrimary",
  borderWidth: 1,
  flexWrap: "nowrap",
  flexDirection: "row",
  flex: 1,
  // flexShrink: 1,
  overflow: "hidden",

  hoverStyle: {
    borderWidth: 1,
    borderColor: "$borderSecondary"
  },

  focusStyle: {
    outlineWidth: 0
  },

  focusVisibleStyle: {
    outlineColor: "$borderAccent",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$1.25"
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$backgroundPrimary",
        borderColor: "$borderTertiary",

        hoverStyle: {
          backgroundColor: "$backgroundTertiary"
        }
      },

      secondary: {
        backgroundColor: "$surface3",

        hoverStyle: {
          backgroundColor: "$base2"
        }
      },

      tertiary: {
        backgroundColor: "$surface2",

        hoverStyle: {
          backgroundColor: "$base2"
        }
      },

      quaternary: {
        backgroundColor: "$surface1",

        hoverStyle: {
          backgroundColor: "$base2"
        }
      },

      outlined: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "$borderPrimary",

        hoverStyle: {
          backgroundColor: "$base2",
          borderWidth: 2,
          borderColor: "$base2"
        }
      },

      ghost: {
        backgroundColor: "transparent",
        borderWidth: 0,

        hoverStyle: {
          backgroundColor: "transparent",
          borderWidth: 0
        }
      },

      gradient: {
        backgroundColor: "transparent",
        borderWidth: 0,

        hoverStyle: {
          backgroundColor: "transparent",
          borderWidth: 0
        }
      },

      glass: {
        backgroundColor: "transparent",
        borderColor: "$base4",

        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderPrimary"
        }
      },

      link: {
        backgroundColor: "transparent",
        borderWidth: 0,

        hoverStyle: {
          backgroundColor: "transparent",
          borderWidth: 0
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

    size: {
      "...size": getButtonSized,
      ":number": getButtonSized
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        pointerEvents: "none",
        opacity: 0.5
      }
    },

    ringed: {
      true: {
        hoverStyle: {
          outlineColor: "$borderPrimary",
          outlineStyle: "solid",
          outlineWidth: 3,
          outlineOffset: "$1.25"
        },

        pressStyle: {
          outlineColor: "$borderPrimary",
          outlineStyle: "solid",
          outlineWidth: 3,
          outlineOffset: "$1.25"
        }
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000,
        height: "fit-content"
      }
    },

    noPadding: {
      true: {
        padding: 0,
        height: "fit-content"
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
    variant: "tertiary",
    size: "$true",
    disabled: false,
    ringed: false,
    circular: false,
    bordered: true,
    noPadding: false,
    animate: true
  }
});

const ButtonTextFrame = styled(LabelText, {
  name: "ButtonText",
  context: ButtonContext,

  animation: "normal",
  userSelect: "none",
  ellipse: true,
  borderRadius: 0,
  cursor: "pointer",
  textAlign: "center",
  textTransform: "capitalize",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",

  // flexGrow 1 leads to inconsistent native style where text pushes to start of view
  flexGrow: 0,
  flexShrink: 1,
  zIndex: "$md",

  variants: {
    variant: {
      primary: {
        color: "$foregroundOnPrimary",

        hoverStyle: {
          color: "$foregroundOnPrimary"
        }
      },

      secondary: {
        color: "$foregroundOnPrimary",

        hoverStyle: {
          color: "$foregroundSecondary"
        }
      },

      tertiary: {
        color: "$foregroundOnPrimary",

        hoverStyle: {
          color: "$foregroundSecondary"
        }
      },

      quaternary: {
        color: "$foregroundOnPrimary",

        hoverStyle: {
          color: "$foregroundSecondary"
        }
      },

      outlined: {
        color: "$foregroundOnPrimary",

        hoverStyle: {
          color: "$foregroundOnPrimary"
        }
      },

      ghost: {
        color: "$foregroundOnPrimary",

        hoverStyle: {
          color: "$foregroundSecondary"
        }
      },

      glass: {
        color: "$foregroundOnPrimary",

        hoverStyle: {
          color: "$foregroundSecondary"
        }
      },

      gradient: {
        color: "$foregroundOnPrimary",

        hoverStyle: {
          color: "$foregroundSecondary"
        }
      },

      link: {
        color: "$foregroundOnPrimary",
        textDecorationLine: "underline",
        textDecorationColor: "$foregroundOnPrimary",
        textDecorationStyle: "solid",

        hoverStyle: {
          color: "$foregroundSecondary",
          textDecorationColor: "$foregroundSecondary"
        }
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        pointerEvents: "none",
        color: "$base4",
        textDecoration: "none",

        hoverStyle: {
          color: "$base4",

          textDecoration: "none"
        },

        pressStyle: {
          color: "$base4",

          textDecoration: "none"
        }
      }
    },

    circular: {
      true: {
        height: "fit-content"
      }
    },

    size: {
      "...size": (val: SizeTokens, extras: VariantSpreadExtras<TextProps>) => {
        if (!extras.font) {
          return;
        }

        const font = getFontSizedFromSize(val, extras);

        return {
          ...font
        };
      }
    }
  } as const,

  defaultVariants: {
    variant: "tertiary",
    size: "$true",
    disabled: false,
    circular: false
  }
});

const ButtonText = ButtonTextFrame.styleable<{ size?: SizeTokens }>(
  ({ children, size, ...props }, forwardedRef) => {
    const {
      variant,
      disabled,
      circular,
      color,
      size: contextSize
    } = ButtonContext.useStyledContext();
    const theme = useThemeName();

    return (
      <Theme
        name={
          theme &&
          variant !== "primary" &&
          variant !== "secondary" &&
          variant !== "tertiary" &&
          variant !== "quaternary" &&
          variant !== "gradient"
            ? theme
            : "base"
        }
        componentName="ButtonText">
        <ButtonTextFrame
          ref={forwardedRef}
          variant={variant}
          disabled={disabled}
          circular={circular}
          size={size ?? contextSize}
          color={disabled ? "$base4" : color}
          {...props}
          borderRadius={0}
          $group-button-hover={{
            color: disabled
              ? "$base4"
              : variant === "primary" || variant === "outlined"
                ? "$foregroundOnPrimary"
                : "$foregroundSecondary"
          }}>
          {children}
        </ButtonTextFrame>
      </Theme>
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

    const themeName = useThemeName();
    const theme =
      themeName &&
      variant !== "primary" &&
      variant !== "secondary" &&
      variant !== "tertiary" &&
      variant !== "quaternary" &&
      variant !== "gradient"
        ? themeName
        : "base";

    return (
      <View
        ref={forwardedRef}
        zIndex="$md"
        alignItems="center"
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow={0}
        flexShrink={1}>
        <Theme name={theme} componentName="ButtonIcon">
          <ThemeableIcon
            {...props}
            theme={theme}
            disabled={disabled}
            size={adjusted}
            color={
              (color ||
                (disabled
                  ? "$base4"
                  : variant === "primary" || variant === "outlined"
                    ? "$foregroundOnPrimary"
                    : "$foregroundSecondary")) as ThemeableIconProps["color"]
            }
            $group-button-hover={{
              color: disabled
                ? "$base4"
                : variant === "primary"
                  ? "$foregroundOnPrimary"
                  : "$foregroundSecondary"
            }}>
            {children}
          </ThemeableIcon>
        </Theme>
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

  animation: "normal",
  opacity: 0,
  zIndex: "$sm",
  backgroundColor: "$surface3",
  borderColor: "$borderPrimary",

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
          borderWidth: 1
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

const ButtonGlassBackground = styled(LinearGradient, {
  name: "Button",
  context: ButtonContext,

  animation: "normal",
  opacity: 0.5,
  zIndex: "$sm",
  colors: ["$backgroundSecondary", "$backgroundPrimary"],

  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const
});

const ButtonGradientBackground = styled(LinearGradient, {
  name: "Button",
  context: ButtonContext,

  animation: "normal",
  zIndex: "$sm",
  colors: ["$backgroundTertiary", "$backgroundPrimary"],

  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const
});

export type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;

const ButtonContainerImpl = ButtonFrame.styleable<ButtonProps>(
  (
    {
      variant = "tertiary",
      size = "$true",
      disabled = false,
      circular = false,
      bordered = true,
      noPadding = false,
      ringed = false,
      animate = true,
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
        <ButtonFrame
          group={"button" as any}
          ref={forwardedRef}
          {...props}
          onPress={handlePress}
          circular={circular}
          bordered={bordered}
          variant={variant}
          disabled={disabled}
          animate={animate}>
          {variant === "ghost" && (
            <ButtonGhostBackground
              fullscreen={true}
              circular={circular}
              bordered={bordered}
              $group-button-hover={{
                opacity: disabled ? 0 : 0.25
              }}
            />
          )}
          {variant === "glass" && (
            <ButtonGlassBackground
              theme={"base"}
              fullscreen={true}
              circular={circular}
              style={{
                filter: "blur(15px)"
              }}
              $group-button-hover={{ opacity: disabled ? 0.5 : 0.75 }}
            />
          )}
          {variant === "gradient" && (
            <ButtonGradientBackground fullscreen={true} circular={circular} />
          )}

          {children}
        </ButtonFrame>
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
