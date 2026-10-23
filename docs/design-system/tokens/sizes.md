---
title: "Size tokens"
description: "The named size scale in Cyclone UI, with pixel values for every step."
documentType: reference
tags: [tokens, size, dimension]
---

# Size tokens

Size tokens give fixed dimensions. The `size` prop of an icon and the `size` prop of a button accept size token names. The scale has named steps. Each step has a pixel value. The `spacing` scale has the same step names with different values. See [Spacing tokens](./spacing.md).

Source: [`primitives/tokens.json`](../../../packages/tokens/src/tokens/primitives/tokens.json), group `size`. CSS variable pattern: `--storm-size-<step>`.

Use a size token for a width, a height, or an icon size. This example comes from `components/icons/src/types.ts`: the `size` prop of an icon accepts a size token name.

```tsx
<Heart size="4xl" />
```

```css
.avatar {
  width: var(--storm-size-8xl);
  height: var(--storm-size-8xl);
}
```

The scale has 70 steps. Samples render for values up to 128px.

| Step | Token | Value | Sample |
| --- | --- | --- | --- |
| `zero` | `size.zero` | 0px |  |
| `xxs` | `size.xxs` | 2px | <span style="display:inline-block;height:0.75em;width:2px;background:#1fb2a6"></span> |
| `xs` | `size.xs` | 4px | <span style="display:inline-block;height:0.75em;width:4px;background:#1fb2a6"></span> |
| `sm` | `size.sm` | 8px | <span style="display:inline-block;height:0.75em;width:8px;background:#1fb2a6"></span> |
| `md` | `size.md` | 10px | <span style="display:inline-block;height:0.75em;width:10px;background:#1fb2a6"></span> |
| `lg` | `size.lg` | 12px | <span style="display:inline-block;height:0.75em;width:12px;background:#1fb2a6"></span> |
| `xl` | `size.xl` | 14px | <span style="display:inline-block;height:0.75em;width:14px;background:#1fb2a6"></span> |
| `2xl` | `size.2xl` | 16px | <span style="display:inline-block;height:0.75em;width:16px;background:#1fb2a6"></span> |
| `3xl` | `size.3xl` | 18px | <span style="display:inline-block;height:0.75em;width:18px;background:#1fb2a6"></span> |
| `4xl` | `size.4xl` | 20px | <span style="display:inline-block;height:0.75em;width:20px;background:#1fb2a6"></span> |
| `5xl` | `size.5xl` | 22px | <span style="display:inline-block;height:0.75em;width:22px;background:#1fb2a6"></span> |
| `6xl` | `size.6xl` | 24px | <span style="display:inline-block;height:0.75em;width:24px;background:#1fb2a6"></span> |
| `7xl` | `size.7xl` | 26px | <span style="display:inline-block;height:0.75em;width:26px;background:#1fb2a6"></span> |
| `8xl` | `size.8xl` | 32px | <span style="display:inline-block;height:0.75em;width:32px;background:#1fb2a6"></span> |
| `9xl` | `size.9xl` | 37px | <span style="display:inline-block;height:0.75em;width:37px;background:#1fb2a6"></span> |
| `10xl` | `size.10xl` | 42px | <span style="display:inline-block;height:0.75em;width:42px;background:#1fb2a6"></span> |
| `11xl` | `size.11xl` | 47px | <span style="display:inline-block;height:0.75em;width:47px;background:#1fb2a6"></span> |
| `12xl` | `size.12xl` | 52px | <span style="display:inline-block;height:0.75em;width:52px;background:#1fb2a6"></span> |
| `13xl` | `size.13xl` | 62px | <span style="display:inline-block;height:0.75em;width:62px;background:#1fb2a6"></span> |
| `14xl` | `size.14xl` | 72px | <span style="display:inline-block;height:0.75em;width:72px;background:#1fb2a6"></span> |
| `15xl` | `size.15xl` | 82px | <span style="display:inline-block;height:0.75em;width:82px;background:#1fb2a6"></span> |
| `16xl` | `size.16xl` | 92px | <span style="display:inline-block;height:0.75em;width:92px;background:#1fb2a6"></span> |
| `17xl` | `size.17xl` | 102px | <span style="display:inline-block;height:0.75em;width:102px;background:#1fb2a6"></span> |
| `18xl` | `size.18xl` | 112px | <span style="display:inline-block;height:0.75em;width:112px;background:#1fb2a6"></span> |
| `19xl` | `size.19xl` | 122px | <span style="display:inline-block;height:0.75em;width:122px;background:#1fb2a6"></span> |
| `20xl` | `size.20xl` | 132px |  |
| `21xl` | `size.21xl` | 142px |  |
| `22xl` | `size.22xl` | 152px |  |
| `23xl` | `size.23xl` | 162px |  |
| `24xl` | `size.24xl` | 172px |  |
| `25xl` | `size.25xl` | 182px |  |
| `26xl` | `size.26xl` | 192px |  |
| `27xl` | `size.27xl` | 202px |  |
| `28xl` | `size.28xl` | 212px |  |
| `29xl` | `size.29xl` | 222px |  |
| `30xl` | `size.30xl` | 232px |  |
| `31xl` | `size.31xl` | 242px |  |
| `32xl` | `size.32xl` | 252px |  |
| `33xl` | `size.33xl` | 262px |  |
| `34xl` | `size.34xl` | 272px |  |
| `35xl` | `size.35xl` | 282px |  |
| `36xl` | `size.36xl` | 292px |  |
| `37xl` | `size.37xl` | 302px |  |
| `38xl` | `size.38xl` | 312px |  |
| `39xl` | `size.39xl` | 322px |  |
| `40xl` | `size.40xl` | 332px |  |
| `41xl` | `size.41xl` | 342px |  |
| `42xl` | `size.42xl` | 352px |  |
| `43xl` | `size.43xl` | 362px |  |
| `44xl` | `size.44xl` | 372px |  |
| `45xl` | `size.45xl` | 382px |  |
| `46xl` | `size.46xl` | 392px |  |
| `47xl` | `size.47xl` | 402px |  |
| `48xl` | `size.48xl` | 412px |  |
| `49xl` | `size.49xl` | 422px |  |
| `50xl` | `size.50xl` | 432px |  |
| `51xl` | `size.51xl` | 442px |  |
| `52xl` | `size.52xl` | 452px |  |
| `53xl` | `size.53xl` | 462px |  |
| `54xl` | `size.54xl` | 472px |  |
| `55xl` | `size.55xl` | 482px |  |
| `56xl` | `size.56xl` | 492px |  |
| `57xl` | `size.57xl` | 502px |  |
| `58xl` | `size.58xl` | 512px |  |
| `59xl` | `size.59xl` | 522px |  |
| `60xl` | `size.60xl` | 532px |  |
| `61xl` | `size.61xl` | 542px |  |
| `62xl` | `size.62xl` | 552px |  |
| `63xl` | `size.63xl` | 562px |  |
| `64xl` | `size.64xl` | 572px |  |

## Related pages

- [Spacing tokens](./spacing.md)
- [Tokens overview](./index.md)
