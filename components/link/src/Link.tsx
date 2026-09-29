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

import { ArrowUpRight } from "@cyclone-ui/icons";
import { LinkText } from "@cyclone-ui/link-text";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { isWeb } from "@tamagui/constants";
import type { FontSizeTokens, GetProps } from "@tamagui/core";
import { createStyledHOC, styled } from "@tamagui/core";
import { Linking } from "react-native";

const LinkFrame = styled(LinkText, {
  displayName: "Link",
  render: "a",
  role: "link",

  cursor: "pointer"
});

// `ThemeableIcon` is a styled HOC; v3 `styled()` only forwards style defaults to
// it, so `size` is passed as a prop at the call site below.
const ThemeableIconFrame = styled(ThemeableIcon, {
  displayName: "Link",
  render: "span",
  display: "inline-flex",
  marginBottom: "md",
  color: "currentColor",
  cursor: "pointer"
});

export const Link = createStyledHOC(
  LinkFrame,
  (
    {
      target,
      children,
      href,
      external,
      // v3 `SizableText` maps `size: true` to a `sm` / `4` font key the fonts do
      // not define; the string key selects the font's default step.
      size = "true" as FontSizeTokens,
      ...props
    }: GetProps<typeof LinkFrame> & {
      href?: string;
      target?: string;
      rel?: string;
      download?: string;
      external?: boolean;
    },
    forwardedRef
  ) => {
    return (
      <LinkFrame
        group={"link" as any}
        ref={forwardedRef}
        // An explicit `size={true}` (e.g. from a parent context) needs the same
        // mapping as the default.
        size={size === true ? ("true" as FontSizeTokens) : size}
        {...props}
        {...(isWeb
          ? {
              href,
              target: external ? "_blank" : target
            }
          : {
              onPress: (
                event: Parameters<NonNullable<typeof props.onPress>>[0]
              ) => {
                props.onPress?.(event);
                if (href !== undefined) {
                  void Linking.openURL(href);
                }
              }
            })}>
        {children}

        {external && (
          <ThemeableIconFrame
            size="4xl"
            style={{ verticalAlign: "middle" }}
            x="group-hover/link:2px"
            y="group-hover/link:-2px">
            <ArrowUpRight />
          </ThemeableIconFrame>
        )}
      </LinkFrame>
    );
  },
  { displayName: "Link" }
);

export type LinkProps = GetProps<typeof Link>;
