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
import { SizableText } from "@tamagui/text";

export const BodyText = styled(SizableText, {
  name: "BodyText",
  render: "p",

  color: "$inkBody",
  fontFamily: "$body-md",

  variants: {
    variant: {
      sm: {
        fontFamily: "$body-sm"
      },
      md: {
        fontFamily: "$body-md"
      },
      lg: {
        fontFamily: "$body-lg"
      }
    }
  } as const,

  defaultVariants: {
    variant: "md"
  }
});

export type BodyTextProps = GetProps<typeof BodyText>;
