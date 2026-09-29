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

import { createStyledHOC } from "@tamagui/core";
import { LabelText } from "@cyclone-ui/label-text";
import NumberFlow from "@number-flow/react";
import type { GetProps } from "@tamagui/core";
export const NumberText = createStyledHOC(LabelText, 
  ({ children, ...props }, forwardedRef) => {
    let value = Number(children);
    if (Number.isNaN(value)) {
      value = 0;
    }

    return (
      <LabelText ref={forwardedRef} {...props}>
        <NumberFlow value={value} />
      </LabelText>
    );
  }
);

export type NumberTextProps = GetProps<typeof NumberText>;
