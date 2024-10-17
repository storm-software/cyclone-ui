import { ThemedIcon } from "@cyclone-ui/themeable-icon";
import type { ColorTokens, FontSizeTokens } from "@tamagui/core";
import { View } from "@tamagui/core";
import { getButtonSized } from "@tamagui/get-button-sized";
import { withStaticProperties } from "@tamagui/helpers";
import { LinearGradient } from "@tamagui/linear-gradient";
import { ThemeableStack } from "@tamagui/stacks";
import type { TextContextStyles, TextParentStyles } from "@tamagui/text";
import { SizableText } from "@tamagui/text";
import type {
  GetProps,
  SizeTokens,
  ThemeableProps,
  UnionableNumber,
  UnionableString,
  Variable
} from "@tamagui/web";
import { createStyledContext, styled } from "@tamagui/web";
import { useContext, type FunctionComponent } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outlined"
  | "inverse"
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

type ButtonExtraProps = TextParentStyles &
  ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp;

    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp;

    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number;

    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean;

    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number;

    /**
     * remove default styles
     */
    unstyled?: boolean;

    /**
     * make the button circular
     */
    circular?: boolean;

    /**
     * make the button disabled
     */
    disabled?: boolean;

    /**
     * The font color of the button
     */
    color?: ColorTokens | string;

    /**
     * The radius of the button's border
     */
    borderRadius?: BorderRadiusSizeTokens;

    /**
     * Should the pressed, scale animation be applied
     */
    animate?: boolean;

    /**
     * An alternate way to provide an onPress handler
     */
    onClick?: null | ((event?: any) => void);
  };

const BUTTON_NAME = "Button";

export const ButtonContext = createStyledContext<
  Partial<
    TextContextStyles & {
      size: SizeTokens;
      variant?: ButtonVariant;
      borderRadius?: BorderRadiusSizeTokens;
      color?: ColorTokens | string;
      unstyled?: boolean;
      circular?: boolean;
      disabled?: boolean;
      animate?: boolean;
    }
  >
>({
  color: "$color",
  ellipse: undefined,
  fontFamily: "$label",
  fontSize: undefined,
  fontStyle: undefined,
  fontWeight: "$6",
  letterSpacing: undefined,
  maxFontSizeMultiplier: undefined,
  size: undefined,
  textAlign: undefined,
  variant: undefined,
  borderRadius: "$4",
  unstyled: false,
  circular: false,
  disabled: false,
  animate: true
});

const ButtonFrame = styled(View, {
  name: BUTTON_NAME,
  context: ButtonContext,

  tag: "button",
  role: "button",
  focusable: true,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  animation: "$slow",
  borderWidth: 1,

  backgroundColor: "$background",
  borderColor: "$borderColor",

  hoverStyle: {
    backgroundColor: "$backgroundHover",
    borderColor: "$borderColorHover"
  },

  pressStyle: {
    backgroundColor: "$backgroundPress",
    borderColor: "$borderColorPress",
    scale: 0.9
  },

  focusVisibleStyle: {
    backgroundColor: "$backgroundFocus",
    borderColor: "$borderColorFocus"
  },

  variants: {
    unstyled: {
      false: {
        size: "$true",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        hoverTheme: true,
        pressTheme: true,
        borderWidth: 0,
        borderColor: "transparent",

        focusVisibleStyle: {
          outlineColor: "$outlineColor",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    },

    variant: {
      secondary: {
        backgroundColor: "transparent",
        borderColor: "$primary",
        borderWidth: 2,
        color: "$primary",

        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$backgroundHover",
          color: "$backgroundHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$backgroundPress",
          color: "$backgroundPress"
        },

        focusVisibleStyle: {
          backgroundColor: "transparent",
          borderColor: "$backgroundFocus",
          color: "$backgroundFocus"
        }
      },

      ghost: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorPress"
        },

        focusVisibleStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorFocus"
        }
      },

      glass: {
        backgroundColor: "transparent",
        borderColor: "$borderColor",

        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorPress"
        },

        focusVisibleStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorFocus"
        }
      },

      link: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",
        textDecoration: "underline",
        textDecorationColor: "$borderColor",
        textDecorationStyle: "solid",
        textDecorationThickness: 1,

        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: "$borderColorHover",
          textDecorationColor: "$borderColorHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: "$borderColorPress",
          textDecorationColor: "$borderColorPress"
        },

        focusVisibleStyle: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: "$borderColorFocus",
          textDecorationColor: "$borderColorFocus"
        }
      }
    },

    size: {
      "...size": getButtonSized,
      ":number": getButtonSized
    },

    disabled: {
      true: {
        opacity: 0.4,
        borderColor: "$disabled"
      },
      false: {
        opacity: 1,
        borderColor: "$borderColor"
      }
    },

    outlined: {
      true: {
        hoverStyle: {
          outlineColor: "$primary",
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineOffset: "$1.25"
        },

        pressStyle: {
          outlineColor: "$primary",
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineOffset: "$1.25"
        },

        focusVisibleStyle: {
          outlineColor: "$primary",
          outlineStyle: "solid",
          outlineWidth: 2,
          outlineOffset: "$1.25"
        }
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000,
        height: "fit-content"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false,
    disabled: false,
    outlined: false,
    circular: false
  }
});

const ButtonText = styled(SizableText, {
  name: "ButtonText",
  context: ButtonContext,

  userSelect: "none",
  fontFamily: "$label",
  fontWeight: "$6",
  animation: "$slow",

  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipse: true
      }
    },

    variant: {
      secondary: {
        color: "$primary"
      },

      ghost: {
        color: "$fg"
      },

      glass: {
        color: "$fg"
      },

      link: {
        color: "$borderColor",
        textDecoration: "underline",
        textDecorationColor: "$borderColor",
        textDecorationStyle: "solid",
        textDecorationThickness: 1,

        hoverStyle: {
          color: "$borderColorHover",
          textDecorationColor: "$borderColorHover"
        },

        pressStyle: {
          color: "$borderColorPress",
          textDecorationColor: "$borderColorPress"
        },

        focusVisibleStyle: {
          color: "$borderColorFocus",
          textDecorationColor: "$borderColorFocus"
        }
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed"
      },
      false: {
        cursor: "pointer"
      }
    },

    circular: {
      true: {
        height: "fit-content"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false,
    disabled: false
  }
});

const ButtonIconFrame = styled(ThemedIcon, {
  name: BUTTON_NAME,
  context: ButtonContext,

  size: "$2"
});

const ButtonIcon = ButtonIconFrame.styleable(
  ({ children, ...props }, forwardedRef) => {
    const { variant, color, size } = useContext(ButtonContext);

    return (
      <ButtonIconFrame
        ref={forwardedRef}
        color={
          color
            ? color
            : variant === "secondary"
              ? "$primary"
              : variant === "glass" || variant === "ghost"
                ? "$fg"
                : variant === "link"
                  ? "$borderColor"
                  : "$color"
        }
        size={size as FontSizeTokens}
        {...props}>
        {children}
      </ButtonIconFrame>
    );
  }
);

type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;

const ButtonGhostBackground = styled(ThemeableStack, {
  name: BUTTON_NAME,
  context: ButtonContext,

  backgroundColor: "transparent",
  borderColor: "transparent",
  borderRadius: "$4",
  animation: "$slow",
  borderWidth: 2,
  opacity: 0.6,

  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,

  defaultVariants: {
    circular: false
  }
});

const ButtonGlassBackground = styled(LinearGradient, {
  name: BUTTON_NAME,
  context: ButtonContext,

  backgroundColor: "transparent",
  borderRadius: "$4",
  animation: "$slow",
  overflow: "hidden",
  opacity: 0.5,
  colors: ["$muted", "$primary"],
  start: [0, 1],
  end: [1, 1],

  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,

  defaultVariants: {
    circular: false
  }
});

const ButtonContainer = styled(ThemeableStack, {
  name: BUTTON_NAME,
  context: ButtonContext,
  animation: "$slow",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed"
      },
      false: {
        cursor: "pointer"
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
          scale: 0.9
        }
      }
    }
  } as const,

  defaultVariants: {
    circular: false,
    animate: true
  }
});

const ButtonContainerImpl = ButtonFrame.styleable<ButtonProps>(
  (props, forwardedRef) => {
    const { variant, disabled, circular, animate, onPress, onClick, ...rest } =
      props;

    return (
      <ButtonContainer
        group={"button" as any}
        circular={circular}
        disabled={disabled}
        animate={animate}>
        <ButtonContext.Provider {...props}>
          {variant === "ghost" && (
            <ButtonGhostBackground
              fullscreen={true}
              circular={circular}
              scale={1}
              $group-button-hover={{
                backgroundColor: disabled ? "transparent" : "$muted"
              }}
              $group-button-press={{
                backgroundColor: disabled ? "transparent" : "$muted",
                opacity: 1,
                scale: 0.9
              }}
            />
          )}
          {variant === "glass" && (
            <ButtonGlassBackground
              fullscreen={true}
              circular={circular}
              scale={1}
              style={{
                filter: "blur(1px)"
              }}
              $group-button-hover={{ opacity: disabled ? 0.5 : 0.7 }}
              $group-button-press={{ opacity: disabled ? 0.5 : 1, scale: 0.9 }}
            />
          )}
          <ButtonFrame
            ref={forwardedRef}
            {...rest}
            onPress={onPress ? onPress : onClick}
            circular={circular}
            variant={variant}
            disabled={disabled}
          />
        </ButtonContext.Provider>
      </ButtonContainer>
    );
  },
  {
    staticConfig: { componentName: BUTTON_NAME }
  }
);

export const Button = withStaticProperties(ButtonContainerImpl, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Props: ButtonContext.Provider
});

export type { ButtonProps };
