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

import { Theme, useTheme } from "@tamagui/core";
import type { IconProps } from "@tamagui/helpers-icon";
import { useCurrentColor } from "@tamagui/helpers-tamagui";
import { memo } from "react";
import type { SvgProps } from "react-native-svg";
import { G, Path, Svg } from "react-native-svg";

export type StormLogoIconProps = IconProps & {
  theme?: string;
};

const ThemedIcon = ({ color: colorProp, ...rest }: IconProps) => {
  const theme = useTheme();
  const explicitColor = useCurrentColor((colorProp ?? "$accent") as any);
  const color = colorProp
    ? explicitColor
    : (theme.accent?.get() ?? theme.color?.get());

  return (
    <Svg
      role="img"
      width="416.492"
      height="492.755"
      fill="none"
      viewBox="0 0 416.492 492.755"
      {...(rest as SvgProps)}>
      <G fill={color} transform="matrix(1.71552 0 0 1.43844 4772.934 1941.009)">
        <Path d="M-2658.68-1006.838c2.557-.102 5.336-3.812 6.09-4.815 16.917-22.504 48.556-66.88 51.886-71.725 2.4-3.493 51.33-76.74 60.417-90.235 1.96-2.911.63-5.998-4.45-5.975-23.298.105-86.894-.225-117.63.045l-.195 164.588c.06 2.394-.061 4.735.255 6.113.283 1.231 1.529 2.087 3.36 2.014z" />
        <Path d="M-2663.027-1349.37c-2.556.102-5.334 3.814-6.087 4.817-16.906 22.51-48.523 66.896-51.85 71.742-2.4 3.494-51.294 76.756-60.375 90.255-1.958 2.91-.628 5.997 4.452 5.972 23.299-.111 86.895.197 117.632-.083l.115-164.588c-.06-2.394.06-4.734-.258-6.112-.283-1.232-1.53-2.087-3.36-2.014z" />
      </G>
    </Svg>
  );
};

const Icon = ({ theme, ...rest }: StormLogoIconProps) => (
  <Theme name={theme}>
    <ThemedIcon {...rest} />
  </Theme>
);

Icon.displayName = "StormLogoIcon";

export const StormLogoIcon = memo<StormLogoIconProps>(Icon);
