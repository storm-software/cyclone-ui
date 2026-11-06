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

import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, Text, View } from "@tamagui/core";

// A View: the border and background didn't show on a Text frame.
const KbdFrame = styled(View, {
  displayName: "Kbd",
  render: "kbd",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  gap: "lg",
  borderWidth: 1,
  borderColor: "hairline",
  borderRadius: "sm",
  backgroundColor: "surface",
  // Like shadcn's: a key inside a button doesn't swallow its presses.
  userSelect: "none",
  pointerEvents: "none",

  variants: {
    size: {
      sm: {
        height: "2xl",
        minWidth: "2xl",
        paddingHorizontal: "md"
      },
      md: {
        height: "4xl",
        minWidth: "4xl",
        paddingHorizontal: "lg"
      },
      lg: {
        height: "6xl",
        minWidth: "6xl",
        paddingHorizontal: "xl"
      }
    }
  } as const,

  defaultVariants: {
    size: "md"
  }
});

// Also wraps icons, whose `currentColor` a View frame wouldn't set.
const KbdText = styled(Text, {
  displayName: "KbdText",
  display: "inline-flex",
  alignItems: "center",
  gap: "lg",
  color: "ink",
  fontFamily: "body",
  fontWeight: "medium",
  // A unitless multiplier; the frame's fixed height centers the text.
  lineHeight: 1,
  whiteSpace: "nowrap",

  variants: {
    size: {
      sm: { fontSize: "xxxs" },
      md: { fontSize: "xxs" },
      lg: { fontSize: "xs" }
    }
  } as const
});

export type KbdProps = GetProps<typeof KbdFrame>;

/**
 * A keyboard key, such as `Ctrl`, `⌘` or `Esc`, like shadcn/ui's `Kbd`.
 *
 * @remarks
 * Renders a `<kbd>` that sits inline in text, buttons and tooltips. Icons
 * can be keys too: give them a `size` that fits (12px at `md`) and
 * `color="currentColor"`.
 */
export const Kbd = createStyledHOC(
  KbdFrame,
  ({ size = "md", children, ...props }: KbdProps, forwardedRef) => (
    <KbdFrame ref={forwardedRef} size={size} {...props}>
      <KbdText size={size}>{children}</KbdText>
    </KbdFrame>
  ),
  { displayName: "Kbd" }
);

/**
 * Keys pressed together, such as `Ctrl` + `K`: lays out `Kbd`s, and any text
 * between them, side by side.
 */
export const KbdGroup = styled(Text, {
  displayName: "KbdGroup",
  render: "kbd",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "lg",
  color: "subtle",
  fontFamily: "body",
  whiteSpace: "nowrap"
});

export type KbdGroupProps = GetProps<typeof KbdGroup>;
