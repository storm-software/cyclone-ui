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
import { Path, Svg, SvgProps } from "react-native-svg";

export type ArrowProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({ isComplete = true, size = 24, ...props }: ArrowProps) => {
  const color = useCurrentColor((props.color || "$color") as any);

  const motionPosition = useMotionValue(1);
  const playback = animate(motionPosition, 15, {
    type: "spring",
    duration: 0.5,
    bounce: 0
  });

  useEffect(() => {
    if (isComplete) {
      playback.play();
    } else {
      playback.stop();
      motionPosition.set(1);
    }
  }, [playback, isComplete]);

  const [position, setPosition] = useState(1);
  useMotionValueEvent(motionPosition, "change", latest => {
    setPosition(latest);
  });

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...(props as SvgProps)}>
      {isComplete && (
        <Path d={`M6 12h${position}`} stroke={color} strokeWidth="1.5" />
      )}
      <Path stroke={color} d={`m${position} 5 7 7-7 7`} strokeWidth="1.5" />
    </Svg>
  );
};

Icon.displayName = "Arrow";

export const Arrow = memo<IconProps>(themed(Icon));
