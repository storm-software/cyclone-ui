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

import type { ButtonProps } from "@cyclone-ui/button";
import { Button } from "@cyclone-ui/button";
import type { LeftArrowProps } from "@cyclone-ui/vectors";
import { LeftArrow } from "@cyclone-ui/vectors";
import { useHover } from "@stryke/hooks";
import { useComposedRefs } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";

export type PreviousButtonProps = ButtonProps &
  Pick<LeftArrowProps, "animateShrink"> & {
    hideText?: boolean;
  };

export const PreviousButton = Button.styleable<{
  hideText?: boolean;
}>(
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
    const ref = useComposedRefs(forwardedRef, hoverRef);

    return (
      <Button
        ref={ref}
        aria-label="Previous"
        justifyContent="center"
        {...props}>
        <XStack gap="$sm" alignItems="center">
          <Button.Icon>
            <LeftArrow isComplete={hovering} animateShrink={animateShrink} />
          </Button.Icon>
          {!hideText && <Button.Text>{children || "Previous"}</Button.Text>}
        </XStack>
      </Button>
    );
  }
);
