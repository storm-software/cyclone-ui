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

import type {
  ColorTokens,
  GetProps,
  SizeTokens,
  ThemeTokens
} from "@tamagui/core";
import { getVariableValue, useTheme } from "@tamagui/core";
import { Progress as TamaguiProgress } from "@tamagui/progress";
import { Circle, Svg } from "react-native-svg";

const VIEWBOX_SIZE = 24;
const STROKE_WIDTH = 2.5;
const RADIUS = VIEWBOX_SIZE / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CIRCULAR_PROGRESS_SIZES = {
  sm: "$10xl",
  md: "$14xl",
  lg: "$18xl",
  xl: "$26xl"
} as const;

export type CircularProgressSize = keyof typeof CIRCULAR_PROGRESS_SIZES;
type CircularProgressSizeProp = CircularProgressSize | SizeTokens;

const getProgressRatio = (value: number | null, max: number) => {
  const resolvedMax =
    typeof max === "number" && !Number.isNaN(max) && max > 0 ? max : 100;
  const resolvedValue =
    typeof value === "number" &&
    !Number.isNaN(value) &&
    value >= 0 &&
    value <= resolvedMax
      ? Math.round(value)
      : 0;

  return resolvedValue / resolvedMax;
};

export const CircularProgress = TamaguiProgress.styleable<{
  color?: ColorTokens | ThemeTokens;
  size?: CircularProgressSizeProp;
}>(
  (
    { color = "$foreground", size = "sm", value = 0, max = 100, ...props },
    forwardRef
  ) => {
    const resolvedSize = Object.prototype.hasOwnProperty.call(
      CIRCULAR_PROGRESS_SIZES,
      size
    )
      ? CIRCULAR_PROGRESS_SIZES[size as CircularProgressSize]
      : size;
    const theme = useTheme();
    const indicatorColor = getVariableValue(
      theme[color as any] ?? color,
      "color"
    );
    const trackColor = getVariableValue(theme.backgroundElevated, "color");
    const progressRatio = getProgressRatio(value, max);

    return (
      <TamaguiProgress
        ref={forwardRef}
        size={resolvedSize}
        value={value}
        max={max}
        {...props}
        alignItems="center"
        justifyContent="center"
        height={resolvedSize}
        minWidth={resolvedSize}
        width={resolvedSize}
        backgroundColor="transparent">
        <Svg
          height="100%"
          pointerEvents="none"
          viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
          width="100%">
          <Circle
            cx={VIEWBOX_SIZE / 2}
            cy={VIEWBOX_SIZE / 2}
            fill="none"
            r={RADIUS}
            stroke={trackColor}
            strokeWidth={STROKE_WIDTH}
          />
          <Circle
            cx={VIEWBOX_SIZE / 2}
            cy={VIEWBOX_SIZE / 2}
            fill="none"
            origin={`${VIEWBOX_SIZE / 2}, ${VIEWBOX_SIZE / 2}`}
            r={RADIUS}
            rotation="-90"
            stroke={indicatorColor}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progressRatio)}
            strokeLinecap="round"
            strokeWidth={STROKE_WIDTH}
          />
        </Svg>
      </TamaguiProgress>
    );
  },
  {
    staticConfig: {
      componentName: "CircularProgress"
    }
  }
);

export type CircularProgressProps = GetProps<typeof CircularProgress>;
