import { getFontSized } from "@tamagui/get-font-sized";
import { getFontSize } from "@tamagui/font-size";
import { SizableText } from "@tamagui/text";
import {
  View,
  FontSizeTokens,
  SizeTokens,
  ColorTokens,
  createStyledContext,
  styled
} from "@tamagui/core";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { withStaticProperties } from "@tamagui/helpers";

const BadgeContext = createStyledContext({
  size: "$true" as SizeTokens,
  outlined: false
});

const BADGE_NAME = "Badge";

const BadgeImpl = styled(View, {
  name: BADGE_NAME,
  flexDirection: "row",
  context: BadgeContext,
  width: "fit-content",
  backgroundColor: "$primary",

  variants: {
    rounded: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    unstyled: {
      false: {
        borderRadius: 5,
        paddingHorizontal: "$3",
        justifyContent: "center",
        alignItems: "center"
      }
    },

    outlined: {
      true: {
        backgroundColor: "transparent",
        borderColor: "$primary",
        borderWidth: 1
      }
    },

    size: {
      "...size": (val: any, allTokens: any) => {
        const { tokens } = allTokens;

        return {
          paddingHorizontal: tokens.space[val],
          paddingVertical: tokens.space[val]?.val * 0.2
        };
      }
    },

    pressable: {
      true: {
        focusable: true,
        role: "button",

        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },

        focusVisibleStyle: {
          outlineColor: "$outlineColor",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

const BadgeText = styled(SizableText, {
  name: BADGE_NAME,
  context: BadgeContext,
  color: "$bg",

  variants: {
    unstyled: {
      false: {
        fontFamily: "$label",
        fontWeight: "$6",
        size: "$true"
      }
    },

    outlined: {
      true: {
        color: "$primary"
      }
    },

    size: {
      "...fontSize": getFontSized
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

type BadgeIconProps = {
  color?: ColorTokens | string;
  scaleIcon?: number;
  size?: SizeTokens;
  children: React.ReactNode;
};

const BadgeIconFrame = styled(View, {
  name: BADGE_NAME,
  context: BadgeContext,

  variants: {
    size: {
      "...size": (val: any, { tokens }: any) => {
        if (typeof val === "number") {
          return {
            paddingHorizontal: val * 0.25,
            paddingVertical: val * 0.25
          };
        }
        return {
          paddingHorizontal: tokens.space[val].val * 0.25,
          paddingVertical: tokens.space[val].val * 0.25
        };
      }
    }
  }
});

const BadgeIcon = BadgeIconFrame.styleable<BadgeIconProps>((props, ref) => {
  const { children, scaleIcon = 0.7, size, color, ...rest } = props;
  const chipContext = BadgeContext.useStyledContext();
  const finalSize = size || chipContext.size;

  const iconSize =
    (typeof finalSize === "number"
      ? finalSize * 0.5
      : getFontSize(finalSize as FontSizeTokens)) * scaleIcon;

  const getThemedIcon = useGetThemedIcon({
    size: iconSize,
    color: color as any
  });
  return (
    <BadgeIconFrame ref={ref} {...rest}>
      {getThemedIcon(children)}
    </BadgeIconFrame>
  );
});

const ButtonComp = styled(View, {
  name: BADGE_NAME,
  context: BadgeContext,
  focusable: true,
  role: "button",

  variants: {
    size: {} as any,
    unstyled: {
      false: {
        borderRadius: 1000_000_000,
        backgroundColor: "$background",
        justifyContent: "center",
        alignItems: "center",

        hoverStyle: {
          backgroundColor: "$backgroundHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress"
        },
        focusStyle: {
          backgroundColor: "$backgroundFocus"
        }
      }
    },
    alignRight: {
      ":boolean": (val: any, { props, tokens }: any) => {
        if (val) {
          const size = (props as any).size as SizeTokens;
          if (typeof size === "number") {
            return {
              x: size * 0.55
            };
          }
          return {
            x: tokens.space[size].val * 0.55
          };
        }
      }
    },
    alignLeft: {
      ":boolean": (val: any, { props, tokens }: any) => {
        if (val) {
          const size = (props as any).size as SizeTokens;
          if (typeof size === "number") {
            return {
              x: size * -0.55
            };
          }
          return {
            x: tokens.space[size].val * -0.55
          };
        }
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1" ? true : false
  }
});

export const Badge = withStaticProperties(BadgeImpl, {
  Text: BadgeText,
  Icon: BadgeIcon,
  Button: ButtonComp
});
