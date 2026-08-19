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

import { styled, View } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useState } from "react";
import type { SvgProps } from "react-native-svg";
import { Path, Svg } from "react-native-svg";
const AccordionToggleContainer = styled(View, {
  name: "AccordionToggle",

  transition: "250ms",

  variants: {
    isExpanded: {
      true: {
        rotate: "90deg"
      },
      false: {
        rotate: "-90deg"
      }
    }
  } as const,

  defaultVariants: {
    isExpanded: false
  }
});

export type AccordionToggleProps = IconProps & {
  isExpanded?: boolean;
  strokeWidth?: number;
};

const Icon = ({
  isExpanded = false,
  size = 24,
  strokeWidth = 1.5,
  ...props
}: AccordionToggleProps) => {
  const color = useCurrentColor((props.color || "$foregroundOnPrimary") as any);

  const compressLengthPosition = useMotionValue(0);
  const compressLengthPlayback = animate(compressLengthPosition, 14, {
    type: "spring",
    duration: 0.25,
    ease: "easeOut",
    bounce: 0
  });

  const [compressLength, setCompressLength] = useState(0);
  useMotionValueEvent(compressLengthPosition, "change", latest => {
    setCompressLength(latest);
  });

  const compressOpacityPosition = useMotionValue(0);
  const compressOpacityPlayback = animate(compressOpacityPosition, 1, {
    type: "spring",
    duration: 0.25,
    ease: "easeOut",
    bounce: 0
  });

  const [compressOpacity, setCompressOpacity] = useState(0);
  useMotionValueEvent(compressOpacityPosition, "change", latest => {
    setCompressOpacity(latest);
  });

  const expandLengthPosition = useMotionValue(14);
  const expandLengthPlayback = animate(expandLengthPosition, 1, {
    type: "spring",
    duration: 0.25,
    ease: "easeOut",
    bounce: 0
  });

  const [expandLength, setExpandLength] = useState(14);
  useMotionValueEvent(expandLengthPosition, "change", latest => {
    setExpandLength(latest);
  });

  const expandOpacityPosition = useMotionValue(1);
  const expandOpacityPlayback = animate(expandOpacityPosition, 0, {
    type: "spring",
    duration: 0.25,
    ease: "easeOut",
    bounce: 0
  });

  const [expandOpacity, setExpandOpacity] = useState(1);
  useMotionValueEvent(expandOpacityPosition, "change", latest => {
    setExpandOpacity(latest);
  });

  useEffect(() => {
    if (!isExpanded) {
      expandLengthPlayback.stop();
      expandLengthPosition.set(14);
      expandOpacityPlayback.stop();
      expandOpacityPosition.set(1);
      compressLengthPlayback.play();
      compressOpacityPlayback.play();
    } else {
      compressLengthPlayback.stop();
      compressLengthPosition.set(0);
      compressOpacityPlayback.stop();
      compressOpacityPosition.set(0);
      expandLengthPlayback.play();
    }
  }, [
    compressLengthPlayback,
    compressLengthPosition,
    compressOpacityPlayback,
    compressOpacityPosition,
    expandLengthPlayback,
    expandLengthPosition,
    expandOpacityPlayback,
    expandOpacityPosition,
    isExpanded
  ]);

  return (
    <View style={{ width: size, height: size, rotate: "-90deg" }}>
      <AccordionToggleContainer
        width={size}
        height={size}
        isExpanded={isExpanded}>
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...(props as SvgProps)}>
          <Path d="M5 12h14" stroke={color} strokeWidth={strokeWidth} />

          {isExpanded && (
            <Path
              stroke={color}
              d={`M12 5v${expandLength}`}
              strokeWidth={strokeWidth}
              opacity={expandOpacity}
            />
          )}

          {!isExpanded && (
            <Path
              stroke={color}
              d={`M12 5v${compressLength}`}
              strokeWidth={strokeWidth}
              opacity={compressOpacity}
            />
          )}
        </Svg>
      </AccordionToggleContainer>
    </View>
  );
};

Icon.displayName = "AccordionToggle";

export const AccordionToggle = memo<AccordionToggleProps>(themed(Icon));
