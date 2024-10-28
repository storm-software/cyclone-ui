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

import { Stack, styled } from "@tamagui/core";

export const VisuallyHidden = styled(Stack, {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  zIndex: -10000,
  overflow: "hidden",
  opacity: 0.00000001,
  pointerEvents: "none",

  variants: {
    preserveDimensions: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto"
      }
    } as const,

    visible: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto",
        margin: 0,
        zIndex: 1,
        overflow: "visible",
        opacity: 1,
        pointerEvents: "auto"
      }
    } as const,

    animate: {
      true: {
        animation: "200ms",
        animateOnly: ["opacity"]
      }
    } as const
  }
});

// @tamagui/core checks for this in spacing
(VisuallyHidden as any)["isVisuallyHidden"] = true;
