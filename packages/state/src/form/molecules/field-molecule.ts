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

import { deepMerge } from "@stryke/helpers/deep-merge";
import type { GetField } from "@stryke/helpers/get-field";
import { getField } from "@stryke/helpers/get-field";
import { isEqual } from "@stryke/helpers/is-equal";
import { toPath } from "@stryke/helpers/to-path";
import { isFunction } from "@stryke/type-checks/is-function";
import { isSet } from "@stryke/type-checks/is-set";
import { isString } from "@stryke/type-checks/is-string";
import type { SetStateAction } from "jotai";
import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { atomWithDefault, RESET, splitAtom } from "jotai/utils";
import { createMoleculeApi, use } from "../../base";
import type { SetStateActionWithReset } from "../../types";
import { atomWithFieldItems } from "../atoms/atom-with-field";
import {
  atomWithFieldsMessageList,
  atomWithFieldsMessageTypes,
  atomWithMessages,
  atomWithTheme
} from "../atoms/atom-with-messages";
import type {
  FieldAtoms,
  FieldOptions,
  FieldOptionsState,
  FormAtoms,
  InferFieldState
} from "../types";
import { requiredValidator } from "../utilities/validators";
import { FormApi } from "./form-molecule";

export const DEFAULT_FIELD_OPTIONS: FieldOptionsState = {
  theme: "base",
  size: "md",
  debounceMs: 100,
  isEqual,
  required: false,
  disabled: false,
  readOnly: false,
  clearable: false,
  initialValue: null
} as const;

export const FieldApi = createMoleculeApi(
  <
    TScope extends string,
    TFormValues extends Record<string, any> = Record<string, any>,
    TFieldValue extends GetField<TFormValues, TScope> = GetField<
      TFormValues,
      TScope
    >
  >(
    scope: TScope
  ): FieldAtoms<TFieldValue> => {
    const formScope = use(FormApi.Scope);
    const formScopeAtom = atom(() => formScope);

    const form = use<FormAtoms<TFormValues>>(FormApi.Molecule);

    const optionsBaseAtom = atom(DEFAULT_FIELD_OPTIONS);
    const optionsAtom = atom<
      FieldOptionsState<TFieldValue>,
      [SetStateActionWithReset<FieldOptions<TFieldValue>>],
      void
    >(
      get => {
        const formOptions = get(form.options);
        const options = get(optionsBaseAtom);

        const result = deepMerge(formOptions.defaultFieldOptions, options);

        return {
          ...result,
          validate: {
            ...result.validate,
            // Alongside the field's own: merging the two option objects
            // replaced this list whenever the field passed `validate`.
            onBlur: [
              ...(result.required ? [requiredValidator] : []),
              ...(result.validate?.onBlur ?? [])
            ]
          }
        };
      },
      (get, set, update) => {
        let nextValue = {};
        if (isFunction(update)) {
          nextValue = update(get(optionsBaseAtom));
        } else if (update === RESET) {
          nextValue = {};
        } else {
          nextValue = update;
        }

        set(optionsBaseAtom, deepMerge(DEFAULT_FIELD_OPTIONS, nextValue));
      }
    );

    // The scope is `${formName}-${name}`. Strip the known form name rather
    // than splitting on the first "-": form and field names may contain "-".
    const formPrefix = `${formScope}-`;
    const path = toPath(
      scope.startsWith(formPrefix)
        ? scope.slice(formPrefix.length)
        : scope.includes("-")
          ? scope.slice(scope.indexOf("-") + 1)
          : scope
    );
    const pathAtom = atom(() => path);

    const nameAtom = atom(get => get(pathAtom).slice(-1)[0]!);

    const focusedAtom = focusAtom(form.focusedFields, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["focused"];
    const requiredStateAtom = focusAtom(form.requiredFields, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["required"];
    const disabledStateAtom = focusAtom(form.disabledFields, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["disabled"];
    const readOnlyStateAtom = focusAtom(form.readOnlyFields, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["readOnly"];
    const requiredAtom = atom<
      InferFieldState<TFieldValue, boolean>,
      [SetStateAction<InferFieldState<TFieldValue, boolean>>],
      void
    >(
      get => get(requiredStateAtom) ?? get(optionsAtom).required,
      (_get, set, update) => {
        set(requiredStateAtom, update);
      }
    );
    const disabledAtom = atom<
      InferFieldState<TFieldValue, boolean>,
      [SetStateAction<InferFieldState<TFieldValue, boolean>>],
      void
    >(
      get => get(disabledStateAtom) ?? get(optionsAtom).disabled,
      (_get, set, update) => {
        set(disabledStateAtom, update);
      }
    );
    const readOnlyAtom = atom<
      InferFieldState<TFieldValue, boolean>,
      [SetStateAction<InferFieldState<TFieldValue, boolean>>],
      void
    >(
      get => get(readOnlyStateAtom) ?? get(optionsAtom).readOnly,
      (_get, set, update) => {
        set(readOnlyStateAtom, update);
      }
    );
    const clearableAtom = atom(get => get(optionsAtom).clearable);
    const touchedAtom = focusAtom(form.touchedFields, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["touched"];
    const blurredAtom = focusAtom(form.blurredFields, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["blurred"];
    const validatingAtom = focusAtom(form.validatingFields, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["validating"];
    const validationResultsAtom = focusAtom(
      form.validationResultsFields,
      optic => optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["validationResults"];
    const tabIndexAtom = focusAtom(form.tabIndexes, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["tabIndex"];
    const refAtom = focusAtom(form.refs, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["ref"];
    const initialValueAtom = focusAtom(form.initialValues, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["initialValue"];
    const valueAtom = focusAtom(form.values, optic =>
      optic.path(...path)
    ) as unknown as FieldAtoms<TFieldValue>["value"];

    const dirtyAtom = atom(get => {
      const options = get(optionsAtom);

      return options.isEqual(get(valueAtom), get(initialValueAtom));
    });

    // Errors stay hidden until the user leaves the field (or submits), so
    // they are not flagged while still typing.
    const showErrorsAtom = atom(
      get =>
        Boolean(get(optionsAtom).showErrorsBeforeBlur) ||
        Boolean(get(blurredAtom)) ||
        get(form.submitAttempts) > 0
    );

    const allErrorsAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "danger"
    );
    const errorsAtom = atom(get =>
      get(showErrorsAtom) ? get(allErrorsAtom) : []
    );
    const warningsAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "warning"
    );
    const infoAtom = atomWithFieldsMessageTypes(validationResultsAtom, "info");
    const discoveryAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "discovery"
    );
    const successesAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "success"
    );
    const positivesAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "success"
    );
    const negativesAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "danger"
    );

    const allErrorMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "danger"
    );
    const errorMessagesAtom = atom(get =>
      get(showErrorsAtom) ? get(allErrorMessagesAtom) : []
    );
    const warningMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "warning"
    );
    const infoMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "info"
    );
    const discoveryMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "discovery"
    );
    const successMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "success"
    );
    const positiveMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "success"
    );
    const negativeMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "danger"
    );

    const invalidAtom = atom(get => {
      const errorMessages = get(errorMessagesAtom);

      return errorMessages.length > 0;
    });
    const validAtom = atom(get => !get(invalidAtom));

    const formattedValueAtom = atom(get => {
      const options = get(optionsAtom);
      const value = get(valueAtom);

      let formattedValue;
      if (options?.format) {
        formattedValue = options.format(value);
      } else {
        formattedValue = value;
      }

      if (!isSet(formattedValue)) {
        return "";
      } else if (isString(formattedValue)) {
        return formattedValue;
      }

      return String(formattedValue);
    });

    const itemsAtom = atomWithFieldItems<TFieldValue>(
      optionsAtom,
      valueAtom,
      disabledAtom
    );
    const itemsAtomsAtom = splitAtom(itemsAtom);

    const sizeAtom = atomWithDefault(get => {
      const options = get(optionsAtom);

      return options.size ?? "md";
    });

    const previousValueAtom = atom(get => {
      const previousValues = get(form.previousValues);

      return getField(previousValues, get(pathAtom).join(".")) ?? null;
    });

    return {
      options: optionsAtom,
      form: formScopeAtom,
      name: nameAtom,
      path: pathAtom,

      initialValue: initialValueAtom,
      previousValue: previousValueAtom,
      value: valueAtom,
      formattedValue: formattedValueAtom,

      focused: focusedAtom,
      required: requiredAtom,
      disabled: disabledAtom,
      readOnly: readOnlyAtom,
      clearable: clearableAtom,
      touched: touchedAtom,
      blurred: blurredAtom,
      validating: validatingAtom,
      validationResults: validationResultsAtom,
      tabIndex: tabIndexAtom,
      ref: refAtom,

      pristine: atom(get => !get(dirtyAtom)),
      dirty: dirtyAtom,

      items: itemsAtom,
      itemsAtoms: itemsAtomsAtom,

      size: sizeAtom,

      errors: errorsAtom as FieldAtoms<TFieldValue>["errors"],
      warnings: warningsAtom as FieldAtoms<TFieldValue>["warnings"],
      info: infoAtom as FieldAtoms<TFieldValue>["info"],
      discovery: discoveryAtom as FieldAtoms<TFieldValue>["discovery"],
      success: successesAtom as FieldAtoms<TFieldValue>["success"],
      positive: positivesAtom as FieldAtoms<TFieldValue>["positive"],
      negative: negativesAtom as FieldAtoms<TFieldValue>["negative"],

      dangerMessages: errorMessagesAtom,
      warningMessages: warningMessagesAtom,
      infoMessages: infoMessagesAtom,
      discoveryMessages: discoveryMessagesAtom,
      successMessages: successMessagesAtom,
      positiveMessages: positiveMessagesAtom,
      negativeMessages: negativeMessagesAtom,

      theme: atomWithTheme(
        optionsAtom,
        errorMessagesAtom,
        warningMessagesAtom,
        infoMessagesAtom,
        discoveryMessagesAtom,
        successMessagesAtom,
        positiveMessagesAtom,
        negativeMessagesAtom
      ),
      messages: atomWithMessages(
        errorMessagesAtom,
        warningMessagesAtom,
        infoMessagesAtom,
        discoveryMessagesAtom,
        successMessagesAtom,
        positiveMessagesAtom,
        negativeMessagesAtom
      ),
      invalid: invalidAtom,
      valid: validAtom
    };
  },
  {
    type: "field"
  }
);
