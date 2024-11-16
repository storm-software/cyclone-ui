/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import { GetProps, styled } from "@tamagui/core";
import { SizableText } from "@tamagui/text";
import { ColorThemeName } from "@cyclone-ui/colors";

export const EyebrowText = styled(SizableText, {
  name: "EyebrowText",
  tag: "h5",

  theme: ColorThemeName.BASE,
  color: "$tertiary",
  fontFamily: "$eyebrow",
  size: "$true",
  textTransform: "uppercase",
});

export type EyebrowTextProps = GetProps<typeof EyebrowText>;
