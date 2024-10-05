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
import {
  FieldProvider,
  FieldProviderOptions,
  useFieldStore,
  Validator
} from "@cyclone-ui/form";
import { Label, LabelProps } from "@cyclone-ui/label";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
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

export const FormFieldContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  hideIcons: boolean;
}>({
  size: "$4",
  scaleIcon: 1,
  hideIcons: false
});

export const FORM_FIELD_NAME = "FormField";

const FormFieldGroup = styled(ThemeableStack, {
  animation: "$slow",
  context: FormFieldContext,

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

    disabled: {
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
    disabled: false
  }
});

const FormFieldGroupInnerImpl = FormFieldGroup.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const store = useFieldStore();
    const theme = store.get.theme();

    return (
      <Theme name={theme}>
        <FormFieldGroup
          ref={forwardedRef}
          {...rest}
          disabled={store.get.disabled()}>
          {children}
        </FormFieldGroup>
      </Theme>
    );
  }
);

export type FormFieldProps<
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
> = FieldProviderOptions<TFieldValue, TValidator>;

const FormFieldGroupImpl = FormFieldGroup.styleable<FormFieldProps>(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <FieldProvider {...rest}>
        <FormFieldGroupInnerImpl ref={forwardedRef}>
          {children}
        </FormFieldGroupInnerImpl>
      </FieldProvider>
    );
  }
);

export const FormFieldDetails = styled(Text, {
  context: FormFieldContext,
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

    disabled: {
      true: {
        color: "$disabled"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const FormFieldDetailsMessage = (props: PropsWithChildren) => {
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

const FormFieldDetailsImpl = FormFieldDetails.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const store = useFieldStore();

    return (
      <FormFieldDetails
        ref={forwardedRef}
        disabled={store.get.disabled()}
        htmlFor={store.get.name()}
        {...rest}>
        <FormFieldDetailsMessage>{children}</FormFieldDetailsMessage>
      </FormFieldDetails>
    );
  }
);

export const FormFieldLabel = forwardRef<
  typeof Label,
  Omit<LabelProps, "htmlFor">
>((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();
  const name = store.get.name();
  const disabled = store.get.disabled();
  const required = store.get.required();
  const focused = store.get.focused();

  return (
    <Label
      ref={forwardedRef as ForwardedRef<any>}
      paddingBottom="$0.5"
      {...rest}
      htmlFor={name}
      disabled={disabled}
      required={required}
      focused={focused}>
      {children}
    </Label>
  );
});

export const FormFieldThemeableIcon = forwardRef<
  typeof ThemeableIcon,
  GetProps<typeof ThemeableIcon>
>((props) => {
  const store = useFieldStore();
  const disabled = store.get.disabled();
  const theme = store.get.theme();

  return (
    <ThemeableIcon disabled={disabled} theme={theme} size="$3" {...props} />
  );
});

export const FormField = withStaticProperties(FormFieldGroupImpl, {
  Label: FormFieldLabel,
  Details: FormFieldDetailsImpl,
  ThemeableIcon: FormFieldThemeableIcon
});
