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

import { getSized } from "@cyclone-ui/helpers";
import type { IconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { Lightbulb } from "@tamagui/lucide-icons-2";
import { animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { memo, useEffect, useMemo, useState } from "react";
import type { SvgProps } from "react-native-svg";
import { Circle, G, Svg } from "react-native-svg";

export type DiscoveryCircleProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({
  isComplete = true,
  size = 24,
  ...props
}: DiscoveryCircleProps) => {
  const color = useCurrentColor((props.color || "$foregroundOn") as any);

  const diameter = 24;
  const strokeWidth = 2;
  const lightBulbScaleReferenceSize = 62;
  const outerRadius = diameter / 2;
  const innerRadius = outerRadius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const motionCircle = useMotionValue(circumference);
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  useMotionValueEvent(motionCircle, "change", latest => {
    setStrokeDashoffset(latest);
  });

  const motionLightBulbScale = useMotionValue(0);
  const [lightBulbScale, setLightBulbScale] = useState(0);
  useMotionValueEvent(motionLightBulbScale, "change", latest => {
    setLightBulbScale(latest);
  });

  useEffect(() => {
    if (!isComplete) {
      motionCircle.set(circumference);
      motionLightBulbScale.set(0);

      return;
    }

    const playbackCircle = animate(motionCircle, 0, {
      type: "spring",
      duration: 0.75,
      bounce: 0
    });
    const playbackLightBulb = animate(motionLightBulbScale, 1, {
      type: "spring",
      duration: 0.5,
      ease: "easeOut",
      bounce: 0,
      delay: 0.5
    });

    return () => {
      playbackCircle.stop();
      playbackLightBulb.stop();
    };
  }, [circumference, isComplete, motionCircle, motionLightBulbScale]);

  const lightBulbSize = useMemo(() => {
    const resolvedSize = getSized(size);

    if (resolvedSize <= 0) {
      return 0;
    }

    return Math.min(
      resolvedSize,
      resolvedSize *
        0.2 *
        Math.max(1, lightBulbScaleReferenceSize / resolvedSize) ** 0.840625
    );
  }, [size]);
  const lightBulbOffset = (diameter - lightBulbSize) / 2;

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

          <G
            transform={`translate(12 12) scale(${lightBulbScale}) translate(-12 -12)`}>
            <Lightbulb
              size={lightBulbSize}
              x={lightBulbOffset}
              y={lightBulbOffset}
              strokeWidth={3}
              color={color}
            />
          </G>
        </>
      )}
    </Svg>
  );
};

Icon.displayName = "DiscoveryCircle";

export const DiscoveryCircle = memo<DiscoveryCircleProps>(themed(Icon));
