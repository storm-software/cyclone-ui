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
import { createStyledHOC, styled } from "@tamagui/core";
import { LinearGradient } from "@tamagui/linear-gradient";
import { YStack } from "@tamagui/stacks";

// `LinearGradient` is not a plain styled view; v3 `styled()` only keeps style
// defaults for it, so the gradient geometry is passed as props at the call site.
const OverlayGradient = styled(LinearGradient, {
  displayName: "OverlayGradient",
  transition: "200ms",
  pointerEvents: "auto",
  opacity: "0.6 enter:0 exit:0",
  backdropFilter: "blur(2px)",
  filter: "blur(2px)",
  position: "absolute",
  inset: 0
});

const OverlayFrame = styled(YStack, {
  displayName: "Overlay",
  transition: "200ms",
  pointerEvents: "auto",
  opacity: "0.6 enter:0 exit:0",
  backdropFilter: "blur(35px)",
  filter: "blur(35px)",
  backgroundColor: "backdrop",
  position: "absolute",
  inset: 0
});

export const Overlay = createStyledHOC(
  OverlayFrame,
  ({ children, ...props }, forwardedRef) => {
    return (
      <OverlayFrame ref={forwardedRef} {...props}>
        <OverlayGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={["primary", "transparent"]}
          locations={[0.0, 1.0]}
        />
        {children}
      </OverlayFrame>
    );
  },
  {
    displayName: "Overlay"
  }
);

export type OverlayProps = GetProps<typeof Overlay>;
