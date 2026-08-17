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
import { useToastController } from "@tamagui/toast";
import { getEyebrowByType, getThemeByType } from "../utilities";
export const useMessageActions = () => {
    const toast = useToastController();
    return {
        ...toast,
        show: (message, options) => {
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
        showInfo: (message, options = {}) => {
            toast.show(options.heading || message, {
                viewportName: "messages",
                type: "foreground",
                customData: {
                    eyebrow: getEyebrowByType("info"),
                    theme: "info",
                    ...options,
                    message: options.heading ? message : ""
                }
            });
        },
        showSuccess: (message, options = {}) => {
            toast.show(options.heading || message || "Process completed successfully", {
                viewportName: "messages",
                type: "foreground",
                customData: {
                    eyebrow: getEyebrowByType("success"),
                    theme: "success",
                    ...options,
                    message: options.heading ? message : ""
                }
            });
        },
        showWarning: (message, options = {}) => {
            toast.show(options.heading || message, {
                viewportName: "messages",
                type: "foreground",
                customData: {
                    eyebrow: getEyebrowByType("warning"),
                    theme: "warning",
                    ...options,
                    message: options.heading ? message : ""
                }
            });
        },
        showError: (message, options = {}) => {
            toast.show(options.heading || "An error occured during processing", {
                viewportName: "messages",
                type: "foreground",
                customData: {
                    eyebrow: getEyebrowByType("error"),
                    theme: "danger",
                    ...options,
                    message
                }
            });
        },
        showHelp: (message, options = {}) => {
            toast.show(options.heading || message, {
                viewportName: "messages",
                type: "foreground",
                customData: {
                    eyebrow: getEyebrowByType("help"),
                    theme: "discovery",
                    ...options,
                    message: options.heading ? message : ""
                }
            });
        }
    };
};
//# sourceMappingURL=use-message-actions.js.map