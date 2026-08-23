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

import type { IconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { memo } from "react";
import type { SvgProps } from "react-native-svg";
import { Defs, Path, Pattern, Rect, Svg } from "react-native-svg";
const Icon = (props: IconProps) => {
  const color = useCurrentColor((props.color || "$foregroundInverse") as any);

  return (
    <Svg x="0" y="0" fill="none" {...(props as SvgProps)}>
      <Defs>
        <Pattern
          id="diag_p"
          patternUnits="userSpaceOnUse"
          width="24"
          height="48"
          patternTransform="rotate(-45 2 2)">
          <Path d="M -1,16 l 48,0" stroke={color} strokeWidth="24" />
        </Pattern>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#diag_p)" />
    </Svg>
  );
};

Icon.displayName = "Diagonal";

export const Diagonal = memo<IconProps>(themed(Icon));
