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

import type { GetProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
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
  name: "RedactedAnimation",

  position: "relative",
  alignSelf: "flex-start",
  maxWidth: "100%",
  overflow: "hidden"
});

const Redaction = styled(View, {
  name: "RedactedAnimationRedaction",

  position: "absolute",
  top: 0,
  // Prevent a composited seam where the translated mask meets the clipped edge.
  right: -1,
  bottom: 0,
  left: -1,
  zIndex: 1,
  backgroundColor: "$foreground",
  pointerEvents: "none",
  x: 0
});

export type RedactedAnimationDirection = "left" | "right";

export type RedactedAnimationProps = Omit<
  GetProps<typeof RedactedAnimationFrame>,
  "direction"
> & {
  direction?: RedactedAnimationDirection;
};

export const RedactedAnimation =
  RedactedAnimationFrame.styleable<RedactedAnimationProps>(
    ({ children, direction = "left", ...props }, forwardedRef) => {
      const [isRevealed, setIsRevealed] = useState(false);
      const prefersReducedMotion = usePrefersReducedMotion();
      const isRedactionRevealed = prefersReducedMotion || isRevealed;

      useEffect(() => {
        if (prefersReducedMotion) {
          return;
        }

        const timeout = setTimeout(() => setIsRevealed(true), REDACTION_DELAY);

        return () => clearTimeout(timeout);
      }, [prefersReducedMotion]);

      return (
        <RedactedAnimationFrame ref={forwardedRef} {...props}>
          {children}
          <Redaction
            aria-hidden={true}
            transition={prefersReducedMotion ? undefined : "400ms"}
            x={
              isRedactionRevealed
                ? direction === "left"
                  ? "-100%"
                  : "100%"
                : 0
            }
          />
        </RedactedAnimationFrame>
      );
    },
    { staticConfig: { componentName: "RedactedAnimation" } }
  );
