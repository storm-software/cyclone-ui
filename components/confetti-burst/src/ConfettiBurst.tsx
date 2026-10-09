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

import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { View } from "@tamagui/core";
import { forwardRef, useImperativeHandle, useRef } from "react";

export interface ConfettiBurstHandle {
  /** Burst the confetti. Does nothing on native or with reduced motion. */
  burst: () => void;
}

export interface ConfettiBurstProps extends Omit<ViewProps, "children"> {
  /** The base distance, in pixels, that the confetti flies from the centre. */
  spread?: number;
  /** The number of confetti squares in each burst. */
  count?: number;
}

const CONFETTI_SIZE = 5;
const CONFETTI_DURATION = 900;
const CONFETTI_EASING = "cubic-bezier(0.16,1,0.3,1)";

type Keyframe = Record<string, string | number>;

/** The slice of a DOM element used to animate; native views lack `animate`. */
export interface BrowserElement {
  ownerDocument: { createElement: (tag: string) => BrowserElement };
  style: Record<string, string>;
  animate?: (
    keyframes: Keyframe[],
    options: { duration: number; easing: string; fill?: string }
  ) => { onfinish: (() => void) | null };
  appendChild: (child: BrowserElement) => unknown;
  remove: () => void;
}

/** Whether the user asked the platform to minimise motion (web only). */
export const prefersReducedMotion = () =>
  (
    globalThis as typeof globalThis & {
      matchMedia?: (query: string) => { matches: boolean };
    }
  ).matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/** Random number in `[min, max)`. */
const random = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Burst confetti squares out of the centre of `container`. Each square flies
 * along an evenly spaced angle (with a little jitter) and removes itself once
 * its animation finishes.
 */
const burstConfetti = (
  container: BrowserElement,
  spread: number,
  count: number
) => {
  const step = (Math.PI * 2) / count;

  for (let index = 0; index < count; index++) {
    const angle = index * step + random(-step, step) * 0.3;
    const distance = spread * random(0.8, 1.6);
    const piece = container.ownerDocument.createElement("span");

    Object.assign(piece.style, {
      position: "absolute",
      left: `${-CONFETTI_SIZE / 2}px`,
      top: `${-CONFETTI_SIZE / 2}px`,
      width: `${CONFETTI_SIZE}px`,
      height: `${CONFETTI_SIZE}px`,
      borderRadius: "1px",
      backgroundColor: "var(--accent)"
    });
    container.appendChild(piece);

    piece.animate!(
      [
        { transform: "translate(0, 0) rotate(0deg) scale(1)", opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${
            Math.sin(angle) * distance
          }px) rotate(${random(-360, 360)}deg) scale(0.3)`,
          opacity: 0
        }
      ],
      { duration: CONFETTI_DURATION, easing: CONFETTI_EASING, fill: "forwards" }
    ).onfinish = () => piece.remove();
  }
};

/**
 * An invisible anchor centred on its positioned parent that bursts confetti
 * out of that centre when `burst()` is called on its ref.
 */
export const ConfettiBurst = forwardRef<
  ConfettiBurstHandle,
  ConfettiBurstProps
>(({ spread = 24, count = 16, ...props }, forwardedRef) => {
  const containerRef = useRef<TamaguiElement>(null);

  useImperativeHandle(
    forwardedRef,
    () => ({
      burst: () => {
        // ponytail: web-only (Web Animations API); native skips the burst.
        const container =
          containerRef.current as unknown as BrowserElement | null;
        if (container?.animate && !prefersReducedMotion()) {
          burstConfetti(container, spread, count);
        }
      }
    }),
    [count, spread]
  );

  return (
    // Confetti squares are appended here imperatively and remove themselves.
    <View
      aria-hidden={true}
      position="absolute"
      top="50%"
      left="50%"
      width={0}
      height={0}
      pointerEvents="none"
      {...props}
      ref={containerRef}
    />
  );
});

ConfettiBurst.displayName = "ConfettiBurst";
