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

// ponytail: shims for @razorwind/tamagui <= 0.0.101, which ignores
// `tamaguiModule` and emits a typography token's unitless line height as-is
// (Tamagui renders it in px, collapsing the text). Both are fixed upstream;
// delete these once a release with the fixes is installed. Each is a no-op on
// the fixed output.

const renderScale = (scale: Record<string, number>) =>
  Object.entries(scale)
    .toSorted(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(
      ([key, value]) => `    ${/^\d/.test(key) ? `"${key}"` : key}: ${value}`
    )
    .join(",\n");

const parseScale = (body: string): Record<string, number> =>
  Object.fromEntries(
    [...body.matchAll(/^\s*"?([\w-]+)"?: ([\d.]+),?$/gmu)].map(
      ([, key, value]) => [key, Number(value)]
    )
  );

/** Scales a ratio line height (e.g. `1.125`) to px for every font size step. */
const scaleRatioLineHeights = (content: string) =>
  content.replaceAll(
    /(\n {2}size: \{\n)([^}]*)(\n {2}\},\n {2}lineHeight: \{\n)([^}]*)(\n {2}\})/gu,
    (match, open, sizeBody, middle, lineHeightBody, close) => {
      const sizes = parseScale(sizeBody);
      const lineHeights = parseScale(lineHeightBody);
      const ratio = lineHeights.true ?? Object.values(lineHeights)[0];
      if (ratio == null || ratio <= 0 || ratio > 4) {
        return match;
      }

      const round = (value: number) => Math.round(value * 1000) / 1000;
      const scale = Object.fromEntries(
        Object.entries(sizes).map(([key, size]) => [key, round(ratio * size)])
      );
      const base = scale.sm ?? Object.values(scale)[0] ?? ratio;

      return `${open}${sizeBody}${middle}${renderScale({
        ...Object.fromEntries(Object.keys(lineHeights).map(key => [key, base])),
        ...scale
      })}${close}`;
    }
  );

const replaceTamaguiModule = (content: string, tamaguiModule: string) =>
  content
    .replaceAll('from "tamagui";', `from "${tamaguiModule}";`)
    .replaceAll(
      'declare module "tamagui"',
      `declare module "${tamaguiModule}"`
    );

// `tamaguiModule` is newer than the installed @razorwind/tamagui types.
type GenerateOptions = TamaguiPluginOptions & { tamaguiModule?: string };

export default definePlugin((options: GenerateOptions = {}) => {
  const resolvedOptions: GenerateOptions = {
    animations: "motion",
    defaultFont: "body",
    target: "v3",
    // This repo depends on `@tamagui/core`, not the `tamagui` meta-package.
    tamaguiModule: "@tamagui/core",
    ...options
  };
  const tamaguiPlugin = tamagui(resolvedOptions);
  const generateTamagui = tamaguiPlugin.generate;
  const tamaguiModule = resolvedOptions.tamaguiModule ?? "tamagui";

  const shimConfig = (
    documents: Awaited<ReturnType<NonNullable<typeof generateTamagui>>>
  ) => {
    for (const document of Object.values(documents ?? {})) {
      for (const chunk of document?.chunks ?? []) {
        if (
          typeof chunk.content === "string" &&
          chunk.content.includes("createTamagui(")
        ) {
          chunk.content = replaceTamaguiModule(
            scaleRatioLineHeights(chunk.content),
            tamaguiModule
          );
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
        return shimConfig((await generateTamagui?.(spec, config)) ?? {});
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

      return shimConfig(await generateTamagui({ ...spec, fonts }, config));
    }
  };
});
