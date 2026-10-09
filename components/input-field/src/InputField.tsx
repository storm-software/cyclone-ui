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
  Field,
  useFieldHasStartIcon,
  useFieldShouldShowPlaceholder,
  useFieldVariant
} from "@cyclone-ui/field";
import {
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced
} from "@cyclone-ui/helpers";
import { X } from "@cyclone-ui/icons";
import { Input } from "@cyclone-ui/input";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import {
  createStyledHOC,
  Theme,
  useComposedRefs,
  withStaticProperties
} from "@tamagui/core";
import type { RefObject } from "react";
import {
  createContext,
  use,
  useCallback,
  useLayoutEffect,
  useRef
} from "react";

const InputFieldTextBoxContext = createContext<{
  inputElementRef: RefObject<HTMLInputElement | null>;
} | null>(null);

const InputFieldLabel = createStyledHOC(
  Field.Label,
  ({ variant = "floating", ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const size = field.size.get() ?? "md";
    const hasStartIcon = useFieldHasStartIcon();
    const controlSize = getFormSizeToken(size);
    const floatingLabelLeft = hasStartIcon
      ? getSpaced("4xl") * getFormSizeScale(size) +
        getSized(controlSize, { shift: -2 }) +
        getSpaced("2xl") * 2 * getFormSizeScale(size)
      : undefined;

    return (
      <Field.Label
        ref={forwardedRef}
        {...props}
        variant={variant}
        floatingLabelLeft={floatingLabelLeft}
      />
    );
  }
);

const InputFieldControl = createStyledHOC(
  Input,
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const name = field.name.get();
    const size = field.size.get();
    const disabled = field.disabled.get();
    const focused = field.focused.get();
    const variant = useFieldVariant();

    const { focus, blur, change } = useFieldActions();
    const handleChange = useCallback(
      (event: CustomEvent<string>) => {
        void change(event.detail);
      },
      [change]
    );
    const handleBlur = useCallback(
      // Tamagui v3 types `onBlur` as an intersection of the web and native
      // handlers (plus Input's context `() => any`); this handler reads the
      // web focus event.
      (event?: any) => {
        if (event?.currentTarget?.contains(event.relatedTarget)) {
          return;
        }

        void blur();
      },
      [blur]
    );

    return (
      <Input
        ref={forwardedRef}
        {...props}
        name={name}
        focused={focused}
        variant={variant}
        disabled={disabled}
        size={size}
        onFocus={focus}
        onBlur={handleBlur}
        onChange={handleChange}>
        {children}
      </Input>
    );
  }
);

const InputFieldControlTextBox = createStyledHOC(
  Input.TextBox,
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const clearable = field.clearable.get();
    const disabled = field.disabled.get();
    const formattedValue = field.formattedValue.get();
    const options = field.options.get();

    const inputElementRef = useRef<HTMLInputElement>(null);

    const { change } = useFieldActions();
    const handleClear = useCallback(() => {
      void change(options?.defaultValue);
      inputElementRef.current?.focus();
    }, [change, options?.defaultValue]);

    return (
      <InputFieldTextBoxContext value={{ inputElementRef }}>
        <Input.TextBox ref={forwardedRef} {...props}>
          {children}
          {clearable && Boolean(formattedValue) && (
            <Field.ThemeIcon position="end" onClick={handleClear}>
              <X
                color={`${disabled ? "accentDisabled" : "accent"} group-hover/field:${disabled ? "accentDisabled" : "accentHover"}`}
              />
            </Field.ThemeIcon>
          )}
          <Field.ThemeIcon position="end" />
        </Input.TextBox>
      </InputFieldTextBoxContext>
    );
  }
);

const InputFieldControlTextBoxValue = createStyledHOC(
  Input.TextBox.Value,
  (props, forwardedRef) => {
    const field = FieldApi.use();
    const theme = field.theme.get();
    const formattedValue = field.formattedValue.get();
    const textBox = use(InputFieldTextBoxContext);
    useFieldVariant(props.placeholder);
    const shouldShowPlaceholder = useFieldShouldShowPlaceholder(formattedValue);

    const { mount } = useFieldActions();
    const inputRef = useFieldRef(
      useComposedRefs(forwardedRef, textBox?.inputElementRef)
    );

    useLayoutEffect(() => {
      void mount(inputRef);
    }, [inputRef, mount]);

    return (
      <Theme name={theme}>
        <Input.TextBox.Value
          ref={inputRef}
          {...props}
          placeholder={shouldShowPlaceholder ? props.placeholder : undefined}
          value={formattedValue}
        />
      </Theme>
    );
  }
);

const InputFieldControlTrigger = createStyledHOC(
  Input.Trigger,
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const disabled = field.disabled.get();

    return (
      <Input.Trigger ref={forwardedRef} disabled={disabled} {...props}>
        {children}
      </Input.Trigger>
    );
  }
);

export const InputField = withStaticProperties(Field, {
  Label: InputFieldLabel,
  Link: Field.Link,
  Control: withStaticProperties(InputFieldControl, {
    TextBox: withStaticProperties(InputFieldControlTextBox, {
      Value: InputFieldControlTextBoxValue
    }),
    Trigger: withStaticProperties(InputFieldControlTrigger, {
      Icon: Input.Trigger.Icon,
      Text: Input.Trigger.Text
    })
  }),
  Details: Field.Details,
  Icon: Field.Icon
});
