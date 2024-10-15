import { ColorRole } from "@cyclone-ui/colors";
import { isWeb } from "@tamagui/constants";
import { styled, Text, useThemeName, type TextProps } from "@tamagui/core";
import { Square } from "@tamagui/shapes";
import { Linking } from "react-native";
import { useLink, UseLinkProps } from "solito/link";

export interface LinkExtraProps extends UseLinkProps {
  target?: string;
  underline?: "hover" | "initial" | "static" | "none";
}

export type LinkProps = TextProps & LinkExtraProps;

export const LINK_NAME = "Link";

const LinkFrame = styled(Text, {
  name: LINK_NAME,
  tag: "a",
  accessibilityRole: "link",

  animation: "200ms",
  textDecorationLine: "none",
  color: "$color",
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
    }
  } as const,

  defaultVariants: {
    cta: false
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
      underline = "initial",
      cta = false,
      width,
      href,
      ...props
    },
    forwardedRef
  ) => {
    const linkProps = useLink({ href, ...props });
    const themeName = useThemeName({ parent: true });

    return (
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
          group={"link" as any}
          cta={cta}>
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
    );
  },
  { staticConfig: { componentName: "Link" } }
);
