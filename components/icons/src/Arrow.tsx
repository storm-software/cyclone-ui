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

import { GetProps, styled, View } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useState } from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

const ArrowContainer = styled(View, {
  name: "Arrow",

  variants: {
    pointing: {
      up: {
        rotate: "-90deg"
      },
      right: {},
      down: {
        rotate: "90deg"
      },
      left: {
        rotate: "180deg"
      }
    }
  } as const,

  defaultVariants: {
    pointing: "right"
  }
});

type ArrowContainerProps = GetProps<typeof ArrowContainer>;

export type ArrowProps = IconProps &
  Pick<ArrowContainerProps, "pointing"> & {
    isComplete?: boolean;
  };

const Icon = ({
  isComplete = true,
  size = 24,
  pointing = "right",
  ...props
}: ArrowProps) => {
  const color = useCurrentColor((props.color || "$color") as any);

  const motionPosition = useMotionValue(1);
  const playback = animate(motionPosition, 24, {
    type: "spring",
    duration: 0.5,
    bounce: 0
  });

  const [position, setPosition] = useState(1);
  useMotionValueEvent(motionPosition, "change", latest => {
    setPosition(latest);
  });

  const motionReverse = useMotionValue(24);
  const playbackReverse = animate(motionReverse, 1, {
    type: "spring",
    duration: 0.5,
    bounce: 0
  });

  const [reverse, setReverse] = useState(24);
  useMotionValueEvent(motionReverse, "change", latest => {
    setReverse(latest);
  });

  useEffect(() => {
    if (isComplete) {
      playback.play();

      playbackReverse.stop();
      motionReverse.set(24);
    } else {
      playbackReverse.play();

      playback.stop();
      motionPosition.set(1);
    }
  }, [playback, isComplete, playbackReverse, motionPosition, motionReverse]);

  return (
    <ArrowContainer
      pointing={pointing}
      maxWidth={size}
      maxHeight={(size as number) * 0.6}>
      <Svg
        width={size}
        height={(size as number) * 0.6}
        viewBox="0 0 33 16"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(props as SvgProps)}>
        {isComplete && (
          <>
            <Path d={`M7 8h${position}`} stroke={color} strokeWidth="3" />
            <Path stroke={color} d={`m${position} 1 7 7-7 7`} strokeWidth="3" />
          </>
        )}
        {!isComplete && (
          <>
            <Path d={`M7 8h${reverse}`} stroke={color} strokeWidth="3" />
            <Path stroke={color} d={`m${reverse} 1 7 7-7 7`} strokeWidth="3" />
          </>
        )}
      </Svg>
    </ArrowContainer>
  );
};

Icon.displayName = "Arrow";

export const Arrow = memo<ArrowProps>(themed(Icon));

export const RightArrow = (props: ArrowProps) => (
  <Arrow pointing="right" {...props} />
);
export const LeftArrow = (props: ArrowProps) => (
  <Arrow pointing="left" {...props} />
);
export const UpArrow = (props: ArrowProps) => (
  <Arrow pointing="up" {...props} />
);
export const DownArrow = (props: ArrowProps) => (
  <Arrow pointing="down" {...props} />
);
