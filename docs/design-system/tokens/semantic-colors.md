---
title: "Semantic colors"
description: "Color roles for text, surfaces, borders, accents, status, and data, with their light and dark values."
documentType: reference
tags: [tokens, color, theme, light, dark]
---

# Semantic colors

Semantic colors name a role, such as `ink` or `surface`. Components use the role, not a palette step. The same role has a different value in each theme, so a component looks correct in light and dark mode.

Sources: [`semantic/light.tokens.json`](../../../packages/tokens/src/tokens/semantic/light.tokens.json) and [`semantic/dark.tokens.json`](../../../packages/tokens/src/tokens/semantic/dark.tokens.json). Each file defines the roles for one theme and points to a [palette color](./colors.md). The hex values below come from the generated files `tokens-light.css` and `tokens-dark.css`.

## How to use a semantic color

CSS variable pattern: `--storm-color-<role>`. Nested roles join the path with `-`.

```css
.card {
  background: var(--storm-color-surface);
  color: var(--storm-color-ink);
  border: 1px solid var(--storm-color-hairline);
}
```

In a Tamagui component, use the flat theme key. This example comes from `components/button/src/Button.tsx`:

```ts
color: "primary",
```

Load the CSS file for the theme you need. The file sets the variables on `:root`. See [Tokens overview](./index.md#themes).

## Neutral roles

Neutral roles cover text, borders, and surfaces. Surface roles go from the most recessed (`sunken`) to the highest layer (`floating`).

| Role | CSS variable | Light | Dark | Purpose |
| --- | --- | --- | --- | --- |
| `emphasis` | `--storm-color-emphasis` | <span style="background:#242528;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.14` `#242528` | <span style="background:#f1f1f1;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.2` `#f1f1f1` | Neutral, high-contrast accent used by the default `base` theme. Use it for primary controls and emphasized content that should not carry a brand or status color. Most components read it as `accent`, for example Button fills, the Switch thumb, Checkbox marks, LabelText, Spinner and Progress indicators. |
| `ink` | `--storm-color-ink` | <span style="background:#555659;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.10` `#555659` | <span style="background:#b0b0b1;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.7` `#b0b0b1` | Default text and icon color for running copy and standard content. |
| `subtle` | `--storm-color-subtle` | <span style="background:#959698;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.8` `#959698` | <span style="background:#959698;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.8` `#959698` | Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. |
| `subtlest` | `--storm-color-subtlest` | <span style="background:#b0b0b1;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.7` `#b0b0b1` | <span style="background:#555659;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.10` `#555659` | Low-emphasis neutral color for the `base` theme, a softer alternative to the full accent. Exposed as `muted`; used for `subtle` Button fills, Badge hover, Switch tracks, Footer and `secondary` Container backgrounds, FileTree row hover and selected DataTable rows. |
| `outline` | `--storm-color-outline` | <span style="background:#c0c0c1;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.6` `#c0c0c1` | <span style="background:#46464a;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.11` `#46464a` | High-contrast color for borders, dividers and separators. Use it to outline controls and split content without adding visual weight. Default color of Divider, and the border color for Input, TextArea, Select, Checkbox, RadioGroup, Switch, Accordion, Table, Tabs and Footer, and the Sheet drag handle. |
| `hairline` | `--storm-color-hairline` | <span style="background:#d0d0d1;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.5` `#d0d0d1` | <span style="background:#2d2e33;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.12` `#2d2e33` | Low-contrast color for borders, dividers and separators. |
| `sunken` | `--storm-color-sunken` | <span style="background:#e1e1e1;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.4` `#e1e1e1` | <span style="background:#0c0c0d;border:1px solid #8884">&emsp;&emsp;</span> `color.black` `#0c0c0d` | Recessed surface that sits below the page canvas. Use it for tracks, wells and inset areas that hold other content. Used for the Progress and CircularProgress tracks, the Tabs list background, ScrollView scrollbar tracks and the `sunken` Container variant. |
| `canvas` | `--storm-color-canvas` | <span style="background:#eaeaea;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.3` `#eaeaea` | <span style="background:#151518;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.16` `#151518` | Base page background that everything else sits on. Use it for full-page backgrounds and large flush regions. |
| `surface` | `--storm-color-surface` | <span style="background:#f1f1f1;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.2` `#f1f1f1` | <span style="background:#1f1f21;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.15` `#1f1f21` | Raised surface one step above the canvas, for resting cards and controls. This is the default background for interactive elements and the gap color inside offset focus rings. |
| `elevated` | `--storm-color-elevated` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.1` `#fafafa` | <span style="background:#242528;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.14` `#242528` | Surface for content that floats above the page, such as menus, popovers and dialogs. |
| `floating` | `--storm-color-floating` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `color.white` `#ffffff` | <span style="background:#292a2e;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.13` `#292a2e` | Topmost surface, for transient content layered over floating surfaces and for small highlighted chips. |

## Accent and status roles

Each group has a `primary` color. Some groups also define `secondary` and `link` in the source file. The theme builder creates the other variables for each group (for example `on-primary` and the state variants). Groups: `base`, `brand` (accent) and `danger`, `warning`, `info`, `discovery`, `success` (status).

### base

Base theme colors used as the default throughout the project. Group type: `accent`.

Defined in source:

| Role | Light | Dark |
| --- | --- | --- |
| `primary` | <span style="background:#1f1f21;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.15` `#1f1f21` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `color.white` `#ffffff` |
| `secondary` | <span style="background:#b0b0b1;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.7` `#b0b0b1` | <span style="background:#555659;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.10` `#555659` |
| `link` | <span style="background:#0084d1;border:1px solid #8884">&emsp;&emsp;</span> `oklch(58.8% 0.158 241.966)` `#0084d1` | <span style="background:#00bcff;border:1px solid #8884">&emsp;&emsp;</span> `oklch(74.6% 0.16 232.661)` `#00bcff` |

The theme builder adds 14 more variables for `base`. See [Color states](./color-states.md#base).

### brand

A theme representing the core brand colors. Group type: `accent`.

Defined in source:

| Role | Light | Dark |
| --- | --- | --- |
| `primary` | <span style="background:#1fb2a6;border:1px solid #8884">&emsp;&emsp;</span> `oklch(0.6897 0.1156 186.1)` `#1fb2a6` | <span style="background:#3be4be;border:1px solid #8884">&emsp;&emsp;</span> `oklch(0.8258 0.1448 173.56)` `#3be4be` |

The theme builder adds 16 more variables for `brand`. See [Color states](./color-states.md#brand).

### danger

Danger theme colors used for destructive actions and error states. Group type: `status`.

Defined in source:

| Role | Light | Dark |
| --- | --- | --- |
| `primary` | <span style="background:#8e223e;border:1px solid #8884">&emsp;&emsp;</span> `color.red.7` `#8e223e` | <span style="background:#cf2d56;border:1px solid #8884">&emsp;&emsp;</span> `color.red.5` `#cf2d56` |

The theme builder adds 21 more variables for `danger`. See [Color states](./color-states.md#danger).

### warning

Warning theme colors used for cautionary states that need attention but do not block the user. Group type: `status`.

Defined in source:

| Role | Light | Dark |
| --- | --- | --- |
| `primary` | <span style="background:#765417;border:1px solid #8884">&emsp;&emsp;</span> `color.yellow.9` `#765417` | <span style="background:#f7ac23;border:1px solid #8884">&emsp;&emsp;</span> `color.yellow.4` `#f7ac23` |
| `secondary` | Derived | <span style="background:#c58c22;border:1px solid #8884">&emsp;&emsp;</span> `color.yellow.7` `#c58c22` |

The theme builder adds 20 more variables for `warning`. See [Color states](./color-states.md#warning).

### info

Info theme colors used for neutral guidance, tips and system notices. Group type: `status`.

Defined in source:

| Role | Light | Dark |
| --- | --- | --- |
| `primary` | <span style="background:#2055b3;border:1px solid #8884">&emsp;&emsp;</span> `color.blue.7` `#2055b3` | <span style="background:#4d8eff;border:1px solid #8884">&emsp;&emsp;</span> `color.blue.4` `#4d8eff` |
| `secondary` | <span style="background:#6da2ff;border:1px solid #8884">&emsp;&emsp;</span> `color.blue.3` `#6da2ff` | <span style="background:#19438c;border:1px solid #8884">&emsp;&emsp;</span> `color.blue.8` `#19438c` |

The theme builder adds 20 more variables for `info`. See [Color states](./color-states.md#info).

### discovery

Discovery theme colors used for highlighting new features, onboarding, and help content. Group type: `status`.

Defined in source:

| Role | Light | Dark |
| --- | --- | --- |
| `primary` | <span style="background:#594395;border:1px solid #8884">&emsp;&emsp;</span> `color.purple.7` `#594395` | <span style="background:#9277da;border:1px solid #8884">&emsp;&emsp;</span> `color.purple.4` `#9277da` |
| `secondary` | <span style="background:#a690e1;border:1px solid #8884">&emsp;&emsp;</span> `color.purple.3` `#a690e1` | <span style="background:#362661;border:1px solid #8884">&emsp;&emsp;</span> `color.purple.9` `#362661` |

The theme builder adds 20 more variables for `discovery`. See [Color states](./color-states.md#discovery).

### success

Success theme colors used for confirming actions and valid states. Group type: `status`.

Defined in source:

| Role | Light | Dark |
| --- | --- | --- |
| `primary` | <span style="background:#216b53;border:1px solid #8884">&emsp;&emsp;</span> `color.green.7` `#216b53` | <span style="background:#45c791;border:1px solid #8884">&emsp;&emsp;</span> `color.green.4` `#45c791` |

The theme builder adds 21 more variables for `success`. See [Color states](./color-states.md#success).

## Data colors

Categorical colors for charts and data visualizations. Each hue has an `emphasis` value for the primary mark (line, bar, point) and a `subtle` value for fills, areas, ranges and backgrounds.

| Hue | Mark | CSS variable | Light | Dark |
| --- | --- | --- | --- | --- |
| `neutral` | `emphasis` (Line, bar, point) | `--storm-color-data-neutral-emphasis` | <span style="background:#555659;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.10` `#555659` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.1` `#fafafa` |
| `neutral` | `subtle` (Fill, area, range) | `--storm-color-data-neutral-subtle` | <span style="background:#eaeaea;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.3` `#eaeaea` | <span style="background:#242528;border:1px solid #8884">&emsp;&emsp;</span> `color.neutral.14` `#242528` |
| `red` | `emphasis` (Line, bar, point) | `--storm-color-data-red-emphasis` | <span style="background:#8e223e;border:1px solid #8884">&emsp;&emsp;</span> `color.red.7` `#8e223e` | <span style="background:#8e223e;border:1px solid #8884">&emsp;&emsp;</span> `color.red.7` `#8e223e` |
| `red` | `subtle` (Fill, area, range) | `--storm-color-data-red-subtle` | <span style="background:#dd6c89;border:1px solid #8884">&emsp;&emsp;</span> `color.red.2` `#dd6c89` | <span style="background:#501524;border:1px solid #8884">&emsp;&emsp;</span> `color.red.9` `#501524` |
| `orange` | `emphasis` (Line, bar, point) | `--storm-color-data-orange-emphasis` | <span style="background:#9f4000;border:1px solid #8884">&emsp;&emsp;</span> `color.orange.8` `#9f4000` | <span style="background:#df6520;border:1px solid #8884">&emsp;&emsp;</span> `color.orange.6` `#df6520` |
| `orange` | `subtle` (Fill, area, range) | `--storm-color-data-orange-subtle` | <span style="background:#f19f71;border:1px solid #8884">&emsp;&emsp;</span> `color.orange.3` `#f19f71` | <span style="background:#803000;border:1px solid #8884">&emsp;&emsp;</span> `color.orange.9` `#803000` |
| `yellow` | `emphasis` (Line, bar, point) | `--storm-color-data-yellow-emphasis` | <span style="background:#765417;border:1px solid #8884">&emsp;&emsp;</span> `color.yellow.9` `#765417` | <span style="background:#f0a824;border:1px solid #8884">&emsp;&emsp;</span> `color.yellow.5` `#f0a824` |
| `yellow` | `subtle` (Fill, area, range) | `--storm-color-data-yellow-subtle` | <span style="background:#f8b740;border:1px solid #8884">&emsp;&emsp;</span> `color.yellow.3` `#f8b740` | <span style="background:#765417;border:1px solid #8884">&emsp;&emsp;</span> `color.yellow.9` `#765417` |
| `green` | `emphasis` (Line, bar, point) | `--storm-color-data-green-emphasis` | <span style="background:#216b53;border:1px solid #8884">&emsp;&emsp;</span> `color.green.7` `#216b53` | <span style="background:#2c8a69;border:1px solid #8884">&emsp;&emsp;</span> `color.green.6` `#2c8a69` |
| `green` | `subtle` (Fill, area, range) | `--storm-color-data-green-subtle` | <span style="background:#74d59f;border:1px solid #8884">&emsp;&emsp;</span> `color.green.3` `#74d59f` | <span style="background:#216b53;border:1px solid #8884">&emsp;&emsp;</span> `color.green.7` `#216b53` |
| `blue` | `emphasis` (Line, bar, point) | `--storm-color-data-blue-emphasis` | <span style="background:#2055b3;border:1px solid #8884">&emsp;&emsp;</span> `color.blue.7` `#2055b3` | <span style="background:#2055b3;border:1px solid #8884">&emsp;&emsp;</span> `color.blue.7` `#2055b3` |
| `blue` | `subtle` (Fill, area, range) | `--storm-color-data-blue-subtle` | <span style="background:#6da2ff;border:1px solid #8884">&emsp;&emsp;</span> `color.blue.3` `#6da2ff` | <span style="background:#123166;border:1px solid #8884">&emsp;&emsp;</span> `color.blue.9` `#123166` |
| `purple` | `emphasis` (Line, bar, point) | `--storm-color-data-purple-emphasis` | <span style="background:#594395;border:1px solid #8884">&emsp;&emsp;</span> `color.purple.7` `#594395` | <span style="background:#6c53ad;border:1px solid #8884">&emsp;&emsp;</span> `color.purple.6` `#6c53ad` |
| `purple` | `subtle` (Fill, area, range) | `--storm-color-data-purple-subtle` | <span style="background:#a690e1;border:1px solid #8884">&emsp;&emsp;</span> `color.purple.3` `#a690e1` | <span style="background:#362661;border:1px solid #8884">&emsp;&emsp;</span> `color.purple.9` `#362661` |
| `pink` | `emphasis` (Line, bar, point) | `--storm-color-data-pink-emphasis` | <span style="background:#904272;border:1px solid #8884">&emsp;&emsp;</span> `color.pink.8` `#904272` | <span style="background:#df6db3;border:1px solid #8884">&emsp;&emsp;</span> `color.pink.6` `#df6db3` |
| `pink` | `subtle` (Fill, area, range) | `--storm-color-data-pink-subtle` | <span style="background:#eb89c5;border:1px solid #8884">&emsp;&emsp;</span> `color.pink.3` `#eb89c5` | <span style="background:#482039;border:1px solid #8884">&emsp;&emsp;</span> `color.pink.9` `#482039` |

## Shadow presets

Shadow presets are `box-shadow` values. They are listed on the [shape and effects](./shape-and-effects.md#semantic-shadow-presets) page.

## Related pages

- [Color palettes](./colors.md)
- [Shape and effects](./shape-and-effects.md), for focus rings and shadows
- [Tokens overview](./index.md)
