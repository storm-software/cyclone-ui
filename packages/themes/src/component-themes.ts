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

  Card: {
    mask: "identity",
    ...maskOptions.card
  },

  CardEyebrow: {
    mask: "identity",
    ...maskOptions.cardEyebrow
  },

  CardHeading: {
    mask: "identity",
    ...maskOptions.cardHeading
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
  }
} satisfies ThemeDefinitions<keyof Masks>;
