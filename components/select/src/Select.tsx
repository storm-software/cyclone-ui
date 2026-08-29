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

import { getSized, getSpaced } from "@cyclone-ui/helpers";
import type { SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import { styled, View, withStaticProperties } from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { ChevronDown } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Separator } from "@tamagui/separator";
import { useCallback, useMemo, useState } from "react";
import { SelectItems } from "./SelectItems";
import { SelectTextBox } from "./SelectTextBox";
import type { SelectContextProps } from "./types";
import { getSelectSize, SelectContext } from "./utilities";

const getSelectFrameSize = (
  val: SizeTokens | number,
  extras: VariantSpreadExtras<any>
) => ({
  ...getSelectSize(val, extras),
  paddingHorizontal: 0
});

const SelectGroup = styled(XGroup, {
  name: "Select",
  context: SelectContext,

  transition: "200ms",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: "$backgroundElevated",
  borderWidth: 1,
  borderColor: "$border",
  outlineStyle: "none",
  boxShadow: "none",
  gap: "$none",
  tabIndex: 0,
  borderRadius: "$control",

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$borderHover"
  },

  focusVisibleStyle: {
    boxShadow: "$ring",
    borderColor: "$borderFocused"
  },

  variants: {
    focused: {
      true: {
        boxShadow: "$ring",
        borderColor: "$borderFocused"
      }
    },

    frameSize: {
      ":string": getSelectFrameSize,
      ":number": getSelectFrameSize
    },

    disabled: {
      true: {
        borderColor: "$borderDisabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          borderColor: "$borderDisabled"
        },

        focusStyle: {
          borderColor: "$borderDisabled",
          outlineStyle: "none"
        },

        pressStyle: {
          borderColor: "$borderDisabled",
          outlineStyle: "none"
        }
      }
    }
  } as const,

  defaultVariants: {
    frameSize: "$10xl",
    disabled: false,
    focused: false
  }
});

const SelectSeparator = styled(Separator, {
  name: "Select",
  context: SelectContext,

  transition: "200ms",
  borderWidth: 1,
  borderColor: "$border",
  vertical: true,
  height: "50%",
  marginVertical: "$xxs",

  variants: {
    focused: {
      true: {
        borderColor: "$borderFocused"
      }
    },

    disabled: {
      true: {
        borderColor: "$borderDisabled",

        hoverStyle: {
          borderColor: "$borderDisabled"
        },

        focusStyle: {
          borderColor: "$borderDisabled"
        },

        pressStyle: {
          borderColor: "$borderDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    focused: false
  }
});

const SelectTrigger = View.styleable(
  (props, forwardedRef) => {
    const { focused, disabled, size } = SelectContext.useStyledContext();
    const controlSize =
      size === "$true" || String(size) === "true" ? "$10xl" : size;

    const adjustedTrigger = useMemo(
      () => getSized(controlSize, { shift: -3 }),
      [controlSize]
    );

    return (
      <View
        ref={forwardedRef}
        {...props}
        transition="200ms"
        rotate={focused ? "180deg" : "0deg"}
        cursor={disabled ? "not-allowed" : "pointer"}
        paddingHorizontal="$sm"
        flexBasis="6%"
        minWidth="$5xl"
        alignItems="center"
        justifyContent="center">
        <ChevronDown
          size={adjustedTrigger}
          transition="200ms"
          color={disabled ? "$borderDisabled" : "$border"}
          $group-field-hover={{
            color: disabled ? "$borderDisabled" : "$borderHover"
          }}
        />
      </View>
    );
  },
  { staticConfig: { componentName: "Select" } }
);

const BaseSelect = styled(TamaguiSelect, {
  name: "Select",
  context: SelectContext,

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
        color: "$foregroundInverseDisabled",
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
    const { focused, disabled, size } = SelectContext.useStyledContext();
    const frameSize =
      size === "$true" || String(size) === "true" ? "$10xl" : size;

    return (
      <SelectGroup
        group={"field" as any}
        focused={focused}
        disabled={disabled}
        frameSize={frameSize}
        transition="200ms"
        $group-field-hover={{ borderColor: "$borderHover" }}>
        <SelectTextBox {...props}>
          <XGroup.Item flex={1} minWidth={0}>
            <View
              flex={1}
              minWidth={0}
              flexDirection="row"
              alignItems="center"
              paddingHorizontal={getSpaced(frameSize) * 0.25}>
              {children}
            </View>
          </XGroup.Item>

          <XGroup.Item>
            <SelectSeparator
              ref={forwardedRef}
              focused={focused}
              disabled={disabled}
              $group-field-hover={{
                borderColor: disabled
                  ? "$borderDisabled"
                  : focused
                    ? "$borderFocused"
                    : "$borderHover"
              }}
            />
          </XGroup.Item>

          <XGroup.Item>
            <SelectTrigger />
          </XGroup.Item>
        </SelectTextBox>
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
      children,
      onFocus,
      onBlur,
      onChange,
      size = "$true",
      ...props
    },
    forwardedRef
  ) => {
    const [open, setOpen] = useState(false);

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
        focused={focused}
        size={size}
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
          size={size}>
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
