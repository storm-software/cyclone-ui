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
import { Lock } from "@cyclone-ui/icons";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormFontScale,
  getFormFontSize,
  getFormSizeScale,
  getSized,
  getSpaced,
  useFieldHasValidationMessage,
  useFormControl
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
import {
  RadioGroup as TamaguiRadioGroup,
  RadioGroupContext as TamaguiRadioGroupContext
} from "@tamagui/radio-group";
import { XStack, YStack } from "@tamagui/stacks";
import type { FocusEvent } from "react";
import { use, useCallback, useId } from "react";
import type { GestureResponderEvent } from "react-native";

export interface RadioGroupContextProps {
  name?: string;
  size: FormControlSize;
  color?: ColorTokens | string;
  disabled: boolean;
  required: boolean;
}

export const RadioGroupContext = createStyledContext<
  RadioGroupContextProps,
  "size" | "disabled" | "required"
>(
  {
    size: "md",
    disabled: false,
    required: false
  } as RadioGroupContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["size", "disabled"]
  }
);

// `name` is a plain (form/DOM) prop in v3, so the primitives use `displayName`
const RadioGroupItem = styled(TamaguiRadioGroup.Item, {
  displayName: "RadioGroupItem",
  context: RadioGroupContext,
  transition: "200ms",
  borderRadius: 100_000,
  borderWidth: 1,
  backgroundColor: "transparent",
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

// Tamagui only mounts the indicator while its item is checked.
const RadioGroupItemIndicator = styled(TamaguiRadioGroup.Indicator, {
  displayName: "RadioGroupItemIndicator",
  transition: "200ms",
  borderRadius: 100_000,
  backgroundColor: "primary-active",
  height: "55%",
  width: "55%",
  // A transform needs a resting value or motion animates it from scale(0).
  scale: "1 enter:0.4",
  opacity: "1 enter:0"
});

const RadioGroupItemContainerFrame = styled(XStack, {
  displayName: "RadioGroupItem",
  context: RadioGroupContext,
  transition: "200ms",
  cursor: "pointer",
  gap: "3xl",
  boxShadow: "none press:ring-offset focus:ring-offset focus-visible:ring-offset",
  borderRadius: "control",
  borderWidth: 1,
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

    disabled: {
      true: {
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

const RadioGroupItemLabel = styled(Label, {
  displayName: "RadioGroupItemLabel",
  context: RadioGroupContext,
  render: "label",
  transition: "200ms",
  cursor: "pointer",
  // v2 `$true`: every configured font defines a literal `true` line height
  lineHeight: "true",
  wordWrap: "break-word",
  verticalAlign: "middle",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants(size => ({ fontSize: 18 * getFormFontScale(size) }))
    ),
    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false
  }
});

const RadioGroupItemDetails = styled(BodyText, {
  displayName: "RadioGroupItemDetails",
  context: RadioGroupContext,
  transition: "200ms",
  cursor: "pointer",
  fontSize: "md",
  variants: {
    size: styled.dynamic<FormControlSize>(
      formSizeVariants((size, env) => getFormFontSize(size, env, "md"))
    ),
    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false
  }
});

export type RadioGroupItemProps = GetProps<
  typeof RadioGroupItemContainerFrame
> &
  Pick<SelectOption, "value" | "description"> & {
    disabled?: boolean;
  };

/**
 * An option of the radio group: its label (`children`) and optional
 * `description` beside a radio indicator. Pressing anywhere on it selects it,
 * and a disabled item shows a lock in place of the indicator.
 */
const RadioGroupItemContainer = createStyledHOC(
  RadioGroupItemContainerFrame,
  (
    {
      children,
      value,
      description,
      disabled: disabledProp,
      onPress,
      ...props
    }: RadioGroupItemProps,
    forwardedRef
  ) => {
    const { size } = RadioGroupContext.useStyledContext();
    const group = use(TamaguiRadioGroupContext);
    const hasValidationMessage = useFieldHasValidationMessage();
    const id = useId();
    const itemValue = String(value);
    const disabled = Boolean(disabledProp || group.disabled);
    const selected = group.value === itemValue;
    // Another item of the group is selected.
    const inactive = !selected && Boolean(group.value);

    const idleColor = hasValidationMessage ? "primary" : "outline";
    const borderColor = disabled
      ? "primary-disabled"
      : selected
        ? "primary-active"
        : inactive
          ? `${idleColor}Inactive`
          : idleColor;
    const hoverColor = disabled
      ? "primary-disabled"
      : selected
        ? "primary-active"
        : "primary-hovered";
    const focusColor = selected
      ? "primary-active"
      : hasValidationMessage
        ? "primary-active"
        : "outline-active";
    const textColor = (color: "emphasis" | "ink") =>
      disabled
        ? "primary-disabled group-hover/item:primary-disabled"
        : `${inactive ? `${color}Inactive` : color} group-hover/item:${color}`;

    const onChange = group.onChange;
    const handlePress = useCallback(
      (event: GestureResponderEvent) => {
        onPress?.(event);
        if (!disabled && !selected) {
          onChange?.(itemValue);
        }
      },
      [onPress, disabled, selected, onChange, itemValue]
    );

    return (
      <RadioGroupItemContainerFrame
        ref={forwardedRef}
        // Keep every state's value the same shape: v3 can leave a hover
        // stuck when a press removes the element's `hover:` clause.
        backgroundColor={
          disabled
            ? "surface-disabled hover:surface-disabled"
            : selected
              ? "surface-active hover:surface-active"
              : `${inactive ? "surface-inactive" : "surface"} hover:surface-hovered`
        }
        {...props}
        group="item"
        size={size}
        // v3 call-site values replace the spread prop and outrank variants, so
        // merge the caller's base in, and leave the property to the `disabled`
        // variant while disabled.
        boxShadow={
          disabled
            ? undefined
            : withClauses(
                props.boxShadow,
                size === "sm"
                  ? "press:ring-subtle-offset focus:ring-subtle-offset focus-visible:ring-subtle-offset"
                  : "focus:ring-offset focus-visible:ring-offset"
              )
        }
        borderColor={`${borderColor} hover:${hoverColor}${disabled ? "" : ` focus:${focusColor} focus-visible:${focusColor}`}`}
        aria-disabled={disabled || undefined}
        onPress={handlePress}
        disabled={disabled}>
        <YStack gap="md" justifyContent="flex-start" flex={1} minWidth={0}>
          <RadioGroupItemLabel htmlFor={id} disabled={disabled}>
            {/* The heading sets its own color, so the label's can't reach it. */}
            <HeadingSmallText transition="200ms" color={textColor("emphasis")}>
              {children}
            </HeadingSmallText>
          </RadioGroupItemLabel>
          {description && (
            <RadioGroupItemDetails
              disabled={disabled}
              display="flex"
              color={textColor("ink")}>
              {description}
            </RadioGroupItemDetails>
          )}
        </YStack>

        <View alignSelf="center" onPress={e => e.stopPropagation()}>
          <RadioGroupItem
            id={id}
            size={size}
            borderColor={`${borderColor} group-hover/item:${hoverColor}`}
            value={itemValue}
            disabled={disabled}>
            {disabled ? (
              <Lock
                size={getSized("5xl") * getFormSizeScale(size) * 0.6}
                color="primary-disabled"
              />
            ) : (
              <RadioGroupItemIndicator />
            )}
          </RadioGroupItem>
        </View>
      </RadioGroupItemContainerFrame>
    );
  },
  { displayName: "RadioGroupItem" }
);

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
  // Never wider than the container, even with a fixed `width`.
  maxWidth: "100%",

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
        const currentTarget = event.currentTarget as unknown as Node;

        if (
          currentTarget.contains(
            event.relatedTarget as Parameters<typeof currentTarget.contains>[0]
          )
        ) {
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
      onBlur = formOnBlur ? handleBlur : undefined,
      onValueChange = formControl?.onChange,
      ...rest
    } = props;
    const items = formControl?.items;

    return (
      <RadioGroupFrame
        id={name}
        ref={forwardedRef}
        size={size}
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
        // The radios' values are strings, so report the field item's own
        // value (which may be a number or boolean).
        onValueChange={next =>
          onValueChange?.(
            (items?.find(item => String(item.value) === next)?.value ??
              next) as string
          )
        }
        // Stay controlled inside a form control, uncontrolled outside of one.
        value={formControl || value != null ? String(value ?? "") : undefined}
        defaultValue={defaultValue == null ? undefined : String(defaultValue)}
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
            items?.map((item, i) => (
              <RadioGroupItemContainer
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                value={item.value}
                description={item.description}
                disabled={item.disabled}>
                {item.name}
              </RadioGroupItemContainer>
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
