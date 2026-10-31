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

// The `@tamagui/tailwind` variant of VisuallyHidden.tsx, installed in its
// place by `cyclone-ui init --style tailwind`. Keep the exports in sync.

import type { TransitionProp } from "@tamagui/core";
import type { TailwindViewElement } from "@tamagui/tailwind";
import { styled, View } from "@tamagui/tailwind";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

const VisuallyHiddenFrame = styled(View, {
  variants: {
    preserveDimensions: {
      true: "relative h-auto w-auto"
    },
    visible: {
      true: "pointer-events-auto relative z-0 m-[0px] h-auto w-auto overflow-visible opacity-100",
      false:
        "pointer-events-none absolute z-[-10000] m-[-1px] h-[1px] w-[1px] overflow-hidden opacity-[0.00000001]"
    }
  },
  defaultVariants: {
    visible: false
  }
});

// `@tamagui/tailwind` leaves `transition` out of its props, but its runtime
// animates class changes with it like any Tamagui component.
const fade: { transition: TransitionProp } = { transition: "200ms" };

export interface VisuallyHiddenProps extends ComponentPropsWithoutRef<
  typeof VisuallyHiddenFrame
> {
  /** Fade between hidden and visible. */
  animate?: boolean;
}

export const VisuallyHidden = forwardRef<
  TailwindViewElement,
  VisuallyHiddenProps
>(({ animate, ...props }, forwardedRef) => (
  <VisuallyHiddenFrame {...(animate && fade)} {...props} ref={forwardedRef} />
));

// @tamagui/core checks for this in spacing
(VisuallyHidden as any).isVisuallyHidden = true;
