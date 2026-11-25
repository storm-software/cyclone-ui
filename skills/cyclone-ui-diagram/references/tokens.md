# Cyclone token bridge

The portable snapshot is `assets/tokens.json`, resolved from Cyclone's source DTCG files under `packages/tokens/src/tokens/`. It is output data for this skill, not a substitute design-system source. Never edit Razorwind-generated CSS, JS, or Tamagui configuration to change a diagram.

| Diagram role | Cyclone theme token | Purpose                                   |
| ------------ | ------------------- | ----------------------------------------- |
| paper        | canvas              | Page/background                           |
| panel        | surface             | Node/group surface                        |
| ink          | emphasis            | Names, headings, primary outlines         |
| muted        | ink                 | Secondary text                            |
| soft         | ink                 | Small text that must remain readable      |
| rule         | hairline            | Decorative dividers only                  |
| line         | ink                 | Essential connectors                      |
| accent       | primary             | One focal element, inherits current theme |
| onAccent     | on-primary          | Text on an opaque accent fill             |

Standalone files use the resolved `light_base` / `dark_base` snapshot as fallback, and CSS custom properties `--diagram-<role>` as local overrides. They also consult the matching Cyclone semantic variables when inline. The base accent is intentionally neutral. For Storm Teal, render the component inside a `brand` theme; do not make brand the implicit replacement for `primary`.

The React component resolves actual colors with `useTheme` and the scheme with `useThemeName`; palette values may be theme token names or literal colors. It converts Cyclone's OKLCH colors to sRGB RGBA for native SVG, without a runtime color-library dependency. Wide-gamut colors are clipped to sRGB in that output. Each instance owns its IDs. No global theme mutation occurs.

Typography uses Cyclone's Storm Serif / Storm Sans / Google Sans Code families, as configured in `packages/tokens/src/tamagui/config.ts`. Static files use system fallbacks and no remote font loading. Text role sizes/weights, the 4px node radius, and the spacing scale are resolved from primitive tokens. Font appearance therefore depends on local font registration; browser inspection must include the available fallback.

When deliberately refreshing the bundled defaults in the Cyclone UI repository:

```bash
node <skill-dir>/scripts/sync-tokens.mjs <cyclone-ui-repository-root>
```

Review the resulting diff and rerun build/browser checks. The script reads token sources and writes only this skill's snapshot. Consumers normally use the bundled snapshot and their live theme; they do not need this repository.
