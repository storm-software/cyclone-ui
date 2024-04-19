import { View, withStaticProperties } from "tamagui";
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

type ButtonVariant = "outlined";

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

type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;

const BUTTON_NAME = "Button";

export const ButtonContext = createStyledContext<
  Partial<
    TextContextStyles & {
      size: SizeTokens;
      variant?: ButtonVariant;
    }
  >
>({
  color: undefined,
  ellipse: undefined,
  fontFamily: undefined,
  fontSize: undefined,
  fontStyle: undefined,
  fontWeight: undefined,
  letterSpacing: undefined,
  maxFontSizeMultiplier: undefined,
  size: undefined,
  textAlign: undefined,
  variant: undefined
});

const ButtonFrame = styled(View, {
  name: BUTTON_NAME,
  context: ButtonContext,
  backgroundColor: "$background",
  borderWidth: 1,
  borderColor: "$borderColor",
  animation: "lazy",
  alignItems: "center",
  flexDirection: "row",
  tag: "button",
  role: "button",
  focusable: true,

  hoverStyle: {
    backgroundColor: "$backgroundHover"
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
        borderWidth: 3,
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

  // variants: {
  //   size: {
  //     "...size": (name: string | number, { tokens }: any) => {
  //       return {
  //         height: tokens.size[name],
  //         borderRadius: tokens.radius[name],
  //         gap: Number(tokens.space[name]) * 0.2
  //       };
  //     }
  //   }
  // } as const
});

const ButtonText = styled(SizableText, {
  name: "ButtonText",
  context: ButtonContext,
  color: "$color",
  userSelect: "none",

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

export const Button = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Props: ButtonContext.Provider
});

export type { ButtonProps };
