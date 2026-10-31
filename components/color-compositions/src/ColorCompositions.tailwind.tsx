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

// The `@tamagui/tailwind` variant of ColorCompositions.tsx, installed in its
// place by `cyclone-ui init --style tailwind`. Keep the exports in sync.

import type { TransitionProp } from "@tamagui/core";
import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useMemo, useState } from "react";
import type { ColorCompositionsPalette } from "./utilities";
import {
  DEFAULT_PANEL_SIZE,
  resolveColorCompositionsPalette,
  useColorCompositionsGrid
} from "./utilities";

export {
  paintColorCompositionsPanels,
  swapColorCompositionsPanels
} from "./utilities";
export type { ColorCompositionsPanel } from "./utilities";

// The painting's 8 x 7 panels set the aspect ratio. The width is fixed, so a
// height class such as `h-[230px]` takes precedence over the ratio.
const ColorCompositionsFrame = styled(
  View,
  "aspect-[8/7] w-full flex-col overflow-hidden",
  { displayName: "ColorCompositions" }
);

export interface ColorCompositionsProps extends Omit<
  ComponentPropsWithoutRef<typeof ColorCompositionsFrame>,
  "children"
> {
  /** Milliseconds between color changes. `0` holds the panels still. */
  interval?: number;
  /**
   * Target panel width and height in pixels. The component fits as many
   * panels as its dimensions allow, stretching them slightly to fill.
   */
  panelSize?: number;

  /** The color palette to use for the panels. */
  palette?: ColorCompositionsPalette;
}

// `@tamagui/tailwind` leaves `transition` out of its props, but its runtime
// animates class changes with it like any Tamagui component.
const fade: { transition: TransitionProp } = { transition: "500ms" };

/** An animated reproduction of Ellsworth Kelly's "Colors for a Large Wall". */
export const ColorCompositions = forwardRef<
  TailwindViewElement,
  ColorCompositionsProps
>(
  (
    {
      interval = 1000,
      panelSize = DEFAULT_PANEL_SIZE,
      palette: paletteProp,
      onLayout,
      ...props
    },
    forwardedRef
  ) => {
    const [layout, setLayout] = useState({ width: 0, height: 0 });
    const palette = useMemo(
      () => resolveColorCompositionsPalette(paletteProp),
      [paletteProp]
    );
    const grid = useColorCompositionsGrid(layout, panelSize, interval);

    return (
      <ColorCompositionsFrame
        ref={forwardedRef}
        role="img"
        aria-label="Colors for a Large Wall, after Ellsworth Kelly"
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
          <View key={row} className="flex-1 flex-row">
            {grid.panels
              .slice(row * grid.columns, (row + 1) * grid.columns)
              .map((panel, column) => (
                <View
                  key={column}
                  {...fade}
                  // Arbitrary values spell spaces as underscores, e.g. in `rgb(...)`.
                  className={`flex-1 bg-[${palette[panel].replaceAll(" ", "_")}]`}
                />
              ))}
          </View>
        ))}
      </ColorCompositionsFrame>
    );
  }
);
