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

import { View } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useState } from "react";
import { Circle, Path, Svg, SvgProps } from "react-native-svg";

export type BinaryProps = IconProps & {
  state?: "off" | "on";
};

const Icon = ({
  state = "off",
  size = 24,
  strokeWidth = 1,
  ...props
}: BinaryProps) => {
  const color = useCurrentColor((props.color || "$color") as any);

  // Line

  // Line (On)

  const onLineLengthMotion = useMotionValue(7);
  const onLineLengthPlayback = animate(onLineLengthMotion, 1, {
    type: "spring",
    duration: 0.5,
    bounce: 0
  });

  const [onLineLength, setOnLineLength] = useState(1);
  useMotionValueEvent(onLineLengthMotion, "change", latest => {
    setOnLineLength(latest);
  });

  // Line (Off)

  const offLineLengthMotion = useMotionValue(1);
  const offLineLengthPlayback = animate(offLineLengthMotion, 7, {
    type: "spring",
    duration: 0.25,
    bounce: 0
  });

  const [offLineLength, setOffLineLength] = useState(7);
  useMotionValueEvent(offLineLengthMotion, "change", latest => {
    setOffLineLength(latest);
  });

  // Circle

  const diameter = 8;
  const outerRadius = diameter / 2;
  const innerRadius = outerRadius - (strokeWidth as number) / 2;
  const circumference = 2 * Math.PI * innerRadius;

  // Circle (Off)

  const offCircleMotion = useMotionValue(circumference);
  const offCirclePlayback = animate(offCircleMotion, 0, {
    type: "spring",
    duration: 0.5,
    bounce: 0
  });

  const [offCircleStrokeDashoffset, setOffCircleStrokeDashoffset] =
    useState(circumference);
  useMotionValueEvent(offCircleMotion, "change", latest => {
    setOffCircleStrokeDashoffset(latest);
  });

  // Circle (On)

  const onCircleMotion = useMotionValue(0);
  const onCirclePlayback = animate(onCircleMotion, circumference, {
    type: "spring",
    duration: 0.25,
    bounce: 0
  });

  const [onCircleStrokeDashoffset, setOnCircleStrokeDashoffset] = useState(0);
  useMotionValueEvent(onCircleMotion, "change", latest => {
    setOnCircleStrokeDashoffset(latest);
  });

  useEffect(() => {
    if (state === "off") {
      onLineLengthPlayback.stop();
      onLineLengthMotion.set(7);
      onCirclePlayback.stop();
      onCircleMotion.set(0);

      offLineLengthPlayback.play();
      offCirclePlayback.play();
    } else {
      offLineLengthPlayback.stop();
      offLineLengthMotion.set(1);
      offCirclePlayback.stop();
      offCircleMotion.set(circumference);

      onCirclePlayback.play();
      onLineLengthPlayback.play();
    }
  }, [
    onLineLengthPlayback,
    onLineLengthMotion,
    offLineLengthPlayback,
    offLineLengthMotion,
    offCirclePlayback,
    offCircleMotion,
    onCirclePlayback,
    onCircleMotion,
    circumference,
    state
  ]);

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      {...(props as SvgProps)}>
      {state === "off" ? (
        <>
          <Path d={`M7 4 ${offLineLength} 4`} />

          <Circle
            cx={outerRadius}
            cy={outerRadius}
            r={innerRadius}
            fill="transparent"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offCircleStrokeDashoffset}
          />
        </>
      ) : (
        <>
          <Path d={`M7 4 ${onLineLength} 4`} />

          <Circle
            cx={outerRadius}
            cy={outerRadius}
            r={innerRadius}
            fill="transparent"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={onCircleStrokeDashoffset}
          />
        </>
      )}
    </Svg>
  );
};

Icon.displayName = "Binary";

const BinaryFrame = ({ height, width, size, ...props }: BinaryProps) => {
  return (
    <View height={width ?? size} width={height ?? size} rotate="-90deg">
      <Icon height={width} width={height} size={size} {...props} />
    </View>
  );
};

export const Binary = memo<BinaryProps>(themed(BinaryFrame));
