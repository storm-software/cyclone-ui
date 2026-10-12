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

import { config } from "./config";

/**
 * Tamagui v3 resolves the static styles declared in `styled()` (base values and
 * variants) against the first configured theme (`light`) rather than the theme
 * active at render time. The generated root `light` / `dark` themes only carry
 * the keys shared by every child theme, so the keys that the `base` child theme
 * introduces (`accent`, `muted`, `onAccent`, `ring*`, …) fail to resolve and the
 * declaration is dropped entirely.
 *
 * Mirror the `base` child theme's values onto each root theme so those keys
 * resolve to their CSS variables (`var(--accent)`), which the active child theme
 * class then supplies at runtime. Values already defined on the root are kept.
 */
const themes = config.themes as Record<string, Record<string, unknown>>;
for (const scheme of ["light", "dark"]) {
  const root = themes[scheme];
  const base = themes[`${scheme}_base`];
  if (!root || !base) {
    continue;
  }

  for (const key of Object.keys(base)) {
    if (!(key in root)) {
      root[key] = base[key];
    }
  }
}

export * from "./config";
