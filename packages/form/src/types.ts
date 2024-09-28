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
  FieldState as BaseFieldState,
  FieldComponent,
  ReactFormApi
} from "@tanstack/react-form";
import {
  DeepKeys,
  DeepValue,
  FieldApi,
  FieldApiOptions,
  FormApi,
  Validator
} from "@tanstack/react-form/nextjs";
import { type ValibotValidator } from "@tanstack/valibot-form-adapter";

interface ReactFieldApi<TFormValues> {
  /**
   * A pre-bound and type-safe sub-field component using this field as a root.
   */
  Field: FieldComponent<TFormValues, ValibotValidator>;
}

export type FieldState<TFormValues> = BaseFieldState<TFormValues> & {
  /**
   * The theme state value.
   */
  theme: ColorRole;
  /**
   * The disabled state value.
   */
  disabled: boolean;

  /**
   * The required state value.
   */
  required: boolean;

  /**
   * The focused state value.
   */
  focused: boolean;
};

/**
 * The field options.
 */
export type UseFieldOptions<
  TFormValues,
  TFieldName extends DeepKeys<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFieldValue extends DeepValue<TFormValues, TFieldName> = DeepValue<
    TFormValues,
    TFieldName
  >
> = Omit<
  FieldApiOptions<
    TFormValues,
    TFieldName,
    TFieldValidator,
    ValibotValidator,
    TFieldValue
  >,
  "form"
> & {
  mode?: "value" | "array";
  theme?: ColorRole;
  focused?: boolean;
  required?: boolean;
  disabled?: boolean;
};

export type UseFieldReturn<
  TFormValues,
  TFieldName extends DeepKeys<TFormValues>,
  TFieldValidator extends
    | Validator<DeepValue<TFormValues, TFieldName>, unknown>
    | undefined = undefined,
  TFieldValue extends DeepValue<TFormValues, TFieldName> = DeepValue<
    TFormValues,
    TFieldName
  >
> = FieldApi<
  TFormValues,
  TFieldName,
  TFieldValidator,
  ValibotValidator,
  TFieldValue
> &
  ReactFieldApi<TFormValues>;

export type UseFormReturn<TFormValues> = FormApi<
  TFormValues,
  ValibotValidator
> &
  ReactFormApi<TFormValues, ValibotValidator>;
