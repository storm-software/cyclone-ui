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
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import {
  animate,
  delay,
  useMotionValue,
  useMotionValueEvent
} from "motion/react";
import { memo, useEffect, useState } from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export type CheckProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({
  isComplete = true,
  size = 24,
  strokeWidth = 2,
  ...props
}: CheckProps) => {
  const color = useCurrentColor((props.color || "$color") as any);

  const motionLine1 = useMotionValue(0);
  const playbackLine1 = animate(motionLine1, 6, {
    type: "spring",
    duration: 0.25,
    bounce: 0
  });

  const [line1, setLine1] = useState(0);
  useMotionValueEvent(motionLine1, "change", latest => {
    setLine1(latest);
  });

  const [startLine2, setStartLine2] = useState(false);

  const motionLine2x = useMotionValue(7);
  const playbackLine2x = animate(motionLine2x, 15, {
    type: "spring",
    duration: 0.6,
    bounce: 0
  });

  const [line2x, setLine2x] = useState(7);
  useMotionValueEvent(motionLine2x, "change", latest => {
    setLine2x(latest);
  });

  const motionLine2y = useMotionValue(15);
  const playbackLine2y = animate(motionLine2y, 3, {
    type: "spring",
    duration: 0.6,
    bounce: 0
  });

  const [line2y, setLine2y] = useState(15);
  useMotionValueEvent(motionLine2y, "change", latest => {
    setLine2y(latest);
  });

  useEffect(() => {
    if (isComplete) {
      playbackLine1.play();

      delay(() => {
        setStartLine2(true);

        playbackLine2x.play();
        playbackLine2y.play();
      }, 200);
    } else {
      playbackLine1.stop();
      motionLine1.set(0);

      setStartLine2(false);

      playbackLine2x.stop();
      motionLine2x.set(7);

      playbackLine2y.stop();
      motionLine2y.set(15);
    }
  }, [
    playbackLine1,
    playbackLine2x,
    playbackLine2y,
    motionLine1,
    motionLine2x,
    motionLine2y,
    setStartLine2,
    isComplete
  ]);

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...(props as SvgProps)}
      strokeWidth={strokeWidth}>
      {isComplete && (
        <>
          <Path d={`m1 9 ${line1} ${line1}`} stroke={color} />
          {startLine2 && (
            <Path d={`M7 15 ${line2x} ${line2y}`} stroke={color} />
          )}
        </>
      )}
    </Svg>
  );
};

Icon.displayName = "Check";

export const Check = memo<CheckProps>(themed(Icon));
