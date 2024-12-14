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
          animation="bouncy"
          backgroundColor="$color"
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
