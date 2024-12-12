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
  createMoleculeApi,
  SetStateActionWithReset,
  use
} from "@cyclone-ui/state";
import { isFunction } from "@storm-stack/types/type-checks/is-function";
import { isSet } from "@storm-stack/types/type-checks/is-set";
import { isString } from "@storm-stack/types/type-checks/is-string";
import { deepMerge } from "@storm-stack/utilities/helper-fns/deep-merge";
import {
  GetField,
  getField
} from "@storm-stack/utilities/helper-fns/get-field";
import { isEqual } from "@storm-stack/utilities/helper-fns/is-equal";
import { toPath } from "@storm-stack/utilities/helper-fns/to-path";
import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { atomWithDefault, RESET, splitAtom } from "jotai/utils";
import { atomWithFieldItems } from "../atoms/atom-with-field";
import {
  atomWithFieldsMessageList,
  atomWithFieldsMessageTypes,
  atomWithMessages,
  atomWithTheme
} from "../atoms/atom-with-messages";
import {
  FieldAtoms,
  FieldOptions,
  FieldOptionsState,
  FormAtoms
} from "../types";
import { requiredValidator } from "../utilities/validators";
import { FormApi } from "./form-molecule";

export const DEFAULT_FIELD_OPTIONS: FieldOptionsState = {
  theme: "base",
  size: "$true",
  debounceMs: 100,
  isEqual,
  required: false,
  disabled: false,
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

        return deepMerge(
          {
            validate: {
              onBlur: result.required ? [requiredValidator] : []
            }
          },
          result
        );
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

    const path = toPath(
      scope.includes("-") ? scope.slice(scope.indexOf("-") + 1) : scope
    );
    const pathAtom = atom(() => path);

    const nameAtom = atom(get => get(pathAtom).slice(-1)[0]!);

    const focusedAtom = focusAtom(form.focusedFields, optic =>
      optic.path(...path)
    );
    const requiredAtom = focusAtom(form.requiredFields, optic =>
      optic.path(...path)
    );
    const disabledAtom = focusAtom(form.disabledFields, optic =>
      optic.path(...path)
    );
    const touchedAtom = focusAtom(form.touchedFields, optic =>
      optic.path(...path)
    );
    const blurredAtom = focusAtom(form.blurredFields, optic =>
      optic.path(...path)
    );
    const validatingAtom = focusAtom(form.validatingFields, optic =>
      optic.path(...path)
    );
    const validationResultsAtom = focusAtom(
      form.validationResultsFields,
      optic => optic.path(...path)
    );
    const tabIndexAtom = focusAtom(form.tabIndexes, optic =>
      optic.path(...path)
    );
    const refAtom = focusAtom(form.refs, optic => optic.path(...path));
    const initialValueAtom = focusAtom(form.initialValues, optic =>
      optic.path(...path)
    );
    const valueAtom = focusAtom(form.values, optic => optic.path(...path));

    const dirtyAtom = atom(get => {
      const options = get(optionsAtom);
      return options.isEqual(get(valueAtom), get(initialValueAtom));
    });

    const errorsAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "error"
    );
    const warningsAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "warning"
    );
    const infoAtom = atomWithFieldsMessageTypes(validationResultsAtom, "info");
    const helpAtom = atomWithFieldsMessageTypes(validationResultsAtom, "help");
    const successesAtom = atomWithFieldsMessageTypes(
      validationResultsAtom,
      "success"
    );

    const errorMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "error"
    );
    const warningMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "warning"
    );
    const infoMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "info"
    );
    const helpMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "help"
    );
    const successMessagesAtom = atomWithFieldsMessageList(
      validationResultsAtom,
      "success"
    );

    const invalidAtom = atom(get => {
      const errorMessages = get(errorMessagesAtom);
      return errorMessages.length > 0;
    });
    const validAtom = atom(get => !get(invalidAtom));

    const formattedValueAtom = atom(get => {
      const options = get(optionsAtom);
      let value = get(valueAtom);

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
      return options.size ?? "$true";
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

      errors: errorsAtom,
      warnings: warningsAtom,
      info: infoAtom,
      help: helpAtom,
      success: successesAtom,

      errorMessages: errorMessagesAtom,
      warningMessages: warningMessagesAtom,
      infoMessages: infoMessagesAtom,
      helpMessages: helpMessagesAtom,
      successMessages: successMessagesAtom,

      theme: atomWithTheme(
        optionsAtom,
        errorMessagesAtom,
        warningMessagesAtom,
        infoMessagesAtom,
        helpMessagesAtom,
        successMessagesAtom
      ),
      messages: atomWithMessages(
        errorMessagesAtom,
        warningMessagesAtom,
        infoMessagesAtom,
        helpMessagesAtom,
        successMessagesAtom
      ),
      invalid: invalidAtom,
      valid: validAtom
    };
  },
  {
    type: "field"
  }
);
