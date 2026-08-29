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

import type { ColorTokens, ThemeTokens } from "@tamagui/core";
import { getVariableValue, useTheme } from "@tamagui/core";
import type { YStackProps } from "@tamagui/stacks";
import { YStack } from "@tamagui/stacks";
import * as React from "react";
import { ActivityIndicator } from "react-native";

export type SpinnerProps = Omit<YStackProps, "children"> & {
  size?: "small" | "large";
  color?: (ColorTokens | ThemeTokens | (string & {})) | null;
};

export const Spinner: React.ForwardRefExoticComponent<
  SpinnerProps & React.RefAttributes<any>
> = YStack.styleable((props: SpinnerProps, ref) => {
  const { size, color: colorProp = "$foreground", ...stackProps } = props;
  const theme = useTheme();
  let color = colorProp as string;
  if (color && color[0] === "$") {
    color = getVariableValue(theme[color]);
  }

  return (
    <YStack ref={ref} {...stackProps}>
      <ActivityIndicator size={size} color={color} />
    </YStack>
  );
}) as any;
