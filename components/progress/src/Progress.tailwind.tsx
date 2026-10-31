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
import { forwardRef, useState } from "react";

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
}

// The same value handling and ARIA output as `@tamagui/progress`.
const DEFAULT_MAX = 100;

const isValidNumber = (value: unknown): value is number =>
  typeof value === "number" && !Number.isNaN(value);

const defaultGetValueLabel = (value: number, max: number) =>
  `${Math.round((value / max) * 100)}%`;

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
    // Native can't translate by a percentage, so it measures the track.
    const [width, setWidth] = useState(0);

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
        onLayout={event => {
          if (!isWeb) setWidth(Math.round(event.nativeEvent.layout.width));
          onLayout?.(event);
        }}>
        <View
          data-state={state}
          data-value={value ?? undefined}
          data-max={max}
          {...((isWeb || width > 0) && slide)}
          className={`h-full w-[200%] bg-${color} translate-x-[${x}] ${!isWeb && width === 0 ? "opacity-0" : ""}`}
        />
      </ProgressFrame>
    );
  }
);
