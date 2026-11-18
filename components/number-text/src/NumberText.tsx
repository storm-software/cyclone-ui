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

import NumberFlow from "@number-flow/react";
import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled } from "@tamagui/core";
import { SizableText } from "@tamagui/text";

// SizableText defaults `color` to the "color" theme key, which the Cyclone
// themes don't define; match BodyText instead.
const NumberTextFrame: typeof SizableText = styled(SizableText, {
  displayName: "NumberText",
  color: "ink"
});

export const NumberText: typeof SizableText = createStyledHOC(
  NumberTextFrame,
  ({ children, ...props }, forwardedRef) => {
    let value = Number(children);
    if (Number.isNaN(value)) {
      value = 0;
    }

    return (
      <NumberTextFrame ref={forwardedRef} {...props}>
        <NumberFlow value={value} />
      </NumberTextFrame>
    );
  }
);

export type NumberTextProps = GetProps<typeof NumberText>;
