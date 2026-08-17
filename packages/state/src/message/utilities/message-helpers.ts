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

import type { MessageType } from "@stryke/types/messages";
import type { ColorThemeName } from "../../theme/types";

export const getEyebrowByType = (type?: MessageType): string => {
  switch (type) {
    case "error":
      return "Error";
    case "warning":
      return "Warning";
    case "info":
      return "Information";
    case "success":
      return "Success";
    case "help":
    case undefined:
      return "Attention";
  }
};

export const getThemeByType = (type?: MessageType): ColorThemeName => {
  switch (type) {
    case "error":
      return "danger";
    case "warning":
      return "warning";
    case "info":
      return "info";
    case "help":
      return "discovery";
    case "success":
      return "success";
    case undefined:
      return "brand";
  }
};
