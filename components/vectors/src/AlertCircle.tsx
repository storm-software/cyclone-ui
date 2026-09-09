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
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useState } from "react";
import type { SvgProps } from "react-native-svg";
import { Circle, Path, Svg } from "react-native-svg";

export type AlertCircleProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({ isComplete = true, size = 24, ...props }: AlertCircleProps) => {
  const color = useCurrentColor((props.color || "$foregroundOn") as any);

  const diameter = 24;
  const strokeWidth = 2;
  const outerRadius = diameter / 2;
  const innerRadius = outerRadius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;
  const markScale = 0.85;
  const upperLineLength = 9.4875 * markScale;

  const motionCircle = useMotionValue(circumference);
  const playbackCircle = animate(motionCircle, 0, {
    type: "spring",
    duration: 0.75,
    bounce: 0
  });

  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  useMotionValueEvent(motionCircle, "change", latest => {
    setStrokeDashoffset(latest);
  });

  const motionLine1 = useMotionValue(0);
  const playbackLine1 = animate(motionLine1, -upperLineLength, {
    type: "spring",
    duration: 1,
    bounce: 0
  });

  const [line1, setLine1] = useState(0);
  useMotionValueEvent(motionLine1, "change", latest => {
    setLine1(latest);
  });
  const initialUpperLineBottomY = 12.5;
  const upperLineBottomHalfWidth = 1.5 * markScale;
  const lowerDotRadius = 2.25 * 0.85 * markScale;
  const initialLowerDotY = 16.75;
  const markGap = initialLowerDotY - lowerDotRadius - initialUpperLineBottomY;
  const markGapReduction = 1 - (1 - 0.15) * (1 - 0.1);
  const markGapAdjustment = (markGap * markGapReduction) / 2;
  const uncenteredUpperLineBottomY =
    initialUpperLineBottomY + markGapAdjustment;
  const uncenteredLowerDotY = initialLowerDotY - markGapAdjustment;
  const markVerticalOffset =
    outerRadius -
    (uncenteredUpperLineBottomY -
      upperLineLength +
      uncenteredLowerDotY +
      lowerDotRadius) /
      2;
  const upperLineBottomY = uncenteredUpperLineBottomY + markVerticalOffset;
  const lowerDotY = uncenteredLowerDotY + markVerticalOffset;
  const upperLineTopY = upperLineBottomY + line1;
  const upperLineTopHalfWidth =
    upperLineBottomHalfWidth + Math.min(Math.abs(line1) / 15, 0.5 * markScale);
  const upperLineTopCapRadius = Math.min(Math.abs(line1), 1.25 * markScale);
  const upperLineBottomCapRadius = Math.min(Math.abs(line1), 0.5 * markScale);

  useEffect(() => {
    if (isComplete) {
      playbackCircle.play();
      playbackLine1.play();
    } else {
      playbackCircle.stop();
      motionCircle.set(circumference);

      playbackLine1.stop();
      motionLine1.set(0);
    }
  }, [
    playbackCircle,
    circumference,
    isComplete,
    playbackLine1,
    motionCircle,
    motionLine1
  ]);

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

          <Path
            d={`M ${12 - upperLineBottomHalfWidth} ${upperLineBottomY - upperLineBottomCapRadius} L ${12 - upperLineTopHalfWidth} ${upperLineTopY + upperLineTopCapRadius} Q ${12 - upperLineTopHalfWidth} ${upperLineTopY} ${12 - upperLineTopHalfWidth + upperLineTopCapRadius} ${upperLineTopY} H ${12 + upperLineTopHalfWidth - upperLineTopCapRadius} Q ${12 + upperLineTopHalfWidth} ${upperLineTopY} ${12 + upperLineTopHalfWidth} ${upperLineTopY + upperLineTopCapRadius} L ${12 + upperLineBottomHalfWidth} ${upperLineBottomY - upperLineBottomCapRadius} Q ${12 + upperLineBottomHalfWidth} ${upperLineBottomY} ${12 + upperLineBottomHalfWidth - upperLineBottomCapRadius} ${upperLineBottomY} H ${12 - upperLineBottomHalfWidth + upperLineBottomCapRadius} Q ${12 - upperLineBottomHalfWidth} ${upperLineBottomY} ${12 - upperLineBottomHalfWidth} ${upperLineBottomY - upperLineBottomCapRadius} Z`}
            fill={color}
            stroke="none"
          />
          <Circle
            cx={12}
            cy={lowerDotY}
            r={lowerDotRadius}
            fill={color}
            stroke="none"
          />
        </>
      )}
    </Svg>
  );
};

Icon.displayName = "AlertCircle";

export const AlertCircle = memo<AlertCircleProps>(themed(Icon));
