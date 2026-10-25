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

import { definePlugin } from "@razorwind/core/plugin";
import type { TamaguiPluginOptions } from "@razorwind/tamagui";
import tamagui from "@razorwind/tamagui/generate";

// Tamagui v3 resolves `styled()` base and variant values against the first
// theme (`light`), but the root `light` / `dark` themes only carry the keys
// every child theme shares, so keys the `base` child adds (`accent`, `ring*`,
// …) don't resolve and the declaration is dropped. Mirror them onto each root
// theme so they resolve to CSS variables the active child theme supplies.
const MIRROR_BASE_THEMES = `
for (const scheme of ["light", "dark"]) {
  const all = config.themes as Record<string, Record<string, unknown>>;
  const root = all[scheme];
  const base = all[\`\${scheme}_base\`];
  if (root && base) {
    for (const key of Object.keys(base)) {
      if (!(key in root)) {
        root[key] = base[key];
      }
    }
  }
}
`;

export default definePlugin((options: TamaguiPluginOptions = {}) => {
  const resolvedOptions: TamaguiPluginOptions = {
    animations: "motion",
    defaultFont: "body",
    target: "v3",
    // This repo depends on `@tamagui/core`, not the `tamagui` meta-package.
    tamaguiModule: "@tamagui/core",
    ...options
  };
  const tamaguiPlugin = tamagui(resolvedOptions);
  const generateTamagui = tamaguiPlugin.generate;

  const mirrorBaseThemes = (
    documents: Awaited<ReturnType<NonNullable<typeof generateTamagui>>>
  ) => {
    for (const document of Object.values(documents ?? {})) {
      for (const chunk of document?.chunks ?? []) {
        if (
          typeof chunk.content === "string" &&
          chunk.content.includes("createTamagui(")
        ) {
          chunk.content += MIRROR_BASE_THEMES;
        }
      }
    }

    return documents;
  };

  return {
    ...tamaguiPlugin,
    name: "cyclone-ui:tamagui-generate",
    generate: async (
      ...[spec, config]: Parameters<NonNullable<typeof generateTamagui>>
    ) => {
      if (!generateTamagui || !spec.fonts) {
        return mirrorBaseThemes((await generateTamagui?.(spec, config)) ?? {});
      }

      const fonts = Object.fromEntries(
        Object.entries(spec.fonts).map(([name, font]) => {
          if (font.source !== "local" || !font.files) {
            return [name, font];
          }

          return [
            name,
            {
              ...font,
              files: font.files.filter(
                file =>
                  typeof file.weight !== "string" ||
                  /^\d+(?:\.\d+)?$/u.test(file.weight.trim())
              )
            }
          ];
        })
      ) as typeof spec.fonts;

      return mirrorBaseThemes(
        await generateTamagui({ ...spec, fonts }, config)
      );
    }
  };
});
