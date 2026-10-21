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
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useState } from "react";
import type { SvgProps } from "react-native-svg";
import { Path, Svg } from "react-native-svg";
import type { ThemedIconBodyProps } from "./themed-icon";
import { themedIcon } from "./themed-icon";

export type SearchTriggerProps = IconProps & {
  isLoading?: boolean;
};

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;
const rad = (deg: number) => (deg * Math.PI) / 180;

// Idle, the lens is a full circle with the handle leaving it at 45°. Loading,
// the lens grows into the spinner ring, the handle retracts into it, and a gap
// opens where the handle was attached.
const shape = (loading: number, rotation: number) => {
  const cx = lerp(10.5, 12, loading);
  const r = lerp(6.5, 9, loading);
  const gap = 90 * loading;

  // two half arcs, since a single arc can't draw a full circle
  const from = 45 + gap / 2 + rotation;
  const half = (360 - gap) / 2;
  const point = (deg: number) =>
    `${cx + r * Math.cos(rad(deg))} ${cx + r * Math.sin(rad(deg))}`;
  const lens = `M${point(from)}A${r} ${r} 0 0 1 ${point(from + half)}A${r} ${r} 0 0 1 ${point(from + 2 * half)}`;

  const edge = cx + r * Math.SQRT1_2;
  const end = lerp(20.5, edge, loading);
  const handle = `M${edge} ${edge}L${end} ${end}`;

  return { lens, handle };
};

const Icon = ({
  isLoading = false,
  size = 24,
  strokeWidth = 2,
  ...props
}: ThemedIconBodyProps<SearchTriggerProps>) => {
  const color = useCurrentColor((props.color || "on-primary") as any);

  // Animates from wherever it currently is, so toggling mid-animation reverses
  // smoothly instead of jumping.
  const loadingPosition = useMotionValue(isLoading ? 1 : 0);
  const [loading, setLoading] = useState(isLoading ? 1 : 0);
  useMotionValueEvent(loadingPosition, "change", setLoading);

  const rotationPosition = useMotionValue(0);
  const [rotation, setRotation] = useState(0);
  useMotionValueEvent(rotationPosition, "change", setRotation);

  useEffect(() => {
    const controls = animate(loadingPosition, isLoading ? 1 : 0, {
      ease: "easeInOut",
      duration: 0.3
    });

    return () => controls.stop();
  }, [isLoading, loadingPosition]);

  useEffect(() => {
    const current = rotationPosition.get();
    // Spin while loading; when done, finish the turn so the gap closes back
    // where the handle reattaches.
    const controls = isLoading
      ? animate(rotationPosition, [current, current + 360], {
          ease: "linear",
          duration: 0.8,
          repeat: Infinity
        })
      : animate(rotationPosition, Math.ceil(current / 360) * 360, {
          ease: "easeOut",
          duration: 0.3
        });

    return () => controls.stop();
  }, [isLoading, rotationPosition]);

  const { lens, handle } = shape(loading, rotation);

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...(props as SvgProps)}>
      <Path d={lens} stroke={color} strokeWidth={strokeWidth} />
      <Path
        d={handle}
        stroke={color}
        strokeWidth={strokeWidth}
        opacity={1 - loading}
      />
    </Svg>
  );
};

Icon.displayName = "SearchTrigger";

export const SearchTrigger = memo<SearchTriggerProps>(themedIcon(Icon));
