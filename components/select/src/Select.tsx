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

import {
  Field,
  useFieldHasValidationMessage,
  useFieldIconColor
} from "@cyclone-ui/field";
import {
  getFormSizeScale,
  getFormSizeToken,
  getSpaced,
  type FormControlSize
} from "@cyclone-ui/helpers";
import { ControlUnderline } from "@cyclone-ui/input";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { ChevronDown } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import { XStack } from "@tamagui/stacks";
import { useCallback, useState } from "react";
import { SelectItems } from "./SelectItems";
import { SelectTextBox } from "./SelectTextBox";
import type { SelectContextProps } from "./types";
import {
  getSelectSize,
  getSelectVisualFocus,
  SelectContext
} from "./utilities";

// A plain stack rather than `styled(XGroup)` so `transition` reaches the
// rendered frame and the border and focus ring animate; see `InputGroup`.
const SelectGroup = styled(XStack, {
  displayName: "Select",
  context: SelectContext,
  transition: "200ms",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: "surfaceElevated",
  borderWidth: 1,
  borderColor: "hairline hover:accentHover focus-visible:accentActive",
  outlineStyle: "none",
  // this fixes a flex bug where it overflows container
  boxShadow: "none focus-visible:ringOffset",
  gap: "zero",
  borderRadius: "control",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  tabIndex: 0,
  variants: {
    focused: {
      true: {
        boxShadow: "ringOffset",
        borderColor: "accentActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "accent hover:accentHover"
      }
    },

    variant: {
      default: {},
      floating: {},
      underline: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "hairline hover:accentHover focus-visible:accent",
        borderRadius: 0,
        boxShadow: "none focus-visible:none"
      }
    },

    // Styled by the `.resolve` below because the geometry depends on
    // `variant` and `circular`.
    frameSize: styled.dynamic<FormControlSize>(),

    disabled: {
      true: {
        borderColor:
          "accentDisabled hover:accentDisabled press:accentDisabled focus:accentDisabled",
        userSelect: "none",
        cursor: "not-allowed",
        outlineStyle: "press:none focus:none"
      }
    }
  } as const,
  defaultVariants: {
    frameSize: "md",
    disabled: false,
    focused: false,
    variant: "default"
  }
}).resolve(props => {
  const sized = getSelectSize(
    (props.frameSize as FormControlSize | undefined) ?? "md",
    {
      variant: props.variant as string | undefined,
      circular: (props as { circular?: boolean }).circular
    }
  );

  return sized ? { ...sized, paddingHorizontal: 0 } : undefined;
});

const SelectSeparator = styled(View, {
  displayName: "Select",
  context: SelectContext,
  transition: "200ms",
  // Tamagui's vertical Separator emits rules on both sides. Use the same
  // one-pixel left rule as Input so the Select and field-icon dividers match.
  borderWidth: 0,
  borderLeftWidth: 1,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderColor: "hairline hover:hairlineHover",
  width: 0,
  flexShrink: 0,
  height: "60%",
  marginVertical: "zero",
  variants: {
    focused: {
      true: {
        borderColor: "hairlineActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "accent"
      }
    },

    variant: {
      default: {},
      floating: {},
      underline: {
        borderWidth: 0
      }
    },

    disabled: {
      true: {
        borderColor:
          "hairlineInactive hover:hairlineInactive press:hairlineInactive focus:hairlineInactive"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false,
    focused: false,
    variant: "default"
  }
});

type SelectTriggerProps = GetProps<typeof Field.Icon>;

const SelectTrigger = createStyledHOC(
  Field.Icon,
  (props: SelectTriggerProps, forwardedRef) => {
    const { focused, size } = SelectContext.useStyledContext();
    const { iconColor } = useFieldIconColor();

    return (
      <Field.Icon
        ref={forwardedRef}
        {...props}
        controlSize={size}
        render="span"
        role={undefined}
        pointerEvents="none">
        <View
          width="100%"
          height="100%"
          transition="400ms"
          transformOrigin="center"
          rotate={focused ? "180deg" : "0deg"}
          alignItems="center"
          justifyContent="center">
          <ChevronDown
            size={24 * getFormSizeScale(size)}
            color={iconColor}
          />
        </View>
      </Field.Icon>
    );
  },
  { displayName: "Select" }
);

const BaseSelect = styled(TamaguiSelect, {
  // `name` is the web form field name in v3, so use `displayName` here
  displayName: "Select",

  transition: "200ms",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "transparent",
  backgroundColor: "transparent",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        color: "onAccentDisabled",
        backgroundColor: "transparent"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const SelectTextBoxImpl = createStyledHOC(
  SelectTextBox,
  (
    {
      children,
      ...props
    }: GetProps<typeof SelectTextBox> & Partial<SelectContextProps>,
    forwardedRef
  ) => {
    const { focused, disabled, size, variant } =
      SelectContext.useStyledContext();
    const hasValidationMessage = useFieldHasValidationMessage();
    const [locallyActive, setLocallyActive] = useState(false);
    const frameSize = size;
    const underlineActive = focused || locallyActive;
    const idleColor = hasValidationMessage ? "accent" : "hairline";
    const focusColor = hasValidationMessage ? "accentActive" : "hairlineActive";
    const hoverColor = hasValidationMessage ? "accentHover" : "hairlineHover";

    return (
      <SelectGroup
        // No own `group`: `group-hover/field` here and on the separator must
        // resolve to the enclosing Field, which also covers its label overlay.
        focused={focused}
        hasValidationMessage={hasValidationMessage}
        variant={variant}
        frameSize={frameSize}
        disabled={disabled}
        // A call-site base replaces every lower-tier clause in v3, so restate
        // the `disabled` variant's press/focus colors that v2 kept.
        // In a field the label overlays the frame without being inside it, so
        // the frame never sees `hover`; follow the field group's hover too.
        borderColor={`${focused ? focusColor : idleColor} hover:${focused ? focusColor : "accentHover"} group-hover/field:${disabled ? "accentDisabled" : focused ? focusColor : "accentHover"}${disabled ? " press:accentDisabled focus:accentDisabled" : ""} focus-visible:${focusColor}`}
        boxShadow={`focus-visible:${variant === "underline" ? "none" : "ringOffset"}`}
        onFocus={() => setLocallyActive(true)}
        onBlur={(event: any) => {
          if (!event.currentTarget?.contains?.(event.relatedTarget)) {
            setLocallyActive(false);
          }
        }}
        transition="200ms">
        <XGroup display="contents" disabled={disabled}>
          <SelectTextBox
            {...props}
            paddingLeft={getSpaced(getFormSizeToken(frameSize)) * 0.25}>
            <XGroup.Item flex={1} minWidth={0} height="100%">
              <View
                flex={1}
                minWidth={0}
                flexDirection="row"
                alignItems="center">
                {children}
              </View>
            </XGroup.Item>

            <XGroup.Item>
              <SelectSeparator
                ref={forwardedRef}
                focused={focused}
                hasValidationMessage={hasValidationMessage}
                disabled={disabled}
                borderColor={`${focused ? focusColor : idleColor} group-hover/field:${disabled ? "hairlineInactive" : focused ? focusColor : hoverColor}`}
              />
            </XGroup.Item>

            <XGroup.Item>
              <SelectTrigger />
            </XGroup.Item>
          </SelectTextBox>
          {variant === "underline" && (
            <ControlUnderline
              bottom={-1}
              focused={underlineActive}
              disabled={disabled}
              backgroundColor={disabled ? "accentDisabled" : focusColor}
            />
          )}
        </XGroup>
      </SelectGroup>
    );
  },
  { displayName: "Select" }
);

const SelectGroupImpl = createStyledHOC(
  BaseSelect,
  (
    {
      name,
      disabled,
      focused,
      variant = "default",
      children,
      onFocus,
      onBlur,
      onChange,
      size = "md",
      ...props
    }: GetProps<typeof BaseSelect> & Partial<SelectContextProps>,
    forwardedRef
  ) => {
    const [open, setOpen] = useState(false);
    const hasValidationMessage = useFieldHasValidationMessage();
    const visualFocus = getSelectVisualFocus(focused, open);
    const resolvedSize = size;

    const handleOpenChanged = useCallback(
      (nextOpen: boolean) => {
        setOpen(nextOpen);

        if (nextOpen) {
          onFocus?.();
        } else {
          onBlur?.();
        }
      },
      [onFocus, onBlur]
    );

    const handleChanged = useCallback(
      (value: string) => {
        onChange?.(
          new CustomEvent("change", {
            detail: value
          })
        );
        onBlur?.();
      },
      [onChange, onBlur]
    );

    return (
      <SelectContext.Provider
        // Only context keys: a styled context treats every key in its value
        // as a context prop, so spreading all props swallowed `aria-*` and
        // other DOM attributes before they reached the element.
        circular={Boolean((props as { circular?: boolean }).circular)}
        name={name}
        disabled={disabled}
        focused={visualFocus}
        hasValidationMessage={hasValidationMessage}
        variant={variant}
        size={resolvedSize}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}>
        <BaseSelect
          id={name}
          ref={forwardedRef}
          disablePreventBodyScroll={true}
          {...props}
          onValueChange={handleChanged}
          onOpenChange={handleOpenChanged}
          open={open}
          disabled={disabled}
          size={getFormSizeToken(resolvedSize)}>
          {children}
        </BaseSelect>
      </SelectContext.Provider>
    );
  },
  { displayName: "Select" }
);

export const Select = withStaticProperties(SelectGroupImpl, {
  TextBox: withStaticProperties(SelectTextBoxImpl, {
    Value: SelectTextBox.Value
  }),
  Items: SelectItems
});
