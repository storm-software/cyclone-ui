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

import { ColorRole } from "@cyclone-ui/colors";
import { ThemedIcon, type ThemedIconProp } from "@cyclone-ui/themeable-icon";
import { isWeb } from "@tamagui/constants";
import { GetProps, styled, Text, useThemeName } from "@tamagui/core";
import { ArrowUpRight } from "@tamagui/lucide-icons";
import { Square } from "@tamagui/shapes";
import { XStack } from "@tamagui/stacks";
import { useMemo } from "react";
import { Linking } from "react-native";
import { useLink, UseLinkProps } from "solito/link";
export interface LinkExtraProps extends UseLinkProps {
  target?: string;
  rel?: string;
  download?: string;
  underline?: "hover" | "initial" | "static" | "none";
  external?: boolean;
}

export const LINK_NAME = "Link";

const LinkFrame = styled(Text, {
  name: LINK_NAME,
  tag: "a",
  accessibilityRole: "link",

  animation: "200ms",
  textDecorationLine: "none",
  color: "$fg",
  fontFamily: "$link",
  fontSize: "$true",
  fontWeight: "$true",
  cursor: "pointer",
  whiteSpace: "nowrap",
  position: "relative",
  zIndex: "$2",

  hoverStyle: {
    color: "$colorHover"
  },

  focusVisibleStyle: {
    color: "$colorFocus"
  },

  pressStyle: {
    color: "$colorPress"
  },

  variants: {
    cta: {
      true: {
        fontFamily: "$cta",
        fontWeight: "$bold",
        textTransform: "uppercase"
      }
    },

    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$disabled",
        textDecorationLine: "none"
      },
      false: {
        color: "$fg"
      }
    }
  } as const,

  defaultVariants: {
    cta: false,
    disabled: false
  }
});

const Underline = styled(Square, {
  name: LINK_NAME,

  animation: "lazy",
  position: "absolute",
  zIndex: -1,
  width: "100%",
  height: 2,
  left: 0,
  bottom: -1,
  backgroundColor: "$primary",
  borderRadius: 2,
  display: "block",

  variants: {
    underline: {
      hover: {
        transformOrigin: "right",
        scaleX: 0
      },

      initial: {
        transformOrigin: "left",
        scaleX: 1
      },

      static: {
        transformOrigin: "left",
        scaleX: 1
      },

      none: {}
    },

    cta: {
      true: {
        bottom: -3
      }
    }
  } as const,

  defaultVariants: {
    underline: "initial",
    cta: false
  }
});

export const Link = LinkFrame.styleable<LinkExtraProps>(
  (
    {
      target,
      children,
      cta = false,
      external = false,
      disabled = false,
      href,
      color,
      ...props
    },
    forwardedRef
  ) => {
    const linkProps = useLink({ href, ...props });
    const themeName = useThemeName({ parent: true });

    const underline = useMemo(
      () => (disabled ? "static" : props.underline || "initial"),
      [disabled, props.underline]
    );

    return (
      <XStack group={"link" as any} gap="0.25" alignItems="flex-end">
        <Text position="relative">
          <LinkFrame
            {...props}
            {...linkProps}
            {...(isWeb
              ? {
                  href: linkProps.href,
                  target
                }
              : {
                  onPress: event => {
                    props.onPress?.(event);
                    if (linkProps.href !== undefined) {
                      Linking.openURL(linkProps.href);
                    }
                  }
                })}
            ref={forwardedRef}
            cta={cta}
            color={color}>
            {children}
            {underline !== "none" && (
              <Underline
                underline={underline}
                cta={cta}
                theme={
                  !themeName || themeName.toLowerCase().includes(ColorRole.BASE)
                    ? ColorRole.BRAND
                    : themeName
                }
                $group-link-hover={
                  underline === "static"
                    ? {}
                    : underline === "initial"
                      ? {
                          transformOrigin: "right",
                          scaleX: 0
                        }
                      : {
                          transformOrigin: "left",
                          scaleX: 1
                        }
                }
                $group-card-hover={
                  underline === "static"
                    ? {}
                    : underline === "initial"
                      ? {
                          transformOrigin: "right",
                          scaleX: 0
                        }
                      : {
                          transformOrigin: "left",
                          scaleX: 1
                        }
                }
                $group-link-focus={
                  underline === "static"
                    ? {}
                    : underline === "initial"
                      ? {
                          transformOrigin: "right",
                          scaleX: 0
                        }
                      : {
                          transformOrigin: "left",
                          scaleX: 1
                        }
                }
                $group-link-pressed={
                  underline === "static"
                    ? {}
                    : underline === "initial"
                      ? {
                          transformOrigin: "right",
                          scaleX: 0
                        }
                      : {
                          transformOrigin: "left",
                          scaleX: 1
                        }
                }
              />
            )}
          </LinkFrame>
        </Text>
        {external && (
          <ThemedIcon
            size="$1"
            theme={themeName}
            color={(color as ThemedIconProp["color"]) || "$fg"}
            $group-link-hover={{
              color: "$colorHover"
            }}>
            <ArrowUpRight />
          </ThemedIcon>
        )}
      </XStack>
    );
  },
  { staticConfig: { componentName: LINK_NAME } }
);

export type LinkProps = GetProps<typeof Link>;
