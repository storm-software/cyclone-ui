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
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--cu-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
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
      value: "#606164",
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
      path: "color.ink.emphasis",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--cu-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#cacacb",
      cssVar: "--cu-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#959698",
      cssVar: "--cu-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#7b7b7e",
      cssVar: "--cu-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#1f1f21",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#242528",
      cssVar: "--cu-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#2b2c30",
      cssVar: "--cu-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#141415",
      cssVar: "--cu-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#121213",
      cssVar: "--cu-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#060607",
      cssVar: "--cu-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#1f1f22",
      cssVar: "--cu-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#1d1d20",
      cssVar: "--cu-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#0c0c0f",
      cssVar: "--cu-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--cu-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#2c2c2e",
      cssVar: "--cu-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#2a2a2c",
      cssVar: "--cu-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#141416",
      cssVar: "--cu-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#1f1f21",
      cssVar: "--cu-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#333437",
      cssVar: "--cu-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#303134",
      cssVar: "--cu-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#18191b",
      cssVar: "--cu-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#242527",
      cssVar: "--cu-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#3c3d41",
      cssVar: "--cu-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#393a3e",
      cssVar: "--cu-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#1d1e22",
      cssVar: "--cu-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#2b2c2f",
      cssVar: "--cu-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#cf2d56",
      cssVar: "--cu-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#6da2ff",
      cssVar: "--cu-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#606164",
      cssVar: "--cu-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.background",
      type: "color",
      value: "#3be4be",
      cssVar: "--cu-color-selection-background",
      description: "Background color of selected text, using the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.foreground",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-selection-foreground",
      description: "Color of selected text, placed on the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#fafafa",
      cssVar: "--cu-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#3be4be",
      cssVar: "--cu-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#cf2d56",
      cssVar: "--cu-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#cf2d56",
      cssVar: "--cu-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#f7ac23",
      cssVar: "--cu-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#45c791",
      cssVar: "--cu-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#45c791",
      cssVar: "--cu-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#4d8eff",
      cssVar: "--cu-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#9277da",
      cssVar: "--cu-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#9b9b9b",
      cssVar: "--cu-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#00a785",
      cssVar: "--cu-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#00b28f",
      cssVar: "--cu-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#81fff4",
      cssVar: "--cu-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#6adfc0",
      cssVar: "--cu-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#fd5b7b",
      cssVar: "--cu-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#f55474",
      cssVar: "--cu-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#a70037",
      cssVar: "--cu-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#c0455d",
      cssVar: "--cu-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#fd5b7b",
      cssVar: "--cu-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#f55474",
      cssVar: "--cu-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#a70037",
      cssVar: "--cu-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#c0455d",
      cssVar: "--cu-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#bb7400",
      cssVar: "--cu-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#c67d00",
      cssVar: "--cu-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#ffe067",
      cssVar: "--cu-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#ecb055",
      cssVar: "--cu-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#82ffc6",
      cssVar: "--cu-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#78f5bc",
      cssVar: "--cu-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#009865",
      cssVar: "--cu-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#64c297",
      cssVar: "--cu-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#82ffc6",
      cssVar: "--cu-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#78f5bc",
      cssVar: "--cu-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#009865",
      cssVar: "--cu-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#64c297",
      cssVar: "--cu-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#7abeff",
      cssVar: "--cu-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#72b6ff",
      cssVar: "--cu-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#2564d1",
      cssVar: "--cu-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#5d91ea",
      cssVar: "--cu-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#bea4ff",
      cssVar: "--cu-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#b69cff",
      cssVar: "--cu-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#6d51b0",
      cssVar: "--cu-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#907ccb",
      cssVar: "--cu-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#232326",
      cssVar: "--cu-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--cu-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#1f1f22",
      cssVar: "--cu-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#1d1d20",
      cssVar: "--cu-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#0c0c0f",
      cssVar: "--cu-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--cu-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#1f1f22",
      cssVar: "--cu-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#1d1d20",
      cssVar: "--cu-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#0c0c0f",
      cssVar: "--cu-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--cu-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#2b2c30",
      cssVar: "--cu-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#007e5e",
      cssVar: "--cu-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#414347",
      cssVar: "--cu-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#333438",
      cssVar: "--cu-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#2b2c2f",
      cssVar: "--cu-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#3da280",
      cssVar: "--cu-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#359c7a",
      cssVar: "--cu-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#005f41",
      cssVar: "--cu-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#2f7b61",
      cssVar: "--cu-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#6b0023",
      cssVar: "--cu-color-muted-danger",
      description: "Generated danger muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#6b0023",
      cssVar: "--cu-color-muted-negative",
      description: "Generated negative muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#845800",
      cssVar: "--cu-color-muted-warning",
      description: "Generated warning muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#00714c",
      cssVar: "--cu-color-muted-success",
      description: "Generated success muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#00714c",
      cssVar: "--cu-color-muted-positive",
      description: "Generated positive muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#0146b0",
      cssVar: "--cu-color-muted-info",
      description: "Generated info muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#51328f",
      cssVar: "--cu-color-muted-discovery",
      description: "Generated discovery muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#842036",
      cssVar: "--cu-color-muted-danger-hover",
      description: "Generated danger muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#7f1b33",
      cssVar: "--cu-color-muted-danger-active",
      description: "Generated danger muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#550013",
      cssVar: "--cu-color-muted-danger-inactive",
      description: "Generated danger muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#621727",
      cssVar: "--cu-color-muted-danger-disabled",
      description: "Generated danger muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#842036",
      cssVar: "--cu-color-muted-negative-hover",
      description: "Generated negative muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#7f1b33",
      cssVar: "--cu-color-muted-negative-active",
      description: "Generated negative muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#550013",
      cssVar: "--cu-color-muted-negative-inactive",
      description: "Generated negative muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#621727",
      cssVar: "--cu-color-muted-negative-disabled",
      description: "Generated negative muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#a77931",
      cssVar: "--cu-color-muted-warning-hover",
      description: "Generated warning muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#a0732a",
      cssVar: "--cu-color-muted-warning-active",
      description: "Generated warning muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#663c00",
      cssVar: "--cu-color-muted-warning-inactive",
      description: "Generated warning muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#7e5b25",
      cssVar: "--cu-color-muted-warning-disabled",
      description: "Generated warning muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#36926b",
      cssVar: "--cu-color-muted-success-hover",
      description: "Generated success muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#2f8c65",
      cssVar: "--cu-color-muted-success-active",
      description: "Generated success muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#005532",
      cssVar: "--cu-color-muted-success-inactive",
      description: "Generated success muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#296e50",
      cssVar: "--cu-color-muted-success-disabled",
      description: "Generated success muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#36926b",
      cssVar: "--cu-color-muted-positive-hover",
      description: "Generated positive muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#2f8c65",
      cssVar: "--cu-color-muted-positive-active",
      description: "Generated positive muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#005532",
      cssVar: "--cu-color-muted-positive-inactive",
      description: "Generated positive muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#296e50",
      cssVar: "--cu-color-muted-positive-disabled",
      description: "Generated positive muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#2564d1",
      cssVar: "--cu-color-muted-info-hover",
      description: "Generated info muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#205fcb",
      cssVar: "--cu-color-muted-info-active",
      description: "Generated info muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#002a94",
      cssVar: "--cu-color-muted-info-inactive",
      description: "Generated info muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#1b4b9d",
      cssVar: "--cu-color-muted-info-disabled",
      description: "Generated info muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#6a4dac",
      cssVar: "--cu-color-muted-discovery-hover",
      description: "Generated discovery muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#6548a7",
      cssVar: "--cu-color-muted-discovery-active",
      description: "Generated discovery muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#3c1875",
      cssVar: "--cu-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#4f3982",
      cssVar: "--cu-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#2b2c30",
      cssVar: "--cu-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#7b7b7e",
      cssVar: "--cu-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#0d0c0766",
      cssVar: "--cu-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#fafafa",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#8cb6ff",
      cssVar: "--cu-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#4d8eff",
      cssVar: "--cu-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#501524",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#df6520",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#803000",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#f0a824",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#2c8a69",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#123166",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#6c53ad",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#362661",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#df6db3",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#482039",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#9ed6ff",
      cssVar: "--cu-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#95cdff",
      cssVar: "--cu-color-link-active",
      description: "Interactive color for links and linked text. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#4375ce",
      cssVar: "--cu-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#808184",
      cssVar: "--cu-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#6b6c6f",
      cssVar: "--cu-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#454649",
      cssVar: "--cu-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#fafafa",
      cssVar: "--cu-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#3be4be",
      cssVar: "--cu-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#ff96a3",
      cssVar: "--cu-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#ff96a3",
      cssVar: "--cu-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#c7dcff",
      cssVar: "--cu-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#d3c7ff",
      cssVar: "--cu-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#9b9b9b",
      cssVar: "--cu-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#00a785",
      cssVar: "--cu-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#00b28f",
      cssVar: "--cu-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#81fff4",
      cssVar: "--cu-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#6adfc0",
      cssVar: "--cu-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#c2606e",
      cssVar: "--cu-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#cd6977",
      cssVar: "--cu-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#ffc9d5",
      cssVar: "--cu-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#f39ea7",
      cssVar: "--cu-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#c2606e",
      cssVar: "--cu-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#cd6977",
      cssVar: "--cu-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#ffc9d5",
      cssVar: "--cu-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#f39ea7",
      cssVar: "--cu-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--cu-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#c2c2c2",
      cssVar: "--cu-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--cu-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#c2c2c2",
      cssVar: "--cu-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--cu-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#c2c2c2",
      cssVar: "--cu-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#899cbd",
      cssVar: "--cu-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#93a7c9",
      cssVar: "--cu-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#ebffff",
      cssVar: "--cu-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#cbdcf8",
      cssVar: "--cu-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#968bbf",
      cssVar: "--cu-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#a195ca",
      cssVar: "--cu-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#fff6ff",
      cssVar: "--cu-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#d2c9f6",
      cssVar: "--cu-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
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
      value: "112px",
      cssVar: "--cu-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-size-37xl",
      description: "A 284px 37xl size step",
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
      value: "144px",
      cssVar: "--cu-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
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
      value: "0.85",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.25",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.85",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (1)",
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
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-checkbox",
      description: "The border radius use for checkbox components",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #fafafa14",
      cssVar: "--cu-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #fafafa14",
      cssVar: "--cu-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #fafafa14",
      cssVar: "--cu-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #fafafa14",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #3be4be26",
      cssVar: "--cu-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #3be4be26",
      cssVar: "--cu-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #3be4be26",
      cssVar: "--cu-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #3be4be26",
      cssVar: "--cu-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2326",
      cssVar: "--cu-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2326",
      cssVar: "--cu-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff26",
      cssVar: "--cu-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff26",
      cssVar: "--cu-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff26",
      cssVar: "--cu-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff26",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da26",
      cssVar: "--cu-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da26",
      cssVar: "--cu-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da26",
      cssVar: "--cu-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da26",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "The title small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--cu-typography-body",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.tight}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "The caption typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "The eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "The code typography variant",
      theme: undefined,
      typography: true
    }
  ],
  "darkDimmed": [
    {
      path: "color.transparent",
      type: "color",
      value: "#d9d9d900",
      cssVar: "--cu-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
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
      value: "#6a6a6c",
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
      path: "color.ink.emphasis",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--cu-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--cu-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#8f8f90",
      cssVar: "--cu-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--cu-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#3f4043",
      cssVar: "--cu-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#444548",
      cssVar: "--cu-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#343435",
      cssVar: "--cu-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#323234",
      cssVar: "--cu-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#29292d",
      cssVar: "--cu-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#3b3b3f",
      cssVar: "--cu-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#3a3a3d",
      cssVar: "--cu-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#2d2d33",
      cssVar: "--cu-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--cu-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#454547",
      cssVar: "--cu-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#434345",
      cssVar: "--cu-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#343436",
      cssVar: "--cu-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--cu-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#4a4b4d",
      cssVar: "--cu-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#48484b",
      cssVar: "--cu-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#36373a",
      cssVar: "--cu-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#3f4042",
      cssVar: "--cu-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#505154",
      cssVar: "--cu-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#4e4f52",
      cssVar: "--cu-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#3a3b3f",
      cssVar: "--cu-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#444547",
      cssVar: "--cu-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#ab5268",
      cssVar: "--cu-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#7598d7",
      cssVar: "--cu-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#6a6a6c",
      cssVar: "--cu-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.background",
      type: "color",
      value: "#5abba5",
      cssVar: "--cu-color-selection-background",
      description: "Background color of selected text, using the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.foreground",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-selection-foreground",
      description: "Color of selected text, placed on the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#5abba5",
      cssVar: "--cu-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#ab5268",
      cssVar: "--cu-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#ab5268",
      cssVar: "--cu-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#c59b4d",
      cssVar: "--cu-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#60a88a",
      cssVar: "--cu-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#60a88a",
      cssVar: "--cu-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#638cd2",
      cssVar: "--cu-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#8e7dbb",
      cssVar: "--cu-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#939393",
      cssVar: "--cu-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#2c9680",
      cssVar: "--cu-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#2d9c86",
      cssVar: "--cu-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#7fdad2",
      cssVar: "--cu-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#75beaa",
      cssVar: "--cu-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#d26b7f",
      cssVar: "--cu-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#cb687b",
      cssVar: "--cu-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#962c4f",
      cssVar: "--cu-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#a4606d",
      cssVar: "--cu-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#d26b7f",
      cssVar: "--cu-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#cb687b",
      cssVar: "--cu-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#962c4f",
      cssVar: "--cu-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#a4606d",
      cssVar: "--cu-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#a1752f",
      cssVar: "--cu-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#a77b30",
      cssVar: "--cu-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#d6c171",
      cssVar: "--cu-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#c4a069",
      cssVar: "--cu-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#80dab1",
      cssVar: "--cu-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#7cd0aa",
      cssVar: "--cu-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#298e6c",
      cssVar: "--cu-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#72a88f",
      cssVar: "--cu-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#80dab1",
      cssVar: "--cu-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#7cd0aa",
      cssVar: "--cu-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#298e6c",
      cssVar: "--cu-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#72a88f",
      cssVar: "--cu-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#7cabd9",
      cssVar: "--cu-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#77a6d8",
      cssVar: "--cu-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#4d70ac",
      cssVar: "--cu-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#6d8dc4",
      cssVar: "--cu-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#a892df",
      cssVar: "--cu-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#a38ede",
      cssVar: "--cu-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#75669a",
      cssVar: "--cu-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#8d80b1",
      cssVar: "--cu-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#3e3e41",
      cssVar: "--cu-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--cu-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#3b3b3f",
      cssVar: "--cu-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#3a3a3d",
      cssVar: "--cu-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#2d2d33",
      cssVar: "--cu-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--cu-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#3b3b3f",
      cssVar: "--cu-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#3a3a3d",
      cssVar: "--cu-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#2d2d33",
      cssVar: "--cu-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--cu-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#444548",
      cssVar: "--cu-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#258069",
      cssVar: "--cu-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#545558",
      cssVar: "--cu-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#4a4b4e",
      cssVar: "--cu-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#444547",
      cssVar: "--cu-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#57917e",
      cssVar: "--cu-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#518e7a",
      cssVar: "--cu-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#206f56",
      cssVar: "--cu-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#4a7a69",
      cssVar: "--cu-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#75223d",
      cssVar: "--cu-color-muted-danger",
      description: "Generated danger muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#75223d",
      cssVar: "--cu-color-muted-negative",
      description: "Generated negative muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#836426",
      cssVar: "--cu-color-muted-warning",
      description: "Generated warning muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#23795d",
      cssVar: "--cu-color-muted-success",
      description: "Generated success muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#23795d",
      cssVar: "--cu-color-muted-positive",
      description: "Generated positive muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#2e599b",
      cssVar: "--cu-color-muted-info",
      description: "Generated info muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#604e86",
      cssVar: "--cu-color-muted-discovery",
      description: "Generated discovery muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#80404e",
      cssVar: "--cu-color-muted-danger-hover",
      description: "Generated danger muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#7d3b4b",
      cssVar: "--cu-color-muted-danger-active",
      description: "Generated danger muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#691f2f",
      cssVar: "--cu-color-muted-danger-inactive",
      description: "Generated danger muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#6c3541",
      cssVar: "--cu-color-muted-danger-disabled",
      description: "Generated danger muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#80404e",
      cssVar: "--cu-color-muted-negative-hover",
      description: "Generated negative muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#7d3b4b",
      cssVar: "--cu-color-muted-negative-active",
      description: "Generated negative muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#691f2f",
      cssVar: "--cu-color-muted-negative-inactive",
      description: "Generated negative muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#6c3541",
      cssVar: "--cu-color-muted-negative-disabled",
      description: "Generated negative muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#947950",
      cssVar: "--cu-color-muted-warning-hover",
      description: "Generated warning muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#90754a",
      cssVar: "--cu-color-muted-warning-active",
      description: "Generated warning muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#735121",
      cssVar: "--cu-color-muted-warning-inactive",
      description: "Generated warning muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#7c6543",
      cssVar: "--cu-color-muted-warning-disabled",
      description: "Generated warning muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#518870",
      cssVar: "--cu-color-muted-success-hover",
      description: "Generated success muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#4b846c",
      cssVar: "--cu-color-muted-success-active",
      description: "Generated success muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#1f694b",
      cssVar: "--cu-color-muted-success-inactive",
      description: "Generated success muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#44725e",
      cssVar: "--cu-color-muted-success-disabled",
      description: "Generated success muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#518870",
      cssVar: "--cu-color-muted-positive-hover",
      description: "Generated positive muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#4b846c",
      cssVar: "--cu-color-muted-positive-active",
      description: "Generated positive muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#1f694b",
      cssVar: "--cu-color-muted-positive-inactive",
      description: "Generated positive muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#44725e",
      cssVar: "--cu-color-muted-positive-disabled",
      description: "Generated positive muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#4d70ac",
      cssVar: "--cu-color-muted-info-hover",
      description: "Generated info muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#486ca9",
      cssVar: "--cu-color-muted-info-active",
      description: "Generated info muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#29458c",
      cssVar: "--cu-color-muted-info-inactive",
      description: "Generated info muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#3f5c8f",
      cssVar: "--cu-color-muted-info-disabled",
      description: "Generated info muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#736398",
      cssVar: "--cu-color-muted-discovery-hover",
      description: "Generated discovery muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#705f95",
      cssVar: "--cu-color-muted-discovery-active",
      description: "Generated discovery muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#503877",
      cssVar: "--cu-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#5f517e",
      cssVar: "--cu-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#444548",
      cssVar: "--cu-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--cu-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#35322666",
      cssVar: "--cu-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#85a5dc",
      cssVar: "--cu-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#638cd2",
      cssVar: "--cu-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#61323e",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#b4714b",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#814825",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#c0984d",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#49836f",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#31486f",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#756799",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#4c416a",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#be77a3",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#5a3b4f",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#8fbddf",
      cssVar: "--cu-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#8ab6dd",
      cssVar: "--cu-color-link-active",
      description: "Interactive color for links and linked text. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#5f7bad",
      cssVar: "--cu-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#808182",
      cssVar: "--cu-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#717274",
      cssVar: "--cu-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#575759",
      cssVar: "--cu-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#5abba5",
      cssVar: "--cu-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#dd8b95",
      cssVar: "--cu-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#dd8b95",
      cssVar: "--cu-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#a5bde5",
      cssVar: "--cu-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#b3a5e5",
      cssVar: "--cu-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#939393",
      cssVar: "--cu-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#2c9680",
      cssVar: "--cu-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#2d9c86",
      cssVar: "--cu-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#7fdad2",
      cssVar: "--cu-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#75beaa",
      cssVar: "--cu-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#a87078",
      cssVar: "--cu-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#b1757d",
      cssVar: "--cu-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#e5a6b4",
      cssVar: "--cu-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#d39299",
      cssVar: "--cu-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#a87078",
      cssVar: "--cu-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#b1757d",
      cssVar: "--cu-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#e5a6b4",
      cssVar: "--cu-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#d39299",
      cssVar: "--cu-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--cu-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#aeaeae",
      cssVar: "--cu-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#d9d9d966",
      cssVar: "--cu-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--cu-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#aeaeae",
      cssVar: "--cu-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#d9d9d966",
      cssVar: "--cu-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--cu-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#aeaeae",
      cssVar: "--cu-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#d9d9d966",
      cssVar: "--cu-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#8894a8",
      cssVar: "--cu-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#8f9cb1",
      cssVar: "--cu-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#b9ebeb",
      cssVar: "--cu-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#abbedd",
      cssVar: "--cu-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#908aaa",
      cssVar: "--cu-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#9890b2",
      cssVar: "--cu-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#ecbfec",
      cssVar: "--cu-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#b4abda",
      cssVar: "--cu-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
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
      value: "112px",
      cssVar: "--cu-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-size-37xl",
      description: "A 284px 37xl size step",
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
      value: "144px",
      cssVar: "--cu-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
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
      value: "0.85",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.25",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.85",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (1)",
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
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-checkbox",
      description: "The border radius use for checkbox components",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #fafafa14",
      cssVar: "--cu-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #fafafa14",
      cssVar: "--cu-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #fafafa14",
      cssVar: "--cu-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #fafafa14",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #3be4be26",
      cssVar: "--cu-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #3be4be26",
      cssVar: "--cu-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #3be4be26",
      cssVar: "--cu-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #3be4be26",
      cssVar: "--cu-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2326",
      cssVar: "--cu-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2326",
      cssVar: "--cu-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff26",
      cssVar: "--cu-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff26",
      cssVar: "--cu-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff26",
      cssVar: "--cu-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff26",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da26",
      cssVar: "--cu-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da26",
      cssVar: "--cu-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da26",
      cssVar: "--cu-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da26",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "The title small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--cu-typography-body",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.tight}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "The caption typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "The eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "The code typography variant",
      theme: undefined,
      typography: true
    }
  ],
  "darkHighContrast": [
    {
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--cu-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
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
      value: "#4e515b",
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
      path: "color.ink.emphasis",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#ebebed",
      cssVar: "--cu-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#9a9fa7",
      cssVar: "--cu-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#737383",
      cssVar: "--cu-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#08080a",
      cssVar: "--cu-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#070709",
      cssVar: "--cu-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#050505",
      cssVar: "--cu-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#121215",
      cssVar: "--cu-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#0e0e11",
      cssVar: "--cu-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#1e1f25",
      cssVar: "--cu-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#1a1b20",
      cssVar: "--cu-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#070709",
      cssVar: "--cu-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#f00a45",
      cssVar: "--cu-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--cu-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#4e515b",
      cssVar: "--cu-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.background",
      type: "color",
      value: "#2effd0",
      cssVar: "--cu-color-selection-background",
      description: "Background color of selected text, using the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.foreground",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-selection-foreground",
      description: "Color of selected text, placed on the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#2effd0",
      cssVar: "--cu-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#f00a45",
      cssVar: "--cu-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#f00a45",
      cssVar: "--cu-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#ffb327",
      cssVar: "--cu-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#2de498",
      cssVar: "--cu-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#2de498",
      cssVar: "--cu-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#70a4ff",
      cssVar: "--cu-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#a283f3",
      cssVar: "--cu-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#a7a7a7",
      cssVar: "--cu-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#007f65",
      cssVar: "--cu-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#008f73",
      cssVar: "--cu-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#bbfff9",
      cssVar: "--cu-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#71f9d5",
      cssVar: "--cu-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#ff819a",
      cssVar: "--cu-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#ff6b89",
      cssVar: "--cu-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#7f002a",
      cssVar: "--cu-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#dc2c4e",
      cssVar: "--cu-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#ff819a",
      cssVar: "--cu-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#ff6b89",
      cssVar: "--cu-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#7f002a",
      cssVar: "--cu-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#dc2c4e",
      cssVar: "--cu-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#9c6100",
      cssVar: "--cu-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#ac6d00",
      cssVar: "--cu-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#ffe995",
      cssVar: "--cu-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#ffc060",
      cssVar: "--cu-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#bdffe1",
      cssVar: "--cu-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#a0ffd3",
      cssVar: "--cu-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#006a46",
      cssVar: "--cu-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#5ddba1",
      cssVar: "--cu-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#bdffe1",
      cssVar: "--cu-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#a0ffd3",
      cssVar: "--cu-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#006a46",
      cssVar: "--cu-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#5ddba1",
      cssVar: "--cu-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#b1d9ff",
      cssVar: "--cu-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#a5d1ff",
      cssVar: "--cu-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#0159f1",
      cssVar: "--cu-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#68a0ff",
      cssVar: "--cu-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#f3eeff",
      cssVar: "--cu-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#eae2ff",
      cssVar: "--cu-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#643bc7",
      cssVar: "--cu-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#9c84e3",
      cssVar: "--cu-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#08080a",
      cssVar: "--cu-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#004433",
      cssVar: "--cu-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#25282e",
      cssVar: "--cu-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#121316",
      cssVar: "--cu-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#070709",
      cssVar: "--cu-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#23ad7f",
      cssVar: "--cu-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#1ba175",
      cssVar: "--cu-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#001710",
      cssVar: "--cu-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#176d4f",
      cssVar: "--cu-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#28000d",
      cssVar: "--cu-color-muted-danger",
      description: "Generated danger muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#28000d",
      cssVar: "--cu-color-muted-negative",
      description: "Generated negative muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#4d3300",
      cssVar: "--cu-color-muted-warning",
      description: "Generated warning muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#003121",
      cssVar: "--cu-color-muted-success",
      description: "Generated success muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#003121",
      cssVar: "--cu-color-muted-positive",
      description: "Generated positive muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#00388e",
      cssVar: "--cu-color-muted-info",
      description: "Generated info muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#3f198c",
      cssVar: "--cu-color-muted-discovery",
      description: "Generated discovery muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#73081f",
      cssVar: "--cu-color-muted-danger-hover",
      description: "Generated danger muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#69041c",
      cssVar: "--cu-color-muted-danger-active",
      description: "Generated danger muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#080002",
      cssVar: "--cu-color-muted-danger-inactive",
      description: "Generated danger muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#39030f",
      cssVar: "--cu-color-muted-danger-disabled",
      description: "Generated danger muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#73081f",
      cssVar: "--cu-color-muted-negative-hover",
      description: "Generated negative muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#69041c",
      cssVar: "--cu-color-muted-negative-active",
      description: "Generated negative muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#080002",
      cssVar: "--cu-color-muted-negative-inactive",
      description: "Generated negative muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#39030f",
      cssVar: "--cu-color-muted-negative-disabled",
      description: "Generated negative muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#b17415",
      cssVar: "--cu-color-muted-warning-hover",
      description: "Generated warning muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#a46b0e",
      cssVar: "--cu-color-muted-warning-active",
      description: "Generated warning muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#211300",
      cssVar: "--cu-color-muted-warning-inactive",
      description: "Generated warning muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#6d470d",
      cssVar: "--cu-color-muted-warning-disabled",
      description: "Generated warning muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#1d9261",
      cssVar: "--cu-color-muted-success-hover",
      description: "Generated success muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#168757",
      cssVar: "--cu-color-muted-success-active",
      description: "Generated success muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#000805",
      cssVar: "--cu-color-muted-success-inactive",
      description: "Generated success muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#115739",
      cssVar: "--cu-color-muted-success-disabled",
      description: "Generated success muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#1d9261",
      cssVar: "--cu-color-muted-positive-hover",
      description: "Generated positive muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#168757",
      cssVar: "--cu-color-muted-positive-active",
      description: "Generated positive muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#000805",
      cssVar: "--cu-color-muted-positive-inactive",
      description: "Generated positive muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#115739",
      cssVar: "--cu-color-muted-positive-disabled",
      description: "Generated positive muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#0159f1",
      cssVar: "--cu-color-muted-info-hover",
      description: "Generated info muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#0053e2",
      cssVar: "--cu-color-muted-info-active",
      description: "Generated info muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#001c64",
      cssVar: "--cu-color-muted-info-inactive",
      description: "Generated info muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#003898",
      cssVar: "--cu-color-muted-info-disabled",
      description: "Generated info muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#6036c1",
      cssVar: "--cu-color-muted-discovery-hover",
      description: "Generated discovery muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#5930b8",
      cssVar: "--cu-color-muted-discovery-active",
      description: "Generated discovery muted background for the dark theme (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#230357",
      cssVar: "--cu-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#3c217b",
      cssVar: "--cu-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#08080a",
      cssVar: "--cu-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#737383",
      cssVar: "--cu-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#00000066",
      cssVar: "--cu-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#cbdeff",
      cssVar: "--cu-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#70a4ff",
      cssVar: "--cu-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#1d0309",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#ff5c00",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#471b00",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#ffb01e",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#13825b",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#00163b",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#623dc3",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#1d0f42",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#f976c6",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#1c0815",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#e5f4ff",
      cssVar: "--cu-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#d8edff",
      cssVar: "--cu-color-link-active",
      description: "Interactive color for links and linked text. (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#2c72ed",
      cssVar: "--cu-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#7a7f8c",
      cssVar: "--cu-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#5d616c",
      cssVar: "--cu-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#2a2c32",
      cssVar: "--cu-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#2effd0",
      cssVar: "--cu-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#ffdade",
      cssVar: "--cu-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#ffdade",
      cssVar: "--cu-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#a7a7a7",
      cssVar: "--cu-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--cu-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#007f65",
      cssVar: "--cu-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#008f73",
      cssVar: "--cu-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#bbfff9",
      cssVar: "--cu-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#71f9d5",
      cssVar: "--cu-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#db5669",
      cssVar: "--cu-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#e7687a",
      cssVar: "--cu-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#ffd4d8",
      cssVar: "--cu-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#db5669",
      cssVar: "--cu-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#e7687a",
      cssVar: "--cu-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#ffd4d8",
      cssVar: "--cu-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#e0e0e0",
      cssVar: "--cu-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#e0e0e0",
      cssVar: "--cu-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#e0e0e0",
      cssVar: "--cu-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#92aad4",
      cssVar: "--cu-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#a5bbe1",
      cssVar: "--cu-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#a396d6",
      cssVar: "--cu-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#b5a8e2",
      cssVar: "--cu-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
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
      value: "112px",
      cssVar: "--cu-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-size-37xl",
      description: "A 284px 37xl size step",
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
      value: "144px",
      cssVar: "--cu-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
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
      value: "0.85",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.25",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.85",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (1)",
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
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-checkbox",
      description: "The border radius use for checkbox components",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #fafafa14",
      cssVar: "--cu-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #fafafa14",
      cssVar: "--cu-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #fafafa14",
      cssVar: "--cu-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #fafafa14",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #3be4be26",
      cssVar: "--cu-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #3be4be26",
      cssVar: "--cu-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #3be4be26",
      cssVar: "--cu-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #3be4be26",
      cssVar: "--cu-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2326",
      cssVar: "--cu-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2326",
      cssVar: "--cu-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2326",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff26",
      cssVar: "--cu-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff26",
      cssVar: "--cu-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff26",
      cssVar: "--cu-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff26",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da26",
      cssVar: "--cu-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da26",
      cssVar: "--cu-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da26",
      cssVar: "--cu-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da26",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79126",
      cssVar: "--cu-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79126",
      cssVar: "--cu-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79126",
      cssVar: "--cu-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79126",
      cssVar: "--cu-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5626",
      cssVar: "--cu-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5626",
      cssVar: "--cu-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5626",
      cssVar: "--cu-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5626",
      cssVar: "--cu-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "The title small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--cu-typography-body",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.tight}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "The caption typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "The eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "The code typography variant",
      theme: undefined,
      typography: true
    }
  ],
  "light": [
    {
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--cu-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
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
      value: "#606164",
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
      path: "color.ink.emphasis",
      type: "color",
      value: "#2b2c30",
      cssVar: "--cu-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#606164",
      cssVar: "--cu-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--cu-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#cacacb",
      cssVar: "--cu-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#eaeaea",
      cssVar: "--cu-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#fafafa",
      cssVar: "--cu-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#a0a0a0",
      cssVar: "--cu-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#e1e1e166",
      cssVar: "--cu-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--cu-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#eaeaea66",
      cssVar: "--cu-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#b7b7b7",
      cssVar: "--cu-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#f1f1f166",
      cssVar: "--cu-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--cu-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#c2c2c2",
      cssVar: "--cu-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--cu-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.background",
      type: "color",
      value: "#1fb2a6",
      cssVar: "--cu-color-selection-background",
      description: "Background color of selected text, using the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.foreground",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-selection-foreground",
      description: "Color of selected text, placed on the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#1fb2a6",
      cssVar: "--cu-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#594395",
      cssVar: "--cu-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#232326",
      cssVar: "--cu-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--cu-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--cu-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#008277",
      cssVar: "--cu-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#008a7f",
      cssVar: "--cu-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#5ddfd2",
      cssVar: "--cu-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#4daea4",
      cssVar: "--cu-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#6e0025",
      cssVar: "--cu-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#730029",
      cssVar: "--cu-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#ab3e56",
      cssVar: "--cu-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#843142",
      cssVar: "--cu-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#6e0025",
      cssVar: "--cu-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#730029",
      cssVar: "--cu-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#ab3e56",
      cssVar: "--cu-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#843142",
      cssVar: "--cu-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#573700",
      cssVar: "--cu-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#5d3c00",
      cssVar: "--cu-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#926f36",
      cssVar: "--cu-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#71562a",
      cssVar: "--cu-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#004d36",
      cssVar: "--cu-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#00523b",
      cssVar: "--cu-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#40876e",
      cssVar: "--cu-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#336855",
      cssVar: "--cu-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#004d36",
      cssVar: "--cu-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#00523b",
      cssVar: "--cu-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#40876e",
      cssVar: "--cu-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#336855",
      cssVar: "--cu-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#003590",
      cssVar: "--cu-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#033a96",
      cssVar: "--cu-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#3b72d3",
      cssVar: "--cu-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#2f58a2",
      cssVar: "--cu-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#3f2676",
      cssVar: "--cu-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#432b7b",
      cssVar: "--cu-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#725db2",
      cssVar: "--cu-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#584889",
      cssVar: "--cu-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--cu-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#959595",
      cssVar: "--cu-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--cu-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#f1f1f166",
      cssVar: "--cu-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--cu-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--cu-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#bebebe",
      cssVar: "--cu-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--cu-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#eaeaea",
      cssVar: "--cu-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#68e8db",
      cssVar: "--cu-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#919191",
      cssVar: "--cu-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#cacaca",
      cssVar: "--cu-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--cu-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#eaeaea66",
      cssVar: "--cu-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#08a99e",
      cssVar: "--cu-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#25b4a8",
      cssVar: "--cu-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#9bffff",
      cssVar: "--cu-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#84e3d9",
      cssVar: "--cu-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#e37085",
      cssVar: "--cu-color-muted-danger",
      description: "Generated danger muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#e37085",
      cssVar: "--cu-color-muted-negative",
      description: "Generated negative muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#bd985e",
      cssVar: "--cu-color-muted-warning",
      description: "Generated warning muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#6ab196",
      cssVar: "--cu-color-muted-success",
      description: "Generated success muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#6ab196",
      cssVar: "--cu-color-muted-positive",
      description: "Generated positive muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#659dff",
      cssVar: "--cu-color-muted-info",
      description: "Generated info muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#9e8ae4",
      cssVar: "--cu-color-muted-discovery",
      description: "Generated discovery muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#ae4158",
      cssVar: "--cu-color-muted-danger-hover",
      description: "Generated danger muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#b74960",
      cssVar: "--cu-color-muted-danger-active",
      description: "Generated danger muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#ff9baf",
      cssVar: "--cu-color-muted-danger-inactive",
      description: "Generated danger muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#d67a89",
      cssVar: "--cu-color-muted-danger-disabled",
      description: "Generated danger muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#ae4158",
      cssVar: "--cu-color-muted-negative-hover",
      description: "Generated negative muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#b74960",
      cssVar: "--cu-color-muted-negative-active",
      description: "Generated negative muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#ff9baf",
      cssVar: "--cu-color-muted-negative-inactive",
      description: "Generated negative muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#d67a89",
      cssVar: "--cu-color-muted-negative-disabled",
      description: "Generated negative muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#8c692e",
      cssVar: "--cu-color-muted-warning-hover",
      description: "Generated warning muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#947137",
      cssVar: "--cu-color-muted-warning-active",
      description: "Generated warning muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#ebc489",
      cssVar: "--cu-color-muted-warning-inactive",
      description: "Generated warning muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#b79a6d",
      cssVar: "--cu-color-muted-warning-disabled",
      description: "Generated warning muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#388067",
      cssVar: "--cu-color-muted-success-hover",
      description: "Generated success muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#41896f",
      cssVar: "--cu-color-muted-success-active",
      description: "Generated success muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#96dfc2",
      cssVar: "--cu-color-muted-success-inactive",
      description: "Generated success muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#77ae98",
      cssVar: "--cu-color-muted-success-disabled",
      description: "Generated success muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#388067",
      cssVar: "--cu-color-muted-positive-hover",
      description: "Generated positive muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#41896f",
      cssVar: "--cu-color-muted-positive-active",
      description: "Generated positive muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#96dfc2",
      cssVar: "--cu-color-muted-positive-inactive",
      description: "Generated positive muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#77ae98",
      cssVar: "--cu-color-muted-positive-disabled",
      description: "Generated positive muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#376cc9",
      cssVar: "--cu-color-muted-info-hover",
      description: "Generated info muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#3f74d3",
      cssVar: "--cu-color-muted-info-active",
      description: "Generated info muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#90cbff",
      cssVar: "--cu-color-muted-info-inactive",
      description: "Generated info muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#729fec",
      cssVar: "--cu-color-muted-info-disabled",
      description: "Generated info muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#715bb1",
      cssVar: "--cu-color-muted-discovery-hover",
      description: "Generated discovery muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#7863ba",
      cssVar: "--cu-color-muted-discovery-active",
      description: "Generated discovery muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#c9b5ff",
      cssVar: "--cu-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#9d8ed6",
      cssVar: "--cu-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--cu-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#1a1c1f66",
      cssVar: "--cu-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#606164",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#eaeaea",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#6da2ff",
      cssVar: "--cu-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#8e223e",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#dd6c89",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#9f4000",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#f19f71",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#765417",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#f8b740",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#216b53",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#74d59f",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#2055b3",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#6da2ff",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#594395",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#a690e1",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#904272",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#eb89c5",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#003590",
      cssVar: "--cu-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#033a96",
      cssVar: "--cu-color-link-active",
      description: "Interactive color for links and linked text. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#3b72d3",
      cssVar: "--cu-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#7c7c7d",
      cssVar: "--cu-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#9d9d9e",
      cssVar: "--cu-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#e1e1e2",
      cssVar: "--cu-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#151518",
      cssVar: "--cu-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#1fb2a6",
      cssVar: "--cu-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#2f000c",
      cssVar: "--cu-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#2f000c",
      cssVar: "--cu-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#2d1c00",
      cssVar: "--cu-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#002b1e",
      cssVar: "--cu-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#002b1e",
      cssVar: "--cu-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#001c54",
      cssVar: "--cu-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#20004c",
      cssVar: "--cu-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#232326",
      cssVar: "--cu-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--cu-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--cu-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--cu-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#008277",
      cssVar: "--cu-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#008a7f",
      cssVar: "--cu-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#5ddfd2",
      cssVar: "--cu-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#4daea4",
      cssVar: "--cu-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#3b0916",
      cssVar: "--cu-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#390714",
      cssVar: "--cu-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#240005",
      cssVar: "--cu-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#2b050e",
      cssVar: "--cu-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#3b0916",
      cssVar: "--cu-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#390714",
      cssVar: "--cu-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#240005",
      cssVar: "--cu-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#2b050e",
      cssVar: "--cu-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#3b290c",
      cssVar: "--cu-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#392709",
      cssVar: "--cu-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#211100",
      cssVar: "--cu-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#2a1d07",
      cssVar: "--cu-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#001d11",
      cssVar: "--cu-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#001f13",
      cssVar: "--cu-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#0f382a",
      cssVar: "--cu-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#0b2a1f",
      cssVar: "--cu-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#001d11",
      cssVar: "--cu-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#001f13",
      cssVar: "--cu-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#0f382a",
      cssVar: "--cu-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#0b2a1f",
      cssVar: "--cu-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#000c44",
      cssVar: "--cu-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#000f47",
      cssVar: "--cu-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#0a2a63",
      cssVar: "--cu-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#071f4a",
      cssVar: "--cu-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#2b105a",
      cssVar: "--cu-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#290d58",
      cssVar: "--cu-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#17003f",
      cssVar: "--cu-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#1e0a42",
      cssVar: "--cu-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
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
      value: "112px",
      cssVar: "--cu-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-size-37xl",
      description: "A 284px 37xl size step",
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
      value: "144px",
      cssVar: "--cu-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
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
      value: "0.85",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.25",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.85",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (1)",
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
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-checkbox",
      description: "The border radius use for checkbox components",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #15151814",
      cssVar: "--cu-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #15151814",
      cssVar: "--cu-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #15151814",
      cssVar: "--cu-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #15151814",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #1fb2a626",
      cssVar: "--cu-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1fb2a626",
      cssVar: "--cu-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1fb2a626",
      cssVar: "--cu-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1fb2a626",
      cssVar: "--cu-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541726",
      cssVar: "--cu-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541726",
      cssVar: "--cu-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541726",
      cssVar: "--cu-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541726",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b326",
      cssVar: "--cu-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b326",
      cssVar: "--cu-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b326",
      cssVar: "--cu-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b326",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439526",
      cssVar: "--cu-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439526",
      cssVar: "--cu-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439526",
      cssVar: "--cu-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439526",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "The title small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--cu-typography-body",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.tight}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "The caption typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "The eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "The code typography variant",
      theme: undefined,
      typography: true
    }
  ],
  "lightDimmed": [
    {
      path: "color.transparent",
      type: "color",
      value: "#d9d9d900",
      cssVar: "--cu-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
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
      value: "#6a6a6c",
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
      path: "color.ink.emphasis",
      type: "color",
      value: "#444548",
      cssVar: "--cu-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#6a6a6c",
      cssVar: "--cu-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--cu-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--cu-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#cacaca",
      cssVar: "--cu-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#969696",
      cssVar: "--cu-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#9e9e9e",
      cssVar: "--cu-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#c4c4c466",
      cssVar: "--cu-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#9a9a9a",
      cssVar: "--cu-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#cacaca66",
      cssVar: "--cu-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#9e9e9e",
      cssVar: "--cu-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--cu-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#cfcfcf66",
      cssVar: "--cu-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--cu-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#aeaeae",
      cssVar: "--cu-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#d9d9d966",
      cssVar: "--cu-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--cu-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.background",
      type: "color",
      value: "#449a93",
      cssVar: "--cu-color-selection-background",
      description: "Background color of selected text, using the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.foreground",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-selection-foreground",
      description: "Color of selected text, placed on the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#449a93",
      cssVar: "--cu-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#675a8a",
      cssVar: "--cu-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#3e3e41",
      cssVar: "--cu-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--cu-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--cu-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#26827a",
      cssVar: "--cu-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#27867f",
      cssVar: "--cu-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#6ebcb4",
      cssVar: "--cu-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#639993",
      cssVar: "--cu-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#77233f",
      cssVar: "--cu-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#7a2342",
      cssVar: "--cu-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#975967",
      cssVar: "--cu-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#7f4c56",
      cssVar: "--cu-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#77233f",
      cssVar: "--cu-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#7a2342",
      cssVar: "--cu-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#975967",
      cssVar: "--cu-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#7f4c56",
      cssVar: "--cu-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#6a4f1f",
      cssVar: "--cu-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#6e5220",
      cssVar: "--cu-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#887351",
      cssVar: "--cu-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#746245",
      cssVar: "--cu-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#1d6550",
      cssVar: "--cu-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#1e6853",
      cssVar: "--cu-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#578172",
      cssVar: "--cu-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#4b6e61",
      cssVar: "--cu-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#1d6550",
      cssVar: "--cu-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#1e6853",
      cssVar: "--cu-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#578172",
      cssVar: "--cu-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#4b6e61",
      cssVar: "--cu-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#284c89",
      cssVar: "--cu-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#2b508c",
      cssVar: "--cu-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#5a79af",
      cssVar: "--cu-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#4e6691",
      cssVar: "--cu-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#534377",
      cssVar: "--cu-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#56477a",
      cssVar: "--cu-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#796d9d",
      cssVar: "--cu-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#665c82",
      cssVar: "--cu-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#8f8f8f",
      cssVar: "--cu-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--cu-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#cfcfcf66",
      cssVar: "--cu-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--cu-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--cu-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#ababab",
      cssVar: "--cu-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--cu-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#cacaca",
      cssVar: "--cu-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#74c4bc",
      cssVar: "--cu-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#8c8c8c",
      cssVar: "--cu-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--cu-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--cu-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#cacaca66",
      cssVar: "--cu-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#32968f",
      cssVar: "--cu-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#499c95",
      cssVar: "--cu-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#8ddede",
      cssVar: "--cu-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#84c3bd",
      cssVar: "--cu-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#c17986",
      cssVar: "--cu-color-muted-danger",
      description: "Generated danger muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#c17986",
      cssVar: "--cu-color-muted-negative",
      description: "Generated negative muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#a48f6e",
      cssVar: "--cu-color-muted-warning",
      description: "Generated warning muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#759e8e",
      cssVar: "--cu-color-muted-success",
      description: "Generated success muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#759e8e",
      cssVar: "--cu-color-muted-positive",
      description: "Generated positive muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#7095d6",
      cssVar: "--cu-color-muted-info",
      description: "Generated info muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#9588c5",
      cssVar: "--cu-color-muted-discovery",
      description: "Generated discovery muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#985b68",
      cssVar: "--cu-color-muted-danger-hover",
      description: "Generated danger muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#9e626e",
      cssVar: "--cu-color-muted-danger-active",
      description: "Generated danger muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#de8d9e",
      cssVar: "--cu-color-muted-danger-inactive",
      description: "Generated danger muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#b97f88",
      cssVar: "--cu-color-muted-danger-disabled",
      description: "Generated danger muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#985b68",
      cssVar: "--cu-color-muted-negative-hover",
      description: "Generated negative muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#9e626e",
      cssVar: "--cu-color-muted-negative-active",
      description: "Generated negative muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#de8d9e",
      cssVar: "--cu-color-muted-negative-inactive",
      description: "Generated negative muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#b97f88",
      cssVar: "--cu-color-muted-negative-disabled",
      description: "Generated negative muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#846f4b",
      cssVar: "--cu-color-muted-warning-hover",
      description: "Generated warning muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#897452",
      cssVar: "--cu-color-muted-warning-active",
      description: "Generated warning muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#caaf87",
      cssVar: "--cu-color-muted-warning-inactive",
      description: "Generated warning muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#a29177",
      cssVar: "--cu-color-muted-warning-disabled",
      description: "Generated warning muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#517d6d",
      cssVar: "--cu-color-muted-success-hover",
      description: "Generated success muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#588273",
      cssVar: "--cu-color-muted-success-active",
      description: "Generated success muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#90c2ae",
      cssVar: "--cu-color-muted-success-inactive",
      description: "Generated success muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#7d9d90",
      cssVar: "--cu-color-muted-success-disabled",
      description: "Generated success muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#517d6d",
      cssVar: "--cu-color-muted-positive-hover",
      description: "Generated positive muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#588273",
      cssVar: "--cu-color-muted-positive-active",
      description: "Generated positive muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#90c2ae",
      cssVar: "--cu-color-muted-positive-inactive",
      description: "Generated positive muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#7d9d90",
      cssVar: "--cu-color-muted-positive-disabled",
      description: "Generated positive muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#5875a8",
      cssVar: "--cu-color-muted-info-hover",
      description: "Generated info muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#5c7ab0",
      cssVar: "--cu-color-muted-info-active",
      description: "Generated info muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#87b5dc",
      cssVar: "--cu-color-muted-info-inactive",
      description: "Generated info muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#7996c8",
      cssVar: "--cu-color-muted-info-disabled",
      description: "Generated info muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#786c9c",
      cssVar: "--cu-color-muted-discovery-hover",
      description: "Generated discovery muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#7d71a3",
      cssVar: "--cu-color-muted-discovery-active",
      description: "Generated discovery muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#af9ce2",
      cssVar: "--cu-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#958bbb",
      cssVar: "--cu-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--cu-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--cu-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#373a3d66",
      cssVar: "--cu-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#6a6a6c",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#cacaca",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#7598d7",
      cssVar: "--cu-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#864254",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#bc7788",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#92542a",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#cc9678",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#786137",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#caa45c",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#3e7160",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#7bb796",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#45649b",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#7598d7",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#675a8a",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#9b8cc3",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#875975",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#ca87b0",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#284c89",
      cssVar: "--cu-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#2b508c",
      cssVar: "--cu-color-link-active",
      description: "Interactive color for links and linked text. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#5a79af",
      cssVar: "--cu-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--cu-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#949495",
      cssVar: "--cu-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#c4c4c5",
      cssVar: "--cu-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#343438",
      cssVar: "--cu-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#449a93",
      cssVar: "--cu-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#551928",
      cssVar: "--cu-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#551928",
      cssVar: "--cu-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#543d18",
      cssVar: "--cu-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#185341",
      cssVar: "--cu-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#185341",
      cssVar: "--cu-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#1e3769",
      cssVar: "--cu-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#3b1d65",
      cssVar: "--cu-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#3e3e41",
      cssVar: "--cu-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#2e2e30",
      cssVar: "--cu-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--cu-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--cu-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#26827a",
      cssVar: "--cu-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#27867f",
      cssVar: "--cu-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#6ebcb4",
      cssVar: "--cu-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#639993",
      cssVar: "--cu-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#572532",
      cssVar: "--cu-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#572330",
      cssVar: "--cu-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#4f171f",
      cssVar: "--cu-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#4f1f2a",
      cssVar: "--cu-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#572532",
      cssVar: "--cu-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#572330",
      cssVar: "--cu-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#4f171f",
      cssVar: "--cu-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#4f1f2a",
      cssVar: "--cu-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#564428",
      cssVar: "--cu-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#564325",
      cssVar: "--cu-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#4d3316",
      cssVar: "--cu-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#4d3d22",
      cssVar: "--cu-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#164b35",
      cssVar: "--cu-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#164c37",
      cssVar: "--cu-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#2b5345",
      cssVar: "--cu-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#274b3e",
      cssVar: "--cu-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#164b35",
      cssVar: "--cu-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#164c37",
      cssVar: "--cu-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#2b5345",
      cssVar: "--cu-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#274b3e",
      cssVar: "--cu-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#1c2860",
      cssVar: "--cu-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#1c2b62",
      cssVar: "--cu-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#2a436f",
      cssVar: "--cu-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#243a61",
      cssVar: "--cu-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#442e68",
      cssVar: "--cu-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#422c68",
      cssVar: "--cu-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#331b5d",
      cssVar: "--cu-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#39275b",
      cssVar: "--cu-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
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
      value: "112px",
      cssVar: "--cu-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-size-37xl",
      description: "A 284px 37xl size step",
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
      value: "144px",
      cssVar: "--cu-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
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
      value: "0.85",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.25",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.85",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (1)",
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
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-checkbox",
      description: "The border radius use for checkbox components",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #15151814",
      cssVar: "--cu-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #15151814",
      cssVar: "--cu-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #15151814",
      cssVar: "--cu-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #15151814",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #1fb2a626",
      cssVar: "--cu-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1fb2a626",
      cssVar: "--cu-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1fb2a626",
      cssVar: "--cu-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1fb2a626",
      cssVar: "--cu-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541726",
      cssVar: "--cu-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541726",
      cssVar: "--cu-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541726",
      cssVar: "--cu-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541726",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b326",
      cssVar: "--cu-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b326",
      cssVar: "--cu-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b326",
      cssVar: "--cu-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b326",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439526",
      cssVar: "--cu-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439526",
      cssVar: "--cu-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439526",
      cssVar: "--cu-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439526",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "The title small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--cu-typography-body",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.tight}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "The caption typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "The eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "The code typography variant",
      theme: undefined,
      typography: true
    }
  ],
  "lightHighContrast": [
    {
      path: "color.transparent",
      type: "color",
      value: "#ffffff00",
      cssVar: "--cu-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
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
      value: "#4e515b",
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
      path: "color.ink.emphasis",
      type: "color",
      value: "#08080a",
      cssVar: "--cu-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#4e515b",
      cssVar: "--cu-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--cu-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#ebebed",
      cssVar: "--cu-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#afafaf",
      cssVar: "--cu-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#bfbfbf",
      cssVar: "--cu-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#b7b7b7",
      cssVar: "--cu-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#bfbfbf",
      cssVar: "--cu-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#d0d0d0",
      cssVar: "--cu-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--cu-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#e0e0e0",
      cssVar: "--cu-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--cu-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.background",
      type: "color",
      value: "#00bcad",
      cssVar: "--cu-color-selection-background",
      description: "Background color of selected text, using the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.selection.foreground",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-selection-foreground",
      description: "Color of selected text, placed on the brand accent.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#00bcad",
      cssVar: "--cu-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#492b9b",
      cssVar: "--cu-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#004a44",
      cssVar: "--cu-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#00554f",
      cssVar: "--cu-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#5cfbeb",
      cssVar: "--cu-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#35c4b5",
      cssVar: "--cu-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#2d000f",
      cssVar: "--cu-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#340013",
      cssVar: "--cu-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#bc2445",
      cssVar: "--cu-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#7b182d",
      cssVar: "--cu-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#2d000f",
      cssVar: "--cu-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#340013",
      cssVar: "--cu-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#bc2445",
      cssVar: "--cu-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#7b182d",
      cssVar: "--cu-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#0b0700",
      cssVar: "--cu-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#140d00",
      cssVar: "--cu-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#92661d",
      cssVar: "--cu-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#5c4012",
      cssVar: "--cu-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#000403",
      cssVar: "--cu-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#298565",
      cssVar: "--cu-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#1b533f",
      cssVar: "--cu-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#000403",
      cssVar: "--cu-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#298565",
      cssVar: "--cu-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#1b533f",
      cssVar: "--cu-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#00235e",
      cssVar: "--cu-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#00286b",
      cssVar: "--cu-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#216df4",
      cssVar: "--cu-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#1449a9",
      cssVar: "--cu-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#280e61",
      cssVar: "--cu-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#2d136b",
      cssVar: "--cu-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#6c4ec9",
      cssVar: "--cu-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#48328a",
      cssVar: "--cu-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#9f9f9f",
      cssVar: "--cu-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--cu-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#dadada",
      cssVar: "--cu-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#75fff1",
      cssVar: "--cu-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#999999",
      cssVar: "--cu-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#ececec",
      cssVar: "--cu-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--cu-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#008e84",
      cssVar: "--cu-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#06c2b2",
      cssVar: "--cu-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#e1ffff",
      cssVar: "--cu-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#9cfaf0",
      cssVar: "--cu-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#fc7d94",
      cssVar: "--cu-color-muted-danger",
      description: "Generated danger muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#fc7d94",
      cssVar: "--cu-color-muted-negative",
      description: "Generated negative muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#d6a252",
      cssVar: "--cu-color-muted-warning",
      description: "Generated warning muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#61c6a0",
      cssVar: "--cu-color-muted-success",
      description: "Generated success muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#61c6a0",
      cssVar: "--cu-color-muted-positive",
      description: "Generated positive muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#92baff",
      cssVar: "--cu-color-muted-info",
      description: "Generated info muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#b9a6fa",
      cssVar: "--cu-color-muted-discovery",
      description: "Generated discovery muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#c12747",
      cssVar: "--cu-color-muted-danger-hover",
      description: "Generated danger muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#d13051",
      cssVar: "--cu-color-muted-danger-active",
      description: "Generated danger muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#ffe1e7",
      cssVar: "--cu-color-muted-danger-inactive",
      description: "Generated danger muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#ef8697",
      cssVar: "--cu-color-muted-danger-disabled",
      description: "Generated danger muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#c12747",
      cssVar: "--cu-color-muted-negative-hover",
      description: "Generated negative muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#d13051",
      cssVar: "--cu-color-muted-negative-active",
      description: "Generated negative muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#ffe1e7",
      cssVar: "--cu-color-muted-negative-inactive",
      description: "Generated negative muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#ef8697",
      cssVar: "--cu-color-muted-negative-disabled",
      description: "Generated negative muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#865c15",
      cssVar: "--cu-color-muted-warning-hover",
      description: "Generated warning muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#96691e",
      cssVar: "--cu-color-muted-warning-active",
      description: "Generated warning muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#ffddaa",
      cssVar: "--cu-color-muted-warning-inactive",
      description: "Generated warning muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#cda567",
      cssVar: "--cu-color-muted-warning-disabled",
      description: "Generated warning muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#207859",
      cssVar: "--cu-color-muted-success-hover",
      description: "Generated success muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#2a8866",
      cssVar: "--cu-color-muted-success-active",
      description: "Generated success muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#b5f5dc",
      cssVar: "--cu-color-muted-success-inactive",
      description: "Generated success muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#74c2a3",
      cssVar: "--cu-color-muted-success-disabled",
      description: "Generated success muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#207859",
      cssVar: "--cu-color-muted-positive-hover",
      description: "Generated positive muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#2a8866",
      cssVar: "--cu-color-muted-positive-active",
      description: "Generated positive muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#b5f5dc",
      cssVar: "--cu-color-muted-positive-inactive",
      description: "Generated positive muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#74c2a3",
      cssVar: "--cu-color-muted-positive-disabled",
      description: "Generated positive muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#1864e9",
      cssVar: "--cu-color-muted-info-hover",
      description: "Generated info muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#2770f3",
      cssVar: "--cu-color-muted-info-active",
      description: "Generated info muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#d1e9ff",
      cssVar: "--cu-color-muted-info-inactive",
      description: "Generated info muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#8ab5ff",
      cssVar: "--cu-color-muted-info-disabled",
      description: "Generated info muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#6a4ac7",
      cssVar: "--cu-color-muted-discovery-hover",
      description: "Generated discovery muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#7659d2",
      cssVar: "--cu-color-muted-discovery-active",
      description: "Generated discovery muted background for the light theme (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#b3a4ee",
      cssVar: "--cu-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--cu-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#00000066",
      cssVar: "--cu-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--cu-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--cu-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--cu-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--cu-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--cu-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--cu-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--cu-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--cu-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#4e515b",
      cssVar: "--cu-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--cu-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#840929",
      cssVar: "--cu-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#f77395",
      cssVar: "--cu-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#742f00",
      cssVar: "--cu-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#ffb890",
      cssVar: "--cu-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#583902",
      cssVar: "--cu-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#ffc253",
      cssVar: "--cu-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#0a4e38",
      cssVar: "--cu-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#7ceeaf",
      cssVar: "--cu-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#0145be",
      cssVar: "--cu-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--cu-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#492b9b",
      cssVar: "--cu-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#c1adf7",
      cssVar: "--cu-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#932b6b",
      cssVar: "--cu-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#ffaade",
      cssVar: "--cu-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#00235e",
      cssVar: "--cu-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#00286b",
      cssVar: "--cu-color-link-active",
      description: "Interactive color for links and linked text. (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#216df4",
      cssVar: "--cu-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#747482",
      cssVar: "--cu-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#a6a6b0",
      cssVar: "--cu-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--cu-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#00bcad",
      cssVar: "--cu-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#000207",
      cssVar: "--cu-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#004a44",
      cssVar: "--cu-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#00554f",
      cssVar: "--cu-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#5cfbeb",
      cssVar: "--cu-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#35c4b5",
      cssVar: "--cu-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 19% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#00102b",
      cssVar: "--cu-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#000103",
      cssVar: "--cu-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#0e0027",
      cssVar: "--cu-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#0c0020",
      cssVar: "--cu-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 19% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--cu-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
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
      value: "112px",
      cssVar: "--cu-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--cu-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--cu-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--cu-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--cu-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--cu-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--cu-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--cu-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--cu-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--cu-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--cu-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--cu-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--cu-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--cu-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--cu-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--cu-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--cu-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--cu-size-37xl",
      description: "A 284px 37xl size step",
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
      value: "144px",
      cssVar: "--cu-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--cu-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--cu-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--cu-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
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
      value: "0.85",
      cssVar: "--cu-line-height-none",
      description: "No extra line height (0.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-tight",
      description: "Tight line height (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.25",
      cssVar: "--cu-line-height-snug",
      description: "Snug line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.375",
      cssVar: "--cu-line-height-normal",
      description: "Normal line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-relaxed",
      description: "Relaxed line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.85",
      cssVar: "--cu-line-height-loose",
      description: "Loose line height (1.85)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.428571",
      cssVar: "--cu-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.5",
      cssVar: "--cu-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.555556",
      cssVar: "--cu-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.4",
      cssVar: "--cu-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.333333",
      cssVar: "--cu-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "1.2",
      cssVar: "--cu-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "1.111111",
      cssVar: "--cu-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-5xl",
      description: "Line height for text-5xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-6xl",
      description: "Line height for text-6xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-7xl",
      description: "Line height for text-7xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-8xl",
      description: "Line height for text-8xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-9xl",
      description: "Line height for text-9xl (1)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "1",
      cssVar: "--cu-line-height-10xl",
      description: "Line height for text-10xl (1)",
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
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--cu-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.checkbox",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-checkbox",
      description: "The border radius use for checkbox components",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-xl)",
      cssVar: "--cu-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-zero)",
      cssVar: "--cu-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-4xl)",
      cssVar: "--cu-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--cu-border-radius-tooltip",
      description: "The border radius use for tooltips",
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
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #15151814",
      cssVar: "--cu-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #15151814",
      cssVar: "--cu-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #15151814",
      cssVar: "--cu-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #15151814",
      cssVar: "--cu-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #1fb2a626",
      cssVar: "--cu-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1fb2a626",
      cssVar: "--cu-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1fb2a626",
      cssVar: "--cu-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1fb2a626",
      cssVar: "--cu-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541726",
      cssVar: "--cu-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541726",
      cssVar: "--cu-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541726",
      cssVar: "--cu-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541726",
      cssVar: "--cu-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b326",
      cssVar: "--cu-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b326",
      cssVar: "--cu-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b326",
      cssVar: "--cu-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b326",
      cssVar: "--cu-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439526",
      cssVar: "--cu-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439526",
      cssVar: "--cu-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439526",
      cssVar: "--cu-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439526",
      cssVar: "--cu-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5326",
      cssVar: "--cu-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5326",
      cssVar: "--cu-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5326",
      cssVar: "--cu-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5326",
      cssVar: "--cu-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e26",
      cssVar: "--cu-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e26",
      cssVar: "--cu-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e26",
      cssVar: "--cu-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e26",
      cssVar: "--cu-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-lg",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-lg",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.title-sm",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xxs}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-title-sm",
      description: "The title small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--cu-typography-body",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.caption",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.tight}\",\"fontStyle\":\"italic\"}",
      cssVar: "--cu-typography-caption",
      description: "The caption typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow",
      type: "typography",
      value: "{\"fontFamily\":[\"Storm Sans\",\"-apple-system\",\"BlinkMacSystemFont\",\"system-ui\",\"Segoe UI\",\"Roboto\",\"Helvetica Neue\",\"Arial\",\"sans-serif\"],\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--cu-typography-eyebrow",
      description: "The eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Google Sans Code\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--cu-typography-code",
      description: "The code typography variant",
      theme: undefined,
      typography: true
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
