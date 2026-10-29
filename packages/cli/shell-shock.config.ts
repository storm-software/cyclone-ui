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

import { paletteToTheme, selectThemeTokens } from "@razorwind/shell-shock";
import razorwind from "@razorwind/shell-shock/plugin";
import type { UserConfig } from "@shell-shock/core";
import { defineConfig } from "@shell-shock/core/config";
import preset from "@shell-shock/preset-cli";

/** Resolve a `color.*` token path (following `{color.*}` references) to its hex value. */
function tokenColors(tokens: Record<string, any>) {
  const lookup = (path: string) =>
    path.split(".").reduce((group, key) => group?.[key], tokens.color)?.$value;

  return (path: string): string => {
    let value = lookup(path);
    while (typeof value === "string" && value.startsWith("{color.")) {
      value = lookup(value.slice("{color.".length, -1));
    }

    if (typeof value !== "string" || !/^#[0-9a-f]{6}$/i.test(value)) {
      throw new Error(`Missing Cyclone color token: color.${path}`);
    }

    return value;
  };
}

const config: UserConfig = defineConfig({
  skipCache: true,
  name: "cyclone-ui",
  input: "src/commands",
  output: {
    storage: "fs"
  },
  docs: "https://docs.cyclone-ui.com/reference/cli/{command}",
  plugins: [
    preset({
      // ponytail: preset-cli 0.9.46 ignores `banner.text` (falls back to the app name), so use the string form
      banner: "Cyclone UI"
    }),
    razorwind({
      root: "../..",
      // The default heuristic picks unrelated tokens (e.g. `subtlest` for sub-headings), so map the semantic roles directly
      mapTheme: spec => {
        const color = tokenColors(
          selectThemeTokens(spec.tokens, "dark").tokens
        );
        const theme = paletteToTheme({
          name: "dark",
          primary: color("brand.primary"),
          secondary: color("emphasis"),
          tertiary: color("ink"),
          text: color("ink"),
          muted: color("subtle"),
          link: color("brand.link"),
          border: color("outline"),
          success: color("success.primary"),
          info: color("info.primary"),
          help: color("discovery.primary"),
          warning: color("warning.primary"),
          danger: color("danger.primary")
        });

        // Palettes only set `$default`, so Shell Shock's built-in tag colors would otherwise leak through
        const { colors } = theme as {
          colors: { text: { banner: object }; border: object };
        };

        return {
          ...theme,
          colors: {
            ...colors,
            text: {
              ...colors.text,
              // Match the banner icon (rendered with the header color), header and footer to the outline
              banner: {
                ...colors.text.banner,
                header: color("brand.primary"),
                footer: color("brand.primary")
              },
              tags: {
                $default: color("brand.primary"),
                utility: color("subtle"),
                deprecated: color("danger.primary"),
                experimental: color("discovery.primary")
              }
            }
          }
        };
      },
      theme: {
        icons: {
          banner: "⬤"
        },
        labels: {
          banner: {
            header: "Cyclone CLI",
            footer: "https://cyclone-ui.com"
          }
        },
        spinner: "dotsCircle"
      }
    })
  ]
});

export default config;
