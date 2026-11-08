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

// The `@tamagui/tailwind` variant of CircularProgress.tsx, installed in its
// place by `cyclone-ui init --style tailwind`. Keep the exports in sync.

import type { ColorTokens, ThemeTokens, TransitionProp } from "@tamagui/core";
import { getVariableValue, useTheme } from "@tamagui/core";
import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useEffect, useRef, useState } from "react";
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

const fade: { transition: TransitionProp } = { transition: "150ms" };

const ProgressSegment = ({
  filled,
  color,
  width
}: {
  filled: boolean;
  color: ColorTokens | ThemeTokens;
  width: string;
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
      {...fade}
      className={`h-[24%] w-[${width}] rounded-[999px] bg-${filled ? color : "sunken"} ${popping ? "scale-[1.3]" : "scale-100"}`}
    />
  );
};

// Other sizes come from `className`, e.g. `size-12xl min-w-12xl`.
const CircularProgressFrame = styled(
  View,
  "items-center justify-center overflow-hidden bg-transparent",
  {
    displayName: "CircularProgress",
    variants: {
      size: {
        sm: "size-10xl min-w-10xl",
        md: "size-14xl min-w-14xl",
        lg: "size-18xl min-w-18xl",
        xl: "size-26xl min-w-26xl"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
);

export type CircularProgressSize = "sm" | "md" | "lg" | "xl";

export interface CircularProgressProps extends Omit<
  ComponentPropsWithoutRef<typeof CircularProgressFrame>,
  "children"
> {
  value?: number | null;
  max?: number;
  getValueLabel?: (value: number, max: number) => string;
  color?: ColorTokens | ThemeTokens;
  /**
   * `solid` draws a continuous ring that sweeps to each new value. `dashed` splits the ring into segments
   * that light up (with a brief scale pop) as the value increases.
   */
  variant?: "solid" | "dashed";
  /** The number of dashed segments around the ring. Defaults to 20. */
  segments?: number;
}

// The same value handling and ARIA output as `@tamagui/progress`.
const DEFAULT_MAX = 100;

const isValidNumber = (value: unknown): value is number =>
  typeof value === "number" && !Number.isNaN(value);

const defaultGetValueLabel = (value: number, max: number) =>
  `${Math.round((value / max) * 100)}%`;

export const CircularProgress = forwardRef<
  TailwindViewElement,
  CircularProgressProps
>(
  (
    {
      color = "primary",
      value: valueProp = 0,
      max: maxProp = DEFAULT_MAX,
      getValueLabel = defaultGetValueLabel,
      variant = "solid",
      segments = DASHED_SEGMENTS,
      ...props
    },
    forwardedRef
  ) => {
    const max = isValidNumber(maxProp) && maxProp > 0 ? maxProp : DEFAULT_MAX;
    const value =
      isValidNumber(valueProp) && valueProp >= 0 && valueProp <= max
        ? Math.round(valueProp)
        : null;
    const theme = useTheme();
    const indicatorColor = getVariableValue(
      theme[color as any] ?? color,
      "color"
    );
    const trackColor = getVariableValue(theme.sunken, "color");
    const progressRatio = (value ?? 0) / max;
    const count = Math.max(1, Math.round(segments));
    const filled = useStaggeredCount(
      variant === "dashed" ? Math.round(progressRatio * count) : 0
    );
    // Segments thin out as the count grows: 7% of the diameter at 20.
    const segmentWidth = `${Math.min(12, 140 / count)}%`;

    return (
      <CircularProgressFrame
        ref={forwardedRef}
        role="progressbar"
        aria-valuemax={max}
        aria-valuemin={0}
        aria-valuenow={value ?? undefined}
        aria-valuetext={value === null ? undefined : getValueLabel(value, max)}
        data-state={
          value === null
            ? "indeterminate"
            : value === max
              ? "complete"
              : "loading"
        }
        data-value={value ?? undefined}
        data-max={max}
        {...props}>
        {variant === "dashed" ? (
          Array.from({ length: count }, (_, index) => (
            // Each segment hangs from the top of a rotated full-size layer.
            // The padding leaves room for the pop inside the clip.
            <View
              key={index}
              className={`absolute inset-0 items-center p-[3%] rotate-[${(360 / count) * index}deg]`}>
              <ProgressSegment
                filled={index < filled}
                color={color}
                width={segmentWidth}
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
      </CircularProgressFrame>
    );
  }
);
