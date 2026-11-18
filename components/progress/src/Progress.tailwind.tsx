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

// The `@tamagui/tailwind` variant of Progress.tsx, installed in its place by
// `cyclone-ui init --style tailwind`. Keep the exports in sync.

import type { ColorTokens, ThemeTokens, TransitionProp } from "@tamagui/core";
import { isWeb } from "@tamagui/core";
import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useEffect, useRef, useState } from "react";

// The track heights of `@tamagui/progress`: the default is a quarter of the
// `10xl` size token, and the minimum width is 20 track heights.
const ProgressFrame = styled(
  View,
  "h-[11px] w-full min-w-[220px] overflow-hidden bg-sunken",
  {
    displayName: "Progress",
    variants: {
      size: {
        xs: "h-[4px] min-w-[80px]",
        sm: "h-[6px] min-w-[120px]",
        md: "h-[9px] min-w-[180px]",
        lg: "h-[12px] min-w-[240px]",
        xl: "h-[16px] min-w-[320px]"
      },
      variant: {
        solid: "",
        dashed: "flex-row overflow-visible bg-transparent"
      }
    }
  }
);

export interface ProgressProps extends Omit<
  ComponentPropsWithoutRef<typeof ProgressFrame>,
  "children"
> {
  value?: number | null;
  max?: number;
  getValueLabel?: (value: number, max: number) => string;
  color?: ColorTokens | ThemeTokens;
  /**
   * `solid` fills a continuous bar. `dashed` splits the track into segments
   * that light up (with a brief scale pop) as the value increases.
   */
  variant?: "solid" | "dashed";
  /**
   * The number of dashed segments. By default, as many as fit the track's
   * width while keeping each segment a tall pill.
   */
  segments?: number;
}

// The same value handling and ARIA output as `@tamagui/progress`.
const DEFAULT_MAX = 100;

const isValidNumber = (value: unknown): value is number =>
  typeof value === "number" && !Number.isNaN(value);

const defaultGetValueLabel = (value: number, max: number) =>
  `${Math.round((value / max) * 100)}%`;

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

const fade: { transition: TransitionProp } = { transition: "150ms" };

const ProgressSegment = ({
  filled,
  color,
  height
}: {
  filled: boolean;
  color: ColorTokens | ThemeTokens;
  height: number;
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
      className={`h-full flex-1 rounded-[${height}px] mx-[${(height * SEGMENT_GAP) / 2}px] bg-${filled ? color : "sunken"} ${popping ? "scale-[1.3]" : "scale-100"}`}
    />
  );
};

// `@tamagui/tailwind` leaves `transition` out of its props, but its runtime
// animates class changes with it like any Tamagui component. Only the slide
// animates: the indicator's width is a layout jump.
const slide: { transition: TransitionProp } = {
  transition: { transform: "bouncy" }
};

export const Progress = forwardRef<TailwindViewElement, ProgressProps>(
  (
    {
      color = "primary",
      value: valueProp = 0,
      max: maxProp = DEFAULT_MAX,
      getValueLabel = defaultGetValueLabel,
      variant = "solid",
      segments,
      onLayout,
      ...props
    },
    forwardedRef
  ) => {
    const max = isValidNumber(maxProp) && maxProp > 0 ? maxProp : DEFAULT_MAX;
    const value =
      isValidNumber(valueProp) && valueProp >= 0 && valueProp <= max
        ? Math.round(valueProp)
        : null;
    const state =
      value === null ? "indeterminate" : value === max ? "complete" : "loading";
    const progressRatio = (value ?? 0) / max;
    // Native can't translate by a percentage, so it measures the track. The
    // dashed variant measures everywhere to fit its segments.
    const [track, setTrack] = useState({ width: 0, height: 0 });
    const { width } = track;
    const dashed = variant === "dashed";
    const count = !dashed
      ? 0
      : segments
        ? Math.max(1, Math.round(segments))
        : track.height
          ? Math.max(
              1,
              Math.floor(track.width / (track.height * SEGMENT_PITCH))
            )
          : 0;
    const filled = useStaggeredCount(Math.round(progressRatio * count));

    // The indicator is twice the track's width so a bouncy slide can overshoot
    // without showing past the right edge. A translate percentage is of its own
    // width: -100% hides it, -50% fills the track.
    const x = isWeb
      ? `${-100 + progressRatio * 50}%`
      : `${Math.ceil(-width * (2 - progressRatio))}px`;

    return (
      <ProgressFrame
        ref={forwardedRef}
        role="progressbar"
        aria-valuemax={max}
        aria-valuemin={0}
        aria-valuenow={value ?? undefined}
        aria-valuetext={value === null ? undefined : getValueLabel(value, max)}
        data-state={state}
        data-value={value ?? undefined}
        data-max={max}
        {...props}
        variant={variant}
        onLayout={event => {
          if (!isWeb || dashed) {
            const layout = event.nativeEvent.layout;
            setTrack({
              width: Math.round(layout.width),
              height: Math.round(layout.height)
            });
          }
          onLayout?.(event);
        }}>
        {dashed ? (
          Array.from({ length: count }, (_, index) => (
            <ProgressSegment
              key={index}
              filled={index < filled}
              color={color}
              height={track.height}
            />
          ))
        ) : (
          <View
            data-state={state}
            data-value={value ?? undefined}
            data-max={max}
            {...((isWeb || width > 0) && slide)}
            className={`h-full w-[200%] bg-${color} translate-x-[${x}] ${!isWeb && width === 0 ? "opacity-0" : ""}`}
          />
        )}
      </ProgressFrame>
    );
  }
);
