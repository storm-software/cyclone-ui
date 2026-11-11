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

"use client";

import { BodyText } from "@cyclone-ui/body-text";
import { HeadingSmallText } from "@cyclone-ui/heading-text";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormControlAriaProps,
  getFormFontScale,
  getFormFontSize,
  getFormSizeScale,
  getSized,
  getSpaced,
  useFieldHasValidationMessage,
  useFormControl
} from "@cyclone-ui/helpers";
import { Confirm, Lock } from "@cyclone-ui/icons";
import type { SelectOption } from "@stryke/types/form";
import type { ColorTokens, GetProps } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  styled,
  Text,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Label } from "@tamagui/label";
import {
  RadioGroup as TamaguiRadioGroup,
  RadioGroupContext as TamaguiRadioGroupContext
} from "@tamagui/radio-group";
import { XStack, YStack } from "@tamagui/stacks";
import type { ContextType, FocusEvent, ReactNode } from "react";
import { createContext, Suspense, use, useCallback, useId } from "react";
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

/**
 * How a selected item is marked: a check in its top right corner (`check`),
 * the radio's filled circle (`circle`), or only its colors (`none`).
 */
export type RadioGroupIndicatorStyle = "check" | "circle" | "none";

// A plain React context: a nested styled context Provider would reset `size`
// to its defaults.
const IndicatorStyleContext = createContext<RadioGroupIndicatorStyle>("check");
const ReadOnlyContext = createContext(false);
// Inside the fallback of `RadioGroup`'s Suspense boundary: items render a
// native radio in place of Tamagui's.
const NativeRadioContext = createContext(false);

// Out of sight, the radio still gives the item its role, arrow-key navigation
// and form value.
const hiddenIndicatorStyle = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  opacity: 0,
  pointerEvents: "none"
} as const;

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

const RadioGroupItemCheck = styled(View, {
  displayName: "RadioGroupItemCheck",
  transition: "200ms",
  position: "absolute",
  borderRadius: 100_000,
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  scale: "1 enter:0.4",
  opacity: "1 enter:0"
});

const RadioGroupItemContainerFrame = styled(XStack, {
  displayName: "RadioGroupItem",
  context: RadioGroupContext,
  transition: "200ms",
  cursor: "pointer",
  gap: "3xl",
  boxShadow:
    "none press:ring-offset focus:ring-offset focus-visible:ring-offset",
  borderRadius: "control",
  borderWidth: 1,
  paddingHorizontal: "3xl",
  paddingVertical: "2xl",
  alignItems: "center",
  // Anchors the `check` indicator.
  position: "relative",
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
    /**
     * An icon shown on the item's left side, centered vertically. Give it
     * `color="currentColor"` to follow the item's state colors.
     */
    icon?: ReactNode;
  };

/**
 * An option of the radio group: its label (`children`), optional
 * `description` and optional `icon` beside a radio indicator. Pressing anywhere on it selects it,
 * and a disabled item shows a lock in place of the indicator.
 */
const RadioGroupItemContainer = createStyledHOC(
  RadioGroupItemContainerFrame,
  (
    {
      children,
      value,
      description,
      icon,
      disabled: disabledProp,
      onPress,
      ...props
    }: RadioGroupItemProps,
    forwardedRef
  ) => {
    const { size } = RadioGroupContext.useStyledContext();
    const group = use(TamaguiRadioGroupContext);
    const indicatorStyle = use(IndicatorStyleContext);
    const readOnly = use(ReadOnlyContext);
    const nativeRadio = use(NativeRadioContext);
    const hasValidationMessage = useFieldHasValidationMessage();
    const id = useId();
    const itemValue = String(value);
    const disabled = Boolean(disabledProp) || Boolean(group.disabled);
    const selected = group.value === itemValue;
    // Another item of the group is selected.
    const inactive = !selected && Boolean(group.value);

    // Nothing selected: the normal colors. Once one is: `-active` for it and
    // `-inactive` for the rest.
    const state = (color: string) =>
      selected ? `${color}-active` : inactive ? `${color}-inactive` : color;
    const idleColor = hasValidationMessage ? "primary" : "hairline";
    const borderColor = disabled ? "primary-disabled" : state(idleColor);
    const hoverColor = disabled
      ? "primary-disabled"
      : selected
        ? borderColor
        : "primary-hovered";
    const focusColor = `${idleColor}-active`;
    const scale = getFormSizeScale(size);
    const checkSize = getSized("5xl") * scale * 0.75;
    const textColor = (color: "emphasis" | "ink") =>
      disabled
        ? "primary-disabled group-hover/item:primary-disabled"
        : `${state(color)} group-hover/item:${selected ? state(color) : color}`;

    const onChange = group.onChange;
    const handlePress = useCallback(
      (event: GestureResponderEvent) => {
        if (readOnly) return;
        onPress?.(event);
        if (!disabled && !selected) {
          onChange?.(itemValue);
        }
      },
      [onPress, disabled, readOnly, selected, onChange, itemValue]
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
              : `${state("surface")} hover:surface-hovered`
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
                  ? `press:ring-subtle-offset focus:ring-subtle-offset focus-visible:ring-subtle-offset`
                  : `focus:ring-offset focus-visible:ring-offset`
              )
        }
        borderColor={`${borderColor} hover:${hoverColor}${disabled ? "" : ` focus:${focusColor} focus-visible:${focusColor}`}`}
        aria-disabled={disabled || undefined}
        onPress={handlePress}
        disabled={disabled}>
        {icon != null && (
          // A View can't carry `color` in v3, so a Text passes the state
          // colors down to `currentColor` icons.
          <Text
            display="flex"
            alignSelf="center"
            flexShrink={0}
            transition="200ms"
            color={textColor("emphasis")}>
            {icon}
          </Text>
        )}

        <YStack
          gap="md"
          justifyContent="flex-start"
          flex={1}
          minWidth={0}
          // Keep the text clear of the corner check.
          paddingRight={
            indicatorStyle === "check"
              ? checkSize + getSpaced("xl") * scale
              : undefined
          }>
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

        <View
          alignSelf="center"
          onPress={e => e.stopPropagation()}
          // A native radio stays visible: without JavaScript nothing else
          // shows which item is selected.
          {...(indicatorStyle !== "circle" &&
            !nativeRadio &&
            hiddenIndicatorStyle)}>
          {nativeRadio ? (
            <input
              type="radio"
              id={id}
              name={group.name}
              value={itemValue}
              defaultChecked={selected}
              disabled={disabled}
              required={group.required}
              style={{
                margin: 0,
                width: getSized("5xl") * scale * 0.75,
                height: getSized("5xl") * scale * 0.75,
                accentColor: "var(--primary-active)"
              }}
            />
          ) : (
            <RadioGroupItem
              id={id}
              size={size}
              borderColor={`${borderColor} group-hover/item:${hoverColor}`}
              value={itemValue}
              disabled={disabled}>
              {disabled ? (
                <Lock
                  size={getSized("5xl") * scale * 0.6}
                  color="primary-disabled"
                />
              ) : (
                <RadioGroupItemIndicator />
              )}
            </RadioGroupItem>
          )}
        </View>

        {indicatorStyle === "check" && selected && (
          <RadioGroupItemCheck
            top={getSpaced("2xl") * scale}
            right={getSpaced("3xl") * scale}>
            <Confirm
              size={checkSize}
              variant="bold"
              color={disabled ? "primary-disabled" : "primary-active"}
            />
          </RadioGroupItemCheck>
        )}
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

// The fallback's frame: `RadioGroupFrame` renders Tamagui's radio group.
const RadioGroupFallbackFrame = styled(View, {
  displayName: "RadioGroup",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "100%"
});

const RadioGroupImpl = createStyledHOC(
  RadioGroupFrame,
  (
    props: GetProps<typeof RadioGroupFrame> & {
      defaultValue?: string | null;
      size?: FormControlSize;
      /** How a selected item is marked. Defaults to `"check"`. */
      indicatorStyle?: RadioGroupIndicatorStyle;
      readOnly?: boolean;
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

        if (currentTarget.contains(event.relatedTarget)) {
          return;
        }

        formOnBlur?.();
      },
      [formOnBlur]
    );
    const {
      children,
      name = formControl?.name,
      required = formControl?.required,
      disabled = formControl?.disabled,
      readOnly = formControl?.readOnly ?? false,
      value = formControl?.formattedValue,
      defaultValue = formControl?.defaultValue,
      size = formControl?.size ?? contextSize,
      onFocus = formControl?.onFocus,
      onBlur = formOnBlur ? handleBlur : undefined,
      onValueChange = formControl?.onChange,
      indicatorStyle = "check",
      ...rest
    } = props;
    const items = formControl?.items;
    // Stay controlled inside a form control, uncontrolled outside of one.
    const groupValue =
      formControl || readOnly || value != null
        ? String(value ?? defaultValue ?? "")
        : undefined;
    const ariaProps = getFormControlAriaProps(formControl);
    const content = (
      <ReadOnlyContext value={readOnly}>
        <IndicatorStyleContext value={indicatorStyle}>
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
                  icon={item.icon}
                  disabled={item.disabled}>
                  {item.name}
                </RadioGroupItemContainer>
              ))}
          </YStack>
        </IndicatorStyleContext>
      </ReadOnlyContext>
    );

    return (
      // Tamagui's roving focus group and collection give their callbacks
      // random identity keys while rendering, which a Next.js Cache
      // Components prerender only allows inside a Suspense boundary. The
      // prerendered shell gets the same items with native radios, which
      // submit and validate without JavaScript.
      <Suspense
        fallback={
          <RadioGroupFallbackFrame
            role="radiogroup"
            id={name}
            aria-required={required ? true : undefined}
            aria-disabled={Boolean(disabled) || undefined}
            aria-readonly={readOnly || undefined}
            {...ariaProps}>
            <TamaguiRadioGroupContext
              value={
                {
                  name,
                  required,
                  disabled,
                  value:
                    groupValue ??
                    (defaultValue == null ? undefined : String(defaultValue))
                } as ContextType<typeof TamaguiRadioGroupContext>
              }>
              <NativeRadioContext value>{content}</NativeRadioContext>
            </TamaguiRadioGroupContext>
          </RadioGroupFallbackFrame>
        }>
        <RadioGroupFrame
          id={name}
          aria-readonly={readOnly || undefined}
          {...ariaProps}
          ref={forwardedRef}
          size={size}
          {...rest}
          // Names the radios' hidden inputs, which submit with the form.
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          // The radios' values are strings, so report the field item's own
          // value (which may be a number or boolean).
          onValueChange={next =>
            !readOnly &&
            onValueChange?.(
              (items?.find(item => String(item.value) === next)?.value ??
                next) as string
            )
          }
          value={groupValue}
          defaultValue={defaultValue == null ? undefined : String(defaultValue)}
          required={required}
          disabled={disabled}>
          {content}
        </RadioGroupFrame>
      </Suspense>
    );
  },
  { displayName: "RadioGroup" }
);

export const RadioGroup = withStaticProperties(RadioGroupImpl, {
  Item: RadioGroupItemContainer
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`RadioGroup.ItemContainer` is undefined on the server).
 */
export { RadioGroupItemContainer };
