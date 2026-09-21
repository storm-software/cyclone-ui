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

import { isWeb } from "@tamagui/constants";
import type { GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";
import { fullscreenStyle } from "@tamagui/stacks";
import { ScrollView as ScrollViewNative } from "react-native";

export const SCROLL_VIEW_CLASS_NAME = "cyclone-scroll-view";

export const SCROLL_VIEW_STYLES = `
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar { width: 6px; height: 6px; background: transparent; }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-track { background: transparent; }
.${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar, .${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar-track { background: color-mix(in srgb, var(--backgroundLowest) 25%, transparent); }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-thumb { background: var(--accentHover); border-radius: ${100_000}px }
.${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar-thumb { background: var(--accent); }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-button { display: none; }
`;

const ScrollViewFrame = styled(
  ScrollViewNative,
  {
    name: "ScrollView",
    scrollEnabled: true,
    // Reserve the native scrollbar gutter even when `overflowY: "auto"`
    // hides its inactive scrollbar. `style` passes this web-only CSS property
    // through React Native Web instead of treating it as a Tamagui style prop.
    style: { scrollbarGutter: "stable" } as any,

    variants: {
      fullscreen: {
        true: fullscreenStyle
      }
    } as const
  },
  {
    accept: {
      contentContainerStyle: "style"
    } as const
  }
);

export const ScrollView = ScrollViewFrame.styleable(
  ({ children, className, ...props }, forwardedRef) => (
    <ScrollViewFrame
      {...props}
      ref={forwardedRef}
      className={`${SCROLL_VIEW_CLASS_NAME}${className ? ` ${className}` : ""}`}>
      {isWeb ? <style>{SCROLL_VIEW_STYLES}</style> : null}
      {children}
    </ScrollViewFrame>
  ),
  { staticConfig: { componentName: "ScrollView" } }
);

export type ScrollView = ScrollViewNative;

export type ScrollViewProps = GetProps<typeof ScrollView>;
