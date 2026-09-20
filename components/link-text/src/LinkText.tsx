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

import type { GetProps } from "@tamagui/core";
import { styled, useStyle, useThemeName } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

export interface LinkTextExtraProps {
  disabled?: boolean;
  underline?: "hover" | "initial" | "static" | "none";
  variant?: "base" | "mixed" | "themed";
  inverse?: boolean;
}

const LinkTextFrame = styled(SizableText, {
  name: "LinkText",

  transition: "200ms",
  cursor: "pointer",
  fontWeight: "$md",
  size: "$true",
  whiteSpace: "nowrap",
  textDecorationStyle: "solid",

  variants: {
    underline: {
      initial: {
        textDecorationLine: "underline",

        hoverStyle: {
          textDecorationLine: "none"
        }
      },
      hover: {
        textDecorationLine: "none",

        hoverStyle: {
          textDecorationLine: "underline"
        }
      },
      static: {
        textDecorationLine: "underline"
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
        color: "$link",
        textDecorationColor: "$link",

        hoverStyle: {
          color: "$linkHover",
          textDecorationColor: "$linkHover"
        },

        pressStyle: {
          color: "$linkActive",
          textDecorationColor: "$linkActive"
        },

        focusStyle: {
          color: "$linkActive",
          textDecorationColor: "$linkActive"
        }
      },
      baseInverse: {
        color: "$accent",
        textDecorationColor: "$accent",

        hoverStyle: {
          color: "$accentHover",
          textDecorationColor: "$accentHover"
        },

        pressStyle: {
          color: "$accentActive",
          textDecorationColor: "$accentActive"
        },

        focusStyle: {
          color: "$accentActive",
          textDecorationColor: "$accentActive"
        }
      },

      mixed: {
        color: "$accent",
        textDecorationColor: "$link",

        hoverStyle: {
          color: "$accentHover",
          textDecorationColor: "$linkHover"
        },

        pressStyle: {
          color: "$accentActive",
          textDecorationColor: "$linkActive"
        },

        focusStyle: {
          color: "$accentActive",
          textDecorationColor: "$linkActive"
        }
      },
      mixedInverse: {
        color: "$link",
        textDecorationColor: "$accent",

        hoverStyle: {
          color: "$accentHover",
          textDecorationColor: "$accentHover"
        },

        pressStyle: {
          color: "$linkActive",
          textDecorationColor: "$accentActive"
        },

        focusStyle: {
          color: "$linkActive",
          textDecorationColor: "$accentActive"
        }
      },

      themed: {
        color: "$accent",
        textDecorationColor: "$accent",

        hoverStyle: {
          color: "$accentHover",
          textDecorationColor: "$accentHover"
        },

        pressStyle: {
          color: "$accentActive",
          textDecorationColor: "$accentActive"
        },

        focusStyle: {
          color: "$accentActive",
          textDecorationColor: "$accentActive"
        }
      },
      themedInverse: {
        color: "$accent",
        textDecorationColor: "$accent",

        hoverStyle: {
          color: "$accentHover",
          textDecorationColor: "$accentHover"
        },

        pressStyle: {
          color: "$accentActive",
          textDecorationColor: "$accentActive"
        },

        focusStyle: {
          color: "$accentActive",
          textDecorationColor: "$accentActive"
        }
      }
    },

    inverse: {
      true: {
        hoverStyle: {
          color: "$accentHover",
          textDecorationColor: "$accentHover"
        }
      }
    },

    disabled: {
      true: {
        cursor: "default",
        color: "$linkInactive",

        hoverStyle: {
          color: "$linkInactive"
        }
      }
    }
  } as const,

  defaultVariants: {
    underline: "static",
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
      underline = "static",
      cta = false,
      disabled = false,
      inverse = false,
      color,
      style,
      ...props
    },
    forwardedRef
  ) => {
    let theme = useThemeName();

    let variant = props.variant as BaseLinkTextVariant;
    if (
      !theme ||
      theme === "dark" ||
      theme === "light" ||
      theme.endsWith("base")
    ) {
      variant = "base";
      theme = `${theme?.startsWith("dark") ? "dark" : "light"}_base`;
    } else if (!variant) {
      variant = "themed";
    }

    if (inverse) {
      variant = `${variant}Inverse` as BaseLinkTextVariant;
    }

    const colorStyle = useStyle({ color });

    return (
      <LinkTextFrame
        {...props}
        ref={forwardedRef}
        theme={theme}
        underline={underline}
        cta={cta}
        disabled={disabled}
        inverse={inverse}
        variant={variant}
        style={[
          { textUnderlineOffset: 3 },
          color !== undefined ? colorStyle : undefined,
          style
        ]}>
        {children}
      </LinkTextFrame>
    );
  },
  { staticConfig: { componentName: "LinkText" } }
);

export type LinkTextProps = GetProps<typeof LinkText>;
