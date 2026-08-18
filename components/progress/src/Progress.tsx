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
import { Progress as TamaguiProgress } from "@tamagui/progress";

export const Progress = TamaguiProgress.styleable(
  ({ size = "$true", value = 0, max = 100, ...props }, forwardRef) => {
    return (
      <TamaguiProgress
        ref={forwardRef}
        size={size}
        value={value}
        max={max}
        {...props}>
        <TamaguiProgress.Indicator
          transition="bouncy"
          backgroundColor="$foregroundOnPrimary"
        />
      </TamaguiProgress>
    );
  },
  {
    staticConfig: {
      componentName: "Progress"
    }
  }
);

export type ProgressProps = GetProps<typeof Progress>;
