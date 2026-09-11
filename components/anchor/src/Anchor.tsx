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
import { styled, View } from "@tamagui/core";
import { Link as AnchorIcon } from "@tamagui/lucide-icons-2";
import type { GestureResponderEvent } from "react-native";
import { Linking, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const AnchorFrame = styled(View, {
  name: "Anchor",
  render: "span",

  alignItems: "center",
  display: "flex",
  flexDirection: "row"
});

const Permalink = styled(View, {
  name: "AnchorPermalink",
  render: "a",

  alignItems: "center",
  marginLeft: "$xl",
  opacity: 0,
  transition: "opacity 150ms ease-out, transform 150ms ease-out",
  x: 0,

  focusStyle: {
    opacity: 1,
    x: 14
  },

  "$group-anchor-hover": {
    opacity: 1,
    x: 14
  }
});

export interface AnchorExtraProps {
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  permalinkLabel?: string;
}

export const Anchor = AnchorFrame.styleable<AnchorExtraProps>(
  (
    {
      children,
      href,
      target,
      rel,
      download,
      permalinkLabel = "Permalink",
      ...props
    },
    forwardedRef
  ) => (
    <AnchorFrame group={"anchor" as any} ref={forwardedRef} {...props}>
      {children}

      <Permalink
        aria-label={href ? permalinkLabel : undefined}
        {...(href &&
          ({
            cursor: "pointer",
            title: permalinkLabel,
            ...(isWeb
              ? { href, target, rel, download }
              : {
                  onPress: (event: GestureResponderEvent) => {
                    props.onPress?.(event);
                    void Linking.openURL(href);
                  }
                })
          } as any))}
        group={"anchorIcon" as any}>
        <AnchorIcon
          aria-hidden={true}
          transition="200ms"
          color="$darkGrey5"
          strokeWidth={2.3}
          height="90%"
          maxHeight="$6xl"
          $group-anchorIcon-hover={{
            color: "$foreground"
          }}
        />
      </Permalink>
    </AnchorFrame>
  ),
  { staticConfig: { componentName: "Anchor" } }
);

export type AnchorProps = GetProps<typeof Anchor>;
