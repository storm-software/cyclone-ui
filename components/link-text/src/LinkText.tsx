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

import { useColorThemeName } from "@cyclone-ui/state/theme";
import type { GetProps } from "@tamagui/core";
import { styled, Theme } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

interface LinkTextExtraProps {
  disabled?: boolean;
  underline?: "hover" | "initial" | "static" | "none";
  variant?: "base" | "mixed" | "themed";
  inverse?: boolean;
}

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
        transition: "medium",
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
        transition: "medium",
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
        color: "$foregroundLink",
        textDecorationColor: "$foregroundLink",

        hoverStyle: {
          color: "$foregroundLinkHover",
          textDecorationColor: "$foregroundLinkHover"
        },

        pressStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundLink"
        },

        focusStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundLink"
        }
      },
      mixed: {
        color: "$foregroundInverse",
        textDecorationColor: "$foregroundLink",

        hoverStyle: {
          color: "$foregroundInverseHover",
          textDecorationColor: "$foregroundLinkHover"
        },

        pressStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundInverse"
        },

        focusStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundInverse"
        }
      },
      themed: {
        color: "$foregroundInverse",
        textDecorationColor: "$foregroundInverse",

        hoverStyle: {
          color: "$foregroundInverseHover",
          textDecorationColor: "$foregroundInverseHover"
        },

        pressStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundLink"
        },

        focusStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundLink"
        }
      },
      baseInverse: {
        color: "$foregroundLink",
        textDecorationColor: "$foregroundLink",

        hoverStyle: {
          color: "$foregroundLinkHover",
          textDecorationColor: "$foregroundLinkHover"
        },

        pressStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundLink"
        },

        focusStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundLink"
        }
      },
      mixedInverse: {
        color: "$foregroundLink",
        textDecorationColor: "$foregroundInverse",

        hoverStyle: {
          color: "$foregroundLinkHover",
          textDecorationColor: "$foregroundInverseHover"
        },

        pressStyle: {
          color: "$foregroundInverse",
          textDecorationColor: "$foregroundLink"
        },

        focusStyle: {
          color: "$foregroundInverse",
          textDecorationColor: "$foregroundLink"
        }
      },
      themedInverse: {
        color: "$foregroundLink",
        textDecorationColor: "$foregroundLink",

        hoverStyle: {
          color: "$foregroundLinkHover",
          textDecorationColor: "$foregroundLinkHover"
        },

        pressStyle: {
          color: "$foregroundCaption",
          textDecorationColor: "$foregroundCaption"
        },

        focusStyle: {
          color: "$foregroundLink",
          textDecorationColor: "$foregroundLink"
        }
      }
    },

    disabled: {
      true: {
        cursor: "default",
        color: "$foregroundLinkDisabled",
        textDecorationLine: "none",

        hoverStyle: {
          color: "$foregroundLinkDisabled",
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
    const colorRole = useColorThemeName();
    const isLinkThemed =
      !colorRole || colorRole === "link" || colorRole === "base";

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
      <Theme name={isLinkThemed ? "link" : colorRole}>
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
