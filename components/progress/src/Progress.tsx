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
  TamaguiComponent,
  TamaguiElement,
  ThemeTokens
} from "@tamagui/core";
import { createStyledHOC, View } from "@tamagui/core";
import { Progress as TamaguiProgress } from "@tamagui/progress";
import { useEffect, useRef, useState } from "react";

export type ProgressVariant = "solid" | "dashed";

export type ProgressProps = GetProps<typeof TamaguiProgress> & {
  color?: ColorTokens | ThemeTokens;
  /**
   * `solid` fills a continuous bar. `dashed` splits the track into segments
   * that light up (with a brief scale pop) as the value increases.
   */
  variant?: ProgressVariant;
  /**
   * The number of dashed segments. By default, as many as fit the track's
   * width while keeping each segment a tall pill.
   */
  segments?: number;
};

// A dashed segment's pitch (segment + gap) and gap, as multiples of the
// track height, so segments stay tall pills at any width.
const SEGMENT_PITCH = 0.8;
const SEGMENT_GAP = 0.35;
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

// Same value handling as `@tamagui/progress`: out-of-range is indeterminate.
const getProgressRatio = (value: number | null | undefined, max: number) =>
  typeof value === "number" && max > 0 && value >= 0 && value <= max
    ? Math.round(value) / max
    : 0;

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

export const Progress = createStyledHOC(
  TamaguiProgress,
  (
    {
      color = "primary",
      size = "10xl",
      value = 0,
      max = 100,
      variant = "solid",
      segments,
      ...props
    }: ProgressProps,
    forwardRef
  ) => {
    const [track, setTrack] = useState({ width: 0, height: 0 });
    const count =
      variant !== "dashed"
        ? 0
        : segments
          ? Math.max(1, Math.round(segments))
          : track.height
            ? Math.max(
                1,
                Math.floor(track.width / (track.height * SEGMENT_PITCH))
              )
            : 0;
    const filled = useStaggeredCount(
      Math.round(getProgressRatio(value, max) * count)
    );

    if (variant === "dashed") {
      return (
        <TamaguiProgress
          ref={forwardRef}
          size={size}
          {...props}
          value={value}
          max={max}
          backgroundColor="transparent"
          overflow="visible"
          flexDirection="row"
          gap={track.height * SEGMENT_GAP}
          onLayout={event => {
            const { width, height } = event.nativeEvent.layout;
            setTrack({ width: Math.round(width), height: Math.round(height) });
            props.onLayout?.(event);
          }}>
          {Array.from({ length: count }, (_, index) => (
            <ProgressSegment
              key={index}
              filled={index < filled}
              color={color}
              flex={1}
              borderRadius={track.height}
            />
          ))}
        </TamaguiProgress>
      );
    }

    return (
      <TamaguiProgress
        ref={forwardRef}
        size={size}
        backgroundColor="sunken"
        {...props}
        value={value}
        max={max}>
        <TamaguiProgress.Indicator
          transition="bouncy"
          backgroundColor={color}
        />
      </TamaguiProgress>
    );
  },
  {
    displayName: "Progress"
  }
) as TamaguiComponent<ProgressProps, TamaguiElement>;
