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

import { ColorThemeName } from "@cyclone-ui/colors";
import { isSetObject } from "@storm-stack/types/type-checks/is-set-object";
import { MessageType } from "@storm-stack/types/utility-types/messages";
import {
  ErrorValidationDetails,
  HelpValidationDetails,
  InfoValidationDetails,
  SuccessValidationDetails,
  ValidationDetails,
  WarningValidationDetails
} from "@storm-stack/types/utility-types/validations";
import { Atom, atom } from "jotai";
import { FieldOptions, InferFieldState, ValidationResults } from "../types";
import { isValidationResults } from "../utilities/is-validation-results";

export const getMessageType = <
  TMessageType extends MessageType,
  TValidationDetails extends
    ValidationDetails<TMessageType> = ValidationDetails<TMessageType>
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
  TValidationDetails extends
    ValidationDetails<TMessageType> = ValidationDetails<TMessageType>
>(
  messageMap: InferFieldState<TFieldValue, ValidationResults>,
  type: TMessageType
): InferFieldState<TFieldValue, TValidationDetails[]> => {
  if (isValidationResults(messageMap)) {
    return getMessageType<TMessageType, TValidationDetails>(
      messageMap,
      type
    ) as InferFieldState<TFieldValue, TValidationDetails[]>;
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
  TValidationDetails extends
    ValidationDetails<TMessageType> = ValidationDetails<TMessageType>
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
  TValidationDetails extends
    ValidationDetails<TMessageType> = ValidationDetails<TMessageType>
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

export const atomWithFieldsMessageList = <
  TFieldValue,
  TMessageType extends MessageType,
  TValidationDetails extends
    ValidationDetails<TMessageType> = ValidationDetails<TMessageType>
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
  TValidationDetails extends
    ValidationDetails<TMessageType> = ValidationDetails<TMessageType>
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
  atom<ValidationDetails[] | undefined>(get => {
    const errorMessages = get(errorMessagesAtom);
    if (errorMessages.length > 0) {
      return errorMessages as ValidationDetails[];
    }
    const warningMessages = get(warningMessagesAtom);
    if (warningMessages.length > 0) {
      return warningMessages as ValidationDetails[];
    }
    const infoMessages = get(infoMessagesAtom);
    if (infoMessages.length > 0) {
      return infoMessages as ValidationDetails[];
    }
    const helpMessages = get(helpMessagesAtom);
    if (helpMessages.length > 0) {
      return helpMessages as ValidationDetails[];
    }
    const successMessages = get(successMessagesAtom);
    if (successMessages.length > 0) {
      return successMessages as ValidationDetails[];
    }

    return undefined;
  });

export const atomWithTheme = (
  optionsAtom: Atom<FieldOptions>,
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
      options.theme?.includes(ColorThemeName.DANGER)
    ) {
      return ColorThemeName.DANGER;
    } else if (
      get(warningMessagesAtom).length > 0 ||
      options.theme?.includes(ColorThemeName.WARNING)
    ) {
      return ColorThemeName.WARNING;
    } else if (
      get(successMessagesAtom).length > 0 ||
      options.theme?.includes(ColorThemeName.SUCCESS)
    ) {
      return ColorThemeName.SUCCESS;
    } else if (
      get(infoMessagesAtom).length > 0 ||
      options.theme?.includes(ColorThemeName.INFO)
    ) {
      return ColorThemeName.INFO;
    } else if (
      get(helpMessagesAtom).length > 0 ||
      options.theme?.includes(ColorThemeName.HELP)
    ) {
      return ColorThemeName.HELP;
    }

    return ColorThemeName.BASE;
  });
