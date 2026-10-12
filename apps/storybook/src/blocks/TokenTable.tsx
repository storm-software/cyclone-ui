import type { CSSProperties, ReactElement } from "react";
import { resolveThemeVariant } from "./ThemeVariant";


export interface TokenTableRow {
  path: string;
  type?: string;
  value: string;
  cssVar: string;
  description?: string;
  theme?: string;
  typography: boolean;
}

const TOKEN_VARIANTS: Record<string, TokenTableRow[]> = {
  "dark": [
    {
      path: "color.black",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#fafafa",
      cssVar: "--cu-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--cu-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#eaeaea",
      cssVar: "--cu-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--cu-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#cacacb",
      cssVar: "--cu-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--cu-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#959698",
      cssVar: "--cu-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#7b7b7e",
      cssVar: "--cu-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#555659",
      cssVar: "--cu-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#46464a",
      cssVar: "--cu-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#2b2c30",
      cssVar: "--cu-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#242528",
      cssVar: "--cu-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#1f1f21",
      cssVar: "--cu-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#e2819a",
      cssVar: "--cu-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#dd6c89",
      cssVar: "--cu-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#d95778",
      cssVar: "--cu-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#d44267",
      cssVar: "--cu-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#cf2d56",
      cssVar: "--cu-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#ae284a",
      cssVar: "--cu-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#6f1c31",
      cssVar: "--cu-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#501524",
      cssVar: "--cu-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#f6c3a7",
      cssVar: "--cu-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#f4b18c",
      cssVar: "--cu-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#f19f71",
      cssVar: "--cu-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ef8c56",
      cssVar: "--cu-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ec7a3b",
      cssVar: "--cu-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#df6520",
      cssVar: "--cu-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#bf520b",
      cssVar: "--cu-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#9f4000",
      cssVar: "--cu-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#803000",
      cssVar: "--cu-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#facd7b",
      cssVar: "--cu-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#f9c25e",
      cssVar: "--cu-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#f8b740",
      cssVar: "--cu-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#f7ac23",
      cssVar: "--cu-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#f0a824",
      cssVar: "--cu-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#df9d24",
      cssVar: "--cu-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#c58c22",
      cssVar: "--cu-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a2731e",
      cssVar: "--cu-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#d1f1d6",
      cssVar: "--cu-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#a2e3b6",
      cssVar: "--cu-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#74d59f",
      cssVar: "--cu-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#45c791",
      cssVar: "--cu-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#38a97e",
      cssVar: "--cu-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#2c8a69",
      cssVar: "--cu-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#164a3c",
      cssVar: "--cu-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#0c2a22",
      cssVar: "--cu-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#abcaff",
      cssVar: "--cu-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#8cb6ff",
      cssVar: "--cu-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#6da2ff",
      cssVar: "--cu-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#4d8eff",
      cssVar: "--cu-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#2e7aff",
      cssVar: "--cu-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#2768d9",
      cssVar: "--cu-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#19438c",
      cssVar: "--cu-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#123166",
      cssVar: "--cu-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#cec2ee",
      cssVar: "--cu-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#baa9e8",
      cssVar: "--cu-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#a690e1",
      cssVar: "--cu-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#9277da",
      cssVar: "--cu-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#7f64c4",
      cssVar: "--cu-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#6c53ad",
      cssVar: "--cu-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#594395",
      cssVar: "--cu-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#47347c",
      cssVar: "--cu-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#362661",
      cssVar: "--cu-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#f5c7e4",
      cssVar: "--cu-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#f49ed1",
      cssVar: "--cu-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#eb89c5",
      cssVar: "--cu-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#e774bb",
      cssVar: "--cu-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#e171b7",
      cssVar: "--cu-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#df6db3",
      cssVar: "--cu-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#c25c9b",
      cssVar: "--cu-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#904272",
      cssVar: "--cu-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#482039",
      cssVar: "--cu-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.primary",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--cu-color-primary",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.secondary",
      type: "color",
      value: "#cacacb",
      cssVar: "--cu-color-secondary",
      description: "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.tertiary",
      type: "color",
      value: "#46464a",
      cssVar: "--cu-color-tertiary",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border",
      type: "color",
      value: "#555659",
      cssVar: "--cu-color-border",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger",
      type: "color",
      value: "#cf2d56",
      cssVar: "--cu-color-danger",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning",
      type: "color",
      value: "#f7ac23",
      cssVar: "--cu-color-warning",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info",
      type: "color",
      value: "#4d8eff",
      cssVar: "--cu-color-info",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle",
      type: "color",
      value: "#19438c",
      cssVar: "--cu-color-info-subtle",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery",
      type: "color",
      value: "#9277da",
      cssVar: "--cu-color-discovery",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle",
      type: "color",
      value: "#362661",
      cssVar: "--cu-color-discovery-subtle",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success",
      type: "color",
      value: "#45c791",
      cssVar: "--cu-color-success",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-sunken",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-canvas",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-surface-canvas",
      description: "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-elevated",
      type: "color",
      value: "#1f1f21",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-floating",
      type: "color",
      value: "#242528",
      cssVar: "--cu-color-surface-floating",
      description: "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-highest",
      type: "color",
      value: "#2b2c30",
      cssVar: "--cu-color-surface-highest",
      description: "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.backdrop",
      type: "color",
      value: "#0d0c0766",
      cssVar: "--cu-color-backdrop",
      description: "Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Smallest resting shadow (`shadow.2xs`): a single 1px edge under the element. Use it to give flat controls, such as inputs and segmented buttons, a hint of depth.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Small resting shadow (`shadow.xs`). Use it for cards, tiles and buttons sitting directly on the canvas.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Medium resting shadow (`shadow.sm`). Use it for raised cards and panels that need more separation from the canvas than `resting.small`.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Small floating shadow (`shadow.md`). Use it for compact floating content, such as tooltips and dropdown menus.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Medium floating shadow (`shadow.lg`). Use it for popovers, menus and other anchored panels.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Large floating shadow (`shadow.xl`). Use it for dialogs, drawers and sheets that sit above the whole page.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Largest floating shadow (`shadow.2xl`). Use it for the highest-elevation content, such as full-screen modals or command palettes.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Inset shadow (`inset-shadow.xs`) for recessed elements. Use it for wells and pressed states that should read as sunken into their surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#fafafa",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral (gray) data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `neutral.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data color. Use it for the primary mark of a red series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#501524",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `red.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#df6520",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data color. Use it for the primary mark of a orange series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#803000",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `orange.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#f0a824",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data color. Use it for the primary mark of a yellow series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `yellow.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#2c8a69",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data color. Use it for the primary mark of a green series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `green.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data color. Use it for the primary mark of a blue series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#123166",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `blue.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#6c53ad",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data color. Use it for the primary mark of a purple series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#362661",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `purple.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#df6db3",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data color. Use it for the primary mark of a pink series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#482039",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `pink.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--cu-color-base",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle",
      type: "color",
      value: "#46464a",
      cssVar: "--cu-color-base-subtle",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-accent",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-on-base-accent",
      description: "Generated text and icon color on base backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-accent",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--cu-color-base-accent",
      description: "Alias of base for the base theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-subtle",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-base-subtle",
      description: "Generated text and icon color on base-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-danger-accent",
      description: "Generated text and icon color on danger backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-accent",
      type: "color",
      value: "#cf2d56",
      cssVar: "--cu-color-danger-accent",
      description: "Alias of danger for the danger theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle",
      type: "color",
      value: "#620020",
      cssVar: "--cu-color-danger-subtle",
      description: "Generated low-emphasis danger background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-subtle",
      type: "color",
      value: "#ffa6b0",
      cssVar: "--cu-color-on-danger-subtle",
      description: "Generated text and icon color on danger-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-accent",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-on-warning-accent",
      description: "Generated text and icon color on warning backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-accent",
      type: "color",
      value: "#f7ac23",
      cssVar: "--cu-color-warning-accent",
      description: "Alias of warning for the warning theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle",
      type: "color",
      value: "#764e00",
      cssVar: "--cu-color-warning-subtle",
      description: "Generated low-emphasis warning background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-warning-subtle",
      description: "Generated text and icon color on warning-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-info-accent",
      description: "Generated text and icon color on info backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-accent",
      type: "color",
      value: "#4d8eff",
      cssVar: "--cu-color-info-accent",
      description: "Alias of info for the info theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-subtle",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-info-subtle",
      description: "Generated text and icon color on info-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-discovery-accent",
      description: "Generated text and icon color on discovery backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-accent",
      type: "color",
      value: "#9277da",
      cssVar: "--cu-color-discovery-accent",
      description: "Alias of discovery for the discovery theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-subtle",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-discovery-subtle",
      description: "Generated text and icon color on discovery-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-success-accent",
      description: "Generated text and icon color on success backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-accent",
      type: "color",
      value: "#45c791",
      cssVar: "--cu-color-success-accent",
      description: "Alias of success for the success theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle",
      type: "color",
      value: "#006140",
      cssVar: "--cu-color-success-subtle",
      description: "Generated low-emphasis success background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-success-subtle",
      description: "Generated text and icon color on success-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-border-active",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-border-inactive",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-disabled",
      type: "color",
      value: "#494a4d",
      cssVar: "--cu-color-border-disabled",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-active",
      type: "color",
      value: "#d0d0d0",
      cssVar: "--cu-color-base-active",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-base-inactive",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-disabled",
      type: "color",
      value: "#808082",
      cssVar: "--cu-color-base-disabled",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-active",
      type: "color",
      value: "#535358",
      cssVar: "--cu-color-base-subtle-active",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 13% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-base-subtle-inactive",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-disabled",
      type: "color",
      value: "#444447",
      cssVar: "--cu-color-base-subtle-disabled",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-active",
      type: "color",
      value: "#ff607f",
      cssVar: "--cu-color-danger-active",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-inactive",
      type: "color",
      value: "#a70037",
      cssVar: "--cu-color-danger-inactive",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-disabled",
      type: "color",
      value: "#70424d",
      cssVar: "--cu-color-danger-disabled",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-active",
      type: "color",
      value: "#7b1f34",
      cssVar: "--cu-color-danger-subtle-active",
      description: "Generated low-emphasis danger background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-inactive",
      type: "color",
      value: "#4e0011",
      cssVar: "--cu-color-danger-subtle-inactive",
      description: "Generated low-emphasis danger background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-disabled",
      type: "color",
      value: "#4c313a",
      cssVar: "--cu-color-danger-subtle-disabled",
      description: "Generated low-emphasis danger background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-active",
      type: "color",
      value: "#b56e00",
      cssVar: "--cu-color-warning-active",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-inactive",
      type: "color",
      value: "#ffe067",
      cssVar: "--cu-color-warning-inactive",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-disabled",
      type: "color",
      value: "#7f6948",
      cssVar: "--cu-color-warning-disabled",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-active",
      type: "color",
      value: "#996f2f",
      cssVar: "--cu-color-warning-subtle-active",
      description: "Generated low-emphasis warning background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-inactive",
      type: "color",
      value: "#5b3500",
      cssVar: "--cu-color-warning-subtle-inactive",
      description: "Generated low-emphasis warning background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-disabled",
      type: "color",
      value: "#534837",
      cssVar: "--cu-color-warning-subtle-disabled",
      description: "Generated low-emphasis warning background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-active",
      type: "color",
      value: "#7fc4ff",
      cssVar: "--cu-color-info-active",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-inactive",
      type: "color",
      value: "#2564d1",
      cssVar: "--cu-color-info-inactive",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-disabled",
      type: "color",
      value: "#4b5e81",
      cssVar: "--cu-color-info-disabled",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-active",
      type: "color",
      value: "#3560ac",
      cssVar: "--cu-color-info-subtle-active",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-inactive",
      type: "color",
      value: "#022c73",
      cssVar: "--cu-color-info-subtle-inactive",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-disabled",
      type: "color",
      value: "#37445b",
      cssVar: "--cu-color-info-subtle-disabled",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-active",
      type: "color",
      value: "#c3a9ff",
      cssVar: "--cu-color-discovery-active",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-inactive",
      type: "color",
      value: "#6d51b0",
      cssVar: "--cu-color-discovery-inactive",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-disabled",
      type: "color",
      value: "#5e5776",
      cssVar: "--cu-color-discovery-disabled",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-active",
      type: "color",
      value: "#4b3c79",
      cssVar: "--cu-color-discovery-subtle-active",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-inactive",
      type: "color",
      value: "#27144e",
      cssVar: "--cu-color-discovery-subtle-inactive",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-disabled",
      type: "color",
      value: "#3e3a4d",
      cssVar: "--cu-color-discovery-subtle-disabled",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-active",
      type: "color",
      value: "#89ffcc",
      cssVar: "--cu-color-success-active",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-inactive",
      type: "color",
      value: "#009865",
      cssVar: "--cu-color-success-inactive",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-disabled",
      type: "color",
      value: "#4c7062",
      cssVar: "--cu-color-success-disabled",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-active",
      type: "color",
      value: "#31815e",
      cssVar: "--cu-color-success-subtle-active",
      description: "Generated low-emphasis success background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-inactive",
      type: "color",
      value: "#004829",
      cssVar: "--cu-color-success-subtle-inactive",
      description: "Generated low-emphasis success background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-disabled",
      type: "color",
      value: "#354d45",
      cssVar: "--cu-color-success-subtle-disabled",
      description: "Generated low-emphasis success background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "size.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-size-zero",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--cu-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--cu-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--cu-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--cu-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--cu-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--cu-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--cu-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--cu-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--cu-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--cu-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--cu-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--cu-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--cu-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-19xl",
      description: "A 122px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-20xl",
      description: "A 132px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-21xl",
      description: "A 142px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-22xl",
      description: "A 152px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-23xl",
      description: "A 162px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-24xl",
      description: "A 172px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-25xl",
      description: "A 182px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-26xl",
      description: "A 192px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-27xl",
      description: "A 202px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-28xl",
      description: "A 212px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-29xl",
      description: "A 222px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-30xl",
      description: "A 232px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-31xl",
      description: "A 242px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-32xl",
      description: "A 252px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-33xl",
      description: "A 262px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-34xl",
      description: "A 272px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-35xl",
      description: "A 282px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "292px",
      cssVar: "--cu-size-36xl",
      description: "A 292px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "302px",
      cssVar: "--cu-size-37xl",
      description: "A 302px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.38xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-size-38xl",
      description: "A 312px 38xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.39xl",
      type: "dimension",
      value: "322px",
      cssVar: "--cu-size-39xl",
      description: "A 322px 39xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.40xl",
      type: "dimension",
      value: "332px",
      cssVar: "--cu-size-40xl",
      description: "A 332px 40xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.41xl",
      type: "dimension",
      value: "342px",
      cssVar: "--cu-size-41xl",
      description: "A 342px 41xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.42xl",
      type: "dimension",
      value: "352px",
      cssVar: "--cu-size-42xl",
      description: "A 352px 42xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.43xl",
      type: "dimension",
      value: "362px",
      cssVar: "--cu-size-43xl",
      description: "A 362px 43xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.44xl",
      type: "dimension",
      value: "372px",
      cssVar: "--cu-size-44xl",
      description: "A 372px 44xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.45xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-size-45xl",
      description: "A 382px 45xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.46xl",
      type: "dimension",
      value: "392px",
      cssVar: "--cu-size-46xl",
      description: "A 392px 46xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.47xl",
      type: "dimension",
      value: "402px",
      cssVar: "--cu-size-47xl",
      description: "A 402px 47xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.48xl",
      type: "dimension",
      value: "412px",
      cssVar: "--cu-size-48xl",
      description: "A 412px 48xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.49xl",
      type: "dimension",
      value: "422px",
      cssVar: "--cu-size-49xl",
      description: "A 422px 49xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.50xl",
      type: "dimension",
      value: "432px",
      cssVar: "--cu-size-50xl",
      description: "A 432px 50xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.51xl",
      type: "dimension",
      value: "442px",
      cssVar: "--cu-size-51xl",
      description: "A 442px 51xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.52xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-size-52xl",
      description: "A 452px 52xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.53xl",
      type: "dimension",
      value: "462px",
      cssVar: "--cu-size-53xl",
      description: "A 462px 53xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.54xl",
      type: "dimension",
      value: "472px",
      cssVar: "--cu-size-54xl",
      description: "A 472px 54xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.55xl",
      type: "dimension",
      value: "482px",
      cssVar: "--cu-size-55xl",
      description: "A 482px 55xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.56xl",
      type: "dimension",
      value: "492px",
      cssVar: "--cu-size-56xl",
      description: "A 492px 56xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.57xl",
      type: "dimension",
      value: "502px",
      cssVar: "--cu-size-57xl",
      description: "A 502px 57xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.58xl",
      type: "dimension",
      value: "512px",
      cssVar: "--cu-size-58xl",
      description: "A 512px 58xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.59xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-size-59xl",
      description: "A 522px 59xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.60xl",
      type: "dimension",
      value: "532px",
      cssVar: "--cu-size-60xl",
      description: "A 532px 60xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.61xl",
      type: "dimension",
      value: "542px",
      cssVar: "--cu-size-61xl",
      description: "A 542px 61xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.62xl",
      type: "dimension",
      value: "552px",
      cssVar: "--cu-size-62xl",
      description: "A 552px 62xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.63xl",
      type: "dimension",
      value: "562px",
      cssVar: "--cu-size-63xl",
      description: "A 562px 63xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.64xl",
      type: "dimension",
      value: "572px",
      cssVar: "--cu-size-64xl",
      description: "A 572px 64xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--cu-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--cu-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--cu-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--cu-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--cu-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--cu-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--cu-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--cu-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--cu-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--cu-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-spacing-zero",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--cu-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--cu-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--cu-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--cu-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--cu-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--cu-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--cu-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--cu-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--cu-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--cu-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--cu-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--cu-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--cu-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--cu-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--cu-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-19xl",
      description: "A 158px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-20xl",
      description: "A 172px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-21xl",
      description: "A 186px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "200px",
      cssVar: "--cu-spacing-22xl",
      description: "A 200px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.23xl",
      type: "dimension",
      value: "214px",
      cssVar: "--cu-spacing-23xl",
      description: "A 214px 23xl spacing step (from size.23xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.24xl",
      type: "dimension",
      value: "228px",
      cssVar: "--cu-spacing-24xl",
      description: "A 228px 24xl spacing step (from size.24xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.25xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-spacing-25xl",
      description: "A 242px 25xl spacing step (from size.25xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.26xl",
      type: "dimension",
      value: "256px",
      cssVar: "--cu-spacing-26xl",
      description: "A 256px 26xl spacing step (from size.26xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.27xl",
      type: "dimension",
      value: "270px",
      cssVar: "--cu-spacing-27xl",
      description: "A 270px 27xl spacing step (from size.27xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.28xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-spacing-28xl",
      description: "A 284px 28xl spacing step (from size.28xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.29xl",
      type: "dimension",
      value: "298px",
      cssVar: "--cu-spacing-29xl",
      description: "A 298px 29xl spacing step (from size.29xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.30xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-spacing-30xl",
      description: "A 312px 30xl spacing step (from size.30xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.31xl",
      type: "dimension",
      value: "326px",
      cssVar: "--cu-spacing-31xl",
      description: "A 326px 31xl spacing step (from size.31xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.32xl",
      type: "dimension",
      value: "340px",
      cssVar: "--cu-spacing-32xl",
      description: "A 340px 32xl spacing step (from size.32xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.33xl",
      type: "dimension",
      value: "354px",
      cssVar: "--cu-spacing-33xl",
      description: "A 354px 33xl spacing step (from size.33xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.34xl",
      type: "dimension",
      value: "368px",
      cssVar: "--cu-spacing-34xl",
      description: "A 368px 34xl spacing step (from size.34xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.35xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-spacing-35xl",
      description: "A 382px 35xl spacing step (from size.35xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.36xl",
      type: "dimension",
      value: "396px",
      cssVar: "--cu-spacing-36xl",
      description: "A 396px 36xl spacing step (from size.36xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.37xl",
      type: "dimension",
      value: "410px",
      cssVar: "--cu-spacing-37xl",
      description: "A 410px 37xl spacing step (from size.37xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.38xl",
      type: "dimension",
      value: "424px",
      cssVar: "--cu-spacing-38xl",
      description: "A 424px 38xl spacing step (from size.38xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.39xl",
      type: "dimension",
      value: "438px",
      cssVar: "--cu-spacing-39xl",
      description: "A 438px 39xl spacing step (from size.39xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.40xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-spacing-40xl",
      description: "A 452px 40xl spacing step (from size.40xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.41xl",
      type: "dimension",
      value: "466px",
      cssVar: "--cu-spacing-41xl",
      description: "A 466px 41xl spacing step (from size.41xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.42xl",
      type: "dimension",
      value: "480px",
      cssVar: "--cu-spacing-42xl",
      description: "A 480px 42xl spacing step (from size.42xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.43xl",
      type: "dimension",
      value: "494px",
      cssVar: "--cu-spacing-43xl",
      description: "A 494px 43xl spacing step (from size.43xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.44xl",
      type: "dimension",
      value: "508px",
      cssVar: "--cu-spacing-44xl",
      description: "A 508px 44xl spacing step (from size.44xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.45xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-spacing-45xl",
      description: "A 522px 45xl spacing step (from size.45xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.46xl",
      type: "dimension",
      value: "536px",
      cssVar: "--cu-spacing-46xl",
      description: "A 536px 46xl spacing step (from size.46xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.47xl",
      type: "dimension",
      value: "550px",
      cssVar: "--cu-spacing-47xl",
      description: "A 550px 47xl spacing step (from size.47xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.48xl",
      type: "dimension",
      value: "564px",
      cssVar: "--cu-spacing-48xl",
      description: "A 564px 48xl spacing step (from size.48xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.49xl",
      type: "dimension",
      value: "578px",
      cssVar: "--cu-spacing-49xl",
      description: "A 578px 49xl spacing step (from size.49xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.50xl",
      type: "dimension",
      value: "592px",
      cssVar: "--cu-spacing-50xl",
      description: "A 592px 50xl spacing step (from size.50xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.51xl",
      type: "dimension",
      value: "606px",
      cssVar: "--cu-spacing-51xl",
      description: "A 606px 51xl spacing step (from size.51xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.52xl",
      type: "dimension",
      value: "620px",
      cssVar: "--cu-spacing-52xl",
      description: "A 620px 52xl spacing step (from size.52xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.53xl",
      type: "dimension",
      value: "634px",
      cssVar: "--cu-spacing-53xl",
      description: "A 634px 53xl spacing step (from size.53xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.54xl",
      type: "dimension",
      value: "648px",
      cssVar: "--cu-spacing-54xl",
      description: "A 648px 54xl spacing step (from size.54xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.55xl",
      type: "dimension",
      value: "662px",
      cssVar: "--cu-spacing-55xl",
      description: "A 662px 55xl spacing step (from size.55xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.56xl",
      type: "dimension",
      value: "676px",
      cssVar: "--cu-spacing-56xl",
      description: "A 676px 56xl spacing step (from size.56xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.57xl",
      type: "dimension",
      value: "690px",
      cssVar: "--cu-spacing-57xl",
      description: "A 690px 57xl spacing step (from size.57xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.58xl",
      type: "dimension",
      value: "704px",
      cssVar: "--cu-spacing-58xl",
      description: "A 704px 58xl spacing step (from size.58xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.59xl",
      type: "dimension",
      value: "718px",
      cssVar: "--cu-spacing-59xl",
      description: "A 718px 59xl spacing step (from size.59xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.60xl",
      type: "dimension",
      value: "732px",
      cssVar: "--cu-spacing-60xl",
      description: "A 732px 60xl spacing step (from size.60xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.61xl",
      type: "dimension",
      value: "746px",
      cssVar: "--cu-spacing-61xl",
      description: "A 746px 61xl spacing step (from size.61xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.62xl",
      type: "dimension",
      value: "760px",
      cssVar: "--cu-spacing-62xl",
      description: "A 760px 62xl spacing step (from size.62xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.63xl",
      type: "dimension",
      value: "774px",
      cssVar: "--cu-spacing-63xl",
      description: "A 774px 63xl spacing step (from size.63xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.64xl",
      type: "dimension",
      value: "788px",
      cssVar: "--cu-spacing-64xl",
      description: "A 788px 64xl spacing step (from size.64xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--cu-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--cu-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--cu-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--cu-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--cu-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--cu-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--cu-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--cu-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--cu-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--cu-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--cu-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--cu-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--cu-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--cu-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--cu-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--cu-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--cu-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--cu-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--cu-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--cu-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--cu-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--cu-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--cu-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--cu-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--cu-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--cu-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--cu-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--cu-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--cu-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--cu-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--cu-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.none",
      type: "number",
      value: "0.765",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.765)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.0575",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1.0575)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.125",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.125)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.2375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.2375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.665",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.665)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.285714",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (1.285714)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (1.4)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.26",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (1.26)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.08",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (1.08)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.zero",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-border-radius-zero",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--cu-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--cu-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--cu-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--cu-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--cu-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--cu-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-container",
      description: "Corner radius for large framed regions that group other content (8px, `border-radius.lg`). Used by Container, Accordion, Callout, CodeBlock, FileTree, FilePicker, Table, Stepper and InlineCodeText.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.trigger",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-trigger",
      description: "Corner radius for triggers interfaces (6px, `border-radius.sm`). Used by Tabs (indicators).",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-card",
      description: "Corner radius for cards and card-like tiles (6px, `border-radius.md`). Slightly tighter than `container` so cards nested inside a container still read as inset. Used by Card and FilePicker.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-button",
      description: "Corner radius for triggers and other pressable elements (8px, `border-radius.lg`). Used by Button, Badge, DatePicker triggers, SearchInput results, Select items, Tabs triggers and CodeBlock header controls. Circular and rounded Button variants override it.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "Corner radius for form controls that accept input (8px, `border-radius.lg`). Matches `button` so inputs and buttons line up when placed side by side. Used by Input, TextArea, Select, Field, RadioGroup and Rating.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--cu-border-radius-checkbox",
      description: "Corner radius for the checkbox box (6px, `border-radius.md`). Kept smaller than `control` so the small box still reads as a square rather than a pill. Used by Checkbox.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "Corner radius for modal dialogs (12px, `border-radius.xl`). Larger than other surfaces to set modal content apart from the page beneath it. Used by Dialog.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "Corner radius for sheets (0px, `border-radius.zero`). Sheets slide in flush against a viewport edge, so their corners stay square. Applied by Sheet to its exposed corners.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "Corner radius for drawers (32px, `border-radius.4xl`). The large rounding marks a panel that slides over the page from an edge. Used as the default `borderRadius` of Drawer.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-popover",
      description: "Corner radius for popovers and dropdown menus (6px, `border-radius.md`). Used by Popover and the Select dropdown list.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-tooltip",
      description: "Corner radius for tooltips (6px, `border-radius.md`). Used by Tooltip.",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--cu-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--cu-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--cu-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--cu-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--cu-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--cu-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--cu-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--cu-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--cu-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--cu-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--cu-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--cu-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--cu-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--cu-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--cu-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--cu-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--cu-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--cu-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--cu-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--cu-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--cu-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--cu-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--cu-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--cu-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--cu-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--cu-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--cu-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--cu-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--cu-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--cu-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "Largest display style: Storm Sans semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "Large display style: Storm Sans semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "Medium display style: Storm Sans bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-hero",
      description: "Largest editorial display style: Storm Serif semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-lg",
      description: "Large editorial display style: Storm Serif semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-md",
      description: "Medium editorial display style: Storm Serif bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-xl",
      description: "Large title style: Storm Sans semibold at 18px (`font-size.lg`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "Medium title style: Storm Sans bold at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-md",
      description: "Medium title style: Storm Sans medium at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "Small title style: Storm Sans bold at 12px (`font-size.sm`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-xs",
      description: "Extra small title style: Storm Sans medium at 10px (`font-size.xxs`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-md",
      description: "Default body text style: Storm Sans regular at 18px (`font-size.md`) with normal line height. Use it for paragraphs, descriptions and most running copy. BodyText uses it by default, as do the components built on BodyText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-sm",
      description: "Smaller body text style: Storm Sans medium at 16px (`font-size.sm`) with normal line height. Use it for secondary copy in dense layouts, such as table rows, sidebars and card metadata, where `body-md` would feel too large.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "Caption style: Storm Sans regular italic at 16px (`font-size.sm`) with tight line height. Use it for helper text, annotations and small supporting labels. Used by Field helper and validation text, ValidationText, EyebrowText, Slider value labels and the CodeBlock header file name.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "Eyebrow style: Google Sans Code semibold at 18px (`font-size.md`) with tight line height. Use it for the short kicker or category label that sits directly above a heading. Used by EyebrowText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "Monospace code style: Google Sans Code regular at 20px (`font-size.lg`) with snug line height. Use it for source code, file paths, identifiers and other literal values. Used by CodeBlock, InlineCodeText, FileTree, Stepper and code content inside Accordion.",
      theme: undefined,
      typography: true
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #f1f1f133",
      cssVar: "--cu-ring-base",
      description: "Generated base 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f1f1f133",
      cssVar: "--cu-ring-base-subtle",
      description: "Generated base 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f1f1f133",
      cssVar: "--cu-ring-base-offset",
      description: "Generated base 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f1f1f133",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "Generated base 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-danger",
      description: "Generated danger 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle",
      description: "Generated danger 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-danger-offset",
      description: "Generated danger 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "Generated danger 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2326",
      cssVar: "--cu-ring-warning",
      description: "Generated warning 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle",
      description: "Generated warning 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2326",
      cssVar: "--cu-ring-warning-offset",
      description: "Generated warning 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "Generated warning 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff26",
      cssVar: "--cu-ring-info",
      description: "Generated info 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff26",
      cssVar: "--cu-ring-info-subtle",
      description: "Generated info 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff26",
      cssVar: "--cu-ring-info-offset",
      description: "Generated info 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff26",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "Generated info 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da26",
      cssVar: "--cu-ring-discovery",
      description: "Generated discovery 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da26",
      cssVar: "--cu-ring-discovery-subtle",
      description: "Generated discovery 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da26",
      cssVar: "--cu-ring-discovery-offset",
      description: "Generated discovery 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da26",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "Generated discovery 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-success",
      description: "Generated success 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-success-subtle",
      description: "Generated success 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-success-offset",
      description: "Generated success 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "Generated success 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    }
  ],
  "darkDimmed": [
    {
      path: "color.black",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#cacaca",
      cssVar: "--cu-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--cu-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--cu-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--cu-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#8f8f90",
      cssVar: "--cu-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--cu-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#626364",
      cssVar: "--cu-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#57575a",
      cssVar: "--cu-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#444548",
      cssVar: "--cu-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#3f4043",
      cssVar: "--cu-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--cu-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#c28393",
      cssVar: "--cu-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#bc7788",
      cssVar: "--cu-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#b76a7e",
      cssVar: "--cu-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#b15e73",
      cssVar: "--cu-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#ab5268",
      cssVar: "--cu-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#984a5e",
      cssVar: "--cu-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#733a49",
      cssVar: "--cu-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#61323e",
      cssVar: "--cu-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#d7ad96",
      cssVar: "--cu-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#d2a287",
      cssVar: "--cu-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#cc9678",
      cssVar: "--cu-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#c78a69",
      cssVar: "--cu-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#c17f5a",
      cssVar: "--cu-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#b4714b",
      cssVar: "--cu-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#a26238",
      cssVar: "--cu-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#92542a",
      cssVar: "--cu-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#814825",
      cssVar: "--cu-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#d5b67d",
      cssVar: "--cu-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#d0ad6d",
      cssVar: "--cu-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#caa45c",
      cssVar: "--cu-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#c59b4d",
      cssVar: "--cu-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#c0984d",
      cssVar: "--cu-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#b5904d",
      cssVar: "--cu-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#a58549",
      cssVar: "--cu-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#917542",
      cssVar: "--cu-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#b2d5b8",
      cssVar: "--cu-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#97c6a5",
      cssVar: "--cu-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7bb796",
      cssVar: "--cu-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#60a88a",
      cssVar: "--cu-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#55957d",
      cssVar: "--cu-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#49836f",
      cssVar: "--cu-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#325d52",
      cssVar: "--cu-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#284b41",
      cssVar: "--cu-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#96b2e1",
      cssVar: "--cu-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#85a5dc",
      cssVar: "--cu-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#7598d7",
      cssVar: "--cu-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#638cd2",
      cssVar: "--cu-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#527fcd",
      cssVar: "--cu-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#4f73b1",
      cssVar: "--cu-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#3b5685",
      cssVar: "--cu-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#31486f",
      cssVar: "--cu-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#b4a9d2",
      cssVar: "--cu-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#a79acb",
      cssVar: "--cu-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#9b8cc3",
      cssVar: "--cu-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#8e7dbb",
      cssVar: "--cu-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#8272aa",
      cssVar: "--cu-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#756799",
      cssVar: "--cu-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#675a8a",
      cssVar: "--cu-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#594d7a",
      cssVar: "--cu-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#4c416a",
      cssVar: "--cu-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#d9aac8",
      cssVar: "--cu-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#d492b9",
      cssVar: "--cu-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ca87b0",
      cssVar: "--cu-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#c57ba8",
      cssVar: "--cu-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#c079a5",
      cssVar: "--cu-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#be77a3",
      cssVar: "--cu-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#a86d91",
      cssVar: "--cu-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#875975",
      cssVar: "--cu-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#5a3b4f",
      cssVar: "--cu-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.primary",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-primary",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.secondary",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--cu-color-secondary",
      description: "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.tertiary",
      type: "color",
      value: "#57575a",
      cssVar: "--cu-color-tertiary",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border",
      type: "color",
      value: "#626364",
      cssVar: "--cu-color-border",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger",
      type: "color",
      value: "#ab5268",
      cssVar: "--cu-color-danger",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning",
      type: "color",
      value: "#c59b4d",
      cssVar: "--cu-color-warning",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info",
      type: "color",
      value: "#638cd2",
      cssVar: "--cu-color-info",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle",
      type: "color",
      value: "#3b5685",
      cssVar: "--cu-color-info-subtle",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery",
      type: "color",
      value: "#8e7dbb",
      cssVar: "--cu-color-discovery",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle",
      type: "color",
      value: "#4c416a",
      cssVar: "--cu-color-discovery-subtle",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success",
      type: "color",
      value: "#60a88a",
      cssVar: "--cu-color-success",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-sunken",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-canvas",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-surface-canvas",
      description: "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-elevated",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-floating",
      type: "color",
      value: "#3f4043",
      cssVar: "--cu-color-surface-floating",
      description: "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-highest",
      type: "color",
      value: "#444548",
      cssVar: "--cu-color-surface-highest",
      description: "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.backdrop",
      type: "color",
      value: "#35322666",
      cssVar: "--cu-color-backdrop",
      description: "Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Smallest resting shadow (`shadow.2xs`): a single 1px edge under the element. Use it to give flat controls, such as inputs and segmented buttons, a hint of depth.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Small resting shadow (`shadow.xs`). Use it for cards, tiles and buttons sitting directly on the canvas.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Medium resting shadow (`shadow.sm`). Use it for raised cards and panels that need more separation from the canvas than `resting.small`.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Small floating shadow (`shadow.md`). Use it for compact floating content, such as tooltips and dropdown menus.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Medium floating shadow (`shadow.lg`). Use it for popovers, menus and other anchored panels.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Large floating shadow (`shadow.xl`). Use it for dialogs, drawers and sheets that sit above the whole page.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Largest floating shadow (`shadow.2xl`). Use it for the highest-elevation content, such as full-screen modals or command palettes.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Inset shadow (`inset-shadow.xs`) for recessed elements. Use it for wells and pressed states that should read as sunken into their surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral (gray) data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `neutral.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data color. Use it for the primary mark of a red series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#61323e",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `red.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#b4714b",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data color. Use it for the primary mark of a orange series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#814825",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `orange.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#c0984d",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data color. Use it for the primary mark of a yellow series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `yellow.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#49836f",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data color. Use it for the primary mark of a green series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `green.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data color. Use it for the primary mark of a blue series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#31486f",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `blue.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#756799",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data color. Use it for the primary mark of a purple series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#4c416a",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `purple.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#be77a3",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data color. Use it for the primary mark of a pink series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#5a3b4f",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `pink.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-base",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle",
      type: "color",
      value: "#57575a",
      cssVar: "--cu-color-base-subtle",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-accent",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-on-base-accent",
      description: "Generated text and icon color on base backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-accent",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-base-accent",
      description: "Alias of base for the base theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-subtle",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-base-subtle",
      description: "Generated text and icon color on base-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-danger-accent",
      description: "Generated text and icon color on danger backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-accent",
      type: "color",
      value: "#ab5268",
      cssVar: "--cu-color-danger-accent",
      description: "Alias of danger for the danger theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle",
      type: "color",
      value: "#70213b",
      cssVar: "--cu-color-danger-subtle",
      description: "Generated low-emphasis danger background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-subtle",
      type: "color",
      value: "#e0939c",
      cssVar: "--cu-color-on-danger-subtle",
      description: "Generated text and icon color on danger-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-accent",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-on-warning-accent",
      description: "Generated text and icon color on warning backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-accent",
      type: "color",
      value: "#c59b4d",
      cssVar: "--cu-color-warning-accent",
      description: "Alias of warning for the warning theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle",
      type: "color",
      value: "#7b5e24",
      cssVar: "--cu-color-warning-subtle",
      description: "Generated low-emphasis warning background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-subtle",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-warning-subtle",
      description: "Generated text and icon color on warning-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-info-accent",
      description: "Generated text and icon color on info backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-accent",
      type: "color",
      value: "#638cd2",
      cssVar: "--cu-color-info-accent",
      description: "Alias of info for the info theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-subtle",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-info-subtle",
      description: "Generated text and icon color on info-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-discovery-accent",
      description: "Generated text and icon color on discovery backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-accent",
      type: "color",
      value: "#8e7dbb",
      cssVar: "--cu-color-discovery-accent",
      description: "Alias of discovery for the discovery theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-subtle",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-discovery-subtle",
      description: "Generated text and icon color on discovery-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-success-accent",
      description: "Generated text and icon color on success backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-accent",
      type: "color",
      value: "#60a88a",
      cssVar: "--cu-color-success-accent",
      description: "Alias of success for the success theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle",
      type: "color",
      value: "#207055",
      cssVar: "--cu-color-success-subtle",
      description: "Generated low-emphasis success background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-subtle",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-success-subtle",
      description: "Generated text and icon color on success-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-active",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-border-active",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-border-inactive",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-disabled",
      type: "color",
      value: "#595a5c",
      cssVar: "--cu-color-border-disabled",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-active",
      type: "color",
      value: "#b8b8b8",
      cssVar: "--cu-color-base-active",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-base-inactive",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-disabled",
      type: "color",
      value: "#808081",
      cssVar: "--cu-color-base-disabled",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-active",
      type: "color",
      value: "#616164",
      cssVar: "--cu-color-base-subtle-active",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 13% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-base-subtle-inactive",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-disabled",
      type: "color",
      value: "#565658",
      cssVar: "--cu-color-base-subtle-disabled",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-active",
      type: "color",
      value: "#d56d82",
      cssVar: "--cu-color-danger-active",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-inactive",
      type: "color",
      value: "#962c4f",
      cssVar: "--cu-color-danger-inactive",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-disabled",
      type: "color",
      value: "#73565d",
      cssVar: "--cu-color-danger-disabled",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-active",
      type: "color",
      value: "#7a3e4c",
      cssVar: "--cu-color-danger-subtle-active",
      description: "Generated low-emphasis danger background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-inactive",
      type: "color",
      value: "#661d2d",
      cssVar: "--cu-color-danger-subtle-inactive",
      description: "Generated low-emphasis danger background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-disabled",
      type: "color",
      value: "#5c484f",
      cssVar: "--cu-color-danger-subtle-disabled",
      description: "Generated low-emphasis danger background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-active",
      type: "color",
      value: "#9d722e",
      cssVar: "--cu-color-warning-active",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-inactive",
      type: "color",
      value: "#d6c171",
      cssVar: "--cu-color-warning-inactive",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-disabled",
      type: "color",
      value: "#7c6f5b",
      cssVar: "--cu-color-warning-disabled",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-active",
      type: "color",
      value: "#8c734d",
      cssVar: "--cu-color-warning-subtle-active",
      description: "Generated low-emphasis warning background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-inactive",
      type: "color",
      value: "#6d4c20",
      cssVar: "--cu-color-warning-subtle-inactive",
      description: "Generated low-emphasis warning background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-disabled",
      type: "color",
      value: "#60594d",
      cssVar: "--cu-color-warning-subtle-disabled",
      description: "Generated low-emphasis warning background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-active",
      type: "color",
      value: "#7eb0da",
      cssVar: "--cu-color-info-active",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-inactive",
      type: "color",
      value: "#4d70ac",
      cssVar: "--cu-color-info-inactive",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-disabled",
      type: "color",
      value: "#5e697e",
      cssVar: "--cu-color-info-disabled",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-active",
      type: "color",
      value: "#536c97",
      cssVar: "--cu-color-info-subtle-active",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-inactive",
      type: "color",
      value: "#254479",
      cssVar: "--cu-color-info-subtle-inactive",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-disabled",
      type: "color",
      value: "#4d5665",
      cssVar: "--cu-color-info-subtle-disabled",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-active",
      type: "color",
      value: "#ac95e0",
      cssVar: "--cu-color-discovery-active",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-inactive",
      type: "color",
      value: "#75669a",
      cssVar: "--cu-color-discovery-inactive",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-disabled",
      type: "color",
      value: "#696577",
      cssVar: "--cu-color-discovery-disabled",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-active",
      type: "color",
      value: "#5c5378",
      cssVar: "--cu-color-discovery-subtle-active",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-inactive",
      type: "color",
      value: "#403160",
      cssVar: "--cu-color-discovery-subtle-inactive",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-disabled",
      type: "color",
      value: "#524f5c",
      cssVar: "--cu-color-discovery-subtle-disabled",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-active",
      type: "color",
      value: "#84dbb5",
      cssVar: "--cu-color-success-active",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-inactive",
      type: "color",
      value: "#298e6c",
      cssVar: "--cu-color-success-inactive",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-disabled",
      type: "color",
      value: "#5d736a",
      cssVar: "--cu-color-success-disabled",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-active",
      type: "color",
      value: "#4c7d68",
      cssVar: "--cu-color-success-subtle-active",
      description: "Generated low-emphasis success background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-inactive",
      type: "color",
      value: "#1d6244",
      cssVar: "--cu-color-success-subtle-inactive",
      description: "Generated low-emphasis success background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-disabled",
      type: "color",
      value: "#4b5c57",
      cssVar: "--cu-color-success-subtle-disabled",
      description: "Generated low-emphasis success background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "size.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-size-zero",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--cu-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--cu-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--cu-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--cu-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--cu-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--cu-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--cu-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--cu-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--cu-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--cu-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--cu-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--cu-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--cu-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-19xl",
      description: "A 122px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-20xl",
      description: "A 132px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-21xl",
      description: "A 142px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-22xl",
      description: "A 152px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-23xl",
      description: "A 162px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-24xl",
      description: "A 172px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-25xl",
      description: "A 182px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-26xl",
      description: "A 192px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-27xl",
      description: "A 202px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-28xl",
      description: "A 212px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-29xl",
      description: "A 222px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-30xl",
      description: "A 232px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-31xl",
      description: "A 242px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-32xl",
      description: "A 252px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-33xl",
      description: "A 262px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-34xl",
      description: "A 272px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-35xl",
      description: "A 282px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "292px",
      cssVar: "--cu-size-36xl",
      description: "A 292px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "302px",
      cssVar: "--cu-size-37xl",
      description: "A 302px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.38xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-size-38xl",
      description: "A 312px 38xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.39xl",
      type: "dimension",
      value: "322px",
      cssVar: "--cu-size-39xl",
      description: "A 322px 39xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.40xl",
      type: "dimension",
      value: "332px",
      cssVar: "--cu-size-40xl",
      description: "A 332px 40xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.41xl",
      type: "dimension",
      value: "342px",
      cssVar: "--cu-size-41xl",
      description: "A 342px 41xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.42xl",
      type: "dimension",
      value: "352px",
      cssVar: "--cu-size-42xl",
      description: "A 352px 42xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.43xl",
      type: "dimension",
      value: "362px",
      cssVar: "--cu-size-43xl",
      description: "A 362px 43xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.44xl",
      type: "dimension",
      value: "372px",
      cssVar: "--cu-size-44xl",
      description: "A 372px 44xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.45xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-size-45xl",
      description: "A 382px 45xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.46xl",
      type: "dimension",
      value: "392px",
      cssVar: "--cu-size-46xl",
      description: "A 392px 46xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.47xl",
      type: "dimension",
      value: "402px",
      cssVar: "--cu-size-47xl",
      description: "A 402px 47xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.48xl",
      type: "dimension",
      value: "412px",
      cssVar: "--cu-size-48xl",
      description: "A 412px 48xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.49xl",
      type: "dimension",
      value: "422px",
      cssVar: "--cu-size-49xl",
      description: "A 422px 49xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.50xl",
      type: "dimension",
      value: "432px",
      cssVar: "--cu-size-50xl",
      description: "A 432px 50xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.51xl",
      type: "dimension",
      value: "442px",
      cssVar: "--cu-size-51xl",
      description: "A 442px 51xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.52xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-size-52xl",
      description: "A 452px 52xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.53xl",
      type: "dimension",
      value: "462px",
      cssVar: "--cu-size-53xl",
      description: "A 462px 53xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.54xl",
      type: "dimension",
      value: "472px",
      cssVar: "--cu-size-54xl",
      description: "A 472px 54xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.55xl",
      type: "dimension",
      value: "482px",
      cssVar: "--cu-size-55xl",
      description: "A 482px 55xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.56xl",
      type: "dimension",
      value: "492px",
      cssVar: "--cu-size-56xl",
      description: "A 492px 56xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.57xl",
      type: "dimension",
      value: "502px",
      cssVar: "--cu-size-57xl",
      description: "A 502px 57xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.58xl",
      type: "dimension",
      value: "512px",
      cssVar: "--cu-size-58xl",
      description: "A 512px 58xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.59xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-size-59xl",
      description: "A 522px 59xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.60xl",
      type: "dimension",
      value: "532px",
      cssVar: "--cu-size-60xl",
      description: "A 532px 60xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.61xl",
      type: "dimension",
      value: "542px",
      cssVar: "--cu-size-61xl",
      description: "A 542px 61xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.62xl",
      type: "dimension",
      value: "552px",
      cssVar: "--cu-size-62xl",
      description: "A 552px 62xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.63xl",
      type: "dimension",
      value: "562px",
      cssVar: "--cu-size-63xl",
      description: "A 562px 63xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.64xl",
      type: "dimension",
      value: "572px",
      cssVar: "--cu-size-64xl",
      description: "A 572px 64xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--cu-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--cu-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--cu-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--cu-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--cu-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--cu-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--cu-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--cu-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--cu-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--cu-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-spacing-zero",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--cu-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--cu-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--cu-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--cu-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--cu-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--cu-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--cu-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--cu-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--cu-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--cu-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--cu-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--cu-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--cu-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--cu-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--cu-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-19xl",
      description: "A 158px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-20xl",
      description: "A 172px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-21xl",
      description: "A 186px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "200px",
      cssVar: "--cu-spacing-22xl",
      description: "A 200px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.23xl",
      type: "dimension",
      value: "214px",
      cssVar: "--cu-spacing-23xl",
      description: "A 214px 23xl spacing step (from size.23xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.24xl",
      type: "dimension",
      value: "228px",
      cssVar: "--cu-spacing-24xl",
      description: "A 228px 24xl spacing step (from size.24xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.25xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-spacing-25xl",
      description: "A 242px 25xl spacing step (from size.25xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.26xl",
      type: "dimension",
      value: "256px",
      cssVar: "--cu-spacing-26xl",
      description: "A 256px 26xl spacing step (from size.26xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.27xl",
      type: "dimension",
      value: "270px",
      cssVar: "--cu-spacing-27xl",
      description: "A 270px 27xl spacing step (from size.27xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.28xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-spacing-28xl",
      description: "A 284px 28xl spacing step (from size.28xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.29xl",
      type: "dimension",
      value: "298px",
      cssVar: "--cu-spacing-29xl",
      description: "A 298px 29xl spacing step (from size.29xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.30xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-spacing-30xl",
      description: "A 312px 30xl spacing step (from size.30xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.31xl",
      type: "dimension",
      value: "326px",
      cssVar: "--cu-spacing-31xl",
      description: "A 326px 31xl spacing step (from size.31xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.32xl",
      type: "dimension",
      value: "340px",
      cssVar: "--cu-spacing-32xl",
      description: "A 340px 32xl spacing step (from size.32xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.33xl",
      type: "dimension",
      value: "354px",
      cssVar: "--cu-spacing-33xl",
      description: "A 354px 33xl spacing step (from size.33xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.34xl",
      type: "dimension",
      value: "368px",
      cssVar: "--cu-spacing-34xl",
      description: "A 368px 34xl spacing step (from size.34xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.35xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-spacing-35xl",
      description: "A 382px 35xl spacing step (from size.35xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.36xl",
      type: "dimension",
      value: "396px",
      cssVar: "--cu-spacing-36xl",
      description: "A 396px 36xl spacing step (from size.36xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.37xl",
      type: "dimension",
      value: "410px",
      cssVar: "--cu-spacing-37xl",
      description: "A 410px 37xl spacing step (from size.37xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.38xl",
      type: "dimension",
      value: "424px",
      cssVar: "--cu-spacing-38xl",
      description: "A 424px 38xl spacing step (from size.38xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.39xl",
      type: "dimension",
      value: "438px",
      cssVar: "--cu-spacing-39xl",
      description: "A 438px 39xl spacing step (from size.39xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.40xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-spacing-40xl",
      description: "A 452px 40xl spacing step (from size.40xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.41xl",
      type: "dimension",
      value: "466px",
      cssVar: "--cu-spacing-41xl",
      description: "A 466px 41xl spacing step (from size.41xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.42xl",
      type: "dimension",
      value: "480px",
      cssVar: "--cu-spacing-42xl",
      description: "A 480px 42xl spacing step (from size.42xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.43xl",
      type: "dimension",
      value: "494px",
      cssVar: "--cu-spacing-43xl",
      description: "A 494px 43xl spacing step (from size.43xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.44xl",
      type: "dimension",
      value: "508px",
      cssVar: "--cu-spacing-44xl",
      description: "A 508px 44xl spacing step (from size.44xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.45xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-spacing-45xl",
      description: "A 522px 45xl spacing step (from size.45xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.46xl",
      type: "dimension",
      value: "536px",
      cssVar: "--cu-spacing-46xl",
      description: "A 536px 46xl spacing step (from size.46xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.47xl",
      type: "dimension",
      value: "550px",
      cssVar: "--cu-spacing-47xl",
      description: "A 550px 47xl spacing step (from size.47xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.48xl",
      type: "dimension",
      value: "564px",
      cssVar: "--cu-spacing-48xl",
      description: "A 564px 48xl spacing step (from size.48xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.49xl",
      type: "dimension",
      value: "578px",
      cssVar: "--cu-spacing-49xl",
      description: "A 578px 49xl spacing step (from size.49xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.50xl",
      type: "dimension",
      value: "592px",
      cssVar: "--cu-spacing-50xl",
      description: "A 592px 50xl spacing step (from size.50xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.51xl",
      type: "dimension",
      value: "606px",
      cssVar: "--cu-spacing-51xl",
      description: "A 606px 51xl spacing step (from size.51xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.52xl",
      type: "dimension",
      value: "620px",
      cssVar: "--cu-spacing-52xl",
      description: "A 620px 52xl spacing step (from size.52xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.53xl",
      type: "dimension",
      value: "634px",
      cssVar: "--cu-spacing-53xl",
      description: "A 634px 53xl spacing step (from size.53xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.54xl",
      type: "dimension",
      value: "648px",
      cssVar: "--cu-spacing-54xl",
      description: "A 648px 54xl spacing step (from size.54xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.55xl",
      type: "dimension",
      value: "662px",
      cssVar: "--cu-spacing-55xl",
      description: "A 662px 55xl spacing step (from size.55xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.56xl",
      type: "dimension",
      value: "676px",
      cssVar: "--cu-spacing-56xl",
      description: "A 676px 56xl spacing step (from size.56xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.57xl",
      type: "dimension",
      value: "690px",
      cssVar: "--cu-spacing-57xl",
      description: "A 690px 57xl spacing step (from size.57xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.58xl",
      type: "dimension",
      value: "704px",
      cssVar: "--cu-spacing-58xl",
      description: "A 704px 58xl spacing step (from size.58xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.59xl",
      type: "dimension",
      value: "718px",
      cssVar: "--cu-spacing-59xl",
      description: "A 718px 59xl spacing step (from size.59xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.60xl",
      type: "dimension",
      value: "732px",
      cssVar: "--cu-spacing-60xl",
      description: "A 732px 60xl spacing step (from size.60xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.61xl",
      type: "dimension",
      value: "746px",
      cssVar: "--cu-spacing-61xl",
      description: "A 746px 61xl spacing step (from size.61xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.62xl",
      type: "dimension",
      value: "760px",
      cssVar: "--cu-spacing-62xl",
      description: "A 760px 62xl spacing step (from size.62xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.63xl",
      type: "dimension",
      value: "774px",
      cssVar: "--cu-spacing-63xl",
      description: "A 774px 63xl spacing step (from size.63xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.64xl",
      type: "dimension",
      value: "788px",
      cssVar: "--cu-spacing-64xl",
      description: "A 788px 64xl spacing step (from size.64xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--cu-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--cu-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--cu-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--cu-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--cu-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--cu-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--cu-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--cu-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--cu-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--cu-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--cu-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--cu-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--cu-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--cu-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--cu-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--cu-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--cu-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--cu-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--cu-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--cu-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--cu-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--cu-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--cu-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--cu-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--cu-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--cu-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--cu-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--cu-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--cu-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--cu-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--cu-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.none",
      type: "number",
      value: "0.765",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.765)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.0575",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1.0575)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.125",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.125)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.2375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.2375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.665",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.665)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.285714",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (1.285714)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (1.4)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.26",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (1.26)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.08",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (1.08)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.zero",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-border-radius-zero",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--cu-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--cu-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--cu-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--cu-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--cu-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--cu-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-container",
      description: "Corner radius for large framed regions that group other content (8px, `border-radius.lg`). Used by Container, Accordion, Callout, CodeBlock, FileTree, FilePicker, Table, Stepper and InlineCodeText.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.trigger",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-trigger",
      description: "Corner radius for triggers interfaces (6px, `border-radius.sm`). Used by Tabs (indicators).",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-card",
      description: "Corner radius for cards and card-like tiles (6px, `border-radius.md`). Slightly tighter than `container` so cards nested inside a container still read as inset. Used by Card and FilePicker.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-button",
      description: "Corner radius for triggers and other pressable elements (8px, `border-radius.lg`). Used by Button, Badge, DatePicker triggers, SearchInput results, Select items, Tabs triggers and CodeBlock header controls. Circular and rounded Button variants override it.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "Corner radius for form controls that accept input (8px, `border-radius.lg`). Matches `button` so inputs and buttons line up when placed side by side. Used by Input, TextArea, Select, Field, RadioGroup and Rating.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--cu-border-radius-checkbox",
      description: "Corner radius for the checkbox box (6px, `border-radius.md`). Kept smaller than `control` so the small box still reads as a square rather than a pill. Used by Checkbox.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "Corner radius for modal dialogs (12px, `border-radius.xl`). Larger than other surfaces to set modal content apart from the page beneath it. Used by Dialog.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "Corner radius for sheets (0px, `border-radius.zero`). Sheets slide in flush against a viewport edge, so their corners stay square. Applied by Sheet to its exposed corners.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "Corner radius for drawers (32px, `border-radius.4xl`). The large rounding marks a panel that slides over the page from an edge. Used as the default `borderRadius` of Drawer.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-popover",
      description: "Corner radius for popovers and dropdown menus (6px, `border-radius.md`). Used by Popover and the Select dropdown list.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-tooltip",
      description: "Corner radius for tooltips (6px, `border-radius.md`). Used by Tooltip.",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--cu-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--cu-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--cu-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--cu-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--cu-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--cu-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--cu-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--cu-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--cu-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--cu-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--cu-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--cu-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--cu-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--cu-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--cu-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--cu-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--cu-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--cu-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--cu-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--cu-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--cu-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--cu-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--cu-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--cu-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--cu-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--cu-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--cu-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--cu-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--cu-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--cu-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "Largest display style: Storm Sans semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "Large display style: Storm Sans semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "Medium display style: Storm Sans bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-hero",
      description: "Largest editorial display style: Storm Serif semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-lg",
      description: "Large editorial display style: Storm Serif semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-md",
      description: "Medium editorial display style: Storm Serif bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-xl",
      description: "Large title style: Storm Sans semibold at 18px (`font-size.lg`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "Medium title style: Storm Sans bold at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-md",
      description: "Medium title style: Storm Sans medium at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "Small title style: Storm Sans bold at 12px (`font-size.sm`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-xs",
      description: "Extra small title style: Storm Sans medium at 10px (`font-size.xxs`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-md",
      description: "Default body text style: Storm Sans regular at 18px (`font-size.md`) with normal line height. Use it for paragraphs, descriptions and most running copy. BodyText uses it by default, as do the components built on BodyText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-sm",
      description: "Smaller body text style: Storm Sans medium at 16px (`font-size.sm`) with normal line height. Use it for secondary copy in dense layouts, such as table rows, sidebars and card metadata, where `body-md` would feel too large.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "Caption style: Storm Sans regular italic at 16px (`font-size.sm`) with tight line height. Use it for helper text, annotations and small supporting labels. Used by Field helper and validation text, ValidationText, EyebrowText, Slider value labels and the CodeBlock header file name.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "Eyebrow style: Google Sans Code semibold at 18px (`font-size.md`) with tight line height. Use it for the short kicker or category label that sits directly above a heading. Used by EyebrowText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "Monospace code style: Google Sans Code regular at 20px (`font-size.lg`) with snug line height. Use it for source code, file paths, identifiers and other literal values. Used by CodeBlock, InlineCodeText, FileTree, Stepper and code content inside Accordion.",
      theme: undefined,
      typography: true
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #f1f1f133",
      cssVar: "--cu-ring-base",
      description: "Generated base 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f1f1f133",
      cssVar: "--cu-ring-base-subtle",
      description: "Generated base 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f1f1f133",
      cssVar: "--cu-ring-base-offset",
      description: "Generated base 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f1f1f133",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "Generated base 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-danger",
      description: "Generated danger 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle",
      description: "Generated danger 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-danger-offset",
      description: "Generated danger 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "Generated danger 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2326",
      cssVar: "--cu-ring-warning",
      description: "Generated warning 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle",
      description: "Generated warning 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2326",
      cssVar: "--cu-ring-warning-offset",
      description: "Generated warning 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "Generated warning 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff26",
      cssVar: "--cu-ring-info",
      description: "Generated info 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff26",
      cssVar: "--cu-ring-info-subtle",
      description: "Generated info 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff26",
      cssVar: "--cu-ring-info-offset",
      description: "Generated info 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff26",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "Generated info 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da26",
      cssVar: "--cu-ring-discovery",
      description: "Generated discovery 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da26",
      cssVar: "--cu-ring-discovery-subtle",
      description: "Generated discovery 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da26",
      cssVar: "--cu-ring-discovery-offset",
      description: "Generated discovery 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da26",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "Generated discovery 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-success",
      description: "Generated success 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-success-subtle",
      description: "Generated success 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-success-offset",
      description: "Generated success 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "Generated success 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    }
  ],
  "darkHighContrast": [
    {
      path: "color.black",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#ebebed",
      cssVar: "--cu-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--cu-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#9a9fa7",
      cssVar: "--cu-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#737383",
      cssVar: "--cu-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#3f424a",
      cssVar: "--cu-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#2b2b33",
      cssVar: "--cu-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#08080a",
      cssVar: "--cu-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#f997b0",
      cssVar: "--cu-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#f77395",
      cssVar: "--cu-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#f6507a",
      cssVar: "--cu-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#f42c5f",
      cssVar: "--cu-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#f00a45",
      cssVar: "--cu-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#b90a37",
      cssVar: "--cu-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#510619",
      cssVar: "--cu-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#1d0309",
      cssVar: "--cu-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#ffeee5",
      cssVar: "--cu-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#ffd3bb",
      cssVar: "--cu-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#ffb890",
      cssVar: "--cu-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ff9c65",
      cssVar: "--cu-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ff803a",
      cssVar: "--cu-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#ff5c00",
      cssVar: "--cu-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#b24600",
      cssVar: "--cu-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#742f00",
      cssVar: "--cu-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#471b00",
      cssVar: "--cu-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#ffe1ab",
      cssVar: "--cu-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#ffd280",
      cssVar: "--cu-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#ffc253",
      cssVar: "--cu-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#ffb327",
      cssVar: "--cu-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#ffb01e",
      cssVar: "--cu-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#ffa706",
      cssVar: "--cu-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#dc8f00",
      cssVar: "--cu-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a26902",
      cssVar: "--cu-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#c9f8d8",
      cssVar: "--cu-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7ceeaf",
      cssVar: "--cu-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#2de498",
      cssVar: "--cu-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#1db77c",
      cssVar: "--cu-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#13825b",
      cssVar: "--cu-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#031611",
      cssVar: "--cu-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#f8fbff",
      cssVar: "--cu-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#cbdeff",
      cssVar: "--cu-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--cu-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#70a4ff",
      cssVar: "--cu-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#4387ff",
      cssVar: "--cu-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#025eff",
      cssVar: "--cu-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#012e7c",
      cssVar: "--cu-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#00163b",
      cssVar: "--cu-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#e1d7fb",
      cssVar: "--cu-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#c1adf7",
      cssVar: "--cu-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#a283f3",
      cssVar: "--cu-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#815ddd",
      cssVar: "--cu-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#623dc3",
      cssVar: "--cu-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#492b9b",
      cssVar: "--cu-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#321c71",
      cssVar: "--cu-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#1d0f42",
      cssVar: "--cu-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#ffd5ee",
      cssVar: "--cu-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ffaade",
      cssVar: "--cu-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#ff85d0",
      cssVar: "--cu-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#fa7dcb",
      cssVar: "--cu-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#f976c6",
      cssVar: "--cu-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#dc50a6",
      cssVar: "--cu-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#932b6b",
      cssVar: "--cu-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#1c0815",
      cssVar: "--cu-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.primary",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-primary",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.secondary",
      type: "color",
      value: "#ebebed",
      cssVar: "--cu-color-secondary",
      description: "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.tertiary",
      type: "color",
      value: "#2b2b33",
      cssVar: "--cu-color-tertiary",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border",
      type: "color",
      value: "#3f424a",
      cssVar: "--cu-color-border",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger",
      type: "color",
      value: "#f00a45",
      cssVar: "--cu-color-danger",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning",
      type: "color",
      value: "#ffb327",
      cssVar: "--cu-color-warning",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info",
      type: "color",
      value: "#70a4ff",
      cssVar: "--cu-color-info",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle",
      type: "color",
      value: "#012e7c",
      cssVar: "--cu-color-info-subtle",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery",
      type: "color",
      value: "#a283f3",
      cssVar: "--cu-color-discovery",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle",
      type: "color",
      value: "#1d0f42",
      cssVar: "--cu-color-discovery-subtle",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success",
      type: "color",
      value: "#2de498",
      cssVar: "--cu-color-success",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-sunken",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-canvas",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-canvas",
      description: "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-elevated",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-floating",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-floating",
      description: "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-highest",
      type: "color",
      value: "#08080a",
      cssVar: "--cu-color-surface-highest",
      description: "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.backdrop",
      type: "color",
      value: "#00000066",
      cssVar: "--cu-color-backdrop",
      description: "Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Smallest resting shadow (`shadow.2xs`): a single 1px edge under the element. Use it to give flat controls, such as inputs and segmented buttons, a hint of depth.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Small resting shadow (`shadow.xs`). Use it for cards, tiles and buttons sitting directly on the canvas.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Medium resting shadow (`shadow.sm`). Use it for raised cards and panels that need more separation from the canvas than `resting.small`.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Small floating shadow (`shadow.md`). Use it for compact floating content, such as tooltips and dropdown menus.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Medium floating shadow (`shadow.lg`). Use it for popovers, menus and other anchored panels.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Large floating shadow (`shadow.xl`). Use it for dialogs, drawers and sheets that sit above the whole page.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Largest floating shadow (`shadow.2xl`). Use it for the highest-elevation content, such as full-screen modals or command palettes.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Inset shadow (`inset-shadow.xs`) for recessed elements. Use it for wells and pressed states that should read as sunken into their surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral (gray) data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `neutral.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data color. Use it for the primary mark of a red series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#1d0309",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `red.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#ff5c00",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data color. Use it for the primary mark of a orange series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#471b00",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `orange.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#ffb01e",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data color. Use it for the primary mark of a yellow series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `yellow.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#13825b",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data color. Use it for the primary mark of a green series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `green.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data color. Use it for the primary mark of a blue series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#00163b",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `blue.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#623dc3",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data color. Use it for the primary mark of a purple series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#1d0f42",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `purple.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#f976c6",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data color. Use it for the primary mark of a pink series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#1c0815",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `pink.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-base",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle",
      type: "color",
      value: "#2b2b33",
      cssVar: "--cu-color-base-subtle",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-accent",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-base-accent",
      description: "Generated text and icon color on base backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-base-accent",
      description: "Alias of base for the base theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-base-subtle",
      description: "Generated text and icon color on base-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-danger-accent",
      description: "Generated text and icon color on danger backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-accent",
      type: "color",
      value: "#f00a45",
      cssVar: "--cu-color-danger-accent",
      description: "Alias of danger for the danger theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle",
      type: "color",
      value: "#1b0009",
      cssVar: "--cu-color-danger-subtle",
      description: "Generated low-emphasis danger background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-subtle",
      type: "color",
      value: "#fff1f2",
      cssVar: "--cu-color-on-danger-subtle",
      description: "Generated text and icon color on danger-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-accent",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-warning-accent",
      description: "Generated text and icon color on warning backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-accent",
      type: "color",
      value: "#ffb327",
      cssVar: "--cu-color-warning-accent",
      description: "Alias of warning for the warning theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle",
      type: "color",
      value: "#382500",
      cssVar: "--cu-color-warning-subtle",
      description: "Generated low-emphasis warning background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-warning-subtle",
      description: "Generated text and icon color on warning-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-info-accent",
      description: "Generated text and icon color on info backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-accent",
      type: "color",
      value: "#70a4ff",
      cssVar: "--cu-color-info-accent",
      description: "Alias of info for the info theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-info-subtle",
      description: "Generated text and icon color on info-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-discovery-accent",
      description: "Generated text and icon color on discovery backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-accent",
      type: "color",
      value: "#a283f3",
      cssVar: "--cu-color-discovery-accent",
      description: "Alias of discovery for the discovery theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-discovery-subtle",
      description: "Generated text and icon color on discovery-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-success-accent",
      description: "Generated text and icon color on success backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-accent",
      type: "color",
      value: "#2de498",
      cssVar: "--cu-color-success-accent",
      description: "Alias of success for the success theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle",
      type: "color",
      value: "#001a11",
      cssVar: "--cu-color-success-subtle",
      description: "Generated low-emphasis success background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-success-subtle",
      description: "Generated text and icon color on success-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-border-active",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, dark contrast primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-border-inactive",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-disabled",
      type: "color",
      value: "#2f3138",
      cssVar: "--cu-color-border-disabled",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-active",
      type: "color",
      value: "#f4f4f4",
      cssVar: "--cu-color-base-active",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-base-inactive",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-disabled",
      type: "color",
      value: "#7a7a89",
      cssVar: "--cu-color-base-disabled",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-active",
      type: "color",
      value: "#3d3d49",
      cssVar: "--cu-color-base-subtle-active",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 13% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-base-subtle-inactive",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-disabled",
      type: "color",
      value: "#28282f",
      cssVar: "--cu-color-base-subtle-disabled",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-active",
      type: "color",
      value: "#ff8ba2",
      cssVar: "--cu-color-danger-active",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-inactive",
      type: "color",
      value: "#7f002a",
      cssVar: "--cu-color-danger-inactive",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-disabled",
      type: "color",
      value: "#642b39",
      cssVar: "--cu-color-danger-disabled",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-active",
      type: "color",
      value: "#65081d",
      cssVar: "--cu-color-danger-subtle-active",
      description: "Generated low-emphasis danger background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-danger-subtle-inactive",
      description: "Generated low-emphasis danger background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-disabled",
      type: "color",
      value: "#2d161d",
      cssVar: "--cu-color-danger-subtle-disabled",
      description: "Generated low-emphasis danger background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-active",
      type: "color",
      value: "#945a00",
      cssVar: "--cu-color-warning-active",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-inactive",
      type: "color",
      value: "#ffe995",
      cssVar: "--cu-color-warning-inactive",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-disabled",
      type: "color",
      value: "#7c5e32",
      cssVar: "--cu-color-warning-disabled",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-active",
      type: "color",
      value: "#9b6615",
      cssVar: "--cu-color-warning-subtle-active",
      description: "Generated low-emphasis warning background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-inactive",
      type: "color",
      value: "#110a00",
      cssVar: "--cu-color-warning-subtle-inactive",
      description: "Generated low-emphasis warning background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-disabled",
      type: "color",
      value: "#382e1d",
      cssVar: "--cu-color-warning-subtle-disabled",
      description: "Generated low-emphasis warning background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-active",
      type: "color",
      value: "#b8deff",
      cssVar: "--cu-color-info-active",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-inactive",
      type: "color",
      value: "#0159f1",
      cssVar: "--cu-color-info-inactive",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-disabled",
      type: "color",
      value: "#36507f",
      cssVar: "--cu-color-info-disabled",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-active",
      type: "color",
      value: "#1953bb",
      cssVar: "--cu-color-info-subtle-active",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-inactive",
      type: "color",
      value: "#001437",
      cssVar: "--cu-color-info-subtle-inactive",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-disabled",
      type: "color",
      value: "#1e2b43",
      cssVar: "--cu-color-info-subtle-disabled",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-active",
      type: "color",
      value: "#f8f5ff",
      cssVar: "--cu-color-discovery-active",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-inactive",
      type: "color",
      value: "#643bc7",
      cssVar: "--cu-color-discovery-inactive",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-disabled",
      type: "color",
      value: "#4f4472",
      cssVar: "--cu-color-discovery-disabled",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-active",
      type: "color",
      value: "#37256f",
      cssVar: "--cu-color-discovery-subtle-active",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-inactive",
      type: "color",
      value: "#0a0219",
      cssVar: "--cu-color-discovery-subtle-inactive",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-disabled",
      type: "color",
      value: "#231f32",
      cssVar: "--cu-color-discovery-subtle-disabled",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-active",
      type: "color",
      value: "#c7ffe7",
      cssVar: "--cu-color-success-active",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-inactive",
      type: "color",
      value: "#006a46",
      cssVar: "--cu-color-success-inactive",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-disabled",
      type: "color",
      value: "#376754",
      cssVar: "--cu-color-success-disabled",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-active",
      type: "color",
      value: "#19774e",
      cssVar: "--cu-color-success-subtle-active",
      description: "Generated low-emphasis success background for the dark theme (active, 25% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-success-subtle-inactive",
      description: "Generated low-emphasis success background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-disabled",
      type: "color",
      value: "#1a3029",
      cssVar: "--cu-color-success-subtle-disabled",
      description: "Generated low-emphasis success background for the dark theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "size.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-size-zero",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--cu-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--cu-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--cu-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--cu-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--cu-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--cu-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--cu-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--cu-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--cu-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--cu-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--cu-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--cu-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--cu-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-19xl",
      description: "A 122px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-20xl",
      description: "A 132px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-21xl",
      description: "A 142px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-22xl",
      description: "A 152px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-23xl",
      description: "A 162px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-24xl",
      description: "A 172px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-25xl",
      description: "A 182px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-26xl",
      description: "A 192px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-27xl",
      description: "A 202px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-28xl",
      description: "A 212px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-29xl",
      description: "A 222px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-30xl",
      description: "A 232px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-31xl",
      description: "A 242px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-32xl",
      description: "A 252px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-33xl",
      description: "A 262px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-34xl",
      description: "A 272px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-35xl",
      description: "A 282px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "292px",
      cssVar: "--cu-size-36xl",
      description: "A 292px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "302px",
      cssVar: "--cu-size-37xl",
      description: "A 302px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.38xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-size-38xl",
      description: "A 312px 38xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.39xl",
      type: "dimension",
      value: "322px",
      cssVar: "--cu-size-39xl",
      description: "A 322px 39xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.40xl",
      type: "dimension",
      value: "332px",
      cssVar: "--cu-size-40xl",
      description: "A 332px 40xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.41xl",
      type: "dimension",
      value: "342px",
      cssVar: "--cu-size-41xl",
      description: "A 342px 41xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.42xl",
      type: "dimension",
      value: "352px",
      cssVar: "--cu-size-42xl",
      description: "A 352px 42xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.43xl",
      type: "dimension",
      value: "362px",
      cssVar: "--cu-size-43xl",
      description: "A 362px 43xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.44xl",
      type: "dimension",
      value: "372px",
      cssVar: "--cu-size-44xl",
      description: "A 372px 44xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.45xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-size-45xl",
      description: "A 382px 45xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.46xl",
      type: "dimension",
      value: "392px",
      cssVar: "--cu-size-46xl",
      description: "A 392px 46xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.47xl",
      type: "dimension",
      value: "402px",
      cssVar: "--cu-size-47xl",
      description: "A 402px 47xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.48xl",
      type: "dimension",
      value: "412px",
      cssVar: "--cu-size-48xl",
      description: "A 412px 48xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.49xl",
      type: "dimension",
      value: "422px",
      cssVar: "--cu-size-49xl",
      description: "A 422px 49xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.50xl",
      type: "dimension",
      value: "432px",
      cssVar: "--cu-size-50xl",
      description: "A 432px 50xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.51xl",
      type: "dimension",
      value: "442px",
      cssVar: "--cu-size-51xl",
      description: "A 442px 51xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.52xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-size-52xl",
      description: "A 452px 52xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.53xl",
      type: "dimension",
      value: "462px",
      cssVar: "--cu-size-53xl",
      description: "A 462px 53xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.54xl",
      type: "dimension",
      value: "472px",
      cssVar: "--cu-size-54xl",
      description: "A 472px 54xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.55xl",
      type: "dimension",
      value: "482px",
      cssVar: "--cu-size-55xl",
      description: "A 482px 55xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.56xl",
      type: "dimension",
      value: "492px",
      cssVar: "--cu-size-56xl",
      description: "A 492px 56xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.57xl",
      type: "dimension",
      value: "502px",
      cssVar: "--cu-size-57xl",
      description: "A 502px 57xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.58xl",
      type: "dimension",
      value: "512px",
      cssVar: "--cu-size-58xl",
      description: "A 512px 58xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.59xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-size-59xl",
      description: "A 522px 59xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.60xl",
      type: "dimension",
      value: "532px",
      cssVar: "--cu-size-60xl",
      description: "A 532px 60xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.61xl",
      type: "dimension",
      value: "542px",
      cssVar: "--cu-size-61xl",
      description: "A 542px 61xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.62xl",
      type: "dimension",
      value: "552px",
      cssVar: "--cu-size-62xl",
      description: "A 552px 62xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.63xl",
      type: "dimension",
      value: "562px",
      cssVar: "--cu-size-63xl",
      description: "A 562px 63xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.64xl",
      type: "dimension",
      value: "572px",
      cssVar: "--cu-size-64xl",
      description: "A 572px 64xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--cu-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--cu-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--cu-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--cu-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--cu-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--cu-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--cu-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--cu-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--cu-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--cu-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-spacing-zero",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--cu-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--cu-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--cu-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--cu-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--cu-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--cu-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--cu-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--cu-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--cu-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--cu-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--cu-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--cu-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--cu-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--cu-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--cu-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-19xl",
      description: "A 158px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-20xl",
      description: "A 172px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-21xl",
      description: "A 186px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "200px",
      cssVar: "--cu-spacing-22xl",
      description: "A 200px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.23xl",
      type: "dimension",
      value: "214px",
      cssVar: "--cu-spacing-23xl",
      description: "A 214px 23xl spacing step (from size.23xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.24xl",
      type: "dimension",
      value: "228px",
      cssVar: "--cu-spacing-24xl",
      description: "A 228px 24xl spacing step (from size.24xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.25xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-spacing-25xl",
      description: "A 242px 25xl spacing step (from size.25xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.26xl",
      type: "dimension",
      value: "256px",
      cssVar: "--cu-spacing-26xl",
      description: "A 256px 26xl spacing step (from size.26xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.27xl",
      type: "dimension",
      value: "270px",
      cssVar: "--cu-spacing-27xl",
      description: "A 270px 27xl spacing step (from size.27xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.28xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-spacing-28xl",
      description: "A 284px 28xl spacing step (from size.28xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.29xl",
      type: "dimension",
      value: "298px",
      cssVar: "--cu-spacing-29xl",
      description: "A 298px 29xl spacing step (from size.29xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.30xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-spacing-30xl",
      description: "A 312px 30xl spacing step (from size.30xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.31xl",
      type: "dimension",
      value: "326px",
      cssVar: "--cu-spacing-31xl",
      description: "A 326px 31xl spacing step (from size.31xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.32xl",
      type: "dimension",
      value: "340px",
      cssVar: "--cu-spacing-32xl",
      description: "A 340px 32xl spacing step (from size.32xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.33xl",
      type: "dimension",
      value: "354px",
      cssVar: "--cu-spacing-33xl",
      description: "A 354px 33xl spacing step (from size.33xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.34xl",
      type: "dimension",
      value: "368px",
      cssVar: "--cu-spacing-34xl",
      description: "A 368px 34xl spacing step (from size.34xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.35xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-spacing-35xl",
      description: "A 382px 35xl spacing step (from size.35xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.36xl",
      type: "dimension",
      value: "396px",
      cssVar: "--cu-spacing-36xl",
      description: "A 396px 36xl spacing step (from size.36xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.37xl",
      type: "dimension",
      value: "410px",
      cssVar: "--cu-spacing-37xl",
      description: "A 410px 37xl spacing step (from size.37xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.38xl",
      type: "dimension",
      value: "424px",
      cssVar: "--cu-spacing-38xl",
      description: "A 424px 38xl spacing step (from size.38xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.39xl",
      type: "dimension",
      value: "438px",
      cssVar: "--cu-spacing-39xl",
      description: "A 438px 39xl spacing step (from size.39xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.40xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-spacing-40xl",
      description: "A 452px 40xl spacing step (from size.40xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.41xl",
      type: "dimension",
      value: "466px",
      cssVar: "--cu-spacing-41xl",
      description: "A 466px 41xl spacing step (from size.41xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.42xl",
      type: "dimension",
      value: "480px",
      cssVar: "--cu-spacing-42xl",
      description: "A 480px 42xl spacing step (from size.42xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.43xl",
      type: "dimension",
      value: "494px",
      cssVar: "--cu-spacing-43xl",
      description: "A 494px 43xl spacing step (from size.43xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.44xl",
      type: "dimension",
      value: "508px",
      cssVar: "--cu-spacing-44xl",
      description: "A 508px 44xl spacing step (from size.44xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.45xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-spacing-45xl",
      description: "A 522px 45xl spacing step (from size.45xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.46xl",
      type: "dimension",
      value: "536px",
      cssVar: "--cu-spacing-46xl",
      description: "A 536px 46xl spacing step (from size.46xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.47xl",
      type: "dimension",
      value: "550px",
      cssVar: "--cu-spacing-47xl",
      description: "A 550px 47xl spacing step (from size.47xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.48xl",
      type: "dimension",
      value: "564px",
      cssVar: "--cu-spacing-48xl",
      description: "A 564px 48xl spacing step (from size.48xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.49xl",
      type: "dimension",
      value: "578px",
      cssVar: "--cu-spacing-49xl",
      description: "A 578px 49xl spacing step (from size.49xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.50xl",
      type: "dimension",
      value: "592px",
      cssVar: "--cu-spacing-50xl",
      description: "A 592px 50xl spacing step (from size.50xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.51xl",
      type: "dimension",
      value: "606px",
      cssVar: "--cu-spacing-51xl",
      description: "A 606px 51xl spacing step (from size.51xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.52xl",
      type: "dimension",
      value: "620px",
      cssVar: "--cu-spacing-52xl",
      description: "A 620px 52xl spacing step (from size.52xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.53xl",
      type: "dimension",
      value: "634px",
      cssVar: "--cu-spacing-53xl",
      description: "A 634px 53xl spacing step (from size.53xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.54xl",
      type: "dimension",
      value: "648px",
      cssVar: "--cu-spacing-54xl",
      description: "A 648px 54xl spacing step (from size.54xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.55xl",
      type: "dimension",
      value: "662px",
      cssVar: "--cu-spacing-55xl",
      description: "A 662px 55xl spacing step (from size.55xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.56xl",
      type: "dimension",
      value: "676px",
      cssVar: "--cu-spacing-56xl",
      description: "A 676px 56xl spacing step (from size.56xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.57xl",
      type: "dimension",
      value: "690px",
      cssVar: "--cu-spacing-57xl",
      description: "A 690px 57xl spacing step (from size.57xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.58xl",
      type: "dimension",
      value: "704px",
      cssVar: "--cu-spacing-58xl",
      description: "A 704px 58xl spacing step (from size.58xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.59xl",
      type: "dimension",
      value: "718px",
      cssVar: "--cu-spacing-59xl",
      description: "A 718px 59xl spacing step (from size.59xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.60xl",
      type: "dimension",
      value: "732px",
      cssVar: "--cu-spacing-60xl",
      description: "A 732px 60xl spacing step (from size.60xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.61xl",
      type: "dimension",
      value: "746px",
      cssVar: "--cu-spacing-61xl",
      description: "A 746px 61xl spacing step (from size.61xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.62xl",
      type: "dimension",
      value: "760px",
      cssVar: "--cu-spacing-62xl",
      description: "A 760px 62xl spacing step (from size.62xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.63xl",
      type: "dimension",
      value: "774px",
      cssVar: "--cu-spacing-63xl",
      description: "A 774px 63xl spacing step (from size.63xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.64xl",
      type: "dimension",
      value: "788px",
      cssVar: "--cu-spacing-64xl",
      description: "A 788px 64xl spacing step (from size.64xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--cu-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--cu-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--cu-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--cu-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--cu-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--cu-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--cu-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--cu-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--cu-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--cu-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--cu-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--cu-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--cu-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--cu-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--cu-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--cu-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--cu-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--cu-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--cu-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--cu-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--cu-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--cu-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--cu-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--cu-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--cu-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--cu-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--cu-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--cu-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--cu-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--cu-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--cu-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.none",
      type: "number",
      value: "0.765",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.765)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.0575",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1.0575)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.125",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.125)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.2375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.2375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.665",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.665)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.285714",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (1.285714)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (1.4)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.26",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (1.26)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.08",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (1.08)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.zero",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-border-radius-zero",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--cu-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--cu-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--cu-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--cu-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--cu-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--cu-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-container",
      description: "Corner radius for large framed regions that group other content (8px, `border-radius.lg`). Used by Container, Accordion, Callout, CodeBlock, FileTree, FilePicker, Table, Stepper and InlineCodeText.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.trigger",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-trigger",
      description: "Corner radius for triggers interfaces (6px, `border-radius.sm`). Used by Tabs (indicators).",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-card",
      description: "Corner radius for cards and card-like tiles (6px, `border-radius.md`). Slightly tighter than `container` so cards nested inside a container still read as inset. Used by Card and FilePicker.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-button",
      description: "Corner radius for triggers and other pressable elements (8px, `border-radius.lg`). Used by Button, Badge, DatePicker triggers, SearchInput results, Select items, Tabs triggers and CodeBlock header controls. Circular and rounded Button variants override it.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "Corner radius for form controls that accept input (8px, `border-radius.lg`). Matches `button` so inputs and buttons line up when placed side by side. Used by Input, TextArea, Select, Field, RadioGroup and Rating.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--cu-border-radius-checkbox",
      description: "Corner radius for the checkbox box (6px, `border-radius.md`). Kept smaller than `control` so the small box still reads as a square rather than a pill. Used by Checkbox.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "Corner radius for modal dialogs (12px, `border-radius.xl`). Larger than other surfaces to set modal content apart from the page beneath it. Used by Dialog.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "Corner radius for sheets (0px, `border-radius.zero`). Sheets slide in flush against a viewport edge, so their corners stay square. Applied by Sheet to its exposed corners.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "Corner radius for drawers (32px, `border-radius.4xl`). The large rounding marks a panel that slides over the page from an edge. Used as the default `borderRadius` of Drawer.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-popover",
      description: "Corner radius for popovers and dropdown menus (6px, `border-radius.md`). Used by Popover and the Select dropdown list.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-tooltip",
      description: "Corner radius for tooltips (6px, `border-radius.md`). Used by Tooltip.",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--cu-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--cu-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--cu-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--cu-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--cu-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--cu-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--cu-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--cu-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--cu-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--cu-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--cu-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--cu-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--cu-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--cu-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--cu-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--cu-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--cu-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--cu-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--cu-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--cu-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--cu-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--cu-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--cu-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--cu-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--cu-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--cu-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--cu-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--cu-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--cu-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--cu-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "Largest display style: Storm Sans semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "Large display style: Storm Sans semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "Medium display style: Storm Sans bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-hero",
      description: "Largest editorial display style: Storm Serif semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-lg",
      description: "Large editorial display style: Storm Serif semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-md",
      description: "Medium editorial display style: Storm Serif bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-xl",
      description: "Large title style: Storm Sans semibold at 18px (`font-size.lg`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "Medium title style: Storm Sans bold at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-md",
      description: "Medium title style: Storm Sans medium at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "Small title style: Storm Sans bold at 12px (`font-size.sm`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-xs",
      description: "Extra small title style: Storm Sans medium at 10px (`font-size.xxs`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-md",
      description: "Default body text style: Storm Sans regular at 18px (`font-size.md`) with normal line height. Use it for paragraphs, descriptions and most running copy. BodyText uses it by default, as do the components built on BodyText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-sm",
      description: "Smaller body text style: Storm Sans medium at 16px (`font-size.sm`) with normal line height. Use it for secondary copy in dense layouts, such as table rows, sidebars and card metadata, where `body-md` would feel too large.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "Caption style: Storm Sans regular italic at 16px (`font-size.sm`) with tight line height. Use it for helper text, annotations and small supporting labels. Used by Field helper and validation text, ValidationText, EyebrowText, Slider value labels and the CodeBlock header file name.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "Eyebrow style: Google Sans Code semibold at 18px (`font-size.md`) with tight line height. Use it for the short kicker or category label that sits directly above a heading. Used by EyebrowText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "Monospace code style: Google Sans Code regular at 20px (`font-size.lg`) with snug line height. Use it for source code, file paths, identifiers and other literal values. Used by CodeBlock, InlineCodeText, FileTree, Stepper and code content inside Accordion.",
      theme: undefined,
      typography: true
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #f1f1f133",
      cssVar: "--cu-ring-base",
      description: "Generated base 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f1f1f133",
      cssVar: "--cu-ring-base-subtle",
      description: "Generated base 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f1f1f133",
      cssVar: "--cu-ring-base-offset",
      description: "Generated base 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f1f1f133",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "Generated base 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-danger",
      description: "Generated danger 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle",
      description: "Generated danger 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-danger-offset",
      description: "Generated danger 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "Generated danger 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2326",
      cssVar: "--cu-ring-warning",
      description: "Generated warning 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle",
      description: "Generated warning 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2326",
      cssVar: "--cu-ring-warning-offset",
      description: "Generated warning 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "Generated warning 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff26",
      cssVar: "--cu-ring-info",
      description: "Generated info 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff26",
      cssVar: "--cu-ring-info-subtle",
      description: "Generated info 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff26",
      cssVar: "--cu-ring-info-offset",
      description: "Generated info 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff26",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "Generated info 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da26",
      cssVar: "--cu-ring-discovery",
      description: "Generated discovery 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da26",
      cssVar: "--cu-ring-discovery-subtle",
      description: "Generated discovery 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da26",
      cssVar: "--cu-ring-discovery-offset",
      description: "Generated discovery 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da26",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "Generated discovery 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-success",
      description: "Generated success 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-success-subtle",
      description: "Generated success 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-success-offset",
      description: "Generated success 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "Generated success 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    }
  ],
  "light": [
    {
      path: "color.black",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#fafafa",
      cssVar: "--cu-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--cu-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#eaeaea",
      cssVar: "--cu-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--cu-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#cacacb",
      cssVar: "--cu-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--cu-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#959698",
      cssVar: "--cu-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#7b7b7e",
      cssVar: "--cu-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#555659",
      cssVar: "--cu-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#46464a",
      cssVar: "--cu-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#2b2c30",
      cssVar: "--cu-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#242528",
      cssVar: "--cu-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#1f1f21",
      cssVar: "--cu-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#e2819a",
      cssVar: "--cu-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#dd6c89",
      cssVar: "--cu-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#d95778",
      cssVar: "--cu-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#d44267",
      cssVar: "--cu-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#cf2d56",
      cssVar: "--cu-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#ae284a",
      cssVar: "--cu-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#6f1c31",
      cssVar: "--cu-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#501524",
      cssVar: "--cu-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#f6c3a7",
      cssVar: "--cu-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#f4b18c",
      cssVar: "--cu-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#f19f71",
      cssVar: "--cu-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ef8c56",
      cssVar: "--cu-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ec7a3b",
      cssVar: "--cu-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#df6520",
      cssVar: "--cu-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#bf520b",
      cssVar: "--cu-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#9f4000",
      cssVar: "--cu-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#803000",
      cssVar: "--cu-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#facd7b",
      cssVar: "--cu-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#f9c25e",
      cssVar: "--cu-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#f8b740",
      cssVar: "--cu-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#f7ac23",
      cssVar: "--cu-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#f0a824",
      cssVar: "--cu-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#df9d24",
      cssVar: "--cu-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#c58c22",
      cssVar: "--cu-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a2731e",
      cssVar: "--cu-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#d1f1d6",
      cssVar: "--cu-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#a2e3b6",
      cssVar: "--cu-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#74d59f",
      cssVar: "--cu-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#45c791",
      cssVar: "--cu-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#38a97e",
      cssVar: "--cu-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#2c8a69",
      cssVar: "--cu-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#164a3c",
      cssVar: "--cu-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#0c2a22",
      cssVar: "--cu-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#abcaff",
      cssVar: "--cu-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#8cb6ff",
      cssVar: "--cu-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#6da2ff",
      cssVar: "--cu-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#4d8eff",
      cssVar: "--cu-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#2e7aff",
      cssVar: "--cu-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#2768d9",
      cssVar: "--cu-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#19438c",
      cssVar: "--cu-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#123166",
      cssVar: "--cu-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#cec2ee",
      cssVar: "--cu-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#baa9e8",
      cssVar: "--cu-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#a690e1",
      cssVar: "--cu-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#9277da",
      cssVar: "--cu-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#7f64c4",
      cssVar: "--cu-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#6c53ad",
      cssVar: "--cu-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#594395",
      cssVar: "--cu-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#47347c",
      cssVar: "--cu-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#362661",
      cssVar: "--cu-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#f5c7e4",
      cssVar: "--cu-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#f49ed1",
      cssVar: "--cu-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#eb89c5",
      cssVar: "--cu-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#e774bb",
      cssVar: "--cu-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#e171b7",
      cssVar: "--cu-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#df6db3",
      cssVar: "--cu-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#c25c9b",
      cssVar: "--cu-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#904272",
      cssVar: "--cu-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#482039",
      cssVar: "--cu-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.primary",
      type: "color",
      value: "#1f1f21",
      cssVar: "--cu-color-primary",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.secondary",
      type: "color",
      value: "#555659",
      cssVar: "--cu-color-secondary",
      description: "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.tertiary",
      type: "color",
      value: "#cacacb",
      cssVar: "--cu-color-tertiary",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--cu-color-border",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-danger",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-warning",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-info",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle",
      type: "color",
      value: "#6da2ff",
      cssVar: "--cu-color-info-subtle",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery",
      type: "color",
      value: "#594395",
      cssVar: "--cu-color-discovery",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle",
      type: "color",
      value: "#a690e1",
      cssVar: "--cu-color-discovery-subtle",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-success",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-sunken",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-canvas",
      type: "color",
      value: "#eaeaea",
      cssVar: "--cu-color-surface-canvas",
      description: "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-elevated",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-floating",
      type: "color",
      value: "#fafafa",
      cssVar: "--cu-color-surface-floating",
      description: "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-highest",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-highest",
      description: "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.backdrop",
      type: "color",
      value: "#1a1c1f66",
      cssVar: "--cu-color-backdrop",
      description: "Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Smallest resting shadow (`shadow.2xs`): a single 1px edge under the element. Use it to give flat controls, such as inputs and segmented buttons, a hint of depth.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Small resting shadow (`shadow.xs`). Use it for cards, tiles and buttons sitting directly on the canvas.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Medium resting shadow (`shadow.sm`). Use it for raised cards and panels that need more separation from the canvas than `resting.small`.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Small floating shadow (`shadow.md`). Use it for compact floating content, such as tooltips and dropdown menus.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Medium floating shadow (`shadow.lg`). Use it for popovers, menus and other anchored panels.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Large floating shadow (`shadow.xl`). Use it for dialogs, drawers and sheets that sit above the whole page.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Largest floating shadow (`shadow.2xl`). Use it for the highest-elevation content, such as full-screen modals or command palettes.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Inset shadow (`inset-shadow.xs`) for recessed elements. Use it for wells and pressed states that should read as sunken into their surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#555659",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#eaeaea",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral (gray) data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `neutral.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data color. Use it for the primary mark of a red series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#dd6c89",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `red.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#9f4000",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data color. Use it for the primary mark of a orange series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#f19f71",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `orange.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data color. Use it for the primary mark of a yellow series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#f8b740",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `yellow.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data color. Use it for the primary mark of a green series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#74d59f",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `green.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data color. Use it for the primary mark of a blue series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#6da2ff",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `blue.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#594395",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data color. Use it for the primary mark of a purple series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#a690e1",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `purple.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#904272",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data color. Use it for the primary mark of a pink series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#eb89c5",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `pink.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base",
      type: "color",
      value: "#1f1f21",
      cssVar: "--cu-color-base",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle",
      type: "color",
      value: "#cacacb",
      cssVar: "--cu-color-base-subtle",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-base-accent",
      description: "Generated text and icon color on base backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-accent",
      type: "color",
      value: "#1f1f21",
      cssVar: "--cu-color-base-accent",
      description: "Alias of base for the base theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-subtle",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-on-base-subtle",
      description: "Generated text and icon color on base-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-danger-accent",
      description: "Generated text and icon color on danger backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-accent",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-danger-accent",
      description: "Alias of danger for the danger theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle",
      type: "color",
      value: "#ee7a8e",
      cssVar: "--cu-color-danger-subtle",
      description: "Generated low-emphasis danger background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-subtle",
      type: "color",
      value: "#200006",
      cssVar: "--cu-color-on-danger-subtle",
      description: "Generated text and icon color on danger-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-warning-accent",
      description: "Generated text and icon color on warning backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-accent",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-warning-accent",
      description: "Alias of warning for the warning theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle",
      type: "color",
      value: "#c7a168",
      cssVar: "--cu-color-warning-subtle",
      description: "Generated low-emphasis warning background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-subtle",
      type: "color",
      value: "#241500",
      cssVar: "--cu-color-on-warning-subtle",
      description: "Generated text and icon color on warning-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-info-accent",
      description: "Generated text and icon color on info backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-accent",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-info-accent",
      description: "Alias of info for the info theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-subtle",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-info-subtle",
      description: "Generated text and icon color on info-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-discovery-accent",
      description: "Generated text and icon color on discovery backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-accent",
      type: "color",
      value: "#594395",
      cssVar: "--cu-color-discovery-accent",
      description: "Alias of discovery for the discovery theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-subtle",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-discovery-subtle",
      description: "Generated text and icon color on discovery-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-accent",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-success-accent",
      description: "Generated text and icon color on success backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-accent",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-success-accent",
      description: "Alias of success for the success theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle",
      type: "color",
      value: "#74ba9f",
      cssVar: "--cu-color-success-subtle",
      description: "Generated low-emphasis success background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-subtle",
      type: "color",
      value: "#002217",
      cssVar: "--cu-color-on-success-subtle",
      description: "Generated text and icon color on success-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-active",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-border-active",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--cu-color-border-inactive",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-disabled",
      type: "color",
      value: "#69696b",
      cssVar: "--cu-color-border-disabled",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-active",
      type: "color",
      value: "#38383a",
      cssVar: "--cu-color-base-active",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% lighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--cu-color-base-inactive",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-disabled",
      type: "color",
      value: "#363639",
      cssVar: "--cu-color-base-disabled",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-active",
      type: "color",
      value: "#a9a9aa",
      cssVar: "--cu-color-base-subtle-active",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 12% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--cu-color-base-subtle-inactive",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-disabled",
      type: "color",
      value: "#727275",
      cssVar: "--cu-color-base-subtle-disabled",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-active",
      type: "color",
      value: "#6a0022",
      cssVar: "--cu-color-danger-active",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-inactive",
      type: "color",
      value: "#ab3e56",
      cssVar: "--cu-color-danger-inactive",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-disabled",
      type: "color",
      value: "#5a3c44",
      cssVar: "--cu-color-danger-disabled",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-active",
      type: "color",
      value: "#b0435a",
      cssVar: "--cu-color-danger-subtle-active",
      description: "Generated low-emphasis danger background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-inactive",
      type: "color",
      value: "#ffa7ba",
      cssVar: "--cu-color-danger-subtle-inactive",
      description: "Generated low-emphasis danger background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-disabled",
      type: "color",
      value: "#7b5960",
      cssVar: "--cu-color-danger-subtle-disabled",
      description: "Generated low-emphasis danger background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-active",
      type: "color",
      value: "#543400",
      cssVar: "--cu-color-warning-active",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-inactive",
      type: "color",
      value: "#926f36",
      cssVar: "--cu-color-warning-inactive",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-disabled",
      type: "color",
      value: "#53493b",
      cssVar: "--cu-color-warning-disabled",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-active",
      type: "color",
      value: "#8e6a31",
      cssVar: "--cu-color-warning-subtle-active",
      description: "Generated low-emphasis warning background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-inactive",
      type: "color",
      value: "#f7d095",
      cssVar: "--cu-color-warning-subtle-inactive",
      description: "Generated low-emphasis warning background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-disabled",
      type: "color",
      value: "#6f6456",
      cssVar: "--cu-color-warning-subtle-disabled",
      description: "Generated low-emphasis warning background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-active",
      type: "color",
      value: "#00318d",
      cssVar: "--cu-color-info-active",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-inactive",
      type: "color",
      value: "#3b72d3",
      cssVar: "--cu-color-info-inactive",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-disabled",
      type: "color",
      value: "#3b4a68",
      cssVar: "--cu-color-info-disabled",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-active",
      type: "color",
      value: "#396ac2",
      cssVar: "--cu-color-info-subtle-active",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-inactive",
      type: "color",
      value: "#99d1ff",
      cssVar: "--cu-color-info-subtle-inactive",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-disabled",
      type: "color",
      value: "#556582",
      cssVar: "--cu-color-info-subtle-disabled",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-active",
      type: "color",
      value: "#3c2372",
      cssVar: "--cu-color-discovery-active",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-inactive",
      type: "color",
      value: "#725db2",
      cssVar: "--cu-color-discovery-inactive",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-disabled",
      type: "color",
      value: "#4a445f",
      cssVar: "--cu-color-discovery-disabled",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-active",
      type: "color",
      value: "#725ba7",
      cssVar: "--cu-color-discovery-subtle-active",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-inactive",
      type: "color",
      value: "#d2bcff",
      cssVar: "--cu-color-discovery-subtle-inactive",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-disabled",
      type: "color",
      value: "#655f79",
      cssVar: "--cu-color-discovery-subtle-disabled",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-active",
      type: "color",
      value: "#004933",
      cssVar: "--cu-color-success-active",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-inactive",
      type: "color",
      value: "#40876e",
      cssVar: "--cu-color-success-inactive",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-disabled",
      type: "color",
      value: "#3c504b",
      cssVar: "--cu-color-success-disabled",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-active",
      type: "color",
      value: "#3b8168",
      cssVar: "--cu-color-success-subtle-active",
      description: "Generated low-emphasis success background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-inactive",
      type: "color",
      value: "#a3eacd",
      cssVar: "--cu-color-success-subtle-inactive",
      description: "Generated low-emphasis success background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-disabled",
      type: "color",
      value: "#586c66",
      cssVar: "--cu-color-success-subtle-disabled",
      description: "Generated low-emphasis success background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "size.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-size-zero",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--cu-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--cu-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--cu-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--cu-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--cu-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--cu-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--cu-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--cu-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--cu-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--cu-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--cu-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--cu-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--cu-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-19xl",
      description: "A 122px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-20xl",
      description: "A 132px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-21xl",
      description: "A 142px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-22xl",
      description: "A 152px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-23xl",
      description: "A 162px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-24xl",
      description: "A 172px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-25xl",
      description: "A 182px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-26xl",
      description: "A 192px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-27xl",
      description: "A 202px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-28xl",
      description: "A 212px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-29xl",
      description: "A 222px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-30xl",
      description: "A 232px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-31xl",
      description: "A 242px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-32xl",
      description: "A 252px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-33xl",
      description: "A 262px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-34xl",
      description: "A 272px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-35xl",
      description: "A 282px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "292px",
      cssVar: "--cu-size-36xl",
      description: "A 292px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "302px",
      cssVar: "--cu-size-37xl",
      description: "A 302px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.38xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-size-38xl",
      description: "A 312px 38xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.39xl",
      type: "dimension",
      value: "322px",
      cssVar: "--cu-size-39xl",
      description: "A 322px 39xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.40xl",
      type: "dimension",
      value: "332px",
      cssVar: "--cu-size-40xl",
      description: "A 332px 40xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.41xl",
      type: "dimension",
      value: "342px",
      cssVar: "--cu-size-41xl",
      description: "A 342px 41xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.42xl",
      type: "dimension",
      value: "352px",
      cssVar: "--cu-size-42xl",
      description: "A 352px 42xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.43xl",
      type: "dimension",
      value: "362px",
      cssVar: "--cu-size-43xl",
      description: "A 362px 43xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.44xl",
      type: "dimension",
      value: "372px",
      cssVar: "--cu-size-44xl",
      description: "A 372px 44xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.45xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-size-45xl",
      description: "A 382px 45xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.46xl",
      type: "dimension",
      value: "392px",
      cssVar: "--cu-size-46xl",
      description: "A 392px 46xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.47xl",
      type: "dimension",
      value: "402px",
      cssVar: "--cu-size-47xl",
      description: "A 402px 47xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.48xl",
      type: "dimension",
      value: "412px",
      cssVar: "--cu-size-48xl",
      description: "A 412px 48xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.49xl",
      type: "dimension",
      value: "422px",
      cssVar: "--cu-size-49xl",
      description: "A 422px 49xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.50xl",
      type: "dimension",
      value: "432px",
      cssVar: "--cu-size-50xl",
      description: "A 432px 50xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.51xl",
      type: "dimension",
      value: "442px",
      cssVar: "--cu-size-51xl",
      description: "A 442px 51xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.52xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-size-52xl",
      description: "A 452px 52xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.53xl",
      type: "dimension",
      value: "462px",
      cssVar: "--cu-size-53xl",
      description: "A 462px 53xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.54xl",
      type: "dimension",
      value: "472px",
      cssVar: "--cu-size-54xl",
      description: "A 472px 54xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.55xl",
      type: "dimension",
      value: "482px",
      cssVar: "--cu-size-55xl",
      description: "A 482px 55xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.56xl",
      type: "dimension",
      value: "492px",
      cssVar: "--cu-size-56xl",
      description: "A 492px 56xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.57xl",
      type: "dimension",
      value: "502px",
      cssVar: "--cu-size-57xl",
      description: "A 502px 57xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.58xl",
      type: "dimension",
      value: "512px",
      cssVar: "--cu-size-58xl",
      description: "A 512px 58xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.59xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-size-59xl",
      description: "A 522px 59xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.60xl",
      type: "dimension",
      value: "532px",
      cssVar: "--cu-size-60xl",
      description: "A 532px 60xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.61xl",
      type: "dimension",
      value: "542px",
      cssVar: "--cu-size-61xl",
      description: "A 542px 61xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.62xl",
      type: "dimension",
      value: "552px",
      cssVar: "--cu-size-62xl",
      description: "A 552px 62xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.63xl",
      type: "dimension",
      value: "562px",
      cssVar: "--cu-size-63xl",
      description: "A 562px 63xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.64xl",
      type: "dimension",
      value: "572px",
      cssVar: "--cu-size-64xl",
      description: "A 572px 64xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--cu-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--cu-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--cu-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--cu-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--cu-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--cu-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--cu-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--cu-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--cu-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--cu-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-spacing-zero",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--cu-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--cu-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--cu-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--cu-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--cu-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--cu-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--cu-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--cu-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--cu-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--cu-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--cu-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--cu-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--cu-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--cu-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--cu-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-19xl",
      description: "A 158px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-20xl",
      description: "A 172px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-21xl",
      description: "A 186px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "200px",
      cssVar: "--cu-spacing-22xl",
      description: "A 200px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.23xl",
      type: "dimension",
      value: "214px",
      cssVar: "--cu-spacing-23xl",
      description: "A 214px 23xl spacing step (from size.23xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.24xl",
      type: "dimension",
      value: "228px",
      cssVar: "--cu-spacing-24xl",
      description: "A 228px 24xl spacing step (from size.24xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.25xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-spacing-25xl",
      description: "A 242px 25xl spacing step (from size.25xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.26xl",
      type: "dimension",
      value: "256px",
      cssVar: "--cu-spacing-26xl",
      description: "A 256px 26xl spacing step (from size.26xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.27xl",
      type: "dimension",
      value: "270px",
      cssVar: "--cu-spacing-27xl",
      description: "A 270px 27xl spacing step (from size.27xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.28xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-spacing-28xl",
      description: "A 284px 28xl spacing step (from size.28xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.29xl",
      type: "dimension",
      value: "298px",
      cssVar: "--cu-spacing-29xl",
      description: "A 298px 29xl spacing step (from size.29xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.30xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-spacing-30xl",
      description: "A 312px 30xl spacing step (from size.30xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.31xl",
      type: "dimension",
      value: "326px",
      cssVar: "--cu-spacing-31xl",
      description: "A 326px 31xl spacing step (from size.31xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.32xl",
      type: "dimension",
      value: "340px",
      cssVar: "--cu-spacing-32xl",
      description: "A 340px 32xl spacing step (from size.32xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.33xl",
      type: "dimension",
      value: "354px",
      cssVar: "--cu-spacing-33xl",
      description: "A 354px 33xl spacing step (from size.33xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.34xl",
      type: "dimension",
      value: "368px",
      cssVar: "--cu-spacing-34xl",
      description: "A 368px 34xl spacing step (from size.34xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.35xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-spacing-35xl",
      description: "A 382px 35xl spacing step (from size.35xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.36xl",
      type: "dimension",
      value: "396px",
      cssVar: "--cu-spacing-36xl",
      description: "A 396px 36xl spacing step (from size.36xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.37xl",
      type: "dimension",
      value: "410px",
      cssVar: "--cu-spacing-37xl",
      description: "A 410px 37xl spacing step (from size.37xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.38xl",
      type: "dimension",
      value: "424px",
      cssVar: "--cu-spacing-38xl",
      description: "A 424px 38xl spacing step (from size.38xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.39xl",
      type: "dimension",
      value: "438px",
      cssVar: "--cu-spacing-39xl",
      description: "A 438px 39xl spacing step (from size.39xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.40xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-spacing-40xl",
      description: "A 452px 40xl spacing step (from size.40xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.41xl",
      type: "dimension",
      value: "466px",
      cssVar: "--cu-spacing-41xl",
      description: "A 466px 41xl spacing step (from size.41xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.42xl",
      type: "dimension",
      value: "480px",
      cssVar: "--cu-spacing-42xl",
      description: "A 480px 42xl spacing step (from size.42xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.43xl",
      type: "dimension",
      value: "494px",
      cssVar: "--cu-spacing-43xl",
      description: "A 494px 43xl spacing step (from size.43xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.44xl",
      type: "dimension",
      value: "508px",
      cssVar: "--cu-spacing-44xl",
      description: "A 508px 44xl spacing step (from size.44xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.45xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-spacing-45xl",
      description: "A 522px 45xl spacing step (from size.45xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.46xl",
      type: "dimension",
      value: "536px",
      cssVar: "--cu-spacing-46xl",
      description: "A 536px 46xl spacing step (from size.46xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.47xl",
      type: "dimension",
      value: "550px",
      cssVar: "--cu-spacing-47xl",
      description: "A 550px 47xl spacing step (from size.47xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.48xl",
      type: "dimension",
      value: "564px",
      cssVar: "--cu-spacing-48xl",
      description: "A 564px 48xl spacing step (from size.48xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.49xl",
      type: "dimension",
      value: "578px",
      cssVar: "--cu-spacing-49xl",
      description: "A 578px 49xl spacing step (from size.49xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.50xl",
      type: "dimension",
      value: "592px",
      cssVar: "--cu-spacing-50xl",
      description: "A 592px 50xl spacing step (from size.50xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.51xl",
      type: "dimension",
      value: "606px",
      cssVar: "--cu-spacing-51xl",
      description: "A 606px 51xl spacing step (from size.51xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.52xl",
      type: "dimension",
      value: "620px",
      cssVar: "--cu-spacing-52xl",
      description: "A 620px 52xl spacing step (from size.52xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.53xl",
      type: "dimension",
      value: "634px",
      cssVar: "--cu-spacing-53xl",
      description: "A 634px 53xl spacing step (from size.53xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.54xl",
      type: "dimension",
      value: "648px",
      cssVar: "--cu-spacing-54xl",
      description: "A 648px 54xl spacing step (from size.54xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.55xl",
      type: "dimension",
      value: "662px",
      cssVar: "--cu-spacing-55xl",
      description: "A 662px 55xl spacing step (from size.55xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.56xl",
      type: "dimension",
      value: "676px",
      cssVar: "--cu-spacing-56xl",
      description: "A 676px 56xl spacing step (from size.56xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.57xl",
      type: "dimension",
      value: "690px",
      cssVar: "--cu-spacing-57xl",
      description: "A 690px 57xl spacing step (from size.57xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.58xl",
      type: "dimension",
      value: "704px",
      cssVar: "--cu-spacing-58xl",
      description: "A 704px 58xl spacing step (from size.58xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.59xl",
      type: "dimension",
      value: "718px",
      cssVar: "--cu-spacing-59xl",
      description: "A 718px 59xl spacing step (from size.59xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.60xl",
      type: "dimension",
      value: "732px",
      cssVar: "--cu-spacing-60xl",
      description: "A 732px 60xl spacing step (from size.60xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.61xl",
      type: "dimension",
      value: "746px",
      cssVar: "--cu-spacing-61xl",
      description: "A 746px 61xl spacing step (from size.61xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.62xl",
      type: "dimension",
      value: "760px",
      cssVar: "--cu-spacing-62xl",
      description: "A 760px 62xl spacing step (from size.62xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.63xl",
      type: "dimension",
      value: "774px",
      cssVar: "--cu-spacing-63xl",
      description: "A 774px 63xl spacing step (from size.63xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.64xl",
      type: "dimension",
      value: "788px",
      cssVar: "--cu-spacing-64xl",
      description: "A 788px 64xl spacing step (from size.64xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--cu-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--cu-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--cu-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--cu-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--cu-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--cu-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--cu-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--cu-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--cu-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--cu-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--cu-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--cu-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--cu-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--cu-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--cu-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--cu-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--cu-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--cu-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--cu-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--cu-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--cu-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--cu-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--cu-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--cu-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--cu-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--cu-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--cu-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--cu-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--cu-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--cu-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--cu-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.none",
      type: "number",
      value: "0.765",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.765)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.0575",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1.0575)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.125",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.125)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.2375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.2375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.665",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.665)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.285714",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (1.285714)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (1.4)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.26",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (1.26)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.08",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (1.08)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.zero",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-border-radius-zero",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--cu-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--cu-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--cu-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--cu-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--cu-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--cu-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-container",
      description: "Corner radius for large framed regions that group other content (8px, `border-radius.lg`). Used by Container, Accordion, Callout, CodeBlock, FileTree, FilePicker, Table, Stepper and InlineCodeText.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.trigger",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-trigger",
      description: "Corner radius for triggers interfaces (6px, `border-radius.sm`). Used by Tabs (indicators).",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-card",
      description: "Corner radius for cards and card-like tiles (6px, `border-radius.md`). Slightly tighter than `container` so cards nested inside a container still read as inset. Used by Card and FilePicker.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-button",
      description: "Corner radius for triggers and other pressable elements (8px, `border-radius.lg`). Used by Button, Badge, DatePicker triggers, SearchInput results, Select items, Tabs triggers and CodeBlock header controls. Circular and rounded Button variants override it.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "Corner radius for form controls that accept input (8px, `border-radius.lg`). Matches `button` so inputs and buttons line up when placed side by side. Used by Input, TextArea, Select, Field, RadioGroup and Rating.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--cu-border-radius-checkbox",
      description: "Corner radius for the checkbox box (6px, `border-radius.md`). Kept smaller than `control` so the small box still reads as a square rather than a pill. Used by Checkbox.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "Corner radius for modal dialogs (12px, `border-radius.xl`). Larger than other surfaces to set modal content apart from the page beneath it. Used by Dialog.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "Corner radius for sheets (0px, `border-radius.zero`). Sheets slide in flush against a viewport edge, so their corners stay square. Applied by Sheet to its exposed corners.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "Corner radius for drawers (32px, `border-radius.4xl`). The large rounding marks a panel that slides over the page from an edge. Used as the default `borderRadius` of Drawer.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-popover",
      description: "Corner radius for popovers and dropdown menus (6px, `border-radius.md`). Used by Popover and the Select dropdown list.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-tooltip",
      description: "Corner radius for tooltips (6px, `border-radius.md`). Used by Tooltip.",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--cu-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--cu-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--cu-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--cu-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--cu-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--cu-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--cu-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--cu-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--cu-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--cu-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--cu-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--cu-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--cu-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--cu-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--cu-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--cu-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--cu-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--cu-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--cu-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--cu-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--cu-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--cu-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--cu-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--cu-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--cu-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--cu-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--cu-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--cu-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--cu-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--cu-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "Largest display style: Storm Sans semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "Large display style: Storm Sans semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "Medium display style: Storm Sans bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-hero",
      description: "Largest editorial display style: Storm Serif semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-lg",
      description: "Large editorial display style: Storm Serif semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-md",
      description: "Medium editorial display style: Storm Serif bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-xl",
      description: "Large title style: Storm Sans semibold at 18px (`font-size.lg`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "Medium title style: Storm Sans bold at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-md",
      description: "Medium title style: Storm Sans medium at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "Small title style: Storm Sans bold at 12px (`font-size.sm`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-xs",
      description: "Extra small title style: Storm Sans medium at 10px (`font-size.xxs`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-md",
      description: "Default body text style: Storm Sans regular at 18px (`font-size.md`) with normal line height. Use it for paragraphs, descriptions and most running copy. BodyText uses it by default, as do the components built on BodyText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-sm",
      description: "Smaller body text style: Storm Sans medium at 16px (`font-size.sm`) with normal line height. Use it for secondary copy in dense layouts, such as table rows, sidebars and card metadata, where `body-md` would feel too large.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "Caption style: Storm Sans regular italic at 16px (`font-size.sm`) with tight line height. Use it for helper text, annotations and small supporting labels. Used by Field helper and validation text, ValidationText, EyebrowText, Slider value labels and the CodeBlock header file name.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "Eyebrow style: Google Sans Code semibold at 18px (`font-size.md`) with tight line height. Use it for the short kicker or category label that sits directly above a heading. Used by EyebrowText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "Monospace code style: Google Sans Code regular at 20px (`font-size.lg`) with snug line height. Use it for source code, file paths, identifiers and other literal values. Used by CodeBlock, InlineCodeText, FileTree, Stepper and code content inside Accordion.",
      theme: undefined,
      typography: true
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #1f1f2133",
      cssVar: "--cu-ring-base",
      description: "Generated base 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1f1f2133",
      cssVar: "--cu-ring-base-subtle",
      description: "Generated base 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1f1f2133",
      cssVar: "--cu-ring-base-offset",
      description: "Generated base 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1f1f2133",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "Generated base 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-danger",
      description: "Generated danger 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-danger-subtle",
      description: "Generated danger 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-danger-offset",
      description: "Generated danger 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "Generated danger 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541726",
      cssVar: "--cu-ring-warning",
      description: "Generated warning 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541726",
      cssVar: "--cu-ring-warning-subtle",
      description: "Generated warning 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541726",
      cssVar: "--cu-ring-warning-offset",
      description: "Generated warning 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541726",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "Generated warning 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b326",
      cssVar: "--cu-ring-info",
      description: "Generated info 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b326",
      cssVar: "--cu-ring-info-subtle",
      description: "Generated info 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b326",
      cssVar: "--cu-ring-info-offset",
      description: "Generated info 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b326",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "Generated info 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439526",
      cssVar: "--cu-ring-discovery",
      description: "Generated discovery 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439526",
      cssVar: "--cu-ring-discovery-subtle",
      description: "Generated discovery 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439526",
      cssVar: "--cu-ring-discovery-offset",
      description: "Generated discovery 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439526",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "Generated discovery 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-success",
      description: "Generated success 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-success-subtle",
      description: "Generated success 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-success-offset",
      description: "Generated success 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "Generated success 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    }
  ],
  "lightDimmed": [
    {
      path: "color.black",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#cacaca",
      cssVar: "--cu-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--cu-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--cu-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--cu-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#8f8f90",
      cssVar: "--cu-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--cu-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#626364",
      cssVar: "--cu-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#57575a",
      cssVar: "--cu-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#444548",
      cssVar: "--cu-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#3f4043",
      cssVar: "--cu-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--cu-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#c28393",
      cssVar: "--cu-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#bc7788",
      cssVar: "--cu-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#b76a7e",
      cssVar: "--cu-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#b15e73",
      cssVar: "--cu-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#ab5268",
      cssVar: "--cu-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#984a5e",
      cssVar: "--cu-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#733a49",
      cssVar: "--cu-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#61323e",
      cssVar: "--cu-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#d7ad96",
      cssVar: "--cu-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#d2a287",
      cssVar: "--cu-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#cc9678",
      cssVar: "--cu-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#c78a69",
      cssVar: "--cu-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#c17f5a",
      cssVar: "--cu-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#b4714b",
      cssVar: "--cu-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#a26238",
      cssVar: "--cu-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#92542a",
      cssVar: "--cu-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#814825",
      cssVar: "--cu-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#d5b67d",
      cssVar: "--cu-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#d0ad6d",
      cssVar: "--cu-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#caa45c",
      cssVar: "--cu-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#c59b4d",
      cssVar: "--cu-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#c0984d",
      cssVar: "--cu-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#b5904d",
      cssVar: "--cu-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#a58549",
      cssVar: "--cu-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#917542",
      cssVar: "--cu-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#b2d5b8",
      cssVar: "--cu-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#97c6a5",
      cssVar: "--cu-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7bb796",
      cssVar: "--cu-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#60a88a",
      cssVar: "--cu-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#55957d",
      cssVar: "--cu-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#49836f",
      cssVar: "--cu-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#325d52",
      cssVar: "--cu-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#284b41",
      cssVar: "--cu-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#96b2e1",
      cssVar: "--cu-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#85a5dc",
      cssVar: "--cu-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#7598d7",
      cssVar: "--cu-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#638cd2",
      cssVar: "--cu-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#527fcd",
      cssVar: "--cu-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#4f73b1",
      cssVar: "--cu-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#3b5685",
      cssVar: "--cu-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#31486f",
      cssVar: "--cu-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#b4a9d2",
      cssVar: "--cu-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#a79acb",
      cssVar: "--cu-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#9b8cc3",
      cssVar: "--cu-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#8e7dbb",
      cssVar: "--cu-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#8272aa",
      cssVar: "--cu-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#756799",
      cssVar: "--cu-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#675a8a",
      cssVar: "--cu-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#594d7a",
      cssVar: "--cu-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#4c416a",
      cssVar: "--cu-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#d9aac8",
      cssVar: "--cu-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#d492b9",
      cssVar: "--cu-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ca87b0",
      cssVar: "--cu-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#c57ba8",
      cssVar: "--cu-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#c079a5",
      cssVar: "--cu-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#be77a3",
      cssVar: "--cu-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#a86d91",
      cssVar: "--cu-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#875975",
      cssVar: "--cu-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#5a3b4f",
      cssVar: "--cu-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.primary",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--cu-color-primary",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.secondary",
      type: "color",
      value: "#626364",
      cssVar: "--cu-color-secondary",
      description: "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.tertiary",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--cu-color-tertiary",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--cu-color-border",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-danger",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-warning",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-info",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle",
      type: "color",
      value: "#7598d7",
      cssVar: "--cu-color-info-subtle",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery",
      type: "color",
      value: "#675a8a",
      cssVar: "--cu-color-discovery",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle",
      type: "color",
      value: "#9b8cc3",
      cssVar: "--cu-color-discovery-subtle",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-success",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-sunken",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-canvas",
      type: "color",
      value: "#cacaca",
      cssVar: "--cu-color-surface-canvas",
      description: "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-elevated",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-floating",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-surface-floating",
      description: "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-highest",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-surface-highest",
      description: "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.backdrop",
      type: "color",
      value: "#373a3d66",
      cssVar: "--cu-color-backdrop",
      description: "Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Smallest resting shadow (`shadow.2xs`): a single 1px edge under the element. Use it to give flat controls, such as inputs and segmented buttons, a hint of depth.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Small resting shadow (`shadow.xs`). Use it for cards, tiles and buttons sitting directly on the canvas.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Medium resting shadow (`shadow.sm`). Use it for raised cards and panels that need more separation from the canvas than `resting.small`.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Small floating shadow (`shadow.md`). Use it for compact floating content, such as tooltips and dropdown menus.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Medium floating shadow (`shadow.lg`). Use it for popovers, menus and other anchored panels.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Large floating shadow (`shadow.xl`). Use it for dialogs, drawers and sheets that sit above the whole page.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Largest floating shadow (`shadow.2xl`). Use it for the highest-elevation content, such as full-screen modals or command palettes.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Inset shadow (`inset-shadow.xs`) for recessed elements. Use it for wells and pressed states that should read as sunken into their surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#626364",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#cacaca",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral (gray) data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `neutral.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data color. Use it for the primary mark of a red series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#bc7788",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `red.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#92542a",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data color. Use it for the primary mark of a orange series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#cc9678",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `orange.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data color. Use it for the primary mark of a yellow series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#caa45c",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `yellow.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data color. Use it for the primary mark of a green series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#7bb796",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `green.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data color. Use it for the primary mark of a blue series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#7598d7",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `blue.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#675a8a",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data color. Use it for the primary mark of a purple series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#9b8cc3",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `purple.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#875975",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data color. Use it for the primary mark of a pink series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#ca87b0",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `pink.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--cu-color-base",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--cu-color-base-subtle",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-base-accent",
      description: "Generated text and icon color on base backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-accent",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--cu-color-base-accent",
      description: "Alias of base for the base theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-subtle",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-on-base-subtle",
      description: "Generated text and icon color on base-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-danger-accent",
      description: "Generated text and icon color on danger backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-accent",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-danger-accent",
      description: "Alias of danger for the danger theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle",
      type: "color",
      value: "#cb7e8b",
      cssVar: "--cu-color-danger-subtle",
      description: "Generated low-emphasis danger background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-subtle",
      type: "color",
      value: "#4d1620",
      cssVar: "--cu-color-on-danger-subtle",
      description: "Generated text and icon color on danger-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-warning-accent",
      description: "Generated text and icon color on warning backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-accent",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-warning-accent",
      description: "Alias of warning for the warning theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle",
      type: "color",
      value: "#ac9674",
      cssVar: "--cu-color-warning-subtle",
      description: "Generated low-emphasis warning background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-subtle",
      type: "color",
      value: "#4f3817",
      cssVar: "--cu-color-on-warning-subtle",
      description: "Generated text and icon color on warning-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-info-accent",
      description: "Generated text and icon color on info backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-accent",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-info-accent",
      description: "Alias of info for the info theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-subtle",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-info-subtle",
      description: "Generated text and icon color on info-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-discovery-accent",
      description: "Generated text and icon color on discovery backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-accent",
      type: "color",
      value: "#675a8a",
      cssVar: "--cu-color-discovery-accent",
      description: "Alias of discovery for the discovery theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-subtle",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-discovery-subtle",
      description: "Generated text and icon color on discovery-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-accent",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-success-accent",
      description: "Generated text and icon color on success backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-accent",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-success-accent",
      description: "Alias of success for the success theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle",
      type: "color",
      value: "#7ba595",
      cssVar: "--cu-color-success-subtle",
      description: "Generated low-emphasis success background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-subtle",
      type: "color",
      value: "#174e3c",
      cssVar: "--cu-color-on-success-subtle",
      description: "Generated text and icon color on success-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-active",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-border-active",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--cu-color-border-inactive",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-disabled",
      type: "color",
      value: "#707071",
      cssVar: "--cu-color-border-disabled",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-active",
      type: "color",
      value: "#4d4d4f",
      cssVar: "--cu-color-base-active",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% lighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--cu-color-base-inactive",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-disabled",
      type: "color",
      value: "#4c4c4e",
      cssVar: "--cu-color-base-disabled",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-active",
      type: "color",
      value: "#9d9d9d",
      cssVar: "--cu-color-base-subtle-active",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 12% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--cu-color-base-subtle-inactive",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-disabled",
      type: "color",
      value: "#767678",
      cssVar: "--cu-color-base-subtle-disabled",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-active",
      type: "color",
      value: "#75223c",
      cssVar: "--cu-color-danger-active",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-inactive",
      type: "color",
      value: "#975967",
      cssVar: "--cu-color-danger-inactive",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-disabled",
      type: "color",
      value: "#655156",
      cssVar: "--cu-color-danger-disabled",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-active",
      type: "color",
      value: "#9a5d6a",
      cssVar: "--cu-color-danger-subtle-active",
      description: "Generated low-emphasis danger background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-inactive",
      type: "color",
      value: "#e094a4",
      cssVar: "--cu-color-danger-subtle-inactive",
      description: "Generated low-emphasis danger background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-disabled",
      type: "color",
      value: "#7a676b",
      cssVar: "--cu-color-danger-subtle-disabled",
      description: "Generated low-emphasis danger background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-active",
      type: "color",
      value: "#694d1e",
      cssVar: "--cu-color-warning-active",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-inactive",
      type: "color",
      value: "#887351",
      cssVar: "--cu-color-warning-inactive",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-disabled",
      type: "color",
      value: "#605950",
      cssVar: "--cu-color-warning-disabled",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-active",
      type: "color",
      value: "#856f4d",
      cssVar: "--cu-color-warning-subtle-active",
      description: "Generated low-emphasis warning background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-inactive",
      type: "color",
      value: "#d6b88c",
      cssVar: "--cu-color-warning-subtle-inactive",
      description: "Generated low-emphasis warning background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-disabled",
      type: "color",
      value: "#736c64",
      cssVar: "--cu-color-warning-subtle-disabled",
      description: "Generated low-emphasis warning background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-active",
      type: "color",
      value: "#274988",
      cssVar: "--cu-color-info-active",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-inactive",
      type: "color",
      value: "#5a79af",
      cssVar: "--cu-color-info-inactive",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-disabled",
      type: "color",
      value: "#515a6e",
      cssVar: "--cu-color-info-disabled",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-active",
      type: "color",
      value: "#5873a4",
      cssVar: "--cu-color-info-subtle-active",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-inactive",
      type: "color",
      value: "#8cb9de",
      cssVar: "--cu-color-info-subtle-inactive",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-disabled",
      type: "color",
      value: "#646e7f",
      cssVar: "--cu-color-info-subtle-disabled",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-active",
      type: "color",
      value: "#514075",
      cssVar: "--cu-color-discovery-active",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-inactive",
      type: "color",
      value: "#796d9d",
      cssVar: "--cu-color-discovery-inactive",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-disabled",
      type: "color",
      value: "#5a5768",
      cssVar: "--cu-color-discovery-disabled",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-active",
      type: "color",
      value: "#786c96",
      cssVar: "--cu-color-discovery-subtle-active",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-inactive",
      type: "color",
      value: "#b69fe3",
      cssVar: "--cu-color-discovery-subtle-inactive",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-disabled",
      type: "color",
      value: "#6e6a79",
      cssVar: "--cu-color-discovery-subtle-disabled",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-active",
      type: "color",
      value: "#1d634e",
      cssVar: "--cu-color-success-active",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-inactive",
      type: "color",
      value: "#578172",
      cssVar: "--cu-color-success-inactive",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-disabled",
      type: "color",
      value: "#505e5b",
      cssVar: "--cu-color-success-disabled",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-active",
      type: "color",
      value: "#537d6e",
      cssVar: "--cu-color-success-subtle-active",
      description: "Generated low-emphasis success background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-inactive",
      type: "color",
      value: "#96ccb6",
      cssVar: "--cu-color-success-subtle-inactive",
      description: "Generated low-emphasis success background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-disabled",
      type: "color",
      value: "#65716d",
      cssVar: "--cu-color-success-subtle-disabled",
      description: "Generated low-emphasis success background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "size.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-size-zero",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--cu-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--cu-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--cu-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--cu-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--cu-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--cu-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--cu-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--cu-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--cu-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--cu-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--cu-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--cu-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--cu-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-19xl",
      description: "A 122px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-20xl",
      description: "A 132px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-21xl",
      description: "A 142px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-22xl",
      description: "A 152px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-23xl",
      description: "A 162px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-24xl",
      description: "A 172px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-25xl",
      description: "A 182px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-26xl",
      description: "A 192px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-27xl",
      description: "A 202px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-28xl",
      description: "A 212px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-29xl",
      description: "A 222px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-30xl",
      description: "A 232px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-31xl",
      description: "A 242px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-32xl",
      description: "A 252px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-33xl",
      description: "A 262px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-34xl",
      description: "A 272px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-35xl",
      description: "A 282px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "292px",
      cssVar: "--cu-size-36xl",
      description: "A 292px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "302px",
      cssVar: "--cu-size-37xl",
      description: "A 302px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.38xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-size-38xl",
      description: "A 312px 38xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.39xl",
      type: "dimension",
      value: "322px",
      cssVar: "--cu-size-39xl",
      description: "A 322px 39xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.40xl",
      type: "dimension",
      value: "332px",
      cssVar: "--cu-size-40xl",
      description: "A 332px 40xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.41xl",
      type: "dimension",
      value: "342px",
      cssVar: "--cu-size-41xl",
      description: "A 342px 41xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.42xl",
      type: "dimension",
      value: "352px",
      cssVar: "--cu-size-42xl",
      description: "A 352px 42xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.43xl",
      type: "dimension",
      value: "362px",
      cssVar: "--cu-size-43xl",
      description: "A 362px 43xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.44xl",
      type: "dimension",
      value: "372px",
      cssVar: "--cu-size-44xl",
      description: "A 372px 44xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.45xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-size-45xl",
      description: "A 382px 45xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.46xl",
      type: "dimension",
      value: "392px",
      cssVar: "--cu-size-46xl",
      description: "A 392px 46xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.47xl",
      type: "dimension",
      value: "402px",
      cssVar: "--cu-size-47xl",
      description: "A 402px 47xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.48xl",
      type: "dimension",
      value: "412px",
      cssVar: "--cu-size-48xl",
      description: "A 412px 48xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.49xl",
      type: "dimension",
      value: "422px",
      cssVar: "--cu-size-49xl",
      description: "A 422px 49xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.50xl",
      type: "dimension",
      value: "432px",
      cssVar: "--cu-size-50xl",
      description: "A 432px 50xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.51xl",
      type: "dimension",
      value: "442px",
      cssVar: "--cu-size-51xl",
      description: "A 442px 51xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.52xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-size-52xl",
      description: "A 452px 52xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.53xl",
      type: "dimension",
      value: "462px",
      cssVar: "--cu-size-53xl",
      description: "A 462px 53xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.54xl",
      type: "dimension",
      value: "472px",
      cssVar: "--cu-size-54xl",
      description: "A 472px 54xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.55xl",
      type: "dimension",
      value: "482px",
      cssVar: "--cu-size-55xl",
      description: "A 482px 55xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.56xl",
      type: "dimension",
      value: "492px",
      cssVar: "--cu-size-56xl",
      description: "A 492px 56xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.57xl",
      type: "dimension",
      value: "502px",
      cssVar: "--cu-size-57xl",
      description: "A 502px 57xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.58xl",
      type: "dimension",
      value: "512px",
      cssVar: "--cu-size-58xl",
      description: "A 512px 58xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.59xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-size-59xl",
      description: "A 522px 59xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.60xl",
      type: "dimension",
      value: "532px",
      cssVar: "--cu-size-60xl",
      description: "A 532px 60xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.61xl",
      type: "dimension",
      value: "542px",
      cssVar: "--cu-size-61xl",
      description: "A 542px 61xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.62xl",
      type: "dimension",
      value: "552px",
      cssVar: "--cu-size-62xl",
      description: "A 552px 62xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.63xl",
      type: "dimension",
      value: "562px",
      cssVar: "--cu-size-63xl",
      description: "A 562px 63xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.64xl",
      type: "dimension",
      value: "572px",
      cssVar: "--cu-size-64xl",
      description: "A 572px 64xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--cu-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--cu-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--cu-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--cu-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--cu-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--cu-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--cu-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--cu-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--cu-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--cu-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-spacing-zero",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--cu-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--cu-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--cu-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--cu-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--cu-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--cu-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--cu-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--cu-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--cu-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--cu-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--cu-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--cu-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--cu-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--cu-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--cu-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-19xl",
      description: "A 158px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-20xl",
      description: "A 172px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-21xl",
      description: "A 186px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "200px",
      cssVar: "--cu-spacing-22xl",
      description: "A 200px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.23xl",
      type: "dimension",
      value: "214px",
      cssVar: "--cu-spacing-23xl",
      description: "A 214px 23xl spacing step (from size.23xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.24xl",
      type: "dimension",
      value: "228px",
      cssVar: "--cu-spacing-24xl",
      description: "A 228px 24xl spacing step (from size.24xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.25xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-spacing-25xl",
      description: "A 242px 25xl spacing step (from size.25xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.26xl",
      type: "dimension",
      value: "256px",
      cssVar: "--cu-spacing-26xl",
      description: "A 256px 26xl spacing step (from size.26xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.27xl",
      type: "dimension",
      value: "270px",
      cssVar: "--cu-spacing-27xl",
      description: "A 270px 27xl spacing step (from size.27xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.28xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-spacing-28xl",
      description: "A 284px 28xl spacing step (from size.28xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.29xl",
      type: "dimension",
      value: "298px",
      cssVar: "--cu-spacing-29xl",
      description: "A 298px 29xl spacing step (from size.29xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.30xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-spacing-30xl",
      description: "A 312px 30xl spacing step (from size.30xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.31xl",
      type: "dimension",
      value: "326px",
      cssVar: "--cu-spacing-31xl",
      description: "A 326px 31xl spacing step (from size.31xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.32xl",
      type: "dimension",
      value: "340px",
      cssVar: "--cu-spacing-32xl",
      description: "A 340px 32xl spacing step (from size.32xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.33xl",
      type: "dimension",
      value: "354px",
      cssVar: "--cu-spacing-33xl",
      description: "A 354px 33xl spacing step (from size.33xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.34xl",
      type: "dimension",
      value: "368px",
      cssVar: "--cu-spacing-34xl",
      description: "A 368px 34xl spacing step (from size.34xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.35xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-spacing-35xl",
      description: "A 382px 35xl spacing step (from size.35xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.36xl",
      type: "dimension",
      value: "396px",
      cssVar: "--cu-spacing-36xl",
      description: "A 396px 36xl spacing step (from size.36xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.37xl",
      type: "dimension",
      value: "410px",
      cssVar: "--cu-spacing-37xl",
      description: "A 410px 37xl spacing step (from size.37xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.38xl",
      type: "dimension",
      value: "424px",
      cssVar: "--cu-spacing-38xl",
      description: "A 424px 38xl spacing step (from size.38xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.39xl",
      type: "dimension",
      value: "438px",
      cssVar: "--cu-spacing-39xl",
      description: "A 438px 39xl spacing step (from size.39xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.40xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-spacing-40xl",
      description: "A 452px 40xl spacing step (from size.40xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.41xl",
      type: "dimension",
      value: "466px",
      cssVar: "--cu-spacing-41xl",
      description: "A 466px 41xl spacing step (from size.41xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.42xl",
      type: "dimension",
      value: "480px",
      cssVar: "--cu-spacing-42xl",
      description: "A 480px 42xl spacing step (from size.42xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.43xl",
      type: "dimension",
      value: "494px",
      cssVar: "--cu-spacing-43xl",
      description: "A 494px 43xl spacing step (from size.43xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.44xl",
      type: "dimension",
      value: "508px",
      cssVar: "--cu-spacing-44xl",
      description: "A 508px 44xl spacing step (from size.44xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.45xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-spacing-45xl",
      description: "A 522px 45xl spacing step (from size.45xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.46xl",
      type: "dimension",
      value: "536px",
      cssVar: "--cu-spacing-46xl",
      description: "A 536px 46xl spacing step (from size.46xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.47xl",
      type: "dimension",
      value: "550px",
      cssVar: "--cu-spacing-47xl",
      description: "A 550px 47xl spacing step (from size.47xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.48xl",
      type: "dimension",
      value: "564px",
      cssVar: "--cu-spacing-48xl",
      description: "A 564px 48xl spacing step (from size.48xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.49xl",
      type: "dimension",
      value: "578px",
      cssVar: "--cu-spacing-49xl",
      description: "A 578px 49xl spacing step (from size.49xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.50xl",
      type: "dimension",
      value: "592px",
      cssVar: "--cu-spacing-50xl",
      description: "A 592px 50xl spacing step (from size.50xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.51xl",
      type: "dimension",
      value: "606px",
      cssVar: "--cu-spacing-51xl",
      description: "A 606px 51xl spacing step (from size.51xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.52xl",
      type: "dimension",
      value: "620px",
      cssVar: "--cu-spacing-52xl",
      description: "A 620px 52xl spacing step (from size.52xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.53xl",
      type: "dimension",
      value: "634px",
      cssVar: "--cu-spacing-53xl",
      description: "A 634px 53xl spacing step (from size.53xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.54xl",
      type: "dimension",
      value: "648px",
      cssVar: "--cu-spacing-54xl",
      description: "A 648px 54xl spacing step (from size.54xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.55xl",
      type: "dimension",
      value: "662px",
      cssVar: "--cu-spacing-55xl",
      description: "A 662px 55xl spacing step (from size.55xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.56xl",
      type: "dimension",
      value: "676px",
      cssVar: "--cu-spacing-56xl",
      description: "A 676px 56xl spacing step (from size.56xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.57xl",
      type: "dimension",
      value: "690px",
      cssVar: "--cu-spacing-57xl",
      description: "A 690px 57xl spacing step (from size.57xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.58xl",
      type: "dimension",
      value: "704px",
      cssVar: "--cu-spacing-58xl",
      description: "A 704px 58xl spacing step (from size.58xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.59xl",
      type: "dimension",
      value: "718px",
      cssVar: "--cu-spacing-59xl",
      description: "A 718px 59xl spacing step (from size.59xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.60xl",
      type: "dimension",
      value: "732px",
      cssVar: "--cu-spacing-60xl",
      description: "A 732px 60xl spacing step (from size.60xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.61xl",
      type: "dimension",
      value: "746px",
      cssVar: "--cu-spacing-61xl",
      description: "A 746px 61xl spacing step (from size.61xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.62xl",
      type: "dimension",
      value: "760px",
      cssVar: "--cu-spacing-62xl",
      description: "A 760px 62xl spacing step (from size.62xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.63xl",
      type: "dimension",
      value: "774px",
      cssVar: "--cu-spacing-63xl",
      description: "A 774px 63xl spacing step (from size.63xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.64xl",
      type: "dimension",
      value: "788px",
      cssVar: "--cu-spacing-64xl",
      description: "A 788px 64xl spacing step (from size.64xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--cu-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--cu-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--cu-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--cu-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--cu-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--cu-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--cu-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--cu-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--cu-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--cu-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--cu-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--cu-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--cu-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--cu-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--cu-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--cu-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--cu-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--cu-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--cu-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--cu-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--cu-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--cu-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--cu-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--cu-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--cu-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--cu-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--cu-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--cu-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--cu-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--cu-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--cu-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.none",
      type: "number",
      value: "0.765",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.765)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.0575",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1.0575)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.125",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.125)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.2375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.2375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.665",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.665)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.285714",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (1.285714)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (1.4)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.26",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (1.26)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.08",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (1.08)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.zero",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-border-radius-zero",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--cu-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--cu-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--cu-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--cu-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--cu-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--cu-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-container",
      description: "Corner radius for large framed regions that group other content (8px, `border-radius.lg`). Used by Container, Accordion, Callout, CodeBlock, FileTree, FilePicker, Table, Stepper and InlineCodeText.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.trigger",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-trigger",
      description: "Corner radius for triggers interfaces (6px, `border-radius.sm`). Used by Tabs (indicators).",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-card",
      description: "Corner radius for cards and card-like tiles (6px, `border-radius.md`). Slightly tighter than `container` so cards nested inside a container still read as inset. Used by Card and FilePicker.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-button",
      description: "Corner radius for triggers and other pressable elements (8px, `border-radius.lg`). Used by Button, Badge, DatePicker triggers, SearchInput results, Select items, Tabs triggers and CodeBlock header controls. Circular and rounded Button variants override it.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "Corner radius for form controls that accept input (8px, `border-radius.lg`). Matches `button` so inputs and buttons line up when placed side by side. Used by Input, TextArea, Select, Field, RadioGroup and Rating.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--cu-border-radius-checkbox",
      description: "Corner radius for the checkbox box (6px, `border-radius.md`). Kept smaller than `control` so the small box still reads as a square rather than a pill. Used by Checkbox.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "Corner radius for modal dialogs (12px, `border-radius.xl`). Larger than other surfaces to set modal content apart from the page beneath it. Used by Dialog.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "Corner radius for sheets (0px, `border-radius.zero`). Sheets slide in flush against a viewport edge, so their corners stay square. Applied by Sheet to its exposed corners.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "Corner radius for drawers (32px, `border-radius.4xl`). The large rounding marks a panel that slides over the page from an edge. Used as the default `borderRadius` of Drawer.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-popover",
      description: "Corner radius for popovers and dropdown menus (6px, `border-radius.md`). Used by Popover and the Select dropdown list.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-tooltip",
      description: "Corner radius for tooltips (6px, `border-radius.md`). Used by Tooltip.",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--cu-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--cu-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--cu-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--cu-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--cu-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--cu-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--cu-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--cu-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--cu-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--cu-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--cu-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--cu-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--cu-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--cu-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--cu-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--cu-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--cu-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--cu-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--cu-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--cu-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--cu-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--cu-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--cu-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--cu-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--cu-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--cu-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--cu-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--cu-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--cu-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--cu-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "Largest display style: Storm Sans semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "Large display style: Storm Sans semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "Medium display style: Storm Sans bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-hero",
      description: "Largest editorial display style: Storm Serif semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-lg",
      description: "Large editorial display style: Storm Serif semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-md",
      description: "Medium editorial display style: Storm Serif bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-xl",
      description: "Large title style: Storm Sans semibold at 18px (`font-size.lg`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "Medium title style: Storm Sans bold at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-md",
      description: "Medium title style: Storm Sans medium at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "Small title style: Storm Sans bold at 12px (`font-size.sm`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-xs",
      description: "Extra small title style: Storm Sans medium at 10px (`font-size.xxs`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-md",
      description: "Default body text style: Storm Sans regular at 18px (`font-size.md`) with normal line height. Use it for paragraphs, descriptions and most running copy. BodyText uses it by default, as do the components built on BodyText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-sm",
      description: "Smaller body text style: Storm Sans medium at 16px (`font-size.sm`) with normal line height. Use it for secondary copy in dense layouts, such as table rows, sidebars and card metadata, where `body-md` would feel too large.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "Caption style: Storm Sans regular italic at 16px (`font-size.sm`) with tight line height. Use it for helper text, annotations and small supporting labels. Used by Field helper and validation text, ValidationText, EyebrowText, Slider value labels and the CodeBlock header file name.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "Eyebrow style: Google Sans Code semibold at 18px (`font-size.md`) with tight line height. Use it for the short kicker or category label that sits directly above a heading. Used by EyebrowText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "Monospace code style: Google Sans Code regular at 20px (`font-size.lg`) with snug line height. Use it for source code, file paths, identifiers and other literal values. Used by CodeBlock, InlineCodeText, FileTree, Stepper and code content inside Accordion.",
      theme: undefined,
      typography: true
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #1f1f2133",
      cssVar: "--cu-ring-base",
      description: "Generated base 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1f1f2133",
      cssVar: "--cu-ring-base-subtle",
      description: "Generated base 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1f1f2133",
      cssVar: "--cu-ring-base-offset",
      description: "Generated base 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1f1f2133",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "Generated base 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-danger",
      description: "Generated danger 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-danger-subtle",
      description: "Generated danger 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-danger-offset",
      description: "Generated danger 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "Generated danger 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541726",
      cssVar: "--cu-ring-warning",
      description: "Generated warning 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541726",
      cssVar: "--cu-ring-warning-subtle",
      description: "Generated warning 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541726",
      cssVar: "--cu-ring-warning-offset",
      description: "Generated warning 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541726",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "Generated warning 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b326",
      cssVar: "--cu-ring-info",
      description: "Generated info 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b326",
      cssVar: "--cu-ring-info-subtle",
      description: "Generated info 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b326",
      cssVar: "--cu-ring-info-offset",
      description: "Generated info 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b326",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "Generated info 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439526",
      cssVar: "--cu-ring-discovery",
      description: "Generated discovery 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439526",
      cssVar: "--cu-ring-discovery-subtle",
      description: "Generated discovery 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439526",
      cssVar: "--cu-ring-discovery-offset",
      description: "Generated discovery 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439526",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "Generated discovery 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-success",
      description: "Generated success 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-success-subtle",
      description: "Generated success 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-success-offset",
      description: "Generated success 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "Generated success 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    }
  ],
  "lightHighContrast": [
    {
      path: "color.black",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#ebebed",
      cssVar: "--cu-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--cu-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#9a9fa7",
      cssVar: "--cu-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#737383",
      cssVar: "--cu-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#3f424a",
      cssVar: "--cu-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#2b2b33",
      cssVar: "--cu-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#08080a",
      cssVar: "--cu-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#f997b0",
      cssVar: "--cu-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#f77395",
      cssVar: "--cu-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#f6507a",
      cssVar: "--cu-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#f42c5f",
      cssVar: "--cu-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#f00a45",
      cssVar: "--cu-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#b90a37",
      cssVar: "--cu-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#510619",
      cssVar: "--cu-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#1d0309",
      cssVar: "--cu-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#ffeee5",
      cssVar: "--cu-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#ffd3bb",
      cssVar: "--cu-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#ffb890",
      cssVar: "--cu-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ff9c65",
      cssVar: "--cu-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ff803a",
      cssVar: "--cu-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#ff5c00",
      cssVar: "--cu-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#b24600",
      cssVar: "--cu-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#742f00",
      cssVar: "--cu-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#471b00",
      cssVar: "--cu-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#ffe1ab",
      cssVar: "--cu-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#ffd280",
      cssVar: "--cu-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#ffc253",
      cssVar: "--cu-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#ffb327",
      cssVar: "--cu-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#ffb01e",
      cssVar: "--cu-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#ffa706",
      cssVar: "--cu-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#dc8f00",
      cssVar: "--cu-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a26902",
      cssVar: "--cu-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#c9f8d8",
      cssVar: "--cu-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7ceeaf",
      cssVar: "--cu-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#2de498",
      cssVar: "--cu-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#1db77c",
      cssVar: "--cu-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#13825b",
      cssVar: "--cu-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#031611",
      cssVar: "--cu-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#f8fbff",
      cssVar: "--cu-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#cbdeff",
      cssVar: "--cu-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--cu-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#70a4ff",
      cssVar: "--cu-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#4387ff",
      cssVar: "--cu-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#025eff",
      cssVar: "--cu-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#012e7c",
      cssVar: "--cu-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#00163b",
      cssVar: "--cu-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#e1d7fb",
      cssVar: "--cu-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#c1adf7",
      cssVar: "--cu-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#a283f3",
      cssVar: "--cu-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#815ddd",
      cssVar: "--cu-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#623dc3",
      cssVar: "--cu-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#492b9b",
      cssVar: "--cu-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#321c71",
      cssVar: "--cu-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#1d0f42",
      cssVar: "--cu-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#ffd5ee",
      cssVar: "--cu-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ffaade",
      cssVar: "--cu-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#ff85d0",
      cssVar: "--cu-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#fa7dcb",
      cssVar: "--cu-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#f976c6",
      cssVar: "--cu-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#dc50a6",
      cssVar: "--cu-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#932b6b",
      cssVar: "--cu-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#1c0815",
      cssVar: "--cu-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.primary",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-primary",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.secondary",
      type: "color",
      value: "#3f424a",
      cssVar: "--cu-color-secondary",
      description: "Default text and icon color for running copy and standard content. Used by BodyText and body content in Card, Dialog, AlertDialog, Sheet, Accordion, CodeBlock, DataTable, TypeTable and Stepper.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.tertiary",
      type: "color",
      value: "#ebebed",
      cssVar: "--cu-color-tertiary",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--cu-color-border",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-danger",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-warning",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-info",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--cu-color-info-subtle",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery",
      type: "color",
      value: "#492b9b",
      cssVar: "--cu-color-discovery",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle",
      type: "color",
      value: "#c1adf7",
      cssVar: "--cu-color-discovery-subtle",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-success",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-sunken",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-canvas",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-canvas",
      description: "Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. Used by NavigationHeader, the `canvas` Container variant, Tabs panels, CodeBlock bodies, Table row hover and GlitchSeparator.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-elevated",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. Used by Button (`surface` variant), Input, TextArea, Select, Checkbox, Switch, Card, Accordion, Table, Tabs and FileTree.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-floating",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-floating",
      description: "Surface for content that floats above the page, such as menus, popovers and dialogs. Used by Popover, Tooltip, the Select dropdown, AlertDialog, Sheet, SearchInput results, active CodeBlock tabs and the `floating` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface-highest",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-highest",
      description: "Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. Used by Alert and its icon background, InlineCodeText, hovered Select items and the `overlay` Container variant.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.backdrop",
      type: "color",
      value: "#00000066",
      cssVar: "--cu-color-backdrop",
      description: "Semi-transparent color that dims the page behind modal content and softens floating shadows. Used as the backdrop of Dialog and Sheet, and as the shadow color for Popover, Tooltip, the Select dropdown and the `floating` Container.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Smallest resting shadow (`shadow.2xs`): a single 1px edge under the element. Use it to give flat controls, such as inputs and segmented buttons, a hint of depth.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Small resting shadow (`shadow.xs`). Use it for cards, tiles and buttons sitting directly on the canvas.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Medium resting shadow (`shadow.sm`). Use it for raised cards and panels that need more separation from the canvas than `resting.small`.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Small floating shadow (`shadow.md`). Use it for compact floating content, such as tooltips and dropdown menus.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Medium floating shadow (`shadow.lg`). Use it for popovers, menus and other anchored panels.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Large floating shadow (`shadow.xl`). Use it for dialogs, drawers and sheets that sit above the whole page.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Largest floating shadow (`shadow.2xl`). Use it for the highest-elevation content, such as full-screen modals or command palettes.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Inset shadow (`inset-shadow.xs`) for recessed elements. Use it for wells and pressed states that should read as sunken into their surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#3f424a",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral (gray) data color. Use it for the primary mark of a neutral series, such as lines, bars, points and legend swatches. Suits baselines, totals and comparison series that should not compete with colored data.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral (gray) data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `neutral.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data color. Use it for the primary mark of a red series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#f77395",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `red.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#742f00",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data color. Use it for the primary mark of a orange series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#ffb890",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `orange.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data color. Use it for the primary mark of a yellow series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#ffc253",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `yellow.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data color. Use it for the primary mark of a green series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#7ceeaf",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `green.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data color. Use it for the primary mark of a blue series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `blue.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#492b9b",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data color. Use it for the primary mark of a purple series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#c1adf7",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `purple.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#932b6b",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data color. Use it for the primary mark of a pink series, such as lines, bars, points and legend swatches.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#ffaade",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data color. Use it for area fills, ranges, bar backgrounds and hover highlights behind the `pink.emphasis` series.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-base",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle",
      type: "color",
      value: "#ebebed",
      cssVar: "--cu-color-base-subtle",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-base-accent",
      description: "Generated text and icon color on base backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-accent",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-base-accent",
      description: "Alias of base for the base theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-base-subtle",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-base-subtle",
      description: "Generated text and icon color on base-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-danger-accent",
      description: "Generated text and icon color on danger backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-accent",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-danger-accent",
      description: "Alias of danger for the danger theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle",
      type: "color",
      value: "#ff98aa",
      cssVar: "--cu-color-danger-subtle",
      description: "Generated low-emphasis danger background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-danger-subtle",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-danger-subtle",
      description: "Generated text and icon color on danger-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-warning-accent",
      description: "Generated text and icon color on warning backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-accent",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-warning-accent",
      description: "Alias of warning for the warning theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle",
      type: "color",
      value: "#e0af64",
      cssVar: "--cu-color-warning-subtle",
      description: "Generated low-emphasis warning background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-warning-subtle",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-warning-subtle",
      description: "Generated text and icon color on warning-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-info-accent",
      description: "Generated text and icon color on info backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-accent",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-info-accent",
      description: "Alias of info for the info theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-info-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-info-subtle",
      description: "Generated text and icon color on info-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-discovery-accent",
      description: "Generated text and icon color on discovery backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-accent",
      type: "color",
      value: "#492b9b",
      cssVar: "--cu-color-discovery-accent",
      description: "Alias of discovery for the discovery theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-discovery-subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-discovery-subtle",
      description: "Generated text and icon color on discovery-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-accent",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-success-accent",
      description: "Generated text and icon color on success backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-accent",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-success-accent",
      description: "Alias of success for the success theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle",
      type: "color",
      value: "#72d1ac",
      cssVar: "--cu-color-success-subtle",
      description: "Generated low-emphasis success background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-success-subtle",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-success-subtle",
      description: "Generated text and icon color on success-subtle backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-border-active",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (active, light contrast primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-border-inactive",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.border-disabled",
      type: "color",
      value: "#5a5a66",
      cssVar: "--cu-color-border-disabled",
      description: "Low-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-active",
      type: "color",
      value: "#17171b",
      cssVar: "--cu-color-base-active",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (active, 10% lighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-base-inactive",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-disabled",
      type: "color",
      value: "#151519",
      cssVar: "--cu-color-base-disabled",
      description: "Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-active",
      type: "color",
      value: "#b9b9c0",
      cssVar: "--cu-color-base-subtle-active",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (active, 12% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-base-subtle-inactive",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.base-subtle-disabled",
      type: "color",
      value: "#676776",
      cssVar: "--cu-color-base-subtle-disabled",
      description: "Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-active",
      type: "color",
      value: "#27000c",
      cssVar: "--cu-color-danger-active",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-inactive",
      type: "color",
      value: "#bc2445",
      cssVar: "--cu-color-danger-inactive",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-disabled",
      type: "color",
      value: "#44232c",
      cssVar: "--cu-color-danger-disabled",
      description: "Danger accent used by the `danger` theme. Use it for destructive actions, such as delete buttons, and for error states. Applied by Alert `danger` and `error` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-active",
      type: "color",
      value: "#c5294a",
      cssVar: "--cu-color-danger-subtle-active",
      description: "Generated low-emphasis danger background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-inactive",
      type: "color",
      value: "#fff2f5",
      cssVar: "--cu-color-danger-subtle-inactive",
      description: "Generated low-emphasis danger background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.danger-subtle-disabled",
      type: "color",
      value: "#7a4751",
      cssVar: "--cu-color-danger-subtle-disabled",
      description: "Generated low-emphasis danger background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-active",
      type: "color",
      value: "#070400",
      cssVar: "--cu-color-warning-active",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-inactive",
      type: "color",
      value: "#92661d",
      cssVar: "--cu-color-warning-inactive",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-disabled",
      type: "color",
      value: "#3a3021",
      cssVar: "--cu-color-warning-disabled",
      description: "Warning accent used by the `warning` theme. Use it for cautionary states that need attention but do not block the user. Applied by Alert `warning` and `warning` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-active",
      type: "color",
      value: "#8a5e18",
      cssVar: "--cu-color-warning-subtle-active",
      description: "Generated low-emphasis warning background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-inactive",
      type: "color",
      value: "#ffebcc",
      cssVar: "--cu-color-warning-subtle-inactive",
      description: "Generated low-emphasis warning background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.warning-subtle-disabled",
      type: "color",
      value: "#685843",
      cssVar: "--cu-color-warning-subtle-disabled",
      description: "Generated low-emphasis warning background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-active",
      type: "color",
      value: "#001f5a",
      cssVar: "--cu-color-info-active",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-inactive",
      type: "color",
      value: "#216df4",
      cssVar: "--cu-color-info-inactive",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-disabled",
      type: "color",
      value: "#233457",
      cssVar: "--cu-color-info-disabled",
      description: "Info accent used by the `info` theme. Use it for neutral guidance, tips and system notices. Applied by Alert `info` and `info` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-active",
      type: "color",
      value: "#1b61df",
      cssVar: "--cu-color-info-subtle-active",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-inactive",
      type: "color",
      value: "#def0ff",
      cssVar: "--cu-color-info-subtle-inactive",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.info-subtle-disabled",
      type: "color",
      value: "#425983",
      cssVar: "--cu-color-info-subtle-disabled",
      description: "Low-emphasis info color for the `info` theme. Exposed as `muted` inside that theme; use it for soft info-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the info theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-active",
      type: "color",
      value: "#240c59",
      cssVar: "--cu-color-discovery-active",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-inactive",
      type: "color",
      value: "#6c4ec9",
      cssVar: "--cu-color-discovery-inactive",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-disabled",
      type: "color",
      value: "#342c4d",
      cssVar: "--cu-color-discovery-disabled",
      description: "Discovery accent used by the `discovery` theme. Use it to highlight new features, onboarding and help content. Applied by `help` Messages. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-active",
      type: "color",
      value: "#6b48bb",
      cssVar: "--cu-color-discovery-subtle-active",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-discovery-subtle-inactive",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.discovery-subtle-disabled",
      type: "color",
      value: "#584e78",
      cssVar: "--cu-color-discovery-subtle-disabled",
      description: "Low-emphasis discovery color for the `discovery` theme. Exposed as `muted` inside that theme; use it for soft discovery-tinted fills, such as a `subtle` Button or the decorative Callout icon and gradient in the discovery theme. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-success-active",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-inactive",
      type: "color",
      value: "#298565",
      cssVar: "--cu-color-success-inactive",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-disabled",
      type: "color",
      value: "#213731",
      cssVar: "--cu-color-success-disabled",
      description: "Success accent used by the `success` theme. Use it to confirm that an action completed or a value is valid. Applied by Alert `success` and `success` Messages and ValidationText. (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-active",
      type: "color",
      value: "#237b5b",
      cssVar: "--cu-color-success-subtle-active",
      description: "Generated low-emphasis success background for the light theme (active, 25% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-inactive",
      type: "color",
      value: "#d0fdea",
      cssVar: "--cu-color-success-subtle-inactive",
      description: "Generated low-emphasis success background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.success-subtle-disabled",
      type: "color",
      value: "#45655b",
      cssVar: "--cu-color-success-subtle-disabled",
      description: "Generated low-emphasis success background for the light theme (disabled, 85% saturation, 35% over oklch(0.3839 0.0045 286.26))",
      theme: undefined,
      typography: false
    },
    {
      path: "size.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-size-zero",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--cu-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--cu-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--cu-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--cu-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--cu-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--cu-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--cu-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--cu-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--cu-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--cu-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--cu-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--cu-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--cu-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-19xl",
      description: "A 122px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-20xl",
      description: "A 132px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-21xl",
      description: "A 142px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-22xl",
      description: "A 152px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-23xl",
      description: "A 162px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-24xl",
      description: "A 172px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-25xl",
      description: "A 182px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-26xl",
      description: "A 192px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-27xl",
      description: "A 202px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-28xl",
      description: "A 212px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-29xl",
      description: "A 222px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-30xl",
      description: "A 232px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-31xl",
      description: "A 242px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-32xl",
      description: "A 252px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-33xl",
      description: "A 262px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-34xl",
      description: "A 272px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-35xl",
      description: "A 282px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "292px",
      cssVar: "--cu-size-36xl",
      description: "A 292px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "302px",
      cssVar: "--cu-size-37xl",
      description: "A 302px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.38xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-size-38xl",
      description: "A 312px 38xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.39xl",
      type: "dimension",
      value: "322px",
      cssVar: "--cu-size-39xl",
      description: "A 322px 39xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.40xl",
      type: "dimension",
      value: "332px",
      cssVar: "--cu-size-40xl",
      description: "A 332px 40xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.41xl",
      type: "dimension",
      value: "342px",
      cssVar: "--cu-size-41xl",
      description: "A 342px 41xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.42xl",
      type: "dimension",
      value: "352px",
      cssVar: "--cu-size-42xl",
      description: "A 352px 42xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.43xl",
      type: "dimension",
      value: "362px",
      cssVar: "--cu-size-43xl",
      description: "A 362px 43xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.44xl",
      type: "dimension",
      value: "372px",
      cssVar: "--cu-size-44xl",
      description: "A 372px 44xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.45xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-size-45xl",
      description: "A 382px 45xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.46xl",
      type: "dimension",
      value: "392px",
      cssVar: "--cu-size-46xl",
      description: "A 392px 46xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.47xl",
      type: "dimension",
      value: "402px",
      cssVar: "--cu-size-47xl",
      description: "A 402px 47xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.48xl",
      type: "dimension",
      value: "412px",
      cssVar: "--cu-size-48xl",
      description: "A 412px 48xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.49xl",
      type: "dimension",
      value: "422px",
      cssVar: "--cu-size-49xl",
      description: "A 422px 49xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.50xl",
      type: "dimension",
      value: "432px",
      cssVar: "--cu-size-50xl",
      description: "A 432px 50xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.51xl",
      type: "dimension",
      value: "442px",
      cssVar: "--cu-size-51xl",
      description: "A 442px 51xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.52xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-size-52xl",
      description: "A 452px 52xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.53xl",
      type: "dimension",
      value: "462px",
      cssVar: "--cu-size-53xl",
      description: "A 462px 53xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.54xl",
      type: "dimension",
      value: "472px",
      cssVar: "--cu-size-54xl",
      description: "A 472px 54xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.55xl",
      type: "dimension",
      value: "482px",
      cssVar: "--cu-size-55xl",
      description: "A 482px 55xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.56xl",
      type: "dimension",
      value: "492px",
      cssVar: "--cu-size-56xl",
      description: "A 492px 56xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.57xl",
      type: "dimension",
      value: "502px",
      cssVar: "--cu-size-57xl",
      description: "A 502px 57xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.58xl",
      type: "dimension",
      value: "512px",
      cssVar: "--cu-size-58xl",
      description: "A 512px 58xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.59xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-size-59xl",
      description: "A 522px 59xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.60xl",
      type: "dimension",
      value: "532px",
      cssVar: "--cu-size-60xl",
      description: "A 532px 60xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.61xl",
      type: "dimension",
      value: "542px",
      cssVar: "--cu-size-61xl",
      description: "A 542px 61xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.62xl",
      type: "dimension",
      value: "552px",
      cssVar: "--cu-size-62xl",
      description: "A 552px 62xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.63xl",
      type: "dimension",
      value: "562px",
      cssVar: "--cu-size-63xl",
      description: "A 562px 63xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.64xl",
      type: "dimension",
      value: "572px",
      cssVar: "--cu-size-64xl",
      description: "A 572px 64xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--cu-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--cu-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--cu-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--cu-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--cu-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--cu-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--cu-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--cu-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--cu-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--cu-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.zero",
      type: "dimension",
      value: "0px",
      cssVar: "--cu-spacing-zero",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--cu-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--cu-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--cu-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--cu-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--cu-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--cu-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--cu-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--cu-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--cu-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--cu-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--cu-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--cu-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--cu-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--cu-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--cu-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--cu-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--cu-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--cu-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--cu-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--cu-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-19xl",
      description: "A 158px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-20xl",
      description: "A 172px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-21xl",
      description: "A 186px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "200px",
      cssVar: "--cu-spacing-22xl",
      description: "A 200px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.23xl",
      type: "dimension",
      value: "214px",
      cssVar: "--cu-spacing-23xl",
      description: "A 214px 23xl spacing step (from size.23xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.24xl",
      type: "dimension",
      value: "228px",
      cssVar: "--cu-spacing-24xl",
      description: "A 228px 24xl spacing step (from size.24xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.25xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-spacing-25xl",
      description: "A 242px 25xl spacing step (from size.25xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.26xl",
      type: "dimension",
      value: "256px",
      cssVar: "--cu-spacing-26xl",
      description: "A 256px 26xl spacing step (from size.26xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.27xl",
      type: "dimension",
      value: "270px",
      cssVar: "--cu-spacing-27xl",
      description: "A 270px 27xl spacing step (from size.27xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.28xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-spacing-28xl",
      description: "A 284px 28xl spacing step (from size.28xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.29xl",
      type: "dimension",
      value: "298px",
      cssVar: "--cu-spacing-29xl",
      description: "A 298px 29xl spacing step (from size.29xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.30xl",
      type: "dimension",
      value: "312px",
      cssVar: "--cu-spacing-30xl",
      description: "A 312px 30xl spacing step (from size.30xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.31xl",
      type: "dimension",
      value: "326px",
      cssVar: "--cu-spacing-31xl",
      description: "A 326px 31xl spacing step (from size.31xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.32xl",
      type: "dimension",
      value: "340px",
      cssVar: "--cu-spacing-32xl",
      description: "A 340px 32xl spacing step (from size.32xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.33xl",
      type: "dimension",
      value: "354px",
      cssVar: "--cu-spacing-33xl",
      description: "A 354px 33xl spacing step (from size.33xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.34xl",
      type: "dimension",
      value: "368px",
      cssVar: "--cu-spacing-34xl",
      description: "A 368px 34xl spacing step (from size.34xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.35xl",
      type: "dimension",
      value: "382px",
      cssVar: "--cu-spacing-35xl",
      description: "A 382px 35xl spacing step (from size.35xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.36xl",
      type: "dimension",
      value: "396px",
      cssVar: "--cu-spacing-36xl",
      description: "A 396px 36xl spacing step (from size.36xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.37xl",
      type: "dimension",
      value: "410px",
      cssVar: "--cu-spacing-37xl",
      description: "A 410px 37xl spacing step (from size.37xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.38xl",
      type: "dimension",
      value: "424px",
      cssVar: "--cu-spacing-38xl",
      description: "A 424px 38xl spacing step (from size.38xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.39xl",
      type: "dimension",
      value: "438px",
      cssVar: "--cu-spacing-39xl",
      description: "A 438px 39xl spacing step (from size.39xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.40xl",
      type: "dimension",
      value: "452px",
      cssVar: "--cu-spacing-40xl",
      description: "A 452px 40xl spacing step (from size.40xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.41xl",
      type: "dimension",
      value: "466px",
      cssVar: "--cu-spacing-41xl",
      description: "A 466px 41xl spacing step (from size.41xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.42xl",
      type: "dimension",
      value: "480px",
      cssVar: "--cu-spacing-42xl",
      description: "A 480px 42xl spacing step (from size.42xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.43xl",
      type: "dimension",
      value: "494px",
      cssVar: "--cu-spacing-43xl",
      description: "A 494px 43xl spacing step (from size.43xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.44xl",
      type: "dimension",
      value: "508px",
      cssVar: "--cu-spacing-44xl",
      description: "A 508px 44xl spacing step (from size.44xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.45xl",
      type: "dimension",
      value: "522px",
      cssVar: "--cu-spacing-45xl",
      description: "A 522px 45xl spacing step (from size.45xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.46xl",
      type: "dimension",
      value: "536px",
      cssVar: "--cu-spacing-46xl",
      description: "A 536px 46xl spacing step (from size.46xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.47xl",
      type: "dimension",
      value: "550px",
      cssVar: "--cu-spacing-47xl",
      description: "A 550px 47xl spacing step (from size.47xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.48xl",
      type: "dimension",
      value: "564px",
      cssVar: "--cu-spacing-48xl",
      description: "A 564px 48xl spacing step (from size.48xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.49xl",
      type: "dimension",
      value: "578px",
      cssVar: "--cu-spacing-49xl",
      description: "A 578px 49xl spacing step (from size.49xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.50xl",
      type: "dimension",
      value: "592px",
      cssVar: "--cu-spacing-50xl",
      description: "A 592px 50xl spacing step (from size.50xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.51xl",
      type: "dimension",
      value: "606px",
      cssVar: "--cu-spacing-51xl",
      description: "A 606px 51xl spacing step (from size.51xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.52xl",
      type: "dimension",
      value: "620px",
      cssVar: "--cu-spacing-52xl",
      description: "A 620px 52xl spacing step (from size.52xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.53xl",
      type: "dimension",
      value: "634px",
      cssVar: "--cu-spacing-53xl",
      description: "A 634px 53xl spacing step (from size.53xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.54xl",
      type: "dimension",
      value: "648px",
      cssVar: "--cu-spacing-54xl",
      description: "A 648px 54xl spacing step (from size.54xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.55xl",
      type: "dimension",
      value: "662px",
      cssVar: "--cu-spacing-55xl",
      description: "A 662px 55xl spacing step (from size.55xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.56xl",
      type: "dimension",
      value: "676px",
      cssVar: "--cu-spacing-56xl",
      description: "A 676px 56xl spacing step (from size.56xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.57xl",
      type: "dimension",
      value: "690px",
      cssVar: "--cu-spacing-57xl",
      description: "A 690px 57xl spacing step (from size.57xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.58xl",
      type: "dimension",
      value: "704px",
      cssVar: "--cu-spacing-58xl",
      description: "A 704px 58xl spacing step (from size.58xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.59xl",
      type: "dimension",
      value: "718px",
      cssVar: "--cu-spacing-59xl",
      description: "A 718px 59xl spacing step (from size.59xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.60xl",
      type: "dimension",
      value: "732px",
      cssVar: "--cu-spacing-60xl",
      description: "A 732px 60xl spacing step (from size.60xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.61xl",
      type: "dimension",
      value: "746px",
      cssVar: "--cu-spacing-61xl",
      description: "A 746px 61xl spacing step (from size.61xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.62xl",
      type: "dimension",
      value: "760px",
      cssVar: "--cu-spacing-62xl",
      description: "A 760px 62xl spacing step (from size.62xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.63xl",
      type: "dimension",
      value: "774px",
      cssVar: "--cu-spacing-63xl",
      description: "A 774px 63xl spacing step (from size.63xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.64xl",
      type: "dimension",
      value: "788px",
      cssVar: "--cu-spacing-64xl",
      description: "A 788px 64xl spacing step (from size.64xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--cu-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--cu-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--cu-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--cu-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--cu-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--cu-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--cu-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--cu-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--cu-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--cu-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--cu-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--cu-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--cu-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--cu-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--cu-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--cu-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--cu-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--cu-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--cu-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--cu-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--cu-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--cu-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--cu-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--cu-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--cu-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--cu-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--cu-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--cu-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--cu-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--cu-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--cu-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.none",
      type: "number",
      value: "0.765",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.765)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1.0575",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1.0575)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.125",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.125)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.2375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.2375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.665",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.665)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.285714",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (1.285714)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.35",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (1.35)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (1.4)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.26",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (1.26)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (1.2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.08",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (1.08)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.9",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (0.9)",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.zero",
      type: "dimension",
      value: "0rem",
      cssVar: "--cu-border-radius-zero",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--cu-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--cu-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--cu-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--cu-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--cu-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--cu-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--cu-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--cu-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--cu-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-container",
      description: "Corner radius for large framed regions that group other content (8px, `border-radius.lg`). Used by Container, Accordion, Callout, CodeBlock, FileTree, FilePicker, Table, Stepper and InlineCodeText.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.trigger",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-trigger",
      description: "Corner radius for triggers interfaces (6px, `border-radius.sm`). Used by Tabs (indicators).",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-card",
      description: "Corner radius for cards and card-like tiles (6px, `border-radius.md`). Slightly tighter than `container` so cards nested inside a container still read as inset. Used by Card and FilePicker.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-button",
      description: "Corner radius for triggers and other pressable elements (8px, `border-radius.lg`). Used by Button, Badge, DatePicker triggers, SearchInput results, Select items, Tabs triggers and CodeBlock header controls. Circular and rounded Button variants override it.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "Corner radius for form controls that accept input (8px, `border-radius.lg`). Matches `button` so inputs and buttons line up when placed side by side. Used by Input, TextArea, Select, Field, RadioGroup and Rating.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--cu-border-radius-checkbox",
      description: "Corner radius for the checkbox box (6px, `border-radius.md`). Kept smaller than `control` so the small box still reads as a square rather than a pill. Used by Checkbox.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "Corner radius for modal dialogs (12px, `border-radius.xl`). Larger than other surfaces to set modal content apart from the page beneath it. Used by Dialog.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "Corner radius for sheets (0px, `border-radius.zero`). Sheets slide in flush against a viewport edge, so their corners stay square. Applied by Sheet to its exposed corners.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "Corner radius for drawers (32px, `border-radius.4xl`). The large rounding marks a panel that slides over the page from an edge. Used as the default `borderRadius` of Drawer.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-popover",
      description: "Corner radius for popovers and dropdown menus (6px, `border-radius.md`). Used by Popover and the Select dropdown list.",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-tooltip",
      description: "Corner radius for tooltips (6px, `border-radius.md`). Used by Tooltip.",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--cu-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--cu-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--cu-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--cu-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--cu-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--cu-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--cu-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--cu-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--cu-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--cu-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--cu-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--cu-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--cu-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--cu-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--cu-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--cu-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--cu-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--cu-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--cu-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--cu-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--cu-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--cu-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--cu-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--cu-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--cu-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--cu-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--cu-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--cu-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--cu-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--cu-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--cu-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--cu-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--cu-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--cu-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--cu-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "Largest display style: Storm Sans semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "Large display style: Storm Sans semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "Medium display style: Storm Sans bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-hero",
      description: "Largest editorial display style: Storm Serif semibold at 60px (`font-size.5xl`) with snug line height. Reserve it for a single hero headline per page, such as a landing or marketing banner. HeadingText applies it for `level=\"hero\"` (rendered as an h1).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-lg",
      description: "Large editorial display style: Storm Serif semibold at 36px (`font-size.3xl`) with snug line height. Use it for page titles and top-level section headings. HeadingText applies it for levels `1`/`title` (h1) and `2`/`lg` (h2).",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.editorial-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Serif\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-editorial-md",
      description: "Medium editorial display style: Storm Serif bold at 24px (`font-size.xl`) with snug line height. Use it for section and card headings. HeadingText applies it for level `3`/`md` (h3) and as its default font.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-xl",
      description: "Large title style: Storm Sans semibold at 18px (`font-size.lg`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "Medium title style: Storm Sans bold at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-md",
      description: "Medium title style: Storm Sans medium at 16px (`font-size.md`) with snug line height. Use it for form labels, column headers and other short labels that sit above content. Used by LabelText (resting label), DataTable column headings and TypeTable column labels.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "Small title style: Storm Sans bold at 12px (`font-size.sm`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-title-xs",
      description: "Extra small title style: Storm Sans medium at 10px (`font-size.xxs`) with snug line height. Use it for compact labels that must stay out of the way of their content. LabelText switches to it when `floating` is set, such as a field label that has floated up into the input border.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-md",
      description: "Default body text style: Storm Sans regular at 18px (`font-size.md`) with normal line height. Use it for paragraphs, descriptions and most running copy. BodyText uses it by default, as do the components built on BodyText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-body-sm",
      description: "Smaller body text style: Storm Sans medium at 16px (`font-size.sm`) with normal line height. Use it for secondary copy in dense layouts, such as table rows, sidebars and card metadata, where `body-md` would feel too large.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":\"Storm Sans\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.snug}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "Caption style: Storm Sans regular italic at 16px (`font-size.sm`) with tight line height. Use it for helper text, annotations and small supporting labels. Used by Field helper and validation text, ValidationText, EyebrowText, Slider value labels and the CodeBlock header file name.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "Eyebrow style: Google Sans Code semibold at 18px (`font-size.md`) with tight line height. Use it for the short kicker or category label that sits directly above a heading. Used by EyebrowText.",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "Monospace code style: Google Sans Code regular at 20px (`font-size.lg`) with snug line height. Use it for source code, file paths, identifiers and other literal values. Used by CodeBlock, InlineCodeText, FileTree, Stepper and code content inside Accordion.",
      theme: undefined,
      typography: true
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #1f1f2133",
      cssVar: "--cu-ring-base",
      description: "Generated base 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1f1f2133",
      cssVar: "--cu-ring-base-subtle",
      description: "Generated base 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1f1f2133",
      cssVar: "--cu-ring-base-offset",
      description: "Generated base 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1f1f2133",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "Generated base 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-danger",
      description: "Generated danger 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-danger-subtle",
      description: "Generated danger 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-danger-offset",
      description: "Generated danger 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "Generated danger 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541726",
      cssVar: "--cu-ring-warning",
      description: "Generated warning 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541726",
      cssVar: "--cu-ring-warning-subtle",
      description: "Generated warning 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541726",
      cssVar: "--cu-ring-warning-offset",
      description: "Generated warning 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541726",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "Generated warning 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b326",
      cssVar: "--cu-ring-info",
      description: "Generated info 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b326",
      cssVar: "--cu-ring-info-subtle",
      description: "Generated info 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b326",
      cssVar: "--cu-ring-info-offset",
      description: "Generated info 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b326",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "Generated info 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439526",
      cssVar: "--cu-ring-discovery",
      description: "Generated discovery 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439526",
      cssVar: "--cu-ring-discovery-subtle",
      description: "Generated discovery 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439526",
      cssVar: "--cu-ring-discovery-offset",
      description: "Generated discovery 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439526",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "Generated discovery 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-success",
      description: "Generated success 3px focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-success-subtle",
      description: "Generated success 1px hairline focus ring with no gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-success-offset",
      description: "Generated success 3px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "Generated success 1px focus ring with a 3px gap",
      theme: undefined,
      typography: false
    }
  ]
};

const tableStyle: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "13px"
};

const cellStyle: CSSProperties = {
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  padding: "8px 10px",
  textAlign: "left",
  verticalAlign: "top"
};

const swatchStyle = (value: string): CSSProperties => ({
  display: "inline-block",
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  marginRight: "8px",
  verticalAlign: "middle",
  border: "1px solid rgba(0,0,0,0.15)",
  background: value
});

export interface TokenTableBlockProps {
  /** Optional path prefix filter or filters (e.g. `color`). */
  filter?: string | string[];
  /** Optional DTCG `$type` filter. */
  type?: string;
  /** Restrict rows to tokens used to define typography. */
  typography?: boolean;
  /** Generated token-set name. Defaults to the first generated variant. */
  theme?: string;
}

/**
 * Token reference table for Storybook MDX docs.
 */
export function TokenTableBlock({
  filter,
  type,
  typography,
  theme
}: TokenTableBlockProps = {}): ReactElement {
  const activeTheme = resolveThemeVariant(TOKEN_VARIANTS, "dark", theme);
  const rows = TOKEN_VARIANTS[activeTheme].filter(token => {
    const filters = typeof filter === "string" ? [filter] : filter;
    if (
      filters &&
      !filters.some(prefix =>
        token.path === prefix || token.path.startsWith(`${prefix}.`)
      )
    ) {
      return false;
    }
    if (type && token.type !== type) {
      return false;
    }
    if (typography && !token.typography) {
      return false;
    }
    return true;
  });

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>Path</th>
          <th style={cellStyle}>Type</th>
          <th style={cellStyle}>Value</th>
          <th style={cellStyle}>CSS variable</th>
          <th style={cellStyle}>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(token => (
          <tr key={token.theme ? `${token.theme}:${token.path}` : token.path}>
            <td style={cellStyle}>
              <code>{token.path}</code>
              {token.theme ? ` (${token.theme})` : null}
            </td>
            <td style={cellStyle}>{token.type ?? "—"}</td>
            <td style={cellStyle}>
              {token.type === "color" ? <span style={swatchStyle(token.value)} /> : null}
              <code>{token.value}</code>
            </td>
            <td style={cellStyle}>
              <code>{token.cssVar}</code>
            </td>
            <td style={cellStyle}>{token.description ?? "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
