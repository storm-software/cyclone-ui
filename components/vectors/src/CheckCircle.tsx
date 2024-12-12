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
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useState } from "react";
import { Circle, Path, Svg, SvgProps } from "react-native-svg";

export type CheckCircleProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({ isComplete = true, size = 24, ...props }: CheckCircleProps) => {
  const color = useCurrentColor((props.color || "$color") as any);

  const diameter = 24;
  const strokeWidth = 2;
  const outerRadius = diameter / 2;
  const innerRadius = outerRadius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const motionCircle = useMotionValue(circumference);
  const playbackCircle = animate(motionCircle, 14, {
    type: "spring",
    duration: 0.75,
    bounce: 0
  });

  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  useMotionValueEvent(motionCircle, "change", latest => {
    setStrokeDashoffset(latest);
  });

  const motionLine1 = useMotionValue(0);
  const playbackLine1 = animate(motionLine1, 3, {
    type: "spring",
    duration: 0.25,
    bounce: 0
  });

  const [line1, setLine1] = useState(0);
  useMotionValueEvent(motionLine1, "change", latest => {
    setLine1(latest);
  });

  const motionLine2x = useMotionValue(12);
  const playbackLine2x = animate(motionLine2x, 22, {
    type: "spring",
    duration: 1,
    bounce: 0
  });

  const [line2x, setLine2x] = useState(12);
  useMotionValueEvent(motionLine2x, "change", latest => {
    setLine2x(latest);
  });

  const motionLine2y = useMotionValue(14);
  const playbackLine2y = animate(motionLine2y, 4, {
    type: "spring",
    duration: 1,
    bounce: 0
  });

  const [line2y, setLine2y] = useState(14);
  useMotionValueEvent(motionLine2y, "change", latest => {
    setLine2y(latest);
  });

  useEffect(() => {
    if (isComplete) {
      playbackCircle.play();
      playbackLine1.play();
      playbackLine2x.play();
      playbackLine2y.play();
    } else {
      playbackCircle.stop();
      motionCircle.set(circumference);

      playbackLine1.stop();
      motionLine1.set(0);

      playbackLine2x.stop();
      motionLine2x.set(12);

      playbackLine2y.stop();
      motionLine2y.set(14);
    }
  }, [playbackCircle, playbackLine2x, circumference, isComplete]);

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...(props as SvgProps)}
      strokeWidth={strokeWidth}>
      {isComplete && (
        <>
          <Circle
            cx={outerRadius}
            cy={outerRadius}
            r={innerRadius}
            fill="transparent"
            stroke={color}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          <Path d={`m9 11 ${line1} ${line1}`} stroke={color} />
          <Path d={`M12 14 ${line2x} ${line2y}`} stroke={color} />
        </>
      )}
    </Svg>
  );
};

Icon.displayName = "CheckCircle";

export const CheckCircle = memo<CheckCircleProps>(themed(Icon));
