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

// The `@tamagui/tailwind` variant of Skeleton.tsx, installed in its place by
// `cyclone-ui init --style tailwind`. Keep the exports in sync.

import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export type SkeletonShape = "rectangle" | "circle";
export type SkeletonAnimation = "wave" | "none";
export type SkeletonVariant = "normal" | "pixel";

/** The pixel variant's grid: 3px squares with half-strength 1px gaps. */
const PIXEL_GRID_MASK =
  "conic-gradient(from 90deg at 1px 1px, #000 90deg, rgb(0 0 0 / 0.025) 0)";

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

const SkeletonFrame = styled(
  View,
  "relative h-[16px] w-full shrink-0 overflow-hidden bg-hairline",
  {
    displayName: "Skeleton",
    variants: {
      shape: {
        rectangle: "rounded-sm",
        circle: "rounded-full"
      }
    },
    defaultVariants: {
      shape: "rectangle"
    }
  }
);

// Size the placeholder with `className`, e.g. `h-[32px] w-1/2` or `size-[48px]`.
export interface SkeletonProps extends Omit<
  ComponentPropsWithoutRef<typeof SkeletonFrame>,
  "children"
> {
  /** The loading animation. Defaults to a shimmering wave. */
  animation?: SkeletonAnimation;
  /** The wave style: a smooth gradient, or seen through a flickering pixel grid. */
  variant?: SkeletonVariant;
}

/** A placeholder that stands in for content while it loads. */
export const Skeleton = forwardRef<TailwindViewElement, SkeletonProps>(
  ({ animation = "wave", variant = "pixel", ...props }, forwardedRef) => (
    <SkeletonFrame aria-hidden={true} {...props} ref={forwardedRef}>
      {/* ponytail: the wave is CSS-only, so native renders a static placeholder. */}
      {animation === "wave" && process.env.TAMAGUI_TARGET === "web" && (
        <>
          <style>
            {`
      .cyclone-skeleton-wave {
        --cyclone-skeleton-shine: oklch(from var(--hairline) calc(l + 0.08) c h);
        position: absolute;
        inset: 0;
        /* The bare % hints ease the edges so the wave is softer outside its crest. */
        background: linear-gradient(
          90deg,
          transparent,
          30%,
          var(--cyclone-skeleton-shine),
          70%,
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
          /* Sweeps for 1.5s, then rests offscreen for 1s before the next pass. */
          from {
            transform: translateX(-100%);
          }

          60%,
          to {
            transform: translateX(100%);
          }
        }

        .cyclone-skeleton-wave {
          animation: cyclone-skeleton-wave 2.5s linear infinite;
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
    </SkeletonFrame>
  )
);
