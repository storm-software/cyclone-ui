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

import { defaultMasks, type ThemeDefinitions } from "@cyclone-ui/colors";
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
    ...maskOptions.body
  },

  HeadingText: {
    mask: "identity",
    ...maskOptions.heading
  },

  TitleText: {
    mask: "identity",
    ...maskOptions.title
  },

  LinkText: {
    mask: "identity",
    ...maskOptions.link
  },

  LabelText: {
    mask: "identity",
    ...maskOptions.component
  },

  EyebrowText: {
    mask: "identity",
    ...maskOptions.eyebrow
  },

  Card: {
    mask: "identity",
    ...maskOptions.component
  },

  CardEyebrow: {
    mask: "identity",
    ...maskOptions.eyebrow
  },

  CardHeading: {
    mask: "identity",
    ...maskOptions.heading
  },

  CardBody: {
    mask: "identity",
    ...maskOptions.body
  },

  Accordion: {
    mask: "identity",
    ...maskOptions.component
  },

  AccordionHeader: {
    mask: "identity",
    ...maskOptions.accordionHeader
  },

  AccordionContent: {
    mask: "identity",
    ...maskOptions.component
  },

  Callout: {
    mask: "identity",
    ...maskOptions.callout
  },

  CalloutHeading: {
    mask: "identity",
    ...maskOptions.heading
  },

  CalloutEyebrow: {
    mask: "identity",
    ...maskOptions.eyebrow
  },

  CalloutBody: {
    mask: "identity",
    ...maskOptions.body
  },

  Alert: {
    mask: "identity",
    ...maskOptions.component
  },

  AlertHeading: {
    mask: "identity",
    ...maskOptions.heading
  },

  AlertBody: {
    mask: "identity",
    ...maskOptions.body
  },

  Dialog: {
    mask: "identity",
    ...maskOptions.component
  },

  DialogHeading: {
    mask: "identity",
    ...maskOptions.heading
  },

  DialogBody: {
    mask: "identity",
    ...maskOptions.body
  },

  DialogOverlay: overlayThemeDefinitions,

  AlertDialog: {
    mask: "identity",
    ...maskOptions.component
  },

  AlertDialogHeading: {
    mask: "identity",
    ...maskOptions.heading
  },

  AlertDialogBody: {
    mask: "identity",
    ...maskOptions.body
  },

  Link: {
    mask: "identity",
    ...maskOptions.link
  },

  Button: {
    mask: "identity",
    ...maskOptions.component
  },

  ButtonText: {
    mask: "identity",
    ...maskOptions.button
  },

  ButtonIcon: {
    mask: "identity",
    ...maskOptions.button
  },

  Tooltip: {
    mask: "inverse",
    ...maskOptions.popover
  },

  Popover: {
    mask: "inverse",
    ...maskOptions.popover
  },

  SheetOverlay: overlayThemeDefinitions,

  ModalOverlay: overlayThemeDefinitions,

  Field: {
    mask: "identity",
    ...maskOptions.component
  },

  FieldDetails: {
    mask: "identity",
    ...maskOptions.details
  },

  FieldLabel: {
    mask: "identity",
    ...maskOptions.label
  },

  FieldIcon: {
    mask: "identity",
    ...maskOptions.component
  },

  Checkbox: {
    mask: "identity",
    ...maskOptions.component
  },

  CheckboxIndicator: {
    mask: "identity",
    ...maskOptions.title
  },

  Input: {
    mask: "identity",
    ...maskOptions.component
  },

  InputValue: {
    mask: "identity",
    ...maskOptions.title
  },

  TextArea: {
    mask: "identity",
    ...maskOptions.component
  },

  TextAreaValue: {
    mask: "identity",
    ...maskOptions.title
  },

  Select: {
    mask: "identity",
    ...maskOptions.component
  },

  SelectValue: {
    mask: "identity",
    ...maskOptions.title
  },

  SelectItems: {
    mask: "identity",
    ...maskOptions.component
  },

  RadioGroup: {
    mask: "identity",
    ...maskOptions.component
  },

  RadioGroupItem: {
    mask: "identity",
    ...maskOptions.component
  },

  RadioGroupItemValue: {
    mask: "identity",
    ...maskOptions.title
  },

  RadioGroupItemDetails: {
    mask: "identity",
    ...maskOptions.body
  },

  DatePicker: {
    mask: "identity",
    ...maskOptions.component
  },

  DatePickerValue: {
    mask: "identity",
    ...maskOptions.title
  },

  DatePickerPopover: {
    mask: "identity",
    ...maskOptions.component
  },

  FilePicker: {
    mask: "identity",
    ...maskOptions.component
  },

  Breadcrumb: {
    mask: "identity",
    ...maskOptions.component
  },

  BreadcrumbItem: {
    mask: "identity",
    ...maskOptions.component
  },

  BreadcrumbCurrent: {
    mask: "identity",
    ...maskOptions.title
  },

  Switch: {
    mask: "identity",
    ...maskOptions.component
  },

  SwitchThumb: {
    mask: "identity",
    ...maskOptions.switchThumb
  },

  Badge: {
    mask: "identity",
    ...maskOptions.badge
  },

  Table: {
    mask: "identity",
    ...maskOptions.component
  },

  TableHeader: {
    mask: "identity",
    ...maskOptions.component
  }
} satisfies ThemeDefinitions<keyof Masks>;
