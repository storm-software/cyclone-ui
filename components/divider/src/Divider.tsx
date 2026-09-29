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

import type { ColorTokens, TamaguiElement, ThemeTokens } from "@tamagui/core";
import { View } from "@tamagui/core";
import { createElement, forwardRef } from "react";

export type DividerDirection = "horizontal" | "vertical";
export type DividerSize = "sm" | "md" | "lg";
export type DividerColor = ColorTokens | ThemeTokens | (string & {});

export interface DividerProps {
  /** The direction in which the divider extends. */
  direction?: DividerDirection;
  /** The divider thickness: 1px, 2px, or 3px. */
  size?: DividerSize;
  /** The divider color. Defaults to the theme's hairline color. */
  color?: DividerColor;
}

const dividerThickness = {
  sm: 1,
  md: 2,
  lg: 3
} as const;

/** A themed line that separates adjacent content. */
export const Divider = forwardRef<TamaguiElement, DividerProps>(
  (
    { color = "hairline", direction = "horizontal", size = "md", ...props },
    forwardedRef
  ) => {
    const thickness = dividerThickness[size];
    const horizontal = direction === "horizontal";

    return createElement(View, {
      ...props,
      ref: forwardedRef,
      alignSelf: horizontal ? undefined : "stretch",
      backgroundColor: color,
      flexShrink: 0,
      height: horizontal ? thickness : "100%",
      width: horizontal ? "100%" : thickness
    } as never);
  }
);
