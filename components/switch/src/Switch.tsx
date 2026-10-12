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
  formSizeVariants,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldHasValidationMessage,
  useFieldLabelDefaults,
  useFormControl,
  type FormControlSize
} from "@cyclone-ui/helpers";
import type { ThemeableIconProps } from "@cyclone-ui/themeable-icon";
import { ThemeableIcon } from "@cyclone-ui/themeable-icon";
import type { ColorTokens, GetProps } from "@tamagui/core";
import {
  createStyledContext,
  createStyledHOC,
  getVariableValue,
  styled,
  View,
  withStaticProperties
} from "@tamagui/core";
import { getSize } from "@tamagui/get-token";
import { createSwitch } from "@tamagui/switch";
import { useMemo } from "react";

// A switch's field label sits compactly beside it.
const INLINE_LABEL = { inline: { alignContent: "center" } } as const;

export interface SwitchContextProps {
  size: FormControlSize;
  name: string;
  checked: boolean;
  required: boolean;
  disabled: boolean;
  hasValidationMessage: boolean;
}

export const SwitchContext = createStyledContext<
  SwitchContextProps,
  "size" | "name" | "checked" | "required" | "disabled" | "hasValidationMessage"
>(
  {
    size: "md",
    name: "",
    checked: false,
    required: false,
    disabled: false,
    hasValidationMessage: false
  } as SwitchContextProps,
  {
    // Only the keys that styled consumers declare as variants; v3 forwards every
    // injected context key that is not a variant to the DOM element.
    keys: ["size", "disabled", "hasValidationMessage"]
  }
);

const getSwitchHeight = (val: FormControlSize) =>
  Math.round(getVariableValue(getSize(getFormSizeToken(val, "compact"))));

const getSwitchWidth = (val: FormControlSize) => getSwitchHeight(val) * 2;

const SwitchFrame = styled(View, {
  displayName: "Switch",
  render: "button",
  context: SwitchContext,
  transition: "200ms",
  borderRadius: 100_000,
  backgroundColor: "surfaceElevated",
  borderWidth: 1,
  borderColor:
    "border hover:hovered focus:active focus-visible:active",
  boxShadow: "none focus:ringOffset focus-visible:ringOffset",
  tabIndex: 0,
  variants: {
    // `styled.dynamic` re-brands the helper's carrier with this package's
    // `@tamagui/web` symbol type (runtime no-op; helpers resolves another copy).
    size: styled.dynamic<FormControlSize>(
      formSizeVariants(val => {
        const height = getSwitchHeight(val);
        const width = getSwitchWidth(val);

        return {
          height,
          minHeight: height,
          width
        };
      })
    ),

    hasValidationMessage: {
      true: {
        borderColor: "accent hover:hovered"
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed",
        borderColor:
          "disabled hover:disabled press:disabled focus:disabled"
      }
    }
  } as const,
  defaultVariants: {
    size: "md",
    disabled: false
  }
});

const SwitchThumb = styled(View, {
  displayName: "SwitchThumb",
  theme: "base",
  transition: "200ms",
  backgroundColor: "subtle",
  borderRadius: 100_000,
  borderWidth: 0,
  justifyContent: "center",
  alignItems: "center",
  variants: {
    checked: {
      true: {
        backgroundColor: "subtle"
      }
    },

    size: styled.dynamic<FormControlSize>(
      formSizeVariants(val => {
        const height = getSwitchHeight(val);

        return {
          height: height - 2,
          width: height - 2
        };
      })
    )
  } as const,
  defaultVariants: {
    size: "md",
    checked: false
  }
});

const SwitchThumbImpl = createStyledHOC(
  SwitchThumb,
  (props, forwardedRef) => {
    return <SwitchThumb ref={forwardedRef} {...props} />;
  },
  {
    displayName: "SwitchThumb"
  }
);

const SwitchIconFrame = styled(View, {
  position: "absolute",
  context: SwitchContext,
  height: "100%",
  justifyContent: "center",
  alignItems: "center",

  variants: {
    size: {
      sm: {},
      md: {},
      lg: {}
    },

    // Styled by the `.resolve` below because the offset depends on `size`.
    placement: styled.dynamic<"right" | "left">()
  } as const,

  defaultVariants: {
    placement: "right"
  }
}).resolve(props => {
  const space = getSpaced(
    getFormSizeToken(props.size as FormControlSize | undefined, "compact"),
    {
      scale: 0.35
    }
  );

  return (props.placement ?? "right") === "left"
    ? { left: space }
    : { right: space };
});

const SwitchIcon = createStyledHOC(
  SwitchIconFrame,
  (
    {
      children,
      size,
      color,
      ...props
    }: GetProps<typeof SwitchIconFrame> & {
      size?: FormControlSize;
      color?: ColorTokens;
    },
    forwardedRef
  ) => {
    const { disabled, size: contextSize } = SwitchContext.useStyledContext();
    const adjusted = useMemo(
      () =>
        getSized(getFormSizeToken(size ?? contextSize, "compact"), {
          shift: -6
        }),
      [size, contextSize]
    );

    return (
      <SwitchIconFrame
        theme="base"
        ref={forwardedRef}
        zIndex="20"
        alignItems="center"
        flexGrow={0}
        flexShrink={1}
        borderColor="group-hover/field:borderActive">
        <ThemeableIcon
          {...props}
          theme="base"
          disabled={false}
          size={adjusted}
          color={
            (color ||
              (disabled
                ? "disabled"
                : "onAccent")) as ThemeableIconProps["color"]
          }>
          {children}
        </ThemeableIcon>
      </SwitchIconFrame>
    );
  },
  {
    displayName: "SwitchIcon"
  }
);

const BaseSwitch = createSwitch({
  Frame: SwitchFrame,
  Thumb: SwitchThumbImpl
});

const BaseSwitchImpl = createStyledHOC(
  BaseSwitch,
  (
    allProps: GetProps<typeof BaseSwitch> & {
      focused?: boolean;
      size?: FormControlSize;
    },
    forwardedRef
  ) => {
    // Inside a form control (such as `Field`), any prop left unset falls back
    // to the control's state, which connects the switch to the form.
    const formControl = useFormControl();
    useFieldLabelDefaults(INLINE_LABEL);
    const {
      name = formControl?.name,
      size = formControl?.size ?? "md",
      disabled = formControl?.disabled ?? false,
      checked = formControl?.value || false,
      defaultChecked = formControl
        ? formControl.defaultValue || false
        : undefined,
      focused = formControl?.focused ?? false,
      onCheckedChange = formControl?.onChange,
      onFocus = formControl?.onFocus,
      onBlur = formControl?.onBlur,
      children,
      ...props
    } = allProps;
    const hasValidationMessage = useFieldHasValidationMessage();
    const idleColor = hasValidationMessage ? "accent" : "border";
    const focusColor = hasValidationMessage ? "active" : "borderActive";

    return (
      <SwitchContext.Provider
        name={name}
        size={size}
        checked={checked}
        hasValidationMessage={hasValidationMessage}
        disabled={disabled}>
        <BaseSwitch
          ref={forwardedRef}
          activeStyle={{
            backgroundColor: "accent"
          }}
          {...props}
          id={name}
          size={size}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          onFocus={onFocus}
          onBlur={onBlur}
          // In v2 the `hasValidationMessage` / `disabled` variants came after
          // these props and replaced their base (and, for `disabled`, focus)
          // color. v3 call-site values outrank variants, so leave those
          // clauses out here and let the variants supply them.
          borderColor={[
            disabled || hasValidationMessage
              ? undefined
              : focused
                ? focusColor
                : idleColor,
            // A call-site base replaces every lower-tier clause in v3, so the
            // v2 frame/variant hover color is restated.
            `hover:${disabled ? "disabled" : "hovered"}`,
            `group-hover/field:${disabled ? "disabled" : focused ? focusColor : "hovered"}`,
            disabled ? undefined : `focus:${focusColor}`,
            `focus-visible:${focusColor}`
          ]
            .filter(Boolean)
            .join(" ")}
          boxShadow={
            size === "sm"
              ? "focus:ringSubtleOffset focus-visible:ringSubtleOffset"
              : "focus:ringOffset focus-visible:ringOffset"
          }
          // `createSwitch` types its result with the default frame's props, but
          // this `SwitchFrame` variant still reaches the frame at runtime.
          {...({ hasValidationMessage } as object)}
          disabled={disabled}>
          {children}
          <BaseSwitch.Thumb />
        </BaseSwitch>
      </SwitchContext.Provider>
    );
  },
  {
    displayName: "Switch"
  }
);

export const Switch = withStaticProperties(BaseSwitchImpl, {
  Icon: SwitchIcon
});
