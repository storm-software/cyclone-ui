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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { getSized } from "@cyclone-ui/helpers";
import { LabelText } from "@cyclone-ui/label-text";
import { Spinner } from "@cyclone-ui/spinner";
import type { FieldProviderOptions } from "@cyclone-ui/state/form";
import {
  FieldApi,
  FieldProvider,
  useFieldActions
} from "@cyclone-ui/state/form";
import { getIconByTheme } from "@cyclone-ui/themeable-icon";
import { Tooltip } from "@cyclone-ui/tooltip";
import { ValidationText } from "@cyclone-ui/validation-text";
import type { ValidationDetail as ValidationDetails } from "@stryke/types/validations";
import type {
  GetProps,
  SizeTokens,
  TextProps,
  VariantSpreadExtras
} from "@tamagui/core";
import { styled, Theme, View, withStaticProperties } from "@tamagui/core";
import { Label as TamaguiLabel } from "@tamagui/label";
import { Asterisk } from "@tamagui/lucide-icons-2";
import { ThemeableStack, XStack, YStack } from "@tamagui/stacks";
import type { ForwardedRef } from "react";
import { useMemo } from "react";

const FieldGroupFrame = styled(ThemeableStack, {
  name: "Field",

  transition: "200ms",
  cursor: "pointer",

  // this fixes a flex bug where it overflows container
  minWidth: 0,
  display: "flex",
  borderRadius: "$control",

  variants: {
    orientation: {
      vertical: {
        flexDirection: "column",
        gap: "$lg"
      },
      horizontal: {
        flexDirection: "row",
        gap: "$sm"
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

  const fontSize = (sizeToken ?? 1) * 0.6;
  const lineHeight = Number(heightToken ?? 1) * 0.5;
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
  fontFamily: "$caption",

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
            ? "$foregroundDisabled"
            : theme !== "primary" && theme !== "secondary"
              ? "$foreground"
              : "$foregroundSecondary"
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
        <YStack gap="$xl" group={"field" as any} disabled={disabled}>
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

  transition: "200ms",
  color: "$foreground",
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
        color: "$foregroundDisabled",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$foregroundDisabled"
        }
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
            ? "$foregroundDisabled"
            : theme !== "primary" && theme !== "secondary"
              ? "$foreground"
              : "$foregroundSecondary"
        }
        group-field-hover={{
          color: disabled ? "$foregroundDisabled" : "$foregroundHover"
        }}>
        {children}
      </FieldDetails>
    );
  },
  { staticConfig: { componentName: "FieldDetails" } }
);

const FieldLabelText = styled(LabelText, {
  name: "FieldLabel",
  render: "label",

  transition: "200ms",
  cursor: "pointer",
  wordWrap: "normal",
  color: "$foreground",

  variants: {
    disabled: {
      true: {
        color: "$foregroundDisabled",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$foregroundDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const FieldOptionalLabelText = styled(FieldLabelText, {
  name: "FieldLabel",
  render: "label",

  transition: "200ms",
  cursor: "pointer",
  wordWrap: "normal",
  color: "$foregroundCaption",
  size: "$3xl",
  fontWeight: "$light",
  marginLeft: "$xl",

  variants: {
    disabled: {
      true: {
        color: "$foregroundCaptionDisabled",
        cursor: "not-allowed",

        hoverStyle: {
          color: "$foregroundCaptionDisabled"
        }
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
  gap: "$md",
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
            paddingLeft="$lg"
            size={size}
            disabled={disabled}
            theme="primary">
            {children}
          </FieldLabelText>
          {hideRequired !== true && (
            <>
              {required ? (
                <>
                  {hideAsterisk !== true && (
                    <View position="relative" alignSelf="stretch">
                      <Asterisk
                        color="$foregroundRequired"
                        size="$2xl"
                        position="absolute"
                        top={0}
                      />
                    </View>
                  )}
                </>
              ) : (
                <>
                  {hideOptional !== true && (
                    <FieldOptionalLabelText
                      {...props}
                      theme="secondary"
                      disabled={disabled}
                      color={
                        disabled
                          ? "$foregroundCaptionDisabled"
                          : "$foregroundCaption"
                      }
                      group-field-hover={{
                        color: disabled
                          ? "$foregroundCaptionDisabled"
                          : "$foregroundCaptionHover"
                      }}>
                      (Optional)
                    </FieldOptionalLabelText>
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
        theme="primary"
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
    const disabled = field.disabled.get();
    const frameSize =
      size === "$true" || String(size) === "true" ? "$14xl" : size;

    const adjusted = useMemo(
      () => getSized(frameSize, { shift: -2 }),
      [frameSize]
    );

    return (
      <View
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        flexShrink={0}
        width={adjusted}
        minWidth={adjusted}>
        <Button
          ref={forwardedRef}
          variant="ghost"
          circular={true}
          noPadding={true}
          padding="$sm"
          animate={true}
          transition="200ms"
          color={disabled ? "$borderDisabled" : "$border"}
          {...props}
          size={adjusted}>
          <Button.Icon
            size={adjusted}
            $group-field-hover={{
              color: disabled ? "$borderDisabled" : "$borderHover"
            }}>
            {children}
          </Button.Icon>
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
            color="$foreground"
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
      return <Spinner size="$md" theme="$primary" />;
    } else if (
      !theme?.includes("danger") &&
      !theme?.includes("warning") &&
      !theme?.includes("info") &&
      !theme?.includes("discovery") &&
      !theme?.includes("success") &&
      !theme?.includes("positive") &&
      !theme?.includes("negative") &&
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
        {getIconByTheme({
          theme,
          disabled,
          transition: "200ms",
          color: disabled ? "$borderDisabled" : "$border",
          "$group-field-hover": {
            color: disabled ? "$borderDisabled" : "$borderHover"
          }
        })}
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
