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

type ButtonVariant = "outlined" | "ghost" | "glass";

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
  color: undefined,
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
  animation: "faster",
  borderWidth: 1,
  borderColor: "$borderColor",
  backgroundColor: "$background",

  hoverStyle: {
    backgroundColor: "$backgroundHover",
    borderWidth: 3
  },

  pressStyle: {
    backgroundColor: "$backgroundPress"
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
        backgrounded: true,
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
      outlined: {
        backgroundColor: "transparent",
        borderColor: "$borderColor",
        color: "$borderColor",

        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorHover",
          color: "$borderColorHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorPress",
          color: "$borderColorPress"
        },

        focusVisibleStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorFocus",
          color: "$borderColorFocus"
        }
      },

      ghost: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "$borderColorHover"
        },

        pressStyle: {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "$borderColorPress"
        },

        focusVisibleStyle: {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "$borderColorFocus"
        }
      },

      glass: {
        backgroundColor: "transparent",
        borderColor: "borderColor",

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

    gradient: {
      ":string": (val: string) => ({
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",

        hoverStyle: {
          backgroundColor: "transparent",
          color: "transparent"
        },

        pressStyle: {
          backgroundColor: "transparent",
          color: "transparent"
        },

        focusVisibleStyle: {
          backgroundColor: "transparent",
          color: "transparent"
        }
      })
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
  color: "$color",
  userSelect: "none",
  fontFamily: "$label",
  fontWeight: "bold",
  animation: "faster",

  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        cursor: "pointer",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipse: true,
        color: "$color"
      }
    },

    variant: {
      outlined: {
        color: "$borderColor"
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
  animation: "faster",
  opacity: 0.3
});

const ButtonGlassBackground = styled(LinearGradient, {
  name: "ButtonGlassBackground",
  context: ButtonContext,
  backgroundColor: "transparent",
  borderRadius: "$4",
  animation: "faster",
  opacity: 0.3,
  colors: ["$color7", "$color9"],
  start: [0, 1],
  end: [0, 0]
});

const ButtonWrapper = styled(ThemeableStack, {
  name: "ButtonWrapper",
  context: ButtonContext,
  animation: "faster",
  position: "relative",

  pressStyle: {
    scale: 0.98
  }
});

const ButtonContainerImpl = ThemeableStack.styleable<ButtonProps>(
  (props, ref) => {
    const { variant, gradient, ...rest } = props;

    return (
      <ButtonWrapper group={"button" as any}>
        {gradient && (
          <LinearGradient
            colors={["$color3", gradient]}
            start={[0, 1]}
            end={[0, 0]}
            fullscreen={true}
          />
        )}
        {variant === "ghost" && (
          <ButtonGhostBackground
            fullscreen={true}
            $group-button-hover={{ backgroundColor: "$color7" }}
            $group-button-press={{ backgroundColor: "$color9" }}
            style={{
              filter: "blur(8px)"
            }}
          />
        )}
        {variant === "glass" && (
          <ButtonGlassBackground
            fullscreen={true}
            style={{
              filter: "blur(8px)"
            }}
            $group-button-hover={{ opacity: 0.5 }}
            $group-button-press={{ opacity: 0.7 }}
          />
        )}
        <ButtonFrame
          ref={ref}
          {...rest}
          variant={variant}
          gradient={gradient}
        />
      </ButtonWrapper>
    );
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
