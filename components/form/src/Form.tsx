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

import type { FormProviderOptions } from "@cyclone-ui/state/form";
import { FormApi, FormProvider, useFormActions } from "@cyclone-ui/state/form";
import type { GetProps, TamaguiElement, ViewProps } from "@tamagui/core";
import {
  createStyledHOC,
  isWeb,
  styled,
  useComposedRefs,
  View
} from "@tamagui/core";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import type { FormEvent, FormHTMLAttributes } from "react";
import { useCallback, useEffect, useRef } from "react";

const FORM_NAME = "Form";

const FormFrame = styled(View, {
  displayName: FORM_NAME,
  render: "form"
});

type FormFrameExtraProps = Pick<
  FormHTMLAttributes<HTMLFormElement>,
  | "acceptCharset"
  | "action"
  | "autoComplete"
  | "encType"
  | "method"
  | "noValidate"
  | "target"
>;
type FormFrameProps = GetProps<typeof FormFrame> & FormFrameExtraProps;

// The first control that failed validation: native constraints, or a field's
// own validators (which set `aria-invalid`). Hidden form inputs are skipped.
const INVALID_CONTROL_SELECTOR = [
  ':is(input, select, textarea, button)[aria-invalid="true"]',
  ':is(input, select, textarea):invalid:not([type="hidden"], [aria-hidden="true"])'
].join(", ");

const FormImpl = createStyledHOC(
  FormFrame,
  (
    { children, action, noValidate, ...props }: FormFrameProps,
    forwardedRef
  ) => {
    const form = FormApi.use();
    const name = form.name.get();
    const disabled = form.disabled.get();
    const setSubmitAttempts = form.submitAttempts.set();
    const { submit, reset, validateFields, isSubmittable } = useFormActions();
    const formRef = useRef<TamaguiElement>(null);
    // React calls `form.reset()` once a function `action` settles. The fields
    // keep their values (as React's controlled inputs do), so that a server
    // action's errors still refer to what the user entered.
    const skipActionResetRef = useRef(false);
    const ref = useComposedRefs(forwardedRef, formRef);

    // Until JavaScript loads, the browser enforces the controls' native
    // constraints (`required`, `type`, `pattern`, ...). After that the
    // fields report them in their own messages, so turn off the browser's.
    useEffect(() => {
      if (noValidate === undefined) {
        (formRef.current as unknown as HTMLFormElement | null)?.setAttribute(
          "novalidate",
          ""
        );
      }
    }, [noValidate]);

    const handleSubmit = useCallback(
      (event: FormEvent<HTMLFormElement>) => {
        const element = event.currentTarget;
        skipActionResetRef.current = false;
        // Stores every field's synchronous results before reading them.
        void validateFields();
        const valid =
          (noValidate === true || element.checkValidity()) && isSubmittable();

        // Without an `action`, the form only submits through `onSubmit`. With
        // one, React (a function) or the browser (a URL) takes over.
        if (!valid || !action) {
          event.preventDefault();
        }

        if (valid) {
          skipActionResetRef.current = typeof action === "function";
          void submit();
          return;
        }

        // Show every field's errors, then move to the first invalid control
        // once they have rendered.
        setSubmitAttempts(previous => previous + 1);
        requestAnimationFrame(() =>
          element.querySelector<HTMLElement>(INVALID_CONTROL_SELECTOR)?.focus()
        );
      },
      [
        action,
        isSubmittable,
        noValidate,
        setSubmitAttempts,
        submit,
        validateFields
      ]
    );

    // The fields hold the values, so reset them rather than the elements.
    const handleReset = useCallback(
      (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (skipActionResetRef.current) {
          skipActionResetRef.current = false;
          return;
        }

        reset();
      },
      [reset]
    );

    return (
      <FormFrame
        {...props}
        ref={ref}
        id={name}
        disabled={disabled}
        // Tamagui types `View` for React Native; on the web these reach the
        // `<form>` element.
        {...({
          action,
          noValidate,
          onSubmit: handleSubmit,
          onReset: handleReset
        } as object)}>
        {children}
      </FormFrame>
    );
  }
);

const FormGroup = ({
  children,
  ...props
}: FormProviderOptions & FormFrameProps) => {
  const {
    acceptCharset,
    action,
    autoComplete,
    encType,
    method,
    noValidate,
    target,
    ...rest
  } = props;

  return (
    <FormProvider {...rest}>
      <FormImpl
        acceptCharset={acceptCharset}
        action={action}
        autoComplete={autoComplete}
        encType={encType}
        method={method}
        noValidate={noValidate}
        target={target}>
        {children}
      </FormImpl>
    </FormProvider>
  );
};

const FormTriggerFrame = styled(View, {
  displayName: FORM_NAME
});

export type FormSubmitProps = ViewProps;

export const FormSubmit = createStyledHOC(
  FormTriggerFrame,
  (props: FormSubmitProps, forwardedRef) => {
    const { children, onPress, ...triggerProps } = props;

    const { submit } = useFormActions();

    const form = FormApi.use();
    // Not disabled while invalid: submitting is what shows a field's errors
    // before it has been blurred.
    const disabled = form.disabled.get() || form.submitting.get();

    return (
      <FormTriggerFrame
        render="button"
        {...({ type: "submit" } as object)}
        {...triggerProps}
        ref={forwardedRef}
        disabled={disabled}
        // On the web the button submits the `<form>`, whose submit event
        // validates and submits; native has no form element.
        onPress={
          isWeb
            ? onPress
            : composeEventHandlers(onPress, () => {
                void submit();
              })
        }>
        {children}
      </FormTriggerFrame>
    );
  }
);

export const FormReset = createStyledHOC(
  FormTriggerFrame,
  (props: FormSubmitProps, forwardedRef) => {
    const { children, onPress, ...triggerProps } = props;
    const { reset } = useFormActions();

    const form = FormApi.use();
    const disabled = form.disabled.get() || form.submitting.get();

    return (
      <FormTriggerFrame
        render="button"
        {...({ type: "reset" } as object)}
        {...triggerProps}
        ref={forwardedRef}
        disabled={disabled}
        // On the web the button resets the `<form>`, whose reset event
        // resets the fields; native has no form element.
        onPress={isWeb ? onPress : composeEventHandlers(onPress, reset)}>
        {children}
      </FormTriggerFrame>
    );
  }
);

export const Form = withStaticProperties(FormGroup, {
  Submit: FormSubmit,
  Reset: FormReset
});
