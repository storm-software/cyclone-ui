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

import type { IconProps } from "@tamagui/helpers-icon";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { AlertCircle } from "./AlertCircle";
import type { ThemedIconBodyProps } from "./themed-icon";
import { themedIcon } from "./themed-icon";

export type InfoCircleProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({ style, ...props }: ThemedIconBodyProps<InfoCircleProps>) => {
  // Tamagui v3's `themed` no longer resolves style props such as `rotateX`
  // into the SVG `style`, so apply the flip as a transform directly.
  return (
    <AlertCircle
      style={StyleSheet.flatten([
        { transform: [{ rotateX: "180deg" }] },
        style
      ])}
      {...props}
    />
  );
};

Icon.displayName = "InfoCircle";

export const InfoCircle = memo<InfoCircleProps>(themedIcon(Icon));
