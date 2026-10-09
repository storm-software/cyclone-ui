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
import type { FieldLabelPlacement } from "@cyclone-ui/field";
import {
  FieldNotchedOutline,
  useFieldHasValidationMessage,
  useFieldLabelPlacement
} from "@cyclone-ui/field";
import type { FormControlSize } from "@cyclone-ui/helpers";
import { getFormSizeToken, getSized } from "@cyclone-ui/helpers";
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
  // Grows outward from the center (MUI-style): `left` and `width` animate
  // together. Not `scaleX`, which misanimates when it starts from 0.
  left: "50%",
  bottom: 0,
  width: 0,
  height: "xxs",
  backgroundColor: "accentActive",
  pointerEvents: "none",
  variants: {
    focused: {
      true: {
        left: 0,
        width: "100%"
      }
    },

    disabled: {
      true: {
        left: "50%",
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

    // The radius and focus ring are styled by the `.resolve` below, as they
    // depend on the size.
    variant: {
      outlined: {},
      underlined: {
        backgroundColor: "transparent",
        borderWidth: 0,
        borderBottomWidth: 1
      },
      inlined: {}
    },

    // Keep frame dimensions separate from Tamagui's special `size` prop. A
    // `$true` size is consumed before spread variants run, leaving no height.
    // Styled by the `.resolve` below because the geometry depends on
    // `variant`, `labelPlacement` and `circular`.
    frameSize: styled.dynamic<FormControlSize>(),

    labelPlacement: styled.dynamic<FieldLabelPlacement>(),

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
    variant: "outlined"
  }
}).resolve(props => {
  const variant = (props.variant ?? "outlined") as InputVariant;
  const frameSize = props.frameSize ?? "md";
  const sized = isFormControlSize(frameSize)
    ? getInputSize(frameSize, {
        labelPlacement: props.labelPlacement as FieldLabelPlacement | undefined,
        circular: Boolean(props.circular)
      })
    : undefined;
  // `FieldNotchedOutline` draws a notched field's border instead; the
  // padding keeps the content where the border left it.
  const notched = props.labelPlacement === "border";

  return {
    // Focus ring: underlined and inlined inputs show their underline instead.
    boxShadow:
      props.focused && (variant === "outlined" || variant === "inlined")
        ? "ringOffset"
        : undefined,
    paddingHorizontal: sized ? (notched ? 1 : 0) : undefined,
    paddingVertical: notched ? 1 : undefined,
    borderWidth: notched ? 0 : undefined,
    height: sized?.height,
    minHeight: sized?.minHeight,
    // underlined inputs round only their top corners; inlined ones own theirs.
    ...(variant === "outlined" || variant === "inlined"
      ? { borderRadius: sized?.borderRadius }
      : variant === "underlined"
        ? {
            borderTopLeftRadius: sized?.borderRadius,
            borderTopRightRadius: sized?.borderRadius,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }
        : {})
  };
});

const InputGroupImpl = createStyledHOC(
  InputGroup,
  (
    props: Omit<GetProps<typeof InputGroup>, "onChange" | "onInput"> &
      Partial<InputContextProps>,
    forwardedRef
  ) => {
    const {
      children,
      name,
      size = "md",
      variant = "outlined",
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
    const labelPlacement = useFieldLabelPlacement();
    const idleColor = hasValidationMessage ? "accent" : "hairline";
    const focusColor = hasValidationMessage ? "accentActive" : "hairlineActive";
    const borderColor = `${active ? focusColor : idleColor} group-hover/field:${disabled ? "accentDisabled" : active ? focusColor : "accentHover"}`;

    return (
      <InputContext.Provider
        // Only context keys: a styled context treats every key in its value
        // as a context prop, so spreading all props swallowed `aria-*` and
        // other DOM attributes before they reached the element.
        name={name}
        circular={Boolean(rest.circular)}
        size={size}
        variant={variant}
        labelPlacement={labelPlacement}
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
          labelPlacement={labelPlacement}
          focused={active}
          hasValidationMessage={hasValidationMessage}
          disabled={disabled}
          borderColor={borderColor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseDown={handleMouseDown}
          transition="200ms">
          <XGroup display="contents" disabled={disabled}>
            {children}
            {variant === "underlined" && (
              <ControlUnderline
                bottom={-1}
                focused={active}
                disabled={disabled}
                backgroundColor={disabled ? "accentDisabled" : focusColor}
              />
            )}
            {labelPlacement === "border" && (
              <FieldNotchedOutline
                borderColor={borderColor}
                borderRadius={rest.circular ? 100_000 : "control"}
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
  // Fades in over 200ms when the separator mounts. The object form with an
  // `enter` key keeps a hover/focus restyle during the fade from snapping it
  // to full opacity: Tamagui only re-renders (instead of emitting styles with
  // the mount-time "no animation" flag) when `transition` names `enter`.
  transition: { duration: "200ms", enter: "200ms" },
  opacity: "enter:0",
  // Drawn as a underlined 1px bar rather than a left border: `XGroup.Item` zeroes
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
      outlined: {},
      underlined: {
        width: 0
      },
      inlined: {}
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
    variant: "outlined"
  }
});

const InputSeparatorImpl = createStyledHOC(
  InputSeparator,
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

const InputTextBoxImpl = createStyledHOC(
  InputTextBox,
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

const InputValueImpl = createStyledHOC(
  InputValue,
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

const InputTrigger = createStyledHOC(
  Button,
  (
    {
      children,
      size: sizeProp,
      flexBasis: _flexBasis,
      ...props
    }: GetProps<typeof Button> & {
      forcePlacement?: GetProps<typeof XGroup.Item>["forcePlacement"];
      size?: FormControlSize;
    },
    forwardedRef
  ) => {
    const { circular, size } = InputContext.useStyledContext();
    const controlSize = getFormSizeToken(sizeProp ?? size);
    const frameSize = useMemo(() => getSized(controlSize), [controlSize]);

    const adjustedTrigger = useMemo(
      // Button.Icon applies its inlined six-step glyph reduction. A frame
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
