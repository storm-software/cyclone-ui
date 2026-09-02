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

import type { ColorTokens, GetProps, ThemeTokens } from "@tamagui/core";
import { Progress as TamaguiProgress } from "@tamagui/progress";

export const Progress = TamaguiProgress.styleable<{
  color?: ColorTokens | ThemeTokens;
}>(
  (
    {
      color = "$foreground",
      size = "$10xl",
      value = 0,
      max = 100,
      ...props
    },
    forwardRef
  ) => {
    return (
      <TamaguiProgress
        ref={forwardRef}
        size={size}
        value={value}
        max={max}
        {...props}
        backgroundColor="$backgroundElevated">
        <TamaguiProgress.Indicator
          transition="bouncy"
          backgroundColor={color}
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
