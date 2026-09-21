import type { CSSProperties, ReactElement } from "react";
import { useThemeVariant } from "./ThemeVariant";


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
      cssVar: "--rw-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.black",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#fafafa",
      cssVar: "--rw-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--rw-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#eaeaea",
      cssVar: "--rw-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--rw-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#cacacb",
      cssVar: "--rw-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--rw-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#959698",
      cssVar: "--rw-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#7b7b7e",
      cssVar: "--rw-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#606164",
      cssVar: "--rw-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#46464a",
      cssVar: "--rw-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#2b2c30",
      cssVar: "--rw-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#242528",
      cssVar: "--rw-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#1f1f21",
      cssVar: "--rw-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#e2819a",
      cssVar: "--rw-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#dd6c89",
      cssVar: "--rw-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#d95778",
      cssVar: "--rw-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#d44267",
      cssVar: "--rw-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#cf2d56",
      cssVar: "--rw-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#ae284a",
      cssVar: "--rw-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#8e223e",
      cssVar: "--rw-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#6f1c31",
      cssVar: "--rw-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#501524",
      cssVar: "--rw-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#f6c3a7",
      cssVar: "--rw-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#f4b18c",
      cssVar: "--rw-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#f19f71",
      cssVar: "--rw-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ef8c56",
      cssVar: "--rw-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ec7a3b",
      cssVar: "--rw-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#df6520",
      cssVar: "--rw-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#bf520b",
      cssVar: "--rw-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#9f4000",
      cssVar: "--rw-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#803000",
      cssVar: "--rw-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#facd7b",
      cssVar: "--rw-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#f9c25e",
      cssVar: "--rw-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#f8b740",
      cssVar: "--rw-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#f7ac23",
      cssVar: "--rw-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#f0a824",
      cssVar: "--rw-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#df9d24",
      cssVar: "--rw-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#c58c22",
      cssVar: "--rw-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a2731e",
      cssVar: "--rw-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#765417",
      cssVar: "--rw-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#d1f1d6",
      cssVar: "--rw-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#a2e3b6",
      cssVar: "--rw-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#74d59f",
      cssVar: "--rw-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#45c791",
      cssVar: "--rw-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#38a97e",
      cssVar: "--rw-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#2c8a69",
      cssVar: "--rw-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#216b53",
      cssVar: "--rw-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#164a3c",
      cssVar: "--rw-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#0c2a22",
      cssVar: "--rw-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#abcaff",
      cssVar: "--rw-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#8cb6ff",
      cssVar: "--rw-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#6da2ff",
      cssVar: "--rw-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#4d8eff",
      cssVar: "--rw-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#2e7aff",
      cssVar: "--rw-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#2768d9",
      cssVar: "--rw-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#2055b3",
      cssVar: "--rw-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#19438c",
      cssVar: "--rw-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#123166",
      cssVar: "--rw-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#cec2ee",
      cssVar: "--rw-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#baa9e8",
      cssVar: "--rw-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#a690e1",
      cssVar: "--rw-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#9277da",
      cssVar: "--rw-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#7f64c4",
      cssVar: "--rw-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#6c53ad",
      cssVar: "--rw-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#594395",
      cssVar: "--rw-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#47347c",
      cssVar: "--rw-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#362661",
      cssVar: "--rw-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#f5c7e4",
      cssVar: "--rw-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#f49ed1",
      cssVar: "--rw-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#eb89c5",
      cssVar: "--rw-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#e774bb",
      cssVar: "--rw-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#e171b7",
      cssVar: "--rw-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#df6db3",
      cssVar: "--rw-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#c25c9b",
      cssVar: "--rw-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#904272",
      cssVar: "--rw-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#482039",
      cssVar: "--rw-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.emphasis",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--rw-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#cacacb",
      cssVar: "--rw-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#959698",
      cssVar: "--rw-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#7b7b7e",
      cssVar: "--rw-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#1f1f21",
      cssVar: "--rw-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#242528",
      cssVar: "--rw-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#2b2c30",
      cssVar: "--rw-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#141415",
      cssVar: "--rw-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#101011",
      cssVar: "--rw-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#060607",
      cssVar: "--rw-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#1f1f22",
      cssVar: "--rw-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#1a1a1d",
      cssVar: "--rw-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#0c0c0f",
      cssVar: "--rw-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--rw-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#2c2c2e",
      cssVar: "--rw-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#252527",
      cssVar: "--rw-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#141416",
      cssVar: "--rw-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#1f1f21",
      cssVar: "--rw-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#333437",
      cssVar: "--rw-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#2b2c2f",
      cssVar: "--rw-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#18191b",
      cssVar: "--rw-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#242527",
      cssVar: "--rw-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#3c3d41",
      cssVar: "--rw-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#333438",
      cssVar: "--rw-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#1d1e22",
      cssVar: "--rw-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#2b2c2f",
      cssVar: "--rw-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#cf2d56",
      cssVar: "--rw-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#2e7aff",
      cssVar: "--rw-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#606164",
      cssVar: "--rw-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#fafafa",
      cssVar: "--rw-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#3be4be",
      cssVar: "--rw-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#cf2d56",
      cssVar: "--rw-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#cf2d56",
      cssVar: "--rw-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#f7ac23",
      cssVar: "--rw-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#45c791",
      cssVar: "--rw-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#45c791",
      cssVar: "--rw-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#4d8eff",
      cssVar: "--rw-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#9277da",
      cssVar: "--rw-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#9b9b9b",
      cssVar: "--rw-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#00a785",
      cssVar: "--rw-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#00c5a1",
      cssVar: "--rw-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#81fff4",
      cssVar: "--rw-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#6adfc0",
      cssVar: "--rw-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#fd5b7b",
      cssVar: "--rw-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#e64568",
      cssVar: "--rw-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#a70037",
      cssVar: "--rw-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#c0455d",
      cssVar: "--rw-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#fd5b7b",
      cssVar: "--rw-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#e64568",
      cssVar: "--rw-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#a70037",
      cssVar: "--rw-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#c0455d",
      cssVar: "--rw-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#bb7400",
      cssVar: "--rw-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#d98f00",
      cssVar: "--rw-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#ffe067",
      cssVar: "--rw-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#ecb055",
      cssVar: "--rw-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#82ffc6",
      cssVar: "--rw-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#65e3ab",
      cssVar: "--rw-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#009865",
      cssVar: "--rw-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#64c297",
      cssVar: "--rw-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#82ffc6",
      cssVar: "--rw-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#65e3ab",
      cssVar: "--rw-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#009865",
      cssVar: "--rw-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#64c297",
      cssVar: "--rw-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#7abeff",
      cssVar: "--rw-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#63a6ff",
      cssVar: "--rw-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#2564d1",
      cssVar: "--rw-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#5d91ea",
      cssVar: "--rw-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#bea4ff",
      cssVar: "--rw-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#a88df2",
      cssVar: "--rw-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#6d51b0",
      cssVar: "--rw-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#907ccb",
      cssVar: "--rw-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#232326",
      cssVar: "--rw-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--rw-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#1f1f22",
      cssVar: "--rw-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#1a1a1d",
      cssVar: "--rw-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#0c0c0f",
      cssVar: "--rw-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--rw-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#1f1f22",
      cssVar: "--rw-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#1a1a1d",
      cssVar: "--rw-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#0c0c0f",
      cssVar: "--rw-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--rw-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#2b2c30",
      cssVar: "--rw-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#007e5e",
      cssVar: "--rw-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#414347",
      cssVar: "--rw-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#333438",
      cssVar: "--rw-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#2b2c2f",
      cssVar: "--rw-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#3da280",
      cssVar: "--rw-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#26906f",
      cssVar: "--rw-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#005f41",
      cssVar: "--rw-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#2f7b61",
      cssVar: "--rw-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#6b0023",
      cssVar: "--rw-color-muted-danger",
      description: "Generated danger muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#6b0023",
      cssVar: "--rw-color-muted-negative",
      description: "Generated negative muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#845800",
      cssVar: "--rw-color-muted-warning",
      description: "Generated warning muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#00714c",
      cssVar: "--rw-color-muted-success",
      description: "Generated success muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#00714c",
      cssVar: "--rw-color-muted-positive",
      description: "Generated positive muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#0146b0",
      cssVar: "--rw-color-muted-info",
      description: "Generated info muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#51328f",
      cssVar: "--rw-color-muted-discovery",
      description: "Generated discovery muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#842036",
      cssVar: "--rw-color-muted-danger-hover",
      description: "Generated danger muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#77122c",
      cssVar: "--rw-color-muted-danger-active",
      description: "Generated danger muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#550013",
      cssVar: "--rw-color-muted-danger-inactive",
      description: "Generated danger muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#621727",
      cssVar: "--rw-color-muted-danger-disabled",
      description: "Generated danger muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#842036",
      cssVar: "--rw-color-muted-negative-hover",
      description: "Generated negative muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#77122c",
      cssVar: "--rw-color-muted-negative-active",
      description: "Generated negative muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#550013",
      cssVar: "--rw-color-muted-negative-inactive",
      description: "Generated negative muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#621727",
      cssVar: "--rw-color-muted-negative-disabled",
      description: "Generated negative muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#a77931",
      cssVar: "--rw-color-muted-warning-hover",
      description: "Generated warning muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#95681d",
      cssVar: "--rw-color-muted-warning-active",
      description: "Generated warning muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#663c00",
      cssVar: "--rw-color-muted-warning-inactive",
      description: "Generated warning muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#7e5b25",
      cssVar: "--rw-color-muted-warning-disabled",
      description: "Generated warning muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#36926b",
      cssVar: "--rw-color-muted-success-hover",
      description: "Generated success muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#21815b",
      cssVar: "--rw-color-muted-success-active",
      description: "Generated success muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#005532",
      cssVar: "--rw-color-muted-success-inactive",
      description: "Generated success muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#296e50",
      cssVar: "--rw-color-muted-success-disabled",
      description: "Generated success muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#36926b",
      cssVar: "--rw-color-muted-positive-hover",
      description: "Generated positive muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#21815b",
      cssVar: "--rw-color-muted-positive-active",
      description: "Generated positive muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#005532",
      cssVar: "--rw-color-muted-positive-inactive",
      description: "Generated positive muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#296e50",
      cssVar: "--rw-color-muted-positive-disabled",
      description: "Generated positive muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#2564d1",
      cssVar: "--rw-color-muted-info-hover",
      description: "Generated info muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#1555c0",
      cssVar: "--rw-color-muted-info-active",
      description: "Generated info muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#002a94",
      cssVar: "--rw-color-muted-info-inactive",
      description: "Generated info muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#1b4b9d",
      cssVar: "--rw-color-muted-info-disabled",
      description: "Generated info muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#6a4dac",
      cssVar: "--rw-color-muted-discovery-hover",
      description: "Generated discovery muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#5d409e",
      cssVar: "--rw-color-muted-discovery-active",
      description: "Generated discovery muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#3c1875",
      cssVar: "--rw-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#4f3982",
      cssVar: "--rw-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#2b2c30",
      cssVar: "--rw-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#7b7b7e",
      cssVar: "--rw-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#0d0c0766",
      cssVar: "--rw-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#fafafa",
      cssVar: "--rw-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#8cb6ff",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#4d8eff",
      cssVar: "--rw-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#8e223e",
      cssVar: "--rw-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#501524",
      cssVar: "--rw-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#df6520",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#803000",
      cssVar: "--rw-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#f0a824",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#765417",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#2c8a69",
      cssVar: "--rw-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#216b53",
      cssVar: "--rw-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#2055b3",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#123166",
      cssVar: "--rw-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#6c53ad",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#362661",
      cssVar: "--rw-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#df6db3",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#482039",
      cssVar: "--rw-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#59a7ff",
      cssVar: "--rw-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#4490ff",
      cssVar: "--rw-color-link-active",
      description: "Interactive color for links and linked text. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#0052d4",
      cssVar: "--rw-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#808184",
      cssVar: "--rw-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#6b6c6f",
      cssVar: "--rw-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#454649",
      cssVar: "--rw-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#fafafa",
      cssVar: "--rw-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#3be4be",
      cssVar: "--rw-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#ff96a3",
      cssVar: "--rw-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#ff96a3",
      cssVar: "--rw-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#c7dcff",
      cssVar: "--rw-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#d3c7ff",
      cssVar: "--rw-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#9b9b9b",
      cssVar: "--rw-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#00a785",
      cssVar: "--rw-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#00c5a1",
      cssVar: "--rw-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#81fff4",
      cssVar: "--rw-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#6adfc0",
      cssVar: "--rw-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#c2606e",
      cssVar: "--rw-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#e07a88",
      cssVar: "--rw-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#ffc9d5",
      cssVar: "--rw-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#f39ea7",
      cssVar: "--rw-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#c2606e",
      cssVar: "--rw-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#e07a88",
      cssVar: "--rw-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#ffc9d5",
      cssVar: "--rw-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#f39ea7",
      cssVar: "--rw-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--rw-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--rw-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--rw-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#899cbd",
      cssVar: "--rw-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#a7bcde",
      cssVar: "--rw-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#ebffff",
      cssVar: "--rw-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#cbdcf8",
      cssVar: "--rw-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#968bbf",
      cssVar: "--rw-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#b4a8df",
      cssVar: "--rw-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#fff6ff",
      cssVar: "--rw-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#d2c9f6",
      cssVar: "--rw-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--rw-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--rw-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--rw-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--rw-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--rw-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--rw-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--rw-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--rw-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--rw-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--rw-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--rw-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--rw-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--rw-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--rw-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--rw-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--rw-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--rw-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--rw-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--rw-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--rw-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--rw-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--rw-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--rw-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--rw-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--rw-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--rw-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-37xl",
      description: "A 284px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--rw-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--rw-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--rw-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--rw-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--rw-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--rw-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "0.95625",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.051875",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.243125",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.53",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.092857",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.190001",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.071",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "0.918",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "0.85",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-10xl",
      description: "Line height for text-10xl",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-none)",
      cssVar: "--rw-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--rw-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #fafafa13",
      cssVar: "--rw-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #fafafa13",
      cssVar: "--rw-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #fafafa13",
      cssVar: "--rw-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #fafafa13",
      cssVar: "--rw-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #3be4be20",
      cssVar: "--rw-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #3be4be20",
      cssVar: "--rw-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #3be4be20",
      cssVar: "--rw-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #3be4be20",
      cssVar: "--rw-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5620",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5620",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5620",
      cssVar: "--rw-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5620",
      cssVar: "--rw-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2320",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2320",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2320",
      cssVar: "--rw-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2320",
      cssVar: "--rw-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79120",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79120",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79120",
      cssVar: "--rw-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79120",
      cssVar: "--rw-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff20",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff20",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff20",
      cssVar: "--rw-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff20",
      cssVar: "--rw-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da20",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da20",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da20",
      cssVar: "--rw-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da20",
      cssVar: "--rw-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79120",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79120",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79120",
      cssVar: "--rw-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79120",
      cssVar: "--rw-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5620",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5620",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5620",
      cssVar: "--rw-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5620",
      cssVar: "--rw-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-title",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.4xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-title",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xl",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xs",
      description: "The display - extra small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-lg",
      description: "The large eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-sm",
      description: "The small eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-body-lg",
      description: "The body large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-md",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-sm",
      description: "The body small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Geist Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-code",
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
      cssVar: "--rw-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.black",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--rw-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#cacaca",
      cssVar: "--rw-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--rw-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--rw-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--rw-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#8f8f90",
      cssVar: "--rw-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--rw-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#6a6a6c",
      cssVar: "--rw-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#57575a",
      cssVar: "--rw-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#444548",
      cssVar: "--rw-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#3f4043",
      cssVar: "--rw-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--rw-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#c28393",
      cssVar: "--rw-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#bc7788",
      cssVar: "--rw-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#b76a7e",
      cssVar: "--rw-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#b15e73",
      cssVar: "--rw-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#ab5268",
      cssVar: "--rw-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#984a5e",
      cssVar: "--rw-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#864254",
      cssVar: "--rw-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#733a49",
      cssVar: "--rw-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#61323e",
      cssVar: "--rw-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#d7ad96",
      cssVar: "--rw-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#d2a287",
      cssVar: "--rw-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#cc9678",
      cssVar: "--rw-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#c78a69",
      cssVar: "--rw-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#c17f5a",
      cssVar: "--rw-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#b4714b",
      cssVar: "--rw-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#a26238",
      cssVar: "--rw-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#92542a",
      cssVar: "--rw-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#814825",
      cssVar: "--rw-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#d5b67d",
      cssVar: "--rw-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#d0ad6d",
      cssVar: "--rw-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#caa45c",
      cssVar: "--rw-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#c59b4d",
      cssVar: "--rw-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#c0984d",
      cssVar: "--rw-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#b5904d",
      cssVar: "--rw-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#a58549",
      cssVar: "--rw-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#917542",
      cssVar: "--rw-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#786137",
      cssVar: "--rw-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#b2d5b8",
      cssVar: "--rw-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#97c6a5",
      cssVar: "--rw-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7bb796",
      cssVar: "--rw-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#60a88a",
      cssVar: "--rw-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#55957d",
      cssVar: "--rw-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#49836f",
      cssVar: "--rw-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#3e7160",
      cssVar: "--rw-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#325d52",
      cssVar: "--rw-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#284b41",
      cssVar: "--rw-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#96b2e1",
      cssVar: "--rw-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#85a5dc",
      cssVar: "--rw-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#7598d7",
      cssVar: "--rw-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#638cd2",
      cssVar: "--rw-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#527fcd",
      cssVar: "--rw-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#4f73b1",
      cssVar: "--rw-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#45649b",
      cssVar: "--rw-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#3b5685",
      cssVar: "--rw-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#31486f",
      cssVar: "--rw-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#b4a9d2",
      cssVar: "--rw-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#a79acb",
      cssVar: "--rw-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#9b8cc3",
      cssVar: "--rw-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#8e7dbb",
      cssVar: "--rw-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#8272aa",
      cssVar: "--rw-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#756799",
      cssVar: "--rw-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#675a8a",
      cssVar: "--rw-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#594d7a",
      cssVar: "--rw-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#4c416a",
      cssVar: "--rw-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#d9aac8",
      cssVar: "--rw-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#d492b9",
      cssVar: "--rw-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ca87b0",
      cssVar: "--rw-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#c57ba8",
      cssVar: "--rw-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#c079a5",
      cssVar: "--rw-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#be77a3",
      cssVar: "--rw-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#a86d91",
      cssVar: "--rw-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#875975",
      cssVar: "--rw-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#5a3b4f",
      cssVar: "--rw-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.emphasis",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--rw-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--rw-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#8f8f90",
      cssVar: "--rw-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--rw-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--rw-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#3f4043",
      cssVar: "--rw-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#444548",
      cssVar: "--rw-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#343435",
      cssVar: "--rw-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#313133",
      cssVar: "--rw-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#29292d",
      cssVar: "--rw-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#3b3b3f",
      cssVar: "--rw-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#38383b",
      cssVar: "--rw-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#2d2d33",
      cssVar: "--rw-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--rw-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#454547",
      cssVar: "--rw-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#404042",
      cssVar: "--rw-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#343436",
      cssVar: "--rw-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--rw-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#4a4b4d",
      cssVar: "--rw-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#444547",
      cssVar: "--rw-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#36373a",
      cssVar: "--rw-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#3f4042",
      cssVar: "--rw-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#505154",
      cssVar: "--rw-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#4a4b4e",
      cssVar: "--rw-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#3a3b3f",
      cssVar: "--rw-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#444547",
      cssVar: "--rw-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#ab5268",
      cssVar: "--rw-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#527fcd",
      cssVar: "--rw-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#6a6a6c",
      cssVar: "--rw-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#5abba5",
      cssVar: "--rw-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#ab5268",
      cssVar: "--rw-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#ab5268",
      cssVar: "--rw-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#c59b4d",
      cssVar: "--rw-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#60a88a",
      cssVar: "--rw-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#60a88a",
      cssVar: "--rw-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#638cd2",
      cssVar: "--rw-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#8e7dbb",
      cssVar: "--rw-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#939393",
      cssVar: "--rw-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#2c9680",
      cssVar: "--rw-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#30a691",
      cssVar: "--rw-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#7fdad2",
      cssVar: "--rw-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#75beaa",
      cssVar: "--rw-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#d26b7f",
      cssVar: "--rw-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#be6074",
      cssVar: "--rw-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#962c4f",
      cssVar: "--rw-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#a4606d",
      cssVar: "--rw-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#d26b7f",
      cssVar: "--rw-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#be6074",
      cssVar: "--rw-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#962c4f",
      cssVar: "--rw-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#a4606d",
      cssVar: "--rw-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#a1752f",
      cssVar: "--rw-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#b18633",
      cssVar: "--rw-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#d6c171",
      cssVar: "--rw-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#c4a069",
      cssVar: "--rw-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#80dab1",
      cssVar: "--rw-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#72c09d",
      cssVar: "--rw-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#298e6c",
      cssVar: "--rw-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#72a88f",
      cssVar: "--rw-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#80dab1",
      cssVar: "--rw-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#72c09d",
      cssVar: "--rw-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#298e6c",
      cssVar: "--rw-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#72a88f",
      cssVar: "--rw-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#7cabd9",
      cssVar: "--rw-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#6f9bd5",
      cssVar: "--rw-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#4d70ac",
      cssVar: "--rw-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#6d8dc4",
      cssVar: "--rw-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#a892df",
      cssVar: "--rw-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#9b88d0",
      cssVar: "--rw-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#75669a",
      cssVar: "--rw-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#8d80b1",
      cssVar: "--rw-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#3e3e41",
      cssVar: "--rw-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--rw-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#3b3b3f",
      cssVar: "--rw-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#38383b",
      cssVar: "--rw-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#2d2d33",
      cssVar: "--rw-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--rw-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#3b3b3f",
      cssVar: "--rw-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#38383b",
      cssVar: "--rw-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#2d2d33",
      cssVar: "--rw-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--rw-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#444548",
      cssVar: "--rw-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#258069",
      cssVar: "--rw-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#545558",
      cssVar: "--rw-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#4a4b4e",
      cssVar: "--rw-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#444547",
      cssVar: "--rw-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#57917e",
      cssVar: "--rw-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#458772",
      cssVar: "--rw-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#206f56",
      cssVar: "--rw-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#4a7a69",
      cssVar: "--rw-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#75223d",
      cssVar: "--rw-color-muted-danger",
      description: "Generated danger muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#75223d",
      cssVar: "--rw-color-muted-negative",
      description: "Generated negative muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#836426",
      cssVar: "--rw-color-muted-warning",
      description: "Generated warning muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#23795d",
      cssVar: "--rw-color-muted-success",
      description: "Generated success muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#23795d",
      cssVar: "--rw-color-muted-positive",
      description: "Generated positive muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#2e599b",
      cssVar: "--rw-color-muted-info",
      description: "Generated info muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#604e86",
      cssVar: "--rw-color-muted-discovery",
      description: "Generated discovery muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#80404e",
      cssVar: "--rw-color-muted-danger-hover",
      description: "Generated danger muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#793345",
      cssVar: "--rw-color-muted-danger-active",
      description: "Generated danger muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#691f2f",
      cssVar: "--rw-color-muted-danger-inactive",
      description: "Generated danger muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#6c3541",
      cssVar: "--rw-color-muted-danger-disabled",
      description: "Generated danger muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#80404e",
      cssVar: "--rw-color-muted-negative-hover",
      description: "Generated negative muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#793345",
      cssVar: "--rw-color-muted-negative-active",
      description: "Generated negative muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#691f2f",
      cssVar: "--rw-color-muted-negative-inactive",
      description: "Generated negative muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#6c3541",
      cssVar: "--rw-color-muted-negative-disabled",
      description: "Generated negative muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#947950",
      cssVar: "--rw-color-muted-warning-hover",
      description: "Generated warning muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#8a6e3f",
      cssVar: "--rw-color-muted-warning-active",
      description: "Generated warning muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#735121",
      cssVar: "--rw-color-muted-warning-inactive",
      description: "Generated warning muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#7c6543",
      cssVar: "--rw-color-muted-warning-disabled",
      description: "Generated warning muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#518870",
      cssVar: "--rw-color-muted-success-hover",
      description: "Generated success muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#407e65",
      cssVar: "--rw-color-muted-success-active",
      description: "Generated success muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#1f694b",
      cssVar: "--rw-color-muted-success-inactive",
      description: "Generated success muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#44725e",
      cssVar: "--rw-color-muted-success-disabled",
      description: "Generated success muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#518870",
      cssVar: "--rw-color-muted-positive-hover",
      description: "Generated positive muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#407e65",
      cssVar: "--rw-color-muted-positive-active",
      description: "Generated positive muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#1f694b",
      cssVar: "--rw-color-muted-positive-inactive",
      description: "Generated positive muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#44725e",
      cssVar: "--rw-color-muted-positive-disabled",
      description: "Generated positive muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#4d70ac",
      cssVar: "--rw-color-muted-info-hover",
      description: "Generated info muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#3f64a3",
      cssVar: "--rw-color-muted-info-active",
      description: "Generated info muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#29458c",
      cssVar: "--rw-color-muted-info-inactive",
      description: "Generated info muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#3f5c8f",
      cssVar: "--rw-color-muted-info-disabled",
      description: "Generated info muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#736398",
      cssVar: "--rw-color-muted-discovery-hover",
      description: "Generated discovery muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#6a598f",
      cssVar: "--rw-color-muted-discovery-active",
      description: "Generated discovery muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#503877",
      cssVar: "--rw-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#5f517e",
      cssVar: "--rw-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#444548",
      cssVar: "--rw-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--rw-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#35322666",
      cssVar: "--rw-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#85a5dc",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#638cd2",
      cssVar: "--rw-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#864254",
      cssVar: "--rw-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#61323e",
      cssVar: "--rw-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#b4714b",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#814825",
      cssVar: "--rw-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#c0984d",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#786137",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#49836f",
      cssVar: "--rw-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#3e7160",
      cssVar: "--rw-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#45649b",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#31486f",
      cssVar: "--rw-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#756799",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#4c416a",
      cssVar: "--rw-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#be77a3",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#5a3b4f",
      cssVar: "--rw-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#6a9bd4",
      cssVar: "--rw-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#5e8dd0",
      cssVar: "--rw-color-link-active",
      description: "Interactive color for links and linked text. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#3362ae",
      cssVar: "--rw-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#808182",
      cssVar: "--rw-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#717274",
      cssVar: "--rw-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#575759",
      cssVar: "--rw-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#5abba5",
      cssVar: "--rw-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#dd8b95",
      cssVar: "--rw-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#dd8b95",
      cssVar: "--rw-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#a5bde5",
      cssVar: "--rw-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#b3a5e5",
      cssVar: "--rw-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#939393",
      cssVar: "--rw-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#2c9680",
      cssVar: "--rw-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#30a691",
      cssVar: "--rw-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#7fdad2",
      cssVar: "--rw-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#75beaa",
      cssVar: "--rw-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#a87078",
      cssVar: "--rw-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#c07f88",
      cssVar: "--rw-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#e5a6b4",
      cssVar: "--rw-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#d39299",
      cssVar: "--rw-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#a87078",
      cssVar: "--rw-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#c07f88",
      cssVar: "--rw-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#e5a6b4",
      cssVar: "--rw-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#d39299",
      cssVar: "--rw-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--rw-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#bfbfbf",
      cssVar: "--rw-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#d9d9d966",
      cssVar: "--rw-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--rw-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#bfbfbf",
      cssVar: "--rw-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#d9d9d966",
      cssVar: "--rw-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--rw-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#bfbfbf",
      cssVar: "--rw-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#d9d9d966",
      cssVar: "--rw-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#8894a8",
      cssVar: "--rw-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#9aaac3",
      cssVar: "--rw-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#b9ebeb",
      cssVar: "--rw-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#abbedd",
      cssVar: "--rw-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#908aaa",
      cssVar: "--rw-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#a49bc3",
      cssVar: "--rw-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#ecbfec",
      cssVar: "--rw-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#b4abda",
      cssVar: "--rw-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--rw-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--rw-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--rw-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--rw-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--rw-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--rw-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--rw-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--rw-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--rw-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--rw-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--rw-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--rw-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--rw-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--rw-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--rw-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--rw-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--rw-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--rw-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--rw-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--rw-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--rw-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--rw-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--rw-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--rw-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--rw-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--rw-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-37xl",
      description: "A 284px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--rw-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--rw-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--rw-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--rw-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--rw-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--rw-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "0.95625",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.051875",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.243125",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.53",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.092857",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.190001",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.071",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "0.918",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "0.85",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-10xl",
      description: "Line height for text-10xl",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-none)",
      cssVar: "--rw-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--rw-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #fafafa13",
      cssVar: "--rw-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #fafafa13",
      cssVar: "--rw-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #fafafa13",
      cssVar: "--rw-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #fafafa13",
      cssVar: "--rw-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #3be4be20",
      cssVar: "--rw-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #3be4be20",
      cssVar: "--rw-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #3be4be20",
      cssVar: "--rw-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #3be4be20",
      cssVar: "--rw-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5620",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5620",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5620",
      cssVar: "--rw-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5620",
      cssVar: "--rw-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2320",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2320",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2320",
      cssVar: "--rw-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2320",
      cssVar: "--rw-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79120",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79120",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79120",
      cssVar: "--rw-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79120",
      cssVar: "--rw-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff20",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff20",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff20",
      cssVar: "--rw-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff20",
      cssVar: "--rw-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da20",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da20",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da20",
      cssVar: "--rw-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da20",
      cssVar: "--rw-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79120",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79120",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79120",
      cssVar: "--rw-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79120",
      cssVar: "--rw-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5620",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5620",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5620",
      cssVar: "--rw-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5620",
      cssVar: "--rw-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-title",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.4xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-title",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xl",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xs",
      description: "The display - extra small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-lg",
      description: "The large eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-sm",
      description: "The small eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-body-lg",
      description: "The body large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-md",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-sm",
      description: "The body small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Geist Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-code",
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
      cssVar: "--rw-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.black",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#ebebed",
      cssVar: "--rw-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--rw-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#9a9fa7",
      cssVar: "--rw-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#737383",
      cssVar: "--rw-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#4e515b",
      cssVar: "--rw-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#2b2b33",
      cssVar: "--rw-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#08080a",
      cssVar: "--rw-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#f997b0",
      cssVar: "--rw-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#f77395",
      cssVar: "--rw-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#f6507a",
      cssVar: "--rw-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#f42c5f",
      cssVar: "--rw-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#f00a45",
      cssVar: "--rw-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#b90a37",
      cssVar: "--rw-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#840929",
      cssVar: "--rw-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#510619",
      cssVar: "--rw-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#1d0309",
      cssVar: "--rw-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#ffeee5",
      cssVar: "--rw-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#ffd3bb",
      cssVar: "--rw-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#ffb890",
      cssVar: "--rw-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ff9c65",
      cssVar: "--rw-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ff803a",
      cssVar: "--rw-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#ff5c00",
      cssVar: "--rw-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#b24600",
      cssVar: "--rw-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#742f00",
      cssVar: "--rw-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#471b00",
      cssVar: "--rw-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#ffe1ab",
      cssVar: "--rw-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#ffd280",
      cssVar: "--rw-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#ffc253",
      cssVar: "--rw-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#ffb327",
      cssVar: "--rw-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#ffb01e",
      cssVar: "--rw-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#ffa706",
      cssVar: "--rw-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#dc8f00",
      cssVar: "--rw-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a26902",
      cssVar: "--rw-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#583902",
      cssVar: "--rw-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#c9f8d8",
      cssVar: "--rw-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7ceeaf",
      cssVar: "--rw-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#2de498",
      cssVar: "--rw-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#1db77c",
      cssVar: "--rw-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#13825b",
      cssVar: "--rw-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#0a4e38",
      cssVar: "--rw-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#031611",
      cssVar: "--rw-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#f8fbff",
      cssVar: "--rw-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#cbdeff",
      cssVar: "--rw-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--rw-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#70a4ff",
      cssVar: "--rw-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#4387ff",
      cssVar: "--rw-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#025eff",
      cssVar: "--rw-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#0145be",
      cssVar: "--rw-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#012e7c",
      cssVar: "--rw-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#00163b",
      cssVar: "--rw-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#e1d7fb",
      cssVar: "--rw-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#c1adf7",
      cssVar: "--rw-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#a283f3",
      cssVar: "--rw-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#815ddd",
      cssVar: "--rw-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#623dc3",
      cssVar: "--rw-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#492b9b",
      cssVar: "--rw-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#321c71",
      cssVar: "--rw-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#1d0f42",
      cssVar: "--rw-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#ffd5ee",
      cssVar: "--rw-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ffaade",
      cssVar: "--rw-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#ff85d0",
      cssVar: "--rw-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#fa7dcb",
      cssVar: "--rw-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#f976c6",
      cssVar: "--rw-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#dc50a6",
      cssVar: "--rw-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#932b6b",
      cssVar: "--rw-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#1c0815",
      cssVar: "--rw-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.emphasis",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#ebebed",
      cssVar: "--rw-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#9a9fa7",
      cssVar: "--rw-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#737383",
      cssVar: "--rw-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#08080a",
      cssVar: "--rw-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#070709",
      cssVar: "--rw-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#121215",
      cssVar: "--rw-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#070709",
      cssVar: "--rw-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#1e1f25",
      cssVar: "--rw-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#121316",
      cssVar: "--rw-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#070709",
      cssVar: "--rw-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#f00a45",
      cssVar: "--rw-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#4387ff",
      cssVar: "--rw-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#4e515b",
      cssVar: "--rw-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#2effd0",
      cssVar: "--rw-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#f00a45",
      cssVar: "--rw-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#f00a45",
      cssVar: "--rw-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#ffb327",
      cssVar: "--rw-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#2de498",
      cssVar: "--rw-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#2de498",
      cssVar: "--rw-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#70a4ff",
      cssVar: "--rw-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#a283f3",
      cssVar: "--rw-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#a7a7a7",
      cssVar: "--rw-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#007f65",
      cssVar: "--rw-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#00ab8c",
      cssVar: "--rw-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#bbfff9",
      cssVar: "--rw-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#71f9d5",
      cssVar: "--rw-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#ff819a",
      cssVar: "--rw-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#ff4069",
      cssVar: "--rw-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#7f002a",
      cssVar: "--rw-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#dc2c4e",
      cssVar: "--rw-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#ff819a",
      cssVar: "--rw-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#ff4069",
      cssVar: "--rw-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#7f002a",
      cssVar: "--rw-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#dc2c4e",
      cssVar: "--rw-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#9c6100",
      cssVar: "--rw-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#c88400",
      cssVar: "--rw-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#ffe995",
      cssVar: "--rw-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#ffc060",
      cssVar: "--rw-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#bdffe1",
      cssVar: "--rw-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#6bfebd",
      cssVar: "--rw-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#006a46",
      cssVar: "--rw-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#5ddba1",
      cssVar: "--rw-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#bdffe1",
      cssVar: "--rw-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#6bfebd",
      cssVar: "--rw-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#006a46",
      cssVar: "--rw-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#5ddba1",
      cssVar: "--rw-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#b1d9ff",
      cssVar: "--rw-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#90bfff",
      cssVar: "--rw-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#0159f1",
      cssVar: "--rw-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#68a0ff",
      cssVar: "--rw-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#f3eeff",
      cssVar: "--rw-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#ccbaff",
      cssVar: "--rw-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#643bc7",
      cssVar: "--rw-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#9c84e3",
      cssVar: "--rw-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#08080a",
      cssVar: "--rw-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#004433",
      cssVar: "--rw-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#25282e",
      cssVar: "--rw-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#121316",
      cssVar: "--rw-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#070709",
      cssVar: "--rw-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#23ad7f",
      cssVar: "--rw-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#0c8962",
      cssVar: "--rw-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#001710",
      cssVar: "--rw-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#176d4f",
      cssVar: "--rw-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#28000d",
      cssVar: "--rw-color-muted-danger",
      description: "Generated danger muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#28000d",
      cssVar: "--rw-color-muted-negative",
      description: "Generated negative muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#4d3300",
      cssVar: "--rw-color-muted-warning",
      description: "Generated warning muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#003121",
      cssVar: "--rw-color-muted-success",
      description: "Generated success muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#003121",
      cssVar: "--rw-color-muted-positive",
      description: "Generated positive muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#00388e",
      cssVar: "--rw-color-muted-info",
      description: "Generated info muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#3f198c",
      cssVar: "--rw-color-muted-discovery",
      description: "Generated discovery muted background for the dark theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#73081f",
      cssVar: "--rw-color-muted-danger-hover",
      description: "Generated danger muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#540016",
      cssVar: "--rw-color-muted-danger-active",
      description: "Generated danger muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#080002",
      cssVar: "--rw-color-muted-danger-inactive",
      description: "Generated danger muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#39030f",
      cssVar: "--rw-color-muted-danger-disabled",
      description: "Generated danger muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#73081f",
      cssVar: "--rw-color-muted-negative-hover",
      description: "Generated negative muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#540016",
      cssVar: "--rw-color-muted-negative-active",
      description: "Generated negative muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#080002",
      cssVar: "--rw-color-muted-negative-inactive",
      description: "Generated negative muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#39030f",
      cssVar: "--rw-color-muted-negative-disabled",
      description: "Generated negative muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#b17415",
      cssVar: "--rw-color-muted-warning-hover",
      description: "Generated warning muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#8c5903",
      cssVar: "--rw-color-muted-warning-active",
      description: "Generated warning muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#211300",
      cssVar: "--rw-color-muted-warning-inactive",
      description: "Generated warning muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#6d470d",
      cssVar: "--rw-color-muted-warning-disabled",
      description: "Generated warning muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#1d9261",
      cssVar: "--rw-color-muted-success-hover",
      description: "Generated success muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#096f47",
      cssVar: "--rw-color-muted-success-active",
      description: "Generated success muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#000805",
      cssVar: "--rw-color-muted-success-inactive",
      description: "Generated success muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#115739",
      cssVar: "--rw-color-muted-success-disabled",
      description: "Generated success muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#1d9261",
      cssVar: "--rw-color-muted-positive-hover",
      description: "Generated positive muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#096f47",
      cssVar: "--rw-color-muted-positive-active",
      description: "Generated positive muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#000805",
      cssVar: "--rw-color-muted-positive-inactive",
      description: "Generated positive muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#115739",
      cssVar: "--rw-color-muted-positive-disabled",
      description: "Generated positive muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#0159f1",
      cssVar: "--rw-color-muted-info-hover",
      description: "Generated info muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#0049c2",
      cssVar: "--rw-color-muted-info-active",
      description: "Generated info muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#001c64",
      cssVar: "--rw-color-muted-info-inactive",
      description: "Generated info muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#003898",
      cssVar: "--rw-color-muted-info-disabled",
      description: "Generated info muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#6036c1",
      cssVar: "--rw-color-muted-discovery-hover",
      description: "Generated discovery muted background for the dark theme (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#4f27a8",
      cssVar: "--rw-color-muted-discovery-active",
      description: "Generated discovery muted background for the dark theme (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#230357",
      cssVar: "--rw-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the dark theme (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#3c217b",
      cssVar: "--rw-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the dark theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#08080a",
      cssVar: "--rw-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#737383",
      cssVar: "--rw-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#00000066",
      cssVar: "--rw-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#cbdeff",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#70a4ff",
      cssVar: "--rw-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#840929",
      cssVar: "--rw-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#1d0309",
      cssVar: "--rw-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#ff5c00",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#471b00",
      cssVar: "--rw-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#ffb01e",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#583902",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#13825b",
      cssVar: "--rw-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#0a4e38",
      cssVar: "--rw-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#0145be",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#00163b",
      cssVar: "--rw-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#623dc3",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#1d0f42",
      cssVar: "--rw-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#f976c6",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#1c0815",
      cssVar: "--rw-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#81bcff",
      cssVar: "--rw-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#63a2ff",
      cssVar: "--rw-color-link-active",
      description: "Interactive color for links and linked text. (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#004bc1",
      cssVar: "--rw-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#7a7f8c",
      cssVar: "--rw-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#5d616c",
      cssVar: "--rw-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#2a2c32",
      cssVar: "--rw-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#2effd0",
      cssVar: "--rw-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#ffdade",
      cssVar: "--rw-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#ffdade",
      cssVar: "--rw-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#a7a7a7",
      cssVar: "--rw-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, dark base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#808080",
      cssVar: "--rw-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#007f65",
      cssVar: "--rw-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#00ab8c",
      cssVar: "--rw-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#bbfff9",
      cssVar: "--rw-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#71f9d5",
      cssVar: "--rw-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#db5669",
      cssVar: "--rw-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#f88b9a",
      cssVar: "--rw-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#ffd4d8",
      cssVar: "--rw-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#db5669",
      cssVar: "--rw-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#f88b9a",
      cssVar: "--rw-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#ffd4d8",
      cssVar: "--rw-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--rw-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--rw-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--rw-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#92aad4",
      cssVar: "--rw-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#cddcf5",
      cssVar: "--rw-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#a396d6",
      cssVar: "--rw-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#d7cff6",
      cssVar: "--rw-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--rw-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--rw-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--rw-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--rw-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--rw-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--rw-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--rw-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--rw-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--rw-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--rw-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--rw-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--rw-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--rw-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--rw-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--rw-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--rw-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--rw-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--rw-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--rw-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--rw-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--rw-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--rw-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--rw-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--rw-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--rw-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--rw-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-37xl",
      description: "A 284px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--rw-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--rw-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--rw-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--rw-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--rw-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--rw-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "0.95625",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.051875",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.243125",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.53",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.092857",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.190001",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.071",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "0.918",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "0.85",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-10xl",
      description: "Line height for text-10xl",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-none)",
      cssVar: "--rw-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--rw-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #fafafa13",
      cssVar: "--rw-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #fafafa13",
      cssVar: "--rw-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #fafafa13",
      cssVar: "--rw-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #fafafa13",
      cssVar: "--rw-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #3be4be20",
      cssVar: "--rw-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #3be4be20",
      cssVar: "--rw-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #3be4be20",
      cssVar: "--rw-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #3be4be20",
      cssVar: "--rw-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5620",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5620",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5620",
      cssVar: "--rw-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5620",
      cssVar: "--rw-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #f7ac2320",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #f7ac2320",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #f7ac2320",
      cssVar: "--rw-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #f7ac2320",
      cssVar: "--rw-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79120",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79120",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79120",
      cssVar: "--rw-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79120",
      cssVar: "--rw-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #4d8eff20",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #4d8eff20",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #4d8eff20",
      cssVar: "--rw-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #4d8eff20",
      cssVar: "--rw-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #9277da20",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #9277da20",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #9277da20",
      cssVar: "--rw-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #9277da20",
      cssVar: "--rw-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #45c79120",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #45c79120",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #45c79120",
      cssVar: "--rw-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #45c79120",
      cssVar: "--rw-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #cf2d5620",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #cf2d5620",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #cf2d5620",
      cssVar: "--rw-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #cf2d5620",
      cssVar: "--rw-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-title",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.4xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-title",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xl",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xs",
      description: "The display - extra small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-lg",
      description: "The large eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-sm",
      description: "The small eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-body-lg",
      description: "The body large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-md",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-sm",
      description: "The body small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Geist Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-code",
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
      cssVar: "--rw-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.black",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#fafafa",
      cssVar: "--rw-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--rw-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#eaeaea",
      cssVar: "--rw-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--rw-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#cacacb",
      cssVar: "--rw-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--rw-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#959698",
      cssVar: "--rw-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#7b7b7e",
      cssVar: "--rw-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#606164",
      cssVar: "--rw-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#46464a",
      cssVar: "--rw-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#2b2c30",
      cssVar: "--rw-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#242528",
      cssVar: "--rw-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#1f1f21",
      cssVar: "--rw-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#e2819a",
      cssVar: "--rw-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#dd6c89",
      cssVar: "--rw-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#d95778",
      cssVar: "--rw-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#d44267",
      cssVar: "--rw-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#cf2d56",
      cssVar: "--rw-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#ae284a",
      cssVar: "--rw-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#8e223e",
      cssVar: "--rw-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#6f1c31",
      cssVar: "--rw-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#501524",
      cssVar: "--rw-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#f6c3a7",
      cssVar: "--rw-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#f4b18c",
      cssVar: "--rw-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#f19f71",
      cssVar: "--rw-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ef8c56",
      cssVar: "--rw-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ec7a3b",
      cssVar: "--rw-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#df6520",
      cssVar: "--rw-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#bf520b",
      cssVar: "--rw-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#9f4000",
      cssVar: "--rw-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#803000",
      cssVar: "--rw-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#facd7b",
      cssVar: "--rw-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#f9c25e",
      cssVar: "--rw-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#f8b740",
      cssVar: "--rw-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#f7ac23",
      cssVar: "--rw-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#f0a824",
      cssVar: "--rw-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#df9d24",
      cssVar: "--rw-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#c58c22",
      cssVar: "--rw-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a2731e",
      cssVar: "--rw-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#765417",
      cssVar: "--rw-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#d1f1d6",
      cssVar: "--rw-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#a2e3b6",
      cssVar: "--rw-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#74d59f",
      cssVar: "--rw-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#45c791",
      cssVar: "--rw-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#38a97e",
      cssVar: "--rw-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#2c8a69",
      cssVar: "--rw-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#216b53",
      cssVar: "--rw-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#164a3c",
      cssVar: "--rw-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#0c2a22",
      cssVar: "--rw-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#abcaff",
      cssVar: "--rw-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#8cb6ff",
      cssVar: "--rw-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#6da2ff",
      cssVar: "--rw-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#4d8eff",
      cssVar: "--rw-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#2e7aff",
      cssVar: "--rw-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#2768d9",
      cssVar: "--rw-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#2055b3",
      cssVar: "--rw-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#19438c",
      cssVar: "--rw-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#123166",
      cssVar: "--rw-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#cec2ee",
      cssVar: "--rw-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#baa9e8",
      cssVar: "--rw-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#a690e1",
      cssVar: "--rw-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#9277da",
      cssVar: "--rw-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#7f64c4",
      cssVar: "--rw-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#6c53ad",
      cssVar: "--rw-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#594395",
      cssVar: "--rw-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#47347c",
      cssVar: "--rw-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#362661",
      cssVar: "--rw-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#f5c7e4",
      cssVar: "--rw-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#f49ed1",
      cssVar: "--rw-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#eb89c5",
      cssVar: "--rw-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#e774bb",
      cssVar: "--rw-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#e171b7",
      cssVar: "--rw-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#df6db3",
      cssVar: "--rw-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#c25c9b",
      cssVar: "--rw-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#904272",
      cssVar: "--rw-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#482039",
      cssVar: "--rw-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.emphasis",
      type: "color",
      value: "#2b2c30",
      cssVar: "--rw-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#606164",
      cssVar: "--rw-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--rw-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#cacacb",
      cssVar: "--rw-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#e1e1e1",
      cssVar: "--rw-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#eaeaea",
      cssVar: "--rw-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--rw-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#fafafa",
      cssVar: "--rw-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#a0a0a0",
      cssVar: "--rw-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#c0c0c0",
      cssVar: "--rw-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#e1e1e166",
      cssVar: "--rw-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--rw-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#c8c8c8",
      cssVar: "--rw-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#eaeaea66",
      cssVar: "--rw-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#ababab",
      cssVar: "--rw-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#cecece",
      cssVar: "--rw-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#f1f1f166",
      cssVar: "--rw-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--rw-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#dadada",
      cssVar: "--rw-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#8e223e",
      cssVar: "--rw-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#2055b3",
      cssVar: "--rw-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--rw-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#1fb2a6",
      cssVar: "--rw-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#8e223e",
      cssVar: "--rw-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#8e223e",
      cssVar: "--rw-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#765417",
      cssVar: "--rw-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#216b53",
      cssVar: "--rw-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#216b53",
      cssVar: "--rw-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#2055b3",
      cssVar: "--rw-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#594395",
      cssVar: "--rw-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#232326",
      cssVar: "--rw-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--rw-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--rw-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#008277",
      cssVar: "--rw-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#009a8e",
      cssVar: "--rw-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#5ddfd2",
      cssVar: "--rw-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#4daea4",
      cssVar: "--rw-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#6e0025",
      cssVar: "--rw-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#7e0f31",
      cssVar: "--rw-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#ab3e56",
      cssVar: "--rw-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#843142",
      cssVar: "--rw-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#6e0025",
      cssVar: "--rw-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#7e0f31",
      cssVar: "--rw-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#ab3e56",
      cssVar: "--rw-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#843142",
      cssVar: "--rw-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#573700",
      cssVar: "--rw-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#664500",
      cssVar: "--rw-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#926f36",
      cssVar: "--rw-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#71562a",
      cssVar: "--rw-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#004d36",
      cssVar: "--rw-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#095c45",
      cssVar: "--rw-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#40876e",
      cssVar: "--rw-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#336855",
      cssVar: "--rw-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#004d36",
      cssVar: "--rw-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#095c45",
      cssVar: "--rw-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#40876e",
      cssVar: "--rw-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#336855",
      cssVar: "--rw-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#003590",
      cssVar: "--rw-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#0f45a2",
      cssVar: "--rw-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#3b72d3",
      cssVar: "--rw-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#2f58a2",
      cssVar: "--rw-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#3f2676",
      cssVar: "--rw-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#4c3485",
      cssVar: "--rw-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#725db2",
      cssVar: "--rw-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#584889",
      cssVar: "--rw-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--rw-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#959595",
      cssVar: "--rw-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--rw-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#f1f1f166",
      cssVar: "--rw-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#FAFAFA",
      cssVar: "--rw-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#fafafa66",
      cssVar: "--rw-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#eaeaea",
      cssVar: "--rw-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#68e8db",
      cssVar: "--rw-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#919191",
      cssVar: "--rw-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#cacaca",
      cssVar: "--rw-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--rw-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#eaeaea66",
      cssVar: "--rw-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#08a99e",
      cssVar: "--rw-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#43c8bc",
      cssVar: "--rw-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#9bffff",
      cssVar: "--rw-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#84e3d9",
      cssVar: "--rw-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#e37085",
      cssVar: "--rw-color-muted-danger",
      description: "Generated danger muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#e37085",
      cssVar: "--rw-color-muted-negative",
      description: "Generated negative muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#bd985e",
      cssVar: "--rw-color-muted-warning",
      description: "Generated warning muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#6ab196",
      cssVar: "--rw-color-muted-success",
      description: "Generated success muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#6ab196",
      cssVar: "--rw-color-muted-positive",
      description: "Generated positive muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#659dff",
      cssVar: "--rw-color-muted-info",
      description: "Generated info muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#9e8ae4",
      cssVar: "--rw-color-muted-discovery",
      description: "Generated discovery muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#ae4158",
      cssVar: "--rw-color-muted-danger-hover",
      description: "Generated danger muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#c8586e",
      cssVar: "--rw-color-muted-danger-active",
      description: "Generated danger muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#ff9baf",
      cssVar: "--rw-color-muted-danger-inactive",
      description: "Generated danger muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#d67a89",
      cssVar: "--rw-color-muted-danger-disabled",
      description: "Generated danger muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#ae4158",
      cssVar: "--rw-color-muted-negative-hover",
      description: "Generated negative muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#c8586e",
      cssVar: "--rw-color-muted-negative-active",
      description: "Generated negative muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#ff9baf",
      cssVar: "--rw-color-muted-negative-inactive",
      description: "Generated negative muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#d67a89",
      cssVar: "--rw-color-muted-negative-disabled",
      description: "Generated negative muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#8c692e",
      cssVar: "--rw-color-muted-warning-hover",
      description: "Generated warning muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#a48046",
      cssVar: "--rw-color-muted-warning-active",
      description: "Generated warning muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#ebc489",
      cssVar: "--rw-color-muted-warning-inactive",
      description: "Generated warning muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#b79a6d",
      cssVar: "--rw-color-muted-warning-disabled",
      description: "Generated warning muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#388067",
      cssVar: "--rw-color-muted-success-hover",
      description: "Generated success muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#51987e",
      cssVar: "--rw-color-muted-success-active",
      description: "Generated success muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#96dfc2",
      cssVar: "--rw-color-muted-success-inactive",
      description: "Generated success muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#77ae98",
      cssVar: "--rw-color-muted-success-disabled",
      description: "Generated success muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#388067",
      cssVar: "--rw-color-muted-positive-hover",
      description: "Generated positive muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#51987e",
      cssVar: "--rw-color-muted-positive-active",
      description: "Generated positive muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#96dfc2",
      cssVar: "--rw-color-muted-positive-inactive",
      description: "Generated positive muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#77ae98",
      cssVar: "--rw-color-muted-positive-disabled",
      description: "Generated positive muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#376cc9",
      cssVar: "--rw-color-muted-info-hover",
      description: "Generated info muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#4e84e4",
      cssVar: "--rw-color-muted-info-active",
      description: "Generated info muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#90cbff",
      cssVar: "--rw-color-muted-info-inactive",
      description: "Generated info muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#729fec",
      cssVar: "--rw-color-muted-info-disabled",
      description: "Generated info muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#715bb1",
      cssVar: "--rw-color-muted-discovery-hover",
      description: "Generated discovery muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#8772ca",
      cssVar: "--rw-color-muted-discovery-active",
      description: "Generated discovery muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#c9b5ff",
      cssVar: "--rw-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#9d8ed6",
      cssVar: "--rw-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#b0b0b1",
      cssVar: "--rw-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#1a1c1f66",
      cssVar: "--rw-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#606164",
      cssVar: "--rw-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#eaeaea",
      cssVar: "--rw-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#2055b3",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#6da2ff",
      cssVar: "--rw-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#8e223e",
      cssVar: "--rw-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#dd6c89",
      cssVar: "--rw-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#9f4000",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#f19f71",
      cssVar: "--rw-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#765417",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#f8b740",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#216b53",
      cssVar: "--rw-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#74d59f",
      cssVar: "--rw-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#2055b3",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#6da2ff",
      cssVar: "--rw-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#594395",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#a690e1",
      cssVar: "--rw-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#904272",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#eb89c5",
      cssVar: "--rw-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#003590",
      cssVar: "--rw-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#0f45a2",
      cssVar: "--rw-color-link-active",
      description: "Interactive color for links and linked text. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#3b72d3",
      cssVar: "--rw-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#7c7c7d",
      cssVar: "--rw-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#9d9d9e",
      cssVar: "--rw-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#e1e1e2",
      cssVar: "--rw-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#151518",
      cssVar: "--rw-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#1fb2a6",
      cssVar: "--rw-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#2f000c",
      cssVar: "--rw-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#2f000c",
      cssVar: "--rw-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#2d1c00",
      cssVar: "--rw-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#002b1e",
      cssVar: "--rw-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#002b1e",
      cssVar: "--rw-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#001c54",
      cssVar: "--rw-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#20004c",
      cssVar: "--rw-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#232326",
      cssVar: "--rw-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#0c0c0d",
      cssVar: "--rw-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#030303",
      cssVar: "--rw-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#151517",
      cssVar: "--rw-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#008277",
      cssVar: "--rw-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#009a8e",
      cssVar: "--rw-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#5ddfd2",
      cssVar: "--rw-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#4daea4",
      cssVar: "--rw-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#3b0916",
      cssVar: "--rw-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#350411",
      cssVar: "--rw-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#240005",
      cssVar: "--rw-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#2b050e",
      cssVar: "--rw-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#3b0916",
      cssVar: "--rw-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#350411",
      cssVar: "--rw-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#240005",
      cssVar: "--rw-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#2b050e",
      cssVar: "--rw-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#3b290c",
      cssVar: "--rw-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#342305",
      cssVar: "--rw-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#211100",
      cssVar: "--rw-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#2a1d07",
      cssVar: "--rw-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#001d11",
      cssVar: "--rw-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#002417",
      cssVar: "--rw-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#0f382a",
      cssVar: "--rw-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#0b2a1f",
      cssVar: "--rw-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#001d11",
      cssVar: "--rw-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#002417",
      cssVar: "--rw-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#0f382a",
      cssVar: "--rw-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#0b2a1f",
      cssVar: "--rw-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#000c44",
      cssVar: "--rw-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#00144c",
      cssVar: "--rw-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#0a2a63",
      cssVar: "--rw-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#071f4a",
      cssVar: "--rw-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#2b105a",
      cssVar: "--rw-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#250753",
      cssVar: "--rw-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#17003f",
      cssVar: "--rw-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#1e0a42",
      cssVar: "--rw-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--rw-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--rw-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--rw-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--rw-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--rw-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--rw-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--rw-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--rw-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--rw-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--rw-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--rw-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--rw-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--rw-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--rw-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--rw-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--rw-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--rw-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--rw-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--rw-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--rw-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--rw-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--rw-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--rw-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--rw-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--rw-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--rw-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-37xl",
      description: "A 284px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--rw-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--rw-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--rw-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--rw-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--rw-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--rw-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "0.95625",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.051875",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.243125",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.53",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.092857",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.190001",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.071",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "0.918",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "0.85",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-10xl",
      description: "Line height for text-10xl",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-none)",
      cssVar: "--rw-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--rw-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #15151813",
      cssVar: "--rw-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #15151813",
      cssVar: "--rw-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #15151813",
      cssVar: "--rw-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #15151813",
      cssVar: "--rw-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #1fb2a620",
      cssVar: "--rw-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1fb2a620",
      cssVar: "--rw-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1fb2a620",
      cssVar: "--rw-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1fb2a620",
      cssVar: "--rw-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e20",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e20",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e20",
      cssVar: "--rw-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e20",
      cssVar: "--rw-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541720",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541720",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541720",
      cssVar: "--rw-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541720",
      cssVar: "--rw-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5320",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5320",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5320",
      cssVar: "--rw-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5320",
      cssVar: "--rw-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b320",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b320",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b320",
      cssVar: "--rw-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b320",
      cssVar: "--rw-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439520",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439520",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439520",
      cssVar: "--rw-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439520",
      cssVar: "--rw-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5320",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5320",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5320",
      cssVar: "--rw-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5320",
      cssVar: "--rw-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e20",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e20",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e20",
      cssVar: "--rw-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e20",
      cssVar: "--rw-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-title",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.4xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-title",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xl",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xs",
      description: "The display - extra small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-lg",
      description: "The large eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-sm",
      description: "The small eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-body-lg",
      description: "The body large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-md",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-sm",
      description: "The body small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Geist Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-code",
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
      cssVar: "--rw-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.black",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--rw-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#cacaca",
      cssVar: "--rw-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--rw-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--rw-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--rw-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#8f8f90",
      cssVar: "--rw-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--rw-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#6a6a6c",
      cssVar: "--rw-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#57575a",
      cssVar: "--rw-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#444548",
      cssVar: "--rw-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#3f4043",
      cssVar: "--rw-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#3c3c3e",
      cssVar: "--rw-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#c28393",
      cssVar: "--rw-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#bc7788",
      cssVar: "--rw-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#b76a7e",
      cssVar: "--rw-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#b15e73",
      cssVar: "--rw-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#ab5268",
      cssVar: "--rw-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#984a5e",
      cssVar: "--rw-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#864254",
      cssVar: "--rw-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#733a49",
      cssVar: "--rw-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#61323e",
      cssVar: "--rw-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#d7ad96",
      cssVar: "--rw-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#d2a287",
      cssVar: "--rw-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#cc9678",
      cssVar: "--rw-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#c78a69",
      cssVar: "--rw-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#c17f5a",
      cssVar: "--rw-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#b4714b",
      cssVar: "--rw-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#a26238",
      cssVar: "--rw-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#92542a",
      cssVar: "--rw-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#814825",
      cssVar: "--rw-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#d5b67d",
      cssVar: "--rw-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#d0ad6d",
      cssVar: "--rw-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#caa45c",
      cssVar: "--rw-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#c59b4d",
      cssVar: "--rw-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#c0984d",
      cssVar: "--rw-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#b5904d",
      cssVar: "--rw-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#a58549",
      cssVar: "--rw-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#917542",
      cssVar: "--rw-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#786137",
      cssVar: "--rw-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#b2d5b8",
      cssVar: "--rw-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#97c6a5",
      cssVar: "--rw-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7bb796",
      cssVar: "--rw-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#60a88a",
      cssVar: "--rw-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#55957d",
      cssVar: "--rw-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#49836f",
      cssVar: "--rw-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#3e7160",
      cssVar: "--rw-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#325d52",
      cssVar: "--rw-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#284b41",
      cssVar: "--rw-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#96b2e1",
      cssVar: "--rw-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#85a5dc",
      cssVar: "--rw-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#7598d7",
      cssVar: "--rw-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#638cd2",
      cssVar: "--rw-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#527fcd",
      cssVar: "--rw-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#4f73b1",
      cssVar: "--rw-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#45649b",
      cssVar: "--rw-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#3b5685",
      cssVar: "--rw-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#31486f",
      cssVar: "--rw-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#b4a9d2",
      cssVar: "--rw-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#a79acb",
      cssVar: "--rw-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#9b8cc3",
      cssVar: "--rw-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#8e7dbb",
      cssVar: "--rw-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#8272aa",
      cssVar: "--rw-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#756799",
      cssVar: "--rw-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#675a8a",
      cssVar: "--rw-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#594d7a",
      cssVar: "--rw-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#4c416a",
      cssVar: "--rw-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#d9aac8",
      cssVar: "--rw-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#d492b9",
      cssVar: "--rw-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ca87b0",
      cssVar: "--rw-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#c57ba8",
      cssVar: "--rw-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#c079a5",
      cssVar: "--rw-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#be77a3",
      cssVar: "--rw-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#a86d91",
      cssVar: "--rw-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#875975",
      cssVar: "--rw-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#5a3b4f",
      cssVar: "--rw-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.emphasis",
      type: "color",
      value: "#444548",
      cssVar: "--rw-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#6a6a6c",
      cssVar: "--rw-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--rw-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--rw-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#c4c4c4",
      cssVar: "--rw-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#cacaca",
      cssVar: "--rw-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--rw-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#969696",
      cssVar: "--rw-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#adadad",
      cssVar: "--rw-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#c4c4c466",
      cssVar: "--rw-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#9a9a9a",
      cssVar: "--rw-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#b2b2b2",
      cssVar: "--rw-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#cacaca66",
      cssVar: "--rw-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#9e9e9e",
      cssVar: "--rw-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#b6b6b6",
      cssVar: "--rw-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#cfcfcf66",
      cssVar: "--rw-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#a6a6a6",
      cssVar: "--rw-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#bfbfbf",
      cssVar: "--rw-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#d9d9d966",
      cssVar: "--rw-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#864254",
      cssVar: "--rw-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#45649b",
      cssVar: "--rw-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--rw-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#449a93",
      cssVar: "--rw-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#864254",
      cssVar: "--rw-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#864254",
      cssVar: "--rw-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#786137",
      cssVar: "--rw-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#3e7160",
      cssVar: "--rw-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#3e7160",
      cssVar: "--rw-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#45649b",
      cssVar: "--rw-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#675a8a",
      cssVar: "--rw-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#3e3e41",
      cssVar: "--rw-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--rw-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--rw-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#26827a",
      cssVar: "--rw-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#298f87",
      cssVar: "--rw-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#6ebcb4",
      cssVar: "--rw-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#639993",
      cssVar: "--rw-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#77233f",
      cssVar: "--rw-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#7e3249",
      cssVar: "--rw-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#975967",
      cssVar: "--rw-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#7f4c56",
      cssVar: "--rw-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#77233f",
      cssVar: "--rw-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#7e3249",
      cssVar: "--rw-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#975967",
      cssVar: "--rw-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#7f4c56",
      cssVar: "--rw-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#6a4f1f",
      cssVar: "--rw-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#735821",
      cssVar: "--rw-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#887351",
      cssVar: "--rw-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#746245",
      cssVar: "--rw-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#1d6550",
      cssVar: "--rw-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#286b58",
      cssVar: "--rw-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#578172",
      cssVar: "--rw-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#4b6e61",
      cssVar: "--rw-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#1d6550",
      cssVar: "--rw-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#286b58",
      cssVar: "--rw-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#578172",
      cssVar: "--rw-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#4b6e61",
      cssVar: "--rw-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#284c89",
      cssVar: "--rw-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#365892",
      cssVar: "--rw-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#5a79af",
      cssVar: "--rw-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#4e6691",
      cssVar: "--rw-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#534377",
      cssVar: "--rw-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#5d4e80",
      cssVar: "--rw-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#796d9d",
      cssVar: "--rw-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#665c82",
      cssVar: "--rw-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--rw-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#8f8f8f",
      cssVar: "--rw-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--rw-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#cfcfcf66",
      cssVar: "--rw-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#d5d5d5",
      cssVar: "--rw-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#a3a3a3",
      cssVar: "--rw-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#bbbbbb",
      cssVar: "--rw-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#d5d5d566",
      cssVar: "--rw-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#cacaca",
      cssVar: "--rw-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#74c4bc",
      cssVar: "--rw-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#8c8c8c",
      cssVar: "--rw-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#b4b4b4",
      cssVar: "--rw-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--rw-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#cacaca66",
      cssVar: "--rw-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#32968f",
      cssVar: "--rw-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#5fa9a2",
      cssVar: "--rw-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#8ddede",
      cssVar: "--rw-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#84c3bd",
      cssVar: "--rw-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#c17986",
      cssVar: "--rw-color-muted-danger",
      description: "Generated danger muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#c17986",
      cssVar: "--rw-color-muted-negative",
      description: "Generated negative muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#a48f6e",
      cssVar: "--rw-color-muted-warning",
      description: "Generated warning muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#759e8e",
      cssVar: "--rw-color-muted-success",
      description: "Generated success muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#759e8e",
      cssVar: "--rw-color-muted-positive",
      description: "Generated positive muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#7095d6",
      cssVar: "--rw-color-muted-info",
      description: "Generated info muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#9588c5",
      cssVar: "--rw-color-muted-discovery",
      description: "Generated discovery muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#985b68",
      cssVar: "--rw-color-muted-danger-hover",
      description: "Generated danger muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#ab6b78",
      cssVar: "--rw-color-muted-danger-active",
      description: "Generated danger muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#de8d9e",
      cssVar: "--rw-color-muted-danger-inactive",
      description: "Generated danger muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#b97f88",
      cssVar: "--rw-color-muted-danger-disabled",
      description: "Generated danger muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#985b68",
      cssVar: "--rw-color-muted-negative-hover",
      description: "Generated negative muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#ab6b78",
      cssVar: "--rw-color-muted-negative-active",
      description: "Generated negative muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#de8d9e",
      cssVar: "--rw-color-muted-negative-inactive",
      description: "Generated negative muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#b97f88",
      cssVar: "--rw-color-muted-negative-disabled",
      description: "Generated negative muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#846f4b",
      cssVar: "--rw-color-muted-warning-hover",
      description: "Generated warning muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#937e5e",
      cssVar: "--rw-color-muted-warning-active",
      description: "Generated warning muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#caaf87",
      cssVar: "--rw-color-muted-warning-inactive",
      description: "Generated warning muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#a29177",
      cssVar: "--rw-color-muted-warning-disabled",
      description: "Generated warning muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#517d6d",
      cssVar: "--rw-color-muted-success-hover",
      description: "Generated success muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#648c7d",
      cssVar: "--rw-color-muted-success-active",
      description: "Generated success muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#90c2ae",
      cssVar: "--rw-color-muted-success-inactive",
      description: "Generated success muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#7d9d90",
      cssVar: "--rw-color-muted-success-disabled",
      description: "Generated success muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#517d6d",
      cssVar: "--rw-color-muted-positive-hover",
      description: "Generated positive muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#648c7d",
      cssVar: "--rw-color-muted-positive-active",
      description: "Generated positive muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#90c2ae",
      cssVar: "--rw-color-muted-positive-inactive",
      description: "Generated positive muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#7d9d90",
      cssVar: "--rw-color-muted-positive-disabled",
      description: "Generated positive muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#5875a8",
      cssVar: "--rw-color-muted-info-hover",
      description: "Generated info muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#6585be",
      cssVar: "--rw-color-muted-info-active",
      description: "Generated info muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#87b5dc",
      cssVar: "--rw-color-muted-info-inactive",
      description: "Generated info muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#7996c8",
      cssVar: "--rw-color-muted-info-disabled",
      description: "Generated info muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#786c9c",
      cssVar: "--rw-color-muted-discovery-hover",
      description: "Generated discovery muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#877aaf",
      cssVar: "--rw-color-muted-discovery-active",
      description: "Generated discovery muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#af9ce2",
      cssVar: "--rw-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#958bbb",
      cssVar: "--rw-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#d9d9d9",
      cssVar: "--rw-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#a1a1a2",
      cssVar: "--rw-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#373a3d66",
      cssVar: "--rw-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#6a6a6c",
      cssVar: "--rw-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#cacaca",
      cssVar: "--rw-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#45649b",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#7598d7",
      cssVar: "--rw-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#864254",
      cssVar: "--rw-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#bc7788",
      cssVar: "--rw-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#92542a",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#cc9678",
      cssVar: "--rw-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#786137",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#caa45c",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#3e7160",
      cssVar: "--rw-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#7bb796",
      cssVar: "--rw-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#45649b",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#7598d7",
      cssVar: "--rw-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#675a8a",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#9b8cc3",
      cssVar: "--rw-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#875975",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#ca87b0",
      cssVar: "--rw-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#284c89",
      cssVar: "--rw-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#365892",
      cssVar: "--rw-color-link-active",
      description: "Interactive color for links and linked text. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#5a79af",
      cssVar: "--rw-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#7d7d7e",
      cssVar: "--rw-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#949495",
      cssVar: "--rw-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#c4c4c5",
      cssVar: "--rw-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#343438",
      cssVar: "--rw-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#449a93",
      cssVar: "--rw-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#551928",
      cssVar: "--rw-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#551928",
      cssVar: "--rw-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#543d18",
      cssVar: "--rw-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#185341",
      cssVar: "--rw-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#185341",
      cssVar: "--rw-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#1e3769",
      cssVar: "--rw-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#3b1d65",
      cssVar: "--rw-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#3e3e41",
      cssVar: "--rw-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#2e2e30",
      cssVar: "--rw-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#282828",
      cssVar: "--rw-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#343437",
      cssVar: "--rw-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#26827a",
      cssVar: "--rw-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#298f87",
      cssVar: "--rw-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#6ebcb4",
      cssVar: "--rw-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#639993",
      cssVar: "--rw-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#572532",
      cssVar: "--rw-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#561f2d",
      cssVar: "--rw-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#4f171f",
      cssVar: "--rw-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#4f1f2a",
      cssVar: "--rw-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#572532",
      cssVar: "--rw-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#561f2d",
      cssVar: "--rw-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#4f171f",
      cssVar: "--rw-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#4f1f2a",
      cssVar: "--rw-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#564428",
      cssVar: "--rw-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#554220",
      cssVar: "--rw-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#4d3316",
      cssVar: "--rw-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#4d3d22",
      cssVar: "--rw-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#164b35",
      cssVar: "--rw-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#174f3b",
      cssVar: "--rw-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#2b5345",
      cssVar: "--rw-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#274b3e",
      cssVar: "--rw-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#164b35",
      cssVar: "--rw-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#174f3b",
      cssVar: "--rw-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#2b5345",
      cssVar: "--rw-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#274b3e",
      cssVar: "--rw-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#1c2860",
      cssVar: "--rw-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#1d3065",
      cssVar: "--rw-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#2a436f",
      cssVar: "--rw-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#243a61",
      cssVar: "--rw-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#442e68",
      cssVar: "--rw-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#3f2566",
      cssVar: "--rw-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#331b5d",
      cssVar: "--rw-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#39275b",
      cssVar: "--rw-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--rw-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--rw-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--rw-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--rw-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--rw-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--rw-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--rw-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--rw-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--rw-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--rw-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--rw-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--rw-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--rw-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--rw-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--rw-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--rw-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--rw-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--rw-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--rw-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--rw-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--rw-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--rw-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--rw-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--rw-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--rw-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--rw-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-37xl",
      description: "A 284px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--rw-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--rw-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--rw-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--rw-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--rw-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--rw-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "0.95625",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.051875",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.243125",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.53",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.092857",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.190001",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.071",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "0.918",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "0.85",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-10xl",
      description: "Line height for text-10xl",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-none)",
      cssVar: "--rw-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--rw-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #15151813",
      cssVar: "--rw-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #15151813",
      cssVar: "--rw-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #15151813",
      cssVar: "--rw-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #15151813",
      cssVar: "--rw-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #1fb2a620",
      cssVar: "--rw-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1fb2a620",
      cssVar: "--rw-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1fb2a620",
      cssVar: "--rw-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1fb2a620",
      cssVar: "--rw-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e20",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e20",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e20",
      cssVar: "--rw-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e20",
      cssVar: "--rw-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541720",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541720",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541720",
      cssVar: "--rw-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541720",
      cssVar: "--rw-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5320",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5320",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5320",
      cssVar: "--rw-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5320",
      cssVar: "--rw-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b320",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b320",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b320",
      cssVar: "--rw-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b320",
      cssVar: "--rw-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439520",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439520",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439520",
      cssVar: "--rw-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439520",
      cssVar: "--rw-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5320",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5320",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5320",
      cssVar: "--rw-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5320",
      cssVar: "--rw-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e20",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e20",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e20",
      cssVar: "--rw-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e20",
      cssVar: "--rw-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-title",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.4xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-title",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xl",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xs",
      description: "The display - extra small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-lg",
      description: "The large eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-sm",
      description: "The small eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-body-lg",
      description: "The body large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-md",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-sm",
      description: "The body small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Geist Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-code",
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
      cssVar: "--rw-color-transparent",
      description: "Fully transparent white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.black",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-black",
      description: "Near-black neutral.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.white",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-white",
      description: "Pure white.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-neutral-1",
      description: "Bright off-white gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.2",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-neutral-2",
      description: "Very light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.3",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-neutral-3",
      description: "Light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.4",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-neutral-4",
      description: "Soft light gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.5",
      type: "color",
      value: "#ebebed",
      cssVar: "--rw-color-neutral-5",
      description: "Pale gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.6",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--rw-color-neutral-6",
      description: "Light-medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.7",
      type: "color",
      value: "#9a9fa7",
      cssVar: "--rw-color-neutral-7",
      description: "Medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.8",
      type: "color",
      value: "#737383",
      cssVar: "--rw-color-neutral-8",
      description: "Dark medium gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.9",
      type: "color",
      value: "#4e515b",
      cssVar: "--rw-color-neutral-9",
      description: "Deep gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.10",
      type: "color",
      value: "#2b2b33",
      cssVar: "--rw-color-neutral-10",
      description: "Charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.11",
      type: "color",
      value: "#08080a",
      cssVar: "--rw-color-neutral-11",
      description: "Dark charcoal gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.12",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-neutral-12",
      description: "Deep graphite gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.13",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-neutral-13",
      description: "Near-black graphite.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.neutral.14",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-neutral-14",
      description: "Almost black gray.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.1",
      type: "color",
      value: "#f997b0",
      cssVar: "--rw-color-red-1",
      description: "Pale coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.2",
      type: "color",
      value: "#f77395",
      cssVar: "--rw-color-red-2",
      description: "Light coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.3",
      type: "color",
      value: "#f6507a",
      cssVar: "--rw-color-red-3",
      description: "Soft coral red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.4",
      type: "color",
      value: "#f42c5f",
      cssVar: "--rw-color-red-4",
      description: "Warm salmon red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.5",
      type: "color",
      value: "#f00a45",
      cssVar: "--rw-color-red-5",
      description: "Muted raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.6",
      type: "color",
      value: "#b90a37",
      cssVar: "--rw-color-red-6",
      description: "Deep raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.7",
      type: "color",
      value: "#840929",
      cssVar: "--rw-color-red-7",
      description: "Rich raspberry red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.8",
      type: "color",
      value: "#510619",
      cssVar: "--rw-color-red-8",
      description: "Dark burgundy red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.red.9",
      type: "color",
      value: "#1d0309",
      cssVar: "--rw-color-red-9",
      description: "Deep wine red.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.1",
      type: "color",
      value: "#ffeee5",
      cssVar: "--rw-color-orange-1",
      description: "Pale peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.2",
      type: "color",
      value: "#ffd3bb",
      cssVar: "--rw-color-orange-2",
      description: "Light apricot orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.3",
      type: "color",
      value: "#ffb890",
      cssVar: "--rw-color-orange-3",
      description: "Soft sandy orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.4",
      type: "color",
      value: "#ff9c65",
      cssVar: "--rw-color-orange-4",
      description: "Light peach orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.5",
      type: "color",
      value: "#ff803a",
      cssVar: "--rw-color-orange-5",
      description: "Muted warm orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.6",
      type: "color",
      value: "#ff5c00",
      cssVar: "--rw-color-orange-6",
      description: "Medium tangerine orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.7",
      type: "color",
      value: "#b24600",
      cssVar: "--rw-color-orange-7",
      description: "Bright amber orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.8",
      type: "color",
      value: "#742f00",
      cssVar: "--rw-color-orange-8",
      description: "Rich burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.orange.9",
      type: "color",
      value: "#471b00",
      cssVar: "--rw-color-orange-9",
      description: "Deep burnt orange.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.1",
      type: "color",
      value: "#ffe1ab",
      cssVar: "--rw-color-yellow-1",
      description: "Pale wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.2",
      type: "color",
      value: "#ffd280",
      cssVar: "--rw-color-yellow-2",
      description: "Light sandy yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.3",
      type: "color",
      value: "#ffc253",
      cssVar: "--rw-color-yellow-3",
      description: "Soft golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.4",
      type: "color",
      value: "#ffb327",
      cssVar: "--rw-color-yellow-4",
      description: "Muted amber yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.5",
      type: "color",
      value: "#ffb01e",
      cssVar: "--rw-color-yellow-5",
      description: "Medium honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.6",
      type: "color",
      value: "#ffa706",
      cssVar: "--rw-color-yellow-6",
      description: "Warm wheat yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.7",
      type: "color",
      value: "#dc8f00",
      cssVar: "--rw-color-yellow-7",
      description: "Rich golden yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.8",
      type: "color",
      value: "#a26902",
      cssVar: "--rw-color-yellow-8",
      description: "Deep honey yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.yellow.9",
      type: "color",
      value: "#583902",
      cssVar: "--rw-color-yellow-9",
      description: "Dark ochre yellow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-green-1",
      description: "Pale mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.2",
      type: "color",
      value: "#c9f8d8",
      cssVar: "--rw-color-green-2",
      description: "Light spring green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.3",
      type: "color",
      value: "#7ceeaf",
      cssVar: "--rw-color-green-3",
      description: "Soft leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.4",
      type: "color",
      value: "#2de498",
      cssVar: "--rw-color-green-4",
      description: "Muted leaf green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.5",
      type: "color",
      value: "#1db77c",
      cssVar: "--rw-color-green-5",
      description: "Cool mint green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.6",
      type: "color",
      value: "#13825b",
      cssVar: "--rw-color-green-6",
      description: "Medium jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.7",
      type: "color",
      value: "#0a4e38",
      cssVar: "--rw-color-green-7",
      description: "Rich jade green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.8",
      type: "color",
      value: "#031611",
      cssVar: "--rw-color-green-8",
      description: "Deep forest green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.green.9",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-green-9",
      description: "Dark emerald green.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.1",
      type: "color",
      value: "#f8fbff",
      cssVar: "--rw-color-blue-1",
      description: "Pale periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.2",
      type: "color",
      value: "#cbdeff",
      cssVar: "--rw-color-blue-2",
      description: "Light periwinkle blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.3",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--rw-color-blue-3",
      description: "Light sky blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.4",
      type: "color",
      value: "#70a4ff",
      cssVar: "--rw-color-blue-4",
      description: "Soft cornflower blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.5",
      type: "color",
      value: "#4387ff",
      cssVar: "--rw-color-blue-5",
      description: "Bright cobalt blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.6",
      type: "color",
      value: "#025eff",
      cssVar: "--rw-color-blue-6",
      description: "Medium azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.7",
      type: "color",
      value: "#0145be",
      cssVar: "--rw-color-blue-7",
      description: "Deep azure blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.8",
      type: "color",
      value: "#012e7c",
      cssVar: "--rw-color-blue-8",
      description: "Vivid cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.blue.9",
      type: "color",
      value: "#00163b",
      cssVar: "--rw-color-blue-9",
      description: "Rich cerulean blue.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-purple-1",
      description: "Pale lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.2",
      type: "color",
      value: "#e1d7fb",
      cssVar: "--rw-color-purple-2",
      description: "Light periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.3",
      type: "color",
      value: "#c1adf7",
      cssVar: "--rw-color-purple-3",
      description: "Soft lavender purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.4",
      type: "color",
      value: "#a283f3",
      cssVar: "--rw-color-purple-4",
      description: "Soft violet purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.5",
      type: "color",
      value: "#815ddd",
      cssVar: "--rw-color-purple-5",
      description: "Muted indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.6",
      type: "color",
      value: "#623dc3",
      cssVar: "--rw-color-purple-6",
      description: "Medium periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.7",
      type: "color",
      value: "#492b9b",
      cssVar: "--rw-color-purple-7",
      description: "Deep periwinkle purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.8",
      type: "color",
      value: "#321c71",
      cssVar: "--rw-color-purple-8",
      description: "Vivid indigo purple.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.purple.9",
      type: "color",
      value: "#1d0f42",
      cssVar: "--rw-color-purple-9",
      description: "Rich slate indigo.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.1",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-pink-1",
      description: "Pale blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.2",
      type: "color",
      value: "#ffd5ee",
      cssVar: "--rw-color-pink-2",
      description: "Light blush pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.3",
      type: "color",
      value: "#ffaade",
      cssVar: "--rw-color-pink-3",
      description: "Soft rose pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.4",
      type: "color",
      value: "#ff85d0",
      cssVar: "--rw-color-pink-4",
      description: "Bright fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.5",
      type: "color",
      value: "#fa7dcb",
      cssVar: "--rw-color-pink-5",
      description: "Vivid fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.6",
      type: "color",
      value: "#f976c6",
      cssVar: "--rw-color-pink-6",
      description: "Rich magenta pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.7",
      type: "color",
      value: "#dc50a6",
      cssVar: "--rw-color-pink-7",
      description: "Deep fuchsia pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.8",
      type: "color",
      value: "#932b6b",
      cssVar: "--rw-color-pink-8",
      description: "Deep berry pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.pink.9",
      type: "color",
      value: "#1c0815",
      cssVar: "--rw-color-pink-9",
      description: "Dark plum pink.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.emphasis",
      type: "color",
      value: "#08080a",
      cssVar: "--rw-color-ink-emphasis",
      description: "Primary text and icon color for high-emphasis content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.body",
      type: "color",
      value: "#4e515b",
      cssVar: "--rw-color-ink-body",
      description: "Default text and icon color for standard content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtle",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--rw-color-ink-subtle",
      description: "Softer text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.ink.subtlest",
      type: "color",
      value: "#ebebed",
      cssVar: "--rw-color-ink-subtlest",
      description: "Softest text and icon color for supporting content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-sunken",
      description: "Recessed surface for inset controls and grouped content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-canvas",
      description: "Base application canvas surface.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-elevated",
      description: "Raised surface for cards and controls.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-floating",
      description: "Floating surface for menus, popovers, and dialogs.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-overlay",
      description: "Topmost surface for transient overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-hover",
      type: "color",
      value: "#afafaf",
      cssVar: "--rw-color-surface-sunken-hover",
      description: "Recessed surface for inset controls and grouped content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-active",
      type: "color",
      value: "#dddddd",
      cssVar: "--rw-color-surface-sunken-active",
      description: "Recessed surface for inset controls and grouped content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-sunken-inactive",
      description: "Recessed surface for inset controls and grouped content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.sunken-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-surface-sunken-disabled",
      description: "Recessed surface for inset controls and grouped content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-hover",
      type: "color",
      value: "#b7b7b7",
      cssVar: "--rw-color-surface-canvas-hover",
      description: "Base application canvas surface. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-active",
      type: "color",
      value: "#e9e9e9",
      cssVar: "--rw-color-surface-canvas-active",
      description: "Base application canvas surface. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-canvas-inactive",
      description: "Base application canvas surface. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.canvas-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-surface-canvas-disabled",
      description: "Base application canvas surface. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-hover",
      type: "color",
      value: "#bfbfbf",
      cssVar: "--rw-color-surface-elevated-hover",
      description: "Raised surface for cards and controls. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-active",
      type: "color",
      value: "#f1f1f1",
      cssVar: "--rw-color-surface-elevated-active",
      description: "Raised surface for cards and controls. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-elevated-inactive",
      description: "Raised surface for cards and controls. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.elevated-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-surface-elevated-disabled",
      description: "Raised surface for cards and controls. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-surface-floating-hover",
      description: "Floating surface for menus, popovers, and dialogs. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-surface-floating-active",
      description: "Floating surface for menus, popovers, and dialogs. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-floating-inactive",
      description: "Floating surface for menus, popovers, and dialogs. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.floating-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-surface-floating-disabled",
      description: "Floating surface for menus, popovers, and dialogs. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-hover",
      type: "color",
      value: "#cfcfcf",
      cssVar: "--rw-color-surface-overlay-hover",
      description: "Topmost surface for transient overlays. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-active",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-overlay-active",
      description: "Topmost surface for transient overlays. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-surface-overlay-inactive",
      description: "Topmost surface for transient overlays. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.surface.overlay-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-surface-overlay-disabled",
      description: "Topmost surface for transient overlays. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.required",
      type: "color",
      value: "#840929",
      cssVar: "--rw-color-required",
      description: "Indicator color for required form fields.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link",
      type: "color",
      value: "#0145be",
      cssVar: "--rw-color-link",
      description: "Interactive color for links and linked text.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--rw-color-hairline",
      description: "Subtle color for hairline borders and separators.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-accent-base",
      description: "Primary neutral accent for emphasized controls and content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand",
      type: "color",
      value: "#00bcad",
      cssVar: "--rw-color-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger",
      type: "color",
      value: "#840929",
      cssVar: "--rw-color-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative",
      type: "color",
      value: "#840929",
      cssVar: "--rw-color-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning",
      type: "color",
      value: "#583902",
      cssVar: "--rw-color-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success",
      type: "color",
      value: "#0a4e38",
      cssVar: "--rw-color-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive",
      type: "color",
      value: "#0a4e38",
      cssVar: "--rw-color-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info",
      type: "color",
      value: "#0145be",
      cssVar: "--rw-color-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery",
      type: "color",
      value: "#492b9b",
      cssVar: "--rw-color-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-accent-base-hover",
      description: "Primary neutral accent for emphasized controls and content. (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-accent-base-active",
      description: "Primary neutral accent for emphasized controls and content. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-accent-base-inactive",
      description: "Primary neutral accent for emphasized controls and content. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.base-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-accent-base-disabled",
      description: "Primary neutral accent for emphasized controls and content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-hover",
      type: "color",
      value: "#004a44",
      cssVar: "--rw-color-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-active",
      type: "color",
      value: "#006d64",
      cssVar: "--rw-color-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-inactive",
      type: "color",
      value: "#5cfbeb",
      cssVar: "--rw-color-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.brand-disabled",
      type: "color",
      value: "#35c4b5",
      cssVar: "--rw-color-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-hover",
      type: "color",
      value: "#2d000f",
      cssVar: "--rw-color-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-active",
      type: "color",
      value: "#5a001b",
      cssVar: "--rw-color-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-inactive",
      type: "color",
      value: "#bc2445",
      cssVar: "--rw-color-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.danger-disabled",
      type: "color",
      value: "#7b182d",
      cssVar: "--rw-color-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-hover",
      type: "color",
      value: "#2d000f",
      cssVar: "--rw-color-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-active",
      type: "color",
      value: "#5a001b",
      cssVar: "--rw-color-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-inactive",
      type: "color",
      value: "#bc2445",
      cssVar: "--rw-color-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.negative-disabled",
      type: "color",
      value: "#7b182d",
      cssVar: "--rw-color-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-hover",
      type: "color",
      value: "#0b0700",
      cssVar: "--rw-color-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-active",
      type: "color",
      value: "#211600",
      cssVar: "--rw-color-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-inactive",
      type: "color",
      value: "#92661d",
      cssVar: "--rw-color-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.warning-disabled",
      type: "color",
      value: "#5c4012",
      cssVar: "--rw-color-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-active",
      type: "color",
      value: "#002017",
      cssVar: "--rw-color-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-inactive",
      type: "color",
      value: "#298565",
      cssVar: "--rw-color-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.success-disabled",
      type: "color",
      value: "#1b533f",
      cssVar: "--rw-color-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-active",
      type: "color",
      value: "#002017",
      cssVar: "--rw-color-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-inactive",
      type: "color",
      value: "#298565",
      cssVar: "--rw-color-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.positive-disabled",
      type: "color",
      value: "#1b533f",
      cssVar: "--rw-color-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-hover",
      type: "color",
      value: "#00235e",
      cssVar: "--rw-color-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-active",
      type: "color",
      value: "#00348e",
      cssVar: "--rw-color-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-inactive",
      type: "color",
      value: "#216df4",
      cssVar: "--rw-color-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.info-disabled",
      type: "color",
      value: "#1449a9",
      cssVar: "--rw-color-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-hover",
      type: "color",
      value: "#280e61",
      cssVar: "--rw-color-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-active",
      type: "color",
      value: "#391c7e",
      cssVar: "--rw-color-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-inactive",
      type: "color",
      value: "#6c4ec9",
      cssVar: "--rw-color-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.accent.discovery-disabled",
      type: "color",
      value: "#48328a",
      cssVar: "--rw-color-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-base",
      description: "Content color placed on neutral accent backgrounds.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-hover",
      type: "color",
      value: "#9f9f9f",
      cssVar: "--rw-color-on-accent-base-hover",
      description: "Content color placed on neutral accent backgrounds. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-base-active",
      description: "Content color placed on neutral accent backgrounds. (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-accent-base-inactive",
      description: "Content color placed on neutral accent backgrounds. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.base-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-base-disabled",
      description: "Content color placed on neutral accent backgrounds. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-brand",
      description: "Brand accent for primary actions and emphasis.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-danger",
      description: "Danger accent for destructive actions and critical states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-negative",
      description: "Negative accent for error states and invalid input.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-warning",
      description: "Warning accent for cautionary states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-success",
      description: "Success accent for confirmed states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-positive",
      description: "Positive accent for favorable states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-info",
      description: "Informational accent for guidance and neutral status.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-discovery",
      description: "Discovery accent for new or exploratory content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-brand-hover",
      description: "Brand accent for primary actions and emphasis. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-brand-active",
      description: "Brand accent for primary actions and emphasis. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-brand-inactive",
      description: "Brand accent for primary actions and emphasis. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.brand-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-brand-disabled",
      description: "Brand accent for primary actions and emphasis. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-danger-hover",
      description: "Danger accent for destructive actions and critical states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-danger-active",
      description: "Danger accent for destructive actions and critical states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-danger-inactive",
      description: "Danger accent for destructive actions and critical states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.danger-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-danger-disabled",
      description: "Danger accent for destructive actions and critical states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-negative-hover",
      description: "Negative accent for error states and invalid input. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-negative-active",
      description: "Negative accent for error states and invalid input. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-negative-inactive",
      description: "Negative accent for error states and invalid input. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.negative-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-negative-disabled",
      description: "Negative accent for error states and invalid input. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-warning-hover",
      description: "Warning accent for cautionary states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-warning-active",
      description: "Warning accent for cautionary states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-warning-inactive",
      description: "Warning accent for cautionary states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.warning-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-warning-disabled",
      description: "Warning accent for cautionary states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-success-hover",
      description: "Success accent for confirmed states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-success-active",
      description: "Success accent for confirmed states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-success-inactive",
      description: "Success accent for confirmed states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.success-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-success-disabled",
      description: "Success accent for confirmed states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-positive-hover",
      description: "Positive accent for favorable states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-positive-active",
      description: "Positive accent for favorable states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-positive-inactive",
      description: "Positive accent for favorable states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.positive-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-positive-disabled",
      description: "Positive accent for favorable states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-info-hover",
      description: "Informational accent for guidance and neutral status. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-info-active",
      description: "Informational accent for guidance and neutral status. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-info-inactive",
      description: "Informational accent for guidance and neutral status. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.info-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-info-disabled",
      description: "Informational accent for guidance and neutral status. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-hover",
      type: "color",
      value: "#c9c9c9",
      cssVar: "--rw-color-on-accent-discovery-hover",
      description: "Discovery accent for new or exploratory content. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-active",
      type: "color",
      value: "#fbfbfb",
      cssVar: "--rw-color-on-accent-discovery-active",
      description: "Discovery accent for new or exploratory content. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-on-accent-discovery-inactive",
      description: "Discovery accent for new or exploratory content. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-accent.discovery-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-on-accent-discovery-disabled",
      description: "Discovery accent for new or exploratory content. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-muted-base",
      description: "Muted neutral accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand",
      type: "color",
      value: "#75fff1",
      cssVar: "--rw-color-muted-brand",
      description: "Muted brand accent background for low-emphasis states.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-hover",
      type: "color",
      value: "#999999",
      cssVar: "--rw-color-muted-base-hover",
      description: "Muted neutral accent background for low-emphasis states. (hover, 30% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-active",
      type: "color",
      value: "#ececec",
      cssVar: "--rw-color-muted-base-active",
      description: "Muted neutral accent background for low-emphasis states. (active, 10% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-muted-base-inactive",
      description: "Muted neutral accent background for low-emphasis states. (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.base-disabled",
      type: "color",
      value: "#ffffff66",
      cssVar: "--rw-color-muted-base-disabled",
      description: "Muted neutral accent background for low-emphasis states. (disabled, 40% opacity)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-hover",
      type: "color",
      value: "#008e84",
      cssVar: "--rw-color-muted-brand-hover",
      description: "Muted brand accent background for low-emphasis states. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-active",
      type: "color",
      value: "#2ae6d5",
      cssVar: "--rw-color-muted-brand-active",
      description: "Muted brand accent background for low-emphasis states. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-inactive",
      type: "color",
      value: "#e1ffff",
      cssVar: "--rw-color-muted-brand-inactive",
      description: "Muted brand accent background for low-emphasis states. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.brand-disabled",
      type: "color",
      value: "#9cfaf0",
      cssVar: "--rw-color-muted-brand-disabled",
      description: "Muted brand accent background for low-emphasis states. (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger",
      type: "color",
      value: "#fc7d94",
      cssVar: "--rw-color-muted-danger",
      description: "Generated danger muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative",
      type: "color",
      value: "#fc7d94",
      cssVar: "--rw-color-muted-negative",
      description: "Generated negative muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning",
      type: "color",
      value: "#d6a252",
      cssVar: "--rw-color-muted-warning",
      description: "Generated warning muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success",
      type: "color",
      value: "#61c6a0",
      cssVar: "--rw-color-muted-success",
      description: "Generated success muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive",
      type: "color",
      value: "#61c6a0",
      cssVar: "--rw-color-muted-positive",
      description: "Generated positive muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info",
      type: "color",
      value: "#92baff",
      cssVar: "--rw-color-muted-info",
      description: "Generated info muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery",
      type: "color",
      value: "#b9a6fa",
      cssVar: "--rw-color-muted-discovery",
      description: "Generated discovery muted background for the light theme",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-hover",
      type: "color",
      value: "#c12747",
      cssVar: "--rw-color-muted-danger-hover",
      description: "Generated danger muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-active",
      type: "color",
      value: "#e34c69",
      cssVar: "--rw-color-muted-danger-active",
      description: "Generated danger muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-inactive",
      type: "color",
      value: "#ffe1e7",
      cssVar: "--rw-color-muted-danger-inactive",
      description: "Generated danger muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.danger-disabled",
      type: "color",
      value: "#ef8697",
      cssVar: "--rw-color-muted-danger-disabled",
      description: "Generated danger muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-hover",
      type: "color",
      value: "#c12747",
      cssVar: "--rw-color-muted-negative-hover",
      description: "Generated negative muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-active",
      type: "color",
      value: "#e34c69",
      cssVar: "--rw-color-muted-negative-active",
      description: "Generated negative muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-inactive",
      type: "color",
      value: "#ffe1e7",
      cssVar: "--rw-color-muted-negative-inactive",
      description: "Generated negative muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.negative-disabled",
      type: "color",
      value: "#ef8697",
      cssVar: "--rw-color-muted-negative-disabled",
      description: "Generated negative muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-hover",
      type: "color",
      value: "#865c15",
      cssVar: "--rw-color-muted-warning-hover",
      description: "Generated warning muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-active",
      type: "color",
      value: "#b3802e",
      cssVar: "--rw-color-muted-warning-active",
      description: "Generated warning muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-inactive",
      type: "color",
      value: "#ffddaa",
      cssVar: "--rw-color-muted-warning-inactive",
      description: "Generated warning muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.warning-disabled",
      type: "color",
      value: "#cda567",
      cssVar: "--rw-color-muted-warning-disabled",
      description: "Generated warning muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-hover",
      type: "color",
      value: "#207859",
      cssVar: "--rw-color-muted-success-hover",
      description: "Generated success muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-active",
      type: "color",
      value: "#3ca37d",
      cssVar: "--rw-color-muted-success-active",
      description: "Generated success muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-inactive",
      type: "color",
      value: "#b5f5dc",
      cssVar: "--rw-color-muted-success-inactive",
      description: "Generated success muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.success-disabled",
      type: "color",
      value: "#74c2a3",
      cssVar: "--rw-color-muted-success-disabled",
      description: "Generated success muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-hover",
      type: "color",
      value: "#207859",
      cssVar: "--rw-color-muted-positive-hover",
      description: "Generated positive muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-active",
      type: "color",
      value: "#3ca37d",
      cssVar: "--rw-color-muted-positive-active",
      description: "Generated positive muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-inactive",
      type: "color",
      value: "#b5f5dc",
      cssVar: "--rw-color-muted-positive-inactive",
      description: "Generated positive muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.positive-disabled",
      type: "color",
      value: "#74c2a3",
      cssVar: "--rw-color-muted-positive-disabled",
      description: "Generated positive muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-hover",
      type: "color",
      value: "#1864e9",
      cssVar: "--rw-color-muted-info-hover",
      description: "Generated info muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-active",
      type: "color",
      value: "#4a8bff",
      cssVar: "--rw-color-muted-info-active",
      description: "Generated info muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-inactive",
      type: "color",
      value: "#d1e9ff",
      cssVar: "--rw-color-muted-info-inactive",
      description: "Generated info muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.info-disabled",
      type: "color",
      value: "#8ab5ff",
      cssVar: "--rw-color-muted-info-disabled",
      description: "Generated info muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-hover",
      type: "color",
      value: "#6a4ac7",
      cssVar: "--rw-color-muted-discovery-hover",
      description: "Generated discovery muted background for the light theme (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-active",
      type: "color",
      value: "#8f75e3",
      cssVar: "--rw-color-muted-discovery-active",
      description: "Generated discovery muted background for the light theme (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-muted-discovery-inactive",
      description: "Generated discovery muted background for the light theme (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.muted.discovery-disabled",
      type: "color",
      value: "#b3a4ee",
      cssVar: "--rw-color-muted-discovery-disabled",
      description: "Generated discovery muted background for the light theme (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.background",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-overlay-background",
      description: "Surface color for floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.border",
      type: "color",
      value: "#c3c3ca",
      cssVar: "--rw-color-overlay-border",
      description: "Border color that defines floating overlays.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.overlay.backdrop",
      type: "color",
      value: "#00000066",
      cssVar: "--rw-color-overlay-backdrop",
      description: "Backdrop color that separates overlays from page content.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.xsmall",
      type: "shadow",
      value: "var(--shadow-2xs)",
      cssVar: "--rw-color-shadow-resting-xsmall",
      description: "Color used by the extra-small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.small",
      type: "shadow",
      value: "var(--shadow-xs)",
      cssVar: "--rw-color-shadow-resting-small",
      description: "Color used by the small resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.resting.medium",
      type: "shadow",
      value: "var(--shadow-sm)",
      cssVar: "--rw-color-shadow-resting-medium",
      description: "Color used by the medium resting shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.small",
      type: "shadow",
      value: "var(--shadow-md)",
      cssVar: "--rw-color-shadow-floating-small",
      description: "Color used by the small floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.medium",
      type: "shadow",
      value: "var(--shadow-lg)",
      cssVar: "--rw-color-shadow-floating-medium",
      description: "Color used by the medium floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.large",
      type: "shadow",
      value: "var(--shadow-xl)",
      cssVar: "--rw-color-shadow-floating-large",
      description: "Color used by the large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.floating.xlarge",
      type: "shadow",
      value: "var(--shadow-2xl)",
      cssVar: "--rw-color-shadow-floating-xlarge",
      description: "Color used by the extra-large floating shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.shadow.inset",
      type: "shadow",
      value: "var(--inset-shadow-xs)",
      cssVar: "--rw-color-shadow-inset",
      description: "Color used by the inset shadow.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.emphasis",
      type: "color",
      value: "#4e515b",
      cssVar: "--rw-color-data-neutral-emphasis",
      description: "High-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.neutral.subtle",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-data-neutral-subtle",
      description: "Low-emphasis neutral data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.emphasis",
      type: "color",
      value: "#0145be",
      cssVar: "--rw-color-data-brand-emphasis",
      description: "High-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.brand.subtle",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--rw-color-data-brand-subtle",
      description: "Low-emphasis brand data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.emphasis",
      type: "color",
      value: "#840929",
      cssVar: "--rw-color-data-red-emphasis",
      description: "High-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.red.subtle",
      type: "color",
      value: "#f77395",
      cssVar: "--rw-color-data-red-subtle",
      description: "Low-emphasis red data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.emphasis",
      type: "color",
      value: "#742f00",
      cssVar: "--rw-color-data-orange-emphasis",
      description: "High-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.orange.subtle",
      type: "color",
      value: "#ffb890",
      cssVar: "--rw-color-data-orange-subtle",
      description: "Low-emphasis orange data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.emphasis",
      type: "color",
      value: "#583902",
      cssVar: "--rw-color-data-yellow-emphasis",
      description: "High-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.yellow.subtle",
      type: "color",
      value: "#ffc253",
      cssVar: "--rw-color-data-yellow-subtle",
      description: "Low-emphasis yellow data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.emphasis",
      type: "color",
      value: "#0a4e38",
      cssVar: "--rw-color-data-green-emphasis",
      description: "High-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.green.subtle",
      type: "color",
      value: "#7ceeaf",
      cssVar: "--rw-color-data-green-subtle",
      description: "Low-emphasis green data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.emphasis",
      type: "color",
      value: "#0145be",
      cssVar: "--rw-color-data-blue-emphasis",
      description: "High-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.blue.subtle",
      type: "color",
      value: "#9ec1ff",
      cssVar: "--rw-color-data-blue-subtle",
      description: "Low-emphasis blue data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.emphasis",
      type: "color",
      value: "#492b9b",
      cssVar: "--rw-color-data-purple-emphasis",
      description: "High-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.purple.subtle",
      type: "color",
      value: "#c1adf7",
      cssVar: "--rw-color-data-purple-subtle",
      description: "Low-emphasis purple data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.emphasis",
      type: "color",
      value: "#932b6b",
      cssVar: "--rw-color-data-pink-emphasis",
      description: "High-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.data.pink.subtle",
      type: "color",
      value: "#ffaade",
      cssVar: "--rw-color-data-pink-subtle",
      description: "Low-emphasis pink data-series color.",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-hover",
      type: "color",
      value: "#00235e",
      cssVar: "--rw-color-link-hover",
      description: "Interactive color for links and linked text. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-active",
      type: "color",
      value: "#00348e",
      cssVar: "--rw-color-link-active",
      description: "Interactive color for links and linked text. (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.link-inactive",
      type: "color",
      value: "#216df4",
      cssVar: "--rw-color-link-inactive",
      description: "Interactive color for links and linked text. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-hover",
      type: "color",
      value: "#747482",
      cssVar: "--rw-color-hairline-hover",
      description: "Subtle color for hairline borders and separators. (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-active",
      type: "color",
      value: "#a6a6b0",
      cssVar: "--rw-color-hairline-active",
      description: "Subtle color for hairline borders and separators. (active, 8% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.hairline-inactive",
      type: "color",
      value: "#ffffff",
      cssVar: "--rw-color-hairline-inactive",
      description: "Subtle color for hairline borders and separators. (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-base",
      description: "Generated base foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand",
      type: "color",
      value: "#00bcad",
      cssVar: "--rw-color-on-muted-brand",
      description: "Generated brand foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-danger",
      description: "Generated danger foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-negative",
      description: "Generated negative foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-warning",
      description: "Generated warning foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-success",
      description: "Generated success foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-positive",
      description: "Generated positive foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info",
      type: "color",
      value: "#000207",
      cssVar: "--rw-color-on-muted-info",
      description: "Generated info foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-discovery",
      description: "Generated discovery foreground on muted backgrounds",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-base-hover",
      description: "Generated base foreground on muted backgrounds (hover, 30% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-base-active",
      description: "Generated base foreground on muted backgrounds (active, light base primitive)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-base-inactive",
      description: "Generated base foreground on muted backgrounds (inactive, 40% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.base-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-base-disabled",
      description: "Generated base foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-hover",
      type: "color",
      value: "#004a44",
      cssVar: "--rw-color-on-muted-brand-hover",
      description: "Generated brand foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-active",
      type: "color",
      value: "#006d64",
      cssVar: "--rw-color-on-muted-brand-active",
      description: "Generated brand foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-inactive",
      type: "color",
      value: "#5cfbeb",
      cssVar: "--rw-color-on-muted-brand-inactive",
      description: "Generated brand foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.brand-disabled",
      type: "color",
      value: "#35c4b5",
      cssVar: "--rw-color-on-muted-brand-disabled",
      description: "Generated brand foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-danger-hover",
      description: "Generated danger foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-danger-active",
      description: "Generated danger foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-danger-inactive",
      description: "Generated danger foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.danger-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-danger-disabled",
      description: "Generated danger foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-negative-hover",
      description: "Generated negative foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-negative-active",
      description: "Generated negative foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-negative-inactive",
      description: "Generated negative foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.negative-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-negative-disabled",
      description: "Generated negative foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-warning-hover",
      description: "Generated warning foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-warning-active",
      description: "Generated warning foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-warning-inactive",
      description: "Generated warning foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.warning-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-warning-disabled",
      description: "Generated warning foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-success-hover",
      description: "Generated success foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-success-active",
      description: "Generated success foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-success-inactive",
      description: "Generated success foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.success-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-success-disabled",
      description: "Generated success foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-positive-hover",
      description: "Generated positive foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-positive-active",
      description: "Generated positive foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-positive-inactive",
      description: "Generated positive foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.positive-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-positive-disabled",
      description: "Generated positive foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-hover",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-info-hover",
      description: "Generated info foreground on muted backgrounds (hover, 23% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-active",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-info-active",
      description: "Generated info foreground on muted backgrounds (active, 11% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-inactive",
      type: "color",
      value: "#00102b",
      cssVar: "--rw-color-on-muted-info-inactive",
      description: "Generated info foreground on muted backgrounds (inactive, 20% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.info-disabled",
      type: "color",
      value: "#000103",
      cssVar: "--rw-color-on-muted-info-disabled",
      description: "Generated info foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-hover",
      type: "color",
      value: "#0e0027",
      cssVar: "--rw-color-on-muted-discovery-hover",
      description: "Generated discovery foreground on muted backgrounds (hover, 23% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-active",
      type: "color",
      value: "#060010",
      cssVar: "--rw-color-on-muted-discovery-active",
      description: "Generated discovery foreground on muted backgrounds (active, 11% brighter)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-inactive",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-discovery-inactive",
      description: "Generated discovery foreground on muted backgrounds (inactive, 20% darker)",
      theme: undefined,
      typography: false
    },
    {
      path: "color.on-muted.discovery-disabled",
      type: "color",
      value: "#000000",
      cssVar: "--rw-color-on-muted-discovery-disabled",
      description: "Generated discovery foreground on muted backgrounds (disabled, 80% saturation)",
      theme: undefined,
      typography: false
    },
    {
      path: "size.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-size-none",
      description: "No size",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xxs",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-size-xxs",
      description: "A 2px xxs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-size-xs",
      description: "A 4px xs size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-size-sm",
      description: "A 8px sm size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.md",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-size-md",
      description: "A 10px md size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.lg",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-size-lg",
      description: "A 12px lg size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.xl",
      type: "dimension",
      value: "14px",
      cssVar: "--rw-size-xl",
      description: "A 14px xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.2xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-size-2xl",
      description: "A 16px 2xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.3xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-size-3xl",
      description: "A 18px 3xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.4xl",
      type: "dimension",
      value: "20px",
      cssVar: "--rw-size-4xl",
      description: "A 20px 4xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.5xl",
      type: "dimension",
      value: "22px",
      cssVar: "--rw-size-5xl",
      description: "A 22px 5xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.6xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-size-6xl",
      description: "A 24px 6xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.7xl",
      type: "dimension",
      value: "26px",
      cssVar: "--rw-size-7xl",
      description: "A 26px 7xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-size-8xl",
      description: "A 32px 8xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.9xl",
      type: "dimension",
      value: "37px",
      cssVar: "--rw-size-9xl",
      description: "A 37px 9xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.10xl",
      type: "dimension",
      value: "42px",
      cssVar: "--rw-size-10xl",
      description: "A 42px 10xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.11xl",
      type: "dimension",
      value: "47px",
      cssVar: "--rw-size-11xl",
      description: "A 47px 11xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.12xl",
      type: "dimension",
      value: "52px",
      cssVar: "--rw-size-12xl",
      description: "A 52px 12xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.13xl",
      type: "dimension",
      value: "62px",
      cssVar: "--rw-size-13xl",
      description: "A 62px 13xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.14xl",
      type: "dimension",
      value: "72px",
      cssVar: "--rw-size-14xl",
      description: "A 72px 14xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.15xl",
      type: "dimension",
      value: "82px",
      cssVar: "--rw-size-15xl",
      description: "A 82px 15xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.16xl",
      type: "dimension",
      value: "92px",
      cssVar: "--rw-size-16xl",
      description: "A 92px 16xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.17xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-size-17xl",
      description: "A 102px 17xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.18xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-18xl",
      description: "A 112px 18xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.19xl",
      type: "dimension",
      value: "112px",
      cssVar: "--rw-size-19xl",
      description: "A 112px 19xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.20xl",
      type: "dimension",
      value: "122px",
      cssVar: "--rw-size-20xl",
      description: "A 122px 20xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.21xl",
      type: "dimension",
      value: "132px",
      cssVar: "--rw-size-21xl",
      description: "A 132px 21xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.22xl",
      type: "dimension",
      value: "142px",
      cssVar: "--rw-size-22xl",
      description: "A 142px 22xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.23xl",
      type: "dimension",
      value: "152px",
      cssVar: "--rw-size-23xl",
      description: "A 152px 23xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.24xl",
      type: "dimension",
      value: "162px",
      cssVar: "--rw-size-24xl",
      description: "A 162px 24xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.25xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-size-25xl",
      description: "A 172px 25xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.26xl",
      type: "dimension",
      value: "182px",
      cssVar: "--rw-size-26xl",
      description: "A 182px 26xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.27xl",
      type: "dimension",
      value: "192px",
      cssVar: "--rw-size-27xl",
      description: "A 192px 27xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.28xl",
      type: "dimension",
      value: "202px",
      cssVar: "--rw-size-28xl",
      description: "A 202px 28xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.29xl",
      type: "dimension",
      value: "212px",
      cssVar: "--rw-size-29xl",
      description: "A 212px 29xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.30xl",
      type: "dimension",
      value: "222px",
      cssVar: "--rw-size-30xl",
      description: "A 222px 30xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.31xl",
      type: "dimension",
      value: "232px",
      cssVar: "--rw-size-31xl",
      description: "A 232px 31xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.32xl",
      type: "dimension",
      value: "242px",
      cssVar: "--rw-size-32xl",
      description: "A 242px 32xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.33xl",
      type: "dimension",
      value: "252px",
      cssVar: "--rw-size-33xl",
      description: "A 252px 33xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.34xl",
      type: "dimension",
      value: "262px",
      cssVar: "--rw-size-34xl",
      description: "A 262px 34xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.35xl",
      type: "dimension",
      value: "272px",
      cssVar: "--rw-size-35xl",
      description: "A 272px 35xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.36xl",
      type: "dimension",
      value: "282px",
      cssVar: "--rw-size-36xl",
      description: "A 282px 36xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "size.37xl",
      type: "dimension",
      value: "284px",
      cssVar: "--rw-size-37xl",
      description: "A 284px 37xl size step",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.0",
      type: "number",
      value: "0",
      cssVar: "--rw-z-index-0",
      description: "Base stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.10",
      type: "number",
      value: "100",
      cssVar: "--rw-z-index-10",
      description: "Low stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.20",
      type: "number",
      value: "200",
      cssVar: "--rw-z-index-20",
      description: "Raised stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.30",
      type: "number",
      value: "300",
      cssVar: "--rw-z-index-30",
      description: "Elevated stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.40",
      type: "number",
      value: "400",
      cssVar: "--rw-z-index-40",
      description: "High stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.50",
      type: "number",
      value: "500",
      cssVar: "--rw-z-index-50",
      description: "Overlay stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.60",
      type: "number",
      value: "600",
      cssVar: "--rw-z-index-60",
      description: "Modal stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.70",
      type: "number",
      value: "700",
      cssVar: "--rw-z-index-70",
      description: "Popover stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.80",
      type: "number",
      value: "800",
      cssVar: "--rw-z-index-80",
      description: "Toast stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "z-index.90",
      type: "number",
      value: "900",
      cssVar: "--rw-z-index-90",
      description: "Topmost stacking level",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.none",
      type: "dimension",
      value: "0px",
      cssVar: "--rw-spacing-none",
      description: "No spacing",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xxs",
      type: "dimension",
      value: "0.5px",
      cssVar: "--rw-spacing-xxs",
      description: "A 0.5px xxs spacing step (from size.xxs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xs",
      type: "dimension",
      value: "1px",
      cssVar: "--rw-spacing-xs",
      description: "A 1px xs spacing step (from size.xs via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.sm",
      type: "dimension",
      value: "1.5px",
      cssVar: "--rw-spacing-sm",
      description: "A 1.5px sm spacing step (from size.sm via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.md",
      type: "dimension",
      value: "2px",
      cssVar: "--rw-spacing-md",
      description: "A 2px md spacing step (from size.md via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.lg",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-spacing-lg",
      description: "A 4px lg spacing step (from size.lg via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.xl",
      type: "dimension",
      value: "7px",
      cssVar: "--rw-spacing-xl",
      description: "A 7px xl spacing step (from size.xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.2xl",
      type: "dimension",
      value: "10px",
      cssVar: "--rw-spacing-2xl",
      description: "A 10px 2xl spacing step (from size.2xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.3xl",
      type: "dimension",
      value: "13px",
      cssVar: "--rw-spacing-3xl",
      description: "A 13px 3xl spacing step (from size.3xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.4xl",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-spacing-4xl",
      description: "A 16px 4xl spacing step (from size.4xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.5xl",
      type: "dimension",
      value: "18px",
      cssVar: "--rw-spacing-5xl",
      description: "A 18px 5xl spacing step (from size.5xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.6xl",
      type: "dimension",
      value: "21px",
      cssVar: "--rw-spacing-6xl",
      description: "A 21px 6xl spacing step (from size.6xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.7xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-spacing-7xl",
      description: "A 24px 7xl spacing step (from size.7xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.8xl",
      type: "dimension",
      value: "32px",
      cssVar: "--rw-spacing-8xl",
      description: "A 32px 8xl spacing step (from size.8xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.9xl",
      type: "dimension",
      value: "39px",
      cssVar: "--rw-spacing-9xl",
      description: "A 39px 9xl spacing step (from size.9xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.10xl",
      type: "dimension",
      value: "46px",
      cssVar: "--rw-spacing-10xl",
      description: "A 46px 10xl spacing step (from size.10xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.11xl",
      type: "dimension",
      value: "53px",
      cssVar: "--rw-spacing-11xl",
      description: "A 53px 11xl spacing step (from size.11xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.12xl",
      type: "dimension",
      value: "60px",
      cssVar: "--rw-spacing-12xl",
      description: "A 60px 12xl spacing step (from size.12xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.13xl",
      type: "dimension",
      value: "74px",
      cssVar: "--rw-spacing-13xl",
      description: "A 74px 13xl spacing step (from size.13xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.14xl",
      type: "dimension",
      value: "88px",
      cssVar: "--rw-spacing-14xl",
      description: "A 88px 14xl spacing step (from size.14xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.15xl",
      type: "dimension",
      value: "102px",
      cssVar: "--rw-spacing-15xl",
      description: "A 102px 15xl spacing step (from size.15xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.16xl",
      type: "dimension",
      value: "116px",
      cssVar: "--rw-spacing-16xl",
      description: "A 116px 16xl spacing step (from size.16xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.17xl",
      type: "dimension",
      value: "130px",
      cssVar: "--rw-spacing-17xl",
      description: "A 130px 17xl spacing step (from size.17xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.18xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-18xl",
      description: "A 144px 18xl spacing step (from size.18xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.19xl",
      type: "dimension",
      value: "144px",
      cssVar: "--rw-spacing-19xl",
      description: "A 144px 19xl spacing step (from size.19xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.20xl",
      type: "dimension",
      value: "158px",
      cssVar: "--rw-spacing-20xl",
      description: "A 158px 20xl spacing step (from size.20xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.21xl",
      type: "dimension",
      value: "172px",
      cssVar: "--rw-spacing-21xl",
      description: "A 172px 21xl spacing step (from size.21xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "spacing.22xl",
      type: "dimension",
      value: "186px",
      cssVar: "--rw-spacing-22xl",
      description: "A 186px 22xl spacing step (from size.22xl via sizeToSpace)",
      theme: undefined,
      typography: false
    },
    {
      path: "font-size.xxs",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-font-size-xxs",
      description: "Extra small font size (0.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xs",
      type: "dimension",
      value: "0.875rem",
      cssVar: "--rw-font-size-xs",
      description: "Extra small font size (0.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.sm",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-font-size-sm",
      description: "Small font size (1rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.md",
      type: "dimension",
      value: "1.125rem",
      cssVar: "--rw-font-size-md",
      description: "Medium font size (1.125rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.lg",
      type: "dimension",
      value: "1.25rem",
      cssVar: "--rw-font-size-lg",
      description: "Large font size (1.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-font-size-xl",
      description: "Extra large font size (1.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.2xl",
      type: "dimension",
      value: "1.875rem",
      cssVar: "--rw-font-size-2xl",
      description: "2X large font size (1.875rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.3xl",
      type: "dimension",
      value: "2.25rem",
      cssVar: "--rw-font-size-3xl",
      description: "3X large font size (2.25rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.4xl",
      type: "dimension",
      value: "3rem",
      cssVar: "--rw-font-size-4xl",
      description: "4X large font size (3rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.5xl",
      type: "dimension",
      value: "3.75rem",
      cssVar: "--rw-font-size-5xl",
      description: "5X large font size (3.75rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.6xl",
      type: "dimension",
      value: "4.5rem",
      cssVar: "--rw-font-size-6xl",
      description: "6X large font size (4.5rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.7xl",
      type: "dimension",
      value: "6rem",
      cssVar: "--rw-font-size-7xl",
      description: "7X large font size (6rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.8xl",
      type: "dimension",
      value: "8rem",
      cssVar: "--rw-font-size-8xl",
      description: "8X large font size (8rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.9xl",
      type: "dimension",
      value: "10rem",
      cssVar: "--rw-font-size-9xl",
      description: "9X large font size (10rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.10xl",
      type: "dimension",
      value: "12rem",
      cssVar: "--rw-font-size-10xl",
      description: "10X large font size (12rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.11xl",
      type: "dimension",
      value: "14rem",
      cssVar: "--rw-font-size-11xl",
      description: "11X large font size (14rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.12xl",
      type: "dimension",
      value: "16rem",
      cssVar: "--rw-font-size-12xl",
      description: "12X large font size (16rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.13xl",
      type: "dimension",
      value: "18rem",
      cssVar: "--rw-font-size-13xl",
      description: "13X large font size (18rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.14xl",
      type: "dimension",
      value: "20rem",
      cssVar: "--rw-font-size-14xl",
      description: "14X large font size (20rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-size.15xl",
      type: "dimension",
      value: "24rem",
      cssVar: "--rw-font-size-15xl",
      description: "15X large font size (24rem)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.thin",
      type: "fontWeight",
      value: "100",
      cssVar: "--rw-font-weight-thin",
      description: "Thin font weight (100)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extralight",
      type: "fontWeight",
      value: "200",
      cssVar: "--rw-font-weight-extralight",
      description: "Extra light font weight (200)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.light",
      type: "fontWeight",
      value: "300",
      cssVar: "--rw-font-weight-light",
      description: "Light font weight (300)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.normal",
      type: "fontWeight",
      value: "400",
      cssVar: "--rw-font-weight-normal",
      description: "Normal font weight (400)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.medium",
      type: "fontWeight",
      value: "500",
      cssVar: "--rw-font-weight-medium",
      description: "Medium font weight (500)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.semibold",
      type: "fontWeight",
      value: "600",
      cssVar: "--rw-font-weight-semibold",
      description: "Semibold font weight (600)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.bold",
      type: "fontWeight",
      value: "700",
      cssVar: "--rw-font-weight-bold",
      description: "Bold font weight (700)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.extrabold",
      type: "fontWeight",
      value: "800",
      cssVar: "--rw-font-weight-extrabold",
      description: "Extra bold font weight (800)",
      theme: undefined,
      typography: true
    },
    {
      path: "font-weight.black",
      type: "fontWeight",
      value: "900",
      cssVar: "--rw-font-weight-black",
      description: "Black font weight (900)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tighter",
      type: "dimension",
      value: "-0.05rem",
      cssVar: "--rw-letter-spacing-tighter",
      description: "Tighter letter spacing (-0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.tight",
      type: "dimension",
      value: "-0.025rem",
      cssVar: "--rw-letter-spacing-tight",
      description: "Tight letter spacing (-0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.normal",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-letter-spacing-normal",
      description: "Normal letter spacing (0em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wide",
      type: "dimension",
      value: "0.025rem",
      cssVar: "--rw-letter-spacing-wide",
      description: "Wide letter spacing (0.025em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.wider",
      type: "dimension",
      value: "0.05rem",
      cssVar: "--rw-letter-spacing-wider",
      description: "Wider letter spacing (0.05em)",
      theme: undefined,
      typography: true
    },
    {
      path: "letter-spacing.widest",
      type: "dimension",
      value: "0.1rem",
      cssVar: "--rw-letter-spacing-widest",
      description: "Widest letter spacing (0.1em)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.tight",
      type: "number",
      value: "0.95625",
      cssVar: "--rw-line-height-tight",
      description: "Tight line height (1.25)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.snug",
      type: "number",
      value: "1.051875",
      cssVar: "--rw-line-height-snug",
      description: "Snug line height (1.375)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.normal",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-normal",
      description: "Normal line height (1.5)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.relaxed",
      type: "number",
      value: "1.243125",
      cssVar: "--rw-line-height-relaxed",
      description: "Relaxed line height (1.625)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.loose",
      type: "number",
      value: "1.53",
      cssVar: "--rw-line-height-loose",
      description: "Loose line height (2)",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xs",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-xs",
      description: "Line height for text-xs (calc(1 / 0.75))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.sm",
      type: "number",
      value: "1.092857",
      cssVar: "--rw-line-height-sm",
      description: "Line height for text-sm (calc(1.25 / 0.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.md",
      type: "number",
      value: "1.1475",
      cssVar: "--rw-line-height-md",
      description: "Line height for text-md (calc(1.5 / 1))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.lg",
      type: "number",
      value: "1.190001",
      cssVar: "--rw-line-height-lg",
      description: "Line height for text-lg (calc(1.75 / 1.125))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.xl",
      type: "number",
      value: "1.071",
      cssVar: "--rw-line-height-xl",
      description: "Line height for text-xl (calc(1.75 / 1.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.2xl",
      type: "number",
      value: "1.02",
      cssVar: "--rw-line-height-2xl",
      description: "Line height for text-2xl (calc(2 / 1.5))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.3xl",
      type: "number",
      value: "0.918",
      cssVar: "--rw-line-height-3xl",
      description: "Line height for text-3xl (calc(2.25 / 1.875))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.4xl",
      type: "number",
      value: "0.85",
      cssVar: "--rw-line-height-4xl",
      description: "Line height for text-4xl (calc(2.5 / 2.25))",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.5xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-5xl",
      description: "Line height for text-5xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.6xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-6xl",
      description: "Line height for text-6xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.7xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-7xl",
      description: "Line height for text-7xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.8xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-8xl",
      description: "Line height for text-8xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.9xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-9xl",
      description: "Line height for text-9xl",
      theme: undefined,
      typography: true
    },
    {
      path: "line-height.10xl",
      type: "number",
      value: "0.765",
      cssVar: "--rw-line-height-10xl",
      description: "Line height for text-10xl",
      theme: undefined,
      typography: true
    },
    {
      path: "border-radius.none",
      type: "dimension",
      value: "0rem",
      cssVar: "--rw-border-radius-none",
      description: "No radius",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xs",
      type: "dimension",
      value: "0.125rem",
      cssVar: "--rw-border-radius-xs",
      description: "Extra small radius (0.125rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sm",
      type: "dimension",
      value: "0.25rem",
      cssVar: "--rw-border-radius-sm",
      description: "Small radius (0.25rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.md",
      type: "dimension",
      value: "0.375rem",
      cssVar: "--rw-border-radius-md",
      description: "Medium radius (0.375rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.lg",
      type: "dimension",
      value: "0.5rem",
      cssVar: "--rw-border-radius-lg",
      description: "Large radius (0.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.xl",
      type: "dimension",
      value: "0.75rem",
      cssVar: "--rw-border-radius-xl",
      description: "Extra large radius (0.75rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.2xl",
      type: "dimension",
      value: "1rem",
      cssVar: "--rw-border-radius-2xl",
      description: "2X large radius (1rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.3xl",
      type: "dimension",
      value: "1.5rem",
      cssVar: "--rw-border-radius-3xl",
      description: "3X large radius (1.5rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.4xl",
      type: "dimension",
      value: "2rem",
      cssVar: "--rw-border-radius-4xl",
      description: "4X large radius (2rem)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.full",
      type: "dimension",
      value: "100%",
      cssVar: "--rw-border-radius-full",
      description: "Full radius (100%)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.container",
      type: "dimension",
      value: "var(--border-radius-md)",
      cssVar: "--rw-border-radius-container",
      description: "The border radius use for large containers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.card",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-card",
      description: "The border radius use for cards",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.button",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-button",
      description: "The border radius use for triggers, such as buttons and badges",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.control",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-control",
      description: "The border radius use for controls, such as inputs and selects",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.dialog",
      type: "dimension",
      value: "var(--border-radius-lg)",
      cssVar: "--rw-border-radius-dialog",
      description: "The border radius use for dialogs",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.sheet",
      type: "dimension",
      value: "var(--border-radius-none)",
      cssVar: "--rw-border-radius-sheet",
      description: "The border radius use for sheets (none)",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.drawer",
      type: "dimension",
      value: "var(--border-radius-2xl)",
      cssVar: "--rw-border-radius-drawer",
      description: "The border radius use for drawers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.popover",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-popover",
      description: "The border radius use for popovers",
      theme: undefined,
      typography: false
    },
    {
      path: "border-radius.tooltip",
      type: "dimension",
      value: "var(--border-radius-sm)",
      cssVar: "--rw-border-radius-tooltip",
      description: "The border radius use for tooltips",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #0000000d",
      cssVar: "--rw-shadow-2xs",
      description: "2X small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xs",
      type: "shadow",
      value: "0px 1px 2px 0px #0000000d",
      cssVar: "--rw-shadow-xs",
      description: "Extra small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.sm",
      type: "shadow",
      value: "0px 1px 3px 0px #0000001a, 0px 1px 2px -1px #0000001a",
      cssVar: "--rw-shadow-sm",
      description: "Small shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.md",
      type: "shadow",
      value: "0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a",
      cssVar: "--rw-shadow-md",
      description: "Medium shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.lg",
      type: "shadow",
      value: "0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a",
      cssVar: "--rw-shadow-lg",
      description: "Large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.xl",
      type: "shadow",
      value: "0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a",
      cssVar: "--rw-shadow-xl",
      description: "Extra large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "shadow.2xl",
      type: "shadow",
      value: "0px 25px 50px -12px #00000040",
      cssVar: "--rw-shadow-2xl",
      description: "2X large shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.2xs",
      type: "shadow",
      value: "inset 0px 1px 0px 0px #0000000d",
      cssVar: "--rw-inset-shadow-2xs",
      description: "2X small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.xs",
      type: "shadow",
      value: "inset 0px 1px 1px 0px #0000000d",
      cssVar: "--rw-inset-shadow-xs",
      description: "Extra small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "inset-shadow.sm",
      type: "shadow",
      value: "inset 0px 2px 4px 0px #0000000d",
      cssVar: "--rw-inset-shadow-sm",
      description: "Small inset shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #0000000d",
      cssVar: "--rw-drop-shadow-xs",
      description: "Extra small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.sm",
      type: "shadow",
      value: "0px 1px 2px 0px #00000026",
      cssVar: "--rw-drop-shadow-sm",
      description: "Small drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.md",
      type: "shadow",
      value: "0px 3px 3px 0px #0000001f",
      cssVar: "--rw-drop-shadow-md",
      description: "Medium drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.lg",
      type: "shadow",
      value: "0px 4px 4px 0px #00000026",
      cssVar: "--rw-drop-shadow-lg",
      description: "Large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.xl",
      type: "shadow",
      value: "0px 9px 7px 0px #0000001a",
      cssVar: "--rw-drop-shadow-xl",
      description: "Extra large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "drop-shadow.2xl",
      type: "shadow",
      value: "0px 25px 25px 0px #00000026",
      cssVar: "--rw-drop-shadow-2xl",
      description: "2X large drop shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.2xs",
      type: "shadow",
      value: "0px 1px 0px 0px #00000026",
      cssVar: "--rw-text-shadow-2xs",
      description: "2X small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.xs",
      type: "shadow",
      value: "0px 1px 1px 0px #00000033",
      cssVar: "--rw-text-shadow-xs",
      description: "Extra small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.sm",
      type: "shadow",
      value: "0px 1px 0px 0px #00000013, 0px 1px 1px 0px #00000013, 0px 2px 2px 0px #00000013",
      cssVar: "--rw-text-shadow-sm",
      description: "Small text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.md",
      type: "shadow",
      value: "0px 1px 1px 0px #0000001a, 0px 1px 2px 0px #0000001a, 0px 2px 4px 0px #0000001a",
      cssVar: "--rw-text-shadow-md",
      description: "Medium text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "text-shadow.lg",
      type: "shadow",
      value: "0px 1px 2px 0px #0000001a, 0px 3px 2px 0px #0000001a, 0px 4px 8px 0px #0000001a",
      cssVar: "--rw-text-shadow-lg",
      description: "Large text shadow",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 1, 1)",
      cssVar: "--rw-ease-in",
      description: "Ease-in cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.out",
      type: "cubicBezier",
      value: "cubic-bezier(0, 0, 0.2, 1)",
      cssVar: "--rw-ease-out",
      description: "Ease-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "ease.in-out",
      type: "cubicBezier",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      cssVar: "--rw-ease-in-out",
      description: "Ease-in-out cubic bezier",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.instant",
      type: "duration",
      value: "0ms",
      cssVar: "--rw-durations-instant",
      description: "Instant duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.short",
      type: "duration",
      value: "100ms",
      cssVar: "--rw-durations-short",
      description: "Short duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.medium",
      type: "duration",
      value: "300ms",
      cssVar: "--rw-durations-medium",
      description: "Medium duration",
      theme: undefined,
      typography: false
    },
    {
      path: "durations.long",
      type: "duration",
      value: "600ms",
      cssVar: "--rw-durations-long",
      description: "Long duration",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xs",
      type: "dimension",
      value: "4px",
      cssVar: "--rw-blur-xs",
      description: "Extra small blur (4px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.sm",
      type: "dimension",
      value: "8px",
      cssVar: "--rw-blur-sm",
      description: "Small blur (8px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.md",
      type: "dimension",
      value: "12px",
      cssVar: "--rw-blur-md",
      description: "Medium blur (12px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.lg",
      type: "dimension",
      value: "16px",
      cssVar: "--rw-blur-lg",
      description: "Large blur (16px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.xl",
      type: "dimension",
      value: "24px",
      cssVar: "--rw-blur-xl",
      description: "Extra large blur (24px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.2xl",
      type: "dimension",
      value: "40px",
      cssVar: "--rw-blur-2xl",
      description: "2X large blur (40px)",
      theme: undefined,
      typography: false
    },
    {
      path: "blur.3xl",
      type: "dimension",
      value: "64px",
      cssVar: "--rw-blur-3xl",
      description: "3X large blur (64px)",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base",
      type: "shadow",
      value: "0px 0px 0px 3px #15151813",
      cssVar: "--rw-ring-base",
      description: "The base ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #15151813",
      cssVar: "--rw-ring-base-subtle",
      description: "The base subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #15151813",
      cssVar: "--rw-ring-base-offset",
      description: "The base ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.base-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #15151813",
      cssVar: "--rw-ring-base-subtle-offset",
      description: "The base subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand",
      type: "shadow",
      value: "0px 0px 0px 3px #1fb2a620",
      cssVar: "--rw-ring-brand",
      description: "The brand ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #1fb2a620",
      cssVar: "--rw-ring-brand-subtle",
      description: "The brand subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #1fb2a620",
      cssVar: "--rw-ring-brand-offset",
      description: "The brand ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.brand-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #1fb2a620",
      cssVar: "--rw-ring-brand-subtle-offset",
      description: "The brand subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e20",
      cssVar: "--rw-ring-danger",
      description: "The danger ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e20",
      cssVar: "--rw-ring-danger-subtle",
      description: "The danger subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e20",
      cssVar: "--rw-ring-danger-offset",
      description: "The danger ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.danger-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e20",
      cssVar: "--rw-ring-danger-subtle-offset",
      description: "The danger subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning",
      type: "shadow",
      value: "0px 0px 0px 3px #76541720",
      cssVar: "--rw-ring-warning",
      description: "The warning ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #76541720",
      cssVar: "--rw-ring-warning-subtle",
      description: "The warning subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #76541720",
      cssVar: "--rw-ring-warning-offset",
      description: "The warning ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.warning-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #76541720",
      cssVar: "--rw-ring-warning-subtle-offset",
      description: "The warning subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5320",
      cssVar: "--rw-ring-success",
      description: "The success ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5320",
      cssVar: "--rw-ring-success-subtle",
      description: "The success subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5320",
      cssVar: "--rw-ring-success-offset",
      description: "The success ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.success-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5320",
      cssVar: "--rw-ring-success-subtle-offset",
      description: "The success subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info",
      type: "shadow",
      value: "0px 0px 0px 3px #2055b320",
      cssVar: "--rw-ring-info",
      description: "The info ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #2055b320",
      cssVar: "--rw-ring-info-subtle",
      description: "The info subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #2055b320",
      cssVar: "--rw-ring-info-offset",
      description: "The info ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.info-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #2055b320",
      cssVar: "--rw-ring-info-subtle-offset",
      description: "The info subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery",
      type: "shadow",
      value: "0px 0px 0px 3px #59439520",
      cssVar: "--rw-ring-discovery",
      description: "The discovery ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #59439520",
      cssVar: "--rw-ring-discovery-subtle",
      description: "The discovery subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #59439520",
      cssVar: "--rw-ring-discovery-offset",
      description: "The discovery ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.discovery-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #59439520",
      cssVar: "--rw-ring-discovery-subtle-offset",
      description: "The discovery subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive",
      type: "shadow",
      value: "0px 0px 0px 3px #216b5320",
      cssVar: "--rw-ring-positive",
      description: "The positive ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #216b5320",
      cssVar: "--rw-ring-positive-subtle",
      description: "The positive subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #216b5320",
      cssVar: "--rw-ring-positive-offset",
      description: "The positive ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.positive-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #216b5320",
      cssVar: "--rw-ring-positive-subtle-offset",
      description: "The positive subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative",
      type: "shadow",
      value: "0px 0px 0px 3px #8e223e20",
      cssVar: "--rw-ring-negative",
      description: "The negative ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle",
      type: "shadow",
      value: "0px 0px 0px 1px #8e223e20",
      cssVar: "--rw-ring-negative-subtle",
      description: "The negative subtle ring variant",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 6px #8e223e20",
      cssVar: "--rw-ring-negative-offset",
      description: "The negative ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "ring.negative-subtle-offset",
      type: "shadow",
      value: "0px 0px 0px 3px var(--color-surface-elevated), 0px 0px 0px 4px #8e223e20",
      cssVar: "--rw-ring-negative-subtle-offset",
      description: "The negative subtle ring variant with a 3px offset",
      theme: undefined,
      typography: false
    },
    {
      path: "typography.display-hero",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.5xl}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-display-hero",
      description: "The display - hero typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-title",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.4xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-title",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xl",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.3xl}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xl",
      description: "The display - extra large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.xl}\",\"lineHeight\":\"{line-height.tight}\"}",
      cssVar: "--rw-typography-display-lg",
      description: "The display - large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-md",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.lg}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-md",
      description: "The display - medium typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.bold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-sm",
      description: "The display - small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.display-xs",
      type: "typography",
      value: "{\"fontFamily\":\"Space Grotesk\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-display-xs",
      description: "The display - extra small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.extrabold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-lg",
      description: "The large eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.eyebrow-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.sm}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-eyebrow-sm",
      description: "The small eyebrow typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.button",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.black}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-button",
      description: "The button typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-lg",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.semibold}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.snug}\"}",
      cssVar: "--rw-typography-body-lg",
      description: "The body large typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-md",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.medium}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-md",
      description: "The body typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.body-sm",
      type: "typography",
      value: "{\"fontFamily\":\"Manrope\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.xs}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-body-sm",
      description: "The body small typography variant",
      theme: undefined,
      typography: true
    },
    {
      path: "typography.code",
      type: "typography",
      value: "{\"fontFamily\":\"Geist Mono\",\"fontWeight\":\"{font-weight.normal}\",\"fontSize\":\"{font-size.md}\",\"lineHeight\":\"{line-height.normal}\"}",
      cssVar: "--rw-typography-code",
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
  /** Generated token-set name. Defaults to Storybook's `theme` global. */
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
  const activeTheme = useThemeVariant(TOKEN_VARIANTS, "dark", theme);
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
