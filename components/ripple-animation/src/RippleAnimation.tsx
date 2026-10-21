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

import type { ColorTokens, TamaguiElement, ViewProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export interface RippleAnimationHandle {
  /**
   * Ripple out from a press event's pointer position. A keyboard press
   * (`detail` 0) or a missing event ripples from the center. Web only: does
   * nothing on native.
   */
  ripple: (event?: object) => void;
}

export interface RippleAnimationProps extends Omit<ViewProps, "children"> {
  /**
   * The ripple's fill color.
   *
   * @defaultValue "primary"
   */
  color?: ColorTokens | (string & {});
}

/** Removes a ripple just after its 600ms `transition` has finished. */
const RIPPLE_LIFETIME_MS = 650;

/**
 * Draws every ripple through a grid of 3px squares with half-strength 1px
 * gaps, for a slight pixelated look. The grid sits on the unscaled layer, not
 * on the scaling ripple, so its squares stay crisp and keep one size while the
 * ripple grows.
 */
const PIXEL_GRID_MASK =
  "conic-gradient(from 90deg at 1px 1px, #000 90deg, rgb(0 0 0 / 0.5) 0)";
const PIXEL_GRID_SIZE = "4px 4px";

interface RippleCircle {
  /** The circle's diameter before it scales: the layer's longer side. */
  size: number;
  /** The circle's top-left corner, placing its center on the press point. */
  x: number;
  y: number;
}

const RippleFrame = styled(View, {
  displayName: "RippleAnimation",
  position: "absolute",
  borderRadius: 1000_000_000,
  // Mounts as a dot on the press point and grows to 2.6x the layer's longer
  // side while it fades out. Naming `enter`, as `InputSeparator` does, keeps
  // `createComponent` off its `avoidReRenders` path for the mount animation.
  transition: {
    duration: "600ms",
    easing: "ease-out",
    enter: "600ms ease-out"
  },
  // Not `enter:0`: the motion driver animates the transform string with the
  // Web Animations API, and a `scale(0)` matrix is singular, so the browser
  // flips it to 2.6 halfway through instead of interpolating.
  scale: "2.6 enter:0.001",
  // Higher than an unmasked ripple's 0.3: the grid's half-strength gaps cover
  // 7/16 of it.
  opacity: "0 enter:0.4"
});

/** The parts of a web element a ripple is measured from. */
interface RippleLayerElement {
  offsetWidth: number;
  offsetHeight: number;
  getBoundingClientRect?: () => {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

/** The parts of a web `click` event a ripple is placed from. */
interface RippleClick {
  clientX?: number;
  clientY?: number;
  detail?: number;
}

/** The ripple circle for a press, in the layer's own coordinates. */
const getRippleCircle = (
  layer: TamaguiElement | null,
  event: object | undefined
): RippleCircle | undefined => {
  const element = layer as unknown as RippleLayerElement | null;
  if (!element?.getBoundingClientRect) {
    return undefined;
  }

  const rect = element.getBoundingClientRect();
  const { offsetWidth: width, offsetHeight: height } = element;
  const { clientX = 0, clientY = 0, detail = 0 } = (event ?? {}) as RippleClick;
  const size = Math.max(width, height);
  // The client rect includes any transform on an ancestor (such as a pressed
  // button's `scale`), so the pointer offset is mapped back to the
  // untransformed layer.
  const pointer = detail > 0;
  const centerX = pointer
    ? ((clientX - rect.left) * width) / rect.width
    : width / 2;
  const centerY = pointer
    ? ((clientY - rect.top) * height) / rect.height
    : height / 2;

  return { size, x: centerX - size / 2, y: centerY - size / 2 };
};

/**
 * A layer that fills its positioned parent and draws a pixelated press
 * ripple when `ripple(event)` is called on its ref. Each ripple removes itself
 * once its animation ends. The parent clips the ripples to its shape with
 * `overflow: hidden`.
 */
export const RippleAnimation = forwardRef<
  RippleAnimationHandle,
  RippleAnimationProps
>(({ color = "primary", ...props }, forwardedRef) => {
  const layerRef = useRef<TamaguiElement>(null);
  const nextIdRef = useRef(0);
  const [ripples, setRipples] = useState<(RippleCircle & { id: number })[]>([]);

  useImperativeHandle(
    forwardedRef,
    () => ({
      ripple: event => {
        const circle = getRippleCircle(layerRef.current, event);
        if (!circle) {
          return;
        }

        const id = nextIdRef.current++;
        setRipples(prev => [...prev, { ...circle, id }]);
        setTimeout(
          () => setRipples(prev => prev.filter(ripple => ripple.id !== id)),
          RIPPLE_LIFETIME_MS
        );
      }
    }),
    []
  );

  return (
    <View
      aria-hidden={true}
      position="absolute"
      inset={0}
      pointerEvents="none"
      maskImage={PIXEL_GRID_MASK}
      maskSize={PIXEL_GRID_SIZE}
      {...props}
      ref={layerRef}>
      {ripples.map(({ id, size, x, y }) => (
        <RippleFrame
          key={id}
          width={size}
          height={size}
          left={x}
          top={y}
          backgroundColor={color}
        />
      ))}
    </View>
  );
});

RippleAnimation.displayName = "RippleAnimation";
