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

import type { GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";
import { fullscreenStyle } from "@tamagui/stacks";
import { ScrollView as ScrollViewNative } from "react-native";

export const ScrollView = styled(
  ScrollViewNative,
  {
    name: "ScrollView",
    scrollEnabled: true,

    variants: {
      fullscreen: {
        true: fullscreenStyle
      }
    } as const
  },
  {
    accept: {
      contentContainerStyle: "style"
    } as const
  }
);

export type ScrollView = ScrollViewNative;

export type ScrollViewProps = GetProps<typeof ScrollView>;
