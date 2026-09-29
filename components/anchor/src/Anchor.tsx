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

import { Link as AnchorIcon } from "@cyclone-ui/icons";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useState } from "react";
import { Linking, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const AnchorFrame = styled(View, {
  displayName: "Anchor",
  render: "span",

  alignItems: "center",
  display: "flex",
  flexDirection: "row"
});

const Permalink = styled(View, {
  displayName: "AnchorPermalink",
  render: "a",
  alignItems: "center",
  marginLeft: "xl",
  opacity: "0 focus:1 group-hover/anchor:1",
  transition: "opacity 150ms ease-out, transform 150ms ease-out",
  x: "0 focus:14px group-hover/anchor:14px"
});

export interface AnchorExtraProps {
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  permalinkLabel?: string;
}

export const Anchor = createStyledHOC(
  AnchorFrame,
  (
    {
      children,
      href,
      target,
      rel,
      download,
      permalinkLabel,
      ...props
    }: GetProps<typeof AnchorFrame> & AnchorExtraProps,
    forwardedRef
  ) => {
    // Themed icons don't accept flat state clauses (e.g.
    // `group-hover/anchorIcon:accent`), so track the permalink hover here.
    const [isIconHovered, setIconHovered] = useState(false);

    return (
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
                    onPress: (
                      event: Parameters<NonNullable<typeof props.onPress>>[0]
                    ) => {
                      props.onPress?.(event);
                      void Linking.openURL(href);
                    }
                  })
            } as any))}
          group={"anchorIcon" as any}
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}>
          <AnchorIcon
            aria-hidden={true}
            transition="200ms"
            color={isIconHovered ? "accent" : "neutral7"}
            height="90%"
            maxHeight="6xl"
          />
        </Permalink>
      </AnchorFrame>
    );
  },
  { displayName: "Anchor" }
);

export type AnchorProps = GetProps<typeof Anchor>;
