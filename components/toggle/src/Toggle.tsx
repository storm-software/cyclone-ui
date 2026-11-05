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

import type { FormControlSize, StyleEnv } from "@cyclone-ui/helpers";
import {
  formSizeVariants,
  getFormFontSize,
  getFormSizeScale,
  getFormSizeToken,
  getSized
} from "@cyclone-ui/helpers";
import type { GetProps, TamaguiElement } from "@tamagui/core";
import { styled, Text, useThemeName, View } from "@tamagui/core";
import type { ReactNode } from "react";
import { forwardRef, useCallback, useState } from "react";

export type ToggleSize = FormControlSize;
export type ToggleVariant = "primary" | "secondary" | "tertiary" | "outlined";

// `dark_brand` / `brand` -> `brand`; `dark`, `base` and `dark_base` are
// uncolored.
const isUncoloredTheme = (themeName: string | null | undefined) => {
  const parts = themeName?.split("_") ?? [];
  const color = parts.length > 1 ? parts[1] : parts[0];

  return !color || color === "base" || color === "light" || color === "dark";
};

// The unpressed text color on the `primary` / `secondary` frames.
// `on-secondary` is faint on the uncolored themes' light `secondary`, so those
// use `primary` there, as `Button` does.
const getToggleForeground = (
  variant: ToggleVariant | undefined,
  themeName: string | null | undefined
) =>
  variant === "primary"
    ? "on-primary"
    : variant === "secondary"
      ? isUncoloredTheme(themeName)
        ? "primary"
        : "on-secondary"
      : undefined;

/** Gap between the frame and the inner indicator at the medium size. */
const BASE_INSET = 2.5;

/** The gap between the frame and the inner indicator at `size`. */
export const getToggleInset = (size: FormControlSize) =>
  BASE_INSET * getFormSizeScale(size);

const ToggleFrame = styled(View, {
  displayName: "Toggle",
  render: "button",
  group: "toggle",
  transition: "200ms",
  flexDirection: "row",
  alignItems: "stretch",
  // Hug the content without overriding the parent's cross-axis alignment.
  width: "fit-content",
  borderWidth: 1,
  borderColor: "hairline",
  backgroundColor: "sunken hover:sunken-hovered",
  borderRadius: "tabs",
  outlineStyle: "none",
  boxShadow: "none focus-visible:ring-offset",
  cursor: "pointer",

  variants: {
    // Not `size`: Tamagui treats that as a width+height shorthand.
    // `styled.dynamic` re-brands the helper's carrier with this package's
    // `@tamagui/web` symbol type (runtime no-op).
    frameSize: styled.dynamic<FormControlSize>(
      formSizeVariants((size: FormControlSize) => {
        const height = getSized(getFormSizeToken(size));

        return {
          height,
          minHeight: height,
          padding: getToggleInset(size)
        };
      })
    ),

    fluid: {
      true: {
        alignSelf: "stretch",
        width: "100%"
      }
    },

    // `Button`'s variants on the frame; the pressed indicator stays a raised
    // surface. Unset keeps the sunken frame.
    variant: {
      primary: {
        backgroundColor: "primary hover:primary-hovered",
        // Transparent rather than removed, so the indicator keeps its size.
        borderColor: "transparent"
      },
      secondary: {
        backgroundColor: "secondary hover:secondary-hovered",
        borderColor: "border",
        boxShadow: "color-shadow-resting-raised focus-visible:ring-offset"
      },
      tertiary: {
        backgroundColor: "surface hover:surface-hovered",
        borderColor: "hairline",
        boxShadow: "color-shadow-resting-raised focus-visible:ring-offset"
      },
      outlined: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "primary hover:primary-hovered"
      }
    },

    // Shown by the `danger` theme, which recolors the variant's border too.
    invalid: {
      true: {}
    },

    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed"
      }
    },

    // Keep the 1px border (transparent) so sizes match the bordered toggle.
    borderless: {
      true: {
        borderColor: "transparent hover:transparent",
        backgroundColor: "transparent hover:transparent"
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000
      }
    },

    rounded: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,

  defaultVariants: {
    frameSize: "md",
    fluid: false,
    invalid: false,
    disabled: false,
    borderless: false,
    circular: false,
    rounded: false
  }
});

const ToggleIndicator = styled(View, {
  displayName: "ToggleIndicator",

  transition: "400ms",
  flexGrow: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "lg",
  paddingHorizontal: "2xl",
  borderRadius: "tab",
  borderWidth: 1,
  borderColor: "transparent",
  backgroundColor: "transparent",
  boxShadow: "none",

  variants: {
    active: {
      true: {
        backgroundColor: "surface group-hover/toggle:surface-hovered",
        boxShadow: "sm",
        borderWidth: 1,
        borderColor: "hairline"
      }
    },

    borderless: {
      true: {
        borderColor: "transparent group-hover/toggle:transparent"
      }
    },

    circular: {
      true: {
        borderRadius: 1000_000_000,
        paddingHorizontal: 0
      }
    },

    rounded: {
      true: {
        borderRadius: 1000_000_000
      }
    }
  } as const,

  defaultVariants: {
    active: false,
    borderless: false,
    circular: false,
    rounded: false
  }
});

export const ToggleText = styled(Text, {
  displayName: "ToggleText",
  transition: "200ms",
  userSelect: "none",
  whiteSpace: "nowrap",
  color: "subtle group-hover/toggle:ink",

  variants: {
    textSize: styled.dynamic<FormControlSize>(
      formSizeVariants((size: FormControlSize, env: StyleEnv) => {
        const style = getFormFontSize(size, env, "sm");

        return {
          fontFamily: "display",
          fontWeight: "600",
          letterSpacing: style.letterSpacing,
          fontSize: style.fontSize,
          // Tamagui v3 reads a unitless `lineHeight` as a multiplier.
          lineHeight:
            typeof style.lineHeight === "number"
              ? `${style.lineHeight}px`
              : style.lineHeight
        };
      })
    ),

    active: {
      true: {
        color: "emphasis"
      }
    }
  } as const,

  defaultVariants: {
    textSize: "md",
    active: false
  }
});

export interface ToggleProps extends Omit<
  GetProps<typeof ToggleFrame>,
  "children" | "role" | "onPress" | "frameSize"
> {
  /** Whether the toggle is on. Makes the toggle controlled. */
  pressed?: boolean;
  /** The initial state when uncontrolled. */
  defaultPressed?: boolean;
  /** Called with the new state when the toggle is pressed. */
  onPressedChange?: (pressed: boolean) => void;
  /** The control size. */
  size?: ToggleSize;
  /**
   * The frame's colors: `primary` fills it with `primary`, `secondary` with
   * `secondary` and a `border` border, `tertiary` with `surface` and a
   * `hairline` border, and `outlined` draws a 2px `primary` border. Unset
   * keeps the sunken frame. Ignored when `borderless`.
   */
  variant?: ToggleVariant;
  /**
   * The toggle content. Strings are wrapped in styled text; pass a function
   * to render different content (e.g. "On"/"Off" or icons) per state.
   */
  children?: ReactNode | ((pressed: boolean) => ReactNode);
  /** The indicator color while pressed and `borderless`. Defaults to `subtle`. */
  pressedBackgroundColor?: string;
}

/**
 * A button that can be toggled on or off. The pressed state is shown by a
 * raised indicator inside a sunken frame.
 */
export const Toggle = forwardRef<TamaguiElement, ToggleProps>(
  (
    {
      pressed: pressedProp,
      defaultPressed = false,
      onPressedChange,
      size = "md",
      variant,
      invalid = false,
      disabled = false,
      borderless = false,
      circular = false,
      rounded = false,
      pressedBackgroundColor = "subtle",
      children,
      ...props
    },
    forwardedRef
  ) => {
    const [uncontrolledPressed, setUncontrolledPressed] =
      useState(defaultPressed);
    const controlled = pressedProp !== undefined;
    const pressed = controlled ? pressedProp : uncontrolledPressed;

    // Always pass a theme: switching from none to a name remounts children.
    const themeName = useThemeName();

    const handlePress = useCallback(() => {
      const next = !pressed;
      if (!controlled) {
        setUncontrolledPressed(next);
      }
      onPressedChange?.(next);
    }, [controlled, onPressedChange, pressed]);

    // A circle keeps its square box instead of following `width`/`fluid`.
    const circleSize = circular ? getSized(getFormSizeToken(size)) : undefined;

    const content =
      typeof children === "function" ? children(pressed) : children;
    // The pressed text sits on the indicator instead.
    const foreground =
      pressed || borderless
        ? undefined
        : getToggleForeground(
            variant,
            props.theme ?? (invalid ? "danger" : themeName)
          );

    return (
      <ToggleFrame
        theme={invalid ? "danger" : themeName}
        // Before `props`, so explicit colors (e.g. `ToggleGroup.Item`'s) win.
        variant={borderless ? undefined : variant}
        {...props}
        ref={forwardedRef}
        frameSize={size}
        invalid={invalid}
        disabled={disabled}
        borderless={borderless}
        circular={circular}
        rounded={rounded}
        {...(circular && {
          width: circleSize,
          minWidth: circleSize,
          alignSelf: "auto",
          flexGrow: 0
        })}
        aria-pressed={pressed}
        aria-invalid={invalid || undefined}
        onPress={disabled ? undefined : handlePress}>
        <ToggleIndicator
          active={pressed}
          borderless={borderless}
          circular={circular}
          rounded={rounded}
          {...(borderless &&
            pressed && {
              backgroundColor: `${pressedBackgroundColor} group-hover/toggle:${pressedBackgroundColor}`
            })}>
          {typeof content === "string" || typeof content === "number" ? (
            <ToggleText
              textSize={size}
              active={pressed}
              {...(foreground && { color: foreground })}>
              {content}
            </ToggleText>
          ) : (
            content
          )}
        </ToggleIndicator>
      </ToggleFrame>
    );
  }
);

Toggle.displayName = "Toggle";
