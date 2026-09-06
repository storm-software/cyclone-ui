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

import type { GetProps } from "@tamagui/core";
import { styled } from "@tamagui/core";
import { fullscreenStyle } from "@tamagui/stacks";
import { ScrollView as ScrollViewNative } from "react-native";

export const ScrollView = styled(
  ScrollViewNative,
  {
    name: "ScrollView",
    scrollEnabled: true,
    // Reserve the native scrollbar gutter even when `overflowY: "auto"`
    // hides its inactive scrollbar. `style` passes this web-only CSS property
    // through React Native Web instead of treating it as a Tamagui style prop.
    style: { scrollbarGutter: "stable" },

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
