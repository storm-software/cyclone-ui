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

import { isWeb } from "@tamagui/constants";
import type { GetProps, TamaguiComponent } from "@tamagui/core";
import { createStyledHOC, styled } from "@tamagui/core";
import { ScrollView as TamaguiScrollView } from "@tamagui/scroll-view";

export const SCROLL_VIEW_CLASS_NAME = "cyclone-scroll-view";

// `::-webkit-scrollbar-thumb` ignores `transition`, so the thumb color reads a
// registered (and therefore animatable) custom property that transitions on
// the scroll view itself. A transparent border on the thumb's outer side (with
// `background-clip: padding-box`) leaves an `lg` gap between the scrollbar and
// the scroll view's outer edge without adding padding around the content.
// The inner (padding-box) radius is the outer radius minus the border width,
// so the border-side radii add `lg` back to keep the visible 6px thumb fully
// rounded instead of clipped flat on that side.
export const SCROLL_VIEW_STYLES = `
@property --cyclone-scroll-view-thumb { syntax: "<color>"; inherits: true; initial-value: transparent; }
.${SCROLL_VIEW_CLASS_NAME} { --cyclone-scroll-view-thumb: transparent; transition: --cyclone-scroll-view-thumb 200ms ease-out, scrollbar-color 200ms ease-out; }
.${SCROLL_VIEW_CLASS_NAME}:hover { --cyclone-scroll-view-thumb: var(--subtle); }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar { width: calc(6px + var(--t-space-lg)); height: calc(6px + var(--t-space-lg)); background: transparent; }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-track { background: transparent; }
.${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar, .${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar-track { background: color-mix(in srgb, var(--sunken) 0%, transparent); }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-thumb { background-color: var(--cyclone-scroll-view-thumb); background-clip: padding-box; border: 0 solid transparent; }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-thumb:vertical { border-right-width: var(--t-space-lg); border-radius: 3px calc(3px + var(--t-space-lg)) calc(3px + var(--t-space-lg)) 3px / 3px; }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-thumb:horizontal { border-bottom-width: var(--t-space-lg); border-radius: 3px / 3px 3px calc(3px + var(--t-space-lg)) calc(3px + var(--t-space-lg)); }
.${SCROLL_VIEW_CLASS_NAME}:hover::-webkit-scrollbar-thumb:hover { background-color: var(--subtle-hovered); }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-button { display: none; }
.${SCROLL_VIEW_CLASS_NAME}::-webkit-scrollbar-corner { background: transparent; }
@supports not selector(::-webkit-scrollbar) {
  .${SCROLL_VIEW_CLASS_NAME} { scrollbar-color: transparent transparent; }
  .${SCROLL_VIEW_CLASS_NAME}:hover { scrollbar-color: var(--subtle-hovered) transparent; }
}
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
          width: "84%"
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

export interface ScrollViewVariants {
  size?: "sm" | "lg";
  fullscreen?: boolean;
}

// Spelled out because the inferred type references `WebScrollViewProps`,
// which `@tamagui/scroll-view` does not export (TS2883).
// Keep Tamagui's deferred props so the v3.2 styled HOC remains assignable.
type ResolvedScrollViewComponent =
  typeof TamaguiScrollView extends TamaguiComponent<
    infer Props,
    infer Ref,
    infer NonStyledProps,
    infer BaseStyles,
    any,
    infer StaticProperties
  >
    ? TamaguiComponent<
        Props,
        Ref,
        NonStyledProps,
        BaseStyles,
        ScrollViewVariants,
        StaticProperties
      >
    : never;

// An interface (unlike the conditional alias above) keeps its name in emitted
// declarations, so dependents such as `Popover.Content.ScrollView` reference it
// rather than expanding it back to `WebScrollViewProps`.
export interface ScrollViewComponent extends ResolvedScrollViewComponent {}

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
