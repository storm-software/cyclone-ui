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

/* eslint-disable no-console */

import { ColorThemeName } from "@cyclone-ui/colors";
import { useThemeColorThemeName } from "@cyclone-ui/provider";
import { GetProps, styled, Theme } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

type LinkTextExtraProps = {
  disabled?: boolean;
  underline?: "hover" | "initial" | "static" | "none";
  variant?: "base" | "mixed" | "themed";
  inverse?: boolean;
};

const LinkTextFrame = styled(SizableText, {
  name: "LinkText",

  cursor: "pointer",
  fontFamily: "$link",
  fontWeight: "$md",
  size: "$true",
  whiteSpace: "nowrap",

  variants: {
    underline: {
      initial: {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",

        hoverStyle: {
          textDecorationLine: "none"
        }
      },
      hover: {
        textDecorationLine: "none",

        hoverStyle: {
          textDecorationLine: "underline",
          textDecorationStyle: "solid"
        }
      },
      static: {
        textDecorationLine: "underline",
        textDecorationStyle: "solid"
      },
      none: {
        textDecorationLine: "none",

        hoverStyle: {
          textDecorationLine: "none"
        }
      }
    },

    cta: {
      true: {
        fontFamily: "$cta",
        fontWeight: "$lg",
        textTransform: "uppercase"
      }
    },

    variant: {
      base: {
        color: "$color",
        textDecorationColor: "$color",

        hoverStyle: {
          color: "$colorHover",
          textDecorationColor: "$colorHover"
        },

        pressStyle: {
          color: "$colorPress",
          textDecorationColor: "$colorPress"
        },

        focusStyle: {
          color: "$colorFocus",
          textDecorationColor: "$colorFocus"
        }
      },
      mixed: {
        color: "$fg",
        textDecorationColor: "$color",

        hoverStyle: {
          color: "$colorHover",
          textDecorationColor: "$fg"
        },

        pressStyle: {
          color: "$colorPress",
          textDecorationColor: "$fg"
        },

        focusStyle: {
          color: "$colorFocus",
          textDecorationColor: "$fg"
        }
      },
      themed: {
        color: "$color",
        textDecorationColor: "$color",

        hoverStyle: {
          color: "$fg",
          textDecorationColor: "$fg"
        },

        pressStyle: {
          color: "$fg",
          textDecorationColor: "$fg"
        },

        focusStyle: {
          color: "$fg",
          textDecorationColor: "$fg"
        }
      },
      baseInverse: {
        color: "$colorHover",
        textDecorationColor: "$colorHover",

        hoverStyle: {
          color: "$color",
          textDecorationColor: "$color"
        },

        pressStyle: {
          color: "$colorPress",
          textDecorationColor: "$colorPress"
        },

        focusStyle: {
          color: "$colorFocus",
          textDecorationColor: "$colorFocus"
        }
      },
      mixedInverse: {
        color: "$color",
        textDecorationColor: "$fg",

        hoverStyle: {
          color: "$fg",
          textDecorationColor: "$colorHover"
        },

        pressStyle: {
          color: "$fg",
          textDecorationColor: "$colorPress"
        },

        focusStyle: {
          color: "$fg",
          textDecorationColor: "$colorFocus"
        }
      },
      themedInverse: {
        color: "$fg",
        textDecorationColor: "$fg",

        hoverStyle: {
          color: "$color",
          textDecorationColor: "$color"
        },

        pressStyle: {
          color: "$colorPress",
          textDecorationColor: "$colorPress"
        },

        focusStyle: {
          color: "$colorFocus",
          textDecorationColor: "$colorFocus"
        }
      }
    },

    disabled: {
      true: {
        cursor: "default",
        color: "$colorDisabled",
        textDecorationLine: "none",

        hoverStyle: {
          color: "$colorDisabled",
          textDecorationLine: "none"
        }
      }
    }
  } as const,

  defaultVariants: {
    underline: "hover",
    cta: false,
    disabled: false,
    variant: "base"
  }
});

type BaseLinkTextVariant = GetProps<typeof LinkTextFrame>["variant"];

export const LinkText = LinkTextFrame.styleable<LinkTextExtraProps>(
  (
    {
      children,
      underline = "hover",
      cta = false,
      disabled = false,
      inverse = false,
      ...props
    },
    forwardedRef
  ) => {
    const colorRole = useThemeColorThemeName();
    const isLinkThemed =
      !colorRole ||
      colorRole === ColorThemeName.LINK ||
      colorRole === ColorThemeName.BASE;

    let variant = props.variant as BaseLinkTextVariant;
    if (!variant && isLinkThemed) {
      variant = "base";
    }
    if (!variant) {
      variant = "themed";
    }
    if (inverse) {
      variant = `${variant}Inverse` as BaseLinkTextVariant;
    }

    return (
      <Theme name={isLinkThemed ? ColorThemeName.LINK : colorRole}>
        <LinkTextFrame
          {...props}
          ref={forwardedRef}
          underline={underline}
          cta={cta}
          disabled={disabled}
          variant={variant}>
          {children}
        </LinkTextFrame>
      </Theme>
    );
  },
  { staticConfig: { componentName: "LinkText" } }
);

export type LinkTextProps = GetProps<typeof LinkText>;
