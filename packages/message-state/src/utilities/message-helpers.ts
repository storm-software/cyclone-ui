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
      return ColorThemeName.DANGER;
    case MessageType.WARNING:
      return ColorThemeName.WARNING;
    case MessageType.INFO:
      return ColorThemeName.INFO;
    case MessageType.HELP:
      return ColorThemeName.HELP;
    case MessageType.SUCCESS:
      return ColorThemeName.SUCCESS;
    default:
      return ColorThemeName.BRAND;
  }
};
