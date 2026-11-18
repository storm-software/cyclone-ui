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

import type { IconProps } from "@tamagui/helpers-icon";
import { memo, useId } from "react";
import * as ReactNativeSvg from "react-native-svg";
import { Defs, Rect, Svg } from "react-native-svg";
import type { ThemedIconBodyProps } from "./themed-icon";
import { themedIcon } from "./themed-icon";

const Filter = (ReactNativeSvg as any).Filter ?? "filter";
const FeTurbulence = (ReactNativeSvg as any).FeTurbulence ?? "feTurbulence";
const FeColorMatrix = (ReactNativeSvg as any).FeColorMatrix ?? "feColorMatrix";

/**
 * A fine, monochrome film grain that fills its parent. The grain is drawn in
 * pixels (there is no `viewBox`), so it keeps the same size on any surface.
 * Its tones center on mid grey, so with `mixBlendMode: "hard-light"` it
 * lightens and darkens the colors beneath it, even pure white and black.
 */
const Icon = (props: ThemedIconBodyProps<IconProps>) => {
  // Instances must not share a filter id: a reference resolves to the first
  // match, which may be inside a hidden subtree.
  const id = useId();

  return (
    <Svg width="100%" height="100%" {...props}>
      <Defs>
        <Filter
          id={id}
          x="0"
          y="0"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB">
          <FeTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          {/* the red channel, at 3x contrast around mid grey, as an opaque
              grey; the alpha channel is noise too */}
          <FeColorMatrix
            type="matrix"
            values="3 0 0 0 -1  3 0 0 0 -1  3 0 0 0 -1  0 0 0 0 1"
          />
        </Filter>
      </Defs>
      <Rect width="100%" height="100%" filter={`url(#${id})`} />
    </Svg>
  );
};

Icon.displayName = "BackgroundNoise";

export const BackgroundNoise = memo<IconProps>(themedIcon(Icon));
