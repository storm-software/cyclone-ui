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

import type { GetProps, TamaguiConfig, TextStyle } from "@tamagui/core";
import { styled } from "@tamagui/core";
// Lets TypeScript name `GetFontSizedInput` (SizableText's `size` type) in
// this package's declarations.
import type {} from "@tamagui/get-font-sized";
import { SizableText } from "@tamagui/text";

export type BodyTextSize = "md" | "sm";

// Each size (and weight) is its own typography token (`body-md`,
// `body-sm-bold`, ...), so switch the font family and read that font's metrics
// directly. `env.font` only reflects a family contributed earlier in the style
// walk.
const getBodyFont = (
  size: BodyTextSize | undefined,
  bold: boolean | undefined,
  env: { fonts: TamaguiConfig["fonts"] }
) => {
  const key: BodyTextSize = size === "sm" ? "sm" : "md";
  const fontFamily = `body-${key}${bold ? "-bold" : ""}`;
  const font = env.fonts[fontFamily];

  return {
    fontFamily,
    fontSize: font?.size[key],
    lineHeight: font?.lineHeight?.[key],
    fontWeight: font?.weight?.[key] as TextStyle["fontWeight"],
    letterSpacing: font?.letterSpacing?.[key]
  };
};

export const BodyText = styled(SizableText, {
  displayName: "BodyText",
  render: "p",
  color: "inkBody",
  fontFamily: "body-md",
  size: "md",
  variants: {
    // Replaces SizableText's `getFontSized` variant outright.
    size: styled.dynamic<BodyTextSize>((size, env) =>
      getBodyFont(size, false, env)
    ),

    // Styled by the `.resolve` below because the font depends on `size`.
    bold: styled.dynamic<boolean>()
  } as const
}).resolve((props, env) =>
  // Only take over when bold, so subclasses that override `fontFamily` (such
  // as LabelText) keep working.
  props.bold
    ? getBodyFont(props.size as BodyTextSize | undefined, true, env)
    : undefined
);

export type BodyTextProps = GetProps<typeof BodyText>;
