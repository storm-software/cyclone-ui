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
import { forwardRef } from "react";

export type SkeletonShape = "rectangle" | "circle";
export type SkeletonAnimation = "wave" | "none";

// Other view props (e.g. width, height, borderRadius) are forwarded to the placeholder.
export interface SkeletonProps extends Omit<ViewProps, "children"> {
  /** The placeholder shape. Circles are fully rounded. */
  shape?: SkeletonShape;
  /** Sets both width and height, e.g. for circles or squares. */
  size?: ViewProps["width"];
  /** The loading animation. Defaults to a shimmering wave. */
  animation?: SkeletonAnimation;
}

/** A placeholder that stands in for content while it loads. */
export const Skeleton = forwardRef<TamaguiElement, SkeletonProps>(
  (
    { animation = "wave", shape = "rectangle", size, ...props },
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
    </View>
  )
);
