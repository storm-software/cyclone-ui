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

import type { GetProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useState } from "react";
import { Path, Svg } from "react-native-svg";
import type { ThemedIconBodyProps } from "./themed-icon";
import { themedIcon } from "./themed-icon";

const ArrowContainer = styled(View, {
  displayName: "Arrow",

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
    animateShrink?: boolean;
  };

const Icon = ({
  isComplete = true,
  animateShrink = true,
  size = 24,
  pointing = "right",
  ...props
}: ThemedIconBodyProps<ArrowProps>) => {
  const color = useCurrentColor((props.color || "onPrimary") as any);

  // A single length value extends towards 24 when complete and compresses
  // back to 1 otherwise, so a reversal mid-animation starts from where it is.
  const motionPosition = useMotionValue(1);
  const [position, setPosition] = useState(1);
  useMotionValueEvent(motionPosition, "change", setPosition);

  useEffect(() => {
    if (!isComplete && !animateShrink) {
      motionPosition.set(1);
      return;
    }

    const controls = animate(motionPosition, isComplete ? 24 : 1, {
      ease: "linear",
      duration: 0.25
    });

    return () => controls.stop();
  }, [isComplete, animateShrink, motionPosition]);

  return (
    <ArrowContainer pointing={pointing} maxWidth={size} maxHeight={size * 0.6}>
      <Svg
        width={size}
        height={size * 0.6}
        viewBox="-1 0 34 16"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}>
        <Path d={`M7 8h${position}`} stroke={color} strokeWidth="3" />
        <Path stroke={color} d={`m${position} 1 7 7-7 7`} strokeWidth="3" />
      </Svg>
    </ArrowContainer>
  );
};

Icon.displayName = "Arrow";

export const Arrow = memo<ArrowProps>(themedIcon(Icon));

type DirectionalArrowProps = Omit<ArrowProps, "pointing">;

export const RightArrow = (props: DirectionalArrowProps) => (
  <Arrow pointing="right" {...props} />
);

export type RightArrowProps = GetProps<typeof RightArrow>;

export const LeftArrow = (props: DirectionalArrowProps) => (
  <Arrow pointing="left" {...props} />
);

export type LeftArrowProps = GetProps<typeof LeftArrow>;

export const UpArrow = (props: DirectionalArrowProps) => (
  <Arrow pointing="up" {...props} />
);

export type UpArrowProps = GetProps<typeof UpArrow>;

export const DownArrow = (props: DirectionalArrowProps) => (
  <Arrow pointing="down" {...props} />
);

export type DownArrowProps = GetProps<typeof DownArrow>;
