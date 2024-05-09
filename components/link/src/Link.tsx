import { useLink, UseLinkProps } from "solito/link";
import { isWeb } from "@tamagui/constants";
import { styled, View } from "@tamagui/core";
import type { SizableTextProps } from "@tamagui/text";
import { SizableText } from "@tamagui/text";
import { Square } from "@tamagui/shapes";
import { Linking } from "react-native";

export interface LinkExtraProps extends UseLinkProps {
  target?: string;
  underline?: "hover" | "initial" | "none";
}

export type LinkProps = SizableTextProps & LinkExtraProps;

const LinkFrame = styled(SizableText, {
  name: "Link",
  tag: "a",
  accessibilityRole: "link",
  textDecorationLine: "none",
  color: "$color",
  fontWeight: "bold",
  cursor: "pointer",
  textAlign: "center",

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
  animation: "medium",
  position: "absolute",
  width: "100%",
  height: "2px",
  left: 0,
  bottom: "-2px",
  backgroundColor: "$accent10",
  borderRadius: "2px",

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

      none: {}
    }
  } as const,

  defaultVariants: {
    underline: "hover"
  }
});

export const Link = LinkFrame.styleable<LinkExtraProps>(
  (
    { target, children, underline = "hover", width, ...props }: LinkProps,
    ref
  ) => {
    const linkProps = useLink(props);

    return (
      <View position="relative" group width={width}>
        <LinkFrame
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
          ref={ref as any}>
          {children}
        </LinkFrame>
        {underline !== "none" && (
          <Underline
            underline={underline}
            $group-hover={
              underline === "initial"
                ? {
                    transformOrigin: "right",
                    scaleX: 0
                  }
                : {
                    transformOrigin: "left",
                    scaleX: 1
                  }
            }
            $group-focus={
              underline === "initial"
                ? {
                    transformOrigin: "right",
                    scaleX: 0
                  }
                : {
                    transformOrigin: "left",
                    scaleX: 1
                  }
            }
            $group-pressed={
              underline === "initial"
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
      </View>
    );
  }
);
