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

import type {
  ColorTokens,
  GetProps,
  SizeTokens,
  TamaguiComponent,
  TamaguiElement,
  ThemeTokens
} from "@tamagui/core";
import {
  createStyledHOC,
  getVariableValue,
  useTheme,
  View
} from "@tamagui/core";
import { Progress as TamaguiProgress } from "@tamagui/progress";
import { useEffect, useRef, useState } from "react";
import { Circle, Path, Svg } from "react-native-svg";

const VIEWBOX_SIZE = 24;
const STROKE_WIDTH = 2.5;
const RADIUS = VIEWBOX_SIZE / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
// Clockwise from 12 o'clock. A `Circle` with `rotation` doesn't rotate on web.
const INDICATOR_PATH = `M ${VIEWBOX_SIZE / 2} ${STROKE_WIDTH / 2} a ${RADIUS} ${RADIUS} 0 1 1 0 ${2 * RADIUS} a ${RADIUS} ${RADIUS} 0 1 1 0 ${-2 * RADIUS}`;

// Web-only CSS transition: react-native-svg passes `style` to the DOM, but
// its shape types don't declare it.
// ponytail: native snaps to the new value; drive strokeDashoffset with Reanimated if native needs the animation
const indicatorTransition: object = {
  style: { transition: "stroke-dashoffset 300ms ease-out, stroke 200ms" }
};

const CIRCULAR_PROGRESS_SIZES = {
  sm: "10xl",
  md: "14xl",
  lg: "18xl",
  xl: "26xl"
} as const;

// The dashed ring: segment count, and each segment's size as a fraction of
// the diameter.
const DASHED_SEGMENTS = 20;
const POP_DURATION = 150;

// When several segments fill in one update, they light one after another.
// Each update picks a step so its sweep takes at most `MAX_STAGGER` ms.
// Emptying is immediate.
const STAGGER = 40;
const MAX_STAGGER = 600;

const useStaggeredCount = (target: number) => {
  const [state, setState] = useState({ lit: target, target, step: STAGGER });
  if (state.target !== target) {
    setState({
      lit: Math.min(state.lit, target),
      target,
      step: Math.min(STAGGER, MAX_STAGGER / Math.max(1, target - state.lit))
    });
  }

  useEffect(() => {
    if (state.lit >= state.target) return;

    const timeout = setTimeout(
      () => setState(current => ({ ...current, lit: current.lit + 1 })),
      state.step
    );

    return () => clearTimeout(timeout);
  }, [state]);

  return Math.min(state.lit, target);
};

export type CircularProgressSize = keyof typeof CIRCULAR_PROGRESS_SIZES;
type CircularProgressSizeProp = CircularProgressSize | SizeTokens;

export type CircularProgressVariant = "solid" | "dashed";

export type CircularProgressProps = Omit<
  GetProps<typeof TamaguiProgress>,
  "color" | "size"
> & {
  color?: ColorTokens | ThemeTokens;
  size?: CircularProgressSizeProp;
  /**
   * `solid` draws a continuous ring that sweeps to each new value. `dashed` splits the ring into segments
   * that light up (with a brief scale pop) as the value increases.
   */
  variant?: CircularProgressVariant;
  /** The number of dashed segments around the ring. Defaults to 20. */
  segments?: number;
};

const ProgressSegment = ({
  filled,
  color,
  ...props
}: GetProps<typeof View> & {
  filled: boolean;
  color: ColorTokens | ThemeTokens;
}) => {
  const [popping, setPopping] = useState(false);
  const wasFilledRef = useRef(filled);

  useEffect(() => {
    const filling = filled && !wasFilledRef.current;
    wasFilledRef.current = filled;
    if (!filling) return;

    setPopping(true);
    const timeout = setTimeout(() => setPopping(false), POP_DURATION);

    return () => {
      clearTimeout(timeout);
      setPopping(false);
    };
  }, [filled]);

  return (
    <View
      transition="150ms"
      backgroundColor={filled ? color : "sunken"}
      scale={popping ? 1.3 : 1}
      {...props}
    />
  );
};

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

export const CircularProgress = createStyledHOC(
  TamaguiProgress,
  (
    {
      color = "primary",
      size = "sm",
      value = 0,
      max = 100,
      variant = "solid",
      segments = DASHED_SEGMENTS,
      ...props
    }: CircularProgressProps,
    forwardRef
  ) => {
    const resolvedSize =
      typeof size === "string" &&
      Object.prototype.hasOwnProperty.call(CIRCULAR_PROGRESS_SIZES, size)
        ? CIRCULAR_PROGRESS_SIZES[size as CircularProgressSize]
        : size;
    const theme = useTheme();
    const indicatorColor = getVariableValue(
      theme[color as any] ?? color,
      "color"
    );
    const trackColor = getVariableValue(theme.sunken, "color");
    const progressRatio = getProgressRatio(value, max);
    const count = Math.max(1, Math.round(segments));
    const filled = useStaggeredCount(
      variant === "dashed" ? Math.round(progressRatio * count) : 0
    );
    // Segments thin out as the count grows: 7% of the diameter at 20.
    const segmentWidth = `${Math.min(12, 140 / count)}%`;

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
        {variant === "dashed" ? (
          Array.from({ length: count }, (_, index) => (
            // Each segment hangs from the top of a rotated full-size layer.
            // The padding leaves room for the pop inside the clip.
            <View
              key={index}
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              left={0}
              padding="3%"
              alignItems="center"
              pointerEvents="none"
              rotate={`${(360 / count) * index}deg`}>
              <ProgressSegment
                filled={index < filled}
                color={color}
                width={segmentWidth}
                height="24%"
                borderRadius={1000}
              />
            </View>
          ))
        ) : (
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
            <Path
              d={INDICATOR_PATH}
              fill="none"
              stroke={indicatorColor}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - progressRatio)}
              strokeLinecap="round"
              strokeWidth={STROKE_WIDTH}
              {...indicatorTransition}
            />
          </Svg>
        )}
      </TamaguiProgress>
    );
  },
  {
    displayName: "CircularProgress"
  }
) as TamaguiComponent<CircularProgressProps, TamaguiElement>;
