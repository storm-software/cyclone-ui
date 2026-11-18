---
title: "Color palettes"
description: "Complete list of the primitive color palettes in Cyclone UI, with OKLCH source values and hex output."
documentType: reference
tags: [tokens, color, palette]
---

# Color palettes

Color palettes are the raw colors of Cyclone UI. Each palette is an ordered scale. Components use [semantic colors](./semantic-colors.md) instead of palette steps. Semantic colors point to these steps and change with the theme.

Source: [`primitives/tokens.json`](../../../packages/tokens/src/tokens/primitives/tokens.json), group `color`. Each value is written in OKLCH in the source. The hex column comes from the generated file `packages/tokens/src/css/tokens-light.css`. The light and dark CSS files contain the same palette values.

## How to use a palette color

Every step becomes a CSS variable named `--storm-color-<palette>-<step>`. `black` and `white` have no step.

```css
.swatch {
  background: var(--storm-color-blue-4);
  border-color: var(--storm-color-neutral-6);
}
```

In a Tamagui config, the same steps are color tokens without a separator, for example `blue4` and `neutral16`. See the generated file `packages/tokens/src/tamagui/config.ts`.

## Summary

| Palette | Steps | Range |
| --- | --- | --- |
| [`black`](#black) | 1 | Near-black neutral. |
| [`white`](#white) | 1 | Pure white. |
| [`neutral`](#neutral) | 16 | Neutral grays ranging from off-white to near-black. |
| [`red`](#red) | 9 | Red hues ranging from pale coral to deep wine. |
| [`orange`](#orange) | 9 | Orange hues ranging from pale peach to deep burnt orange. |
| [`yellow`](#yellow) | 9 | Yellow hues ranging from pale wheat to dark ochre. |
| [`green`](#green) | 9 | Green hues ranging from pale mint to dark emerald. |
| [`blue`](#blue) | 9 | Blue hues ranging from pale periwinkle to rich cerulean. |
| [`purple`](#purple) | 9 | Purple hues ranging from pale lavender to rich slate indigo. |
| [`pink`](#pink) | 9 | Pink hues ranging from pale blush to dark plum. |

## black and white

| Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- |
| `color.black` | `--storm-color-black` | `oklch(0.154794 0.002103 286.152)` | `#0c0c0d` | <span style="background:#0c0c0d;border:1px solid #8884">&emsp;&emsp;</span> | Near-black neutral. |
| `color.white` | `--storm-color-white` | `oklch(1 0 0)` | `#ffffff` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> | Pure white. |

## neutral

Neutral grays ranging from off-white to near-black.

| Step | Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `color.neutral.1` | `--storm-color-neutral-1` | `oklch(0.985104 0 0)` | `#fafafa` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> | Bright off-white gray. |
| 2 | `color.neutral.2` | `--storm-color-neutral-2` | `oklch(0.958147 0 0)` | `#f1f1f1` | <span style="background:#f1f1f1;border:1px solid #8884">&emsp;&emsp;</span> | Very light gray. |
| 3 | `color.neutral.3` | `--storm-color-neutral-3` | `oklch(0.937049 0 0)` | `#eaeaea` | <span style="background:#eaeaea;border:1px solid #8884">&emsp;&emsp;</span> | Light gray. |
| 4 | `color.neutral.4` | `--storm-color-neutral-4` | `oklch(0.909747 0 0)` | `#e1e1e1` | <span style="background:#e1e1e1;border:1px solid #8884">&emsp;&emsp;</span> | Soft light gray. |
| 5 | `color.neutral.5` | `--storm-color-neutral-5` | `oklch(0.8593 0.0014 286.37)` | `#d0d0d1` | <span style="background:#d0d0d1;border:1px solid #8884">&emsp;&emsp;</span> | Pale gray. |
| 6 | `color.neutral.6` | `--storm-color-neutral-6` | `oklch(0.8093 0.0014 286.37)` | `#c0c0c1` | <span style="background:#c0c0c1;border:1px solid #8884">&emsp;&emsp;</span> | Pale gray. |
| 7 | `color.neutral.7` | `--storm-color-neutral-7` | `oklch(0.757506 0.001410 286.366)` | `#b0b0b1` | <span style="background:#b0b0b1;border:1px solid #8884">&emsp;&emsp;</span> | Light-medium gray. |
| 8 | `color.neutral.8` | `--storm-color-neutral-8` | `oklch(0.672909 0.003148 264.537)` | `#959698` | <span style="background:#959698;border:1px solid #8884">&emsp;&emsp;</span> | Medium gray. |
| 9 | `color.neutral.9` | `--storm-color-neutral-9` | `oklch(0.583883 0.004520 286.259)` | `#7b7b7e` | <span style="background:#7b7b7e;border:1px solid #8884">&emsp;&emsp;</span> | Dark medium gray. |
| 10 | `color.neutral.10` | `--storm-color-neutral-10` | `oklch(0.4527 0.0049 271.32)` | `#555659` | <span style="background:#555659;border:1px solid #8884">&emsp;&emsp;</span> | Deep gray. |
| 11 | `color.neutral.11` | `--storm-color-neutral-11` | `oklch(0.395624 0.006657 286.092)` | `#46464a` | <span style="background:#46464a;border:1px solid #8884">&emsp;&emsp;</span> | Charcoal gray. |
| 12 | `color.neutral.12` | `--storm-color-neutral-12` | `oklch(0.3037 0.0074 274.71)` | `#2d2e33` | <span style="background:#2d2e33;border:1px solid #8884">&emsp;&emsp;</span> | Charcoal gray. |
| 13 | `color.neutral.13` | `--storm-color-neutral-13` | `oklch(0.2837 0.0074 274.71)` | `#292a2e` | <span style="background:#292a2e;border:1px solid #8884">&emsp;&emsp;</span> | Dark charcoal gray. |
| 14 | `color.neutral.14` | `--storm-color-neutral-14` | `oklch(0.264649 0.005749 271.196)` | `#242528` | <span style="background:#242528;border:1px solid #8884">&emsp;&emsp;</span> | Deep graphite gray. |
| 15 | `color.neutral.15` | `--storm-color-neutral-15` | `oklch(0.240110 0.003770 286.112)` | `#1f1f21` | <span style="background:#1f1f21;border:1px solid #8884">&emsp;&emsp;</span> | Near-black graphite. |
| 16 | `color.neutral.16` | `--storm-color-neutral-16` | `oklch(0.197057 0.005959 285.840)` | `#151518` | <span style="background:#151518;border:1px solid #8884">&emsp;&emsp;</span> | Almost black gray. |

## red

Red hues ranging from pale coral to deep wine.

| Step | Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `color.red.1` | `--storm-color-red-1` | `oklch(0.714965 0.122063 4.087)` | `#e2819a` | <span style="background:#e2819a;border:1px solid #8884">&emsp;&emsp;</span> | Pale coral red. |
| 2 | `color.red.2` | `--storm-color-red-2` | `oklch(0.671856 0.143542 5.515)` | `#dd6c89` | <span style="background:#dd6c89;border:1px solid #8884">&emsp;&emsp;</span> | Light coral red. |
| 3 | `color.red.3` | `--storm-color-red-3` | `oklch(0.633160 0.164939 7.419)` | `#d95778` | <span style="background:#d95778;border:1px solid #8884">&emsp;&emsp;</span> | Soft coral red. |
| 4 | `color.red.4` | `--storm-color-red-4` | `oklch(0.597030 0.182815 9.564)` | `#d44267` | <span style="background:#d44267;border:1px solid #8884">&emsp;&emsp;</span> | Warm salmon red. |
| 5 | `color.red.5` | `--storm-color-red-5` | `oklch(0.565931 0.196727 12.263)` | `#cf2d56` | <span style="background:#cf2d56;border:1px solid #8884">&emsp;&emsp;</span> | Muted raspberry red. |
| 6 | `color.red.6` | `--storm-color-red-6` | `oklch(0.501021 0.169738 11.551)` | `#ae284a` | <span style="background:#ae284a;border:1px solid #8884">&emsp;&emsp;</span> | Deep raspberry red. |
| 7 | `color.red.7` | `--storm-color-red-7` | `oklch(0.435213 0.143350 10.543)` | `#8e223e` | <span style="background:#8e223e;border:1px solid #8884">&emsp;&emsp;</span> | Rich raspberry red. |
| 8 | `color.red.8` | `--storm-color-red-8` | `oklch(0.368783 0.116318 10.101)` | `#6f1c31` | <span style="background:#6f1c31;border:1px solid #8884">&emsp;&emsp;</span> | Dark burgundy red. |
| 9 | `color.red.9` | `--storm-color-red-9` | `oklch(0.298555 0.088507 9.007)` | `#501524` | <span style="background:#501524;border:1px solid #8884">&emsp;&emsp;</span> | Deep wine red. |

## orange

Orange hues ranging from pale peach to deep burnt orange.

| Step | Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `color.orange.1` | `--storm-color-orange-1` | `oklch(0.855427 0.069792 50.188)` | `#f6c3a7` | <span style="background:#f6c3a7;border:1px solid #8884">&emsp;&emsp;</span> | Pale peach orange. |
| 2 | `color.orange.2` | `--storm-color-orange-2` | `oklch(0.814580 0.093105 49.905)` | `#f4b18c` | <span style="background:#f4b18c;border:1px solid #8884">&emsp;&emsp;</span> | Light apricot orange. |
| 3 | `color.orange.3` | `--storm-color-orange-3` | `oklch(0.774179 0.115512 49.693)` | `#f19f71` | <span style="background:#f19f71;border:1px solid #8884">&emsp;&emsp;</span> | Soft sandy orange. |
| 4 | `color.orange.4` | `--storm-color-orange-4` | `oklch(0.735229 0.139062 48.129)` | `#ef8c56` | <span style="background:#ef8c56;border:1px solid #8884">&emsp;&emsp;</span> | Light peach orange. |
| 5 | `color.orange.5` | `--storm-color-orange-5` | `oklch(0.699303 0.159656 46.967)` | `#ec7a3b` | <span style="background:#ec7a3b;border:1px solid #8884">&emsp;&emsp;</span> | Muted warm orange. |
| 6 | `color.orange.6` | `--storm-color-orange-6` | `oklch(0.647374 0.170213 45.273)` | `#df6520` | <span style="background:#df6520;border:1px solid #8884">&emsp;&emsp;</span> | Medium tangerine orange. |
| 7 | `color.orange.7` | `--storm-color-orange-7` | `oklch(0.570738 0.156939 45.734)` | `#bf520b` | <span style="background:#bf520b;border:1px solid #8884">&emsp;&emsp;</span> | Bright amber orange. |
| 8 | `color.orange.8` | `--storm-color-orange-8` | `oklch(0.493595 0.140657 45.193)` | `#9f4000` | <span style="background:#9f4000;border:1px solid #8884">&emsp;&emsp;</span> | Rich burnt orange. |
| 9 | `color.orange.9` | `--storm-color-orange-9` | `oklch(0.418501 0.121854 43.950)` | `#803000` | <span style="background:#803000;border:1px solid #8884">&emsp;&emsp;</span> | Deep burnt orange. |

## yellow

Yellow hues ranging from pale wheat to dark ochre.

| Step | Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `color.yellow.1` | `--storm-color-yellow-1` | `oklch(0.870398 0.112630 81.400)` | `#facd7b` | <span style="background:#facd7b;border:1px solid #8884">&emsp;&emsp;</span> | Pale wheat yellow. |
| 2 | `color.yellow.2` | `--storm-color-yellow-2` | `oklch(0.844663 0.132532 80.218)` | `#f9c25e` | <span style="background:#f9c25e;border:1px solid #8884">&emsp;&emsp;</span> | Light sandy yellow. |
| 3 | `color.yellow.3` | `--storm-color-yellow-3` | `oklch(0.820072 0.149054 78.505)` | `#f8b740` | <span style="background:#f8b740;border:1px solid #8884">&emsp;&emsp;</span> | Soft golden yellow. |
| 4 | `color.yellow.4` | `--storm-color-yellow-4` | `oklch(0.796891 0.159821 75.634)` | `#f7ac23` | <span style="background:#f7ac23;border:1px solid #8884">&emsp;&emsp;</span> | Muted amber yellow. |
| 5 | `color.yellow.5` | `--storm-color-yellow-5` | `oklch(0.781675 0.155680 76.010)` | `#f0a824` | <span style="background:#f0a824;border:1px solid #8884">&emsp;&emsp;</span> | Medium honey yellow. |
| 6 | `color.yellow.6` | `--storm-color-yellow-6` | `oklch(0.741914 0.146180 76.422)` | `#df9d24` | <span style="background:#df9d24;border:1px solid #8884">&emsp;&emsp;</span> | Warm wheat yellow. |
| 7 | `color.yellow.7` | `--storm-color-yellow-7` | `oklch(0.679643 0.131984 77.257)` | `#c58c22` | <span style="background:#c58c22;border:1px solid #8884">&emsp;&emsp;</span> | Rich golden yellow. |
| 8 | `color.yellow.8` | `--storm-color-yellow-8` | `oklch(0.589194 0.112409 77.100)` | `#a2731e` | <span style="background:#a2731e;border:1px solid #8884">&emsp;&emsp;</span> | Deep honey yellow. |
| 9 | `color.yellow.9` | `--storm-color-yellow-9` | `oklch(0.471050 0.087291 77.607)` | `#765417` | <span style="background:#765417;border:1px solid #8884">&emsp;&emsp;</span> | Dark ochre yellow. |

## green

Green hues ranging from pale mint to dark emerald.

| Step | Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `color.green.1` | `--storm-color-green-1` | `oklch(0.927758 0.049295 149.731)` | `#d1f1d6` | <span style="background:#d1f1d6;border:1px solid #8884">&emsp;&emsp;</span> | Pale mint green. |
| 2 | `color.green.2` | `--storm-color-green-2` | `oklch(0.860039 0.090743 153.930)` | `#a2e3b6` | <span style="background:#a2e3b6;border:1px solid #8884">&emsp;&emsp;</span> | Light spring green. |
| 3 | `color.green.3` | `--storm-color-green-3` | `oklch(0.798930 0.121090 157.715)` | `#74d59f` | <span style="background:#74d59f;border:1px solid #8884">&emsp;&emsp;</span> | Soft leaf green. |
| 4 | `color.green.4` | `--storm-color-green-4` | `oklch(0.744645 0.138678 161.979)` | `#45c791` | <span style="background:#45c791;border:1px solid #8884">&emsp;&emsp;</span> | Muted leaf green. |
| 5 | `color.green.5` | `--storm-color-green-5` | `oklch(0.659981 0.120526 163.900)` | `#38a97e` | <span style="background:#38a97e;border:1px solid #8884">&emsp;&emsp;</span> | Cool mint green. |
| 6 | `color.green.6` | `--storm-color-green-6` | `oklch(0.569607 0.101672 165.726)` | `#2c8a69` | <span style="background:#2c8a69;border:1px solid #8884">&emsp;&emsp;</span> | Medium jade green. |
| 7 | `color.green.7` | `--storm-color-green-7` | `oklch(0.475513 0.082397 167.606)` | `#216b53` | <span style="background:#216b53;border:1px solid #8884">&emsp;&emsp;</span> | Rich jade green. |
| 8 | `color.green.8` | `--storm-color-green-8` | `oklch(0.370294 0.060013 171.831)` | `#164a3c` | <span style="background:#164a3c;border:1px solid #8884">&emsp;&emsp;</span> | Deep forest green. |
| 9 | `color.green.9` | `--storm-color-green-9` | `oklch(0.259548 0.038944 172.852)` | `#0c2a22` | <span style="background:#0c2a22;border:1px solid #8884">&emsp;&emsp;</span> | Dark emerald green. |

## blue

Blue hues ranging from pale periwinkle to rich cerulean.

| Step | Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `color.blue.1` | `--storm-color-blue-1` | `oklch(0.834903 0.082003 261.026)` | `#abcaff` | <span style="background:#abcaff;border:1px solid #8884">&emsp;&emsp;</span> | Pale periwinkle blue. |
| 2 | `color.blue.2` | `--storm-color-blue-2` | `oklch(0.774626 0.114611 261.098)` | `#8cb6ff` | <span style="background:#8cb6ff;border:1px solid #8884">&emsp;&emsp;</span> | Light periwinkle blue. |
| 3 | `color.blue.3` | `--storm-color-blue-3` | `oklch(0.716187 0.147696 260.975)` | `#6da2ff` | <span style="background:#6da2ff;border:1px solid #8884">&emsp;&emsp;</span> | Light sky blue. |
| 4 | `color.blue.4` | `--storm-color-blue-4` | `oklch(0.660285 0.180766 260.620)` | `#4d8eff` | <span style="background:#4d8eff;border:1px solid #8884">&emsp;&emsp;</span> | Soft cornflower blue. |
| 5 | `color.blue.5` | `--storm-color-blue-5` | `oklch(0.609361 0.211850 260.783)` | `#2e7aff` | <span style="background:#2e7aff;border:1px solid #8884">&emsp;&emsp;</span> | Bright cobalt blue. |
| 6 | `color.blue.6` | `--storm-color-blue-6` | `oklch(0.542381 0.185776 260.694)` | `#2768d9` | <span style="background:#2768d9;border:1px solid #8884">&emsp;&emsp;</span> | Medium azure blue. |
| 7 | `color.blue.7` | `--storm-color-blue-7` | `oklch(0.471142 0.159975 260.897)` | `#2055b3` | <span style="background:#2055b3;border:1px solid #8884">&emsp;&emsp;</span> | Deep azure blue. |
| 8 | `color.blue.8` | `--storm-color-blue-8` | `oklch(0.398576 0.130355 260.641)` | `#19438c` | <span style="background:#19438c;border:1px solid #8884">&emsp;&emsp;</span> | Vivid cerulean blue. |
| 9 | `color.blue.9` | `--storm-color-blue-9` | `oklch(0.323497 0.100432 260.408)` | `#123166` | <span style="background:#123166;border:1px solid #8884">&emsp;&emsp;</span> | Rich cerulean blue. |

## purple

Purple hues ranging from pale lavender to rich slate indigo.

| Step | Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `color.purple.1` | `--storm-color-purple-1` | `oklch(0.838158 0.061988 297.536)` | `#cec2ee` | <span style="background:#cec2ee;border:1px solid #8884">&emsp;&emsp;</span> | Pale lavender purple. |
| 2 | `color.purple.2` | `--storm-color-purple-2` | `oklch(0.771497 0.090342 296.609)` | `#baa9e8` | <span style="background:#baa9e8;border:1px solid #8884">&emsp;&emsp;</span> | Light periwinkle purple. |
| 3 | `color.purple.3` | `--storm-color-purple-3` | `oklch(0.704357 0.118009 295.709)` | `#a690e1` | <span style="background:#a690e1;border:1px solid #8884">&emsp;&emsp;</span> | Soft lavender purple. |
| 4 | `color.purple.4` | `--storm-color-purple-4` | `oklch(0.637600 0.145843 294.460)` | `#9277da` | <span style="background:#9277da;border:1px solid #8884">&emsp;&emsp;</span> | Soft violet purple. |
| 5 | `color.purple.5` | `--storm-color-purple-5` | `oklch(0.573790 0.144342 294.364)` | `#7f64c4` | <span style="background:#7f64c4;border:1px solid #8884">&emsp;&emsp;</span> | Muted indigo purple. |
| 6 | `color.purple.6` | `--storm-color-purple-6` | `oklch(0.511463 0.138379 293.734)` | `#6c53ad` | <span style="background:#6c53ad;border:1px solid #8884">&emsp;&emsp;</span> | Medium periwinkle purple. |
| 7 | `color.purple.7` | `--storm-color-purple-7` | `oklch(0.448543 0.129396 292.798)` | `#594395` | <span style="background:#594395;border:1px solid #8884">&emsp;&emsp;</span> | Deep periwinkle purple. |
| 8 | `color.purple.8` | `--storm-color-purple-8` | `oklch(0.385651 0.117282 292.159)` | `#47347c` | <span style="background:#47347c;border:1px solid #8884">&emsp;&emsp;</span> | Vivid indigo purple. |
| 9 | `color.purple.9` | `--storm-color-purple-9` | `oklch(0.321578 0.100302 292.328)` | `#362661` | <span style="background:#362661;border:1px solid #8884">&emsp;&emsp;</span> | Rich slate indigo. |

## pink

Pink hues ranging from pale blush to dark plum.

| Step | Token | CSS variable | OKLCH | Hex | Sample | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `color.pink.1` | `--storm-color-pink-1` | `oklch(0.878098 0.064085 340.353)` | `#f5c7e4` | <span style="background:#f5c7e4;border:1px solid #8884">&emsp;&emsp;</span> | Pale blush pink. |
| 2 | `color.pink.2` | `--storm-color-pink-2` | `oklch(0.8 0.12 344)` | `#f49ed1` | <span style="background:#f49ed1;border:1px solid #8884">&emsp;&emsp;</span> | Light blush pink. |
| 3 | `color.pink.3` | `--storm-color-pink-3` | `oklch(0.752201 0.139110 343.480)` | `#eb89c5` | <span style="background:#eb89c5;border:1px solid #8884">&emsp;&emsp;</span> | Soft rose pink. |
| 4 | `color.pink.4` | `--storm-color-pink-4` | `oklch(0.712797 0.163625 344.149)` | `#e774bb` | <span style="background:#e774bb;border:1px solid #8884">&emsp;&emsp;</span> | Bright fuchsia pink. |
| 5 | `color.pink.5` | `--storm-color-pink-5` | `oklch(0.7 0.16 344)` | `#e171b7` | <span style="background:#e171b7;border:1px solid #8884">&emsp;&emsp;</span> | Vivid fuchsia pink. |
| 6 | `color.pink.6` | `--storm-color-pink-6` | `oklch(0.689750 0.162842 344.475)` | `#df6db3` | <span style="background:#df6db3;border:1px solid #8884">&emsp;&emsp;</span> | Rich magenta pink. |
| 7 | `color.pink.7` | `--storm-color-pink-7` | `oklch(0.618487 0.149630 344.408)` | `#c25c9b` | <span style="background:#c25c9b;border:1px solid #8884">&emsp;&emsp;</span> | Deep fuchsia pink. |
| 8 | `color.pink.8` | `--storm-color-pink-8` | `oklch(0.495475 0.120718 344.570)` | `#904272` | <span style="background:#904272;border:1px solid #8884">&emsp;&emsp;</span> | Deep berry pink. |
| 9 | `color.pink.9` | `--storm-color-pink-9` | `oklch(0.309382 0.070439 343.700)` | `#482039` | <span style="background:#482039;border:1px solid #8884">&emsp;&emsp;</span> | Dark plum pink. |

## Related pages

- [Semantic colors](./semantic-colors.md)
- [Tokens overview](./index.md)
