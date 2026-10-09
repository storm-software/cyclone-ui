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

import { ContextMenu } from "@cyclone-ui/context-menu";
import type { FieldLabelPlacement } from "@cyclone-ui/field";
import {
  Field,
  FieldNotchedOutline,
  useFieldHasValidationMessage,
  useFieldIconColor,
  useFieldLabelPlacement
} from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import {
  getFormSizeScale,
  getFormSizeToken,
  getSpaced
} from "@cyclone-ui/helpers";
import { CaretDown } from "@cyclone-ui/icons";
import { ControlUnderline } from "@cyclone-ui/input";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
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

    // The radius is styled by the `.resolve` below, as it depends on the
    // size.
    variant: {
      outlined: {},
      underlined: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "hairline hover:accentHover focus-visible:accent",
        boxShadow: "none focus-visible:none"
      },
      inlined: {}
    },

    // Styled by the `.resolve` below because the geometry depends on
    // `variant`, `labelPlacement` and `circular`.
    frameSize: styled.dynamic<FormControlSize>(),

    labelPlacement: styled.dynamic<FieldLabelPlacement>(),

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
    variant: "outlined"
  }
}).resolve(props => {
  const sized = getSelectSize(
    (props.frameSize as FormControlSize | undefined) ?? "md",
    {
      labelPlacement: props.labelPlacement as FieldLabelPlacement | undefined,
      circular: (props as { circular?: boolean }).circular
    }
  );
  // `FieldNotchedOutline` draws a notched field's border instead; the
  // padding keeps the content where the border left it.
  const notched = props.labelPlacement === "border";

  return sized
    ? {
        height: sized.height,
        minHeight: sized.minHeight,
        paddingHorizontal: notched ? 1 : 0,
        paddingVertical: notched ? 1 : undefined,
        borderWidth: notched ? 0 : undefined,
        // underlined selects round only their top corners; inlined ones none.
        ...(props.variant === "underlined"
          ? {
              borderTopLeftRadius: sized.borderRadius,
              borderTopRightRadius: sized.borderRadius,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }
          : { borderRadius: sized.borderRadius })
      }
    : undefined;
});

const SelectSeparator = styled(View, {
  displayName: "Select",
  context: SelectContext,
  // Fades in over 200ms when the separator mounts. The object form with an
  // `enter` key keeps a hover/focus restyle during the fade from snapping it
  // to full opacity: Tamagui only re-renders (instead of emitting styles with
  // the mount-time "no animation" flag) when `transition` names `enter`.
  transition: { duration: "200ms", enter: "200ms" },
  opacity: "enter:0",
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
      outlined: {},
      underlined: {
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0
      },
      inlined: {}
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
    variant: "outlined"
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
          <CaretDown
            size={24 * getFormSizeScale(size)}
            color={iconColor}
            weight="bold"
          />
        </View>
      </Field.Icon>
    );
  },
  { displayName: "Select" }
);

const SelectTextBoxImpl = createStyledHOC(
  SelectTextBox,
  (
    {
      children,
      ...props
    }: GetProps<typeof SelectTextBox> & Partial<SelectContextProps>,
    forwardedRef
  ) => {
    const { focused, disabled, size, variant, circular } =
      SelectContext.useStyledContext();
    const hasValidationMessage = useFieldHasValidationMessage();
    const labelPlacement = useFieldLabelPlacement();
    const [locallyActive, setLocallyActive] = useState(false);
    const frameSize = size;
    const underlineActive = focused || locallyActive;
    const idleColor = hasValidationMessage ? "accent" : "hairline";
    const focusColor = hasValidationMessage ? "accentActive" : "hairlineActive";
    const hoverColor = hasValidationMessage ? "accentHover" : "hairlineHover";
    // A call-site base replaces every lower-tier clause in v3, so restate
    // the `disabled` variant's press/focus colors that v2 kept.
    // In a field the label overlays the frame without being inside it, so
    // the frame never sees `hover`; follow the field group's hover too.
    const borderColor = `${focused ? focusColor : idleColor} hover:${focused ? focusColor : "accentHover"} group-hover/field:${disabled ? "accentDisabled" : focused ? focusColor : "accentHover"}${disabled ? " press:accentDisabled focus:accentDisabled" : ""} focus-visible:${focusColor}`;

    return (
      <SelectGroup
        // No own `group`: `group-hover/field` here and on the separator must
        // resolve to the enclosing Field, which also covers its label overlay.
        focused={focused}
        hasValidationMessage={hasValidationMessage}
        variant={variant}
        labelPlacement={labelPlacement}
        frameSize={frameSize}
        disabled={disabled}
        borderColor={borderColor}
        boxShadow={`focus-visible:${
          variant === "outlined" || variant === "inlined"
            ? "ringOffset"
            : "none"
        }`}
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
            paddingLeft={
              variant === "underlined"
                ? 0
                : getSpaced(getFormSizeToken(frameSize)) * 0.25
            }>
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
          {variant === "underlined" && (
            <ControlUnderline
              bottom={-1}
              focused={underlineActive}
              disabled={disabled}
              backgroundColor={disabled ? "accentDisabled" : focusColor}
            />
          )}
          {labelPlacement === "border" && (
            <FieldNotchedOutline
              borderColor={borderColor}
              borderRadius={circular ? 100_000 : "control"}
            />
          )}
        </XGroup>
      </SelectGroup>
    );
  },
  { displayName: "Select" }
);

const SelectGroupImpl = createStyledHOC(
  ContextMenu,
  (
    {
      name,
      disabled,
      focused,
      variant = "outlined",
      children,
      onFocus,
      onBlur,
      onChange,
      size = "md",
      value,
      defaultValue,
      ...props
    }: Omit<GetProps<typeof ContextMenu>, "value" | "onValueChange"> &
      Partial<SelectContextProps> & {
        value?: string;
        defaultValue?: string;
      },
    forwardedRef
  ) => {
    const [open, setOpen] = useState(false);
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const hasValidationMessage = useFieldHasValidationMessage();
    const visualFocus = getSelectVisualFocus(focused, open);
    const resolvedValue = value ?? uncontrolledValue;

    const handleOpenChanged = useCallback(
      (nextOpen: boolean) => {
        if (nextOpen && disabled) {
          return;
        }

        setOpen(nextOpen);

        if (nextOpen) {
          onFocus?.();
        } else {
          onBlur?.();
        }
      },
      [disabled, onFocus, onBlur]
    );

    const handleChanged = useCallback(
      (nextValue: string) => {
        setUncontrolledValue(nextValue);
        onChange?.(
          new CustomEvent("change", {
            detail: nextValue
          })
        );
        handleOpenChanged(false);
      },
      [onChange, handleOpenChanged]
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
        size={size}
        value={resolvedValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}>
        <ContextMenu
          ref={forwardedRef}
          placement="bottom"
          {...props}
          size={size}
          value={resolvedValue}
          onValueChange={handleChanged}
          open={open}
          onOpenChange={handleOpenChanged}>
          {children}
        </ContextMenu>
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
