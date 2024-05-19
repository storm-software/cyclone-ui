import { ThemeableStack } from "@tamagui/stacks";
import type { TextContextStyles, TextParentStyles } from "@tamagui/text";
import { SizableText } from "@tamagui/text";
import type {
  FontSizeTokens,
  GetProps,
  SizeTokens,
  ThemeableProps
} from "@tamagui/web";
import { styled, createStyledContext } from "@tamagui/web";
import { getButtonSized } from "@tamagui/get-button-sized";
import { getFontSize } from "@tamagui/font-size";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import type { FunctionComponent } from "react";
import { useContext } from "react";
import { View } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { withStaticProperties } from "@tamagui/helpers";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outlined"
  | "inverse"
  | "ghost"
  | "glass";

type ButtonIconProps = { color?: any; size?: any };
type IconProp =
  | JSX.Element
  | FunctionComponent<ButtonIconProps>
  | ((props: ButtonIconProps) => any)
  | null;

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
  };

const BUTTON_NAME = "Button";

export const ButtonContext = createStyledContext<
  Partial<
    TextContextStyles & {
      size: SizeTokens;
      variant?: ButtonVariant;
      borderRadius?: SizeTokens;
      unstyled?: boolean;
      circular?: boolean;
      disabled?: boolean;
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
  disabled: false
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
        color: "$fg",

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
        color: "$fg",

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

    circular: {
      true: {
        height: "fit-content"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

const ButtonIcon = (props: {
  children: React.ReactNode;
  scaleIcon?: number;
}) => {
  const { children, scaleIcon = 1 } = props;
  const { size, color, variant } = useContext(ButtonContext);

  const iconSize =
    (typeof size === "number"
      ? size * 0.5
      : getFontSize(size as FontSizeTokens)) * scaleIcon;

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color:
      variant === "glass" || variant === "ghost" ? "$primary" : (color as any)
  });
  return getThemedIcon(children);
};

type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;

const ButtonGhostBackground = styled(ThemeableStack, {
  name: "Button",
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
  name: "Button",
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
  name: "Button",
  context: ButtonContext,
  animation: "$slow",

  pressStyle: {
    scale: 0.9
  },

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
    }
  } as const,

  defaultVariants: {
    circular: false
  }
});

const ButtonContainerImpl = ButtonFrame.styleable<ButtonProps>(
  (props, forwardedRef) => {
    const { variant, disabled, circular, ...rest } = props;

    return (
      <ButtonContainer
        group={"button" as any}
        circular={circular}
        disabled={disabled}>
        {variant === "ghost" && (
          <ButtonGhostBackground
            fullscreen={true}
            circular={circular}
            $group-button-hover={{
              backgroundColor: disabled ? "transparent" : "$muted"
            }}
            $group-button-press={{
              backgroundColor: disabled ? "transparent" : "$muted",
              opacity: 1
            }}
          />
        )}
        {variant === "glass" && (
          <ButtonGlassBackground
            fullscreen={true}
            circular={circular}
            style={{
              filter: "blur(1px)"
            }}
            $group-button-hover={{ opacity: disabled ? 0.5 : 0.7 }}
            $group-button-press={{ opacity: disabled ? 0.5 : 1 }}
          />
        )}
        <ButtonFrame
          ref={forwardedRef}
          {...rest}
          circular={circular}
          variant={variant}
          disabled={disabled}
        />
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
