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
import { isWeb, styled, useThemeName, View } from "@tamagui/core";
import { useEffect, useRef } from "react";
import {
  topographyColorSrc,
  topographyDarkSrc,
  topographyLightSrc
} from "./images";
import type { Topography } from "./topography";
import { startTopography } from "./topography";

const TopographicBackgroundFrame = styled(View, {
  name: "TopographicBackground",
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none"
});

// Painting under the cursor needs a hovering, precise pointer; touch-first
// devices keep the static image.
const HOVER_POINTER = "(hover: hover) and (pointer: fine)";

const fill = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%"
} as const;

/**
 * - `interactive`: the grey map for the current theme, gently warping, with
 *   colour painted in under the cursor. Touch-first devices get the static
 *   image for the current theme instead.
 * - `dark`, `light`, `color`: the static image only, with no motion or hover.
 */
export type TopographicBackgroundVariant =
  | "interactive"
  | "dark"
  | "light"
  | "color";

export type TopographicBackgroundProps = GetProps<
  typeof TopographicBackgroundFrame
> & {
  /** @defaultValue "interactive" */
  variant?: TopographicBackgroundVariant;
  /**
   * URL of the dark (grey) topography image.
   *
   * @defaultValue topographyDarkSrc
   */
  darkSrc?: string;
  /**
   * URL of the light topography image.
   *
   * @defaultValue topographyLightSrc
   */
  lightSrc?: string;
  /**
   * URL of the same contours in colour.
   *
   * @defaultValue topographyColorSrc
   */
  colorSrc?: string;
};

/**
 * A full-bleed topographic map background. It fills its nearest positioned
 * ancestor and ignores pointer events, so place it behind the content. Web
 * only: it renders an empty frame on native.
 */
export const TopographicBackground = ({
  variant = "interactive",
  darkSrc = topographyDarkSrc,
  lightSrc = topographyLightSrc,
  colorSrc = topographyColorSrc,
  ...props
}: TopographicBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const topographyRef = useRef<Topography>(null);
  const light = useThemeName().startsWith("light");
  const lightRef = useRef(light);
  const interactive = variant === "interactive";

  useEffect(() => {
    // Checked after hydration so the server-rendered (static shell) markup is
    // the same for every device: the static image, under an empty canvas.
    if (
      !interactive ||
      !canvasRef.current ||
      !matchMedia(HOVER_POINTER).matches
    ) {
      return;
    }
    const instance = startTopography(
      canvasRef.current,
      darkSrc,
      colorSrc,
      () => lightRef.current
    );
    topographyRef.current = instance;

    return () => {
      instance.stop();
      topographyRef.current = null;
    };
  }, [interactive, darkSrc, colorSrc]);

  useEffect(() => {
    lightRef.current = light;
    topographyRef.current?.draw();
  }, [light]);

  return (
    <TopographicBackgroundFrame
      aria-hidden={true}
      accessibilityElementsHidden={true}
      importantForAccessibility="no-hide-descendants"
      {...props}>
      {isWeb ? (
        <>
          {/* Shown on its own when static or on touch devices, and under the
              canvas until (or instead of, without WebGL) the renderer takes
              over. Always in the server markup, so it paints from the static
              shell before hydration. */}
          <img
            alt=""
            draggable={false}
            src={
              variant === "color"
                ? colorSrc
                : variant === "light" || (interactive && light)
                  ? lightSrc
                  : darkSrc
            }
            style={{ ...fill, objectFit: "cover" }}
          />
          {interactive ? <canvas ref={canvasRef} style={fill} /> : null}
        </>
      ) : null}
    </TopographicBackgroundFrame>
  );
};
