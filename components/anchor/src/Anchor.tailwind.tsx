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

"use client";

// The `@tamagui/tailwind` variant of Anchor.tsx, installed in its place by
// `cyclone-ui init --style tailwind`. Keep the exports in sync.

import { Link as AnchorIcon } from "@cyclone-ui/icons";
import type { TransitionProp } from "@tamagui/core";
import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useState } from "react";
import { Linking, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const AnchorFrame = styled(View, "flex flex-row items-center", {
  displayName: "Anchor"
});

const Permalink = styled(
  View,
  "ml-lg translate-x-[0px] items-center opacity-0 focus:translate-x-[10px] focus:opacity-100 group-hover/anchor:translate-x-[10px] group-hover/anchor:opacity-100",
  { displayName: "AnchorPermalink" }
);

// `@tamagui/tailwind` leaves `transition` out of its props, but its runtime
// animates class changes with it like any Tamagui component.
const reveal: { transition: TransitionProp } = {
  transition: "opacity 250ms ease-out, transform 250ms ease-out"
};

export interface AnchorExtraProps {
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  permalinkLabel?: string;
}

export interface AnchorProps
  extends ComponentPropsWithoutRef<typeof AnchorFrame>, AnchorExtraProps {}

export const Anchor = forwardRef<TailwindViewElement, AnchorProps>(
  (
    { children, href, target, rel, download, permalinkLabel, ...props },
    forwardedRef
  ) => {
    // Themed icons don't accept flat state clauses (e.g.
    // `group-hover/anchorIcon:primary`), so track the permalink hover here.
    const [isIconHovered, setIconHovered] = useState(false);

    return (
      <AnchorFrame render="span" group="anchor" ref={forwardedRef} {...props}>
        {children}

        <Permalink
          render="a"
          {...reveal}
          aria-label={href ? permalinkLabel : undefined}
          {...(href &&
            ({
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
          className={href ? "cursor-pointer" : undefined}
          group="anchorIcon"
          onMouseEnter={() => setIconHovered(true)}
          onMouseLeave={() => setIconHovered(false)}>
          <AnchorIcon
            aria-hidden={true}
            transition="200ms"
            color={isIconHovered ? "primary" : "neutral7"}
            height="90%"
            maxHeight="7xl"
          />
        </Permalink>
      </AnchorFrame>
    );
  }
);
