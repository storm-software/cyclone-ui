import { useLayoutEffect } from "react";
import { useMessageController } from "@cyclone-ui/provider";
import { FormApi, FormState, mergeForm, Validator } from "@tanstack/form-core";
import { FormFactory, FormOptions, useTransform } from "@tanstack/react-form";

/**
 * A hook that creates a form and provides a way to interact with it.
 *
 * @param factory - The factory to use to create the form
 * @param state - The current state of the form - more details can be found in the [React documentation](https://react.dev/reference/react/useActionState)
 * @param options - The options to use when creating the form
 * @returns The [form API](https://tanstack.com/form/latest/docs/reference/formApi) to interact with the form
 */
export const useForm = <
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
>(
  factory: FormFactory<TFormData, TFormValidator>,
  state = {},
  options: FormOptions<TFormData, TFormValidator> = {}
): FormApi<TFormData, TFormValidator> => {
  const { showError } = useMessageController();
  const api = factory.useForm({
    transform: useTransform(
      (baseForm: FormApi<TFormData, TFormValidator>) =>
        mergeForm(baseForm, state),
      [state]
    ),
    ...options
  });

  const formErrors = api.useStore<FormState<TFormData>["errors"]>(
    formState => formState.errors
  );
  useLayoutEffect(() => {
    showError(formErrors.join("\n"), {
      heading: "An error occured while trying to complete your request"
    });
  }, [showError]);

  return api;
};
