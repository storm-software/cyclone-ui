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

import type { TamaguiElement, ViewProps } from "@tamagui/core";
import { View } from "@tamagui/core";
import { forwardRef } from "react";

export type SkeletonShape = "rectangle" | "circle";
export type SkeletonAnimation = "wave" | "none";
export type SkeletonVariant = "normal" | "pixel";

/** The pixel variant's grid: 3px squares with half-strength 1px gaps. */
const PIXEL_GRID_MASK =
  "conic-gradient(from 90deg at 1px 1px, #000 90deg, rgb(0 0 0 / 0.5) 0)";

/**
 * A 64px tile of the grid's 4px cells at a few random strengths, shifted by
 * whole cells so each square flickers slightly. A fixed seed keeps the tile
 * identical between server and client renders.
 */
const NOISE_CELLS = 16;
const NOISE_LEVELS = [0.6, 0.73, 0.87, 1];
let seed = 1;
const random = () => (seed = (seed * 48271) % 2147483647);
const NOISE_TILE_MASK = (() => {
  const paths = NOISE_LEVELS.map(() => "");
  for (let i = 0; i < NOISE_CELLS ** 2; i++) {
    paths[random() % NOISE_LEVELS.length] +=
      `M${(i % NOISE_CELLS) * 4} ${Math.floor(i / NOISE_CELLS) * 4}h4v4h-4z`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${NOISE_CELLS * 4}" height="${NOISE_CELLS * 4}">${paths
    .map((d, level) => `<path fill-opacity="${NOISE_LEVELS[level]}" d="${d}"/>`)
    .join("")}</svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
})();

/** 8 whole-cell jumps of the noise tile per flicker loop. */
const FLICKER_KEYFRAMES = Array.from({ length: 8 }, (_, step) => {
  const offset = () => (random() % NOISE_CELLS) * 4;

  return `${step * 12.5}% { mask-position: ${offset()}px ${offset()}px, 0 0; }`;
}).join("\n");

// Other view props (e.g. width, height, borderRadius) are forwarded to the placeholder.
export interface SkeletonProps extends Omit<ViewProps, "children"> {
  /** The placeholder shape. Circles are fully rounded. */
  shape?: SkeletonShape;
  /** Sets both width and height, e.g. for circles or squares. */
  size?: ViewProps["width"];
  /** The loading animation. Defaults to a shimmering wave. */
  animation?: SkeletonAnimation;
  /** The wave style: a smooth gradient, or seen through a flickering pixel grid. */
  variant?: SkeletonVariant;
}

/** A placeholder that stands in for content while it loads. */
export const Skeleton = forwardRef<TamaguiElement, SkeletonProps>(
  (
    {
      animation = "wave",
      variant = "pixel",
      shape = "rectangle",
      size,
      ...props
    },
    forwardedRef
  ) => (
    <View
      aria-hidden={true}
      backgroundColor="hairline"
      borderRadius={shape === "circle" ? "full" : "sm"}
      flexShrink={0}
      height={size ?? 16}
      overflow="hidden"
      position="relative"
      width={size ?? "100%"}
      {...props}
      ref={forwardedRef}>
      {/* ponytail: the wave is CSS-only, so native renders a static placeholder. */}
      {animation === "wave" && process.env.TAMAGUI_TARGET === "web" && (
        <>
          <style>
            {`
      .cyclone-skeleton-wave {
        --cyclone-skeleton-shine: oklch(from var(--hairline) calc(l + 0.08) c h);
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          var(--cyclone-skeleton-shine),
          transparent
        );
        transform: translateX(-100%);
      }

      /*
        The pixel variant draws the wave through a grid of 3px squares with
        half-strength 1px gaps, intersected with a noise tile. The mask sits on
        this unmoving layer, so the squares stay put while the wave passes.
      */
      .cyclone-skeleton-pixel {
        position: absolute;
        inset: 0;
        mask-image: ${NOISE_TILE_MASK}, ${PIXEL_GRID_MASK};
        mask-size: ${NOISE_CELLS * 4}px ${NOISE_CELLS * 4}px, 4px 4px;
        mask-composite: intersect;
      }

      .cyclone-skeleton-pixel > .cyclone-skeleton-wave {
        --cyclone-skeleton-shine: oklch(from var(--hairline) calc(l + 0.12) c h);
      }

      @media (prefers-reduced-motion: no-preference) {
        @keyframes cyclone-skeleton-wave {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(100%);
          }
        }

        .cyclone-skeleton-wave {
          animation: cyclone-skeleton-wave 1.2s linear infinite;
        }

        @keyframes cyclone-skeleton-flicker {
          ${FLICKER_KEYFRAMES}
        }

        .cyclone-skeleton-pixel {
          animation: cyclone-skeleton-flicker 0.65s steps(1) infinite;
        }
      }
      `}
          </style>
          {variant === "pixel" ? (
            <div className="cyclone-skeleton-pixel">
              <div className="cyclone-skeleton-wave" />
            </div>
          ) : (
            <div className="cyclone-skeleton-wave" />
          )}
        </>
      )}
    </View>
  )
);
