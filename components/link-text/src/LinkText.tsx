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
import { styled, useThemeName } from "@tamagui/core";
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
        color: "$foregroundLink",
        textDecorationColor: "$foregroundLink",

        hoverStyle: {
          color: "$foregroundLinkHover",
          textDecorationColor: "$foregroundLinkHover"
        },

        pressStyle: {
          color: "$foregroundLinkPressed",
          textDecorationColor: "$foregroundLinkPressed"
        },

        focusStyle: {
          color: "$foregroundLinkFocused",
          textDecorationColor: "$foregroundLinkFocused"
        }
      },
      baseInverse: {
        color: "$foreground",
        textDecorationColor: "$foreground",

        hoverStyle: {
          color: "$foregroundHover",
          textDecorationColor: "$foregroundHover"
        },

        pressStyle: {
          color: "$foregroundPressed",
          textDecorationColor: "$foregroundPressed"
        },

        focusStyle: {
          color: "$foregroundFocused",
          textDecorationColor: "$foregroundFocused"
        }
      },

      mixed: {
        color: "$foreground",
        textDecorationColor: "$foregroundLink",

        hoverStyle: {
          color: "$foregroundHover",
          textDecorationColor: "$foregroundLinkHover"
        },

        pressStyle: {
          color: "$foregroundPressed",
          textDecorationColor: "$foregroundLinkPressed"
        },

        focusStyle: {
          color: "$foregroundFocused",
          textDecorationColor: "$foregroundLinkFocused"
        }
      },
      mixedInverse: {
        color: "$foregroundLink",
        textDecorationColor: "$foreground",

        hoverStyle: {
          color: "$foregroundHover",
          textDecorationColor: "$foregroundHover"
        },

        pressStyle: {
          color: "$foregroundLinkPressed",
          textDecorationColor: "$foregroundPressed"
        },

        focusStyle: {
          color: "$foregroundLinkFocused",
          textDecorationColor: "$foregroundFocused"
        }
      },

      themed: {
        color: "$foreground",
        textDecorationColor: "$foreground",

        hoverStyle: {
          color: "$foregroundHover",
          textDecorationColor: "$foregroundHover"
        },

        pressStyle: {
          color: "$foregroundPressed",
          textDecorationColor: "$foregroundPressed"
        },

        focusStyle: {
          color: "$foregroundFocused",
          textDecorationColor: "$foregroundFocused"
        }
      },
      themedInverse: {
        color: "$foreground",
        textDecorationColor: "$foreground",

        hoverStyle: {
          color: "$foregroundHover",
          textDecorationColor: "$foregroundHover"
        },

        pressStyle: {
          color: "$foregroundPressed",
          textDecorationColor: "$foregroundPressed"
        },

        focusStyle: {
          color: "$foregroundFocused",
          textDecorationColor: "$foregroundFocused"
        }
      }
    },

    inverse: {
      true: {
        hoverStyle: {
          color: "$foregroundHover",
          textDecorationColor: "$foregroundHover"
        }
      }
    },

    disabled: {
      true: {
        cursor: "default",
        color: "$foregroundLinkDisabled",

        hoverStyle: {
          color: "$foregroundLinkDisabled"
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
      theme.endsWith("primary") ||
      theme.endsWith("secondary")
    ) {
      variant = "base";
      theme = `${theme?.startsWith("dark") ? "dark" : "light"}_primary`;
    } else if (!variant) {
      variant = "themed";
    }

    if (inverse) {
      variant = `${variant}Inverse` as BaseLinkTextVariant;
    }

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
        style={[{ textUnderlineOffset: 3 }, style]}>
        {children}
      </LinkTextFrame>
    );
  },
  { staticConfig: { componentName: "LinkText" } }
);

export type LinkTextProps = GetProps<typeof LinkText>;
