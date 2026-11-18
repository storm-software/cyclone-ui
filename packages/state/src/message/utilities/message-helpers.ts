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

import type { DefaultStatusColorTheme } from "@cyclone-ui/helpers";
import type { MessageType } from "@stryke/types/messages";

export const getDefaultEyebrowByType = (type?: MessageType): string => {
  switch (type) {
    case "danger":
      return "Danger";
    case "warning":
      return "Warning";
    case "info":
      return "Information";
    case "success":
      return "Success";
    case "discovery":
      return "Useful Tip";
    case undefined:
    default:
      return "Attention";
  }
};

export const getThemeByType = (type?: string): DefaultStatusColorTheme => {
  switch (type) {
    case "error":
    case "danger":
      return "danger";
    case "warning":
      return "warning";
    case "help":
    case "discovery":
      return "discovery";
    case "success":
      return "success";
    case "info":
    case undefined:
    default:
      return "info";
  }
};
