/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import {
  ColorScientificPalette,
  createStylePalettes
} from "@cyclone-ui/colors";
import {
  type GetProps,
  getVariableValue,
  themeable,
  useTheme
} from "@tamagui/core";
import { ColorProp } from "@tamagui/helpers-tamagui";
import {
  type LinearGradientProps,
  LinearGradient
} from "@tamagui/linear-gradient";
import { useMemo } from "react";

type BaseThemeableGradientProps = {
  theme?: string;
  color?: ColorProp;
  variant?: ColorScientificPalette;
} & LinearGradientProps;

export const ThemeableGradient = themeable(
  ({
    color = "$primary",
    variant = ColorScientificPalette.SURROUNDING,
    ...props
  }: BaseThemeableGradientProps) => {
    const theme = useTheme();

    const colors = useMemo(
      () =>
        createStylePalettes(
          getVariableValue(theme[color as any] || color, "color")
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
