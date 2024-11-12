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
  createAtomStore,
  CreateAtomStoreOptions,
  StoreAtomsWithoutSelectors
} from "@cyclone-ui/state";
import { isSet } from "@storm-stack/types/type-checks/is-set";
import { isString } from "@storm-stack/types/type-checks/is-string";
import { isEqual } from "@storm-stack/utilities/helper-fns/is-deep-equal";
import { toPath } from "@storm-stack/utilities/helper-fns/to-path";
import { Atom, atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { splitAtom } from "jotai/utils";
import { atomWithFieldItems } from "../atoms/atom-with-field";
import {
  atomWithFieldsMessageList,
  atomWithFieldsMessageTypes,
  atomWithMessages,
  atomWithTheme
} from "../atoms/atom-with-messages";
import { FieldBaseState, FieldOptions } from "../types";
import { formStore } from "./form-store";

export const createFieldStore = <TFieldValue>(name: string) => {
  const fieldStoreSelectors = (
    atoms: StoreAtomsWithoutSelectors<FieldBaseState<TFieldValue>>
  ) => {
    const dirtyAtom = atom(get =>
      isEqual(get(atoms.value), get(atoms.initialValue))
    );

    const errorsAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "error"
    );
    const warningsAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "warning"
    );
    const infoAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "info"
    );
    const helpAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "help"
    );
    const successesAtom = atomWithFieldsMessageTypes(
      atoms.validationResults,
      "success"
    );

    const errorMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "error"
    );
    const warningMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "warning"
    );
    const infoMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "info"
    );
    const helpMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "help"
    );
    const successMessagesAtom = atomWithFieldsMessageList(
      atoms.validationResults,
      "success"
    );

    const invalidAtom = atom(get => {
      const errorMessages = get(errorMessagesAtom);
      return errorMessages.length > 0;
    });
    const validAtom = atom(get => !get(invalidAtom));

    const formattedValueAtom = atom(get => {
      const options = get(atoms.options);
      let value = get(atoms.value);

      if (options?.format) {
        value = options.format(value);
      }

      if (!isSet(value)) {
        return "";
      } else if (isString(value)) {
        return value;
      }

      return String(value);
    });

    const itemsAtom = atomWithFieldItems(
      atoms.options,
      atoms.value,
      atoms.disabled as Atom<boolean>
    );
    const itemsAtomsAtom = splitAtom(itemsAtom);

    const sizeAtom = atom(get => {
      const options = get(atoms.options);
      return options.size ?? "$true";
    });

    return {
      pristine: atom(get => !get(dirtyAtom)),
      dirty: dirtyAtom,

      formattedValue: formattedValueAtom,

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
        atoms.options,
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
  };

  // const fullName = scope ? `${scope}.${name}` : name;
  const path = toPath(name);

  return createAtomStore<
    FieldBaseState<TFieldValue>,
    CreateAtomStoreOptions<
      FieldBaseState<TFieldValue>,
      typeof fieldStoreSelectors
    >
  >({
    name: "fieldGroup",
    initialState: {
      name,
      path,
      focused: focusAtom(formStore.api.atom.focusedFields, optic =>
        optic.path(...path)
      ),
      required: focusAtom(formStore.api.atom.requiredFields, optic =>
        optic.path(...path)
      ),
      disabled: focusAtom(formStore.api.atom.disabledFields, optic =>
        optic.path(...path)
      ),
      touched: focusAtom(formStore.api.atom.touchedFields, optic =>
        optic.path(...path)
      ),
      blurred: focusAtom(formStore.api.atom.blurredFields, optic =>
        optic.path(...path)
      ),
      validating: focusAtom(formStore.api.atom.validatingFields, optic =>
        optic.path(...path)
      ),
      validationResults: focusAtom(
        formStore.api.atom.validationResultsFields,
        optic => optic.path(...path)
      ),
      initialValue: focusAtom(formStore.api.atom.initialValues, optic =>
        optic.path(...path)
      ),
      previousValue: focusAtom(formStore.api.atom.previousValues, optic =>
        optic.path(...path)
      ),
      value: focusAtom(formStore.api.atom.values, optic => optic.path(...path)),
      options: {} as FieldOptions
    },
    selectors: fieldStoreSelectors
  });
};

export type FieldStore<TFieldValue = any> = ReturnType<
  typeof createFieldStore<TFieldValue>
>;
export type FieldStoreApi<TFieldValue = any> = FieldStore<TFieldValue>["api"];
export type FieldStoreAtom<TFieldValue = any> =
  FieldStoreApi<TFieldValue>["atom"];
export type UseFieldStore<TFieldValue = any> =
  FieldStore<TFieldValue>["useStore"];
