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
import { styled } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

export const InlineCodeText = styled(SizableText, {
  displayName: "InlineCodeText",
  render: "span",
  backgroundColor: "floating-active",
  color: "emphasis",
  display: "inline-flex",
  fontFamily: "code",
  lineHeight: "none",
  paddingTop: "lg",
  paddingBottom: "xl",
  paddingHorizontal: "xl",
  size: "md",
  // after `size`: its variant writes the font's size-keyed weight (`md` → 900)
  fontWeight: "normal",
  borderRadius: "sm",
  borderWidth: 1,
  borderColor: "hairline"
});

export type InlineCodeTextProps = GetProps<typeof InlineCodeText>;
