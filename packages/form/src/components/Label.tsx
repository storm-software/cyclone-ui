import { ColorRole } from "@cyclone-ui/colors";
import { styled, View } from "@tamagui/core";
import { Label as TamaguiLabel } from "@tamagui/label";
import { Asterisk } from "@tamagui/lucide-icons";
import { XStack } from "@tamagui/stacks";
import { SizableText } from "@tamagui/text";
import type { GetProps } from "@tamagui/web";
import { forwardRef, useMemo } from "react";
import { useFieldStore } from "../hooks/use-field-store";

const LABEL_NAME = "Label";

const LabelText = styled(SizableText, {
  name: LABEL_NAME,

  fontFamily: "$label",
  animation: "100ms",
  cursor: "pointer",

  color: "$base10",
  fontSize: "$6",
  fontWeight: "$3",
  wordWrap: "break-word",

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

    focused: {
      true: {
        color: "$fg",
        fontWeight: "$5"
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        cursor: "not-allowed"
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    focused: false,
    disabled: false
  }
});

const LabelXStack = styled(XStack, {
  name: LABEL_NAME,

  cursor: "pointer",
  gap: "$1.2",
  flex: 1,

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed"
      },
      false: {
        cursor: "pointer"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

export type LabelProps = GetProps<typeof LabelText> & {
  required?: boolean;
  disabled?: boolean;
  focused?: boolean;
  htmlFor: string;
};

export const Label = forwardRef<typeof TamaguiLabel, LabelProps>(
  (props, forwardedRef) => {
    const { children, required, htmlFor, ...rest } = props;

    const store = useFieldStore();
    const fieldDisabled = store.get.disabled();

    const disabled = useMemo(
      () => !!(fieldDisabled || props.disabled),
      [fieldDisabled, props.disabled]
    );
    const focused = useMemo(
      () => !!(disabled ? false : props.focused),
      [disabled, props.focused]
    );

    return (
      <TamaguiLabel ref={forwardedRef} htmlFor={htmlFor}>
        <LabelXStack disabled={disabled}>
          <LabelText
            {...rest}
            focused={focused}
            disabled={disabled}
            theme={ColorRole.BASE}>
            {children}
          </LabelText>
          {required && (
            <View position="relative">
              <Asterisk
                color="$error8"
                size="$0.75"
                position="absolute"
                top={-2}
              />
            </View>
          )}
        </LabelXStack>
      </TamaguiLabel>
    );
  }
);
