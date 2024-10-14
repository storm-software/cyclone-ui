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

import type { StackProps } from "@tamagui/core";
import { Stack, View, styled } from "@tamagui/core";
import { composeEventHandlers, withStaticProperties } from "@tamagui/helpers";
import { useFormStore } from "../hooks";
import { useFormActions } from "../hooks/use-form-actions";
import {
  FormProvider,
  FormProviderOptions
} from "../providers/FormStoreProvider";

const FORM_NAME = "Form";

const FormFrame = styled(Stack, {
  name: FORM_NAME,
  tag: "form"
});

const FormImpl = FormFrame.extractable(function Form({
  children,
  ...props
}: FormProviderOptions) {
  return (
    <FormProvider {...props}>
      <FormFrame {...(props as any)} onSubmit={(e: any) => e.preventDefault()}>
        {children}
      </FormFrame>
    </FormProvider>
  );
});

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
        isDisabled={store.get.canSubmit()}
        onPress={composeEventHandlers(onPress as any, submit)}>
        {children}
      </FormTriggerFrame>
    );
  }
);

export const Form = withStaticProperties(FormImpl, {
  Trigger: FormTrigger
});
