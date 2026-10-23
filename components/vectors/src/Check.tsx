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
import { StyleSheet } from "react-native";
import { Path, Svg } from "react-native-svg";
import type { ThemedIconBodyProps } from "./themed-icon";
import { themedIcon } from "./themed-icon";
export type CheckProps = IconProps & {
  isComplete?: boolean;
};

const LINE1_LENGTH = 6 * Math.SQRT2;
const LINE2_LENGTH = Math.hypot(8, 12);

const Icon = ({
  isComplete = true,
  size = 24,
  strokeWidth = 3,
  style,
  ...props
}: ThemedIconBodyProps<CheckProps>) => {
  const color = useCurrentColor((props.color || "on-primary") as any);

  // A single progress value drives both strokes, so the check is drawn at a
  // constant speed along its full length (no hand-off timing between lines).
  const progress = useMotionValue(0);
  const [t, setT] = useState(0);
  useMotionValueEvent(progress, "change", setT);

  useEffect(() => {
    if (!isComplete) {
      progress.set(0);
      return;
    }

    const controls = animate(progress, 1, {
      duration: 0.45,
      ease: "easeInOut"
    });

    return () => controls.stop();
  }, [isComplete, progress]);

  // Stroke 1: (1,9) → (7,15); stroke 2: (7,15) → (15,3)
  const distance = t * (LINE1_LENGTH + LINE2_LENGTH);
  let d: string;
  if (distance <= LINE1_LENGTH) {
    const offset = distance / Math.SQRT2;
    d = `M1 9 l${offset} ${offset}`;
  } else {
    const f = (distance - LINE1_LENGTH) / LINE2_LENGTH;
    d = `M1 9 L7 15 L${7 + 8 * f} ${15 - 12 * f}`;
  }

  return (
    <Svg
      width={size}
      height={size}
      viewBox="-2 -1 20 18"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      style={StyleSheet.flatten([{ overflow: "visible" }, style])}
      strokeWidth={strokeWidth}>
      {isComplete && t > 0 && <Path d={d} stroke={color} />}
    </Svg>
  );
};

Icon.displayName = "Check";

export const Check = memo<CheckProps>(themedIcon(Icon));
