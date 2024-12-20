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
import { ColorThemeName } from "@cyclone-ui/colors";
import {
  FieldApi,
  FieldProvider,
  FieldProviderOptions,
  useFieldActions
} from "@cyclone-ui/form-state";
import { getSized } from "@cyclone-ui/helpers";
import { LabelText } from "@cyclone-ui/label-text";
import { Spinner } from "@cyclone-ui/spinner";
import { getIconByTheme } from "@cyclone-ui/themeable-icon";
import { Tooltip } from "@cyclone-ui/tooltip";
import { ValidationText } from "@cyclone-ui/validation-text";
import { ValidationDetails } from "@storm-stack/types/utility-types/validations";
import type {
  GetProps,
  SizeTokens,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/core";
import { styled, Theme, View, withStaticProperties } from "@tamagui/core";
import { Label as TamaguiLabel } from "@tamagui/label";
import { Asterisk } from "@tamagui/lucide-icons";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import { ForwardedRef, useMemo } from "react";

const FieldGroupFrame = styled(ThemeableStack, {
  name: "Field",

  animation: "normal",
  cursor: "pointer",

  // this fixes a flex bug where it overflows container
  minWidth: 0,
  display: "flex",

  variants: {
    orientation: {
      vertical: {
        flexDirection: "column",
        gap: "$2"
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
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    orientation: "vertical",
    disabled: false
  }
});

const getFieldDetailsFontSize = (
  val: SizeTokens,
  config: VariantSpreadExtras<TextProps>
) => {
  if (!config.font) {
    return;
  }

  let sizeToken = 1;
  let heightToken = 1;
  if (val !== undefined && val !== null) {
    sizeToken = (config.font.size?.[val] as any)?.val;
    heightToken = (config.font.lineHeight?.[val] as any)?.val;
  }

  const fontSize = (sizeToken ?? 1) * 0.9;
  const lineHeight = Number(heightToken ?? 1) * 0.85;
  const fontWeight = config.font.weight?.[val];
  const letterSpacing = config.font.letterSpacing?.[val];
  const textTransform = config.font.transform?.[val];
  const fontStyle = config.font.style?.[val];

  return {
    fontSize,
    lineHeight,
    fontWeight,
    letterSpacing,
    textTransform,
    fontStyle
  };
};

const FieldValidationText = styled(ValidationText, {
  name: "FieldDetails",

  fontStyle: "italic",
  fontFamily: "$body",

  variants: {
    size: {
      "...size": getFieldDetailsFontSize
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false
  }
});

const FieldValidationTextImpl = FieldValidationText.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    const field = FieldApi.use();
    const theme = field.theme.get();
    const disabled = field.disabled.get();
    const size = field.size.get();
    const messages = field.messages.get();

    return (
      <FieldValidationText
        ref={forwardedRef}
        {...rest}
        messages={messages}
        size={size}
        color={
          disabled
            ? "$colorDisabled"
            : theme === ColorThemeName.BASE
              ? "$color"
              : "$primary"
        }>
        {children}
      </FieldValidationText>
    );
  },
  { staticConfig: { componentName: "FieldDetails" } }
);

const FieldGroupInnerImpl = FieldGroupFrame.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    const field = FieldApi.use();
    const theme = field.theme.get();
    const disabled = field.disabled.get();

    return (
      <Theme name={theme}>
        <YStack gap="$2">
          <FieldGroupFrame ref={forwardedRef} {...rest} disabled={disabled}>
            {children}
          </FieldGroupFrame>
          <FieldValidationTextImpl />
        </YStack>
      </Theme>
    );
  },
  { staticConfig: { componentName: "Field" } }
);

export type FieldProps<TFieldValue = any> = FieldProviderOptions<TFieldValue>;

const FieldGroup = FieldGroupFrame.styleable<FieldProps>(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    return (
      <FieldProvider {...rest}>
        <FieldGroupInnerImpl ref={forwardedRef}>{children}</FieldGroupInnerImpl>
      </FieldProvider>
    );
  },
  { staticConfig: { componentName: "Field" } }
);

const FieldDetails = styled(BodyText, {
  name: "FieldDetails",

  animation: "normal",
  color: "$color",
  fontStyle: "italic",

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
      "...size": getFieldDetailsFontSize
    },

    disabled: {
      true: {
        color: "$colorDisabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false
  }
});

const FieldDetailsImpl = FieldDetails.styleable(
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    const field = FieldApi.use();
    const messages = field.messages.get();
    const disabled = field.disabled.get();
    const theme = field.theme.get();
    const size = field.size.get();

    if (messages && messages.length > 0) {
      return null;
    }

    return (
      <FieldDetails
        ref={forwardedRef}
        {...rest}
        theme={theme}
        size={size}
        disabled={disabled}
        color={
          disabled
            ? "$colorDisabled"
            : theme === ColorThemeName.BASE
              ? "$color"
              : "$primary"
        }>
        {children}
      </FieldDetails>
    );
  },
  { staticConfig: { componentName: "FieldDetails" } }
);

const FieldLabelText = styled(LabelText, {
  name: "FieldLabel",
  tag: "label",

  animation: "normal",
  cursor: "pointer",
  wordWrap: "normal",
  color: "$color",

  variants: {
    disabled: {
      true: {
        color: "$colorDisabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const LabelXStack = styled(XStack, {
  name: "FieldLabel",

  cursor: "pointer",
  gap: "$1.2",
  flex: 1,
  alignItems: "center",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const FieldLabelTextImpl = FieldLabelText.styleable<{
  required?: boolean;
  disabled?: boolean;
  hideRequired?: boolean;
  hideAsterisk?: boolean;
  hideOptional?: boolean;
}>(
  (
    {
      children,
      hideRequired = false,
      hideAsterisk = false,
      hideOptional = false,
      required,
      ...props
    },
    forwardedRef
  ) => {
    const field = FieldApi.use();
    const fieldDisabled = field.disabled.get();
    const name = field.name.get();
    const size = field.size.get();

    const disabled = useMemo(
      () => Boolean(fieldDisabled || props.disabled),
      [fieldDisabled, props.disabled]
    );

    return (
      <TamaguiLabel ref={forwardedRef} htmlFor={name}>
        <LabelXStack disabled={disabled}>
          <FieldLabelText
            {...props}
            size={size}
            disabled={disabled}
            theme={ColorThemeName.BASE}>
            {children}
          </FieldLabelText>
          {hideRequired !== true && (
            <>
              {required ? (
                <>
                  {hideAsterisk !== true && (
                    <View position="relative" alignSelf="stretch">
                      <Asterisk
                        color="$danger7"
                        size="$0.75"
                        position="absolute"
                        top={-4}
                      />
                    </View>
                  )}
                </>
              ) : (
                <>
                  {hideOptional !== true && (
                    <FieldLabelText
                      {...props}
                      theme={ColorThemeName.BASE}
                      disabled={disabled}
                      color={disabled ? "$colorDisabled" : "$secondary"}
                      size="$5"
                      fontWeight="$4"
                      marginLeft="$2">
                      (Optional)
                    </FieldLabelText>
                  )}
                </>
              )}
            </>
          )}
        </LabelXStack>
      </TamaguiLabel>
    );
  },
  { staticConfig: { componentName: "FieldLabel" } }
);

export type FieldLabelTextProps = GetProps<typeof FieldLabelText>;

const FieldLabel = FieldLabelText.styleable<{
  hideRequired?: boolean;
  hideAsterisk?: boolean;
  hideOptional?: boolean;
}>(
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const name = field.name.get();
    const disabled = field.disabled.get();
    const required = field.required.get();

    return (
      <FieldLabelTextImpl
        ref={forwardedRef as ForwardedRef<any>}
        {...props}
        theme={ColorThemeName.BASE}
        htmlFor={name}
        disabled={disabled}
        required={required}>
        {children}
      </FieldLabelTextImpl>
    );
  },
  { staticConfig: { componentName: "FieldLabel" } }
);

export type FieldLabelProps = GetProps<typeof FieldLabel>;

const FieldIconButtonImpl = Button.styleable(
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const size = field.size.get() ?? "$true";

    const adjusted = useMemo(() => getSized(size, { shift: -2 }), [size]);

    return (
      <View alignItems="center" flexDirection="row" flexBasis={adjusted}>
        <Button
          ref={forwardedRef}
          variant="ghost"
          circular={true}
          padding="$1.5"
          {...props}
          size={adjusted}>
          <Button.Icon size={adjusted}>{children}</Button.Icon>
        </Button>
      </View>
    );
  },
  { staticConfig: { componentName: "FieldIcon" } }
);

const InnerFieldThemeIcon = FieldIconButtonImpl.styleable<{
  messages?: ValidationDetails[];
}>(
  ({ children, messages, disabled, ...rest }, forwardedRef) => {
    if ((!messages || messages.length === 0) && !disabled) {
      return (
        <FieldIconButtonImpl ref={forwardedRef} {...rest}>
          {children}
        </FieldIconButtonImpl>
      );
    }

    return (
      <Tooltip groupId="field-icon">
        <Tooltip.Content>
          <ValidationText
            color="$primary"
            messages={messages}
            disabled={disabled}
          />
        </Tooltip.Content>

        <Tooltip.Trigger asChild={true}>
          <FieldIconButtonImpl ref={forwardedRef} {...rest}>
            {children}
          </FieldIconButtonImpl>
        </Tooltip.Trigger>
      </Tooltip>
    );
  },
  { staticConfig: { componentName: "FieldIcon" } }
);

const FieldThemeIcon = InnerFieldThemeIcon.styleable(
  (props, forwardedRef) => {
    const { focus } = useFieldActions();

    const field = FieldApi.use();
    const disabled = field.disabled.get();
    const validating = field.validating.get();
    const theme = field.theme.get();
    const messages = field.messages.get();

    if (validating) {
      return <Spinner size="small" theme="$accent" />;
    } else if (
      !theme?.includes(ColorThemeName.DANGER) &&
      !theme?.includes(ColorThemeName.WARNING) &&
      !theme?.includes(ColorThemeName.INFO) &&
      !theme?.includes(ColorThemeName.HELP) &&
      !theme?.includes(ColorThemeName.SUCCESS) &&
      !disabled
    ) {
      return null;
    }

    return (
      <InnerFieldThemeIcon
        ref={forwardedRef}
        {...props}
        disabled={disabled}
        messages={messages}
        onPress={focus}>
        {getIconByTheme({ theme, disabled })}
      </InnerFieldThemeIcon>
    );
  },
  { staticConfig: { componentName: "FieldIcon" } }
);

export const Field = withStaticProperties(FieldGroup, {
  Label: FieldLabel,
  Details: FieldDetailsImpl,
  Icon: FieldIconButtonImpl,
  ThemeIcon: FieldThemeIcon
});
