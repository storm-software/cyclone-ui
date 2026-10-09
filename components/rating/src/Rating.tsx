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

import type { ConfettiBurstHandle } from "@cyclone-ui/confetti-burst";
import { ConfettiBurst } from "@cyclone-ui/confetti-burst";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { getFormSizeScale } from "@cyclone-ui/helpers";
import type { IconComponent, IconWeight } from "@cyclone-ui/icons";
import { Star } from "@cyclone-ui/icons";
import type {
  ColorTokens,
  TamaguiElement,
  ThemeTokens,
  ViewProps
} from "@tamagui/core";
import { View } from "@tamagui/core";
import { forwardRef, useCallback, useRef, useState } from "react";

export type RatingSize = FormControlSize;
export type RatingColor = ColorTokens | ThemeTokens | (string & {});

export interface RatingProps
  extends Omit<ViewProps, "children" | "onChange" | "role"> {
  /** The rating value. Pass `null` for no rating. Makes the rating controlled. */
  value?: number | null;
  /** The initial rating value when uncontrolled. */
  defaultValue?: number | null;
  /** The number of icons, and the maximum rating value. */
  max?: number;
  /** The smallest selectable increment, for example `0.5` for half ratings. */
  precision?: number;
  /** Called with the new value, or `null` when the current value is clicked again to clear it. */
  onChange?: (value: number | null) => void;
  /** Called with the hovered value, or `null` when the pointer leaves the rating. */
  onChangeActive?: (value: number | null) => void;
  /** Display the value without allowing it to be changed. */
  readOnly?: boolean;
  /** Disable the rating. */
  disabled?: boolean;
  /** The icon size. */
  size?: RatingSize;
  /** The icon displayed for filled values. */
  icon?: IconComponent;
  /** The icon displayed for empty values. Defaults to `icon`. */
  emptyIcon?: IconComponent;
  /** The weight of the filled icon. */
  iconWeight?: IconWeight;
  /** The weight of the empty icon. */
  emptyIconWeight?: IconWeight;
  /** The color of filled icons. */
  color?: RatingColor;
  /** The color of empty icons. */
  emptyColor?: RatingColor;
  /** Only fill the icon matching the value, rather than every icon up to it. */
  highlightSelectedOnly?: boolean;
  /** Build the accessible description of a value. */
  getLabelText?: (value: number) => string;
}

/** The medium icon size in pixels; other sizes scale from it. */
const BASE_ICON_SIZE = 24;

const getDecimalPrecision = (num: number) =>
  num.toString().split(".")[1]?.length ?? 0;

/**
 * Round a rating value to the nearest multiple of `precision`.
 *
 * @param value - The value to round.
 * @param precision - The rating precision.
 * @returns The rounded value, or `null` when there is no value.
 */
export const roundRatingValue = (
  value: number | null | undefined,
  precision: number
): number | null => {
  if (value === null || value === undefined) {
    return null;
  }

  return Number(
    (Math.round(value / precision) * precision).toFixed(
      getDecimalPrecision(precision)
    )
  );
};

const defaultGetLabelText = (value: number) =>
  `${value} Star${value === 1 ? "" : "s"}`;

/** A row of icons for displaying and selecting a rating. */
export const Rating = forwardRef<TamaguiElement, RatingProps>(
  (
    {
      value: valueProp,
      defaultValue = null,
      max = 5,
      precision = 1,
      onChange,
      onChangeActive,
      readOnly = false,
      disabled = false,
      size = "md",
      icon: Icon = Star,
      emptyIcon: EmptyIcon = Icon,
      iconWeight = "fill",
      emptyIconWeight = "regular",
      color = "accent",
      emptyColor = "hairline",
      highlightSelectedOnly = false,
      getLabelText = defaultGetLabelText,
      onKeyDown,
      onMouseLeave,
      ...props
    },
    forwardedRef
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const [hover, setHover] = useState<number | null>(null);
    const penultimateConfetti = useRef<ConfettiBurstHandle>(null);
    const highestConfetti = useRef<ConfettiBurstHandle>(null);

    const controlled = valueProp !== undefined;
    const value = roundRatingValue(
      controlled ? valueProp : uncontrolledValue,
      precision
    );
    const interactive = !readOnly && !disabled;
    const displayValue = interactive && hover !== null ? hover : value;
    const iconSize = Math.round(BASE_ICON_SIZE * getFormSizeScale(size));
    const segments = Math.max(1, Math.round(1 / precision));
    const decimals = getDecimalPrecision(precision);
    const penultimateValue = roundRatingValue(max - precision, precision);

    const setValue = useCallback(
      (next: number | null) => {
        if (next !== null && next !== value) {
          if (next === max) {
            highestConfetti.current?.burst();
          } else if (next === penultimateValue) {
            penultimateConfetti.current?.burst();
          }
        }

        if (!controlled) {
          setUncontrolledValue(next);
        }
        onChange?.(next);
      },
      [controlled, max, onChange, penultimateValue, value]
    );

    const setHoverValue = useCallback(
      (next: number | null) => {
        if (next !== hover) {
          setHover(next);
          onChangeActive?.(next);
        }
      },
      [hover, onChangeActive]
    );

    // Tamagui v3 types `onKeyDown` as an intersection of the web and native
    // handlers; this handler reads the web keyboard event.
    const handleKeyDown = useCallback(
      (event: any) => {
        onKeyDown?.(event);
        if (!interactive || event.defaultPrevented) {
          return;
        }

        const current = value ?? 0;
        let next: number;
        switch (event.key) {
          case "ArrowRight":
          case "ArrowUp":
            next = current + precision;
            break;
          case "ArrowLeft":
          case "ArrowDown":
            next = current - precision;
            break;
          case "Home":
            next = 0;
            break;
          case "End":
            next = max;
            break;
          default:
            return;
        }

        event.preventDefault();
        const clamped = roundRatingValue(
          Math.min(max, Math.max(0, next)),
          precision
        );
        setValue(clamped ? clamped : null);
      },
      [interactive, max, onKeyDown, precision, setValue, value]
    );

    const handleMouseLeave = useCallback(
      (event: any) => {
        onMouseLeave?.(event);
        if (interactive) {
          setHoverValue(null);
        }
      },
      [interactive, onMouseLeave, setHoverValue]
    );

    const label = getLabelText(value ?? 0);

    return (
      <View
        {...props}
        ref={forwardedRef}
        flexDirection="row"
        alignSelf="flex-start"
        borderRadius="control"
        outlineStyle="none"
        boxShadow="none focus-visible:ringOffset"
        opacity={disabled ? 0.5 : 1}
        cursor={disabled ? "not-allowed" : undefined}
        tabIndex={interactive ? 0 : undefined}
        // A read-only rating is a static image of its value, while an
        // interactive one is adjusted like a slider.
        role={readOnly ? "img" : "slider"}
        aria-label={props["aria-label"] ?? (readOnly ? label : undefined)}
        aria-valuemin={readOnly ? undefined : 0}
        aria-valuemax={readOnly ? undefined : max}
        aria-valuenow={readOnly ? undefined : (value ?? 0)}
        aria-valuetext={readOnly ? undefined : label}
        aria-disabled={disabled || undefined}
        onKeyDown={handleKeyDown}
        onMouseLeave={handleMouseLeave}>
        {Array.from({ length: max }, (_, index) => {
          const itemValue = index + 1;
          const fill =
            displayValue === null
              ? 0
              : highlightSelectedOnly
                ? Number(Math.ceil(displayValue) === itemValue)
                : Math.min(1, Math.max(0, displayValue - index));
          const hovered =
            interactive && hover !== null && Math.ceil(hover) === itemValue;

          return (
            <View
              key={itemValue}
              position="relative"
              width={iconSize}
              height={iconSize}
              transition="200ms"
              scale={hovered ? 1.2 : 1}
              rotateZ={hovered ? "45deg" : "0deg"}
              aria-hidden={true}>
              {fill < 1 && (
                <EmptyIcon
                  size={iconSize}
                  weight={emptyIconWeight}
                  color={emptyColor}
                />
              )}
              {fill > 0 && (
                <View
                  position="absolute"
                  top={0}
                  left={0}
                  height={iconSize}
                  width={fill * iconSize}
                  overflow="hidden">
                  <Icon size={iconSize} weight={iconWeight} color={color} />
                </View>
              )}
              {interactive &&
                // Each icon is split into one hit area per precision step,
                // so fractional values work with both pointers and touch.
                Array.from({ length: segments }, (_, segment) => {
                  const segmentValue = Number(
                    (index + (segment + 1) * precision).toFixed(decimals)
                  );

                  return (
                    <View
                      key={segment}
                      position="absolute"
                      top={0}
                      left={(segment / segments) * iconSize}
                      width={iconSize / segments}
                      height={iconSize}
                      cursor="pointer"
                      onMouseEnter={() => setHoverValue(segmentValue)}
                      onPress={() =>
                        setValue(segmentValue === value ? null : segmentValue)
                      }>
                      {segmentValue === penultimateValue && (
                        <ConfettiBurst
                          ref={penultimateConfetti}
                          spread={20}
                          testID="rating-penultimate-confetti"
                        />
                      )}
                      {segmentValue === max && (
                        <ConfettiBurst
                          ref={highestConfetti}
                          spread={38}
                          testID="rating-highest-confetti"
                        />
                      )}
                    </View>
                  );
                })}
            </View>
          );
        })}
      </View>
    );
  }
);
