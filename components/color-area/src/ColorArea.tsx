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
  Color,
  ColorAreaState,
  ColorChannel,
  ColorAreaProps as StatelyColorAreaProps
} from "@react-stately/color";
import { parseColor, useColorAreaState } from "@react-stately/color";
import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { View, withStaticProperties } from "@tamagui/core";
import type { ReactNode, PointerEvent as ReactPointerEvent } from "react";
import { createContext, forwardRef, use, useRef, useState } from "react";

export type { ColorFormat, ColorSpace } from "@react-stately/color";
export { parseColor };
export type { Color, ColorChannel };

export interface ColorAreaLayer {
  backgroundColor?: string;
  backgroundImage?: string;
  /** Web only, native drops it. */
  maskImage?: string;
}

const HUES = [0, 60, 120, 180, 240, 300, 360];
const WHITE_FADE = "white, rgba(255, 255, 255, 0)";
const BLACK_FADE = "black, rgba(0, 0, 0, 0)";
/** HSL lightness darkens to black below 50% and lightens to white above it. */
const LIGHTNESS_FADE =
  "black, rgba(0, 0, 0, 0) 50%, rgba(255, 255, 255, 0) 50%, white";
// Tamagui's boxShadow parser rejects `inset`, so HeroUI's inner ring is left out.
const THUMB_SHADOW = "0 0 0 1px rgba(0, 0, 0, 0.1)";
const LOCALE = Intl.DateTimeFormat().resolvedOptions().locale;

const gradient = (to: string, stops: string) =>
  `linear-gradient(to ${to}, ${stops})`;

/** Hue to RGB is linear between multiples of 60°, so these stops are exact. */
const rainbow = (to: string, saturation: number, lightness: number) =>
  gradient(
    to,
    HUES.map(hue => `hsl(${hue}, ${saturation}%, ${lightness}%)`).join(", ")
  );

/**
 * Build the stacked layers that paint every color of the area, the same
 * gradients React Aria uses. HSB and HSL areas are pure alpha compositing.
 *
 * @param color - The current color, in the area's color space.
 * @param channels - The resolved x, y and fixed (z) channels.
 * @returns The layers, bottom first.
 */
export const getColorAreaLayers = (
  color: Color,
  { xChannel, zChannel }: ColorAreaState["channels"]
): ColorAreaLayer[] => {
  const to = (channel: ColorChannel) =>
    channel === xChannel ? "right" : "top";
  const z = color.getChannelValue(zChannel);
  const hsl = color.getColorSpace() === "hsl";

  switch (zChannel) {
    case "hue":
      return hsl
        ? [
            {
              backgroundImage: gradient(
                to("saturation"),
                `hsl(0, 0%, 50%), hsl(${z}, 100%, 50%)`
              )
            },
            { backgroundImage: gradient(to("lightness"), LIGHTNESS_FADE) }
          ]
        : [
            { backgroundColor: `hsl(${z}, 100%, 50%)` },
            { backgroundImage: gradient(to("saturation"), WHITE_FADE) },
            { backgroundImage: gradient(to("brightness"), BLACK_FADE) }
          ];
    case "saturation":
      return hsl
        ? [
            { backgroundImage: rainbow(to("hue"), z, 50) },
            { backgroundImage: gradient(to("lightness"), LIGHTNESS_FADE) }
          ]
        : [
            { backgroundImage: rainbow(to("hue"), 100, 50) },
            { backgroundColor: `rgba(255, 255, 255, ${1 - z / 100})` },
            { backgroundImage: gradient(to("brightness"), BLACK_FADE) }
          ];
    case "brightness":
      return [
        { backgroundImage: rainbow(to("hue"), 100, 50) },
        { backgroundImage: gradient(to("saturation"), WHITE_FADE) },
        { backgroundColor: `rgba(0, 0, 0, ${1 - z / 100})` }
      ];
    case "lightness":
      return [
        { backgroundImage: rainbow(to("hue"), 100, z) },
        {
          backgroundImage: gradient(
            to("saturation"),
            `hsl(0, 0%, ${z}%), hsla(0, 0%, ${z}%, 0)`
          )
        }
      ];
    case "red":
    case "green":
    case "blue":
    case "alpha": {
      // RGB is bilinear between the four corners: the bottom row, then the top
      // row faded in from the bottom.
      const yChannel = (["red", "green", "blue"] as const).find(
        channel => channel !== xChannel && channel !== zChannel
      )!;
      const at = (x: number, y: number) =>
        color
          .withChannelValue(xChannel, x)
          .withChannelValue(yChannel, y)
          .toString("rgb");

      // ponytail: native drops maskImage, so RGB areas only paint correctly on
      // web; draw native RGB areas as vertical strips if that is ever needed.
      return [
        { backgroundImage: gradient("right", `${at(0, 0)}, ${at(255, 0)}`) },
        {
          backgroundImage: gradient("right", `${at(0, 255)}, ${at(255, 255)}`),
          maskImage: gradient("top", "transparent, black")
        }
      ];
    }
  }
};

interface ColorAreaContextValue {
  state: ColorAreaState;
  disabled: boolean;
  focusVisible: boolean;
  setThumb: (element: TamaguiElement | null) => void;
  thumbProps: ViewProps;
}

const ColorAreaContext = createContext<ColorAreaContextValue | null>(null);

export type ColorAreaThumbProps = ViewProps;

/** The draggable, focusable thumb marking the selected color. */
export const ColorAreaThumb = forwardRef<TamaguiElement, ColorAreaThumbProps>(
  (props, forwardedRef) => {
    const context = use(ColorAreaContext);
    if (!context) {
      throw new Error("`ColorArea.Thumb` must be rendered inside `ColorArea`.");
    }

    const { state, disabled, focusVisible, setThumb, thumbProps } = context;
    const { x, y } = state.getThumbPosition();
    const size = state.isDragging ? 20 : 16;

    return (
      <View
        ref={(element: TamaguiElement | null) => {
          setThumb(element);
          if (typeof forwardedRef === "function") {
            forwardedRef(element);
          } else if (forwardedRef) {
            forwardedRef.current = element;
          }
        }}
        position="absolute"
        left={`${x * 100}%`}
        top={`${y * 100}%`}
        width={size}
        height={size}
        marginLeft={-size / 2}
        marginTop={-size / 2}
        borderRadius={100_000}
        borderWidth={3}
        borderColor="white"
        backgroundColor={
          disabled
            ? "primary-disabled"
            : state.getDisplayColor().toString("css")
        }
        boxShadow={focusVisible ? "ring-offset" : THUMB_SHADOW}
        outlineStyle="none"
        // Only the size animates, so the thumb never lags the pointer.
        transition="width 150ms ease-out, height 150ms ease-out, margin 150ms ease-out"
        pointerEvents="none"
        data-dragging={state.isDragging}
        data-focus-visible={focusVisible}
        data-disabled={disabled}
        {...thumbProps}
        {...props}
      />
    );
  }
);

ColorAreaThumb.displayName = "ColorAreaThumb";

const DEFAULT_THUMB = <ColorAreaThumb />;

// Component tsconfigs have no DOM lib.
type PointerEvent = ReactPointerEvent<any>;

export interface ColorAreaProps
  extends
    Omit<ViewProps, "children" | "onChange" | "defaultValue">,
    Omit<StatelyColorAreaProps, "isDisabled"> {
  /** Block interaction and grey out the area. */
  disabled?: boolean;
  /** Overlay a dot grid, for precision picking (web only). */
  showDots?: boolean;
  /** The thumb, `<ColorArea.Thumb />` by default. */
  children?: ReactNode;
}

/**
 * A 2D color picker, which sets two channels of a color by dragging a thumb
 * across a gradient, or with the arrow, page, Home and End keys. Behaves like
 * the HeroUI (React Aria) `ColorArea`.
 */
const ColorAreaFrame = forwardRef<TamaguiElement, ColorAreaProps>(
  (allProps, forwardedRef) => {
    const {
      value,
      defaultValue,
      onChange,
      onChangeEnd,
      xChannel,
      yChannel,
      colorSpace,
      disabled = false,
      showDots = false,
      borderRadius = 16,
      children = DEFAULT_THUMB,
      "aria-label": ariaLabel = "Color picker",
      "aria-labelledby": ariaLabelledBy,
      ...props
    } = allProps;
    const state = useColorAreaState({
      value,
      defaultValue,
      onChange,
      onChangeEnd,
      xChannel,
      yChannel,
      colorSpace
    });
    const [focusVisible, setFocusVisible] = useState(false);
    const thumbRef = useRef<TamaguiElement | null>(null);
    const pointerFocusRef = useRef(false);

    const { xChannel: x, yChannel: y } = state.channels;
    const color = state.value;

    // The rect is read on every event, so scrolling mid-drag is handled.
    const moveTo = (event: PointerEvent) => {
      const rect = event.currentTarget.getBoundingClientRect();
      state.setColorFromPoint(
        (event.clientX - rect.left) / rect.width,
        (event.clientY - rect.top) / rect.height
      );
    };

    const endDrag = () => {
      if (state.isDragging) {
        state.setDragging(false);
      }
    };

    const handleKeyDown = (event: any) => {
      const page = event.shiftKey;
      const step = {
        ArrowRight: () =>
          state.incrementX(page ? state.xChannelPageStep : state.xChannelStep),
        ArrowLeft: () =>
          state.decrementX(page ? state.xChannelPageStep : state.xChannelStep),
        ArrowUp: () =>
          state.incrementY(page ? state.yChannelPageStep : state.yChannelStep),
        ArrowDown: () =>
          state.decrementY(page ? state.yChannelPageStep : state.yChannelStep),
        PageUp: () => state.incrementY(state.yChannelPageStep),
        PageDown: () => state.decrementY(state.yChannelPageStep),
        Home: () => state.decrementX(state.xChannelPageStep),
        End: () => state.incrementX(state.xChannelPageStep)
      }[event.key as string];
      if (!step || disabled) {
        return;
      }

      event.preventDefault();
      // Each key press is a complete change, so it also fires `onChangeEnd`.
      state.setDragging(true);
      step();
      state.setDragging(false);
    };

    const thumbProps: ViewProps = {
      role: "slider",
      tabIndex: disabled ? -1 : 0,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-roledescription": "2D slider",
      "aria-disabled": disabled,
      "aria-valuemin": color.getChannelRange(x).minValue,
      "aria-valuemax": color.getChannelRange(x).maxValue,
      "aria-valuenow": state.xValue,
      "aria-valuetext": [
        `${color.getChannelName(x, LOCALE)} ${color.formatChannelValue(x, LOCALE)}`,
        `${color.getChannelName(y, LOCALE)} ${color.formatChannelValue(y, LOCALE)}`,
        color.getColorName(LOCALE)
      ].join(", "),
      onKeyDown: handleKeyDown,
      onFocus: (event: any) =>
        setFocusVisible(
          !pointerFocusRef.current &&
            typeof event?.target?.matches === "function" &&
            event.target.matches(":focus-visible")
        ),
      onBlur: () => setFocusVisible(false)
    } as ViewProps;

    const layers = disabled
      ? [{ backgroundColor: "primary-disabled" }]
      : getColorAreaLayers(color, state.channels);

    return (
      <ColorAreaContext.Provider
        value={{
          state,
          disabled,
          focusVisible,
          setThumb: element => {
            thumbRef.current = element;
          },
          thumbProps
        }}>
        <View
          position="relative"
          width="100%"
          maxWidth={224}
          aspectRatio={1}
          flexShrink={0}
          borderRadius={borderRadius}
          cursor={disabled ? "not-allowed" : undefined}
          userSelect="none"
          touchAction="none"
          data-disabled={disabled}
          {...props}
          ref={forwardedRef}
          onPointerDown={(event: PointerEvent) => {
            if (disabled || event.button !== 0) {
              return;
            }

            // Stops the drag from selecting text, which also keeps focus where
            // it is, so the thumb is focused by hand.
            event.preventDefault();
            event.currentTarget.setPointerCapture?.(event.pointerId);
            state.setDragging(true);
            moveTo(event);
            // A pointer press never shows the focus ring.
            setFocusVisible(false);
            pointerFocusRef.current = true;
            (thumbRef.current as any)?.focus?.();
            pointerFocusRef.current = false;
          }}
          onPointerMove={(event: PointerEvent) =>
            state.isDragging && moveTo(event)
          }
          onPointerUp={endDrag}
          onPointerCancel={endDrag}>
          {/* The layers are clipped to the rounded area, while the thumb may
              overhang its edges. */}
          <View
            position="absolute"
            inset={0}
            borderRadius={borderRadius}
            overflow="hidden"
            pointerEvents="none">
            {layers.map(layer => (
              <View
                key={layer.backgroundImage ?? layer.backgroundColor}
                position="absolute"
                inset={0}
                {...(layer as ViewProps)}
              />
            ))}
            {showDots && (
              <View
                position="absolute"
                inset={0}
                backgroundImage="radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)"
                backgroundSize="8px 8px"
              />
            )}
            <View
              position="absolute"
              inset={0}
              borderRadius={borderRadius}
              borderWidth={1}
              borderColor="rgba(0, 0, 0, 0.1)"
            />
          </View>
          {children}
        </View>
      </ColorAreaContext.Provider>
    );
  }
);

ColorAreaFrame.displayName = "ColorArea";

export const ColorArea = withStaticProperties(ColorAreaFrame, {
  Thumb: ColorAreaThumb
});
