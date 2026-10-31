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

import type { ColorTokens, ThemeTokens } from "@tamagui/core";
import { getVariableValue, useTheme } from "@tamagui/core";
import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { Circle, Svg } from "react-native-svg";

const VIEWBOX_SIZE = 24;
const STROKE_WIDTH = 2.5;
const RADIUS = VIEWBOX_SIZE / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

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
      </CircularProgressFrame>
    );
  }
);
