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
import { isSetObject } from "@stryke/type-checks/is-set-object";
import { atom } from "jotai";
import { isValidationResults } from "../utilities/is-validation-results";
export const getMessageType = (validationResults, type) => {
    const messages = [];
    if (validationResults.initialize) {
        messages.push(...validationResults.initialize.filter(message => type === message.type &&
            (message.message || message.code) &&
            !messages.some(existing => existing.message === message.message ||
                existing.code === message.code)));
    }
    if (validationResults.change) {
        messages.push(...validationResults.change.filter(message => type === message.type &&
            (message.message || message.code) &&
            !messages.some(existing => existing.message === message.message ||
                existing.code === message.code)));
    }
    if (validationResults.blur) {
        messages.push(...validationResults.blur.filter(message => type === message.type &&
            (message.message || message.code) &&
            !messages.some(existing => existing.message === message.message ||
                existing.code === message.code)));
    }
    if (validationResults.server) {
        messages.push(...validationResults.server.filter(message => type === message.type &&
            (message.message || message.code) &&
            !messages.some(existing => existing.message === message.message ||
                existing.code === message.code)));
    }
    if (validationResults.submit) {
        messages.push(...validationResults.submit.filter(message => type === message.type &&
            (message.message || message.code) &&
            !messages.some(existing => existing.message === message.message ||
                existing.code === message.code)));
    }
    return messages;
};
export const getFieldsMessageTypes = (messageMap, type) => {
    if (isValidationResults(messageMap)) {
        return getMessageType(messageMap, type);
    }
    return Object.entries(messageMap).reduce((ret, [field, messages]) => {
        if (!isValidationResults(messages)) {
            ret[field] = getFieldsMessageTypes(messages, type);
        }
        else {
            ret[field] = getMessageType(messages, type);
        }
        return ret;
    }, {});
};
export const atomWithFieldsMessageTypes = (validationResultsAtom, type) => {
    return atom(get => {
        return getFieldsMessageTypes(get(validationResultsAtom), type);
    });
};
export const getFieldsMessageList = (messageMap, type) => {
    if (isValidationResults(messageMap)) {
        return getMessageType(messageMap, type);
    }
    return Object.entries(messageMap ?? {}).reduce((ret, [_, messages]) => {
        if (isSetObject(messages)) {
            if (!isValidationResults(messages)) {
                ret.push(...getFieldsMessageList(messages, type));
            }
            else {
                ret.push(...getMessageType(messages, type));
            }
        }
        return ret;
    }, []);
};
/* export const atomWithFormFieldsMessageTypes = <
  TMessageType extends MessageType,
  TValidationDetails extends
    ValidationDetails<TMessageType> = ValidationDetails<TMessageType>
>(
  validationResultsFieldsAtom: Atom<
    InferFormState<Record<string, any>, ValidationResults>
  >,
  type: TMessageType
): Atom<InferFormState<Record<string, any>, TValidationDetails[]>> => {
  return atom<InferFormState<Record<string, any>, TValidationDetails[]>>(
    get => {
      return getFieldsMessageTypes(get(validationResultsFieldsAtom), type);
    }
  );
}; */
export const atomWithFieldsMessageList = (validationResultsAtom, type) => {
    return atom(get => {
        return getFieldsMessageList(get(validationResultsAtom), type);
    });
};
export const atomWithMessageTypes = (validationResultsAtom, type) => {
    return atom(get => {
        return getMessageType(get(validationResultsAtom), type);
    });
};
export const atomWithMessages = (errorMessagesAtom, warningMessagesAtom, infoMessagesAtom, helpMessagesAtom, successMessagesAtom) => atom(get => {
    const errorMessages = get(errorMessagesAtom);
    if (errorMessages.length > 0) {
        return errorMessages;
    }
    const warningMessages = get(warningMessagesAtom);
    if (warningMessages.length > 0) {
        return warningMessages;
    }
    const infoMessages = get(infoMessagesAtom);
    if (infoMessages.length > 0) {
        return infoMessages;
    }
    const helpMessages = get(helpMessagesAtom);
    if (helpMessages.length > 0) {
        return helpMessages;
    }
    const successMessages = get(successMessagesAtom);
    if (successMessages.length > 0) {
        return successMessages;
    }
    return [];
});
export const atomWithTheme = (optionsAtom, errorMessagesAtom, warningMessagesAtom, infoMessagesAtom, helpMessagesAtom, successMessagesAtom) => atom(get => {
    const options = get(optionsAtom);
    if (get(errorMessagesAtom).length > 0 ||
        options.theme?.includes("danger")) {
        return "danger";
    }
    else if (get(warningMessagesAtom).length > 0 ||
        options.theme?.includes("warning")) {
        return "warning";
    }
    else if (get(successMessagesAtom).length > 0 ||
        options.theme?.includes("success")) {
        return "success";
    }
    else if (get(infoMessagesAtom).length > 0 ||
        options.theme?.includes("info")) {
        return "info";
    }
    else if (get(helpMessagesAtom).length > 0 ||
        options.theme?.includes("discovery")) {
        return "discovery";
    }
    return "base";
});
//# sourceMappingURL=atom-with-messages.js.map