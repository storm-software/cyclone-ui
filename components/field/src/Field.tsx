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
import { Button } from "@cyclone-ui/button";
import { ColorRole } from "@cyclone-ui/colors";
import {
  FieldProvider,
  FieldProviderOptions,
  useFieldActions,
  useFieldStore,
  Validator
} from "@cyclone-ui/form-state";
import { LabelText } from "@cyclone-ui/label-text";
import { Spinner } from "@cyclone-ui/spinner";
import { ThemeIcon } from "@cyclone-ui/themeable-icon";
import { ValidationText } from "@cyclone-ui/validation-text";
import { isBoolean } from "@storm-stack/types/type-checks/is-boolean";
import { ValidationDetails } from "@storm-stack/types/utility-types/validations";
import type { ColorTokens, FontSizeTokens, GetProps } from "@tamagui/core";
import {
  createStyledContext,
  isWeb,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Label as TamaguiLabel } from "@tamagui/label";
import { Asterisk } from "@tamagui/lucide-icons";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import { Tooltip } from "@tamagui/tooltip";
import { Theme } from "@tamagui/web";
import { ForwardedRef, useMemo } from "react";

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
          <ValidationText theme={theme} messages={messages} />
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
      disabled={Boolean(disabled)}
      htmlFor={name}
      {...rest}>
      {children}
    </FieldDetails>
  );
});

const LABEL_NAME = "Label";

const StyledLabelText = styled(LabelText, {
  name: LABEL_NAME,

  tag: "label",
  animation: "100ms",
  cursor: "pointer",
  color: "$primary",
  fontFamily: "$label",
  fontSize: "$true",
  fontWeight: "$true",
  wordWrap: "break-word",
  verticalAlign: "middle",

  hoverStyle: {
    color: "$colorHover"
  },

  variants: {
    focused: {
      true: {
        color: "$colorFocus"
      }
    },

    disabled: {
      true: {
        color: "$disabled",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$disabled"
        }
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

export const FieldLabelText = StyledLabelText.styleable<{
  required?: boolean;
  disabled?: boolean;
  focused?: boolean;
  htmlFor: string;
}>((props, forwardedRef) => {
  const { children, required, htmlFor, ...rest } = props;

  const store = useFieldStore();
  const fieldDisabled = store.get.disabled();

  const disabled = useMemo(
    () => Boolean(fieldDisabled || props.disabled),
    [fieldDisabled, props.disabled]
  );
  const focused = useMemo(
    () => Boolean(disabled ? false : props.focused),
    [disabled, props.focused]
  );

  return (
    <TamaguiLabel ref={forwardedRef} htmlFor={htmlFor}>
      <LabelXStack disabled={disabled}>
        <StyledLabelText
          {...rest}
          focused={focused}
          disabled={disabled}
          theme={ColorRole.BASE}>
          {children}
        </StyledLabelText>
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
});

export type FieldLabelTextProps = GetProps<typeof FieldLabelText>;

export const FieldLabel = StyledLabelText.styleable((props, forwardedRef) => {
  const { children, ...rest } = props;
  const store = useFieldStore();

  return (
    <FieldLabelText
      ref={forwardedRef as ForwardedRef<any>}
      paddingBottom="$0.5"
      htmlFor={store.get.name()}
      {...rest}
      disabled={Boolean(store.get.disabled())}
      required={Boolean(store.get.required())}
      focused={Boolean(store.get.focused())}>
      {children}
    </FieldLabelText>
  );
});

export type FieldLabelProps = GetProps<typeof FieldLabel>;

const InnerFieldIcon = Button.styleable(
  ({ children, color, ...rest }, forwardedRef) => {
    const store = useFieldStore();

    const disabled = store.get.disabled();
    const theme = store.get.theme();

    return (
      <Button
        ref={forwardedRef}
        variant="ghost"
        circular={true}
        color={
          color ||
          (disabled
            ? "$disabled"
            : theme.toLowerCase().includes(ColorRole.BASE)
              ? "$base9"
              : "$primary")
        }
        padding="$2"
        {...rest}
        disabled={false}>
        <Button.Icon>{children}</Button.Icon>
      </Button>
    );
  }
);

export const FieldIcon = InnerFieldIcon.styleable(
  ({ children, ...rest }, forwardedRef) => {
    const store = useFieldStore();
    if (store.get.disabled()) {
      return null;
    }

    return (
      <InnerFieldIcon ref={forwardedRef} {...rest}>
        {children}
      </InnerFieldIcon>
    );
  }
);

const InnerFieldThemeIcon = InnerFieldIcon.styleable<{
  messages?: ValidationDetails[];
}>(({ children, theme, messages, disabled, ...rest }, forwardedRef) => {
  if ((!messages || messages.length === 0) && !disabled) {
    return (
      <InnerFieldIcon ref={forwardedRef} {...rest}>
        {children}
      </InnerFieldIcon>
    );
  }

  return (
    <Tooltip groupId="field-icon">
      <Tooltip.Content
        enterStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true
            }
          }
        ]}
        backgroundColor="$background">
        <Tooltip.Arrow />
        <ValidationText theme={theme} messages={messages} disabled={disabled} />
      </Tooltip.Content>

      <Tooltip.Trigger>
        <InnerFieldIcon ref={forwardedRef} {...rest}>
          {children}
        </InnerFieldIcon>
      </Tooltip.Trigger>
    </Tooltip>
  );
});

const FieldThemeIcon = InnerFieldThemeIcon.styleable((props, forwardedRef) => {
  const store = useFieldStore();
  const { focus } = useFieldActions();

  const disabled = store.get.disabled();
  const validating = store.get.validating();
  const theme = store.get.theme();
  const messages = store.get.messages();

  if (validating) {
    return <Spinner size="small" theme="$accent" />;
  } else if (
    !theme?.toLowerCase().includes(ColorRole.ERROR) &&
    !theme?.toLowerCase().includes(ColorRole.WARNING) &&
    !theme?.toLowerCase().includes(ColorRole.INFO) &&
    !theme?.toLowerCase().includes(ColorRole.HELP) &&
    !theme?.toLowerCase().includes(ColorRole.SUCCESS) &&
    !disabled
  ) {
    return null;
  }

  return (
    <InnerFieldThemeIcon
      ref={forwardedRef}
      {...props}
      theme={theme}
      disabled={disabled}
      messages={messages}
      onPress={focus}>
      <ThemeIcon theme={theme} disabled={disabled} validating={validating} />
    </InnerFieldThemeIcon>
  );
});

export const Field = withStaticProperties(FieldGroup, {
  Label: FieldLabel,
  Details: FieldDetailsImpl,
  Icon: FieldIcon,
  ThemeIcon: FieldThemeIcon
});
