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

import type { ColorTokens } from "@cyclone-ui/colors";
import { isBoolean } from "@storm-stack/types/type-checks/is-boolean";
import type { FontSizeTokens, GetProps } from "@tamagui/core";
import {
  createStyledContext,
  isWeb,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { Dot } from "@tamagui/lucide-icons";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import { Paragraph } from "@tamagui/text";
import { Text, Theme } from "@tamagui/web";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import { useFieldStore } from "../hooks/use-field-store";
import {
  FieldProvider,
  FieldProviderOptions
} from "../providers/FieldStoreProvider";
import { Validator } from "../types";
import { FieldStatusIcon } from "./FieldStatusIcon";
import { Label, LabelProps } from "./Label";

export const FieldContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  hideIcons: boolean;
}>({
  size: "$4",
  scaleIcon: 1,
  hideIcons: false
});

export const FIELD_NAME = "Field";

const FieldGroupFrame = styled(ThemeableStack, {
  name: FIELD_NAME,

  animation: "$slow",
  context: FieldContext,
  display: "flex",

  variants: {
    unstyled: {
      false: {
        size: "$true",
        fontFamily: "$body",
        color: "$color",
        outlineWidth: 0,
        outlineColor: "transparent",
        outlineStyle: "none",

        ...(isWeb
          ? {
              tabIndex: 0
            }
          : {
              focusable: true
            }),

        // this fixes a flex bug where it overflows container
        minWidth: 0
      }
    },

    orientation: {
      vertical: {
        flexDirection: "column",
        gap: "$1.5"
      },
      horizontal: {
        flexDirection: "row",
        gap: "$0.75"
      }
    },

    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val]
        };
      }
    },

    isDisabled: {
      true: {
        color: "$disabled",
        borderColor: "$disabled",
        placeholderColor: "$disabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled",
          borderColor: "$disabled"
        },

        focusStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        },

        pressStyle: {
          color: "$disabled",
          borderColor: "$disabled",
          outlineStyle: "none",
          outlineColor: "transparent"
        }
      }
    }
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
    size: "$true",
    orientation: "vertical",
    isDisabled: false
  }
});

const FieldGroupInnerImpl = FieldGroupFrame.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();
  const isDisable = store.get.isDisabled();

  // const name = store.get.name();

  // const contextStore = useAtomStore("field", store.get._scope());

  // const { initializeField, uninitializeField } = useFormActions();
  // useIsomorphicLayoutEffect(() => {
  //   initializeField(name, useFieldStore());

  //   () => {
  //     uninitializeField(name);
  //   };
  // }, [name]);

  return (
    <Theme name={store.get.theme()}>
      <FieldGroupFrame
        ref={forwardedRef}
        {...rest}
        isDisabled={isBoolean(isDisable) ? isDisable : undefined}>
        {children}
      </FieldGroupFrame>
    </Theme>
  );
});

export type FieldProps<
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
> = FieldProviderOptions<TFieldValue, TValidator>;

export const FieldGroup = FieldGroupFrame.styleable<FieldProps>(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <FieldProvider {...rest}>
        <FieldGroupInnerImpl ref={forwardedRef}>{children}</FieldGroupInnerImpl>
      </FieldProvider>
    );
  }
);

export const FieldDetails = styled(Text, {
  context: FieldContext,
  animation: "$slow",
  color: "$borderColor",
  marginTop: "$0.5",
  fontStyle: "italic",
  opacity: 1,

  enterStyle: {
    opacity: 0,
    x: 10
  },

  exitStyle: {
    opacity: 0,
    x: 10
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
    },

    isDisabled: {
      true: {
        color: "$disabled"
      }
    }
  } as const,

  defaultVariants: {
    isDisabled: false
  }
});

const FieldDetailsMessage = (props: PropsWithChildren) => {
  const { children } = props;

  const messages = useFieldStore().get.messages();
  if (!messages || !messages.length) {
    return children;
  } else if (messages.length === 1 && messages[0]?.message) {
    return <Paragraph>{messages[0].message}</Paragraph>;
  }

  return (
    <YStack>
      <Paragraph>The following errors must be resolved:</Paragraph>
      {messages
        .filter(message => message.message)
        .map(message => (
          <XStack>
            <Dot />
            <Paragraph>{message.message}</Paragraph>
          </XStack>
        ))}
    </YStack>
  );
};

const FieldDetailsImpl = FieldDetails.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;
  const store = useFieldStore();

  return (
    <FieldDetails
      ref={forwardedRef}
      isDisabled={!!store.get.isDisabled()}
      htmlFor={store.get.name()}
      {...rest}>
      <FieldDetailsMessage>{children}</FieldDetailsMessage>
    </FieldDetails>
  );
});

export const FieldLabel = forwardRef<typeof Label, Omit<LabelProps, "htmlFor">>(
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const store = useFieldStore();

    return (
      <Label
        ref={forwardedRef as ForwardedRef<any>}
        paddingBottom="$0.5"
        {...rest}
        htmlFor={store.get.name()}
        isDisabled={!!store.get.isDisabled()}
        isRequired={!!store.get.isRequired()}
        isFocused={!!store.get.isFocused()}>
        {children}
      </Label>
    );
  }
);

export const FieldFieldStatusIcon = forwardRef<
  typeof FieldStatusIcon,
  GetProps<typeof FieldStatusIcon>
>(props => {
  const store = useFieldStore();
  const isDisabled = store.get.isDisabled();
  const theme = store.get.theme();

  return (
    <FieldStatusIcon
      isDisabled={isDisabled}
      theme={theme}
      size="$3"
      {...props}
    />
  );
});

export const Field = withStaticProperties(FieldGroup, {
  Label: FieldLabel,
  Details: FieldDetailsImpl,
  StatusIcon: FieldStatusIcon
});
