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

import type { FormControlSize } from "@cyclone-ui/helpers";
import type { TamaguiElement } from "@tamagui/core";
import { Text, View } from "@tamagui/core";
import type { SliderProps as TamaguiSliderProps } from "@tamagui/slider";
import { Slider as TamaguiSlider } from "@tamagui/slider";
import type { ReactNode } from "react";
import { forwardRef, useCallback, useMemo, useRef, useState } from "react";

export type SliderSize = FormControlSize;
export type SliderValue = number | number[];

export interface SliderMark {
  /** The value the mark is placed at. */
  value: number;
  /** The label displayed below (or beside, when vertical) the mark. */
  label?: ReactNode;
}

export interface SliderProps extends Omit<
  TamaguiSliderProps,
  "value" | "defaultValue" | "onValueChange" | "size" | "children" | "onChange"
> {
  /** The slider value. Pass an array for a range slider. Makes the slider controlled. */
  value?: SliderValue;
  /** The initial value when uncontrolled. Pass an array for a range slider. */
  defaultValue?: SliderValue;
  /** Called on every change, with a number (or an array for a range slider) and the index of the moved thumb. */
  onChange?: (value: SliderValue, activeThumb: number) => void;
  /** Called when a drag ends or a key press changes the value. */
  onChangeCommitted?: (value: SliderValue) => void;
  /** The track and thumb size. */
  size?: SliderSize;
  /** Show a mark at every step (`true`), or at the given values with optional labels. */
  marks?: boolean | SliderMark[];
  /** Fill the selected range (`"normal"`), everything outside it (`"inverted"`), or nothing (`false`). */
  track?: "normal" | "inverted" | false;
  /** Show the value label on hover, focus and drag (`"auto"`), always (`"on"`), or never (`"off"`). */
  valueLabelDisplay?: "auto" | "on" | "off";
  /** A string, or a function of the value and thumb index, displayed in the value label. */
  valueLabelFormat?: string | ((value: number, index: number) => ReactNode);
  /** The id of the element labelling the slider, applied to every thumb. */
  "aria-labelledby"?: string;
  /** Build the accessible name of a thumb. */
  getAriaLabel?: (index: number) => string;
  /** Build the accessible description of a thumb's value. */
  getAriaValueText?: (value: number, index: number) => string;
}

interface SliderGeometry {
  /** The track thickness. */
  track: number;
  /** The thumb diameter. */
  thumb: number;
  /** The pressable thickness of the slider, centred on the track. */
  hit: number;
}

/** Pixel geometry per size; `md` matches the Material UI medium slider. */
const SLIDER_GEOMETRY: Record<SliderSize, SliderGeometry> = {
  sm: { track: 2, thumb: 12, hit: 24 },
  md: { track: 4, thumb: 20, hit: 30 },
  lg: { track: 6, thumb: 24, hit: 34 }
};

/** The gap between the thumb and its value label, clearing the focus ring. */
const VALUE_LABEL_GAP = 8;
const RAIL_OPACITY = 0.38;
/** Marks are only generated for each step up to this many. */
const MAX_STEP_MARKS = 100;
/** The width (or height, when vertical) reserved for centring each label. */
const LABEL_BOX = 200;

/** Count decimal places, including numbers written in exponent form (`1e-7`). */
const getDecimalCount = (num: number) => {
  const [mantissa = "", exponent] = num.toString().split("e-");
  const decimals = mantissa.split(".")[1]?.length ?? 0;

  return exponent ? decimals + Number(exponent) : decimals;
};

const toArray = (value: SliderValue | undefined) =>
  value === undefined ? undefined : Array.isArray(value) ? value : [value];

/**
 * Convert a value to its percentage along the track.
 *
 * @param value - The value to convert.
 * @param min - The slider minimum.
 * @param max - The slider maximum.
 * @returns The percentage, clamped to 0 - 100.
 */
export const valueToPercent = (value: number, min: number, max: number) =>
  max === min
    ? 0
    : Math.min(100, Math.max(0, ((value - min) * 100) / (max - min)));

/**
 * Resolve the `marks` prop to a list of marks within the slider bounds.
 *
 * @param marks - The `marks` prop.
 * @param min - The slider minimum.
 * @param max - The slider maximum.
 * @param step - The slider step.
 * @returns The marks to display.
 */
export const getSliderMarks = (
  marks: boolean | SliderMark[] | undefined,
  min: number,
  max: number,
  step: number
): SliderMark[] => {
  if (Array.isArray(marks)) {
    return marks.filter(mark => mark.value >= min && mark.value <= max);
  }
  if (!marks || step <= 0) {
    return [];
  }

  // The epsilon keeps floating point error (for example 1 / 0.1) from
  // dropping the last mark.
  const count = Math.floor((max - min) / step + 1e-9);
  if (count > MAX_STEP_MARKS) {
    return [];
  }

  const decimals = getDecimalCount(step);

  return Array.from({ length: count + 1 }, (_, index) => ({
    value: Number((min + index * step).toFixed(decimals))
  }));
};

/** Whether a value falls on the filled part of the track. */
const isFilled = (
  value: number,
  values: number[],
  track: SliderProps["track"]
) => {
  if (track === false || values.length === 0) {
    return false;
  }

  const low = values.length > 1 ? Math.min(...values) : -Infinity;
  const high = Math.max(...values);
  const inside = value >= low && value <= high;

  return track === "inverted"
    ? values.length > 1
      ? value <= low || value >= high
      : value >= high
    : inside;
};

/**
 * A slider for selecting a value, or a range of values, from a continuous or
 * stepped interval. Styled after the Material UI slider and built on the
 * Tamagui `Slider`.
 */
export const Slider = forwardRef<TamaguiElement, SliderProps>(
  (
    {
      value: valueProp,
      defaultValue,
      min = 0,
      max = 100,
      step = 1,
      orientation = "horizontal",
      dir,
      disabled = false,
      size = "md",
      marks = false,
      track = "normal",
      valueLabelDisplay = "off",
      valueLabelFormat,
      "aria-labelledby": ariaLabelledBy,
      getAriaLabel,
      getAriaValueText,
      onChange,
      onChangeCommitted,
      onSlideStart,
      onSlideEnd,
      ...props
    },
    forwardedRef
  ) => {
    const range = Array.isArray(valueProp ?? defaultValue);
    const controlled = valueProp !== undefined;
    const [uncontrolledValues, setUncontrolledValues] = useState(
      () => toArray(defaultValue) ?? [min]
    );
    const values = (controlled ? toArray(valueProp) : uncontrolledValues) ?? [
      min
    ];

    const [focusedThumb, setFocusedThumb] = useState(-1);
    const [focusVisibleThumb, setFocusVisibleThumb] = useState(-1);
    const [hoveredThumb, setHoveredThumb] = useState(-1);
    const [dragging, setDragging] = useState(false);

    // The latest values, read when committing after a drag or key press.
    const valuesRef = useRef(values);
    valuesRef.current = values;
    const keyDownValuesRef = useRef<number[] | null>(null);

    const vertical = orientation === "vertical";
    const rtl = !vertical && dir === "rtl";
    // The edge the value grows from, and the matching margin used to centre
    // an element on that edge.
    const startEdge = vertical ? "bottom" : rtl ? "right" : "left";
    const startMargin = vertical
      ? "marginBottom"
      : rtl
        ? "marginRight"
        : "marginLeft";

    const geometry = SLIDER_GEOMETRY[size] ?? SLIDER_GEOMETRY.md;
    const fill = disabled ? "hairline" : "accent";
    const markList = useMemo(
      () => getSliderMarks(marks, min, max, step),
      [marks, min, max, step]
    );
    const labelled = markList.some(mark => mark.label !== undefined);
    const markSize = Math.max(2, geometry.track / 2);

    const toOutput = useCallback(
      (next: number[]): SliderValue => (range ? next : (next[0] ?? min)),
      [min, range]
    );

    const handleValueChange = useCallback(
      (next: number[]) => {
        const previous = valuesRef.current;
        const changed = next.findIndex(
          (item, index) => item !== previous[index]
        );
        valuesRef.current = next;

        if (!controlled) {
          setUncontrolledValues(next);
        }
        onChange?.(toOutput(next), changed === -1 ? focusedThumb : changed);
      },
      [controlled, focusedThumb, onChange, toOutput]
    );

    const handleSlideStart = useCallback<
      NonNullable<TamaguiSliderProps["onSlideStart"]>
    >(
      (event, value, target) => {
        setDragging(true);
        onSlideStart?.(event, value, target);
      },
      [onSlideStart]
    );

    const handleSlideEnd = useCallback<
      NonNullable<TamaguiSliderProps["onSlideEnd"]>
    >(
      (event, value) => {
        setDragging(false);
        onSlideEnd?.(event, value);
        onChangeCommitted?.(toOutput(valuesRef.current));
      },
      [onChangeCommitted, onSlideEnd, toOutput]
    );

    // A key press is committed on key up, once the Tamagui frame has applied it.
    const handleKeyDown = useCallback(() => {
      keyDownValuesRef.current ??= valuesRef.current;
    }, []);

    const handleKeyUp = useCallback(() => {
      const before = keyDownValuesRef.current;
      keyDownValuesRef.current = null;
      if (before && String(before) !== String(valuesRef.current)) {
        onChangeCommitted?.(toOutput(valuesRef.current));
      }
    }, [onChangeCommitted, toOutput]);

    const formatValueLabel = (value: number, index: number) =>
      typeof valueLabelFormat === "function"
        ? valueLabelFormat(value, index)
        : (valueLabelFormat ?? value);

    const low = values.length > 1 ? Math.min(...values) : min;
    const high = Math.max(...values);
    // `inverted` fills the track outside the selected range.
    const invertedFills: [from: number, to: number][] =
      track === "inverted"
        ? values.length > 1
          ? [
              [0, valueToPercent(low, min, max)],
              [valueToPercent(high, min, max), 100]
            ]
          : [[valueToPercent(high, min, max), 100]]
        : [];

    return (
      <TamaguiSlider
        marginBottom={labelled && !vertical ? 20 : undefined}
        marginRight={labelled && vertical ? 44 : undefined}
        height={vertical ? 200 : undefined}
        {...props}
        ref={forwardedRef}
        // The frame is the pressable area, and the track is centred inside it.
        {...(vertical ? { width: geometry.hit } : { height: geometry.hit })}
        min={min}
        max={max}
        step={step}
        orientation={orientation}
        dir={dir}
        disabled={disabled}
        size={geometry.thumb}
        value={values}
        onValueChange={handleValueChange}
        onSlideStart={handleSlideStart}
        onSlideEnd={handleSlideEnd}
        // Keep the grabbing cursor while dragging, even once the pointer
        // leaves the thumb.
        cursor={disabled ? "not-allowed" : dragging ? "grabbing" : "pointer"}
        userSelect="none">
        <TamaguiSlider.Track
          position="absolute"
          backgroundColor="transparent"
          borderRadius={100_000}
          {...(vertical
            ? {
                top: 0,
                bottom: 0,
                left: "50%",
                width: geometry.track,
                marginLeft: -geometry.track / 2
              }
            : {
                left: 0,
                right: 0,
                top: "50%",
                height: geometry.track,
                marginTop: -geometry.track / 2
              })}>
          <View
            position="absolute"
            inset={0}
            backgroundColor={fill}
            opacity={RAIL_OPACITY}
            pointerEvents="none"
          />
          {track === "normal" && (
            <TamaguiSlider.TrackActive
              backgroundColor={fill}
              borderRadius={100_000}
              pointerEvents="none"
            />
          )}
          {invertedFills.map(([from, to]) => (
            <View
              key={`${from}-${to}`}
              position="absolute"
              backgroundColor={fill}
              pointerEvents="none"
              {...(vertical
                ? { left: 0, right: 0, bottom: `${from}%`, top: `${100 - to}%` }
                : {
                    top: 0,
                    bottom: 0,
                    [startEdge]: `${from}%`,
                    [rtl ? "left" : "right"]: `${100 - to}%`
                  })}
            />
          ))}
        </TamaguiSlider.Track>

        {markList.map(mark => {
          const percent = `${valueToPercent(mark.value, min, max)}%`;
          const active = isFilled(mark.value, values, track);

          return (
            <View
              key={`mark-${mark.value}`}
              data-testid="slider-mark"
              position="absolute"
              width={markSize}
              height={markSize}
              borderRadius={100_000}
              backgroundColor={active ? "onAccent" : fill}
              opacity={active ? 0.8 : 1}
              pointerEvents="none"
              {...{ [startEdge]: percent, [startMargin]: -markSize / 2 }}
              {...(vertical
                ? { left: "50%", marginLeft: -markSize / 2 }
                : { top: "50%", marginTop: -markSize / 2 })}
            />
          );
        })}

        {markList
          .filter(mark => mark.label !== undefined)
          .map(mark => {
            const percent = `${valueToPercent(mark.value, min, max)}%`;
            const active = isFilled(mark.value, values, track);

            return (
              <View
                key={`label-${mark.value}`}
                position="absolute"
                pointerEvents="none"
                {...(vertical
                  ? {
                      left: "50%",
                      marginLeft: geometry.hit / 2,
                      bottom: percent,
                      height: LABEL_BOX,
                      marginBottom: -LABEL_BOX / 2,
                      justifyContent: "center"
                    }
                  : {
                      top: "100%",
                      [startEdge]: percent,
                      width: LABEL_BOX,
                      [startMargin]: -LABEL_BOX / 2,
                      alignItems: "center"
                    })}>
                <Text
                  fontFamily="caption"
                  fontSize={14}
                  lineHeight={20}
                  textAlign="center"
                  color={active && !disabled ? "inkEmphasis" : "inkSubtle"}>
                  {mark.label}
                </Text>
              </View>
            );
          })}

        {values.map((value, index) => {
          const focused = focusedThumb === index;
          const hovered = hoveredThumb === index;
          const active = dragging && focused;
          const showRing =
            !disabled && (active || hovered || focusVisibleThumb === index);
          const showValueLabel =
            valueLabelDisplay === "on" ||
            (valueLabelDisplay === "auto" &&
              !disabled &&
              (active || hovered || focusVisibleThumb === index));

          return (
            <TamaguiSlider.Thumb
              key={index}
              index={index}
              size={geometry.thumb}
              width={geometry.thumb}
              height={geometry.thumb}
              backgroundColor="transparent"
              borderWidth={0}
              outlineStyle="none"
              cursor={
                disabled
                  ? "not-allowed"
                  : dragging
                    ? "grabbing"
                    : "grab press:grabbing"
              }
              zIndex={active ? 2 : 1}
              // Centre the thumb on its value, rather than keeping it inside the
              // track bounds, so it lines up with the marks.
              {...(vertical
                ? {}
                : { x: (rtl ? 1 : -1) * (geometry.thumb / 2) })}
              aria-label={getAriaLabel?.(index)}
              aria-labelledby={ariaLabelledBy}
              aria-valuetext={getAriaValueText?.(value, index)}
              onFocus={(event: any) => {
                setFocusedThumb(index);
                setFocusVisibleThumb(
                  typeof event?.target?.matches === "function" &&
                    event.target.matches(":focus-visible")
                    ? index
                    : -1
                );
              }}
              onBlur={() => {
                setFocusedThumb(-1);
                setFocusVisibleThumb(-1);
                setDragging(false);
              }}
              onMouseEnter={() => setHoveredThumb(index)}
              onMouseLeave={() => setHoveredThumb(-1)}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}>
              {/* Children ignore the pointer so presses target the thumb itself,
                  which the Tamagui responder uses to tell a thumb from the track. */}
              <View
                position="absolute"
                inset={0}
                borderRadius={100_000}
                backgroundColor={fill}
                pointerEvents="none"
                transition="200ms"
                boxShadow={showRing ? "ringOffset" : "none"}
              />
              {valueLabelDisplay !== "off" && (
                <View
                  position="absolute"
                  bottom="100%"
                  marginBottom={VALUE_LABEL_GAP}
                  left={geometry.thumb / 2 - LABEL_BOX / 2}
                  width={LABEL_BOX}
                  alignItems="center"
                  pointerEvents="none"
                  aria-hidden
                  transition="200ms"
                  opacity={showValueLabel ? 1 : 0}
                  scale={showValueLabel ? 1 : 0.5}
                  y={showValueLabel ? 0 : 6}>
                  <View
                    backgroundColor="accent"
                    borderRadius="sm"
                    paddingHorizontal={8}
                    paddingVertical={4}
                    zIndex={1}>
                    <Text
                      fontFamily="caption"
                      fontSize={12}
                      lineHeight={16}
                      fontWeight="500"
                      color="onAccent">
                      {formatValueLabel(value, index)}
                    </Text>
                  </View>
                  <View
                    width={8}
                    height={8}
                    marginTop={-5}
                    backgroundColor="accent"
                    rotate="45deg"
                  />
                </View>
              )}
            </TamaguiSlider.Thumb>
          );
        })}
      </TamaguiSlider>
    );
  }
);

Slider.displayName = "Slider";
