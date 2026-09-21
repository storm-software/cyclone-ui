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
  useFieldShouldShowPlaceholder,
  useFieldVariant
} from "@cyclone-ui/field";
import {
  getFormSizeScale,
  getFormSizeToken,
  getSized,
  getSpaced
} from "@cyclone-ui/helpers";
import { Input } from "@cyclone-ui/input";
import { FieldApi, useFieldActions, useFieldRef } from "@cyclone-ui/state/form";
import { Theme, useComposedRefs, withStaticProperties } from "@tamagui/core";
import { X } from "@tamagui/lucide-icons-2";
import type { FocusEvent, RefObject } from "react";
import {
  createContext,
  use,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react";

const InputFieldPresentationContext = createContext({
  hasStartIcon: false,
  registerStartIcon: () => () => undefined
});

const InputFieldTextBoxContext = createContext<{
  inputElementRef: RefObject<HTMLInputElement | null>;
} | null>(null);

const InputFieldGroup = Field.styleable((props, forwardedRef) => {
  const { children, variant = "floating", ...rest } = props;
  const [startIconCount, setStartIconCount] = useState(0);
  const registerStartIcon = useCallback(() => {
    setStartIconCount(count => count + 1);

    return () => setStartIconCount(count => Math.max(0, count - 1));
  }, []);
  const presentation = useMemo(
    () => ({ hasStartIcon: startIconCount > 0, registerStartIcon }),
    [registerStartIcon, startIconCount]
  );

  return (
    <InputFieldPresentationContext value={presentation}>
      <Field ref={forwardedRef} {...rest} variant={variant}>
        {children}
      </Field>
    </InputFieldPresentationContext>
  );
});

const InputFieldLabel = Field.Label.styleable((props, forwardedRef) => {
  const field = FieldApi.use();
  const size = field.size.get() ?? "md";
  const { hasStartIcon } = use(InputFieldPresentationContext);
  const controlSize = getFormSizeToken(size);
  const floatingLabelLeft = hasStartIcon
    ? getSpaced("$4xl") * getFormSizeScale(size) +
      getSized(controlSize, { shift: -2 }) +
      getSpaced("$2xl") * 2 * getFormSizeScale(size)
    : undefined;

  return (
    <Field.Label
      ref={forwardedRef}
      {...props}
      floatingLabelLeft={floatingLabelLeft}
    />
  );
});

const InputFieldIcon = Field.Icon.styleable<{
  position?: "start" | "end";
}>(({ position, ...props }, forwardedRef) => {
  const { registerStartIcon } = use(InputFieldPresentationContext);

  useLayoutEffect(() => {
    if (position === "start") {
      return registerStartIcon();
    }
  }, [position, registerStartIcon]);

  return <Field.Icon ref={forwardedRef} {...props} position={position} />;
});

const InputFieldControl = Input.styleable(
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
        change(event.detail);
      },
      [change]
    );
    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        if (event.currentTarget.contains(event.relatedTarget)) {
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

const InputFieldControlTextBox = Input.TextBox.styleable(
  ({ children, ...props }, forwardedRef) => {
    const field = FieldApi.use();
    const clearable = field.clearable.get();
    const disabled = field.disabled.get();
    const formattedValue = field.formattedValue.get();
    const options = field.options.get();

    const inputElementRef = useRef<HTMLInputElement>(null);

    const { change } = useFieldActions();
    const handleClear = useCallback(() => {
      change(options?.defaultValue);
      inputElementRef.current?.focus();
    }, [change, options?.defaultValue]);

    return (
      <InputFieldTextBoxContext value={{ inputElementRef }}>
        <Input.TextBox ref={forwardedRef} {...props}>
          {children}
          {clearable && formattedValue && (
            <Field.ThemeIcon position="end" onClick={handleClear}>
              <X
                color={disabled ? "$accentDisabled" : "$accent"}
                $group-field-hover={{
                  color: disabled ? "$accentDisabled" : "$accentHover"
                }}
              />
            </Field.ThemeIcon>
          )}
          <Field.ThemeIcon position="end" />
        </Input.TextBox>
      </InputFieldTextBoxContext>
    );
  }
);

const InputFieldControlTextBoxValue = Input.TextBox.Value.styleable(
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
      mount(inputRef);
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

const InputFieldControlTrigger = Input.Trigger.styleable(
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

export const InputField = withStaticProperties(InputFieldGroup, {
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
  Icon: InputFieldIcon
});
