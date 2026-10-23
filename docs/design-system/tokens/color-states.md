---
title: "Color states"
description: "Generated interaction-state colors (hovered, active, inactive, disabled) and derived roles for each color group."
documentType: reference
tags: [tokens, color, state, hover, disabled]
---

# Color states

The theme builder creates extra color variables from the [semantic colors](./semantic-colors.md). It adds the interaction states `hovered`, `active`, `inactive`, and `disabled`, and derived roles such as `on-primary`, `on-secondary`, `link`, and `outline`. It changes the lightness, chroma, or opacity of the source color. The rules are in [`preprocessor.ts`](../../../packages/theme-builder/src/preprocessor.ts). Do not edit these values by hand. The final values below come from the generated files `tokens-light.css` and `tokens-dark.css`.

```css
.button:hover {
  background: var(--storm-color-brand-primary-hovered);
}
```

## Neutral role states

Each neutral role has the states `hovered`, `active`, `inactive`, and `disabled` where the generated file defines them.

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-color-emphasis-hovered` | <span style="background:#343539;border:1px solid #8884">&emsp;&emsp;</span> `#343539` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-emphasis-active` | <span style="background:#000000;border:1px solid #8884">&emsp;&emsp;</span> `#000000` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-emphasis-inactive` | <span style="background:#020102;border:1px solid #8884">&emsp;&emsp;</span> `#020102` | <span style="background:#636363;border:1px solid #8884">&emsp;&emsp;</span> `#636363` |
| `--storm-color-emphasis-disabled` | <span style="background:#38393c;border:1px solid #8884">&emsp;&emsp;</span> `#38393c` | <span style="background:#808082;border:1px solid #8884">&emsp;&emsp;</span> `#808082` |
| `--storm-color-ink-hovered` | <span style="background:#37383b;border:1px solid #8884">&emsp;&emsp;</span> `#37383b` | <span style="background:#ededee;border:1px solid #8884">&emsp;&emsp;</span> `#ededee` |
| `--storm-color-ink-active` | <span style="background:#0c0c0d;border:1px solid #8884">&emsp;&emsp;</span> `#0c0c0d` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-ink-inactive` | <span style="background:#020102;border:1px solid #8884">&emsp;&emsp;</span> `#020102` | <span style="background:#636363;border:1px solid #8884">&emsp;&emsp;</span> `#636363` |
| `--storm-color-ink-disabled` | <span style="background:#494a4d;border:1px solid #8884">&emsp;&emsp;</span> `#494a4d` | <span style="background:#69696b;border:1px solid #8884">&emsp;&emsp;</span> `#69696b` |
| `--storm-color-subtle-hovered` | <span style="background:#646466;border:1px solid #8884">&emsp;&emsp;</span> `#646466` | <span style="background:#cacbcd;border:1px solid #8884">&emsp;&emsp;</span> `#cacbcd` |
| `--storm-color-subtle-active` | <span style="background:#0c0c0d;border:1px solid #8884">&emsp;&emsp;</span> `#0c0c0d` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-subtle-inactive` | <span style="background:#020102;border:1px solid #8884">&emsp;&emsp;</span> `#020102` | <span style="background:#636363;border:1px solid #8884">&emsp;&emsp;</span> `#636363` |
| `--storm-color-subtle-disabled` | <span style="background:#606063;border:1px solid #8884">&emsp;&emsp;</span> `#606063` | <span style="background:#606063;border:1px solid #8884">&emsp;&emsp;</span> `#606063` |
| `--storm-color-subtlest-hovered` | <span style="background:#777778;border:1px solid #8884">&emsp;&emsp;</span> `#777778` | <span style="background:#757679;border:1px solid #8884">&emsp;&emsp;</span> `#757679` |
| `--storm-color-subtlest-active` | <span style="background:#0c0c0d;border:1px solid #8884">&emsp;&emsp;</span> `#0c0c0d` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-subtlest-inactive` | <span style="background:#020102;border:1px solid #8884">&emsp;&emsp;</span> `#020102` | <span style="background:#636363;border:1px solid #8884">&emsp;&emsp;</span> `#636363` |
| `--storm-color-subtlest-disabled` | <span style="background:#69696b;border:1px solid #8884">&emsp;&emsp;</span> `#69696b` | <span style="background:#494a4d;border:1px solid #8884">&emsp;&emsp;</span> `#494a4d` |
| `--storm-color-outline-hovered` | <span style="background:#0c0c0d;border:1px solid #8884">&emsp;&emsp;</span> `#0c0c0d` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-outline-active` | <span style="background:#0c0c0d;border:1px solid #8884">&emsp;&emsp;</span> `#0c0c0d` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-outline-inactive` | <span style="background:#020102;border:1px solid #8884">&emsp;&emsp;</span> `#020102` | <span style="background:#636363;border:1px solid #8884">&emsp;&emsp;</span> `#636363` |
| `--storm-color-outline-disabled` | <span style="background:#6f6f71;border:1px solid #8884">&emsp;&emsp;</span> `#6f6f71` | <span style="background:#444447;border:1px solid #8884">&emsp;&emsp;</span> `#444447` |
| `--storm-color-sunken-hovered` | <span style="background:#c4c4c4;border:1px solid #8884">&emsp;&emsp;</span> `#c4c4c4` | <span style="background:#0f0f10;border:1px solid #8884">&emsp;&emsp;</span> `#0f0f10` |
| `--storm-color-sunken-active` | <span style="background:#b5b5b5;border:1px solid #8884">&emsp;&emsp;</span> `#b5b5b5` | <span style="background:#111112;border:1px solid #8884">&emsp;&emsp;</span> `#111112` |
| `--storm-color-sunken-inactive` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` | <span style="background:#09090a;border:1px solid #8884">&emsp;&emsp;</span> `#09090a` |
| `--storm-color-sunken-disabled` | <span style="background:#aeaeaf;border:1px solid #8884">&emsp;&emsp;</span> `#aeaeaf` | <span style="background:#1e1e20;border:1px solid #8884">&emsp;&emsp;</span> `#1e1e20` |
| `--storm-color-canvas-hovered` | <span style="background:#cbcbcb;border:1px solid #8884">&emsp;&emsp;</span> `#cbcbcb` | <span style="background:#19191d;border:1px solid #8884">&emsp;&emsp;</span> `#19191d` |
| `--storm-color-canvas-active` | <span style="background:#bcbcbc;border:1px solid #8884">&emsp;&emsp;</span> `#bcbcbc` | <span style="background:#1c1c1f;border:1px solid #8884">&emsp;&emsp;</span> `#1c1c1f` |
| `--storm-color-canvas-inactive` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` | <span style="background:#111114;border:1px solid #8884">&emsp;&emsp;</span> `#111114` |
| `--storm-color-canvas-disabled` | <span style="background:#b4b4b5;border:1px solid #8884">&emsp;&emsp;</span> `#b4b4b5` | <span style="background:#242427;border:1px solid #8884">&emsp;&emsp;</span> `#242427` |
| `--storm-color-surface-hovered` | <span style="background:#d2d2d2;border:1px solid #8884">&emsp;&emsp;</span> `#d2d2d2` | <span style="background:#252527;border:1px solid #8884">&emsp;&emsp;</span> `#252527` |
| `--storm-color-surface-active` | <span style="background:#c2c2c2;border:1px solid #8884">&emsp;&emsp;</span> `#c2c2c2` | <span style="background:#28282a;border:1px solid #8884">&emsp;&emsp;</span> `#28282a` |
| `--storm-color-surface-inactive` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` | <span style="background:#19191b;border:1px solid #8884">&emsp;&emsp;</span> `#19191b` |
| `--storm-color-surface-disabled` | <span style="background:#b8b8b9;border:1px solid #8884">&emsp;&emsp;</span> `#b8b8b9` | <span style="background:#2b2b2d;border:1px solid #8884">&emsp;&emsp;</span> `#2b2b2d` |
| `--storm-color-elevated-hovered` | <span style="background:#d9d9d9;border:1px solid #8884">&emsp;&emsp;</span> `#d9d9d9` | <span style="background:#2a2b2f;border:1px solid #8884">&emsp;&emsp;</span> `#2a2b2f` |
| `--storm-color-elevated-active` | <span style="background:#c9c9c9;border:1px solid #8884">&emsp;&emsp;</span> `#c9c9c9` | <span style="background:#2e2f32;border:1px solid #8884">&emsp;&emsp;</span> `#2e2f32` |
| `--storm-color-elevated-inactive` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` | <span style="background:#1e1f22;border:1px solid #8884">&emsp;&emsp;</span> `#1e1f22` |
| `--storm-color-elevated-disabled` | <span style="background:#bfbfc0;border:1px solid #8884">&emsp;&emsp;</span> `#bfbfc0` | <span style="background:#2e2f32;border:1px solid #8884">&emsp;&emsp;</span> `#2e2f32` |
| `--storm-color-floating-hovered` | <span style="background:#dedede;border:1px solid #8884">&emsp;&emsp;</span> `#dedede` | <span style="background:#303135;border:1px solid #8884">&emsp;&emsp;</span> `#303135` |
| `--storm-color-floating-active` | <span style="background:#cecece;border:1px solid #8884">&emsp;&emsp;</span> `#cecece` | <span style="background:#343539;border:1px solid #8884">&emsp;&emsp;</span> `#343539` |
| `--storm-color-floating-inactive` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` | <span style="background:#222327;border:1px solid #8884">&emsp;&emsp;</span> `#222327` |
| `--storm-color-floating-disabled` | <span style="background:#c2c2c3;border:1px solid #8884">&emsp;&emsp;</span> `#c2c2c3` | <span style="background:#313236;border:1px solid #8884">&emsp;&emsp;</span> `#313236` |

## base

Variables generated for the `base` group, in addition to the roles defined in source.

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-color-base-link-active` | <span style="background:#0057a0;border:1px solid #8884">&emsp;&emsp;</span> `#0057a0` | <span style="background:#6bfaff;border:1px solid #8884">&emsp;&emsp;</span> `#6bfaff` |
| `--storm-color-base-link-disabled` | <span style="background:#3c5a72;border:1px solid #8884">&emsp;&emsp;</span> `#3c5a72` | <span style="background:#436d83;border:1px solid #8884">&emsp;&emsp;</span> `#436d83` |
| `--storm-color-base-link-hovered` | <span style="background:#0057a0;border:1px solid #8884">&emsp;&emsp;</span> `#0057a0` | <span style="background:#6bfaff;border:1px solid #8884">&emsp;&emsp;</span> `#6bfaff` |
| `--storm-color-base-link-inactive` | <span style="background:#40aaf9;border:1px solid #8884">&emsp;&emsp;</span> `#40aaf9` | <span style="background:#008ccc;border:1px solid #8884">&emsp;&emsp;</span> `#008ccc` |
| `--storm-color-base-on-primary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#151518;border:1px solid #8884">&emsp;&emsp;</span> `#151518` |
| `--storm-color-base-on-secondary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` |
| `--storm-color-base-primary-active` | <span style="background:#000000;border:1px solid #8884">&emsp;&emsp;</span> `#000000` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-base-primary-disabled` | <span style="background:#363639;border:1px solid #8884">&emsp;&emsp;</span> `#363639` | <span style="background:#858587;border:1px solid #8884">&emsp;&emsp;</span> `#858587` |
| `--storm-color-base-primary-hovered` | <span style="background:#606062;border:1px solid #8884">&emsp;&emsp;</span> `#606062` | <span style="background:#aeaeae;border:1px solid #8884">&emsp;&emsp;</span> `#aeaeae` |
| `--storm-color-base-primary-inactive` | <span style="background:#020102;border:1px solid #8884">&emsp;&emsp;</span> `#020102` | <span style="background:#636363;border:1px solid #8884">&emsp;&emsp;</span> `#636363` |
| `--storm-color-base-secondary-active` | <span style="background:#939394;border:1px solid #8884">&emsp;&emsp;</span> `#939394` | <span style="background:#656669;border:1px solid #8884">&emsp;&emsp;</span> `#656669` |
| `--storm-color-base-secondary-disabled` | <span style="background:#69696b;border:1px solid #8884">&emsp;&emsp;</span> `#69696b` | <span style="background:#494a4d;border:1px solid #8884">&emsp;&emsp;</span> `#494a4d` |
| `--storm-color-base-secondary-hovered` | <span style="background:#939394;border:1px solid #8884">&emsp;&emsp;</span> `#939394` | <span style="background:#656669;border:1px solid #8884">&emsp;&emsp;</span> `#656669` |
| `--storm-color-base-secondary-inactive` | <span style="background:#020102;border:1px solid #8884">&emsp;&emsp;</span> `#020102` | <span style="background:#636363;border:1px solid #8884">&emsp;&emsp;</span> `#636363` |

## brand

Variables generated for the `brand` group, in addition to the roles defined in source.

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-color-brand-link` | <span style="background:#1fb2a6;border:1px solid #8884">&emsp;&emsp;</span> `#1fb2a6` | <span style="background:#3be4be;border:1px solid #8884">&emsp;&emsp;</span> `#3be4be` |
| `--storm-color-brand-link-active` | <span style="background:#007c72;border:1px solid #8884">&emsp;&emsp;</span> `#007c72` | <span style="background:#00a17e;border:1px solid #8884">&emsp;&emsp;</span> `#00a17e` |
| `--storm-color-brand-link-disabled` | <span style="background:#436967;border:1px solid #8884">&emsp;&emsp;</span> `#436967` | <span style="background:#4e7a70;border:1px solid #8884">&emsp;&emsp;</span> `#4e7a70` |
| `--storm-color-brand-link-hovered` | <span style="background:#007c72;border:1px solid #8884">&emsp;&emsp;</span> `#007c72` | <span style="background:#00a17e;border:1px solid #8884">&emsp;&emsp;</span> `#00a17e` |
| `--storm-color-brand-link-inactive` | <span style="background:#5ddfd2;border:1px solid #8884">&emsp;&emsp;</span> `#5ddfd2` | <span style="background:#81fff4;border:1px solid #8884">&emsp;&emsp;</span> `#81fff4` |
| `--storm-color-brand-on-primary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#151518;border:1px solid #8884">&emsp;&emsp;</span> `#151518` |
| `--storm-color-brand-on-secondary` | <span style="background:#005a53;border:1px solid #8884">&emsp;&emsp;</span> `#005a53` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-brand-primary-active` | <span style="background:#007c72;border:1px solid #8884">&emsp;&emsp;</span> `#007c72` | <span style="background:#00a17e;border:1px solid #8884">&emsp;&emsp;</span> `#00a17e` |
| `--storm-color-brand-primary-disabled` | <span style="background:#436967;border:1px solid #8884">&emsp;&emsp;</span> `#436967` | <span style="background:#4e7a70;border:1px solid #8884">&emsp;&emsp;</span> `#4e7a70` |
| `--storm-color-brand-primary-hovered` | <span style="background:#007c72;border:1px solid #8884">&emsp;&emsp;</span> `#007c72` | <span style="background:#00a17e;border:1px solid #8884">&emsp;&emsp;</span> `#00a17e` |
| `--storm-color-brand-primary-inactive` | <span style="background:#5ddfd2;border:1px solid #8884">&emsp;&emsp;</span> `#5ddfd2` | <span style="background:#81fff4;border:1px solid #8884">&emsp;&emsp;</span> `#81fff4` |
| `--storm-color-brand-secondary` | <span style="background:#d6fff9;border:1px solid #8884">&emsp;&emsp;</span> `#d6fff9` | <span style="background:#00604d;border:1px solid #8884">&emsp;&emsp;</span> `#00604d` |
| `--storm-color-brand-secondary-active` | <span style="background:#89b0ab;border:1px solid #8884">&emsp;&emsp;</span> `#89b0ab` | <span style="background:#31806b;border:1px solid #8884">&emsp;&emsp;</span> `#31806b` |
| `--storm-color-brand-secondary-disabled` | <span style="background:#788484;border:1px solid #8884">&emsp;&emsp;</span> `#788484` | <span style="background:#354c49;border:1px solid #8884">&emsp;&emsp;</span> `#354c49` |
| `--storm-color-brand-secondary-hovered` | <span style="background:#89b0ab;border:1px solid #8884">&emsp;&emsp;</span> `#89b0ab` | <span style="background:#31806b;border:1px solid #8884">&emsp;&emsp;</span> `#31806b` |
| `--storm-color-brand-secondary-inactive` | <span style="background:#e0ffff;border:1px solid #8884">&emsp;&emsp;</span> `#e0ffff` | <span style="background:#004836;border:1px solid #8884">&emsp;&emsp;</span> `#004836` |

## danger

Variables generated for the `danger` group, in addition to the roles defined in source.

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-color-danger-link` | <span style="background:#8e223e;border:1px solid #8884">&emsp;&emsp;</span> `#8e223e` | <span style="background:#cf2d56;border:1px solid #8884">&emsp;&emsp;</span> `#cf2d56` |
| `--storm-color-danger-link-active` | <span style="background:#6a0022;border:1px solid #8884">&emsp;&emsp;</span> `#6a0022` | <span style="background:#ff607f;border:1px solid #8884">&emsp;&emsp;</span> `#ff607f` |
| `--storm-color-danger-link-disabled` | <span style="background:#5a3c44;border:1px solid #8884">&emsp;&emsp;</span> `#5a3c44` | <span style="background:#70424d;border:1px solid #8884">&emsp;&emsp;</span> `#70424d` |
| `--storm-color-danger-link-hovered` | <span style="background:#6a0022;border:1px solid #8884">&emsp;&emsp;</span> `#6a0022` | <span style="background:#ff607f;border:1px solid #8884">&emsp;&emsp;</span> `#ff607f` |
| `--storm-color-danger-link-inactive` | <span style="background:#ab3e56;border:1px solid #8884">&emsp;&emsp;</span> `#ab3e56` | <span style="background:#a70037;border:1px solid #8884">&emsp;&emsp;</span> `#a70037` |
| `--storm-color-danger-on-primary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` |
| `--storm-color-danger-on-secondary` | <span style="background:#200006;border:1px solid #8884">&emsp;&emsp;</span> `#200006` | <span style="background:#ffa6b0;border:1px solid #8884">&emsp;&emsp;</span> `#ffa6b0` |
| `--storm-color-danger-outline` | <span style="background:#8e223e;border:1px solid #8884">&emsp;&emsp;</span> `#8e223e` | <span style="background:#cf2d56;border:1px solid #8884">&emsp;&emsp;</span> `#cf2d56` |
| `--storm-color-danger-outline-active` | <span style="background:#550013;border:1px solid #8884">&emsp;&emsp;</span> `#550013` | <span style="background:#ff7c99;border:1px solid #8884">&emsp;&emsp;</span> `#ff7c99` |
| `--storm-color-danger-outline-disabled` | <span style="background:#5a3c44;border:1px solid #8884">&emsp;&emsp;</span> `#5a3c44` | <span style="background:#70424d;border:1px solid #8884">&emsp;&emsp;</span> `#70424d` |
| `--storm-color-danger-outline-hovered` | <span style="background:#550013;border:1px solid #8884">&emsp;&emsp;</span> `#550013` | <span style="background:#ff7c99;border:1px solid #8884">&emsp;&emsp;</span> `#ff7c99` |
| `--storm-color-danger-outline-inactive` | <span style="background:#ab3e56;border:1px solid #8884">&emsp;&emsp;</span> `#ab3e56` | <span style="background:#a70037;border:1px solid #8884">&emsp;&emsp;</span> `#a70037` |
| `--storm-color-danger-primary-active` | <span style="background:#6a0022;border:1px solid #8884">&emsp;&emsp;</span> `#6a0022` | <span style="background:#ff607f;border:1px solid #8884">&emsp;&emsp;</span> `#ff607f` |
| `--storm-color-danger-primary-disabled` | <span style="background:#5a3c44;border:1px solid #8884">&emsp;&emsp;</span> `#5a3c44` | <span style="background:#70424d;border:1px solid #8884">&emsp;&emsp;</span> `#70424d` |
| `--storm-color-danger-primary-hovered` | <span style="background:#6a0022;border:1px solid #8884">&emsp;&emsp;</span> `#6a0022` | <span style="background:#ff607f;border:1px solid #8884">&emsp;&emsp;</span> `#ff607f` |
| `--storm-color-danger-primary-inactive` | <span style="background:#ab3e56;border:1px solid #8884">&emsp;&emsp;</span> `#ab3e56` | <span style="background:#a70037;border:1px solid #8884">&emsp;&emsp;</span> `#a70037` |
| `--storm-color-danger-secondary` | <span style="background:#f17d91;border:1px solid #8884">&emsp;&emsp;</span> `#f17d91` | <span style="background:#5d001e;border:1px solid #8884">&emsp;&emsp;</span> `#5d001e` |
| `--storm-color-danger-secondary-active` | <span style="background:#b2455c;border:1px solid #8884">&emsp;&emsp;</span> `#b2455c` | <span style="background:#751d31;border:1px solid #8884">&emsp;&emsp;</span> `#751d31` |
| `--storm-color-danger-secondary-disabled` | <span style="background:#7c5a61;border:1px solid #8884">&emsp;&emsp;</span> `#7c5a61` | <span style="background:#4a3139;border:1px solid #8884">&emsp;&emsp;</span> `#4a3139` |
| `--storm-color-danger-secondary-hovered` | <span style="background:#b2455c;border:1px solid #8884">&emsp;&emsp;</span> `#b2455c` | <span style="background:#751d31;border:1px solid #8884">&emsp;&emsp;</span> `#751d31` |
| `--storm-color-danger-secondary-inactive` | <span style="background:#ffabbe;border:1px solid #8884">&emsp;&emsp;</span> `#ffabbe` | <span style="background:#4a0010;border:1px solid #8884">&emsp;&emsp;</span> `#4a0010` |

## warning

Variables generated for the `warning` group, in addition to the roles defined in source.

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-color-warning-link` | <span style="background:#765417;border:1px solid #8884">&emsp;&emsp;</span> `#765417` | <span style="background:#f7ac23;border:1px solid #8884">&emsp;&emsp;</span> `#f7ac23` |
| `--storm-color-warning-link-active` | <span style="background:#543400;border:1px solid #8884">&emsp;&emsp;</span> `#543400` | <span style="background:#b56e00;border:1px solid #8884">&emsp;&emsp;</span> `#b56e00` |
| `--storm-color-warning-link-disabled` | <span style="background:#53493b;border:1px solid #8884">&emsp;&emsp;</span> `#53493b` | <span style="background:#7f6948;border:1px solid #8884">&emsp;&emsp;</span> `#7f6948` |
| `--storm-color-warning-link-hovered` | <span style="background:#543400;border:1px solid #8884">&emsp;&emsp;</span> `#543400` | <span style="background:#b56e00;border:1px solid #8884">&emsp;&emsp;</span> `#b56e00` |
| `--storm-color-warning-link-inactive` | <span style="background:#926f36;border:1px solid #8884">&emsp;&emsp;</span> `#926f36` | <span style="background:#ffe067;border:1px solid #8884">&emsp;&emsp;</span> `#ffe067` |
| `--storm-color-warning-on-primary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#151518;border:1px solid #8884">&emsp;&emsp;</span> `#151518` |
| `--storm-color-warning-on-secondary` | <span style="background:#241500;border:1px solid #8884">&emsp;&emsp;</span> `#241500` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` |
| `--storm-color-warning-outline` | <span style="background:#765417;border:1px solid #8884">&emsp;&emsp;</span> `#765417` | <span style="background:#f7ac23;border:1px solid #8884">&emsp;&emsp;</span> `#f7ac23` |
| `--storm-color-warning-outline-active` | <span style="background:#402100;border:1px solid #8884">&emsp;&emsp;</span> `#402100` | <span style="background:#8e4a00;border:1px solid #8884">&emsp;&emsp;</span> `#8e4a00` |
| `--storm-color-warning-outline-disabled` | <span style="background:#53493b;border:1px solid #8884">&emsp;&emsp;</span> `#53493b` | <span style="background:#7f6948;border:1px solid #8884">&emsp;&emsp;</span> `#7f6948` |
| `--storm-color-warning-outline-hovered` | <span style="background:#402100;border:1px solid #8884">&emsp;&emsp;</span> `#402100` | <span style="background:#8e4a00;border:1px solid #8884">&emsp;&emsp;</span> `#8e4a00` |
| `--storm-color-warning-outline-inactive` | <span style="background:#926f36;border:1px solid #8884">&emsp;&emsp;</span> `#926f36` | <span style="background:#ffe067;border:1px solid #8884">&emsp;&emsp;</span> `#ffe067` |
| `--storm-color-warning-primary-active` | <span style="background:#543400;border:1px solid #8884">&emsp;&emsp;</span> `#543400` | <span style="background:#b56e00;border:1px solid #8884">&emsp;&emsp;</span> `#b56e00` |
| `--storm-color-warning-primary-disabled` | <span style="background:#53493b;border:1px solid #8884">&emsp;&emsp;</span> `#53493b` | <span style="background:#7f6948;border:1px solid #8884">&emsp;&emsp;</span> `#7f6948` |
| `--storm-color-warning-primary-hovered` | <span style="background:#543400;border:1px solid #8884">&emsp;&emsp;</span> `#543400` | <span style="background:#b56e00;border:1px solid #8884">&emsp;&emsp;</span> `#b56e00` |
| `--storm-color-warning-primary-inactive` | <span style="background:#926f36;border:1px solid #8884">&emsp;&emsp;</span> `#926f36` | <span style="background:#ffe067;border:1px solid #8884">&emsp;&emsp;</span> `#ffe067` |
| `--storm-color-warning-secondary-active` | <span style="background:#906c33;border:1px solid #8884">&emsp;&emsp;</span> `#906c33` | <span style="background:#fec262;border:1px solid #8884">&emsp;&emsp;</span> `#fec262` |
| `--storm-color-warning-secondary-disabled` | <span style="background:#716557;border:1px solid #8884">&emsp;&emsp;</span> `#716557` | <span style="background:#6e5e44;border:1px solid #8884">&emsp;&emsp;</span> `#6e5e44` |
| `--storm-color-warning-secondary-hovered` | <span style="background:#906c33;border:1px solid #8884">&emsp;&emsp;</span> `#906c33` | <span style="background:#fec262;border:1px solid #8884">&emsp;&emsp;</span> `#fec262` |
| `--storm-color-warning-secondary-inactive` | <span style="background:#fbd399;border:1px solid #8884">&emsp;&emsp;</span> `#fbd399` | <span style="background:#9a6300;border:1px solid #8884">&emsp;&emsp;</span> `#9a6300` |

## info

Variables generated for the `info` group, in addition to the roles defined in source.

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-color-info-link` | <span style="background:#2055b3;border:1px solid #8884">&emsp;&emsp;</span> `#2055b3` | <span style="background:#4d8eff;border:1px solid #8884">&emsp;&emsp;</span> `#4d8eff` |
| `--storm-color-info-link-active` | <span style="background:#00318d;border:1px solid #8884">&emsp;&emsp;</span> `#00318d` | <span style="background:#7fc4ff;border:1px solid #8884">&emsp;&emsp;</span> `#7fc4ff` |
| `--storm-color-info-link-disabled` | <span style="background:#3b4a68;border:1px solid #8884">&emsp;&emsp;</span> `#3b4a68` | <span style="background:#4b5e81;border:1px solid #8884">&emsp;&emsp;</span> `#4b5e81` |
| `--storm-color-info-link-hovered` | <span style="background:#00318d;border:1px solid #8884">&emsp;&emsp;</span> `#00318d` | <span style="background:#7fc4ff;border:1px solid #8884">&emsp;&emsp;</span> `#7fc4ff` |
| `--storm-color-info-link-inactive` | <span style="background:#3b72d3;border:1px solid #8884">&emsp;&emsp;</span> `#3b72d3` | <span style="background:#2564d1;border:1px solid #8884">&emsp;&emsp;</span> `#2564d1` |
| `--storm-color-info-on-primary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` |
| `--storm-color-info-on-secondary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` |
| `--storm-color-info-outline` | <span style="background:#2055b3;border:1px solid #8884">&emsp;&emsp;</span> `#2055b3` | <span style="background:#4d8eff;border:1px solid #8884">&emsp;&emsp;</span> `#4d8eff` |
| `--storm-color-info-outline-active` | <span style="background:#001a76;border:1px solid #8884">&emsp;&emsp;</span> `#001a76` | <span style="background:#9fe5ff;border:1px solid #8884">&emsp;&emsp;</span> `#9fe5ff` |
| `--storm-color-info-outline-disabled` | <span style="background:#3b4a68;border:1px solid #8884">&emsp;&emsp;</span> `#3b4a68` | <span style="background:#4b5e81;border:1px solid #8884">&emsp;&emsp;</span> `#4b5e81` |
| `--storm-color-info-outline-hovered` | <span style="background:#001a76;border:1px solid #8884">&emsp;&emsp;</span> `#001a76` | <span style="background:#9fe5ff;border:1px solid #8884">&emsp;&emsp;</span> `#9fe5ff` |
| `--storm-color-info-outline-inactive` | <span style="background:#3b72d3;border:1px solid #8884">&emsp;&emsp;</span> `#3b72d3` | <span style="background:#2564d1;border:1px solid #8884">&emsp;&emsp;</span> `#2564d1` |
| `--storm-color-info-primary-active` | <span style="background:#00318d;border:1px solid #8884">&emsp;&emsp;</span> `#00318d` | <span style="background:#7fc4ff;border:1px solid #8884">&emsp;&emsp;</span> `#7fc4ff` |
| `--storm-color-info-primary-disabled` | <span style="background:#3b4a68;border:1px solid #8884">&emsp;&emsp;</span> `#3b4a68` | <span style="background:#4b5e81;border:1px solid #8884">&emsp;&emsp;</span> `#4b5e81` |
| `--storm-color-info-primary-hovered` | <span style="background:#00318d;border:1px solid #8884">&emsp;&emsp;</span> `#00318d` | <span style="background:#7fc4ff;border:1px solid #8884">&emsp;&emsp;</span> `#7fc4ff` |
| `--storm-color-info-primary-inactive` | <span style="background:#3b72d3;border:1px solid #8884">&emsp;&emsp;</span> `#3b72d3` | <span style="background:#2564d1;border:1px solid #8884">&emsp;&emsp;</span> `#2564d1` |
| `--storm-color-info-secondary-active` | <span style="background:#396ac2;border:1px solid #8884">&emsp;&emsp;</span> `#396ac2` | <span style="background:#3560ac;border:1px solid #8884">&emsp;&emsp;</span> `#3560ac` |
| `--storm-color-info-secondary-disabled` | <span style="background:#556582;border:1px solid #8884">&emsp;&emsp;</span> `#556582` | <span style="background:#37445b;border:1px solid #8884">&emsp;&emsp;</span> `#37445b` |
| `--storm-color-info-secondary-hovered` | <span style="background:#396ac2;border:1px solid #8884">&emsp;&emsp;</span> `#396ac2` | <span style="background:#3560ac;border:1px solid #8884">&emsp;&emsp;</span> `#3560ac` |
| `--storm-color-info-secondary-inactive` | <span style="background:#99d1ff;border:1px solid #8884">&emsp;&emsp;</span> `#99d1ff` | <span style="background:#022c73;border:1px solid #8884">&emsp;&emsp;</span> `#022c73` |

## discovery

Variables generated for the `discovery` group, in addition to the roles defined in source.

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-color-discovery-link` | <span style="background:#594395;border:1px solid #8884">&emsp;&emsp;</span> `#594395` | <span style="background:#9277da;border:1px solid #8884">&emsp;&emsp;</span> `#9277da` |
| `--storm-color-discovery-link-active` | <span style="background:#3c2372;border:1px solid #8884">&emsp;&emsp;</span> `#3c2372` | <span style="background:#c3a9ff;border:1px solid #8884">&emsp;&emsp;</span> `#c3a9ff` |
| `--storm-color-discovery-link-disabled` | <span style="background:#4a445f;border:1px solid #8884">&emsp;&emsp;</span> `#4a445f` | <span style="background:#5e5776;border:1px solid #8884">&emsp;&emsp;</span> `#5e5776` |
| `--storm-color-discovery-link-hovered` | <span style="background:#3c2372;border:1px solid #8884">&emsp;&emsp;</span> `#3c2372` | <span style="background:#c3a9ff;border:1px solid #8884">&emsp;&emsp;</span> `#c3a9ff` |
| `--storm-color-discovery-link-inactive` | <span style="background:#725db2;border:1px solid #8884">&emsp;&emsp;</span> `#725db2` | <span style="background:#6d51b0;border:1px solid #8884">&emsp;&emsp;</span> `#6d51b0` |
| `--storm-color-discovery-on-primary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` |
| `--storm-color-discovery-on-secondary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` |
| `--storm-color-discovery-outline` | <span style="background:#594395;border:1px solid #8884">&emsp;&emsp;</span> `#594395` | <span style="background:#9277da;border:1px solid #8884">&emsp;&emsp;</span> `#9277da` |
| `--storm-color-discovery-outline-active` | <span style="background:#2c0d5e;border:1px solid #8884">&emsp;&emsp;</span> `#2c0d5e` | <span style="background:#e2c8ff;border:1px solid #8884">&emsp;&emsp;</span> `#e2c8ff` |
| `--storm-color-discovery-outline-disabled` | <span style="background:#4a445f;border:1px solid #8884">&emsp;&emsp;</span> `#4a445f` | <span style="background:#5e5776;border:1px solid #8884">&emsp;&emsp;</span> `#5e5776` |
| `--storm-color-discovery-outline-hovered` | <span style="background:#2c0d5e;border:1px solid #8884">&emsp;&emsp;</span> `#2c0d5e` | <span style="background:#e2c8ff;border:1px solid #8884">&emsp;&emsp;</span> `#e2c8ff` |
| `--storm-color-discovery-outline-inactive` | <span style="background:#725db2;border:1px solid #8884">&emsp;&emsp;</span> `#725db2` | <span style="background:#6d51b0;border:1px solid #8884">&emsp;&emsp;</span> `#6d51b0` |
| `--storm-color-discovery-primary-active` | <span style="background:#3c2372;border:1px solid #8884">&emsp;&emsp;</span> `#3c2372` | <span style="background:#c3a9ff;border:1px solid #8884">&emsp;&emsp;</span> `#c3a9ff` |
| `--storm-color-discovery-primary-disabled` | <span style="background:#4a445f;border:1px solid #8884">&emsp;&emsp;</span> `#4a445f` | <span style="background:#5e5776;border:1px solid #8884">&emsp;&emsp;</span> `#5e5776` |
| `--storm-color-discovery-primary-hovered` | <span style="background:#3c2372;border:1px solid #8884">&emsp;&emsp;</span> `#3c2372` | <span style="background:#c3a9ff;border:1px solid #8884">&emsp;&emsp;</span> `#c3a9ff` |
| `--storm-color-discovery-primary-inactive` | <span style="background:#725db2;border:1px solid #8884">&emsp;&emsp;</span> `#725db2` | <span style="background:#6d51b0;border:1px solid #8884">&emsp;&emsp;</span> `#6d51b0` |
| `--storm-color-discovery-secondary-active` | <span style="background:#725ba7;border:1px solid #8884">&emsp;&emsp;</span> `#725ba7` | <span style="background:#4b3c79;border:1px solid #8884">&emsp;&emsp;</span> `#4b3c79` |
| `--storm-color-discovery-secondary-disabled` | <span style="background:#655f79;border:1px solid #8884">&emsp;&emsp;</span> `#655f79` | <span style="background:#3e3a4d;border:1px solid #8884">&emsp;&emsp;</span> `#3e3a4d` |
| `--storm-color-discovery-secondary-hovered` | <span style="background:#725ba7;border:1px solid #8884">&emsp;&emsp;</span> `#725ba7` | <span style="background:#4b3c79;border:1px solid #8884">&emsp;&emsp;</span> `#4b3c79` |
| `--storm-color-discovery-secondary-inactive` | <span style="background:#d2bcff;border:1px solid #8884">&emsp;&emsp;</span> `#d2bcff` | <span style="background:#27144e;border:1px solid #8884">&emsp;&emsp;</span> `#27144e` |

## success

Variables generated for the `success` group, in addition to the roles defined in source.

| Variable | Light | Dark |
| --- | --- | --- |
| `--storm-color-success-link` | <span style="background:#216b53;border:1px solid #8884">&emsp;&emsp;</span> `#216b53` | <span style="background:#45c791;border:1px solid #8884">&emsp;&emsp;</span> `#45c791` |
| `--storm-color-success-link-active` | <span style="background:#004933;border:1px solid #8884">&emsp;&emsp;</span> `#004933` | <span style="background:#89ffcc;border:1px solid #8884">&emsp;&emsp;</span> `#89ffcc` |
| `--storm-color-success-link-disabled` | <span style="background:#3c504b;border:1px solid #8884">&emsp;&emsp;</span> `#3c504b` | <span style="background:#4c7062;border:1px solid #8884">&emsp;&emsp;</span> `#4c7062` |
| `--storm-color-success-link-hovered` | <span style="background:#004933;border:1px solid #8884">&emsp;&emsp;</span> `#004933` | <span style="background:#89ffcc;border:1px solid #8884">&emsp;&emsp;</span> `#89ffcc` |
| `--storm-color-success-link-inactive` | <span style="background:#40876e;border:1px solid #8884">&emsp;&emsp;</span> `#40876e` | <span style="background:#009865;border:1px solid #8884">&emsp;&emsp;</span> `#009865` |
| `--storm-color-success-on-primary` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` | <span style="background:#fafafa;border:1px solid #8884">&emsp;&emsp;</span> `#fafafa` |
| `--storm-color-success-on-secondary` | <span style="background:#002015;border:1px solid #8884">&emsp;&emsp;</span> `#002015` | <span style="background:#ffffff;border:1px solid #8884">&emsp;&emsp;</span> `#ffffff` |
| `--storm-color-success-outline` | <span style="background:#216b53;border:1px solid #8884">&emsp;&emsp;</span> `#216b53` | <span style="background:#45c791;border:1px solid #8884">&emsp;&emsp;</span> `#45c791` |
| `--storm-color-success-outline-active` | <span style="background:#003622;border:1px solid #8884">&emsp;&emsp;</span> `#003622` | <span style="background:#a1ffe2;border:1px solid #8884">&emsp;&emsp;</span> `#a1ffe2` |
| `--storm-color-success-outline-disabled` | <span style="background:#3c504b;border:1px solid #8884">&emsp;&emsp;</span> `#3c504b` | <span style="background:#4c7062;border:1px solid #8884">&emsp;&emsp;</span> `#4c7062` |
| `--storm-color-success-outline-hovered` | <span style="background:#003622;border:1px solid #8884">&emsp;&emsp;</span> `#003622` | <span style="background:#a1ffe2;border:1px solid #8884">&emsp;&emsp;</span> `#a1ffe2` |
| `--storm-color-success-outline-inactive` | <span style="background:#40876e;border:1px solid #8884">&emsp;&emsp;</span> `#40876e` | <span style="background:#009865;border:1px solid #8884">&emsp;&emsp;</span> `#009865` |
| `--storm-color-success-primary-active` | <span style="background:#004933;border:1px solid #8884">&emsp;&emsp;</span> `#004933` | <span style="background:#89ffcc;border:1px solid #8884">&emsp;&emsp;</span> `#89ffcc` |
| `--storm-color-success-primary-disabled` | <span style="background:#3c504b;border:1px solid #8884">&emsp;&emsp;</span> `#3c504b` | <span style="background:#4c7062;border:1px solid #8884">&emsp;&emsp;</span> `#4c7062` |
| `--storm-color-success-primary-hovered` | <span style="background:#004933;border:1px solid #8884">&emsp;&emsp;</span> `#004933` | <span style="background:#89ffcc;border:1px solid #8884">&emsp;&emsp;</span> `#89ffcc` |
| `--storm-color-success-primary-inactive` | <span style="background:#40876e;border:1px solid #8884">&emsp;&emsp;</span> `#40876e` | <span style="background:#009865;border:1px solid #8884">&emsp;&emsp;</span> `#009865` |
| `--storm-color-success-secondary` | <span style="background:#74ba9f;border:1px solid #8884">&emsp;&emsp;</span> `#74ba9f` | <span style="background:#006140;border:1px solid #8884">&emsp;&emsp;</span> `#006140` |
| `--storm-color-success-secondary-active` | <span style="background:#3b8168;border:1px solid #8884">&emsp;&emsp;</span> `#3b8168` | <span style="background:#31815e;border:1px solid #8884">&emsp;&emsp;</span> `#31815e` |
| `--storm-color-success-secondary-disabled` | <span style="background:#586c66;border:1px solid #8884">&emsp;&emsp;</span> `#586c66` | <span style="background:#354d45;border:1px solid #8884">&emsp;&emsp;</span> `#354d45` |
| `--storm-color-success-secondary-hovered` | <span style="background:#3b8168;border:1px solid #8884">&emsp;&emsp;</span> `#3b8168` | <span style="background:#31815e;border:1px solid #8884">&emsp;&emsp;</span> `#31815e` |
| `--storm-color-success-secondary-inactive` | <span style="background:#a3eacd;border:1px solid #8884">&emsp;&emsp;</span> `#a3eacd` | <span style="background:#004829;border:1px solid #8884">&emsp;&emsp;</span> `#004829` |

## Related pages

- [Semantic colors](./semantic-colors.md)
- [Shape and effects](./shape-and-effects.md), for focus rings
- [Tokens overview](./index.md)
