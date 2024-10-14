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

import { ColorRole } from "@cyclone-ui/colors";
import { isSetObject } from "@storm-stack/types/type-checks/is-set-object";
import { MessageType } from "@storm-stack/types/utility-types/message-details";
import {
  ErrorValidationDetails,
  HelpValidationDetails,
  InfoValidationDetails,
  SuccessValidationDetails,
  ValidationDetails,
  WarningValidationDetails
} from "@storm-stack/types/utility-types/validation-details";
import { Atom, atom } from "jotai";
import { FieldOptions, InferFieldState, ValidationResults } from "../types";
import { isValidationResults } from "../utilities/is-validation-results";

export const getMessageType = <
  TMessageType extends MessageType,
  TValidationDetails extends TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : TMessageType extends "success"
          ? SuccessValidationDetails
          : ValidationDetails = TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : TMessageType extends "success"
          ? SuccessValidationDetails
          : ValidationDetails
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
  TValidationDetails extends TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : ValidationDetails = TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : ValidationDetails
>(
  messageMap: InferFieldState<TFieldValue, ValidationResults>,
  type: TMessageType
): InferFieldState<TFieldValue, TValidationDetails[]> => {
  if (isValidationResults(messageMap)) {
    return getMessageType(messageMap, type) as InferFieldState<
      TFieldValue,
      TValidationDetails[]
    >;
  }

  return Object.entries(messageMap).reduce(
    (ret, [field, messages]) => {
      if (!isValidationResults(messages)) {
        ret[field] = getFieldsMessageTypes(
          messages as InferFieldState<TFieldValue, ValidationResults>,
          type
        );
      } else {
        ret[field] = getMessageType(messages, type);
      }

      return ret;
    },
    {} as InferFieldState<TFieldValue, TValidationDetails[]>
  );
};

export const atomWithFieldsMessageTypes = <
  TFieldValue,
  TMessageType extends MessageType,
  TValidationDetails extends TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : ValidationDetails = TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : ValidationDetails
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
  TValidationDetails extends TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : ValidationDetails = TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : ValidationDetails
>(
  messageMap: InferFieldState<TFieldValue, ValidationResults>,
  type: TMessageType
): TValidationDetails[] => {
  if (isValidationResults(messageMap)) {
    return getMessageType(messageMap, type);
  }

  return Object.entries(messageMap ?? {}).reduce((ret, [_, messages]) => {
    if (isSetObject(messages)) {
      if (!isValidationResults(messages)) {
        ret.push(
          ...getFieldsMessageList(
            messages as InferFieldState<TFieldValue, ValidationResults>,
            type
          )
        );
      } else {
        ret.push(...getMessageType(messages, type));
      }
    }

    return ret;
  }, [] as TValidationDetails[]);
};

export const atomWithFieldsMessageList = <
  TFieldValue,
  TMessageType extends MessageType,
  TValidationDetails extends TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : ValidationDetails = TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : ValidationDetails
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
  TValidationDetails extends TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : TMessageType extends "success"
          ? SuccessValidationDetails
          : ValidationDetails = TMessageType extends "error"
    ? ErrorValidationDetails
    : TMessageType extends "warning"
      ? WarningValidationDetails
      : TMessageType extends "info"
        ? InfoValidationDetails
        : TMessageType extends "success"
          ? SuccessValidationDetails
          : ValidationDetails
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

const getTheme = (type: ColorRole, theme?: string) => {
  if (!theme) {
    return type;
  }

  return theme.toLowerCase().endsWith(type) ? theme : `${theme}_${type}`;
};

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
      options.theme?.toLowerCase().includes(ColorRole.ERROR)
    ) {
      return getTheme(ColorRole.ERROR, options.theme);
    } else if (
      get(warningMessagesAtom).length > 0 ||
      options.theme?.toLowerCase().includes(ColorRole.WARNING)
    ) {
      return getTheme(ColorRole.WARNING, options.theme);
    } else if (
      get(successMessagesAtom).length > 0 ||
      options.theme?.toLowerCase().includes(ColorRole.SUCCESS)
    ) {
      return getTheme(ColorRole.SUCCESS, options.theme);
    } else if (
      get(infoMessagesAtom).length > 0 ||
      options.theme?.toLowerCase().includes(ColorRole.INFO)
    ) {
      return getTheme(ColorRole.INFO, options.theme);
    } else if (
      get(helpMessagesAtom).length > 0 ||
      options.theme?.toLowerCase().includes(ColorRole.HELP)
    ) {
      return getTheme(ColorRole.HELP, options.theme);
    }

    return getTheme(ColorRole.BASE, options.theme);
  });
