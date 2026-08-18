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

import { styled, View } from "@tamagui/core";

export const VisuallyHidden = styled(View, {
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
        transition: "200ms"
      }
    }
  } as const,

  defaultVariants: {
    visible: false
  }
});

// @tamagui/core checks for this in spacing
(VisuallyHidden as any).isVisuallyHidden = true;
