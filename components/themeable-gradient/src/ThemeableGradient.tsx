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

import { createStylePalettes } from "@cyclone-ui/helpers";
import type { GetProps } from "@tamagui/core";
import { getVariableValue, themeable, useTheme } from "@tamagui/core";
import type { ColorProp } from "@tamagui/helpers-tamagui";
import type { LinearGradientProps } from "@tamagui/linear-gradient";
import { LinearGradient } from "@tamagui/linear-gradient";
import { useMemo } from "react";

type BaseThemeableGradientProps = {
  theme?: string;
  color?: ColorProp;
  variant?: ColorScientificPalette;
} & LinearGradientProps;

export const ThemeableGradient = themeable(
  ({
    color = "$foregroundPrimary",
    variant = ColorScientificPalette.SURROUNDING,
    ...props
  }: BaseThemeableGradientProps) => {
    const theme = useTheme();

    const colors = useMemo(
      () =>
        createStylePalettes(
          getVariableValue(theme[color as any] ?? color, "color")
        ),
      [theme, color]
    );

    return (
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        {...props}
        colors={colors[variant]}
      />
    );
  }
);

export type ThemeableGradientProps = GetProps<typeof ThemeableGradient>;
