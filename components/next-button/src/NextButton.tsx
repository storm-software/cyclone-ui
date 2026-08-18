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
import type { RightArrowProps } from "@cyclone-ui/vectors";
import { RightArrow } from "@cyclone-ui/vectors";
import { useHover } from "@stryke/hooks";
import { useComposedRefs, View } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";

export type NextButtonProps = ButtonProps &
  Pick<RightArrowProps, "animateShrink"> & {
    hideText?: boolean;
  };

export const NextButton = Button.styleable<{
  hideText?: boolean;
}>(
  (
    {
      children,
      hideText = false,
      animateShrink = false,
      ...props
    }: NextButtonProps,
    forwardedRef
  ) => {
    const [hoverRef, hovering] = useHover();
    const ref = useComposedRefs(forwardedRef, hoverRef);

    return (
      <Button ref={ref} aria-label="Next" justifyContent="center" {...props}>
        <View display="unset">
          <XStack gap="$sm" alignItems="center">
            {!hideText && <Button.Text>{children || "Next"}</Button.Text>}
            <Button.Icon>
              <RightArrow isComplete={hovering} animateShrink={animateShrink} />
            </Button.Icon>
          </XStack>
        </View>
      </Button>
    );
  }
);
