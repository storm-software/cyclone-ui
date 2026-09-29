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
import type { ColorTokens, GetProps, ThemeTokens } from "@tamagui/core";
import { Progress as TamaguiProgress } from "@tamagui/progress";

export const Progress = createStyledHOC(TamaguiProgress, 
  (
    { color = "accent", size = "10xl", value = 0, max = 100, ...props }: GetProps<typeof TamaguiProgress> & {
  color?: ColorTokens | ThemeTokens;
},
    forwardRef
  ) => {
    return (
      <TamaguiProgress
        ref={forwardRef}
        size={size}
        backgroundColor="surfaceSunken"
        {...props}
        value={value}
        max={max}>
        <TamaguiProgress.Indicator
          transition="bouncy"
          backgroundColor={color}
        />
      </TamaguiProgress>
    );
  },
  {
    displayName: "Progress"
  }
);

export type ProgressProps = GetProps<typeof Progress>;
