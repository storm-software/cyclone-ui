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
import type {
  GetFinalProps,
  GetProps,
  TamaguiComponent
} from "@tamagui/core";
import { createStyledHOC, styled } from "@tamagui/core";
import { ScrollView as TamaguiScrollView } from "@tamagui/scroll-view";

export const SCROLL_VIEW_CLASS_NAME = "cyclone-scroll-view";

export const SCROLL_VIEW_STYLES = `
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar { width: 6px; height: 6px; background: transparent; }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-track { background: transparent; }
.${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar, .${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar-track { background: color-mix(in srgb, var(--surfaceSunken) 25%, transparent); }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-thumb { background: var(--accentHover); border-radius: ${100_000}px }
.${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar-thumb { background: var(--accent); }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-button { display: none; }
`;

// Built on Tamagui's `ScrollView` (a DOM `WebScrollView` on web) rather than
// React Native's: React Native Web drops `className`, so the
// `SCROLL_VIEW_CLASS_NAME` selectors in `SCROLL_VIEW_STYLES` never matched.
const ScrollViewFrame = styled(
  TamaguiScrollView,
  {
    displayName: "ScrollView",
    scrollEnabled: true,
    // Reserve the native scrollbar gutter even when `overflowY: "auto"`
    // hides its inactive scrollbar. `style` passes this web-only CSS property
    // through React Native Web instead of treating it as a Tamagui style prop.
    style: { scrollbarGutter: "stable" } as any,

    variants: {
      size: {
        sm: {
          width: "90%"
        },
        lg: {
          width: "100%"
        }
      },
      fullscreen: {
        // v3 removed `fullscreenStyle`; this is its v2 value.
        true: {
          position: "absolute",
          inset: 0
        }
      }
    } as const,

    defaultVariants: {
      size: "sm"
    }
  }
  // v2 passed `{ accept: { contentContainerStyle: "style" } }` here so
  // `contentContainerStyle` resolved Tamagui tokens. v3 removed `accept`, so
  // `contentContainerStyle` is now passed to the underlying scroll view
  // unresolved.
);

type ScrollViewVariants = {
  size?: "sm" | "lg";
  fullscreen?: boolean;
};

// Spelled out because the inferred type references `WebScrollViewProps`,
// which `@tamagui/scroll-view` does not export (TS2883).
type ScrollViewComponent =
  typeof TamaguiScrollView extends TamaguiComponent<
    any,
    infer Ref,
    infer NonStyledProps,
    infer BaseStyles,
    any,
    infer StaticProperties
  >
    ? TamaguiComponent<
        GetFinalProps<NonStyledProps, BaseStyles, ScrollViewVariants>,
        Ref,
        NonStyledProps,
        BaseStyles,
        ScrollViewVariants,
        StaticProperties
      >
    : never;

export const ScrollView: ScrollViewComponent = createStyledHOC(
  ScrollViewFrame,
  ({ children, className, ...props }, forwardedRef) => (
    <ScrollViewFrame
      {...props}
      ref={forwardedRef}
      className={`${SCROLL_VIEW_CLASS_NAME}${className ? ` ${className}` : ""}`}>
      {isWeb ? <style>{SCROLL_VIEW_STYLES}</style> : null}
      {children}
    </ScrollViewFrame>
  ),
  { displayName: "ScrollView" }
);

export type ScrollView = TamaguiScrollView;

export type ScrollViewProps = GetProps<typeof ScrollView>;
