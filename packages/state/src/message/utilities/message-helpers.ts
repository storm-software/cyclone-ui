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

import { MessageType } from "@storm-stack/types";

export const getEyebrowByType = (type?: MessageType): string => {
  switch (type) {
    case MessageType.ERROR:
      return "Error";
    case MessageType.WARNING:
      return "Warning";
    case MessageType.INFO:
      return "Information";
    case MessageType.SUCCESS:
      return "Success";
    default:
      return "Attention";
  }
};

export const getThemeByType = (type?: MessageType): ColorThemeName => {
  switch (type) {
    case MessageType.ERROR:
      return "danger";
    case MessageType.WARNING:
      return "warning";
    case MessageType.INFO:
      return "info";
    case MessageType.HELP:
      return "discovery";
    case MessageType.SUCCESS:
      return "success";
    default:
      return "brand";
  }
};
