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
  animateOnly: ["opacity"],

  variants: {
    preserveDimensions: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto"
      }
    },

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
      },
      false: {
        position: "absolute",
        width: 1,
        height: 1,
        margin: -1,
        zIndex: -10000,
        overflow: "hidden",
        opacity: 0.00000001,
        pointerEvents: "none"
      }
    },

    animate: {
      true: {
        animation: "200ms"
      }
    }
  } as const,

  defaultVariants: {
    visible: false
  }
});

// @tamagui/core checks for this in spacing
(VisuallyHidden as any)["isVisuallyHidden"] = true;
