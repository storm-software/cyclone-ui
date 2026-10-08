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

/** Gap between the frame and the inner indicator at the medium size. */
const BASE_INSET = 2.5;

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
  borderColor: "hairline hover:hairlineHover",
  backgroundColor: "surfaceSunken hover:surfaceSunkenHover",
  borderRadius: "control",
  outlineStyle: "none",
  boxShadow: "none focus-visible:ringOffset",
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
          padding: BASE_INSET * getFormSizeScale(size)
        };
      })
    ),

    fluid: {
      true: {
        alignSelf: "stretch",
        width: "100%"
      }
    },

    invalid: {
      true: {
        borderColor: "hairline hover:hairlineHover"
      }
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
  borderRadius: "trigger",
  borderWidth: 1,
  borderColor: "transparent",
  backgroundColor: "transparent",
  boxShadow: "none",

  variants: {
    active: {
      true: {
        backgroundColor:
          "surfaceElevated group-hover/toggle:surfaceElevatedHover",
        boxShadow: "sm",
        borderWidth: 1,
        borderColor: "hairline group-hover/toggle:hairlineHover"
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
  color: "inkSubtle group-hover/toggle:inkBody",

  variants: {
    textSize: styled.dynamic<FormControlSize>(
      formSizeVariants((size: FormControlSize, env: StyleEnv) => {
        const style = getFormFontSize(size, env);

        return {
          // The resolved `body` family isn't configured, so pin the button font.
          fontFamily: "button",
          fontWeight: style.fontWeight,
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
        color: "inkEmphasis"
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
   * The toggle content. Strings are wrapped in styled text; pass a function
   * to render different content (e.g. "On"/"Off" or icons) per state.
   */
  children?: ReactNode | ((pressed: boolean) => ReactNode);
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
      invalid = false,
      disabled = false,
      borderless = false,
      circular = false,
      rounded = false,
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

    return (
      <ToggleFrame
        theme={invalid ? "danger" : themeName}
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
              backgroundColor:
                "surfaceFloating group-hover/toggle:surfaceFloatingHover"
            })}>
          {typeof content === "string" || typeof content === "number" ? (
            <ToggleText textSize={size} active={pressed}>
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
