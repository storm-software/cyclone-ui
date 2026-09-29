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

import type { FontSizeTokens, GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";
// Lets TypeScript name `GetFontSizedInput` (SizableText's `size` type) in
// this package's declarations.
import type {} from "@tamagui/get-font-sized";
import { SizableText } from "@tamagui/text";

export const EyebrowText = styled(SizableText, {
  displayName: "EyebrowText",
  render: "h5",
  color: "inkSubtle",
  fontFamily: "eyebrow",
  // Tamagui v3 maps `size: true` to the `sm` / `4` font key; the generated fonts
  // only define `true` plus their own step, so name the default step explicitly.
  size: "true" as FontSizeTokens,
  textTransform: "uppercase",
  variants: {
    variant: {
      lg: {
        fontFamily: "eyebrow"
      },
      // The `eyebrow` token has a single step; the small eyebrow uses the
      // `caption` size with the eyebrow's semibold weight.
      sm: {
        fontFamily: "caption",
        fontWeight: "600"
      }
    }
  } as const
});

export type EyebrowTextProps = GetProps<typeof EyebrowText>;
