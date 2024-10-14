import { styled, View } from "@tamagui/core";
import { Label as TamaguiLabel } from "@tamagui/label";
import { Asterisk } from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import type { GetProps } from "@tamagui/web";
import { forwardRef } from "react";

const LABEL_NAME = "Label";

const LabelText = styled(SizableText, {
  name: LABEL_NAME,

  fontFamily: "$label",
  animation: "200ms",
  cursor: "pointer",

  fontSize: "$6",
  fontWeight: "$3",

  variants: {
    // size: {
    //   "...fontSize": (
    //     val: FontSizeTokens,
    //     config: VariantSpreadExtras<TextProps>
    //   ) => {
    //     if (!config.font) {
    //       return;
    //     }

    //     let sizeToken = 1;
    //     let heightToken = 1;
    //     if (typeof val !== "undefined" && val !== null) {
    //       sizeToken = (config.font.size?.[val] as any)?.val;
    //       heightToken = (config.font.lineHeight?.[val] as any)?.val;
    //     }

    //     const fontSize = (sizeToken ?? 1) * 1.25;
    //     const lineHeight = (heightToken ?? 1) * 1;
    //     const fontWeight = config.font.weight?.["$3"];
    //     const letterSpacing = config.font.letterSpacing?.[val];
    //     const textTransform = config.font.transform?.[val];
    //     const fontStyle = config.font.style?.[val];

    //     return {
    //       fontSize,
    //       lineHeight,
    //       fontWeight,
    //       letterSpacing,
    //       textTransform,
    //       fontStyle
    //     };
    //   }
    // },

    isFocused: {
      true: {
        color: "$base12",
        fontWeight: "$5"
      },
      false: {
        color: "$base10"
      }
    },

    isDisabled: {
      true: {
        color: "$disabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    isFocused: false,
    isDisabled: false
  }
});

type LabelExtraProps = {
  isRequired?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  htmlFor: string;
};
export type LabelProps = GetProps<typeof LabelText> & LabelExtraProps;

export const Label = forwardRef<typeof TamaguiLabel, LabelProps>(
  (props, forwardedRef) => {
    const { children, isRequired, isFocused, isDisabled, htmlFor, ...rest } =
      props;

    return (
      <TamaguiLabel ref={forwardedRef} htmlFor={htmlFor}>
        <XStack gap="$1.2">
          <LabelText
            {...rest}
            isFocused={isDisabled ? false : isFocused}
            isDisabled={isDisabled}
            theme="base">
            {children}
          </LabelText>
          {isRequired && (
            <View position="relative">
              <Asterisk
                color="$error8"
                size="$0.75"
                position="absolute"
                top={-2}
              />
            </View>
          )}
        </XStack>
      </TamaguiLabel>
    );
  }
);
