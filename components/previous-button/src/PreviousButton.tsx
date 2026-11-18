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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import { LeftArrow } from "@cyclone-ui/icons/vectors";
import { useHover } from "@stryke/hooks";
import type { TamaguiComponent, TamaguiElement } from "@tamagui/core";
import { createStyledHOC, useComposedRefs } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";
import type { Ref } from "react";

// Declared here rather than picked from the arrow's props: where a consumer's
// react-native types give those an index signature, `Pick` makes the prop
// required.
export type PreviousButtonProps = ButtonProps & {
  hideText?: boolean;
  /** Animate the arrow shrinking back when the hover ends, instead of snapping. */
  animateShrink?: boolean;
};

export const PreviousButton: TamaguiComponent<
  PreviousButtonProps,
  TamaguiElement
> = createStyledHOC(
  Button,
  (
    {
      children,
      hideText = false,
      animateShrink = false,
      ...props
    }: PreviousButtonProps,
    forwardedRef
  ) => {
    const [hoverRef, hovering] = useHover();
    const ref = useComposedRefs(forwardedRef, hoverRef as Ref<TamaguiElement>);

    return (
      <Button
        ref={ref}
        aria-label="Previous"
        tooltip="Previous"
        justifyContent="center"
        {...props}>
        <XStack gap="2xl" alignItems="center">
          <Button.Icon>
            <LeftArrow
              fitContent
              isComplete={hovering}
              animateShrink={animateShrink}
            />
          </Button.Icon>
          {!hideText && <Button.Text>{children || "Previous"}</Button.Text>}
        </XStack>
      </Button>
    );
  }
);
