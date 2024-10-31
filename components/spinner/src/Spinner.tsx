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

import type { ColorTokens, TamaguiElement, ThemeTokens } from "@tamagui/core";
import { themeable, useTheme, variableToString } from "@tamagui/core";
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
> = YStack.extractable(
  themeable(
    React.forwardRef<TamaguiElement>((props: SpinnerProps, ref) => {
      const { size, color: colorProp = "$primary", ...stackProps } = props;
      const theme = useTheme();
      let color = colorProp as string;
      if (color && color[0] === "$") {
        color = variableToString(theme[color]);
      }

      return (
        <YStack ref={ref} {...stackProps}>
          <ActivityIndicator size={size} color={color} />
        </YStack>
      );
    }),
    {
      componentName: "Spinner"
    }
  )
) as any;
