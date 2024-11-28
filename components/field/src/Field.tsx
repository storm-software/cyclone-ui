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
  FieldProvider,
  FieldProviderOptions,
  useFieldActions,
  useFieldStore,
  Validator
} from "@cyclone-ui/form-state";
import { getFontSizedFromSize, getSized } from "@cyclone-ui/helpers";
import { LabelText } from "@cyclone-ui/label-text";
import { Spinner } from "@cyclone-ui/spinner";
import { getIconByTheme } from "@cyclone-ui/themeable-icon";
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
import { Tooltip } from "@tamagui/tooltip";
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
  marginTop: "$0.5",

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

    const store = useFieldStore();
    const theme = store.get.theme();
    const disabled = store.get.disabled();
    const size = store.get.size();
    const messages = store.get.messages();

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

    const store = useFieldStore();
    const theme = store.get.theme();

    return (
      <Theme name={theme}>
        <FieldGroupFrame
          ref={forwardedRef}
          {...rest}
          disabled={store.get.disabled()}>
          <YStack gap="$0.7">
            {children}
            <FieldValidationTextImpl />
          </YStack>
        </FieldGroupFrame>
      </Theme>
    );
  },
  { staticConfig: { componentName: "Field" } }
);

export type FieldProps<
  TFieldValue = any,
  TValidator extends Validator<TFieldValue> = Validator<TFieldValue>
> = FieldProviderOptions<TFieldValue, TValidator>;

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
  marginTop: "$0.5",

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

    const store = useFieldStore();
    const messages = store.get.messages();
    const disabled = store.get.disabled();
    const theme = store.get.theme();
    const size = store.get.size();

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
  verticalAlign: "middle",
  color: "$color",

  variants: {
    disabled: {
      true: {
        color: "$colorDisabled",
        cursor: "not-allowed"
      }
    },

    size: {
      "...size": getFontSizedFromSize
    }
  } as const,

  defaultVariants: {
    disabled: false,
    size: "$true"
  }
});

const LabelXStack = styled(XStack, {
  name: "FieldLabel",

  cursor: "pointer",
  gap: "$1.2",
  flex: 1,
  alignItems: "center",
  paddingBottom: "$0.25",

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
    const store = useFieldStore();
    const fieldDisabled = store.get.disabled();
    const name = store.get.name();
    const size = store.get.size();

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
    const store = useFieldStore();

    return (
      <FieldLabelTextImpl
        ref={forwardedRef as ForwardedRef<any>}
        {...props}
        theme={ColorThemeName.BASE}
        htmlFor={store.get.name()}
        disabled={store.get.disabled()}
        required={store.get.required()}>
        {children}
      </FieldLabelTextImpl>
    );
  },
  { staticConfig: { componentName: "FieldLabel" } }
);

export type FieldLabelProps = GetProps<typeof FieldLabel>;

const FieldIconButtonImpl = Button.styleable(
  ({ children, ...props }, forwardedRef) => {
    const store = useFieldStore();
    const size = store.get.size() ?? "$true";

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
          <Button.Icon>{children}</Button.Icon>
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
        <Tooltip.Content
          enterStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
          animation="normal"
          backgroundColor="$base2"
          borderWidth={1}
          borderColor="$borderColor">
          <Tooltip.Arrow
            backgroundColor="$base2"
            borderWidth={1}
            borderColor="$borderColor"
          />
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
    const store = useFieldStore();
    const { focus } = useFieldActions();

    const disabled = store.get.disabled();
    const validating = store.get.validating();
    const theme = store.get.theme();
    const messages = store.get.messages();

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
