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

import { BodyText } from "@cyclone-ui/body-text";
import { ColorRole } from "@cyclone-ui/colors";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import { ValidationDetails } from "@storm-stack/types/utility-types/validations";
import { styled } from "@tamagui/core";
import { Dot } from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";

const ValidationBodyText = styled(BodyText, {
  animation: "normal",

  enterStyle: {
    opacity: 0,
    y: 10
  },

  exitStyle: {
    opacity: 0,
    y: 10
  }
});

export const ValidationText = ValidationBodyText.styleable<{
  messages?: ValidationDetails[];
  theme?: string;
  disabled?: boolean;
}>(
  (
    { disabled, theme = ColorRole.BASE, messages = [], ...props },
    forwardedRef
  ) => {
    if ((messages.length === 1 && messages[0]?.message) || disabled) {
      const message = messages[0]?.message || "This field is disabled";

      return (
        <ValidationBodyText ref={forwardedRef} {...props} theme={theme}>
          {message}
        </ValidationBodyText>
      );
    } else if (messages.length === 0) {
      return null;
    }

    let heading = "Please review the following details: ";
    if (theme?.includes(ColorRole.ERROR)) {
      heading = "Please review the following errors: ";
    } else if (theme?.includes(ColorRole.WARNING)) {
      heading = "Please review the following warnings: ";
    } else if (theme?.includes(ColorRole.SUCCESS)) {
      heading = "Successfully completed the following: ";
    }

    return (
      <YStack gap="$0.5">
        <ValidationBodyText ref={forwardedRef} {...props} theme={theme}>
          {heading}
        </ValidationBodyText>
        {messages
          .filter(message => message.message)
          .map(message => (
            <XStack key={message.message} gap="$1" alignItems="center">
              <ThemeableIcon theme={theme}>
                <Dot />
              </ThemeableIcon>
              <ValidationBodyText {...props} theme={theme}>
                {message.message}
              </ValidationBodyText>
            </XStack>
          ))}
      </YStack>
    );
  }
);
