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

import { Button, type ButtonProps } from "@cyclone-ui/button";
import { RightArrow, type RightArrowProps } from "@cyclone-ui/vectors";
import { useHover } from "@storm-stack/hooks";
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
          <XStack gap="$0.75" alignItems="center">
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
