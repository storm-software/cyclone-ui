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
}

/** A placeholder that stands in for content while it loads. */
export const Skeleton = forwardRef<TailwindViewElement, SkeletonProps>(
  ({ animation = "wave", ...props }, forwardedRef) => (
    <SkeletonFrame aria-hidden={true} {...props} ref={forwardedRef}>
      {/* ponytail: the wave is CSS-only, so native renders a static placeholder. */}
      {animation === "wave" && process.env.TAMAGUI_TARGET === "web" && (
        <>
          <style>
            {`
      .cyclone-skeleton-wave {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          oklch(from var(--hairline) calc(l + 0.08) c h),
          transparent
        );
        transform: translateX(-100%);
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
      }
      `}
          </style>
          <div className="cyclone-skeleton-wave" />
        </>
      )}
    </SkeletonFrame>
  )
);
