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

import { Button } from "@cyclone-ui/button";
import { getSized } from "@cyclone-ui/helpers";
import type { GetProps, SizeTokens, VariantSpreadExtras } from "@tamagui/core";
import {
  styled,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { ChevronDown } from "@tamagui/lucide-icons-2";
import { Select as TamaguiSelect } from "@tamagui/select";
import { Separator } from "@tamagui/separator";
import { useCallback, useMemo } from "react";
import { SelectItems } from "./SelectItems";
import { SelectTextBox } from "./SelectTextBox";
import type { SelectContextProps } from "./types";
import { getSelectSize, SelectContext } from "./utilities";

const SelectGroup = styled(XGroup, {
  name: "Select",
  context: SelectContext,

  transition: "medium",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  borderWidth: 1,
  borderColor: "$borderPrimary",
  outlineStyle: "none",
  gap: "$none",
  tabIndex: 0,
  borderRadius: "$control",

  // this fixes a flex bug where it overflows container
  minWidth: 0,

  hoverStyle: {
    borderColor: "$borderPrimaryHover"
  },

  focusVisibleStyle: {
    outlineColor: "$borderAccent",
    outlineWidth: 3,
    outlineOffset: "$lg",
    outlineStyle: "solid",
    borderColor: "$borderAccent"
  },

  variants: {
    focused: {
      true: {
        outlineColor: "$borderAccent",
        outlineWidth: 3,
        outlineOffset: "$lg",
        outlineStyle: "solid",
        borderColor: "$borderAccent"
      }
    },

    size: {
      "...size": (
        val: SizeTokens | number,
        extras: VariantSpreadExtras<any>
      ) => {
        const result = getSelectSize(val, extras);

        return {
          ...result,
          paddingHorizontal: 0
        };
      }
    },

    disabled: {
      true: {
        borderColor: "$borderPrimaryDisabled",
        userSelect: "none",
        cursor: "not-allowed",

        hoverStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        focusStyle: {
          borderColor: "$borderPrimaryDisabled",
          outlineStyle: "none"
        },

        pressStyle: {
          borderColor: "$borderPrimaryDisabled",
          outlineStyle: "none"
        }
      }
    }
  } as const,

  defaultVariants: {
    size: "$true",
    disabled: false,
    focused: false
  }
});

const SelectSeparator = styled(Separator, {
  name: "Select",
  context: SelectContext,

  transition: "medium",
  borderWidth: 1,
  borderColor: "$borderPrimary",
  vertical: true,
  height: "50%",
  marginVertical: "$xxs",

  variants: {
    focused: {
      true: {
        borderColor: "$borderAccent"
      }
    },

    disabled: {
      true: {
        borderColor: "$borderPrimaryDisabled",

        hoverStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        focusStyle: {
          borderColor: "$borderPrimaryDisabled"
        },

        pressStyle: {
          borderColor: "$borderPrimaryDisabled"
        }
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    focused: false
  }
});

const SelectTrigger = Button.styleable<{
  forcePlacement?: GetProps<typeof XGroup.Item>["forcePlacement"];
  rotateOnFocused?: boolean;
}>(
  ({ children, rotateOnFocused = true, ...props }, forwardedRef) => {
    const { circular, focused, disabled, size, onFocus } =
      SelectContext.useStyledContext();

    const adjustedTrigger = useMemo(
      () => getSized(size, { shift: -3 }),
      [size]
    );

    const theme = useThemeName();
    const rotate = useMemo(
      () => (rotateOnFocused ? focused : false),
      [rotateOnFocused, focused]
    );

    return (
      <View
        transition="slow"
        rotate={rotate ? "180deg" : "0deg"}
        cursor={disabled ? "not-allowed" : "pointer"}
        paddingHorizontal="$sm"
        flexBasis="6%"
        minWidth="$5xl">
        <Button
          ref={forwardedRef}
          variant="ghost"
          {...props}
          disabled={disabled}
          borderRadius={circular ? 100_000 : "$button"}
          onPress={onFocus}
          size={adjustedTrigger}
          color={
            theme?.includes("base") ? "$borderPrimary" : "$foregroundOnPrimary"
          }>
          <Button.Icon>
            {children || <ChevronDown disabled={disabled} />}
          </Button.Icon>
        </Button>
      </View>
    );
  },
  { staticConfig: { componentName: "Select" } }
);

const BaseSelect = styled(TamaguiSelect, {
  name: "Select",
  context: SelectContext,

  transition: "medium",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  borderColor: "transparent",
  backgroundColor: "transparent",

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        color: "$foregroundOnPrimaryDisabled",
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
    const { focused, disabled } = SelectContext.useStyledContext();

    return (
      <SelectGroup
        group={"select" as any}
        focused={focused}
        disabled={disabled}
        minWidth="$12xl">
        <SelectTextBox {...props}>
          <XGroup.Item>
            <View flex={1}>{children}</View>
          </XGroup.Item>

          <XGroup.Item>
            <SelectSeparator
              ref={forwardedRef}
              focused={focused}
              disabled={disabled}
              $group-select-hover={{
                borderColor: disabled
                  ? "$borderPrimaryDisabled"
                  : focused
                    ? "$borderAccent"
                    : "$borderPrimaryHover"
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
    const handleOpenChanged = useCallback(
      (open: boolean, _via?: "hover" | "press") => {
        if (open) {
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
          open={focused}
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
