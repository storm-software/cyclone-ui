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

import { getFontSizedFromSize } from "@cyclone-ui/helpers";
import type { GetProps } from "@tamagui/core";
import { styled, Text } from "@tamagui/core";

export const BodyText = styled(Text, {
  name: "BodyText",
  render: "p",

  color: "$foregroundBody",
  fontFamily: "$body",

  variants: {
    size: {
      "...size": getFontSizedFromSize
    }
  } as const,

  defaultVariants: {
    size: "$true"
  }
});

export type BodyTextProps = GetProps<typeof BodyText>;
