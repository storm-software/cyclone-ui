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
import * as ReactNativeSvg from "react-native-svg";
import { Defs, Rect, Svg } from "react-native-svg";

const Filter = (ReactNativeSvg as any).Filter ?? "filter";
const FeTurbulence = (ReactNativeSvg as any).FeTurbulence ?? "feTurbulence";
const FeSpecularLighting =
  (ReactNativeSvg as any).FeSpecularLighting ?? "feSpecularLighting";
const FeDistantLight =
  (ReactNativeSvg as any).FeDistantLight ?? "feDistantLight";

const Icon = (props: IconProps) => {
  const color = useCurrentColor((props.color || "$onAccent") as any);

  return (
    <Svg
      viewBox="0 0 700 700"
      width="700"
      height="700"
      {...(props as SvgProps)}>
      <Defs>
        <Filter
          id="noise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB">
          <FeTurbulence
            type="fractalNoise"
            baseFrequency="0.102"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <FeSpecularLighting
            surfaceScale="15"
            specularConstant="0.75"
            specularExponent="20"
            lightingColor={color || "$muted"}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting">
            <FeDistantLight azimuth="3" elevation="100" />
          </FeSpecularLighting>
        </Filter>
      </Defs>
      <Rect width="700" height="700" fill="transparent"></Rect>
      <Rect
        width="700"
        height="700"
        fill={color || "$muted"}
        filter="url(#noise-filter)"></Rect>
    </Svg>
  );
};

Icon.displayName = "BackgroundNoise";

export const BackgroundNoise = memo<IconProps>(themed(Icon));
