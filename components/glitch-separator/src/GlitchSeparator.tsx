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

import type { ColorTokens, GetProps, ThemeTokens } from "@tamagui/core";
import { getVariableValue, useTheme, View } from "@tamagui/core";
import type { ElementRef } from "react";
import {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from "react";
import { Platform } from "react-native";
import { Rect, Svg } from "react-native-svg";

const COLUMNS = 30;
const ROWS = 6;
const DEFAULT_SEED = 27;

const createRandom = (seed: number) => {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
};

type GlitchSeparatorColor = ColorTokens | ThemeTokens | (string & {});

export interface GlitchSeparatorProps extends Omit<
  GetProps<typeof View>,
  "children"
> {
  /** Upper section color. Use transparent to overlay an image or video. */
  topColor?: GlitchSeparatorColor;
  /** Lower section color, used to fill the square grid. */
  bottomColor?: GlitchSeparatorColor;
  /** Web animation mode. Defaults to scroll; native renders a still border. */
  animate?: "never" | "always" | "scroll";
  /** @deprecated Use animate. Ignored when animate is provided. */
  animated?: boolean;
  /** Stable seed for the square pattern, including server rendering. */
  seed?: number;
}

const resolveColor = (
  theme: ReturnType<typeof useTheme>,
  color: GlitchSeparatorColor
) => getVariableValue(theme[color as keyof typeof theme] ?? color, "color");

/** A square-grid transition, flush with the sections above and below it. */
export const GlitchSeparator = View.styleable<GlitchSeparatorProps>(
  (
    {
      topColor = "$surfaceCanvas",
      bottomColor = "$muted",
      animate,
      animated,
      seed = DEFAULT_SEED,
      height,
      onLayout,
      ...props
    },
    forwardedRef
  ) => {
    const theme = useTheme();
    const resolvedBottomColor = resolveColor(theme, bottomColor);
    const frame = useRef<ElementRef<typeof View>>(null);
    useImperativeHandle(forwardedRef, () => frame.current!);
    const mode =
      animate ??
      (animated === undefined ? "scroll" : animated ? "always" : "never");
    const [layout, setLayout] = useState({ width: 1200, height: 240 });
    const [progress, setProgress] = useState(0.5);
    const cellSize = layout.width / COLUMNS;
    const rows = Math.max(1, Math.ceil(layout.height / cellSize));
    const cells = useMemo(() => {
      const random = createRandom(
        Number.isFinite(seed) ? Math.trunc(seed) : DEFAULT_SEED
      );
      return Array.from({ length: rows * COLUMNS }, (_, index) => {
        const row = Math.floor(index / COLUMNS);
        const column = index % COLUMNS;
        return {
          x: column,
          y: row,
          // A ragged front with islands above it and holes below it.
          threshold:
            (rows - 1 - row + random() * ROWS + Math.sin(column * 0.3) * 0.6) /
            (rows + ROWS - 1)
        };
      });
    }, [rows, seed]);

    useEffect(() => {
      setProgress(0.5);
      if (Platform.OS !== "web" || mode === "never") return;

      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let interval: ReturnType<typeof setInterval> | undefined;
      let request = 0;
      const updateScroll = () => {
        request = 0;
        const element = frame.current as HTMLElement | null;
        if (!element) return;
        const box = element.getBoundingClientRect();
        const position = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - box.top) / (window.innerHeight + box.height)
          )
        );
        // Keep both a broken upper edge and a solid lower seam throughout.
        setProgress(0.3 + position * 0.4);
      };
      const onScroll = () => {
        if (!request && !motion.matches)
          request = window.requestAnimationFrame(updateScroll);
      };
      const stop = () => {
        clearInterval(interval);
        window.cancelAnimationFrame(request);
        request = 0;
        window.removeEventListener("scroll", onScroll, true);
        window.removeEventListener("resize", onScroll);
      };
      const start = () => {
        stop();
        setProgress(0.5);
        if (motion.matches) return;
        if (mode === "always") {
          const startTime = performance.now();
          interval = setInterval(() => {
            setProgress(
              0.5 + Math.sin((performance.now() - startTime) / 700) * 0.2
            );
          }, 100);
        } else {
          updateScroll();
          // Capture also catches scroll events from nested scrolling sections.
          window.addEventListener("scroll", onScroll, {
            passive: true,
            capture: true
          });
          window.addEventListener("resize", onScroll, { passive: true });
        }
      };
      start();
      motion.addEventListener("change", start);
      return () => {
        stop();
        motion.removeEventListener("change", start);
      };
    }, [mode]);

    return (
      <View
        ref={frame}
        {...props}
        aria-hidden={true}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        height={height}
        aspectRatio={height === undefined ? COLUMNS / ROWS : undefined}
        onLayout={event => {
          const { width, height: measuredHeight } = event.nativeEvent.layout;
          if (width > 0 && measuredHeight > 0) {
            setLayout(previous =>
              previous.width === width && previous.height === measuredHeight
                ? previous
                : { width, height: measuredHeight }
            );
          }
          onLayout?.(event);
        }}
        overflow="hidden"
        pointerEvents="none"
        position="relative"
        width="100%"
        backgroundColor={topColor}>
        <Svg
          height="100%"
          width="100%"
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          preserveAspectRatio="none">
          {cells.map((cell, index) => (
            <Rect
              key={index}
              x={cell.x * cellSize}
              y={cell.y * cellSize}
              // Overlap adjacent cells to hide fractional-pixel rasterization seams.
              width={cellSize + 1}
              height={cellSize + 1}
              fill={resolvedBottomColor}
              stroke="none"
              opacity={
                cell.y === rows - 1 ||
                cell.threshold < (mode === "never" ? 0.5 : progress)
                  ? 1
                  : 0
              }
            />
          ))}
        </Svg>
      </View>
    );
  },
  { staticConfig: { componentName: "GlitchSeparator" } }
);
