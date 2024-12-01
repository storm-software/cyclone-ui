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

import type { IconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import { memo } from "react";
import { G, Path, Svg, SvgProps } from "react-native-svg";

const Icon = (props: IconProps) => {
  return (
    <Svg viewBox="0 0 3800 4800" fill="none" {...(props as SvgProps)}>
      <G>
        <Path fill="#F00" d="M0 4800h3800V840L2960 0H0z" />
        <Path fill="#FAFAFA" d="M100 4700h3600V840l-740-740H100z" />
        <Path fill="#F00" d="M2960 840h840L2960 0z" />
        <Path fill="#800" d="M3800 1680V840h-100v740z" />
        <Path fill="#AAA" d="M3700 1580V840h-740z" />
      </G>
      <G>
        <Path
          fill="#FAA"
          fill-rule="evenodd"
          d="M400 4400h3000V1400H400zm200-200h2600v-200H600zm0-400h2600v-200H600zm0-400h2600v-200H600zm0-400h2600v-200H600zm0-400h1400v-200H600zm0-400h1400v-200H600zm0-400h1400v-200H600zm1600 800h1000V1600H2200z"
        />
        <Path
          fill="#F00"
          fill-rule="evenodd"
          d="M400 1200h200V900h100c450 0 450-600 0-600H400zm200-450h100c250 0 250-300 0-300H600zm600 450h200c650 0 650-900 0-900h-200zm200-200c400 0 400-500 0-500zm600 200h200V900h300V700h-300V500h400V300h-600"
        />
      </G>
    </Svg>
  );
};

Icon.displayName = "PdfIcon";

export const PdfIcon = memo<IconProps>(themed(Icon));
