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

import { LinkText } from "@cyclone-ui/link-text";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { isWeb } from "@tamagui/constants";
import { GetProps, styled } from "@tamagui/core";
import { ArrowUpRight } from "@tamagui/lucide-icons";
import { GestureResponderEvent, Linking } from "react-native";

const LinkFrame = styled(LinkText, {
  name: "Link",
  tag: "a",
  accessibilityRole: "link",

  cursor: "pointer"
});

export const Link = LinkFrame.styleable<{
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  external?: boolean;
}>(
  (
    { target, children, href, external, size = "$true", ...props },
    forwardedRef
  ) => {
    // const adjusted = useMemo(() => getSized(size, { shift: -2 }), [size]);

    return (
      <LinkFrame
        group={"link" as any}
        ref={forwardedRef}
        size={size}
        {...props}
        {...(isWeb
          ? {
              href,
              target: external ? "_blank" : target
            }
          : {
              onPress: (event: GestureResponderEvent) => {
                props.onPress?.(event);
                if (href !== undefined) {
                  Linking.openURL(href);
                }
              }
            })}>
        {children}

        {external && (
          <ThemeableIcon
            size="$1"
            display="inline"
            paddingTop={5}
            color="$secondary"
            $group-link-hover={{
              color: "$colorHover",
              x: 50,
              y: -50
            }}>
            <ArrowUpRight />
          </ThemeableIcon>
        )}
      </LinkFrame>
    );
  },
  { staticConfig: { componentName: "Link" } }
);

export type LinkProps = GetProps<typeof Link>;
