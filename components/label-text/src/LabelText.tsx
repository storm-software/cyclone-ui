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

import { BodyText } from "@cyclone-ui/body-text";
import type { GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";

export const LabelText = styled(BodyText, {
  name: "LabelText",
  render: "label",

  transition: "400ms",
  color: "$accent",
  variant: "lg",

  variants: {
    floating: {
      true: {
        variant: "sm"
      }
    }
  },

  defaultVariants: {
    floating: false
  }
});

export type LabelTextProps = GetProps<typeof LabelText>;
