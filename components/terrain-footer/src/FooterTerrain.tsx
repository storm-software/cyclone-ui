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

import type { TamaguiElement } from "@tamagui/core";
import {
  getVariableValue,
  styled,
  useMedia,
  useTheme,
  View
} from "@tamagui/core";
import { useEffect, useRef, useState } from "react";
import { AccessibilityInfo } from "react-native";
import { Path, Svg } from "react-native-svg";

const TerrainFrame = styled(View, {
  displayName: "FooterTerrain",
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  // Below the SVG's 800px minimum width, center it so the ridges stay in view
  // instead of the left half of the mesh.
  alignItems: "center",
  pointerEvents: "none",
  zIndex: "20"
});

// Project a fixed height field once. Shared vertices keep the triangular mesh
// seamless and deterministic across server rendering and hydration.
const columns = 80;
const rows = 36;
const points = Array.from({ length: rows + 1 }, (_, row) => {
  const depth = row / rows;
  const perspective = 0.7 + depth * 0.7;

  return Array.from({ length: columns + 1 }, (_, column) => {
    const x = (column / columns - 0.5) * 2400;
    const ridge =
      155 * Math.exp(-(((x + 600) / 470) ** 2)) +
      190 * Math.exp(-(((x + 100) / 220) ** 2)) +
      105 * Math.exp(-(((x - 420) / 280) ** 2));
    // Fade the ridges toward the front so the mesh runs flat off the bottom
    // edge instead of rising into a second ridge.
    const height =
      ridge * (0.6 + 0.4 * Math.cos(depth * 6)) * (1 - depth ** 2) +
      30 * Math.sin(x / 140 + depth * 8) +
      12 * Math.sin(x / 43 + depth * 13);

    return {
      x: (800 + x * perspective).toFixed(1),
      y: 480 + depth ** 1.5 * 510 - height * perspective,
      phase: x / 240 + depth * 8,
      amplitude: 4 * perspective
    };
  });
});

const createTerrainPath = (time = 0) => {
  const projected = points.map(row =>
    row.map(point => {
      const ripple =
        Math.min(time, 1) *
        point.amplitude *
        Math.sin(point.phase - (time * Math.PI) / 3);

      return `${point.x},${(point.y + ripple).toFixed(1)}`;
    })
  );

  return projected
    .flatMap((row, rowIndex) =>
      row.map((point, columnIndex) => {
        const right = row[columnIndex + 1];
        const below = projected[rowIndex + 1]?.[columnIndex];
        const diagonal = projected[rowIndex + 1]?.[columnIndex + 1];

        return [
          right ? `M${point}L${right}` : "",
          below ? `M${point}L${below}` : "",
          diagonal ? `M${point}L${diagonal}` : ""
        ].join("");
      })
    )
    .join("");
};

let stillPath: string | undefined;
const terrainPath = () => (stillPath ??= createTerrainPath());

export const FooterTerrain = ({ animate = true }: { animate?: boolean }) => {
  const theme = useTheme();
  const frameRef = useRef<TamaguiElement>(null);
  // Small screens get the still mesh: rebuilding ~220 KB of path data 30 times
  // per second costs phones CPU and battery for a barely visible ripple.
  const small = useMedia()["max-md"] ?? false;
  const moving = animate && !small;
  // Drawn after mount and animated only while on screen: the mesh is ~220 KB
  // of path data, too much for every page's HTML or to rebuild off screen.
  const [path, setPath] = useState<string>();

  useEffect(() => {
    let disposed = false;
    let frame = 0;
    let start: number | undefined;
    let lastFrame = 0;
    let visible = false;
    let reduceMotion = true;

    const tick = (now: number) => {
      start ??= now;
      // A slow, decorative ripple only needs 30 updates per second.
      if (now - lastFrame >= 1000 / 30) {
        setPath(createTerrainPath(((now - start) / 1000) * 1.25));
        lastFrame = now;
      }
      frame = requestAnimationFrame(tick);
    };

    const update = () => {
      cancelAnimationFrame(frame);
      start = undefined;
      lastFrame = 0;
      if (disposed || !visible) {
        return;
      }
      if (moving && !reduceMotion) {
        frame = requestAnimationFrame(tick);
      } else {
        setPath(terrainPath());
      }
    };

    const updateMotion = (reduce: boolean) => {
      reduceMotion = reduce;
      update();
    };

    const subscription = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      updateMotion
    );
    void AccessibilityInfo.isReduceMotionEnabled().then(updateMotion, () => {});

    // Native has no IntersectionObserver: always treat the mesh as visible.
    const element = frameRef.current;
    let observer: IntersectionObserver | undefined;
    if (
      typeof IntersectionObserver !== "undefined" &&
      element instanceof Element
    ) {
      observer = new IntersectionObserver(([entry]) => {
        visible = !!entry?.isIntersecting;
        update();
      });
      observer.observe(element);
    } else {
      visible = true;
      update();
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      subscription.remove();
    };
  }, [moving]);

  return (
    <TerrainFrame
      ref={frameRef}
      aria-hidden={true}
      accessibilityElementsHidden={true}
      importantForAccessibility="no-hide-descendants">
      <Svg
        style={{ minWidth: 800 }}
        width="100%"
        height="100%"
        viewBox="0 0 1600 780"
        preserveAspectRatio="none">
        {path && (
          <Path
            d={path}
            fill="none"
            stroke={getVariableValue(theme.primary, "color")}
            strokeWidth={0.7}
            strokeOpacity={0.1}
          />
        )}
      </Svg>
    </TerrainFrame>
  );
};
