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
import type { MessageType } from "@stryke/types/messages";
import type {
  ErrorValidationDetail as ErrorValidationDetails,
  HelpValidationDetail as HelpValidationDetails,
  InfoValidationDetail as InfoValidationDetails,
  SuccessValidationDetail as SuccessValidationDetails,
  ValidationDetail as ValidationDetails,
  WarningValidationDetail as WarningValidationDetails
} from "@stryke/types/validations";
import type { Atom } from "jotai";
import { atom } from "jotai";
import type { InferFieldState, ValidationResults } from "../types";
import { isValidationResults } from "../utilities/is-validation-results";

export const getMessageType = <
  TMessageType extends MessageType,
  TValidationDetails extends ValidationDetails<TMessageType> =
    ValidationDetails<TMessageType>
>(
  validationResults: ValidationResults,
  type: TMessageType
): TValidationDetails[] => {
  const messages = [] as TValidationDetails[];
  if (validationResults.initialize) {
    messages.push(
      ...(validationResults.initialize.filter(
        message =>
          type === message.type &&
          (message.message || message.code) &&
          !messages.some(
            existing =>
              existing.message === message.message ||
              existing.code === message.code
          )
      ) as TValidationDetails[])
    );
  }
  if (validationResults.change) {
    messages.push(
      ...(validationResults.change.filter(
        message =>
          type === message.type &&
          (message.message || message.code) &&
          !messages.some(
            existing =>
              existing.message === message.message ||
              existing.code === message.code
          )
      ) as TValidationDetails[])
    );
  }
  if (validationResults.blur) {
    messages.push(
      ...(validationResults.blur.filter(
        message =>
          type === message.type &&
          (message.message || message.code) &&
          !messages.some(
            existing =>
              existing.message === message.message ||
              existing.code === message.code
          )
      ) as TValidationDetails[])
    );
  }
  if (validationResults.server) {
    messages.push(
      ...(validationResults.server.filter(
        message =>
          type === message.type &&
          (message.message || message.code) &&
          !messages.some(
            existing =>
              existing.message === message.message ||
              existing.code === message.code
          )
      ) as TValidationDetails[])
    );
  }
  if (validationResults.submit) {
    messages.push(
      ...(validationResults.submit.filter(
        message =>
          type === message.type &&
          (message.message || message.code) &&
          !messages.some(
            existing =>
              existing.message === message.message ||
              existing.code === message.code
          )
      ) as TValidationDetails[])
    );
  }

  return messages;
};

export const getFieldsMessageTypes = <
  TFieldValue,
  TMessageType extends MessageType,
  TValidationDetails extends ValidationDetails<TMessageType> =
    ValidationDetails<TMessageType>
>(
  messageMap: InferFieldState<TFieldValue, ValidationResults>,
  type: TMessageType
): InferFieldState<TFieldValue, TValidationDetails[]> => {
  if (isValidationResults(messageMap)) {
    return getMessageType<TMessageType, TValidationDetails>(messageMap, type);
  }

  return Object.entries(messageMap).reduce(
    (ret, [field, messages]) => {
      if (!isValidationResults(messages)) {
        ret[field] = getFieldsMessageTypes(
          messages as InferFieldState<TFieldValue, ValidationResults>,
          type
        );
      } else {
        ret[field] = getMessageType<TMessageType, TValidationDetails>(
          messages,
          type
        );
      }

      return ret;
    },
    {} as InferFieldState<TFieldValue, TValidationDetails[]>
  );
};

export const atomWithFieldsMessageTypes = <
  TFieldValue,
  TMessageType extends MessageType,
  TValidationDetails extends ValidationDetails<TMessageType> =
    ValidationDetails<TMessageType>
>(
  validationResultsAtom: Atom<InferFieldState<TFieldValue, ValidationResults>>,
  type: TMessageType
): Atom<InferFieldState<TFieldValue, TValidationDetails[]>> => {
  return atom<InferFieldState<TFieldValue, TValidationDetails[]>>(get => {
    return getFieldsMessageTypes(get(validationResultsAtom), type);
  });
};

export const getFieldsMessageList = <
  TFieldValue,
  TMessageType extends MessageType,
  TValidationDetails extends ValidationDetails<TMessageType> =
    ValidationDetails<TMessageType>
>(
  messageMap: InferFieldState<TFieldValue, ValidationResults>,
  type: TMessageType
): TValidationDetails[] => {
  if (isValidationResults(messageMap)) {
    return getMessageType<TMessageType, TValidationDetails>(messageMap, type);
  }

  return Object.entries(messageMap ?? {}).reduce((ret, [_, messages]) => {
    if (isSetObject(messages)) {
      if (!isValidationResults(messages)) {
        ret.push(
          ...getFieldsMessageList<
            TFieldValue,
            TMessageType,
            TValidationDetails
          >(messages as InferFieldState<TFieldValue, ValidationResults>, type)
        );
      } else {
        ret.push(
          ...getMessageType<TMessageType, TValidationDetails>(messages, type)
        );
      }
    }

    return ret;
  }, [] as TValidationDetails[]);
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

export const atomWithFieldsMessageList = <
  TFieldValue,
  TMessageType extends MessageType,
  TValidationDetails extends ValidationDetails<TMessageType> =
    ValidationDetails<TMessageType>
>(
  validationResultsAtom: Atom<InferFieldState<TFieldValue, ValidationResults>>,
  type: TMessageType
): Atom<TValidationDetails[]> => {
  return atom<TValidationDetails[]>(get => {
    return getFieldsMessageList<TFieldValue, TMessageType, TValidationDetails>(
      get(validationResultsAtom),
      type
    );
  });
};

export const atomWithMessageTypes = <
  TMessageType extends MessageType,
  TValidationDetails extends ValidationDetails<TMessageType> =
    ValidationDetails<TMessageType>
>(
  validationResultsAtom: Atom<ValidationResults>,
  type: TMessageType
): Atom<TValidationDetails[]> => {
  return atom<TValidationDetails[]>(get => {
    return getMessageType<TMessageType, TValidationDetails>(
      get(validationResultsAtom),
      type
    );
  });
};

export const atomWithMessages = (
  errorMessagesAtom: Atom<ErrorValidationDetails[]>,
  warningMessagesAtom: Atom<WarningValidationDetails[]>,
  infoMessagesAtom: Atom<InfoValidationDetails[]>,
  helpMessagesAtom: Atom<HelpValidationDetails[]>,
  successMessagesAtom: Atom<SuccessValidationDetails[]>
) =>
  atom<ValidationDetails[]>(get => {
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

export const atomWithTheme = (
  optionsAtom: Atom<{ theme?: string }>,
  errorMessagesAtom: Atom<ErrorValidationDetails[]>,
  warningMessagesAtom: Atom<WarningValidationDetails[]>,
  infoMessagesAtom: Atom<InfoValidationDetails[]>,
  helpMessagesAtom: Atom<HelpValidationDetails[]>,
  successMessagesAtom: Atom<SuccessValidationDetails[]>
) =>
  atom<string>(get => {
    const options = get(optionsAtom);
    if (
      get(errorMessagesAtom).length > 0 ||
      options.theme?.includes("danger")
    ) {
      return "danger";
    } else if (
      get(warningMessagesAtom).length > 0 ||
      options.theme?.includes("warning")
    ) {
      return "warning";
    } else if (
      get(successMessagesAtom).length > 0 ||
      options.theme?.includes("success")
    ) {
      return "success";
    } else if (
      get(infoMessagesAtom).length > 0 ||
      options.theme?.includes("info")
    ) {
      return "info";
    } else if (
      get(helpMessagesAtom).length > 0 ||
      options.theme?.includes("discovery")
    ) {
      return "discovery";
    }

    return "base";
  });
