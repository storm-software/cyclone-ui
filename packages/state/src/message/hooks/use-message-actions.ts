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

import type { MessageDetails } from "@stryke/types/messages";
import { toast } from "@tamagui/toast/v2";

export type MessageOptions = Omit<MessageDetails, "message"> & {
  heading?: string;
  eyebrow?: string;
};

export interface UseMessageActionsResult {
  show: (message: string, options?: Partial<MessageOptions>) => void;
  showInfo: (message: string, options?: Omit<MessageOptions, "type">) => void;
  showSuccess: (
    message: string,
    options?: Omit<MessageOptions, "type">
  ) => void;
  showWarning: (
    message: string,
    options?: Omit<MessageOptions, "type">
  ) => void;
  showError: (message: string, options?: Omit<MessageOptions, "type">) => void;
  showHelp: (message: string, options?: Omit<MessageOptions, "type">) => void;
  hide: () => void;
  nativeToast?: never;
  options?: never;
}

export const useMessageActions = (): UseMessageActionsResult => {
  const show = (message: string, options: Partial<MessageOptions> = {}) => {
    const { heading, type, ...toastOptions } = options;
    const title = heading || message;
    const data = {
      ...toastOptions,
      data: { messageType: type },
      description: heading ? message : undefined
    };

    switch (type) {
      case "error":
        toast.error(title, data);
        break;
      case "warning":
        toast.warning(title, data);
        break;
      case "info":
        toast.info(title, data);
        break;
      case "success":
        toast.success(title, data);
        break;
      default:
        toast(title, data);
    }
  };

  return {
    hide: () => toast.dismiss(),
    show,
    showInfo: (message: string, options: Omit<MessageOptions, "type"> = {}) => {
      show(message, { ...options, type: "info" });
    },
    showSuccess: (
      message: string,
      options: Omit<MessageOptions, "type"> = {}
    ) => {
      show(message || "Process completed successfully", {
        ...options,
        type: "success"
      });
    },
    showWarning: (
      message: string,
      options: Omit<MessageOptions, "type"> = {}
    ) => {
      show(message, { ...options, type: "warning" });
    },
    showError: (
      message: string,
      options: Omit<MessageOptions, "type"> = {}
    ) => {
      show(message || "An error occured during processing", {
        ...options,
        type: "error"
      });
    },
    showHelp: (message: string, options: Omit<MessageOptions, "type"> = {}) => {
      show(message, options);
    }
  };
};
