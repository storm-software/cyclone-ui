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
import { View } from "@tamagui/core";
import { ChevronLeft } from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";

export type PreviousButtonProps = ButtonProps;

export const PreviousButton = Button.styleable(
  ({ children, ...props }: ButtonProps, forwardedRef) => {
    return (
      <Button
        ref={forwardedRef}
        group={"previous" as any}
        aria-label="Previous"
        justifyContent="center"
        {...props}>
        <XStack gap="$0.5" alignItems="center">
          <Button.Icon>
            <View
              animation="normal"
              x={0}
              $group-previous-hover={{
                x: -8
              }}>
              <ChevronLeft marginBottom="$0.2" />
            </View>
          </Button.Icon>
          <Button.Text>{children || "Previous"}</Button.Text>
        </XStack>
      </Button>
    );
  }
);
