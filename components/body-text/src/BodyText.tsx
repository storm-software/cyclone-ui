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
import { styled } from "@tamagui/core";
// Lets TypeScript name `GetFontSizedInput` (SizableText's `size` type) in
// this package's declarations.
import type {} from "@tamagui/get-font-sized";
import { SizableText } from "@tamagui/text";

export type BodyTextSize = "md" | "sm";

export const BodyText = styled(SizableText, {
  displayName: "BodyText",
  render: "p",
  color: "inkBody",
  fontFamily: "body-md",
  size: "md",
  variants: {
    // Each size is its own typography token (`body-md` / `body-sm`), so switch
    // the font family and read that font's metrics directly. `env.font` only
    // reflects a family contributed earlier in the style walk, and this
    // replaces SizableText's `getFontSized` variant outright.
    size: styled.dynamic<BodyTextSize>((size, env) => {
      const key: BodyTextSize = size === "sm" ? "sm" : "md";
      const fontFamily = `body-${key}`;
      const font = env.fonts[fontFamily];

      return {
        fontFamily,
        fontSize: font?.size[key],
        lineHeight: font?.lineHeight?.[key],
        fontWeight: font?.weight?.[key],
        letterSpacing: font?.letterSpacing?.[key]
      };
    })
  } as const
});

export type BodyTextProps = GetProps<typeof BodyText>;
