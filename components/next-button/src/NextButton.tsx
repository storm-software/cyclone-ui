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
import { ChevronRight } from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";

export type NextButtonProps = ButtonProps;

export const NextButton = Button.styleable(
  ({ children, ...props }: ButtonProps, forwardedRef) => {
    return (
      <Button
        ref={forwardedRef}
        group={"next" as any}
        aria-label="Next"
        justifyContent="center"
        {...props}>
        <XStack gap="$0.5" alignItems="center">
          <Button.Text>{children || "Next"}</Button.Text>
          <Button.Icon>
            <View
              animation="normal"
              x={0}
              $group-next-hover={{
                x: 8
              }}>
              <ChevronRight marginBottom="$0.2" />
            </View>
          </Button.Icon>
        </XStack>
      </Button>
    );
  }
);
