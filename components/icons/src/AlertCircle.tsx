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

export type AlertCircleProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({
  isComplete = false,
  size = 24,
  ...props
}: AlertCircleProps) => {
  const color = useCurrentColor((props.color || "$color") as any);

  const diameter = 24;
  const strokeWidth = 2;
  const outerRadius = diameter / 2;
  const innerRadius = outerRadius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const motionCircle = useMotionValue(circumference);
  const playbackCircle = animate(motionCircle, 0, {
    type: "spring",
    duration: 1.25,
    bounce: 0
  });

  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  useMotionValueEvent(motionCircle, "change", latest => {
    setStrokeDashoffset(latest);
  });

  const motionLine1 = useMotionValue(0);
  const playbackLine1 = animate(motionLine1, -5, {
    type: "spring",
    duration: 1,
    bounce: 0
  });

  const [line1, setLine1] = useState(0);
  useMotionValueEvent(motionLine1, "change", latest => {
    setLine1(latest);
  });

  const motionLine2 = useMotionValue(0);
  const playbackLine2 = animate(motionLine2, 0.1, {
    type: "spring",
    duration: 1,
    bounce: 0
  });

  const [line2, setLine2] = useState(12);
  useMotionValueEvent(motionLine2, "change", latest => {
    setLine2(latest);
  });

  useEffect(() => {
    if (isComplete) {
      playbackCircle.play();
      playbackLine1.play();
      playbackLine2.play();
    } else {
      playbackCircle.stop();
      motionCircle.set(circumference);

      playbackLine1.stop();
      motionLine1.set(0);

      playbackLine2.stop();
      motionLine2.set(0);
    }
  }, [playbackCircle, playbackLine2, circumference, isComplete]);

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

          <Path d={`m12 12 0 ${line1}`} stroke={color} />
          <Path d={`m12 16 0 ${line2}`} stroke={color} />
        </>
      )}
    </Svg>
  );
};

Icon.displayName = "AlertCircle";

export const AlertCircle = memo<IconProps>(themed(Icon));

/* <Line x1="12" x2="12" y1="8" y2="12" stroke={color} />
      <Line x1="12" x2="12.01" y1="16" y2="16" stroke={color} /> */
