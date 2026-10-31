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
import { createStyledHOC, styled, View } from "@tamagui/core";
import { useMemo, useState } from "react";
import type { ColorCompositionsPalette } from "./utilities";
import {
  COLUMNS,
  DEFAULT_PANEL_SIZE,
  resolveColorCompositionsPalette,
  ROWS,
  useColorCompositionsGrid
} from "./utilities";

export {
  paintColorCompositionsPanels,
  swapColorCompositionsPanels
} from "./utilities";
export type { ColorCompositionsPanel } from "./utilities";

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
  palette?: ColorCompositionsPalette;
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
    const palette = useMemo(
      () => resolveColorCompositionsPalette(props.palette),
      [props.palette]
    );
    const grid = useColorCompositionsGrid(layout, panelSize, interval);

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
