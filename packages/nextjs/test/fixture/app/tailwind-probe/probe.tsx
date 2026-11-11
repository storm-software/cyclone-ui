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

"use client";

import { styled, Theme, View } from "@tamagui/core";

// Built like Cyclone components: a styled frame with default padding.
const Frame = styled(View, {
  paddingHorizontal: "2xl",
  borderWidth: 3,
  borderStyle: "solid",
  borderColor: "hairline"
});

// Pairs of Tailwind classes and the Tamagui props they should match.
export function TailwindProbe() {
  return (
    <main>
      <h1>Tailwind probe</h1>
      <Frame id="default-frame" />
      <Frame id="override-frame" className="px-11xl" />
      <div id="tw-primary" className="size-lg bg-primary" />
      <View id="tamagui-primary" width={12} height={12} bg="primary" />
      <View id="tamagui-canvas" width={12} height={12} bg="canvas" />
      <div id="tw-dark" className="size-lg bg-canvas dark:bg-primary" />
      <div id="tw-tokens" className="h-lg max-w-lg p-lg" />
      <Theme name="danger">
        <div id="tw-danger" className="size-lg bg-primary" />
        <View id="tamagui-danger" width={12} height={12} bg="primary" />
      </Theme>
    </main>
  );
}
