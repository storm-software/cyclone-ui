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
import { ThemedIcon } from "@cyclone-ui/themeable-icon";
import { ValidationDetails } from "@storm-stack/types/utility-types/validations";
import { styled } from "@tamagui/core";
import { Dot } from "@tamagui/lucide-icons";
import { XStack, YStack } from "@tamagui/stacks";

const ValidationBodyText = styled(BodyText, {
  animation: "slow",
  marginTop: "$0.5",

  fontStyle: "italic",
  fontSize: "$sm",
  opacity: 1,

  enterStyle: {
    opacity: 0,
    y: 10
  },

  exitStyle: {
    opacity: 0,
    y: 10
  },

  variants: {
    size: {
      "...fontSize": (val: any, { font }: any) => {
        if (!font) {
          return;
        }

        let sizeToken = 1;
        let heightToken = 1;
        if (val !== undefined && val !== null) {
          sizeToken = (font.size?.[val] as any)?.val;
          heightToken = (font.lineHeight?.[val] as any)?.val;
        }

        const fontSize = (sizeToken ?? 1) * 1.05;
        const lineHeight = Number(heightToken ?? 1);
        const fontWeight = font.weight?.["$3"];
        const letterSpacing = font.letterSpacing?.[val];
        const textTransform = font.transform?.[val];
        const fontStyle = font.style?.[val];

        return {
          fontSize,
          lineHeight,
          fontWeight,
          letterSpacing,
          textTransform,
          fontStyle
        };
      }
    }
  } as const
});

export const ValidationText = ValidationBodyText.styleable<{
  messages?: ValidationDetails[];
  theme?: string | null;
  disabled?: boolean;
}>(({ disabled, ...props }, forwardedRef) => {
  const theme = props.theme || ColorRole.BASE;
  const messages = props.messages ?? [];

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
  if (theme.toLowerCase().includes(ColorRole.ERROR)) {
    heading = "Please review the following errors: ";
  } else if (theme.toLowerCase().includes(ColorRole.WARNING)) {
    heading = "Please review the following warnings: ";
  } else if (theme.toLowerCase().includes(ColorRole.SUCCESS)) {
    heading = "Please review the following results: ";
  }

  return (
    <YStack gap="$1">
      <ValidationBodyText ref={forwardedRef} {...props} theme={theme}>
        {heading}
      </ValidationBodyText>
      {messages
        .filter(message => message.message)
        .map(message => (
          <XStack key={message.message} gap="$1" alignItems="center">
            <ThemedIcon theme={theme}>
              <Dot />
            </ThemedIcon>
            <ValidationBodyText {...props} theme={theme}>
              {message.message}
            </ValidationBodyText>
          </XStack>
        ))}
    </YStack>
  );
});
