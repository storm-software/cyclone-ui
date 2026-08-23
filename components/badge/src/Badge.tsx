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

import type { ColorTokens, FontSizeTokens, SizeTokens } from "@tamagui/core";
import { View, createStyledContext, styled } from "@tamagui/core";
import { getFontSize } from "@tamagui/font-size";
import { getFontSized } from "@tamagui/get-font-sized";
import { withStaticProperties } from "@tamagui/helpers";
import { useGetThemedIcon } from "@tamagui/helpers-tamagui";
import { SizableText } from "@tamagui/text";

const BadgeContext = createStyledContext({
  size: "$true" as SizeTokens,
  outlined: false
});

const BADGE_NAME = "Badge";

const BadgeFrame = styled(View, {
  name: BADGE_NAME,
  flexDirection: "row",
  context: BadgeContext,
  width: "fit-content",
  backgroundColor: "$background",

  variants: {
    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    unstyled: {
      false: {
        borderRadius: "$button",
        paddingHorizontal: "$3xl",
        justifyContent: "center",
        alignItems: "center"
      }
    },

    outlined: {
      true: {
        backgroundColor: "transparent",
        borderColor: "$border",
        borderWidth: 1
      }
    },

    size: {
      "...size": (val: any, allTokens: any) => {
        const { tokens } = allTokens;
        const space = tokens.space[val];
        const spaceValue = space?.val ?? 0;

        return {
          paddingHorizontal: space,
          paddingVertical: spaceValue * 0.2
        };
      }
    },

    pressable: {
      true: {
        tabIndex: 0,
        role: "button",

        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderHover"
        },

        focusVisibleStyle: {
          outlineColor: "$borderFocused",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

const BadgeText = styled(SizableText, {
  name: BADGE_NAME,
  context: BadgeContext,
  color: "$foregroundInverse",

  hoverStyle: {
    color: "$foregroundInverseHover"
  },

  variants: {
    unstyled: {
      false: {
        fontFamily: "$label",
        fontWeight: "$semibold",
        size: "$true"
      }
    },

    outlined: {
      true: {
        color: "$foreground",

        hoverStyle: {
          color: "$foregroundHover"
        }
      }
    },

    size: {
      "...fontSize": getFontSized
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

interface BadgeIconProps {
  color?: ColorTokens | string;
  scaleIcon?: number;
  size?: SizeTokens;
  children: React.ReactNode;
}

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
  tabIndex: 0,
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
          backgroundColor: "$backgroundHover",
          borderColor: "$borderHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundFloating"
        },
        focusStyle: {
          backgroundColor: "$backgroundElevated"
        }
      }
    },
    alignRight: {
      ":boolean": (val: any, { props, tokens }: any) => {
        if (val) {
          const size = props.size as SizeTokens;
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
          const size = props.size as SizeTokens;
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
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

export const Badge = withStaticProperties(BadgeFrame, {
  Text: BadgeText,
  Icon: BadgeIcon,
  Button: ButtonComp
});
