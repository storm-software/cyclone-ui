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
import { themed } from "@tamagui/helpers-icon";
import { memo } from "react";
import { AlertCircle } from "./AlertCircle";

export type InfoCircleProps = IconProps & {
  isComplete?: boolean;
};

const Icon = ({ ...props }: InfoCircleProps) => {
  return <AlertCircle rotateX="180deg" {...props} />;
};

Icon.displayName = "InfoCircle";

export const InfoCircle = memo<InfoCircleProps>(themed(Icon));
