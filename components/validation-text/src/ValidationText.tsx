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

import type { GetProps } from "@tamagui/core";
import { BodyText } from "@cyclone-ui/body-text";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type { ValidationDetail as ValidationDetails } from "@stryke/types/validations";
import { createStyledHOC, styled, useThemeName } from "@tamagui/core";
import { Dot } from "@tamagui/lucide-icons-2";
import { XStack, YStack } from "@tamagui/stacks";

const ValidationBodyText = styled(BodyText, {
  fontFamily: "caption",
  transition: "400ms",
  opacity: "enter:0 exit:0",
  y: "enter:10px exit:10px"
});

export const ValidationText = createStyledHOC(ValidationBodyText, ({ disabled, theme: themeProp, messages = [], ...props }: GetProps<typeof ValidationBodyText> & {
  messages?: ValidationDetails[];
  theme?: string;
  disabled?: boolean;
}, forwardedRef) => {
  // `createStyledHOC` consumes `theme` and wraps this render in that `Theme`,
  // so read the active theme name rather than re-theming the text: forcing a
  // `base` theme here resolved `accent` against the root theme.
  const themeName = useThemeName();
  const theme = themeProp ?? themeName;

  if ((messages.length === 1 && messages[0]?.message) || disabled) {
    const message =
      (disabled && (!theme || theme.endsWith("base"))) || messages.length === 0
        ? "This field is disabled"
        : messages[0]?.message;

    return (
      <ValidationBodyText ref={forwardedRef} {...props}>
        {message}
      </ValidationBodyText>
    );
  } else if (messages.length === 0) {
    return null;
  }

  let heading = "Please review the following details: ";
  if (theme?.includes("danger")) {
    heading = "Please review the following errors: ";
  } else if (theme?.includes("warning")) {
    heading = "Please review the following warnings: ";
  } else if (theme?.includes("success")) {
    heading = "Successfully completed the following: ";
  }

  return (
    <YStack gap="xs">
      <ValidationBodyText ref={forwardedRef} {...props}>
        {heading}
      </ValidationBodyText>
      {messages
        .filter(message => message.message)
        .map(message => (
          <XStack key={message.message} gap="md" alignItems="center">
            <ThemeableIcon color="accent">
              <Dot />
            </ThemeableIcon>
            <ValidationBodyText {...props}>
              {message.message}
            </ValidationBodyText>
          </XStack>
        ))}
    </YStack>
  );
});
