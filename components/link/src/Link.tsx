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

import { LinkText } from "@cyclone-ui/link-text";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { isWeb } from "@tamagui/constants";
import type { GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";
import { ArrowUpRight } from "@tamagui/lucide-icons-2";
import type { GestureResponderEvent } from "react-native";
import { Linking } from "react-native";

const LinkFrame = styled(LinkText, {
  name: "Link",
  render: "a",
  role: "link",
  color: "$foregroundLink",

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
                  void Linking.openURL(href);
                }
              }
            })}>
        {children}

        {external && (
          <ThemeableIcon
            size="$4xl"
            render="span"
            display="inline-flex"
            color="$foregroundLink"
            style={{ verticalAlign: "middle" }}
            $group-link-hover={{
              color: "$foregroundLinkHover",
              x: 2,
              y: -2
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
