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
import { Paragraph } from "@tamagui/text";

export const LABEL_TEXT_NAME = "LabelText";

export const LabelText = styled(Paragraph, {
  name: LABEL_TEXT_NAME,

  color: "$color",
  fontFamily: "$label",
  fontSize: "$true",
  fontWeight: "$true",
  lineHeight: "$true"
});

export type LabelTextProps = GetProps<typeof LabelText>;
