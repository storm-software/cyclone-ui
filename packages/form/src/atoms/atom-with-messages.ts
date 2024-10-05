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
import {
  ErrorMessageDetails,
  InfoMessageDetails,
  MessageDetails,
  MessageType,
  SuccessMessageDetails,
  WarningMessageDetails
} from "@storm-stack/types/utility-types/messages";
import { Atom, atom } from "jotai";
import { FieldOptions, FieldValidationResults } from "../types";

export const atomWithMessageTypes = <
  TMessageType extends MessageType,
  TMessageDetails extends TMessageType extends "error"
    ? ErrorMessageDetails
    : TMessageType extends "warning"
      ? WarningMessageDetails
      : TMessageType extends "info"
        ? InfoMessageDetails
        : TMessageType extends "success"
          ? SuccessMessageDetails
          : MessageDetails = TMessageType extends "error"
    ? ErrorMessageDetails
    : TMessageType extends "warning"
      ? WarningMessageDetails
      : TMessageType extends "info"
        ? InfoMessageDetails
        : TMessageType extends "success"
          ? SuccessMessageDetails
          : MessageDetails
>(
  validationResultsAtom: Atom<FieldValidationResults>,
  type: TMessageType
): Atom<TMessageDetails[]> => {
  return atom<TMessageDetails[]>(get => {
    const messageMap = get(validationResultsAtom);

    const messages = [] as TMessageDetails[];
    if (messageMap.mount) {
      messages.push(
        ...(messageMap.mount.filter(
          message =>
            type === message.type &&
            (message.message || message.code) &&
            !messages.some(
              existing =>
                existing.message === message.message ||
                existing.code === message.code
            )
        ) as TMessageDetails[])
      );
    }
    if (messageMap.change) {
      messages.push(
        ...(messageMap.change.filter(
          message =>
            type === message.type &&
            (message.message || message.code) &&
            !messages.some(
              existing =>
                existing.message === message.message ||
                existing.code === message.code
            )
        ) as TMessageDetails[])
      );
    }
    if (messageMap.blur) {
      messages.push(
        ...(messageMap.blur.filter(
          message =>
            type === message.type &&
            (message.message || message.code) &&
            !messages.some(
              existing =>
                existing.message === message.message ||
                existing.code === message.code
            )
        ) as TMessageDetails[])
      );
    }
    if (messageMap.server) {
      messages.push(
        ...(messageMap.server.filter(
          message =>
            type === message.type &&
            (message.message || message.code) &&
            !messages.some(
              existing =>
                existing.message === message.message ||
                existing.code === message.code
            )
        ) as TMessageDetails[])
      );
    }
    if (messageMap.submit) {
      messages.push(
        ...(messageMap.submit.filter(
          message =>
            type === message.type &&
            (message.message || message.code) &&
            !messages.some(
              existing =>
                existing.message === message.message ||
                existing.code === message.code
            )
        ) as TMessageDetails[])
      );
    }

    return messages;
  });
};

export const atomWithMessages = (
  errorMessagesAtom: Atom<ErrorMessageDetails[]>,
  warningMessagesAtom: Atom<WarningMessageDetails[]>,
  infoMessagesAtom: Atom<InfoMessageDetails[]>,
  successMessagesAtom: Atom<SuccessMessageDetails[]>
) =>
  atom<MessageDetails[] | undefined>(get => {
    const errorMessages = get(errorMessagesAtom);
    if (errorMessages.length > 0) {
      return errorMessages as MessageDetails[];
    }
    const warningMessages = get(warningMessagesAtom);
    if (warningMessages.length > 0) {
      return warningMessages as MessageDetails[];
    }
    const infoMessages = get(infoMessagesAtom);
    if (infoMessages.length > 0) {
      return infoMessages as MessageDetails[];
    }
    const successMessages = get(successMessagesAtom);
    if (successMessages.length > 0) {
      return successMessages as MessageDetails[];
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
  errorMessagesAtom: Atom<ErrorMessageDetails[]>,
  warningMessagesAtom: Atom<WarningMessageDetails[]>,
  infoMessagesAtom: Atom<InfoMessageDetails[]>,
  successMessagesAtom: Atom<SuccessMessageDetails[]>
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
    } else if (options.theme?.toLowerCase().includes(ColorRole.HELP)) {
      return getTheme(ColorRole.HELP, options.theme);
    }

    return getTheme(ColorRole.BASE, options.theme);
  });
