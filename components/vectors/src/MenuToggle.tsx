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
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useState } from "react";
import { Path, Svg } from "react-native-svg";
import type { ThemedIconBodyProps } from "./themed-icon";
import { themedIcon } from "./themed-icon";

export type MenuToggleProps = IconProps & {
  isOpen?: boolean;
  isHovered?: boolean;
  /** Multiplies the length of the closed bars; the open X keeps its size. */
  closedLength?: number;
  /** Distance between the closed bars, in 24 unit viewBox units. */
  closedGap?: number;
};

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

// Builds one bar of the icon. Closed, the two bars sit stacked and spread apart
// on hover; open, they cross into an X that turns a quarter and pinches on hover.
const bar = (
  index: number,
  open: number,
  hover: number,
  closedLength: number,
  closedGap: number
) => {
  const side = index * 2 - 1;

  const cy = lerp(12 + side * (closedGap / 2 + hover), 12, open);
  const length = lerp(9 * closedLength, 8.5 - 1.5 * hover, open);
  const angle = (open * (side * -45 + 90 * hover) * Math.PI) / 180;

  const dx = length * Math.cos(angle);
  const dy = length * Math.sin(angle);

  return `M${12 - dx} ${cy - dy}L${12 + dx} ${cy + dy}`;
};

const Icon = ({
  isOpen = false,
  isHovered = false,
  size = 24,
  strokeWidth = 2,
  closedLength = 1,
  closedGap = 6,
  ...props
}: ThemedIconBodyProps<MenuToggleProps>) => {
  const color = useCurrentColor((props.color || "on-primary") as any);

  // Both values animate from wherever they currently are, so changing state
  // mid-animation reverses smoothly instead of jumping.
  const openPosition = useMotionValue(isOpen ? 1 : 0);
  const [open, setOpen] = useState(isOpen ? 1 : 0);
  useMotionValueEvent(openPosition, "change", setOpen);

  const hoverPosition = useMotionValue(isHovered ? 1 : 0);
  const [hover, setHover] = useState(isHovered ? 1 : 0);
  useMotionValueEvent(hoverPosition, "change", setHover);

  useEffect(() => {
    const controls = animate(openPosition, isOpen ? 1 : 0, {
      ease: "easeInOut",
      duration: 0.3
    });

    return () => controls.stop();
  }, [isOpen, openPosition]);

  useEffect(() => {
    const controls = animate(hoverPosition, isHovered ? 1 : 0, {
      ease: "easeOut",
      duration: 0.2
    });

    return () => controls.stop();
  }, [isHovered, hoverPosition]);

  // Widens the canvas for longer bars, keeping the default 3 unit margin.
  const halfWidth = Math.max(12, 9 * closedLength + 3);

  return (
    <Svg
      width={(size * halfWidth) / 12}
      height={size}
      viewBox={`${12 - halfWidth} 0 ${halfWidth * 2} 24`}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      {[0, 1].map(index => (
        <Path
          key={index}
          d={bar(index, open, hover, closedLength, closedGap)}
          stroke={color}
          strokeWidth={strokeWidth}
        />
      ))}
    </Svg>
  );
};

Icon.displayName = "MenuToggle";

export const MenuToggle = memo<MenuToggleProps>(themedIcon(Icon));
