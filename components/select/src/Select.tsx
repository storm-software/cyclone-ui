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

import { Field, useFieldHasValidationMessage } from "@cyclone-ui/field";
import {
  formSizeVariants,
  getFormSizeScale,
  getFormSizeToken,
  getSpaced,
  type FormControlSize
} from "@cyclone-ui/helpers";
import { ControlUnderline } from "@cyclone-ui/input";
import type { GetProps, VariantSpreadExtras } from "@tamagui/core";
import { styled, View, withStaticProperties } from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { ChevronDown } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import type { ForwardedRef } from "react";
import { useCallback, useState } from "react";
import { SelectItems } from "./SelectItems";
import { SelectTextBox } from "./SelectTextBox";
import type { SelectContextProps } from "./types";
import {
  getSelectSize,
  getSelectVisualFocus,
  SelectContext
} from "./utilities";

const getSelectFrameSize = (
  val: FormControlSize,
  extras: VariantSpreadExtras<any>
) => ({
  ...getSelectSize(val, extras),
  paddingHorizontal: 0
});

const SelectGroup = styled(XGroup, {
  name: "Select",
  context: SelectContext,

  transition: "200ms",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: "$surfaceElevated",
  borderWidth: 1,
  borderColor: "$hairline",
  outlineStyle: "none",
  boxShadow: "none",
  gap: "$none",
  tabIndex: 0,
  borderRadius: "$control",

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$accentHover"
  },

  focusVisibleStyle: {
    boxShadow: "$ringOffset",
    borderColor: "$accentActive"
  },

  variants: {
    focused: {
      true: {
        boxShadow: "$ringOffset",
        borderColor: "$accentActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "$accent",
        hoverStyle: {
          borderColor: "$accentHover"
        }
      }
    },

    variant: {
      default: {},
      floating: {},
      underline: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "$hairline",
        borderRadius: 0,
        boxShadow: "none",

        hoverStyle: {
          borderColor: "$accentHover"
        },

        focusVisibleStyle: {
          borderColor: "$accent",
          boxShadow: "none"
        }
      }
    },

    frameSize: formSizeVariants(getSelectFrameSize),

    disabled: {
      true: {
        borderColor: "$accentDisabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          borderColor: "$accentDisabled"
        },

        focusStyle: {
          borderColor: "$accentDisabled",
          outlineStyle: "none"
        },

        pressStyle: {
          borderColor: "$accentDisabled",
          outlineStyle: "none"
        }
      }
    }
  } as const,

  defaultVariants: {
    frameSize: "md",
    disabled: false,
    focused: false,
    variant: "default"
  }
});

const SelectSeparator = styled(View, {
  name: "Select",
  context: SelectContext,

  transition: "200ms",
  // Tamagui's vertical Separator emits rules on both sides. Use the same
  // one-pixel left rule as Input so the Select and field-icon dividers match.
  borderWidth: 0,
  borderLeftWidth: 1,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderColor: "$hairline",
  width: 0,
  flexShrink: 0,
  height: "60%",
  marginVertical: "$none",

  hoverStyle: {
    borderColor: "$hairlineHover"
  },

  variants: {
    focused: {
      true: {
        borderColor: "$hairlineActive"
      }
    },

    hasValidationMessage: {
      true: {
        borderColor: "$accent"
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
        borderColor: "$hairlineInactive",

        hoverStyle: {
          borderColor: "$hairlineInactive"
        },

        focusStyle: {
          borderColor: "$hairlineInactive"
        },

        pressStyle: {
          borderColor: "$hairlineInactive"
        }
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

const SelectTrigger = Field.Icon.styleable(
  (props: SelectTriggerProps, forwardedRef: ForwardedRef<unknown>) => {
    const { focused, size } = SelectContext.useStyledContext();

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
            color="currentColor"
          />
        </View>
      </Field.Icon>
    );
  },
  { staticConfig: { componentName: "Select" } }
);

const BaseSelect = styled(TamaguiSelect, {
  name: "Select",

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
        color: "$onAccentDisabled",
        backgroundColor: "transparent"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const SelectTextBoxImpl = SelectTextBox.styleable<Partial<SelectContextProps>>(
  ({ children, ...props }, forwardedRef) => {
    const { focused, disabled, size, variant } =
      SelectContext.useStyledContext();
    const hasValidationMessage = useFieldHasValidationMessage();
    const [locallyActive, setLocallyActive] = useState(false);
    const frameSize = size;
    const underlineActive = focused || locallyActive;
    const idleColor = hasValidationMessage ? "$accent" : "$hairline";
    const focusColor = hasValidationMessage
      ? "$accentActive"
      : "$hairlineActive";
    const hoverColor = hasValidationMessage ? "$accentHover" : "$hairlineHover";

    return (
      <SelectGroup
        group={"field" as any}
        focused={focused}
        hasValidationMessage={hasValidationMessage}
        variant={variant}
        frameSize={frameSize}
        disabled={disabled}
        borderColor={focused ? focusColor : idleColor}
        hoverStyle={{ borderColor: focused ? focusColor : "$accentHover" }}
        focusVisibleStyle={{
          boxShadow: variant === "underline" ? "none" : "$ringOffset",
          borderColor: focusColor
        }}
        onFocus={() => setLocallyActive(true)}
        onBlur={(event: any) => {
          if (!event.currentTarget?.contains?.(event.relatedTarget)) {
            setLocallyActive(false);
          }
        }}
        transition="200ms">
        <SelectTextBox
          {...props}
          paddingLeft={getSpaced(getFormSizeToken(frameSize)) * 0.25}>
          <XGroup.Item flex={1} minWidth={0} height="100%">
            <View flex={1} minWidth={0} flexDirection="row" alignItems="center">
              {children}
            </View>
          </XGroup.Item>

          <XGroup.Item>
            <SelectSeparator
              ref={forwardedRef}
              focused={focused}
              hasValidationMessage={hasValidationMessage}
              disabled={disabled}
              $group-field-hover={{
                borderColor: disabled
                  ? "$hairlineInactive"
                  : focused
                    ? focusColor
                    : hoverColor
              }}
              borderColor={focused ? focusColor : idleColor}
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
            backgroundColor={disabled ? "$accentDisabled" : focusColor}
          />
        )}
      </SelectGroup>
    );
  },
  { staticConfig: { componentName: "Select" } }
);

const SelectGroupImpl = BaseSelect.styleable<Partial<SelectContextProps>>(
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
    },
    forwardedRef
  ) => {
    const [open, setOpen] = useState(false);
    const hasValidationMessage = useFieldHasValidationMessage();
    const visualFocus = getSelectVisualFocus(focused, open);
    const resolvedSize = size;

    const handleOpenChanged = useCallback(
      (nextOpen: boolean, _via?: "hover" | "press") => {
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
        {...props}
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
  { staticConfig: { componentName: "Select" } }
);

export const Select = withStaticProperties(SelectGroupImpl, {
  TextBox: withStaticProperties(SelectTextBoxImpl, {
    Value: SelectTextBox.Value
  }),
  Items: SelectItems
});
