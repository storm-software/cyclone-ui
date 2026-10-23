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

import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useEffect, useState, useSyncExternalStore } from "react";

const REDACTION_DELAY = 200;

const reducedMotionMediaQuery = "(prefers-reduced-motion: reduce)";

interface ReducedMotionMediaQuery {
  matches: boolean;
  addEventListener: (type: "change", listener: () => void) => void;
  removeEventListener: (type: "change", listener: () => void) => void;
}

const getBrowserWindow = () =>
  (
    globalThis as typeof globalThis & {
      window?: {
        matchMedia?: (query: string) => ReducedMotionMediaQuery;
      };
    }
  ).window;

const subscribeToReducedMotion = (onStoreChange: () => void) => {
  const mediaQuery = getBrowserWindow()?.matchMedia?.(reducedMotionMediaQuery);

  if (!mediaQuery) {
    return () => {};
  }

  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
};

const getPrefersReducedMotion = () =>
  getBrowserWindow()?.matchMedia?.(reducedMotionMediaQuery).matches ?? false;

const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribeToReducedMotion,
    getPrefersReducedMotion,
    () => false
  );

const RedactedAnimationFrame = styled(View, {
  displayName: "RedactedAnimation",

  position: "relative",
  alignSelf: "flex-start",
  maxWidth: "100%",
  overflow: "hidden"
});

// Offsets are px (tuned on a single heading line) capped by a % of the mask, so the
// stroke keeps the same shape on tall images and shrinks with small text.
const near = (px: number, pct: number) => `min(${px}px, ${pct}%)`;
const far = (px: number, pct: number) => `calc(100% - ${near(px, pct)})`;

const markerStroke = `polygon(${(
  [
    [0, near(6, 16)],
    [near(10, 4), near(2, 5)],
    ["8%", near(1, 4)],
    ["18%", near(1.6, 4)],
    ["30%", near(0.4, 2)],
    ["42%", near(1.4, 4)],
    ["55%", near(0.2, 1)],
    ["67%", near(1.2, 3)],
    ["79%", near(0.4, 2)],
    ["90%", near(1.4, 4)],
    [far(13, 4), near(0.8, 2)],
    ["100%", near(5, 12)],
    [far(6, 2), near(13, 32)],
    ["100%", near(22, 54)],
    [far(10, 3), far(10, 26)],
    ["100%", far(5, 12)],
    [far(16, 5), far(0.4, 1)],
    ["86%", far(1, 3)],
    ["74%", far(0.2, 1)],
    ["61%", far(1.2, 3)],
    ["48%", far(0.2, 1)],
    ["35%", far(1.2, 3)],
    ["22%", far(0.4, 1)],
    ["10%", far(1, 3)],
    [near(16, 5), far(0.4, 1)],
    [near(3, 1), far(6, 15)],
    [near(10, 3), far(15, 38)],
    [0, near(16, 40)]
  ] as const
)
  .map(([x, y]) => `${x} ${y}`)
  .join(", ")})`;

const Redaction = styled(View, {
  displayName: "RedactedAnimationRedaction",
  position: "absolute",
  top: 0,
  // Prevent a composited seam where the translated mask meets the clipped edge.
  right: -1,
  bottom: 0,
  left: -1,
  zIndex: 1,
  backgroundColor: "primary",
  // Wobbly edges and ragged ends so the mask reads as a marker stroke rather than a box (web only).
  clipPath: markerStroke,
  pointerEvents: "none",
  x: 0
});

export type RedactedAnimationDirection = "left" | "right";

export type RedactedAnimationProps = Omit<
  GetProps<typeof RedactedAnimationFrame>,
  "direction"
> & {
  direction?: RedactedAnimationDirection;
  /** Milliseconds to wait before revealing the content. */
  delay?: number;
};

export const RedactedAnimation = createStyledHOC(
  RedactedAnimationFrame,
  (
    {
      children,
      direction = "left",
      delay = REDACTION_DELAY,
      ...props
    }: GetProps<typeof RedactedAnimationFrame> & RedactedAnimationProps,
    forwardedRef
  ) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();
    const isRedactionRevealed = prefersReducedMotion || isRevealed;

    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }

      const timeout = setTimeout(() => setIsRevealed(true), delay);

      return () => clearTimeout(timeout);
    }, [delay, prefersReducedMotion]);

    return (
      <RedactedAnimationFrame ref={forwardedRef} {...props}>
        {children}
        <Redaction
          aria-hidden={true}
          transition={prefersReducedMotion ? undefined : "400ms"}
          x={
            isRedactionRevealed ? (direction === "left" ? "-100%" : "100%") : 0
          }
        />
      </RedactedAnimationFrame>
    );
  },
  { displayName: "RedactedAnimation" }
);
