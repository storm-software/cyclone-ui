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
import { useToastController } from "@tamagui/toast";

export interface MessageProps {
  theme?: string;
  icon?: React.ReactNode;
  heading?: string;
  message: string;
}

export type MessageOptions = Omit<MessageProps, "message">;

export interface UseMessageActionsResult {
  show: (message: string, options: MessageOptions) => void;
  showInfo: (message: string, options: MessageOptions) => void;
  showSuccess: (message: string, options: MessageOptions) => void;
  showWarning: (message: string, options: MessageOptions) => void;
  showError: (message: string, options: MessageOptions) => void;
  showHelp: (message: string, options: MessageOptions) => void;
  hide: () => void;
  nativeToast: any;
  options?: any;
}

export const useMessageActions = (): UseMessageActionsResult => {
  const toast = useToastController();

  return {
    ...toast,
    show: (message: string, options: MessageOptions = {}) => {
      toast.show(getMessageHeading(message, options), {
        message,
        ...options
      });
    },
    showInfo: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.INFO,
        ...options
      });
    },
    showSuccess: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.SUCCESS,
        ...options
      });
    },
    showWarning: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.WARNING,
        ...options
      });
    },
    showError: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.ERROR,
        ...options
      });
    },
    showHelp: (
      message: string,
      options: Omit<MessageOptions, "theme"> = {}
    ) => {
      toast.show(getMessageHeading(message, options), {
        message,
        theme: ColorRole.HELP,
        ...options
      });
    }
  };
};

export const getMessageHeading = (message: string, options: MessageOptions) => {
  return options.heading
    ? options.heading
    : options.theme?.toLowerCase().includes(ColorRole.ERROR)
      ? "Error"
      : options.theme?.toLowerCase().includes(ColorRole.WARNING)
        ? "Warning"
        : options.theme?.toLowerCase().includes(ColorRole.INFO)
          ? "Information"
          : options.theme?.toLowerCase().includes(ColorRole.HELP)
            ? "Help"
            : options.theme?.toLowerCase().includes(ColorRole.SUCCESS)
              ? "Success"
              : "Message";
};
