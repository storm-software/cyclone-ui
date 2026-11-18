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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { MoonSimple, SunnyOutline } from "@cyclone-ui/icons";
import type { ColorThemeMode } from "@cyclone-ui/state/theme";
import { useThemeActions, useThemeMode } from "@cyclone-ui/state/theme";
import type { TamaguiElement } from "@tamagui/core";
import { useComposedRefs } from "@tamagui/core";
import { forwardRef, useRef } from "react";
import { flushSync } from "react-dom";

export type ThemeTogglerShape =
  | "circle"
  | "square"
  | "triangle"
  | "diamond"
  | "hexagon"
  | "rectangle"
  | "star";

export interface ThemeTogglerProps extends Omit<ButtonProps, "children"> {
  /**
   * The color mode. Makes the toggler controlled, for example by
   * `useThemeSetting` in Next.js. Otherwise it follows and changes the
   * `@cyclone-ui/state/theme` mode.
   */
  mode?: ColorThemeMode;
  /** Called with the new color mode when the toggler is pressed. */
  onModeChange?: (mode: ColorThemeMode) => void;
  /** The shape that reveals the new mode. */
  shape?: ThemeTogglerShape;
  /** The reveal duration in milliseconds. */
  duration?: number;
  /** Reveal the new mode from the viewport centre instead of the button. */
  fromCenter?: boolean;
}

type PressEvent = Parameters<NonNullable<ButtonProps["onPress"]>>[0];
type Point = [number, number];

// Present while a reveal runs; it also blocks presses until the reveal ends.
const STYLE_ID = "cyclone-ui-theme-toggler";

const prefersReducedMotion = () =>
  globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/**
 * The start and end `clip-path` of the new mode's snapshot, growing from
 * (`x`, `y`) until it covers the viewport.
 */
const getRevealClipPaths = (
  shape: ThemeTogglerShape,
  x: number,
  y: number,
  width: number,
  height: number
): [string, string] => {
  // Percentages of the snapshot box: at fractional display scales, Chrome draws
  // pixel clip-paths on `::view-transition-new(root)` unscaled.
  const at = (px: number, py: number) =>
    `${(px / width) * 100}% ${(py / height) * 100}%`;
  const halfWidth = Math.max(x, width - x);
  const halfHeight = Math.max(y, height - y);
  // The distance to the farthest corner.
  const radius = Math.hypot(halfWidth, halfHeight);

  if (shape === "circle") {
    // A percentage radius resolves against hypot(width, height) / √2.
    const end = (radius / (Math.hypot(width, height) / Math.SQRT2)) * 100;

    return [`circle(0% at ${at(x, y)})`, `circle(${end}% at ${at(x, y)})`];
  }

  const box = (w: number, h: number): Point[] => [
    [x - w, y - h],
    [x + w, y - h],
    [x + w, y + h],
    [x - w, y + h]
  ];
  // A polygon pointing up; `inner` scales every other vertex (the star).
  const regular = (count: number, r: number, inner = 1): Point[] =>
    Array.from({ length: count }, (_, index) => {
      const angle = -Math.PI / 2 + (index * 2 * Math.PI) / count;
      const length = index % 2 ? r * inner : r;

      return [x + length * Math.cos(angle), y + length * Math.sin(angle)];
    });
  // The diagonal shapes reach past the farthest corner to cover the viewport.
  const star = radius * Math.SQRT2 * 1.03;
  const vertices = (scale: number): Point[] => {
    switch (shape) {
      case "square": {
        const side = scale * Math.max(halfWidth, halfHeight) * 1.05;

        return box(side, side);
      }
      case "rectangle":
        return box(scale * halfWidth, scale * halfHeight);
      case "triangle":
        return regular(3, scale * radius * 2.2);
      case "diamond":
        return regular(4, scale * radius * Math.SQRT2);
      case "star":
        return regular(10, scale * star, 0.42);
      case "hexagon":
        return regular(6, scale * radius * Math.SQRT2);
    }
  };
  const polygon = (scale: number) =>
    `polygon(${vertices(scale)
      .map(([px, py]) => at(px, py))
      .join(", ")})`;

  // The star starts small rather than collapsed to a point.
  return [
    polygon(shape === "star" ? Math.max(0.025, 2 / star) : 0),
    polygon(1)
  ];
};

const revealMode = (
  apply: () => void,
  origin: TamaguiElement | null,
  {
    shape,
    duration,
    fromCenter
  }: Required<Pick<ThemeTogglerProps, "shape" | "duration" | "fromCenter">>
) => {
  // ponytail: web-only (View Transitions API); native switches without motion.
  if (
    typeof document === "undefined" ||
    typeof document.startViewTransition !== "function" ||
    prefersReducedMotion()
  ) {
    apply();
    return;
  }
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  // The snapshots include classic scrollbars, which `visualViewport` excludes.
  const width = window.innerWidth;
  const height = window.innerHeight;
  const rect = fromCenter
    ? undefined
    : (origin as HTMLElement | null)?.getBoundingClientRect();
  const clipPath = getRevealClipPaths(
    shape,
    rect ? rect.left + rect.width / 2 : width / 2,
    rect ? rect.top + rect.height / 2 : height / 2,
    width,
    height
  );

  // Replaces the default cross-fade. The start clip-path stops Firefox
  // painting the whole new mode before the animation below starts.
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `::view-transition-old(root),::view-transition-new(root){animation:none;mix-blend-mode:normal}::view-transition-new(root){clip-path:${clipPath[0]}}`;
  document.head.append(style);

  // The new mode must be in the DOM when the callback returns.
  // eslint-disable-next-line react-dom/no-flush-sync
  const transition = document.startViewTransition(() => flushSync(apply));
  let animation: Animation | undefined;

  transition.ready
    .then(() => {
      animation = document.documentElement.animate(
        { clipPath },
        {
          duration,
          // Easing fights the star's polygon interpolation near the end.
          easing: shape === "star" ? "linear" : "ease-in-out",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)"
        }
      );
    })
    .catch(() => {});
  transition.finished
    .finally(() => {
      animation?.cancel();
      style.remove();
    })
    .catch(() => {});
};

/**
 * A button that switches between the light and dark color modes.
 *
 * @remarks
 * On the web, the new mode is revealed from the button with a View Transition,
 * unless the user prefers reduced motion. Browsers without View Transitions
 * switch at once.
 */
export const ThemeToggler = forwardRef<TamaguiElement, ThemeTogglerProps>(
  (
    {
      mode: modeProp,
      onModeChange,
      shape = "circle",
      duration = 400,
      fromCenter = false,
      onPress,
      ...props
    },
    forwardedRef
  ) => {
    const buttonRef = useRef<TamaguiElement>(null);
    const ref = useComposedRefs(forwardedRef, buttonRef);
    const stateMode = useThemeMode();
    const { changeMode } = useThemeActions();
    const mode = modeProp ?? (stateMode === "light" ? "light" : "dark");

    const handlePress = (event: PressEvent) => {
      onPress?.(event);

      const next = mode === "dark" ? "light" : "dark";
      revealMode(
        () => {
          if (modeProp === undefined) {
            changeMode(next);
          }
          onModeChange?.(next);
        },
        buttonRef.current,
        { shape, duration, fromCenter }
      );
    };

    return (
      <Button
        aria-label="Toggle theme"
        variant="ghost"
        circular={true}
        {...props}
        ref={ref}
        onPress={handlePress}>
        <Button.Icon>
          {mode === "dark" ? (
            <SunnyOutline animated={false} />
          ) : (
            // The crescent's mass sits low and left; shift it up and right
            // in grid units so it looks centred at every size.
            <MoonSimple animated={false} viewBox="-1.1 0.7 24 24" variant="filled" />
          )}
        </Button.Icon>
      </Button>
    );
  }
);
