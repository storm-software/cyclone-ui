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
import { MessageDetails, MessageType } from "@storm-stack/types";
import { useToastController } from "@tamagui/toast";
import { getEyebrowByType, getThemeByType } from "../utilities";

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
  nativeToast: any;
  options?: any;
}

export const useMessageActions = (): UseMessageActionsResult => {
  const toast = useToastController();

  return {
    ...toast,
    show: (message: string, options?: Partial<MessageOptions>) => {
      toast.show(options?.heading || message, {
        viewportName: "messages",
        type: "foreground",
        customData: {
          eyebrow: getEyebrowByType(options?.type),
          theme: getThemeByType(options?.type),
          ...options,
          message: options?.heading ? message : ""
        }
      });
    },
    showInfo: (message: string, options: Omit<MessageOptions, "type"> = {}) => {
      toast.show(options.heading || message, {
        viewportName: "messages",
        type: "foreground",
        customData: {
          eyebrow: getEyebrowByType(MessageType.INFO),
          theme: ColorThemeName.INFO,
          ...options,
          message: options.heading ? message : ""
        }
      });
    },
    showSuccess: (
      message: string,
      options: Omit<MessageOptions, "type"> = {}
    ) => {
      toast.show(
        options.heading || message || "Process completed successfully",
        {
          viewportName: "messages",
          type: "foreground",
          customData: {
            eyebrow: getEyebrowByType(MessageType.SUCCESS),
            theme: ColorThemeName.SUCCESS,
            ...options,
            message: options.heading ? message : ""
          }
        }
      );
    },
    showWarning: (
      message: string,
      options: Omit<MessageOptions, "type"> = {}
    ) => {
      toast.show(options.heading || message, {
        viewportName: "messages",
        type: "foreground",
        customData: {
          eyebrow: getEyebrowByType(MessageType.WARNING),
          theme: ColorThemeName.WARNING,
          ...options,
          message: options.heading ? message : ""
        }
      });
    },
    showError: (
      message: string,
      options: Omit<MessageOptions, "type"> = {}
    ) => {
      toast.show(options.heading || "An error occured during processing", {
        viewportName: "messages",
        type: "foreground",
        customData: {
          eyebrow: getEyebrowByType(MessageType.ERROR),
          theme: ColorThemeName.DANGER,
          ...options,
          message
        }
      });
    },
    showHelp: (message: string, options: Omit<MessageOptions, "type"> = {}) => {
      toast.show(options.heading || message, {
        viewportName: "messages",
        type: "foreground",
        customData: {
          eyebrow: getEyebrowByType(MessageType.HELP),
          theme: ColorThemeName.HELP,
          ...options,
          message: options.heading ? message : ""
        }
      });
    }
  };
};
