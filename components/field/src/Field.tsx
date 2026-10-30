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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import type {
  FieldControlOptions,
  FieldLabelDefaults,
  FieldLabelVariant,
  FieldVariant,
  FormControlSize,
  FormControlState,
  StyleEnv
} from "@cyclone-ui/helpers";
import {
  FormControlContext,
  getFieldLabelInset,
  getFontSized,
  getFormFontScale,
  getFormFontSize,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced,
  useFieldHasStartIcon,
  useFieldIconColor,
  useFieldLabelFloated,
  useFieldLabelPlacement,
  useFormControl
} from "@cyclone-ui/helpers";
import { Asterisk, X } from "@cyclone-ui/icons";
import { Link } from "@cyclone-ui/link";
import type { SpinnerProps } from "@cyclone-ui/spinner";
import { Spinner } from "@cyclone-ui/spinner";
import type { FieldProviderOptions } from "@cyclone-ui/state/form";
import {
  FieldApi,
  FieldProvider,
  useFieldActions,
  useFieldRef,
  ValidationCause
} from "@cyclone-ui/state/form";
import { getIconByTheme } from "@cyclone-ui/themeable-icon";
import { Tooltip } from "@cyclone-ui/tooltip";
import { ValidationText } from "@cyclone-ui/validation-text";
import type { ValidationDetail as ValidationDetails } from "@stryke/types/validations";
import type {
  GetProps,
  TamaguiTextElement,
  TamaguiWebElement
} from "@tamagui/core";
import {
  createStyledHOC,
  getVariableValue,
  styled,
  Text,
  Theme,
  useComposedRefs,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Label as TamaguiLabel } from "@tamagui/label";
import { XStack, YStack } from "@tamagui/stacks";
// Lets TypeScript name `GetFontSizedInput` (SizableText's `size` type) in
// this package's declarations.
import type {} from "@tamagui/get-font-sized";
import { SizableText } from "@tamagui/text";
import type { ReactNode } from "react";
import {
  cloneElement,
  createContext,
  isValidElement,
  use,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { StyleSheet } from "react-native";

export {
  FieldNotchedOutline,
  getFieldLabelInset,
  useFieldHasStartIcon,
  useFieldHasValidationMessage,
  useFieldIconColor,
  useFieldLabelPlacement,
  useFieldShouldShowPlaceholder,
  useFieldVariant
} from "@cyclone-ui/helpers";
export type {
  FieldLabelPlacement,
  FieldLabelVariant,
  FieldVariant
} from "@cyclone-ui/helpers";

/**
 * Get the enclosing field's form control state; Field's parts always render
 * inside a `Field`, which provides it.
 */
const useFieldPresentation = () => useFormControl() as FormControlState;

/**
 * Get the id of a field's label element.
 *
 * @remarks
 * Controls that are not labelable HTML elements (for example a `role="slider"`
 * thumb) cannot use the label's `htmlFor`, so they reference this id with
 * `aria-labelledby` instead.
 *
 * @param name - The field name.
 * @returns The label element id.
 */
export const getFieldLabelId = (name: string) => `${name}-label`;

const FieldDetailsContext = createContext<ReactNode>(null);
const FieldDetailsSetterContext = createContext<(details: ReactNode) => void>(
  () => undefined
);

const FieldGroupFrame = styled(YStack, {
  displayName: "Field",
  transition: "200ms",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  display: "flex",
  position: "relative",
  borderRadius: "control",

  variants: {
    orientation: {
      vertical: {
        flexDirection: "column",
        gap: "2xl"
      },
      horizontal: {
        flexDirection: "row",
        gap: "sm"
      }
    },

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed"
      }
    },

    variant: {
      outlined: {},
      underlined: {
        boxShadow: "none focus:none focus-visible:none"
      },
      inlined: {}
    }
  } as const,

  defaultVariants: {
    orientation: "vertical",
    disabled: false,
    variant: "outlined"
  }
});

/**
 * A local `styled.dynamic` carrier for the form size contract.
 *
 * @remarks
 * `formSizeVariants` from `@cyclone-ui/helpers` is typed against the helpers
 * package's own `@tamagui/core` copy, whose `styled.dynamic` brand does not
 * match this package's copy, so its variants would not type here.
 */
const formSizeDynamic = (
  style: (size: FormControlSize, env: StyleEnv) => object | null | undefined
) =>
  styled.dynamic<FormControlSize>((size, env) =>
    size === "sm" || size === "md" || size === "lg"
      ? (style(size, env) as Record<string, any> | null | undefined)
      : undefined
  );

const getFieldDetailsFontSize = (env: StyleEnv) => {
  if (!env.font) {
    return;
  }

  const font = getFontSized(true, env);
  const fontSize = Number(getVariableValue(font.fontSize) ?? 1);
  const lineHeight = Number(getVariableValue(font.lineHeight) ?? 1);

  return {
    fontSize,
    lineHeight,
    letterSpacing: font.letterSpacing,
    textTransform: font.textTransform,
    fontStyle: font.fontStyle
  };
};

/**
 * The form font for a control size, scaled from the `token` step. Tamagui v3
 * reads a unitless `lineHeight` as a multiplier, so pin the pixel leading.
 */
const getFormFontStyle = (
  size: FormControlSize,
  env: StyleEnv,
  token = "sm"
) => {
  const style = getFormFontSize(size, env, token);

  return {
    fontFamily: style.fontFamily,
    fontStyle: style.fontStyle,
    letterSpacing: style.letterSpacing,
    textTransform: style.textTransform,
    color: style.color,
    fontSize: style.fontSize,
    lineHeight:
      typeof style.lineHeight === "number"
        ? `${style.lineHeight}px`
        : style.lineHeight
  };
};

const FieldValidationText = styled(ValidationText, {
  displayName: "FieldDetails",
  fontStyle: "italic",
  fontFamily: "caption",
  fontWeight: "medium",
  marginTop: "lg",

  variants: {
    size: formSizeDynamic((size, env) => {
      const style = getFieldDetailsFontSize(env);
      const scale = getFormFontScale(size);

      return {
        letterSpacing: style?.letterSpacing,
        textTransform: style?.textTransform,
        fontStyle: style?.fontStyle,
        fontSize: style ? style.fontSize * scale : undefined,
        lineHeight: style ? `${style.lineHeight * scale}px` : undefined
      };
    }),

    disabled: {
      true: {
        userSelect: "none",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    size: "md",
    disabled: false
  }
});

const FieldValidationTextImpl = createStyledHOC(
  FieldValidationText,
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    const field = FieldApi.use();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const size = field.size.get();
    const messages = field.messages.get();

    return (
      <FieldValidationText
        ref={forwardedRef}
        {...rest}
        size={size}
        // Track the control's border so the message reads as part of the field.
        color={`${disabled ? "primary-disabled" : focused ? "primary-active" : "primary"} group-hover/field:${disabled ? "primary-disabled" : focused ? "primary-active" : "primary-hovered"}`}
        messages={messages}
        disabled={disabled}>
        {children}
      </FieldValidationText>
    );
  },
  { displayName: "FieldDetails" }
);

const FieldGroupInnerImpl = createStyledHOC(
  FieldGroupFrame,
  (props, forwardedRef) => {
    const { children, variant = "outlined", ...rest } = props;

    const field = FieldApi.use();
    const name = field.name.get();
    const value = field.value.get();
    const formattedValue = field.formattedValue.get();
    const defaultValue = field.initialValue.get();
    const items = field.items.get();
    const size = field.size.get();
    const theme = field.theme.get();
    const disabled = field.disabled.get();
    const required = field.required.get();
    const focused = field.focused.get();
    const clearable = field.clearable.get();
    const options = field.options.get();
    const messages = field.messages.get();
    const presentation = useFieldPresentation();
    const [details, setDetails] = useState<ReactNode>(null);

    const { change, focus, blur, mount } = useFieldActions();
    const onChange = useCallback(
      (nextValue: unknown) => void change(nextValue),
      [change]
    );
    const onFocus = useCallback(() => void focus(), [focus]);
    const onBlur = useCallback(() => void blur(), [blur]);
    const setValidationResults = field.validationResults.set();
    const setMessage = useCallback(
      (code: string, message?: ValidationDetails) => {
        setValidationResults(previousResults => {
          const previousMessages =
            previousResults?.[ValidationCause.SERVER] ?? [];
          const hasMessage = previousMessages.some(
            previous => previous.code === code
          );

          if (!message && !hasMessage) {
            return previousResults;
          }
          if (message && hasMessage) {
            return previousResults;
          }

          return {
            ...previousResults,
            [ValidationCause.SERVER]: message
              ? [...previousMessages, message]
              : previousMessages.filter(previous => previous.code !== code)
          };
        });
      },
      [setValidationResults]
    );

    // The control attaches this to its native input: it applies the field's
    // mask and registers the input with the form once it mounts.
    const maskedRef = useFieldRef();
    const inputElementRef = useRef<HTMLElement | null>(null);
    const mountRef = useCallback(
      (node: HTMLElement | null) => {
        if (node) {
          void mount(maskedRef);
        }
      },
      [maskedRef, mount]
    );
    const inputRef = useComposedRefs<any>(maskedRef, inputElementRef, mountRef);

    const handleClear = useCallback(() => {
      void change(options?.defaultValue);
      inputElementRef.current?.focus();
    }, [change, options?.defaultValue]);
    const endAdornment = useMemo(
      () => (
        <>
          {clearable && Boolean(formattedValue) && (
            <FieldThemeIcon position="end" onClick={handleClear}>
              <X
                color={`${disabled ? "primary-disabled" : "primary"} group-hover/field:${disabled ? "primary-disabled" : "primary-hovered"}`}
              />
            </FieldThemeIcon>
          )}
          <FieldThemeIcon position="end" />
        </>
      ),
      [clearable, disabled, formattedValue, handleClear]
    );

    const hasValidationMessage = messages.length > 0;
    const formControl = useMemo<FormControlState>(
      () => ({
        ...presentation,
        name,
        value,
        formattedValue,
        defaultValue,
        items,
        size,
        theme,
        disabled,
        required,
        focused,
        clearable,
        hasValidationMessage,
        inputRef,
        onChange,
        onFocus,
        onBlur,
        setMessage,
        endAdornment
      }),
      [
        presentation,
        name,
        value,
        formattedValue,
        defaultValue,
        items,
        size,
        theme,
        disabled,
        required,
        focused,
        clearable,
        hasValidationMessage,
        inputRef,
        onChange,
        onFocus,
        onBlur,
        setMessage,
        endAdornment
      ]
    );

    return (
      <Theme name={theme}>
        <FormControlContext.Provider value={formControl}>
          <FieldDetailsSetterContext.Provider value={setDetails}>
            <FieldDetailsContext.Provider value={details}>
              <YStack group={"field"} gap="lg" disabled={disabled}>
                <FieldGroupFrame
                  ref={forwardedRef}
                  {...rest}
                  disabled={disabled}
                  variant={variant}>
                  {children}
                </FieldGroupFrame>
                <FieldValidationTextImpl />
              </YStack>
            </FieldDetailsContext.Provider>
          </FieldDetailsSetterContext.Provider>
        </FormControlContext.Provider>
      </Theme>
    );
  },
  { displayName: "Field" }
);

export type FieldProps<TFieldValue = any> =
  FieldProviderOptions<TFieldValue> & {
    variant?: FieldVariant;
  };

const FieldGroup = createStyledHOC(
  FieldGroupFrame,
  (
    // Field options win over same-named frame props: v3 added a CSS `mask`
    // style prop, which would otherwise intersect with the Maskito `mask`.
    props: Omit<GetProps<typeof FieldGroupFrame>, keyof FieldProps> &
      FieldProps,
    forwardedRef
  ) => {
    const { children, variant = "outlined", ...rest } = props;
    const [labelVariant, setLabelVariant] = useState<FieldLabelVariant>();
    const [labelDefaults, setLabelDefaults] = useState<FieldLabelDefaults>();
    const [controlOptions, setControlOptions] = useState<FieldControlOptions>();
    const labelContentRef = useRef<TamaguiWebElement>(null);
    const [hasPlaceholder, setHasPlaceholder] = useState(false);
    const [endIconCount, setEndIconCount] = useState(0);
    const registerEndIcon = useCallback(() => {
      setEndIconCount(count => count + 1);

      return () => setEndIconCount(count => Math.max(0, count - 1));
    }, []);
    const [startIconCount, setStartIconCount] = useState(0);
    const registerStartIcon = useCallback(() => {
      setStartIconCount(count => count + 1);

      return () => setStartIconCount(count => Math.max(0, count - 1));
    }, []);
    const presentation = useMemo<FormControlState>(
      () => ({
        variant,
        labelVariant,
        labelDefaults,
        setLabelDefaults,
        setControlOptions,
        hasPlaceholder,
        hasValidationMessage: false,
        endIconCount,
        hasStartIcon: startIconCount > 0,
        labelContentRef,
        setLabelVariant,
        setHasPlaceholder,
        registerEndIcon,
        registerStartIcon
      }),
      [
        variant,
        labelVariant,
        labelDefaults,
        hasPlaceholder,
        endIconCount,
        startIconCount,
        registerEndIcon,
        registerStartIcon
      ]
    );

    return (
      <FieldProvider
        {...(controlOptions?.defaults as Partial<FieldProps>)}
        {...rest}
        {...(controlOptions?.overrides as Partial<FieldProps>)}>
        <FormControlContext.Provider value={presentation}>
          <FieldGroupInnerImpl ref={forwardedRef} variant={variant}>
            {children}
          </FieldGroupInnerImpl>
        </FormControlContext.Provider>
      </FieldProvider>
    );
  },
  { displayName: "Field" }
);

const FieldDetails = styled(SizableText, {
  displayName: "FieldDetails",
  transition: "200ms",
  color: "primary",
  fontFamily: "caption",
  fontStyle: "italic",
  fontWeight: "normal",
  opacity: "enter:0 exit:0",
  x: "enter:10px exit:10px",

  variants: {
    controlSize: formSizeDynamic(getFormFontStyle),

    disabled: {
      true: {
        color: "primary-disabled hover:primary-disabled",
        cursor: "not-allowed"
      }
    }
  } as const,
  defaultVariants: {
    disabled: false
  }
});

const FieldDetailsImpl = createStyledHOC(
  FieldDetails,
  (props, forwardedRef) => {
    const { children, ...rest } = props;

    const field = FieldApi.use();
    const setDetails = use(FieldDetailsSetterContext);
    const messages = field.messages.get();
    const disabled = field.disabled.get();
    const theme = field.theme.get();
    const size = field.size.get();

    useLayoutEffect(() => {
      setDetails(children);

      return () => setDetails(null);
    }, [children, setDetails]);

    if (messages && messages.length > 0) {
      return null;
    }

    return (
      <FieldDetails
        ref={forwardedRef}
        {...rest}
        color={`${
          disabled ? "primary-disabled" : theme !== "base" ? "primary" : "ink"
        } group-hover/field:${disabled ? "primary-disabled" : "primary-hovered"}`}
        theme={theme}
        controlSize={size}
        disabled={disabled}>
        {children}
      </FieldDetails>
    );
  },
  { displayName: "FieldDetails" }
);

const FieldLabelText = styled(SizableText, {
  displayName: "FieldLabel",
  render: "label",

  // Matches `FieldLabelPositioner`, so the label's size and position (which
  // centers on its height) settle together as it floats.
  transition: "250ms",
  color: "emphasis",
  fontFamily: "display",
  cursor: "pointer",
  wordWrap: "normal",
  flexShrink: 1,
  minWidth: 0,
  ellipsis: true,

  variants: {
    // Styled by the `.resolve` below because the size depends on `floating`.
    controlSize: styled.dynamic<FormControlSize>(),

    floating: {
      true: {
        lineHeight: "xxs",
        fontWeight: "medium"
      },
      false: {
        lineHeight: "sm",
        fontWeight: "semibold"
      }
    },

    disabled: {
      true: {
        color: "primary-disabled hover:primary-disabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false,
    floating: false
  }
}).resolve((props, env) =>
  props.controlSize
    ? getFormFontStyle(
        props.controlSize as FormControlSize,
        env,
        props.floating ? "xxs" : "lg"
      )
    : undefined
);

const FieldLabelPositioner = styled(View, {
  displayName: "FieldLabel",

  transition: "250ms",

  variants: {
    labelVariant: {
      above: {},
      floating: {
        position: "absolute",
        left: "4xl",
        zIndex: 1
      }
    }
  } as const,

  defaultVariants: {
    labelVariant: "above"
  }
});

const FieldOptionalLabelText = styled(FieldLabelText, {
  transition: "250ms",
  color: "subtle",
  marginLeft: "lg",

  variants: {
    disabled: {
      true: {
        color: "subtle",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const LabelXStack = styled(XStack, {
  displayName: "FieldLabel",

  transition: "200ms",
  position: "relative",
  cursor: "pointer",
  alignItems: "center",
  flexShrink: 1,
  minWidth: 0,

  variants: {
    floating: {
      true: {}
    },

    disabled: {
      true: {
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    floating: false,
    disabled: false
  }
});

const FieldLabelContent = styled(XStack, {
  displayName: "FieldLabelContent",
  position: "relative",
  zIndex: 1,
  gap: "sm",
  alignItems: "center",
  flexShrink: 1,
  minWidth: 0
});

const FieldLabelTextImpl = createStyledHOC(
  FieldLabelText,
  (
    {
      children,
      hideRequired = false,
      hideAsterisk = false,
      showOptional = false,
      floating = false,
      floatingLabelLeft,
      labelVariant = "above",
      required,
      style,
      ...props
    }: GetProps<typeof FieldLabelText> & {
      required?: boolean;
      disabled?: boolean;
      hideRequired?: boolean;
      hideAsterisk?: boolean;
      showOptional?: boolean;
      floating?: boolean;
      floatingLabelLeft?: GetProps<typeof FieldLabelPositioner>["left"];
      labelVariant?: FieldLabelVariant;
    },
    forwardedRef
  ) => {
    const field = FieldApi.use();
    const theme = useThemeName();
    const { variant, endIconCount, labelContentRef, labelDefaults } =
      useFieldPresentation();
    // An underlined control's text starts flush with its left edge, and so
    // does its label (`floatingLabelLeft` moves it past a start icon).
    const underlined = variant === "underlined";
    const placement = useFieldLabelPlacement();
    const labelPositionerRef = useRef<TamaguiWebElement>(null);
    const labelTextRef = useRef<TamaguiWebElement>(null);
    const optionalLabelRef = useRef<TamaguiWebElement>(null);

    const [hideOptionalForOverflow, setHideOptionalForOverflow] =
      useState(false);
    const [truncated, setTruncated] = useState(false);
    const fieldDisabled = field.disabled.get();
    const name = field.name.get();
    const size = field.size.get();
    const controlSize = getFormSizeToken(size);
    // A floating label rests past a start icon (or the control's own leading
    // content), unless placed explicitly.
    const hasStartIcon = useFieldHasStartIcon();
    const resolvedFloatingLabelLeft =
      floatingLabelLeft ??
      labelDefaults?.floatingLabelLeft ??
      (hasStartIcon
        ? getSpaced("4xl") * getFormSizeScale(size) +
          getSized(controlSize, { shift: -2 }) +
          getSpaced("2xl") * 2 * getFormSizeScale(size)
        : undefined);

    const isFloatingVariant = labelVariant === "floating";
    // A floated label sits on an outlined control's border, or in the row
    // a underlined or inlined control adds above its text; a resting label is
    // centered on the control, which is taller than the size token by the
    // label's inset (see `getFieldLabelInset`). An underlined control's
    // resting label drops onto its text line, which sits under the inset
    // (see `InputValue`), so it reads as resting on the underline.
    const labelTop = isFloatingVariant
      ? floating
        ? (placement === "inset" ? 14 : 4) * getFormSizeScale(size)
        : (getSized(controlSize) +
            getFieldLabelInset(placement, size) +
            (underlined
              ? 7 * getFormSizeScale(size) +
                getFieldLabelInset(placement, size) -
                getFieldLabelInset("border")
              : 0)) /
          2
      : undefined;

    const endIconWidth =
      getSized(controlSize, { shift: -2 }) +
      getSpaced("2xl") * 2 * getFormSizeScale(size);
    const floatingLabelRight =
      getSpaced("4xl") * getFormSizeScale(size) + endIconCount * endIconWidth;
    const hasOptionalLabel =
      hideRequired !== true && required !== true && showOptional === true;
    const updateOptionalLabelVisibility = useCallback(() => {
      const labelPositioner = labelPositionerRef.current;
      const labelContent = labelContentRef.current;
      const labelText = labelTextRef.current;
      const optionalLabel = optionalLabelRef.current;

      if (
        !labelPositioner ||
        !labelContent ||
        !labelText ||
        !optionalLabel ||
        typeof getComputedStyle === "undefined"
      ) {
        return;
      }

      // The label content shrinks to fit its children, so its own width
      // collapses once "(Optional)" is hidden. Measure against the
      // positioner instead, whose width does not depend on the optional label.
      const availableWidth =
        labelPositioner.getBoundingClientRect().right -
        labelContent.getBoundingClientRect().left;
      const optionalWidth =
        optionalLabel.scrollWidth +
        Number.parseFloat(getComputedStyle(optionalLabel).marginLeft || "0");
      const gap = Number.parseFloat(
        getComputedStyle(labelContent).columnGap || "0"
      );
      const nextHidden =
        labelText.scrollWidth + optionalWidth + gap > availableWidth;

      setHideOptionalForOverflow(current =>
        current === nextHidden ? current : nextHidden
      );
    }, []);

    useLayoutEffect(() => {
      if (!hasOptionalLabel) {
        // eslint-disable-next-line react/set-state-in-effect
        setHideOptionalForOverflow(false);
        return;
      }

      updateOptionalLabelVisibility();

      if (typeof ResizeObserver === "undefined") {
        return;
      }

      const resizeObserver = new ResizeObserver(updateOptionalLabelVisibility);

      for (const element of [
        labelPositionerRef.current,
        labelTextRef.current,
        optionalLabelRef.current
      ]) {
        if (element) {
          resizeObserver.observe(element);
        }
      }

      return () => resizeObserver.disconnect();
    }, [
      children,
      endIconCount,
      floating,
      hasOptionalLabel,
      labelContentRef,
      size,
      updateOptionalLabelVisibility
    ]);

    // Show the full label in a tooltip only while it is cut off.
    useLayoutEffect(() => {
      const labelText = labelTextRef.current;
      if (!labelText || typeof ResizeObserver === "undefined") {
        return;
      }

      const updateTruncated = () =>
        setTruncated(labelText.scrollWidth > labelText.clientWidth);
      updateTruncated();

      const resizeObserver = new ResizeObserver(updateTruncated);
      resizeObserver.observe(labelText);

      return () => resizeObserver.disconnect();
    }, [children, floating, size]);

    const disabled = useMemo(
      () => Boolean(fieldDisabled || props.disabled),
      [fieldDisabled, props.disabled]
    );
    const baseTheme = theme?.startsWith("light") ? "light_base" : "dark_base";

    return (
      <FieldLabelPositioner
        ref={labelPositionerRef}
        labelVariant={labelVariant}
        top={labelTop}
        // Labels floated onto a border sit slightly above it, centered on
        // the notch `FieldNotchedOutline` opens; every other floating label
        // is centered on its `top`.
        transform={
          isFloatingVariant
            ? [
                {
                  translateY:
                    floating && placement === "border" ? "-58%" : "-50%"
                }
              ]
            : undefined
        }
        right={isFloatingVariant ? floatingLabelRight : undefined}
        left={
          isFloatingVariant
            ? (resolvedFloatingLabelLeft ??
              (underlined ? 0 : getSpaced("4xl") * getFormSizeScale(size)))
            : undefined
        }>
        <TamaguiLabel
          ref={forwardedRef}
          id={getFieldLabelId(name)}
          htmlFor={name}
          marginLeft={`${isFloatingVariant || underlined ? "zero" : "md"}`}>
          <LabelXStack disabled={disabled} floating={floating}>
            <FieldLabelContent ref={labelContentRef}>
              <Theme name={baseTheme}>
                <Tooltip groupId="field-label" theme={baseTheme}>
                  <Tooltip.Trigger asChild={true}>
                    <FieldLabelText
                      ref={labelTextRef}
                      {...props}
                      flexShrink={1}
                      minWidth={0}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      color={`${disabled ? "primary-disabled" : "primary"}`}
                      // Web-only ellipsis styles are not part of React Native's
                      // style types.
                      style={StyleSheet.flatten([
                        style as any,
                        {
                          flexShrink: 1,
                          minWidth: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        }
                      ] as any)}
                      ellipsis={true}
                      disabled={disabled}
                      floating={floating}
                      controlSize={size}>
                      {children}
                    </FieldLabelText>
                  </Tooltip.Trigger>
                  {truncated && (
                    // Portaled outside the label's `Theme`, so apply it here.
                    <Tooltip.Content theme={baseTheme}>
                      <View paddingVertical="2xl" paddingHorizontal="3xl">
                        <BodyText>{children}</BodyText>
                      </View>
                    </Tooltip.Content>
                  )}
                </Tooltip>
              </Theme>
              {hideRequired !== true && (
                <>
                  {required ? (
                    <>
                      {hideAsterisk !== true && (
                        <View
                          transition="250ms"
                          position="relative"
                          alignSelf="stretch"
                          width={`${floating ? "sm" : "md"}`}>
                          <Theme name="danger">
                            <Asterisk
                              transition="250ms"
                              color="primary"
                              size={floating ? "sm" : "md"}
                              position="absolute"
                              top={floating ? -2 : -1}
                              weight="bold"
                            />
                          </Theme>
                        </View>
                      )}
                    </>
                  ) : (
                    <>
                      {showOptional === true && (
                        // Stays mounted while overflowing so its width can be
                        // re-measured when there is room for it again.
                        <FieldOptionalLabelText
                          ref={optionalLabelRef}
                          {...props}
                          aria-hidden={hideOptionalForOverflow || undefined}
                          position={
                            hideOptionalForOverflow ? "absolute" : undefined
                          }
                          visibility={
                            hideOptionalForOverflow ? "hidden" : undefined
                          }
                          pointerEvents={
                            hideOptionalForOverflow ? "none" : undefined
                          }
                          size={floating ? true : "sm"}
                          color="subtle"
                          disabled={disabled}
                          floating={floating}
                          controlSize={size}>
                          (Optional)
                        </FieldOptionalLabelText>
                      )}
                    </>
                  )}
                </>
              )}
            </FieldLabelContent>
          </LabelXStack>
        </TamaguiLabel>
      </FieldLabelPositioner>
    );
  },
  { displayName: "FieldLabel" }
);

export type FieldLabelTextProps = GetProps<typeof FieldLabelText>;

const FieldLabel = createStyledHOC(
  FieldLabelText,
  (
    {
      children,
      variant: variantProp,
      ...props
    }: GetProps<typeof FieldLabelText> & {
      /**
       * Whether the label floats over the control (resting inside it until
       * the field is focused or has a value) or sits above it.
       *
       * @defaultValue "floating" for text box style controls (Input, TextArea,
       * Select, DatePicker), otherwise "above"
       */
      variant?: FieldLabelVariant;
      hideRequired?: boolean;
      hideAsterisk?: boolean;
      showOptional?: boolean;
      floatingLabelLeft?: GetProps<typeof FieldLabelPositioner>["left"];
    },
    forwardedRef
  ) => {
    const field = FieldApi.use();
    const name = field.name.get();
    const disabled = field.disabled.get();
    const required = field.required.get();
    const { setLabelVariant, labelDefaults } = useFieldPresentation();
    const variant = variantProp ?? labelDefaults?.variant ?? "above";
    const inline = labelDefaults?.inline;
    const floating = useFieldLabelFloated(variant);

    useLayoutEffect(() => {
      setLabelVariant(variant);

      return () => setLabelVariant(undefined);
    }, [setLabelVariant, variant]);

    return inline ? (
      // A compact label beside its control (checkbox, switch).
      <XStack gap="xs" {...inline}>
        <FieldLabelTextImpl
          ref={forwardedRef}
          paddingBottom={0}
          hideRequired={true}
          textAlign="center"
          {...(labelDefaults?.inlineFontSize
            ? { fontSize: labelDefaults.inlineFontSize }
            : {})}
          {...props}
          htmlFor={name}
          disabled={disabled}
          required={required}
          labelVariant={variant}
          floating={floating}>
          {children}
        </FieldLabelTextImpl>
        {disabled && <FieldThemeIcon disabled={true} />}
      </XStack>
    ) : (
      <FieldLabelTextImpl
        ref={forwardedRef}
        {...props}
        htmlFor={name}
        disabled={disabled}
        required={required}
        labelVariant={variant}
        floating={floating}>
        {children}
      </FieldLabelTextImpl>
    );
  },
  { displayName: "FieldLabel" }
);

export type FieldLabelProps = GetProps<typeof FieldLabel>;

const FieldLinkFrame = styled(XStack, {
  displayName: "FieldLink",
  position: "absolute",
  top: 0,
  right: "md"
});

const FieldLink = createStyledHOC(
  Link,
  ({ children, ...props }, forwardedRef) => {
    const linkRef = useRef<HTMLElement | null>(null);

    const [width, setWidth] = useState<number>();
    const updateWidth = useCallback((element: HTMLElement) => {
      const nextWidth = (element as any).scrollWidth;
      setWidth(currentWidth =>
        currentWidth === nextWidth ? currentWidth : nextWidth
      );
    }, []);

    const measureRef = useCallback(
      (node: TamaguiTextElement | null) => {
        // Measured on web, where the rendered element is an HTMLElement.
        const element = node as HTMLElement | null;
        linkRef.current = element;
        if (element) {
          updateWidth(element);
        }
      },
      [updateWidth]
    );

    const composedRef = useComposedRefs<TamaguiTextElement>(
      forwardedRef,
      measureRef
    );

    useLayoutEffect(() => {
      let cancelled = false;
      if (typeof document !== "undefined" && document.fonts) {
        void document.fonts.ready.then(() => {
          const element = linkRef.current;
          if (!cancelled && element) {
            updateWidth(element);
          }
        });
      }

      return () => {
        cancelled = true;
      };
    }, [children, updateWidth]);

    return (
      <FieldLinkFrame width={width}>
        <Link ref={composedRef} {...props} width="100%" flexShrink={0}>
          {children}
        </Link>
      </FieldLinkFrame>
    );
  },
  { displayName: "FieldLink" }
);

const FieldIconButtonImpl = createStyledHOC(
  Button,
  (
    {
      children,
      position,
      controlSize,
      size: sizeProp,
      ...props
    }: GetProps<typeof Button> & {
      position?: "start" | "end";
      controlSize?: FormControlSize;
      size?: FormControlSize;
    },
    forwardedRef
  ) => {
    // Also used as a bare control's trigger (Select, DatePicker), so the
    // field is optional here.
    const formControl = useFormControl();
    const size = controlSize ?? sizeProp ?? formControl?.size ?? "md";
    const { iconColor, hoverIconColor } = useFieldIconColor();
    const variant = formControl?.variant ?? "outlined";
    const registerEndIcon = formControl?.registerEndIcon;
    const registerStartIcon = formControl?.registerStartIcon;
    const frameSize = getFormSizeToken(size);
    // An underlined control's text (and resting label) drops under the
    // floating label's inset; drop the icon by the same amount so it stays
    // aligned with them (see `InputValue`).
    const placement = useFieldLabelPlacement();
    const underlinedOffset =
      variant === "underlined" && placement
        ? 7 * getFormSizeScale(size) +
          getFieldLabelInset(placement, size) -
          getFieldLabelInset("border")
        : undefined;

    useLayoutEffect(
      () =>
        position === "start" ? registerStartIcon?.() : registerEndIcon?.(),
      [position, registerEndIcon, registerStartIcon]
    );

    const adjusted = useMemo(
      () => getSized(frameSize, { shift: -2 }),
      [frameSize]
    );
    const icon = isValidElement<{
      color?: string;
      size?: number;
    }>(children)
      ? // eslint-disable-next-line react/no-clone-element
        cloneElement(children, {
          // Tamagui v3 icons can't resolve flat `group-hover/field:` values,
          // so the glyph follows the CSS color of the wrapper below. That
          // keeps its hover transition in step with the border and separators.
          color: "currentColor",
          size: 24 * getFormSizeScale(size)
        })
      : children;

    return (
      <View
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        flexShrink={0}
        height="100%"
        paddingHorizontal={getSpaced("2xl") * getFormSizeScale(size)}
        paddingTop={underlinedOffset}
        position="relative">
        {position && variant !== "underlined" && (
          <View
            position="absolute"
            top="20%"
            height="60%"
            {...(position === "end"
              ? { left: 0, borderLeftWidth: 1 }
              : { right: 0, borderRightWidth: 1 })}
            borderColor={`${iconColor} group-hover/field:${hoverIconColor}`}
            // Fades in with the same 200ms entrance as the Input and Select
            // separators; see `InputSeparator` for why `transition` names
            // `enter`.
            opacity="enter:0"
            transition={{ duration: "200ms", enter: "200ms" }}
          />
        )}
        <Button
          ref={forwardedRef}
          variant="ghost"
          circular={true}
          animate={true}
          transition="200ms"
          color={`${iconColor} group-hover/field:${hoverIconColor}`}
          {...props}
          size={adjusted}>
          <Button.Icon
            // Keep the compact field button frame while matching the 20px
            // glyph size used by the other input affordance.
            size={frameSize}>
            <Text
              // Tamagui v3 drops `color` on a View, so a Text carries the
              // hover color the icon's `currentColor` inherits.
              display="flex"
              transition="200ms"
              color={`${iconColor} group-hover/field:${hoverIconColor}`}>
              {icon}
            </Text>
          </Button.Icon>
        </Button>
      </View>
    );
  },
  { displayName: "FieldIcon" }
);

const InnerFieldThemeIcon = createStyledHOC(
  FieldIconButtonImpl,
  (
    {
      children,
      messages,
      details,
      disabled,
      theme,
      ...rest
    }: GetProps<typeof FieldIconButtonImpl> & {
      messages?: ValidationDetails[];
      details?: ReactNode;
      theme?: string;
    },
    forwardedRef
  ) => {
    const { isNeutral } = useFieldIconColor();

    if ((!messages || messages.length === 0) && !details && !disabled) {
      return (
        <FieldIconButtonImpl ref={forwardedRef} {...rest}>
          {children}
        </FieldIconButtonImpl>
      );
    }

    return (
      <Tooltip groupId="field-icon" theme={theme}>
        <Tooltip.Trigger asChild={true}>
          <FieldIconButtonImpl ref={forwardedRef} {...rest}>
            {children}
          </FieldIconButtonImpl>
        </Tooltip.Trigger>

        <Tooltip.Content
          // The content is portaled outside the field's `Theme`, so apply the
          // field theme here or `primary` resolves against the root theme.
          theme={theme}
          borderColor={
            isNeutral
              ? "outline focus-visible:outline-active"
              : "primary focus-visible:primary-active"
          }
          arrowBorderColor={
            isNeutral
              ? "outline focus-visible:outline-active"
              : "primary focus-visible:primary-active"
          }>
          <Theme name="base">
            <View paddingVertical="2xl" paddingHorizontal="3xl">
              {messages && messages.length > 0 ? (
                <ValidationText
                  color="primary"
                  messages={messages}
                  disabled={disabled}
                  theme="base"
                />
              ) : (
                details || (
                  <ValidationText color="primary" disabled={disabled} />
                )
              )}
            </View>
          </Theme>
        </Tooltip.Content>
      </Tooltip>
    );
  },
  { displayName: "FieldIcon" }
);

const FieldThemeIcon = createStyledHOC(
  InnerFieldThemeIcon,
  ({ children, ...props }, forwardedRef) => {
    const { focus } = useFieldActions();

    const field = FieldApi.use();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const validating = field.validating.get();
    const theme = field.theme.get();
    const messages = field.messages.get();
    const details = use(FieldDetailsContext);

    if (children) {
      return (
        <FieldIconButtonImpl ref={forwardedRef} {...props}>
          {children}
        </FieldIconButtonImpl>
      );
    }

    if (validating) {
      // Spinner types `size` as "small" | "large"; the pre-existing "md" is
      // kept as-is to preserve the current rendering.
      return <Spinner size={"md" as SpinnerProps["size"]} theme="base" />;
    } else if (
      !theme?.includes("danger") &&
      !theme?.includes("warning") &&
      !theme?.includes("info") &&
      !theme?.includes("discovery") &&
      !theme?.includes("success") &&
      !theme?.includes("positive") &&
      !theme?.includes("negative") &&
      !disabled
    ) {
      return null;
    }

    return (
      <InnerFieldThemeIcon
        ref={forwardedRef}
        {...props}
        disabled={disabled}
        messages={messages}
        details={details}
        theme={theme}
        onPress={focus}>
        {getIconByTheme({
          theme,
          disabled,
          color: `${
            disabled
              ? "primary-disabled"
              : focused
                ? "primary-active"
                : "primary"
          } group-hover/field:${disabled ? "primary-disabled" : "primary-hovered"}`
        })}
      </InnerFieldThemeIcon>
    );
  },
  { displayName: "FieldIcon" }
);

export const Field = withStaticProperties(FieldGroup, {
  Label: FieldLabel,
  Link: FieldLink,
  Details: FieldDetailsImpl,
  Icon: FieldIconButtonImpl,
  ThemeIcon: FieldThemeIcon
});
