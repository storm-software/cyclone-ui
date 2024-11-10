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

import { ColorThemeName } from "@cyclone-ui/colors";
import { LabelText } from "@cyclone-ui/label-text";
import { getButtonSized, getSized } from "@cyclone-ui/theme-helpers";
import {
  ThemeableIcon,
  type ThemeableIconProps
} from "@cyclone-ui/themeable-icon";
import type {
  ColorTokens,
  FontSizeTokens,
  GetProps,
  SizeTokens,
  TextProps,
  ThemeableProps,
  UnionableNumber,
  UnionableString,
  Variable,
  VariantSpreadExtras
} from "@tamagui/core";
import { Theme, View, createStyledContext, styled } from "@tamagui/core";
import { withStaticProperties } from "@tamagui/helpers";
import { LinearGradient } from "@tamagui/linear-gradient";
import { ThemeableStack } from "@tamagui/stacks";
import type { TextContextStyles, TextParentStyles } from "@tamagui/text";
import { useCallback, useMemo, type FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";

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

type ButtonIconProps = { color?: any; size?: any };
type IconProp =
  | JSX.Element
  | FunctionComponent<ButtonIconProps>
  | ((props: ButtonIconProps) => any)
  | null;

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
  focusable: false,

  animation: "normal",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "nowrap",
  cursor: "pointer",

  focusStyle: {
    outlineWidth: 0
  },

  focusVisibleStyle: {
    outlineColor: "$accent10",
    outlineStyle: "solid",
    outlineWidth: 3,
    outlineOffset: "$1.25"
  },

  variants: {
    bordered: {
      false: {
        borderColor: "transparent",
        borderWidth: 0,

        hoverStyle: {
          borderColor: "transparent",
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

    variant: {
      primary: {
        backgroundColor: "$primary",
        borderColor: "$tertiary",

        hoverStyle: {
          backgroundColor: "$color9",
          borderColor: "$borderColorHover"
        }
      },

      secondary: {
        backgroundColor: "$surfaceSecondary",

        borderColor: "$borderColor",

        hoverStyle: {
          backgroundColor: "$surfaceTertiary",
          borderColor: "$borderColorHover"
        }
      },

      tertiary: {
        backgroundColor: "$surfacePrimary",
        borderColor: "$borderColor",

        hoverStyle: {
          backgroundColor: "$surfaceSecondary",
          borderColor: "$borderColorHover"
        }
      },

      quaternary: {
        backgroundColor: "$backgroundStrong",
        borderColor: "$borderColor",

        hoverStyle: {
          backgroundColor: "$surfacePrimary",
          borderColor: "$borderColorHover"
        }
      },

      outlined: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "$color",

        hoverStyle: {
          backgroundColor: "$surfacePrimary",
          borderWidth: 2,
          borderColor: "$colorHover"
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
          borderColor: "$primary"
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
          outlineColor: "$primary",
          outlineStyle: "solid",
          outlineWidth: 3,
          outlineOffset: "$1.25"
        },

        pressStyle: {
          outlineColor: "$primary",
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
    }
  } as const,

  defaultVariants: {
    variant: "tertiary",
    size: "$true",
    disabled: false,
    ringed: false,
    circular: false,
    bordered: true,
    noPadding: false
  }
});

const ButtonTextFrame = styled(LabelText, {
  name: "ButtonText",
  context: ButtonContext,

  animation: "normal",
  userSelect: "none",
  // flexGrow 1 leads to inconsistent native style where text pushes to start of view
  flexGrow: 0,
  flexShrink: 1,
  ellipse: true,
  borderRadius: 0,
  cursor: "pointer",
  textAlign: "center",

  variants: {
    variant: {
      primary: {
        color: "$surfacePrimary",

        hoverStyle: {
          color: "$surfacePrimary"
        }
      },

      secondary: {
        color: "$color",

        hoverStyle: {
          color: "$colorHover"
        }
      },

      tertiary: {
        color: "$color",

        hoverStyle: {
          color: "$colorHover"
        }
      },

      quaternary: {
        color: "$color",

        hoverStyle: {
          color: "$colorHover"
        }
      },

      outlined: {
        color: "$color",

        hoverStyle: {
          color: "$colorHover"
        }
      },

      ghost: {
        color: "$color",

        hoverStyle: {
          color: "$colorHover"
        }
      },

      glass: {
        color: "$color",

        hoverStyle: {
          color: "$colorHover"
        }
      },

      gradient: {
        color: "$color",

        hoverStyle: {
          color: "$colorHover"
        }
      },

      link: {
        color: "$color",
        textDecorationLine: "underline",
        textDecorationColor: "$color",
        textDecorationStyle: "solid",

        hoverStyle: {
          color: "$colorHover",
          textDecorationColor: "$colorHover"
        }
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        pointerEvents: "none",
        color: "$colorDisabled",
        textDecoration: "none",

        hoverStyle: {
          color: "$colorDisabled",

          textDecoration: "none"
        },

        pressStyle: {
          color: "$colorDisabled",

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
      "...fontSize": (
        val: FontSizeTokens,
        config: VariantSpreadExtras<TextProps>
      ) => {
        if (!config.font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (val !== undefined && val !== null) {
          sizeToken = (config.font.size?.[val] as any)?.val;
          heightToken = (config.font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 0.9;
        const lineHeight = Number(heightToken ?? 1) * 0.75;
        const fontWeight = config.font.weight?.[val];
        const letterSpacing = config.font.letterSpacing?.[val];
        const textTransform = config.font.transform?.[val];
        const fontStyle = config.font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
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

const ButtonText = ButtonTextFrame.styleable(
  ({ children, theme, ...props }, forwardedRef) => {
    const { variant, disabled, circular, color, size } =
      ButtonContext.useStyledContext();

    return (
      <Theme
        name={
          variant === "primary" ||
          variant === "secondary" ||
          variant === "tertiary" ||
          variant === "quaternary" ||
          variant === "gradient"
            ? ColorThemeName.BASE
            : theme
        }
        componentName="ButtonText">
        <ButtonTextFrame
          ref={forwardedRef}
          variant={variant}
          disabled={disabled}
          circular={circular}
          size={size as FontSizeTokens}
          color={color}
          $group-button-hover={{
            color: disabled
              ? "$colorDisabled"
              : variant === "primary"
                ? "$surfacePrimary"
                : "$colorHover"
          }}
          {...props}>
          {children}
        </ButtonTextFrame>
      </Theme>
    );
  },
  {
    staticConfig: { componentName: "ButtonText" }
  }
);

const ButtonIcon = ButtonTextFrame.styleable(
  ({ children, theme, ...props }) => {
    const { variant, disabled, color, size } = ButtonContext.useStyledContext();

    const themeName =
      variant === "primary" ||
      variant === "secondary" ||
      variant === "tertiary" ||
      variant === "quaternary" ||
      variant === "gradient"
        ? ColorThemeName.BASE
        : theme;
    const adjusted = useMemo(() => getSized(size, { shift: -4 }), [size]);

    return (
      <Theme name={themeName} componentName="ButtonIcon">
        <ThemeableIcon
          {...props}
          disabled={disabled}
          size={adjusted}
          color={
            (disabled
              ? "$colorDisabled"
              : color ||
                (variant === "primary"
                  ? "$surfacePrimary"
                  : "$color")) as ThemeableIconProps["color"]
          }
          $group-button-hover={{
            color: disabled
              ? "$colorDisabled"
              : variant === "primary"
                ? "$surfacePrimary"
                : "$colorHover"
          }}>
          {children}
        </ThemeableIcon>
      </Theme>
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

  backgroundColor: "$surfaceTertiary",
  borderColor: "$primary",

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
  opacity: 0.15,

  colors: ["$secondary", "$primary"],
  // locations: [0.0, 1.0],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },

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
  colors: ["$tertiary", "$primary"],
  // locations: [0.0, 1.0],
  start: { x: 0.1, y: 0.1 },
  end: { x: 0.9, y: 0.9 },

  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const
});

const ButtonContainer = styled(ThemeableStack, {
  name: "Button",
  context: ButtonContext,

  animation: "normal",
  cursor: "pointer",
  overflow: "hidden",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed"
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    animate: {
      true: {
        pressStyle: {
          scale: 0.95
        }
      }
    }
  } as const
});

export type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;

const ButtonContainerImpl = ButtonFrame.styleable<ButtonProps>(
  (
    {
      variant = "tertiary",
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
        if (!disabled) {
          onPress?.(event);
          onClick?.(event);
        }
      },
      [disabled, onPress, onClick]
    );

    return (
      <ButtonContainer
        group={"button" as any}
        circular={circular}
        disabled={disabled}
        animate={animate}>
        <ButtonContext.Provider
          variant={variant}
          disabled={disabled}
          circular={circular}
          noPadding={noPadding}
          ringed={ringed}
          animate={animate}
          {...props}>
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
              theme={ColorThemeName.BASE}
              fullscreen={true}
              circular={circular}
              style={{
                filter: "blur(4px)"
              }}
              $group-button-hover={{ opacity: disabled ? 0.15 : 0.25 }}
            />
          )}
          {variant === "gradient" && (
            <ButtonGradientBackground fullscreen={true} circular={circular} />
          )}
          <ButtonFrame
            ref={forwardedRef}
            {...props}
            onPress={handlePress}
            circular={circular}
            bordered={bordered}
            variant={variant}
            disabled={disabled}>
            {children}
          </ButtonFrame>
        </ButtonContext.Provider>
      </ButtonContainer>
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
