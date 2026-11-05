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

import type { FormControlSize } from "@cyclone-ui/helpers";
import { getFormSizeToken, getSized } from "@cyclone-ui/helpers";
import type { ToggleProps, ToggleVariant } from "@cyclone-ui/toggle";
import { getToggleInset, Toggle } from "@cyclone-ui/toggle";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import {
  styled,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { createContext, forwardRef, useContext, useState } from "react";

const ToggleGroupFrame = styled(View, {
  displayName: "ToggleGroup",
  role: "group",
  flexDirection: "row",
  alignItems: "stretch",
  width: "fit-content",
  borderWidth: 1,
  borderColor: "hairline",
  backgroundColor: "sunken",
  borderRadius: "tabs",
  gap: "lg",

  variants: {
    fluid: {
      true: {
        alignSelf: "stretch",
        width: "100%"
      }
    },

    // `Toggle`'s variants; the items stay transparent on top.
    variant: {
      primary: {
        backgroundColor: "primary",
        borderColor: "transparent"
      },
      secondary: {
        backgroundColor: "secondary",
        borderColor: "border",
        boxShadow: "color-shadow-resting-raised"
      },
      tertiary: {
        backgroundColor: "surface",
        borderColor: "hairline",
        boxShadow: "color-shadow-resting-raised"
      },
      outlined: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "primary"
      }
    },

    borderless: {
      true: {
        borderColor: "transparent",
        backgroundColor: "transparent"
      }
    },

    rounded: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,

  defaultVariants: {
    fluid: false,
    borderless: false,
    rounded: false
  }
});

interface ToggleGroupContextValue {
  selected: string[];
  select: (value: string) => void;
  size: FormControlSize;
  variant?: ToggleVariant;
  fluid: boolean;
  invalid: boolean;
  disabled: boolean;
  borderless: boolean;
  rounded: boolean;
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);

export interface ToggleGroupProps extends Omit<
  GetProps<typeof ToggleGroupFrame>,
  "defaultValue" | "fluid" | "borderless" | "rounded" | "variant"
> {
  /**
   * Allow more than one toggle to be selected at a time. The value is then a
   * `string[]` instead of a `string | null`.
   */
  multiple?: boolean;
  /** The selected value(s). Makes the group controlled. */
  value?: string | string[] | null;
  /** The initial selection when uncontrolled. */
  defaultValue?: string | string[] | null;
  /** Called with the new selection when a toggle is pressed. */
  onValueChange?: (value: string | string[] | null) => void;
  /** Allow deselecting the last selected toggle. Defaults to `true`. */
  allowEmpty?: boolean;
  /** The size of every toggle in the group. */
  size?: FormControlSize;
  /** The shared frame's colors; see `Toggle`'s `variant`. */
  variant?: ToggleVariant;
  /** Show the failed-validation style. */
  invalid?: boolean;
  /** Disable every toggle in the group. */
  disabled?: boolean;
  /** Span the parent's width, sharing it evenly between the toggles. */
  fluid?: boolean;
  /** Drop the shared frame's border and background. */
  borderless?: boolean;
  /** Use pill-shaped corners. */
  rounded?: boolean;
}

const toArray = (value?: string | string[] | null) =>
  value == null ? [] : Array.isArray(value) ? value : [value];

/**
 * Picks the next selection after `value` is pressed, or `undefined` when the
 * press is rejected (removing the last value while `allowEmpty` is off).
 */
export const getNextSelection = (
  selected: string[],
  value: string,
  multiple: boolean,
  allowEmpty: boolean
): string[] | undefined => {
  const next = selected.includes(value)
    ? selected.filter(item => item !== value)
    : multiple
      ? [...selected, value]
      : [value];

  return next.length === 0 && !allowEmpty ? undefined : next;
};

const ToggleGroupFrameImpl = forwardRef<TamaguiElement, ToggleGroupProps>(
  (
    {
      multiple = false,
      value: valueProp,
      defaultValue,
      onValueChange,
      allowEmpty = true,
      size = "md",
      variant,
      fluid = false,
      invalid = false,
      disabled = false,
      borderless = false,
      rounded = false,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const [uncontrolledSelected, setUncontrolledSelected] = useState(() =>
      toArray(defaultValue)
    );
    const controlled = valueProp !== undefined;
    const selected = controlled ? toArray(valueProp) : uncontrolledSelected;

    // Always pass a theme: switching from none to a name remounts children.
    const themeName = useThemeName();

    const select = (value: string) => {
      const next = getNextSelection(selected, value, multiple, allowEmpty);
      if (!next) {
        return;
      }
      if (!controlled) {
        setUncontrolledSelected(next);
      }
      onValueChange?.(multiple ? next : (next[0] ?? null));
    };

    return (
      <ToggleGroupContext.Provider
        value={{
          selected,
          select,
          size,
          variant,
          fluid,
          invalid,
          disabled,
          borderless,
          rounded
        }}>
        <ToggleGroupFrame
          theme={invalid ? "danger" : themeName}
          variant={borderless ? undefined : variant}
          // Space the items like a toggle insets its indicator.
          padding={getToggleInset(size)}
          gap={getToggleInset(size)}
          {...props}
          ref={forwardedRef}
          fluid={fluid}
          borderless={borderless}
          rounded={rounded}
          aria-invalid={invalid || undefined}
          aria-disabled={disabled || undefined}>
          {children}
        </ToggleGroupFrame>
      </ToggleGroupContext.Provider>
    );
  }
);

ToggleGroupFrameImpl.displayName = "ToggleGroup";

export interface ToggleGroupItemProps extends Omit<
  ToggleProps,
  "pressed" | "defaultPressed" | "onPressedChange" | "size" | "fluid"
> {
  /** The value this toggle adds to the group's selection. */
  value: string;
}

/** A `Toggle` whose pressed state is driven by the enclosing `ToggleGroup`. */
const ToggleGroupItem = forwardRef<TamaguiElement, ToggleGroupItemProps>(
  ({ value, disabled, ...props }, forwardedRef) => {
    const group = useContext(ToggleGroupContext);
    if (!group) {
      throw new Error(
        "`ToggleGroup.Item` must be rendered inside `ToggleGroup`"
      );
    }

    // The group frame draws the border and inset, so the item is just its
    // indicator, keeping the group as tall as a standalone toggle.
    const frameBorder =
      group.variant === "outlined" && !group.borderless ? 2 : 1;
    const height =
      getSized(getFormSizeToken(group.size)) -
      2 * (frameBorder + getToggleInset(group.size));

    return (
      <Toggle
        ref={forwardedRef}
        size={group.size}
        invalid={group.invalid}
        variant={group.variant}
        borderless={group.borderless}
        rounded={group.rounded}
        borderWidth={0}
        padding={0}
        {...(!group.rounded && { borderRadius: "tab" })}
        height={height}
        minHeight={height}
        backgroundColor="transparent"
        // The group frame carries the variant's shadow.
        boxShadow="none focus-visible:ring-offset"
        {...(group.fluid && { flexGrow: 1, flexBasis: 0, width: "auto" })}
        {...props}
        disabled={group.disabled || disabled}
        pressed={group.selected.includes(value)}
        onPressedChange={() => group.select(value)}
      />
    );
  }
);

ToggleGroupItem.displayName = "ToggleGroupItem";

/**
 * A row of `Toggle` buttons sharing one sunken frame. Selects a single value
 * by default, or several with `multiple`.
 */
export const ToggleGroup = withStaticProperties(ToggleGroupFrameImpl, {
  Item: ToggleGroupItem
});

/**
 * Flat named exports for React Server Components, which cannot dot into a
 * client module (`ToggleGroup.Item` is undefined on the server).
 */
export { ToggleGroupItem };
