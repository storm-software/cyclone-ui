---
title: "Spacing tokens"
description: "The named spacing scale in Cyclone UI, with pixel values for every step."
documentType: reference
tags: [tokens, spacing, dimension]
---

# Spacing tokens

Spacing tokens give the distance between and inside elements. Use them for padding, margin, and gaps. The step names match the [size scale](./sizes.md). The values are different.

Source: [`primitives/tokens.json`](../../../packages/tokens/src/tokens/primitives/tokens.json), group `spacing`. The source describes the scale as derived from `size` with the `sizeToSpace()` function. CSS variable pattern: `--storm-spacing-<step>`.

```css
.panel {
  padding: var(--storm-spacing-4xl);
  gap: var(--storm-spacing-2xl);
}
```

The scale has 70 steps. Samples render for values up to 128px.

| Step | Token | Value | Size token with the same step | Sample |
| --- | --- | --- | --- | --- |
| `zero` | `spacing.zero` | 0px | 0px |  |
| `xxs` | `spacing.xxs` | 0.5px | 2px |  |
| `xs` | `spacing.xs` | 1px | 4px | <span style="display:inline-block;height:0.75em;width:1px;background:#1fb2a6"></span> |
| `sm` | `spacing.sm` | 1.5px | 8px | <span style="display:inline-block;height:0.75em;width:2px;background:#1fb2a6"></span> |
| `md` | `spacing.md` | 2px | 10px | <span style="display:inline-block;height:0.75em;width:2px;background:#1fb2a6"></span> |
| `lg` | `spacing.lg` | 4px | 12px | <span style="display:inline-block;height:0.75em;width:4px;background:#1fb2a6"></span> |
| `xl` | `spacing.xl` | 7px | 14px | <span style="display:inline-block;height:0.75em;width:7px;background:#1fb2a6"></span> |
| `2xl` | `spacing.2xl` | 10px | 16px | <span style="display:inline-block;height:0.75em;width:10px;background:#1fb2a6"></span> |
| `3xl` | `spacing.3xl` | 13px | 18px | <span style="display:inline-block;height:0.75em;width:13px;background:#1fb2a6"></span> |
| `4xl` | `spacing.4xl` | 16px | 20px | <span style="display:inline-block;height:0.75em;width:16px;background:#1fb2a6"></span> |
| `5xl` | `spacing.5xl` | 18px | 22px | <span style="display:inline-block;height:0.75em;width:18px;background:#1fb2a6"></span> |
| `6xl` | `spacing.6xl` | 21px | 24px | <span style="display:inline-block;height:0.75em;width:21px;background:#1fb2a6"></span> |
| `7xl` | `spacing.7xl` | 24px | 26px | <span style="display:inline-block;height:0.75em;width:24px;background:#1fb2a6"></span> |
| `8xl` | `spacing.8xl` | 32px | 32px | <span style="display:inline-block;height:0.75em;width:32px;background:#1fb2a6"></span> |
| `9xl` | `spacing.9xl` | 39px | 37px | <span style="display:inline-block;height:0.75em;width:39px;background:#1fb2a6"></span> |
| `10xl` | `spacing.10xl` | 46px | 42px | <span style="display:inline-block;height:0.75em;width:46px;background:#1fb2a6"></span> |
| `11xl` | `spacing.11xl` | 53px | 47px | <span style="display:inline-block;height:0.75em;width:53px;background:#1fb2a6"></span> |
| `12xl` | `spacing.12xl` | 60px | 52px | <span style="display:inline-block;height:0.75em;width:60px;background:#1fb2a6"></span> |
| `13xl` | `spacing.13xl` | 74px | 62px | <span style="display:inline-block;height:0.75em;width:74px;background:#1fb2a6"></span> |
| `14xl` | `spacing.14xl` | 88px | 72px | <span style="display:inline-block;height:0.75em;width:88px;background:#1fb2a6"></span> |
| `15xl` | `spacing.15xl` | 102px | 82px | <span style="display:inline-block;height:0.75em;width:102px;background:#1fb2a6"></span> |
| `16xl` | `spacing.16xl` | 116px | 92px | <span style="display:inline-block;height:0.75em;width:116px;background:#1fb2a6"></span> |
| `17xl` | `spacing.17xl` | 130px | 102px |  |
| `18xl` | `spacing.18xl` | 144px | 112px |  |
| `19xl` | `spacing.19xl` | 158px | 122px |  |
| `20xl` | `spacing.20xl` | 172px | 132px |  |
| `21xl` | `spacing.21xl` | 186px | 142px |  |
| `22xl` | `spacing.22xl` | 200px | 152px |  |
| `23xl` | `spacing.23xl` | 214px | 162px |  |
| `24xl` | `spacing.24xl` | 228px | 172px |  |
| `25xl` | `spacing.25xl` | 242px | 182px |  |
| `26xl` | `spacing.26xl` | 256px | 192px |  |
| `27xl` | `spacing.27xl` | 270px | 202px |  |
| `28xl` | `spacing.28xl` | 284px | 212px |  |
| `29xl` | `spacing.29xl` | 298px | 222px |  |
| `30xl` | `spacing.30xl` | 312px | 232px |  |
| `31xl` | `spacing.31xl` | 326px | 242px |  |
| `32xl` | `spacing.32xl` | 340px | 252px |  |
| `33xl` | `spacing.33xl` | 354px | 262px |  |
| `34xl` | `spacing.34xl` | 368px | 272px |  |
| `35xl` | `spacing.35xl` | 382px | 282px |  |
| `36xl` | `spacing.36xl` | 396px | 292px |  |
| `37xl` | `spacing.37xl` | 410px | 302px |  |
| `38xl` | `spacing.38xl` | 424px | 312px |  |
| `39xl` | `spacing.39xl` | 438px | 322px |  |
| `40xl` | `spacing.40xl` | 452px | 332px |  |
| `41xl` | `spacing.41xl` | 466px | 342px |  |
| `42xl` | `spacing.42xl` | 480px | 352px |  |
| `43xl` | `spacing.43xl` | 494px | 362px |  |
| `44xl` | `spacing.44xl` | 508px | 372px |  |
| `45xl` | `spacing.45xl` | 522px | 382px |  |
| `46xl` | `spacing.46xl` | 536px | 392px |  |
| `47xl` | `spacing.47xl` | 550px | 402px |  |
| `48xl` | `spacing.48xl` | 564px | 412px |  |
| `49xl` | `spacing.49xl` | 578px | 422px |  |
| `50xl` | `spacing.50xl` | 592px | 432px |  |
| `51xl` | `spacing.51xl` | 606px | 442px |  |
| `52xl` | `spacing.52xl` | 620px | 452px |  |
| `53xl` | `spacing.53xl` | 634px | 462px |  |
| `54xl` | `spacing.54xl` | 648px | 472px |  |
| `55xl` | `spacing.55xl` | 662px | 482px |  |
| `56xl` | `spacing.56xl` | 676px | 492px |  |
| `57xl` | `spacing.57xl` | 690px | 502px |  |
| `58xl` | `spacing.58xl` | 704px | 512px |  |
| `59xl` | `spacing.59xl` | 718px | 522px |  |
| `60xl` | `spacing.60xl` | 732px | 532px |  |
| `61xl` | `spacing.61xl` | 746px | 542px |  |
| `62xl` | `spacing.62xl` | 760px | 552px |  |
| `63xl` | `spacing.63xl` | 774px | 562px |  |
| `64xl` | `spacing.64xl` | 788px | 572px |  |

## Related pages

- [Size tokens](./sizes.md)
- [Tokens overview](./index.md)
