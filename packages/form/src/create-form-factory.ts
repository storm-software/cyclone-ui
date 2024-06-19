import { Validator } from "@tanstack/form-core";
import {
  FormFactory,
  FormOptions,
  createFormFactory as reactFormCreateFormFactory
} from "@tanstack/react-form";

export const DEFAULT_FORM_OPTIONS = {
  asyncDebounceMs: 250
};

export const createFormFactory = <
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined
>(
  defaultOpts: FormOptions<TFormData, TFormValidator> = {}
): FormFactory<TFormData, TFormValidator> => {
  return reactFormCreateFormFactory<TFormData, TFormValidator>({
    ...DEFAULT_FORM_OPTIONS,
    ...defaultOpts
  });
};
