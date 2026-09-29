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
import { useFieldHasValidationMessage } from "@cyclone-ui/field";
import {
  getFormSizeToken,
  getSized,
  type FormControlSize
} from "@cyclone-ui/helpers";
import type { GetProps } from "@tamagui/core";
import {
  createStyledHOC,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { XGroup } from "@tamagui/group";
import { XStack } from "@tamagui/stacks";
import { useCallback, useMemo, useState } from "react";
import { InputValue } from "./InputValue";
import type { InputContextProps, InputVariant } from "./types";
import { getInputSize, InputContext } from "./utilities";

const isFormControlSize = (value: unknown): value is FormControlSize =>
  value === "sm" || value === "md" || value === "lg";

export const ControlUnderline = styled(View, {
  displayName: "ControlUnderline",
  transition: "200ms",
  position: "absolute",
  left: 0,
  bottom: 0,
  width: 0,
  height: "xxs",
  backgroundColor: "accentActive",
  pointerEvents: "none",
  variants: {
    focused: {
      true: {
        width: "100%"
      }
    },

    disabled: {
      true: {
        width: 0,
        backgroundColor: "accentDisabled"
      }
    }
  } as const,
  defaultVariants: {
    focused: false,
    disabled: false
  }
});

// The frame is a plain stack rather than `styled(XGroup)`: a styled layer over
// the `XGroup` HOC compiles its styles to classes and never hands `transition`
// to the inner frame, so the border and focus ring snapped instead of
// animating. The group behavior lives in a `display: contents` `XGroup` inside.
const InputGroup = styled(XStack, {
  displayName: "Input",
  context: InputContext,
  transition: "200ms",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "surfaceElevated",
  borderWidth: 1,
  borderColor: "hairline",
  outlineWidth: 0,
  outlineColor: "transparent",
  boxShadow: "none",
  gap: "zero",
  borderRadius: "control",
  overflow: "hidden",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  variants: {
    // The focus ring is styled by the `.resolve` below because it depends on
    // `variant`.
    focused: {
      true: {
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
        borderColor: "hairline hover:accentHover",
        borderRadius: 0,
        boxShadow: "none"
      }
    },

    // Keep frame dimensions separate from Tamagui's special `size` prop. A
    // `$true` size is consumed before spread variants run, leaving no height.
    // Styled by the `.resolve` below because the geometry depends on
    // `variant` and `circular`.
    frameSize: styled.dynamic<FormControlSize>(),

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor:
          "accentDisabled hover:accentDisabled press:accentDisabled focus:accentDisabled"
      }
    },

    circular: {
      true: {
        borderRadius: 100_000
      }
    }
  } as const,
  defaultVariants: {
    frameSize: "md",
    disabled: false,
    focused: false,
    circular: false,
    variant: "default"
  }
}).resolve(props => {
  const variant = (props.variant ?? "default") as InputVariant;
  const frameSize = props.frameSize ?? "md";
  const sized = isFormControlSize(frameSize)
    ? getInputSize(frameSize, {
        variant,
        circular: Boolean(props.circular)
      })
    : undefined;

  return {
    // Focus ring: the `underline` variant keeps its flat `none` shadow.
    boxShadow: props.focused && variant !== "underline" ? "ringOffset" : undefined,
    paddingHorizontal: sized ? 0 : undefined,
    height: sized?.height,
    minHeight: sized?.minHeight,
    // The `underline` variant owns the radius when set.
    borderRadius: variant === "underline" ? undefined : sized?.borderRadius
  };
});

const InputGroupImpl = createStyledHOC(InputGroup, 
  (
    props: Omit<GetProps<typeof InputGroup>, "onChange" | "onInput"> &
      Partial<InputContextProps>,
    forwardedRef
  ) => {
    const {
      children,
      name,
      size = "md",
      variant = "default",
      onChange,
      onInput,
      onFocus,
      onBlur,
      onMouseDown,
      focused = false,
      disabled = false,
      ...rest
    } = props;
    const [locallyActive, setLocallyActive] = useState(false);
    const frameSize = size;
    const handleFocus = useCallback(
      (event: any) => {
        setLocallyActive(true);
        onFocus?.(event);
      },
      [onFocus]
    );
    const handleBlur = useCallback(
      (event: any) => {
        if (!event.currentTarget?.contains?.(event.relatedTarget)) {
          setLocallyActive(false);
        }
        onBlur?.(event);
      },
      [onBlur]
    );
    // Clicking the frame's padding, separators, or icons focuses the text
    // input, as the frame is not itself focusable.
    const handleMouseDown = useCallback(
      (event: any) => {
        onMouseDown?.(event);
        if (event.defaultPrevented || disabled) {
          return;
        }

        const target = event.target as HTMLElement | null;
        if (target?.closest?.("input, textarea, button, a, [tabindex]")) {
          return;
        }

        const control = (
          event.currentTarget as HTMLElement | null
        )?.querySelector?.<HTMLElement>("input, textarea");
        if (control) {
          event.preventDefault();
          control.focus();
        }
      },
      [disabled, onMouseDown]
    );
    // The frame is not itself focusable, so it tracks focus of the inner
    // input (via bubbling focus events) alongside the controlled `focused`.
    const active = focused || locallyActive;
    const hasValidationMessage = useFieldHasValidationMessage();
    const idleColor = hasValidationMessage ? "accent" : "hairline";
    const focusColor = hasValidationMessage ? "accentActive" : "hairlineActive";

    return (
      <InputContext.Provider
        // Only context keys: a styled context treats every key in its value
        // as a context prop, so spreading all props swallowed `aria-*` and
        // other DOM attributes before they reached the element.
        name={name}
        circular={Boolean(rest.circular)}
        size={size}
        variant={variant}
        focused={active}
        hasValidationMessage={hasValidationMessage}
        disabled={disabled}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}>
        <InputGroup
          ref={forwardedRef}
          {...rest}
          frameSize={frameSize}
          variant={variant}
          focused={active}
          hasValidationMessage={hasValidationMessage}
          disabled={disabled}
          borderColor={`${active ? focusColor : idleColor} group-hover/field:${disabled ? "accentDisabled" : active ? focusColor : "accentHover"}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseDown={handleMouseDown}
          transition="200ms">
          <XGroup display="contents" disabled={disabled}>
            {children}
            {variant === "underline" && (
              <ControlUnderline
                bottom={-1}
                focused={active}
                disabled={disabled}
                backgroundColor={disabled ? "accentDisabled" : focusColor}
              />
            )}
          </XGroup>
        </InputGroup>
      </InputContext.Provider>
    );
  },
  { displayName: "Input" }
);

const InputSeparator = styled(View, {
  displayName: "Input",
  context: InputContext,
  transition: "200ms",
  // Drawn as a filled 1px bar rather than a left border: `XGroup.Item` zeroes
  // `borderLeftWidth` on every non-first item, which hid the line.
  backgroundColor: "hairline hover:hairlineHover",
  width: 1,
  flexShrink: 0,
  height: "60%",
  marginVertical: "zero",
  variants: {
    focused: {
      true: {
        backgroundColor: "hairlineActive"
      }
    },

    hasValidationMessage: {
      true: {
        backgroundColor: "accent"
      }
    },

    variant: {
      default: {},
      floating: {},
      underline: {
        width: 0
      }
    },

    disabled: {
      true: {
        backgroundColor:
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

const InputSeparatorImpl = createStyledHOC(InputSeparator, 
  (props, forwardedRef) => {
    const { disabled, focused, hasValidationMessage } =
      InputContext.useStyledContext();
    const idleColor = hasValidationMessage ? "accent" : "hairline";
    const focusColor = hasValidationMessage ? "accentActive" : "hairlineActive";
    const hoverColor = hasValidationMessage ? "accentHover" : "hairlineHover";

    return (
      <XGroup.Item>
        <InputSeparator
          ref={forwardedRef}
          backgroundColor={`${focused ? focusColor : idleColor} group-hover/field:${disabled ? "hairlineInactive" : focused ? focusColor : hoverColor}`}
          hasValidationMessage={hasValidationMessage}
          {...props}
        />
      </XGroup.Item>
    );
  },
  { displayName: "Input" }
);

const InputTextBox = styled(XStack, {
  displayName: "Input",
  context: InputContext,
  height: "100%",
  flex: 1,
  minWidth: 0,
  alignItems: "center",
  gap: "zero"
});

const InputTextBoxImpl = createStyledHOC(InputTextBox, 
  ({ children, ...props }, forwardedRef) => {
    return (
      <XGroup.Item flex={1} minWidth={0}>
        <InputTextBox ref={forwardedRef} {...props}>
          {children}
        </InputTextBox>
      </XGroup.Item>
    );
  },
  { displayName: "Input" }
);

const InputValueImpl = createStyledHOC(InputValue, 
  ({ children, enterKeyHint = "done", value, ...props }, forwardedRef) => {
    const { onChange: contextOnChange, onInput: contextOnInput } =
      InputContext.useStyledContext();

    return (
      <View position="relative" height="100%" flex={1} minWidth={0}>
        <InputValue
          ref={forwardedRef}
          {...props}
          placeholderTextColor="onAccentDisabled"
          onChange={props.onChange ?? contextOnChange}
          onInput={props.onInput ?? contextOnInput}
          value={value}
          enterKeyHint={enterKeyHint}>
          {children}
        </InputValue>
      </View>
    );
  },
  { displayName: "InputValue" }
);

const InputTrigger = createStyledHOC(Button, 
  (
    { children, size: sizeProp, flexBasis: _flexBasis, ...props }: GetProps<typeof Button> & {
  forcePlacement?: GetProps<typeof XGroup.Item>["forcePlacement"];
  size?: FormControlSize;
},
    forwardedRef
  ) => {
    const { circular, size } = InputContext.useStyledContext();
    const controlSize = getFormSizeToken(sizeProp ?? size);
    const frameSize = useMemo(() => getSized(controlSize), [controlSize]);

    const adjustedTrigger = useMemo(
      // Button.Icon applies its standard six-step glyph reduction. A frame
      // two steps below the control therefore matches Field.Icon glyphs.
      () => getSized(controlSize, { shift: -2 }),
      [controlSize]
    );

    return (
      <XGroup.Item flexShrink={0}>
        <View
          width={frameSize}
          minWidth={frameSize}
          paddingHorizontal="xl"
          display="flex"
          flexShrink={0}
          alignItems="center"
          justifyContent="center">
          <Button
            ref={forwardedRef}
            variant="link"
            borderRadius={circular ? 100_000 : "button"}
            noPadding={true}
            color="onAccent"
            {...props}
            width={props.width ?? adjustedTrigger}
            minWidth={props.minWidth ?? props.width ?? adjustedTrigger}
            size={adjustedTrigger}>
            {children}
          </Button>
        </View>
      </XGroup.Item>
    );
  },
  { displayName: "Input" }
);

export type InputValueProps = GetProps<typeof InputValue>;

export const Input = withStaticProperties(InputGroupImpl, {
  TextBox: withStaticProperties(InputTextBoxImpl, {
    Value: InputValueImpl
  }),
  Separator: InputSeparatorImpl,
  Trigger: withStaticProperties(InputTrigger, {
    Icon: Button.Icon,
    Text: Button.Text
  })
});

export type InputProps = GetProps<typeof Input>;
