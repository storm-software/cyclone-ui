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
import { LeftArrow } from "@cyclone-ui/icons";
import { useHover } from "@storm-stack/hooks";
import { useComposedRefs } from "@tamagui/core";
import { XStack } from "@tamagui/stacks";

export type PreviousButtonProps = ButtonProps;

export const PreviousButton = Button.styleable(
  ({ children, ...props }: ButtonProps, forwardedRef) => {
    const [hoverRef, hovering] = useHover();
    const ref = useComposedRefs(forwardedRef, hoverRef);

    return (
      <Button
        ref={ref}
        aria-label="Previous"
        justifyContent="center"
        {...props}>
        <XStack gap="$0.75" alignItems="center">
          <Button.Icon>
            <LeftArrow isComplete={hovering} />
          </Button.Icon>
          <Button.Text>{children || "Previous"}</Button.Text>
        </XStack>
      </Button>
    );
  }
);
