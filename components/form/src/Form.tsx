/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

import {
  FormApi,
  FormProvider,
  FormProviderOptions,
  useFormActions
} from "@cyclone-ui/form-state";
import type { GetProps, StackProps } from "@tamagui/core";
import { Stack, View, styled } from "@tamagui/core";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import { FormHTMLAttributes } from "react";

const FORM_NAME = "Form";

const FormFrame = styled(Stack, {
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

export interface FormSubmitProps extends StackProps {}

export const FormSubmit = FormTriggerFrame.styleable(
  (props: FormSubmitProps, forwardedRef) => {
    const { children, onPress, ...triggerProps } = props;

    const { submit } = useFormActions();

    const form = FormApi.use();
    const canSubmit = form.canSubmit.get();

    return (
      <FormTriggerFrame
        tag="button"
        {...(triggerProps as any)}
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
        {...(triggerProps as any)}
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
