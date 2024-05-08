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
  };

const BUTTON_NAME = "Button";

export const ButtonContext = createStyledContext<
  Partial<
    TextContextStyles & {
      size: SizeTokens;
      variant?: ButtonVariant;
      borderRadius?: SizeTokens;
    }
  >
>({
  color: "$color",
  ellipse: undefined,
  fontFamily: "$label",
  fontSize: undefined,
  fontStyle: undefined,
  fontWeight: "600",
  letterSpacing: undefined,
  maxFontSizeMultiplier: undefined,
  size: undefined,
  textAlign: undefined,
  variant: undefined,
  borderRadius: "$4"
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
  animation: "slow",
  borderWidth: 1,

  backgroundColor: "$background",
  borderColor: "$borderColor",

  hoverStyle: {
    backgroundColor: "$backgroundHover",
    borderColor: "$borderColorHover",
    outlineColor: "$primary",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: "$1.25"
  },

  pressStyle: {
    backgroundColor: "$backgroundPress",
    borderColor: "$borderColorPress",
    outlineColor: "$primary",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: "$1.25"
  },

  focusVisibleStyle: {
    backgroundColor: "$backgroundFocus",
    borderColor: "$borderColorFocus",
    outlineColor: "$primary",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: "$1.25"
  },

  variants: {
    unstyled: {
      false: {
        size: "$true",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        cursor: "pointer",
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
          outlineColor: "$backgroundHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$backgroundPress",
          outlineColor: "$backgroundPress"
        },

        focusVisibleStyle: {
          backgroundColor: "transparent",
          borderColor: "$backgroundFocus",
          outlineColor: "$backgroundFocus"
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
        pointerEvents: "none"
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

const ButtonText = styled(SizableText, {
  name: "ButtonText",
  context: ButtonContext,
  userSelect: "none",
  fontFamily: "$label",
  fontWeight: "bold",
  animation: "medium",

  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        cursor: "pointer",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipse: true
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }

  // variants: {
  //   size: {
  //     "...fontSize": (name: string | number, { font }: any) => ({
  //       fontSize: font?.size[name]
  //     })
  //   }
  // } as const
});

const ButtonIcon = (props: {
  children: React.ReactNode;
  scaleIcon?: number;
}) => {
  const { children, scaleIcon = 1 } = props;
  const { size, color } = useContext(ButtonContext);

  const iconSize =
    (typeof size === "number"
      ? size * 0.5
      : getFontSize(size as FontSizeTokens)) * scaleIcon;

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return getThemedIcon(children);
};

type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;

const ButtonGhostBackground = styled(ThemeableStack, {
  name: "ButtonGhostBackground",
  context: ButtonContext,
  backgroundColor: "transparent",
  borderRadius: "$4",
  animation: "medium",
  opacity: 0.6
});

const ButtonGlassBackground = styled(LinearGradient, {
  name: "ButtonGlassBackground",
  context: ButtonContext,
  backgroundColor: "transparent",
  borderRadius: "$4",
  animation: "medium",
  overflow: "hidden",
  opacity: 0.5,
  colors: ["$muted", "$primary"],
  start: [0, 1],
  end: [1, 1]
});

const ButtonWrapper = styled(ThemeableStack, {
  name: "ButtonWrapper",
  context: ButtonContext,
  animation: "medium",
  position: "relative",

  pressStyle: {
    scale: 0.99
  }
});

const ButtonContainerImpl = ThemeableStack.styleable<ButtonProps>(
  (props, ref) => {
    const { variant, ...rest } = props;

    return (
      <ButtonWrapper group={"button" as any}>
        {variant === "ghost" && (
          <ButtonGhostBackground
            fullscreen={true}
            $group-button-hover={{ backgroundColor: "$muted" }}
            $group-button-press={{ backgroundColor: "$primary" }}
            style={{
              filter: "blur(1px)"
            }}
          />
        )}
        {variant === "glass" && (
          <ButtonGlassBackground
            fullscreen={true}
            style={{
              filter: "blur(3px)"
            }}
            $group-button-hover={{ opacity: 0.7 }}
            $group-button-press={{ opacity: 1 }}
          />
        )}
        <ButtonFrame ref={ref} {...rest} variant={variant} />
      </ButtonWrapper>
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

// export const Button: TamaguiComponent<
//   TamaDefer,
//   TamaguiElement,
//   RNTamaguiViewNonStyleProps,
//   StackStyleBase,
//   {
//     size?: number | SizeTokens | undefined;
//     variant?: "outlined" | "ghost" | "gradient" | undefined;
//     disabled?: boolean | undefined;
//     unstyled?: boolean | undefined;
//     animated?: boolean | undefined;
//   },
//   StaticConfigPublic
// > = withStaticProperties(ButtonContainerImpl, {
//   Text: ButtonText,
//   Icon: ButtonIcon,
//   Props: ButtonContext.Provider
// });
