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

import type { FormProviderOptions } from "@cyclone-ui/state/form";
import { FormApi, FormProvider, useFormActions } from "@cyclone-ui/state/form";
import type { GetProps, ViewProps } from "@tamagui/core";
import { View, styled } from "@tamagui/core";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import type { FormHTMLAttributes } from "react";

const FORM_NAME = "Form";

const FormFrame = styled(View, {
  name: FORM_NAME,
  tag: "form"
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

const FormImpl = FormFrame.styleable<FormFrameExtraProps>(
  ({ children, ...props }: FormFrameProps) => {
    const form = FormApi.use();
    const name = form.name.get();
    const disabled = form.disabled.get();

    return (
      <FormFrame {...props} id={name} disabled={disabled}>
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
  name: FORM_NAME
});

export interface FormSubmitProps extends ViewProps {}

export const FormSubmit = FormTriggerFrame.styleable(
  (props: FormSubmitProps, forwardedRef) => {
    const { children, onPress, ...triggerProps } = props;

    const { submit } = useFormActions();

    const form = FormApi.use();
    const canSubmit = form.canSubmit.get();

    return (
      <FormTriggerFrame
        tag="button"
        {...triggerProps}
        ref={forwardedRef}
        disabled={canSubmit}
        onPress={composeEventHandlers(onPress, submit)}>
        {children}
      </FormTriggerFrame>
    );
  }
);

export const FormReset = FormTriggerFrame.styleable(
  (props: FormSubmitProps, forwardedRef) => {
    const { children, onPress, ...triggerProps } = props;
    const { reset } = useFormActions();

    const form = FormApi.use();
    const canSubmit = form.canSubmit.get();

    return (
      <FormTriggerFrame
        tag="button"
        {...triggerProps}
        ref={forwardedRef}
        disabled={canSubmit}
        onPress={composeEventHandlers(onPress, reset)}>
        {children}
      </FormTriggerFrame>
    );
  }
);

export const Form = withStaticProperties(FormGroup, {
  Submit: FormSubmit,
  Reset: FormReset
});
