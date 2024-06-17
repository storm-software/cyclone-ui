import { useMessageController } from "@cyclone-ui/message";
import { FormApi, Validator } from "@tanstack/form-core";
import { FormFactory, FormOptions } from "@tanstack/react-form";
import { createFormFactory } from "./create-form-factory";

export const useFormFactory = <
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
>(
  defaultOpts: FormOptions<TFormData, TFormValidator> = {}
): FormFactory<TFormData, TFormValidator> => {
  const { show } = useMessageController();

  return createFormFactory<TFormData, TFormValidator>({
    onSubmitInvalid: (props: {
      value: TFormData;
      formApi: FormApi<TFormData, TFormValidator>;
    }) => {
      show("An error occured completing your request", {
        theme: "error"
      });
    },
    ...defaultOpts
  });
};
