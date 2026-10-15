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
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useEffect, useMemo, useState } from "react";

/** Panel colors, sampled from Ellsworth Kelly's "Colors for a Large Wall" (1951). */
const ORIGINAL_PALETTE = {
  white: "#ebe9e2",
  black: "#1c1c21",
  umber: "#2e2424",
  forest: "#1f302a",
  teal: "#008b8b",
  plum: "#33223a",
  navy: "#1f2664",
  violet: "#7f5392",
  orange: "#cc531c",
  blue: "#3358a6",
  yellow: "#ead319",
  pink: "#d45566",
  red: "#c41f21",
  leaf: "#86b162",
  green: "#739d53"
} as const;

const VIBRANT_PALETTE = {
  white: "#fbfaf5",
  black: "#0d0d14",
  umber: "#7a2e12",
  forest: "#00703c",
  teal: "#008b8b",
  plum: "#8e1a8f",
  navy: "#1a2bd9",
  violet: "#a63dff",
  orange: "#ff5a00",
  blue: "#0077ff",
  yellow: "#ffe600",
  pink: "#ff2e7e",
  red: "#ff1a1a",
  leaf: "#7cff3a",
  green: "#00c853"
} as const;

export type ColorCompositionsPanel = keyof typeof ORIGINAL_PALETTE;

const COLUMNS = 8;

// prettier-ignore
const PAINTING: ColorCompositionsPanel[] = [
  "umber", "black", "violet", "teal", "black", "orange", "white", "blue",
  "white", "forest", "black", "white", "yellow", "white", "pink", "black",
  "black", "white", "white", "navy", "white", "black", "white", "orange",
  "red", "white", "blue", "violet", "leaf", "black", "plum", "teal",
  "white", "plum", "black", "white", "white", "red", "white", "navy",
  "teal", "white", "violet", "blue", "white", "white", "pink", "black",
  "white", "pink", "green", "white", "black", "violet", "white", "white"
];

const ROWS = PAINTING.length / COLUMNS;

const DEFAULT_PANEL_SIZE = 80;

const prefersReducedMotion = () =>
  (
    globalThis as typeof globalThis & {
      matchMedia?: (query: string) => { matches: boolean };
    }
  ).matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/** Tile the painting across a grid of any size, cropping it when smaller. */
export const paintColorCompositionsPanels = (columns: number, rows: number) =>
  Array.from(
    { length: columns * rows },
    (_, index) =>
      PAINTING[
        (Math.floor(index / columns) % ROWS) * COLUMNS +
          ((index % columns) % COLUMNS)
      ]!
  );

/** Swap two differently colored panels, so every change is visible. */
export const swapColorCompositionsPanels = (
  panels: ColorCompositionsPanel[]
) => {
  if (panels.every(panel => panel === panels[0])) {
    return panels;
  }

  const from = Math.floor(Math.random() * panels.length);
  let to = from;
  while (panels[to] === panels[from]) {
    to = Math.floor(Math.random() * panels.length);
  }

  const next = [...panels];
  [next[from], next[to]] = [next[to]!, next[from]!];

  return next;
};

const ColorCompositionsFrame = styled(View, {
  displayName: "ColorCompositions",

  width: "100%",
  flexDirection: "column",
  overflow: "hidden"
});

export type ColorCompositionsProps = Omit<
  GetProps<typeof ColorCompositionsFrame>,
  "children"
> & {
  /** Milliseconds between color changes. `0` holds the panels still. */
  interval?: number;
  /**
   * Target panel width and height in pixels. The component fits as many
   * panels as its dimensions allow, stretching them slightly to fill.
   */
  panelSize?: number;

  /** The color palette to use for the panels. */
  palette?: typeof ORIGINAL_PALETTE | "original" | "vibrant";
};

/** An animated reproduction of Ellsworth Kelly's "Colors for a Large Wall". */
export const ColorCompositions = createStyledHOC(
  ColorCompositionsFrame,
  (
    {
      interval = 1000,
      panelSize = DEFAULT_PANEL_SIZE,
      height,
      onLayout,
      ...props
    }: GetProps<typeof ColorCompositionsFrame> & ColorCompositionsProps,
    forwardedRef
  ) => {
    const [layout, setLayout] = useState({ width: 0, height: 0 });
    const size = panelSize > 0 ? panelSize : DEFAULT_PANEL_SIZE;
    const columns =
      layout.width > 0 ? Math.max(1, Math.round(layout.width / size)) : COLUMNS;
    const rows =
      layout.height > 0 ? Math.max(1, Math.round(layout.height / size)) : ROWS;

    const palette = useMemo(() => {
      if (typeof props.palette === "object") {
        return props.palette;
      }

      if (props.palette === "vibrant") {
        return VIBRANT_PALETTE;
      }

      return ORIGINAL_PALETTE;
    }, [props.palette]);

    // Start from the painting so server and client markup match.
    const [grid, setGrid] = useState({
      columns: COLUMNS,
      rows: ROWS,
      panels: PAINTING
    });
    if (grid.columns !== columns || grid.rows !== rows) {
      setGrid({
        columns,
        rows,
        panels: paintColorCompositionsPanels(columns, rows)
      });
    }

    useEffect(() => {
      if (!(interval > 0) || prefersReducedMotion()) {
        return;
      }

      const timer = setInterval(
        () =>
          setGrid(previous => ({
            ...previous,
            panels: swapColorCompositionsPanels(previous.panels)
          })),
        interval
      );

      return () => clearInterval(timer);
    }, [interval]);

    return (
      <ColorCompositionsFrame
        ref={forwardedRef}
        role="img"
        aria-label="Colors for a Large Wall, after Ellsworth Kelly"
        height={height}
        aspectRatio={height === undefined ? COLUMNS / ROWS : undefined}
        onLayout={event => {
          const { width, height: measuredHeight } = event.nativeEvent.layout;
          setLayout(previous =>
            previous.width === width && previous.height === measuredHeight
              ? previous
              : { width, height: measuredHeight }
          );
          onLayout?.(event);
        }}
        {...props}>
        {Array.from({ length: grid.rows }, (_, row) => (
          <View key={row} flex={1} flexDirection="row">
            {grid.panels
              .slice(row * grid.columns, (row + 1) * grid.columns)
              .map((panel, column) => (
                <View
                  key={column}
                  flex={1}
                  transition="500ms"
                  backgroundColor={palette[panel]}
                />
              ))}
          </View>
        ))}
      </ColorCompositionsFrame>
    );
  },
  { displayName: "ColorCompositions" }
);
