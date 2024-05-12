import { useLink, UseLinkProps } from "solito/link";
import { isWeb } from "@tamagui/constants";
import { styled, useThemeName } from "@tamagui/core";
import type { SizableTextProps } from "@tamagui/text";
import { SizableText } from "@tamagui/text";
import { Square } from "@tamagui/shapes";
import { Linking } from "react-native";
import { ColorRole } from "@cyclone-ui/themes";

export interface LinkExtraProps extends UseLinkProps {
  target?: string;
  underline?: "hover" | "initial" | "static" | "none";
}

export type LinkProps = SizableTextProps & LinkExtraProps;

const LinkFrame = styled(SizableText, {
  name: "Link",
  tag: "a",
  accessibilityRole: "link",

  animation: "$slow",
  textDecorationLine: "none",
  color: "$color",
  fontFamily: "$body",
  fontWeight: "$6",
  cursor: "pointer",
  whiteSpace: "nowrap",
  position: "relative",

  hoverStyle: {
    color: "$colorHover"
  },

  focusVisibleStyle: {
    color: "$colorFocus"
  },

  pressStyle: {
    color: "$colorPress"
  }
});

const Underline = styled(Square, {
  name: "LinkUnderline",
  animation: { scaleX: { type: "$slow", overshootClamping: true } },
  position: "absolute",
  width: "100%",
  height: "2px",
  left: 0,
  bottom: "$-0.75",
  backgroundColor: "$primary",
  borderRadius: "2px",
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
    }
  } as const,

  defaultVariants: {
    underline: "hover"
  }
});

export const Link = LinkFrame.styleable<LinkExtraProps>(
  (
    {
      target,
      children,
      underline = "initial",
      width,
      href,
      size,
      ...props
    }: LinkProps,
    forwardedRef
  ) => {
    const linkProps = useLink({ href, ...props });
    const themeName = useThemeName({ parent: true });

    return (
      <SizableText size={size}>
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
          group={"link" as any}>
          {children}
          {underline !== "none" && (
            <Underline
              underline={underline}
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
      </SizableText>
    );
  },
  { staticConfig: { componentName: "Link" } }
);
