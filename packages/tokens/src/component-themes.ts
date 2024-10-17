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

import { defaultMasks, type ThemeDefinitions } from "@cyclone-ui/masks";
import { maskOptions } from "./templates";

type Masks = typeof defaultMasks;

const overlayThemes = {
  light: {
    background: "rgba(0,0,0,0.5)"
  },
  dark: {
    background: "rgba(0,0,0,0.9)"
  }
};

export const overlayThemeDefinitions = [
  {
    parent: "light",
    theme: overlayThemes.light
  },
  {
    parent: "dark",
    theme: overlayThemes.dark
  }
];

export const componentThemes = {
  ListItem: [
    {
      parent: "light",
      mask: "strengthen",
      ...maskOptions.component
    },
    {
      parent: "dark",
      mask: "identity",
      ...maskOptions.component
    }
  ],

  BodyText: {
    mask: "identity",
    ...maskOptions.component
  },

  Card: {
    mask: "identity",
    ...maskOptions.card
  },

  CardEyebrow: {
    mask: "identity",
    ...maskOptions.cardEyebrow
  },

  CardTitle: {
    mask: "identity",
    ...maskOptions.cardTitle
  },

  Alert: {
    mask: "identity",
    ...maskOptions.alert
  },

  AlertHeading: {
    mask: "identity",
    ...maskOptions.alertHeading
  },

  Message: {
    mask: "identity",
    ...maskOptions.alert
  },

  MessageHeading: {
    mask: "identity",
    ...maskOptions.alertHeading
  },

  Button: {
    mask: "identity",
    ...maskOptions.button
  },

  Checkbox: {
    mask: "softenBorder2",
    ...maskOptions.component
  },

  Switch: {
    mask: "soften2",
    ...maskOptions.component
  },

  SwitchThumb: {
    mask: "inverseStrengthen2",
    ...maskOptions.component
  },

  TooltipContent: {
    mask: "soften2",
    ...maskOptions.component
  },

  DrawerFrame: {
    mask: "soften",
    ...maskOptions.component
  },

  Progress: {
    mask: "soften",
    ...maskOptions.component
  },

  RadioGroupItem: {
    mask: "softenBorder",
    ...maskOptions.component
  },

  TooltipArrow: {
    mask: "soften",
    ...maskOptions.component
  },

  SliderTrackActive: {
    mask: "inverseSoften",
    ...maskOptions.component
  },

  SliderTrack: {
    mask: "soften2",
    ...maskOptions.component
  },

  SliderThumb: {
    mask: "inverse",
    ...maskOptions.component
  },

  Tooltip: {
    mask: "inverse",
    ...maskOptions.component
  },

  ProgressIndicator: {
    mask: "inverse",
    ...maskOptions.component
  },

  SheetOverlay: overlayThemeDefinitions,
  DialogOverlay: overlayThemeDefinitions,
  ModalOverlay: overlayThemeDefinitions,

  Input: {
    mask: "identity",
    ...maskOptions.component
  },

  Select: {
    mask: "identity",
    ...maskOptions.component
  },

  RadioGroup: {
    mask: "identity",
    ...maskOptions.component
  },

  DatePicker: {
    mask: "identity",
    ...maskOptions.component
  },

  FilePicker: {
    mask: "identity",
    ...maskOptions.component
  },

  Label: {
    mask: "identity",
    ...maskOptions.label
  },

  Breadcrumb: {
    mask: "identity",
    ...maskOptions.breadcrumb
  },

  Link: {
    mask: "identity",
    ...maskOptions.link
  },

  Badge: {
    mask: "identity",
    ...maskOptions.badge
  },

  TextArea: {
    mask: "identity",
    ...maskOptions.component
  },

  Table: {
    mask: "identity",
    ...maskOptions.table
  },

  TableHeader: {
    mask: "identity",
    ...maskOptions.tableHeader
  }
} satisfies ThemeDefinitions<keyof Masks>;
