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
  FormProvider,
  FormProviderOptions,
  useFormActions,
  useFormStore
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
    const store = useFormStore();
    const name = store.get.name();
    const disabled = store.get.disabled();

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

export interface FormTriggerProps extends StackProps {}

export const FormTrigger = FormTriggerFrame.styleable(
  (props: FormTriggerProps, forwardedRef) => {
    const { children, onPress, ...triggerProps } = props;

    const store = useFormStore();
    const { submit } = useFormActions();

    return (
      <FormTriggerFrame
        tag="button"
        {...(triggerProps as any)}
        ref={forwardedRef}
        disabled={store.get.canSubmit()}
        onPress={composeEventHandlers(onPress, submit)}>
        {children}
      </FormTriggerFrame>
    );
  }
);

export const Form = withStaticProperties(FormGroup, {
  Trigger: FormTrigger
});
