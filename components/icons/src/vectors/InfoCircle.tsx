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
import { Circle, G, Path, Svg } from "react-native-svg";
import type { ThemedIconBodyProps } from "./themed-icon";
import { themedIcon } from "./themed-icon";

export type InfoCircleProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({
  isComplete = true,
  size = 24,
  ...props
}: ThemedIconBodyProps<InfoCircleProps>) => {
  const color = useCurrentColor((props.color || "primary") as any);

  const diameter = 24;
  const strokeWidth = 2;
  const outerRadius = diameter / 2;
  const innerRadius = outerRadius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const motionCircle = useMotionValue(circumference);
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  useMotionValueEvent(motionCircle, "change", latest => {
    setStrokeDashoffset(latest);
  });

  const motionMarkScale = useMotionValue(0);
  const [markScale, setMarkScale] = useState(0);
  useMotionValueEvent(motionMarkScale, "change", latest => {
    setMarkScale(latest);
  });

  useEffect(() => {
    if (!isComplete) {
      motionCircle.set(circumference);
      motionMarkScale.set(0);

      return;
    }

    const playbackCircle = animate(motionCircle, 0, {
      ease: "linear",
      duration: 0.75
    });
    const playbackMark = animate(motionMarkScale, 1, {
      ease: "linear",
      duration: 0.5,
      delay: 0.5
    });

    return () => {
      playbackCircle.stop();
      playbackMark.stop();
    };
  }, [circumference, isComplete, motionCircle, motionMarkScale]);

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
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

          {/* Storm Sans Bold "i" glyph (fonts/storm-sans/StormSans-Bold.ufo),
              scaled to 12 units tall and centered on its visual mass */}
          <G
            transform={`translate(12 12) scale(${markScale}) translate(-12 -12)`}
            fill={color}
            stroke="none">
            <Circle cx={12.128} cy={7.468} r={1.468} />
            <Path d="M10.947 18H13.309V9.622H9.894V11.457H10.947Z" />
          </G>
        </>
      )}
    </Svg>
  );
};

Icon.displayName = "InfoCircle";

export const InfoCircle = memo<InfoCircleProps>(themedIcon(Icon));
