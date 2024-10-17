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
import { isBoolean } from "@storm-stack/types/type-checks/is-boolean";
import type { ColorTokens, FontSizeTokens, GetProps } from "@tamagui/core";
import {
  createStyledContext,
  isWeb,
  styled,
  withStaticProperties
} from "@tamagui/core";
import { ThemeableStack, YStack } from "@tamagui/stacks";
import { Theme } from "@tamagui/web";
import { ForwardedRef, forwardRef } from "react";
import { useFieldStore } from "../hooks/use-field-store";
import {
  FieldProvider,
  FieldProviderOptions
} from "../providers/FieldStoreProvider";
import { Validator } from "../types";
import { FieldThemeIcon } from "./FieldIcon";
import { Label, LabelProps } from "./Label";
import { ValidationMessage } from "./ValidationMessage";

export const FieldContext = createStyledContext<{
  size: FontSizeTokens;
  scaleIcon: number;
  color?: ColorTokens | string;
  hideIcons: boolean;
}>({
  size: "$1",
  scaleIcon: 1,
  hideIcons: false
});

export const FIELD_NAME = "Field";

const FieldGroupFrame = styled(ThemeableStack, {
  name: FIELD_NAME,

  animation: "slow",
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
      },
      false: {
        cursor: "pointer"
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

const FieldGroupInnerImpl = FieldGroupFrame.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();

  const disabled = store.get.disabled();
  const theme = store.get.theme();
  const messages = store.get.messages();

  return (
    <Theme name={theme}>
      <FieldGroupFrame
        ref={forwardedRef}
        {...rest}
        disabled={isBoolean(disabled) ? disabled : undefined}>
        <YStack gap="$0.5">
          {children}
          <ValidationMessage theme={theme} messages={messages} />
        </YStack>
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

export const FieldDetails = styled(BodyText, {
  context: FieldContext,

  animation: "slow",
  marginTop: "$0.5",

  fontStyle: "italic",
  fontSize: "$sm",
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
        color: "$disabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const FieldDetailsImpl = FieldDetails.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;

  const store = useFieldStore();
  const messages = store.get.messages();
  const disabled = store.get.disabled();
  const name = store.get.name();

  if (messages && messages.length > 0) {
    return null;
  }

  return (
    <FieldDetails
      ref={forwardedRef}
      disabled={!!disabled}
      htmlFor={name}
      {...rest}>
      {children}
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
        pb="$0.5"
        {...rest}
        htmlFor={store.get.name()}
        disabled={!!store.get.disabled()}
        required={!!store.get.required()}
        focused={!!store.get.focused()}>
        {children}
      </Label>
    );
  }
);

export const FieldFieldThemeIcon = forwardRef<
  typeof FieldThemeIcon,
  GetProps<typeof FieldThemeIcon>
>(props => {
  const store = useFieldStore();
  const disabled = store.get.disabled();
  const theme = store.get.theme();

  return (
    <FieldThemeIcon disabled={disabled} theme={theme} size="$3" {...props} />
  );
});

export const Field = withStaticProperties(FieldGroup, {
  Label: FieldLabel,
  Details: FieldDetailsImpl,
  StatusIcon: FieldThemeIcon
});
