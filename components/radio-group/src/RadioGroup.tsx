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
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import {
  formSizeVariants,
  getFormFontScale,
  getFormFontSize,
  getFormSizeScale,
  getSized,
  getSpaced,
  useFieldHasValidationMessage,
  useFormControl,
  type FormControlSize
} from "@cyclone-ui/helpers";
import type { SelectOption } from "@stryke/types/form";
import type { ColorTokens, GetProps } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Label } from "@tamagui/label";
import { RadioGroup as TamaguiRadioGroup } from "@tamagui/radio-group";
import { XStack, YStack } from "@tamagui/stacks";
import type { FocusEvent } from "react";
import { useCallback } from "react";

export interface RadioGroupContextProps {
  name?: string;
  size: FormControlSize;
  color?: ColorTokens | string;
  disabled: boolean;
  required: boolean;
  hasValidationMessage: boolean;
}

export const RadioGroupContext = createStyledContext<
  RadioGroupContextProps,
  "size" | "disabled" | "required" | "hasValidationMessage"
>(
  {
    size: "md",
    disabled: false,
    required: false,
    hasValidationMessage: false
  } as RadioGroupContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["size", "disabled", "hasValidationMessage"]
  }
);

// `name` is a plain (form/DOM) prop in v3, so the primitives use `displayName`
const RadioGroupItem = styled(TamaguiRadioGroup.Item, {
  displayName: "RadioGroupItem",
  context: RadioGroupContext,
  transition: "200ms",
  borderRadius: 100_000,
  cursor: "pointer",
  height: "5xl",
  width: "5xl",
  alignItems: "center",
  justifyContent: "center",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  variants: {
    // `styled.dynamic` re-brands the helper's carrier with this package's
    // `@tamagui/web` symbol type (runtime no-op; helpers resolves another copy).
    size: styled.dynamic<FormControlSize>(
      formSizeVariants(size => ({
        height: getSized("5xl") * getFormSizeScale(size),
        width: getSized("5xl") * getFormSizeScale(size)
      }))
    ),

    disabled: {
      true: {
        borderColor:
          "disabled hover:disabled press:disabled focus:disabled",
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    disabled: false
  }
});

const RadioGroupItemIndicator = styled(TamaguiRadioGroup.Indicator, {
  displayName: "RadioGroupItemValue",
  context: RadioGroupContext,
  transition: "200ms",
  cursor: "pointer",
  borderRadius: 100_000,
  backgroundColor: "accent",
  height: "65%",
  width: "65%",
  scale: "enter:0.4 exit:0.8",
  opacity: "enter:0 exit:0",
  variants: {
    disabled: {
      true: {
        placeholderColor: "disabled",
        backgroundColor:
          "disabled hover:disabled press:disabled focus:disabled",
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false
  }
});

const RadioGroupItemContainerFrame = styled(XStack, {
  displayName: "RadioGroupItem",
  context: RadioGroupContext,
  transition: "200ms",
  cursor: "pointer",
  gap: "3xl",
  boxShadow: "none press:ringOffset focus:ringOffset focus-visible:ringOffset",
  borderRadius: "control",
  borderWidth: 1,
  borderColor: "border",
  paddingHorizontal: "3xl",
  paddingVertical: "2xl",
  alignItems: "center",
  tabIndex: 0,
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants(size => ({
        paddingHorizontal: getSpaced("3xl") * getFormSizeScale(size),
        paddingVertical: getSpaced("2xl") * getFormSizeScale(size),
        gap: getSpaced("3xl") * getFormSizeScale(size)
      }))
    ),

    hasValidationMessage: {
      true: {
        borderColor: "accent hover:active"
      }
    },

    disabled: {
      true: {
        borderColor:
          "disabled hover:disabled press:disabled focus:disabled",
        boxShadow: "none hover:none press:none focus:none",
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false
  }
});

/** Append flat condition clauses to a (possibly absent) call-site value. */
const withClauses = <T,>(base: T, clauses: string): T | string =>
  base == null
    ? clauses
    : typeof base === "string"
      ? `${base} ${clauses}`
      : base;

const RadioGroupItemContainer = createStyledHOC(
  RadioGroupItemContainerFrame,
  (
    {
      children,
      value,
      disabled,
      selected,
      onPress,
      ...props
    }: GetProps<typeof RadioGroupItemContainerFrame> &
      Omit<SelectOption, "name">,
    forwardedRef
  ) => {
    const { size } = RadioGroupContext.useStyledContext();
    const hasValidationMessage = useFieldHasValidationMessage();
    const focusColor = hasValidationMessage ? "active" : "borderActive";

    return (
      <RadioGroupItemContainerFrame
        group={true}
        ref={forwardedRef}
        {...props}
        size={size}
        hasValidationMessage={hasValidationMessage}
        // v2 applied these as separate focus props after `{...props}`, and the
        // later `hasValidationMessage` / `disabled` variants overrode the
        // spread base. v3 call-site values replace the spread prop and outrank
        // variants, so merge the caller's base in only where v2 kept it, and
        // leave the property to the `disabled` variant while disabled.
        boxShadow={
          disabled
            ? undefined
            : withClauses(
                props.boxShadow,
                "focus:ringOffset focus-visible:ringOffset"
              )
        }
        borderColor={
          disabled
            ? undefined
            : withClauses(
                hasValidationMessage ? undefined : props.borderColor,
                `focus:${focusColor} focus-visible:${focusColor}`
              )
        }
        onPress={onPress}
        disabled={disabled}>
        {children}

        <View alignSelf="center" onPress={e => e.stopPropagation()}>
          <RadioGroupItem
            id={String(value)}
            size={size}
            borderColor={`group-hover:${disabled ? "disabled" : "active"}`}
            value={String(value)}
            disabled={disabled}>
            {selected && <RadioGroupItemIndicator />}
          </RadioGroupItem>
        </View>
      </RadioGroupItemContainerFrame>
    );
  },
  { displayName: "RadioGroupItem" }
);

const RadioGroupOptionValue = styled(Label, {
  displayName: "RadioGroupItemValue",
  context: RadioGroupContext,
  render: "label",
  transition: "200ms",
  cursor: "pointer",
  color: "primary",
  fontWeight: "normal",
  // v2 `$true`: every configured font defines a literal `true` line height
  lineHeight: "true",
  wordWrap: "break-word",
  verticalAlign: "middle",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants(size => ({ fontSize: 18 * getFormFontScale(size) }))
    ),
    selected: {
      true: {
        fontWeight: 900
      }
    },

    disabled: {
      true: {
        color:
          "disabled hover:disabled press:disabled focus:disabled",
        backgroundColor: "surfaceElevated",
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    selected: false,
    disabled: false
  }
});

const RadioGroupOptionDetails = styled(BodyText, {
  displayName: "RadioGroupItemDetails",
  context: RadioGroupContext,
  transition: "200ms",
  cursor: "pointer",
  color: "secondary",
  fontSize: "md",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((size, env) => getFormFontSize(size, env, "md"))
    ),
    disabled: {
      true: {
        color:
          "disabled hover:disabled press:disabled focus:disabled",
        backgroundColor: "transparent",
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false
  }
});

/**
 * An item rendered for one of the enclosing form control's `items`.
 */
const RadioGroupOption = ({
  item,
  onChange
}: {
  item: SelectOption;
  onChange?: (value: unknown) => void;
}) => {
  const { value, selected, disabled, name, description } = item;
  const hasValidationMessage = useFieldHasValidationMessage();
  const statusIcon = useFormControl()?.statusIcon;

  const handlePress = useCallback(() => {
    if (!disabled) {
      onChange?.(value);
    }
  }, [disabled, value, onChange]);

  return (
    <RadioGroupItemContainer
      {...item}
      group={"item" as any}
      onPress={handlePress}
      cursor="pointer"
      backgroundColor={
        selected
          ? "tertiary hover:tertiary"
          : "surfaceElevated hover:tertiary"
      }
      borderColor={
        selected ? "active" : hasValidationMessage ? "accent" : "border"
      }
      borderWidth={1}
      borderRadius="control">
      <YStack gap="md" justifyContent="flex-start" flex={1}>
        <RadioGroupOptionValue
          htmlFor={String(value)}
          disabled={disabled}
          selected={selected}
          color="group-hover/item:primary">
          <HeadingSmallText>{name}</HeadingSmallText>
        </RadioGroupOptionValue>
        {description && (
          <RadioGroupOptionDetails
            disabled={disabled}
            display="flex"
            color="group-hover/item:primary">
            {description}
          </RadioGroupOptionDetails>
        )}
      </YStack>

      {disabled && statusIcon}
    </RadioGroupItemContainer>
  );
};

const RadioGroupFrame = styled(TamaguiRadioGroup, {
  displayName: "RadioGroup",
  context: RadioGroupContext,

  transition: "200ms",
  cursor: "pointer",
  flexDirection: "column",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  borderColor: "transparent",
  width: "100%",

  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants(size => ({
        gap: getSpaced("2xl") * getFormSizeScale(size)
      }))
    ),

    disabled: {
      true: {
        cursor: "not-allowed",
        backgroundColor: "transparent"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const RadioGroupImpl = createStyledHOC(
  RadioGroupFrame,
  (
    props: GetProps<typeof RadioGroupFrame> & {
      defaultValue?: string | null;
      size?: FormControlSize;
    },
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), any prop left unset falls back
    // to the control's state, which connects the radio group to the form.
    const formControl = useFormControl();
    const { size: contextSize } = RadioGroupContext.useStyledContext();
    const formOnBlur = formControl?.onBlur;
    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        // Moving focus between the items stays in the field.
        if (event.currentTarget.contains(event.relatedTarget)) {
          return;
        }

        formOnBlur?.();
      },
      [formOnBlur]
    );
    const {
      children,
      name = formControl?.name,
      required,
      disabled = formControl?.disabled,
      value = formControl?.formattedValue,
      defaultValue = formControl?.defaultValue,
      size = formControl?.size ?? contextSize,
      onFocus = formControl?.onFocus,
      onBlur = formOnBlur ? (handleBlur as typeof props.onBlur) : undefined,
      onValueChange = formControl?.onChange,
      ...rest
    } = props;

    return (
      <RadioGroupFrame
        id={name}
        ref={forwardedRef}
        size={size}
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
        onValueChange={onValueChange}
        value={String(value ?? "")}
        defaultValue={String(defaultValue ?? "")}
        required={required}
        disabled={disabled}>
        <YStack
          justifyContent="flex-start"
          gap="2xl"
          width="100%"
          paddingHorizontal="max-sm:5xl"
          paddingVertical="max-sm:6xl">
          {/* Without children, the form control's items are rendered. */}
          {children ??
            formControl?.items?.map((item, i) => (
              <RadioGroupOption
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                item={item}
                onChange={formControl.onChange}
              />
            ))}
        </YStack>
      </RadioGroupFrame>
    );
  },
  { displayName: "RadioGroup" }
);

export const RadioGroup = withStaticProperties(RadioGroupImpl, {
  Item: RadioGroupItemContainer
});
