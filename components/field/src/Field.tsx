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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import type { FormControlSize, StyleEnv } from "@cyclone-ui/helpers";
import {
  getFontSized,
  getFormFontScale,
  getFormFontSize,
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced
} from "@cyclone-ui/helpers";
import { LabelText } from "@cyclone-ui/label-text";
import { Link } from "@cyclone-ui/link";
import type { SpinnerProps } from "@cyclone-ui/spinner";
import { Spinner } from "@cyclone-ui/spinner";
import type { FieldProviderOptions } from "@cyclone-ui/state/form";
import {
  FieldApi,
  FieldProvider,
  useFieldActions
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
  Theme,
  useComposedRefs,
  useThemeName,
  View,
  withStaticProperties
} from "@tamagui/core";
import { Label as TamaguiLabel } from "@tamagui/label";
import { Asterisk } from "@tamagui/lucide-icons-2";
import { XStack, YStack } from "@tamagui/stacks";
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

export type FieldVariant = "normal" | "floating" | "underline";

interface FieldPresentationContextValue {
  variant: FieldVariant;
  hasLabel: boolean;
  hasPlaceholder: boolean;
  hasValidationMessage: boolean;
  endIconCount: number;
  setHasLabel: (hasLabel: boolean) => void;
  setHasPlaceholder: (hasPlaceholder: boolean) => void;
  registerEndIcon: () => () => void;
}

const FieldPresentationContext = createContext<FieldPresentationContextValue>({
  variant: "normal",
  hasLabel: false,
  hasPlaceholder: false,
  hasValidationMessage: false,
  endIconCount: 0,
  setHasLabel: () => undefined,
  setHasPlaceholder: () => undefined,
  registerEndIcon: () => () => undefined
});

const FIELD_PLACEHOLDER_UNSET = Symbol("field-placeholder-unset");

export const useFieldVariant = (
  placeholder: unknown = FIELD_PLACEHOLDER_UNSET
) => {
  const { variant, setHasPlaceholder } = use(FieldPresentationContext);
  const hasPlaceholder =
    placeholder === FIELD_PLACEHOLDER_UNSET
      ? FIELD_PLACEHOLDER_UNSET
      : Boolean(placeholder);

  useLayoutEffect(() => {
    if (hasPlaceholder === FIELD_PLACEHOLDER_UNSET) {
      return;
    }

    setHasPlaceholder(hasPlaceholder);

    return () => setHasPlaceholder(false);
  }, [hasPlaceholder, setHasPlaceholder]);

  return variant;
};

export const useFieldHasValidationMessage = () =>
  use(FieldPresentationContext).hasValidationMessage;

export const useFieldShouldShowPlaceholder = (value: unknown) => {
  const field = FieldApi.use();
  const focused = field.focused.get();
  const { variant, hasLabel } = use(FieldPresentationContext);
  const hasValue = value !== undefined && value !== null && value !== "";

  return (
    variant !== "floating" || (!hasValue && (!hasLabel || Boolean(focused)))
  );
};

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
        gap: "xl"
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
      normal: {},
      floating: {},
      underline: {
        boxShadow: "none focus:none focus-visible:none"
      }
    }
  } as const,
  defaultVariants: {
    orientation: "vertical",
    disabled: false,
    variant: "normal"
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

  // Tamagui v3 has no `$true` font key; resolve the default size step of the
  // `caption` typography token.
  const font = getFontSized(true, env);
  const fontSize = Number(getVariableValue(font.fontSize) ?? 1);
  const lineHeight = Number(getVariableValue(font.lineHeight) ?? 1);

  return {
    fontSize,
    lineHeight,
    fontWeight: font.fontWeight,
    letterSpacing: font.letterSpacing,
    textTransform: font.textTransform,
    fontStyle: font.fontStyle
  };
};

/**
 * Tamagui v3 reads a unitless `lineHeight` as a multiplier, so pin the form
 * font's pixel leading explicitly.
 */
const getFormFontStyle = (size: FormControlSize, env: StyleEnv) => {
  const style = getFormFontSize(size, env);

  return {
    fontFamily: style.fontFamily,
    fontWeight: style.fontWeight,
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
  marginTop: "md",
  variants: {
    size: formSizeDynamic((size, env) => {
      const style = getFieldDetailsFontSize(env);
      const scale = getFormFontScale(size);

      return {
        fontWeight: style?.fontWeight,
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
        color={`${disabled ? "accentDisabled" : focused ? "accentActive" : "accent"} group-hover/field:${disabled ? "accentDisabled" : focused ? "accentActive" : "accentHover"}`}
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
    const { children, variant = "normal", ...rest } = props;

    const field = FieldApi.use();
    const theme = field.theme.get();
    const disabled = field.disabled.get();
    const messages = field.messages.get();
    const presentation = use(FieldPresentationContext);
    const [details, setDetails] = useState<ReactNode>(null);
    const resolvedPresentation = useMemo(
      () => ({ ...presentation, hasValidationMessage: messages.length > 0 }),
      [messages.length, presentation]
    );

    return (
      <Theme name={theme}>
        <FieldPresentationContext.Provider value={resolvedPresentation}>
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
        </FieldPresentationContext.Provider>
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
    const { children, variant = "normal", ...rest } = props;
    const [hasLabel, setHasLabel] = useState(false);
    const [hasPlaceholder, setHasPlaceholder] = useState(false);
    const [endIconCount, setEndIconCount] = useState(0);
    const registerEndIcon = useCallback(() => {
      setEndIconCount(count => count + 1);

      return () => setEndIconCount(count => Math.max(0, count - 1));
    }, []);
    const presentation = useMemo(
      () => ({
        variant,
        hasLabel,
        hasPlaceholder,
        hasValidationMessage: false,
        endIconCount,
        setHasLabel,
        setHasPlaceholder,
        registerEndIcon
      }),
      [variant, hasLabel, hasPlaceholder, endIconCount, registerEndIcon]
    );

    return (
      <FieldProvider {...rest}>
        <FieldPresentationContext.Provider value={presentation}>
          <FieldGroupInnerImpl ref={forwardedRef} variant={variant}>
            {children}
          </FieldGroupInnerImpl>
        </FieldPresentationContext.Provider>
      </FieldProvider>
    );
  },
  { displayName: "Field" }
);

const FieldDetails = styled(BodyText, {
  displayName: "FieldDetails",
  transition: "200ms",
  color: "accent",
  fontFamily: "caption",
  fontStyle: "italic",
  opacity: "enter:0 exit:0",
  x: "enter:10px exit:10px",
  variants: {
    controlSize: formSizeDynamic(getFormFontStyle),
    disabled: {
      true: {
        color: "accentDisabled hover:accentDisabled",
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
        color={`${disabled ? "accentDisabled" : theme !== "base" ? "accent" : "inkBody"} group-hover/field:${disabled ? "accentDisabled" : "accentHover"}`}
        theme={theme}
        controlSize={size}
        disabled={disabled}>
        {children}
      </FieldDetails>
    );
  },
  { displayName: "FieldDetails" }
);

const FieldLabelText = styled(LabelText, {
  displayName: "FieldLabel",

  transition: "200ms",
  cursor: "pointer",
  wordWrap: "normal",
  flexShrink: 1,
  minWidth: 0,
  ellipsis: true,

  variants: {
    controlSize: formSizeDynamic(getFormFontStyle),
    disabled: {
      true: {
        color: "accentDisabled hover:accentDisabled",
        cursor: "not-allowed"
      }
    }
  } as const,

  defaultVariants: {
    disabled: false
  }
});

const FieldLabelPositioner = styled(View, {
  displayName: "FieldLabel",

  transition: "200ms",

  variants: {
    variant: {
      normal: {},
      floating: {
        position: "absolute",
        left: "4xl",
        zIndex: 1,
        transform: [{ translateY: "-50%" }]
      },
      underline: {}
    }
  } as const,

  defaultVariants: {
    variant: "normal"
  }
});

const FieldOptionalLabelText = styled(FieldLabelText, {
  transition: "200ms",
  color: "inkSubtle",
  marginLeft: "lg",
  variants: {
    disabled: {
      true: {
        color: "inkSubtle hover:inkSubtle",
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

const FieldLabelBorderMask = styled(View, {
  displayName: "FieldLabelMask",
  position: "absolute",
  top: "50%",
  left: -2,
  right: -2,
  height: 10,
  transform: [{ translateY: "-50%" }],
  backgroundColor: "surfaceElevated",
  pointerEvents: "none"
});

const FieldLabelContent = styled(XStack, {
  displayName: "FieldLabelContent",
  position: "relative",
  zIndex: 1,
  gap: "sm",
  alignItems: "center",
  minWidth: 0
});

const FieldLabelTextImpl = createStyledHOC(
  FieldLabelText,
  (
    {
      children,
      hideRequired = false,
      hideAsterisk = false,
      hideOptional = false,
      floating = false,
      floatingLabelLeft,
      variant = "normal",
      required,
      style,
      ...props
    }: GetProps<typeof FieldLabelText> & {
      required?: boolean;
      disabled?: boolean;
      hideRequired?: boolean;
      hideAsterisk?: boolean;
      hideOptional?: boolean;
      floating?: boolean;
      floatingLabelLeft?: GetProps<typeof FieldLabelPositioner>["left"];
      variant?: FieldVariant;
    },
    forwardedRef
  ) => {
    const field = FieldApi.use();
    const theme = useThemeName();
    const { endIconCount } = use(FieldPresentationContext);
    const labelPositionerRef = useRef<TamaguiWebElement>(null);
    const labelContentRef = useRef<TamaguiWebElement>(null);
    const labelTextRef = useRef<TamaguiWebElement>(null);
    const optionalLabelRef = useRef<TamaguiWebElement>(null);
    const [hideOptionalForOverflow, setHideOptionalForOverflow] =
      useState(false);
    const fieldDisabled = field.disabled.get();
    const name = field.name.get();
    const size = field.size.get();
    const controlSize = getFormSizeToken(size);
    const labelTop =
      variant === "floating"
        ? floating
          ? 4 * getFormSizeScale(size)
          : getSized(controlSize, { scale: 0.5 })
        : undefined;
    const endIconWidth =
      getSized(controlSize, { shift: -2 }) +
      getSpaced("2xl") * 2 * getFormSizeScale(size);
    const floatingLabelRight =
      getSpaced("4xl") * getFormSizeScale(size) + endIconCount * endIconWidth;
    const hasOptionalLabel =
      hideRequired !== true && required !== true && hideOptional !== true;
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
      size,
      updateOptionalLabelVisibility
    ]);

    const disabled = useMemo(
      () => Boolean(fieldDisabled || props.disabled),
      [fieldDisabled, props.disabled]
    );
    const baseTheme = theme?.startsWith("light") ? "light_base" : "dark_base";

    return (
      <FieldLabelPositioner
        ref={labelPositionerRef}
        variant={variant}
        top={labelTop}
        right={variant === "floating" ? floatingLabelRight : undefined}
        left={
          variant === "floating"
            ? getSpaced("4xl") * getFormSizeScale(size)
            : undefined
        }
        {...(variant === "floating" && floatingLabelLeft !== undefined
          ? { left: floatingLabelLeft }
          : {})}>
        <TamaguiLabel
          ref={forwardedRef}
          htmlFor={name}
          marginLeft={`${variant === "floating" ? "zero" : "md"}`}>
          <LabelXStack disabled={disabled} floating={floating} minWidth={0}>
            {floating && <FieldLabelBorderMask />}
            <FieldLabelContent ref={labelContentRef}>
              <Theme name={baseTheme}>
                <FieldLabelText
                  ref={labelTextRef}
                  {...props}
                  flexShrink={1}
                  minWidth={0}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  color={`${disabled ? "accentDisabled" : "accent"}`}
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
              </Theme>
              {hideRequired !== true && (
                <>
                  {required ? (
                    <>
                      {hideAsterisk !== true && (
                        <View
                          position="relative"
                          alignSelf="stretch"
                          width={`${floating ? "md" : "xl"}`}>
                          <Asterisk
                            color="required"
                            size={floating ? "sm" : "xl"}
                            position="absolute"
                            top={floating ? -2 : -1}
                          />
                        </View>
                      )}
                    </>
                  ) : (
                    <>
                      {hideOptional !== true && (
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
                          color={`${disabled ? "inkSubtle" : "inkSubtle"} group-hover/field:${disabled ? "inkSubtle" : "inkSubtle"}`}
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
      ...props
    }: GetProps<typeof FieldLabelText> & {
      hideRequired?: boolean;
      hideAsterisk?: boolean;
      hideOptional?: boolean;
      floatingLabelLeft?: GetProps<typeof FieldLabelPositioner>["left"];
    },
    forwardedRef
  ) => {
    const field = FieldApi.use();
    const name = field.name.get();
    const disabled = field.disabled.get();
    const required = field.required.get();
    const focused = field.focused.get();
    const formattedValue = field.formattedValue.get();
    const { variant, setHasLabel } = use(FieldPresentationContext);
    const hasValue =
      formattedValue !== undefined &&
      formattedValue !== null &&
      formattedValue !== "";
    const floating = variant === "floating" && (hasValue || Boolean(focused));

    useLayoutEffect(() => {
      setHasLabel(true);

      return () => setHasLabel(false);
    }, [setHasLabel]);

    return (
      <FieldLabelTextImpl
        ref={forwardedRef}
        {...props}
        htmlFor={name}
        disabled={disabled}
        required={required}
        variant={variant}
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

/**
 * Resolves the color tokens used by field icons (and their dividers): `accent`
 * when the field has a non-base theme or a validation message, otherwise
 * `hairline`. `iconColor` is a single theme key so it can be passed directly
 * to Tamagui v3 icons, which do not resolve flat `group-hover/` values.
 */
export const useFieldIconColor = () => {
  const field = FieldApi.use();
  const disabled = field.disabled.get();
  const focused = field.focused.get();
  const theme = field.theme.get();
  const messages = field.messages.get();
  const isNeutral = (!theme || theme === "base") && messages.length === 0;

  const iconColor = disabled
    ? "hairlineInactive"
    : isNeutral
      ? focused
        ? "hairlineActive"
        : "hairline"
      : focused
        ? "accentActive"
        : "accent";
  const hoverIconColor = disabled
    ? "hairlineInactive"
    : isNeutral
      ? "hairlineHover"
      : "accentHover";

  return { iconColor, hoverIconColor, isNeutral };
};

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
    const field = FieldApi.use();
    const fieldSize = field.size.get();
    const size = controlSize ?? sizeProp ?? fieldSize ?? "md";
    const { iconColor, hoverIconColor } = useFieldIconColor();
    const { registerEndIcon, variant } = use(FieldPresentationContext);
    const frameSize = getFormSizeToken(size);

    useLayoutEffect(() => {
      if (position === "start") {
        return;
      }

      return registerEndIcon();
    }, [position, registerEndIcon]);

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
          // Tamagui v3's icon `themed` only resolves a single theme key, so
          // `currentColor` or a flat `group-hover/field:` value would fall
          // back to the inherited text color. Pass the resolved state token.
          color: iconColor,
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
        position="relative">
        {position && variant !== "underline" && (
          <View
            position="absolute"
            top="20%"
            height="60%"
            {...(position === "end"
              ? { left: 0, borderLeftWidth: 1 }
              : { right: 0, borderRightWidth: 1 })}
            borderColor={`${iconColor} group-hover/field:${hoverIconColor}`}
          />
        )}
        <Button
          ref={forwardedRef}
          variant="ghost"
          circular={true}
          noPadding={true}
          animate={true}
          transition="200ms"
          color={`${iconColor} group-hover/field:${hoverIconColor}`}
          ghostOpacity={0.25}
          {...props}
          size={adjusted}>
          <Button.Icon
            // Keep the compact field button frame while matching the 20px
            // glyph size used by the other input affordances.
            size={frameSize}>
            <View
              // View's web color style drove the nested SVG's currentColor in
              // v2. Tamagui v3 drops `color` on a View, so the icon no longer
              // follows this hover color; it needs its own color prop.
              color={`${iconColor} group-hover/field:${hoverIconColor}`}>
              {icon}
            </View>
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
          // field theme here or `accent` resolves against the root theme.
          theme={theme}
          borderColor={
            isNeutral
              ? "hairline focus-visible:hairlineActive"
              : "accent focus-visible:accentActive"
          }
          arrowBorderColor={isNeutral ? "hairline" : "accent"}>
          <Theme name="base">
            {messages && messages.length > 0 ? (
              <ValidationText
                color="accent"
                messages={messages}
                disabled={disabled}
                theme="base"
              />
            ) : (
              details || <ValidationText color="accent" disabled={disabled} />
            )}
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
          transition: "200ms",
          color: `${
            disabled ? "accentDisabled" : focused ? "accentActive" : "accent"
          } group-hover/field:${disabled ? "accentDisabled" : "accentHover"}`
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
