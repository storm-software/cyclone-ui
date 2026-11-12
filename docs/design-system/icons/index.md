---
title: "Icons"
description: "Catalog of all 581 Cyclone UI icon components, with import paths and the size, color, variant, animated, and mirrored props."
documentType: reference
tags: [icons, line-md, tamagui, animation]
---

# Icons

The `@cyclone-ui/icons` package has one icon component for each icon in the [Material Line Icons](https://github.com/cyberalien/line-md) (line-md) collection, plus a few icons drawn for Cyclone UI in the same style. Each icon is a [Tamagui](https://tamagui.dev) component. It works on web and on React Native, and it draws itself in when it mounts.

Source: [`components/icons/src/icons`](../../../components/icons/src/icons). The files are generated. Do not edit them by hand. The generator reads the animated SVGs from `line-md` 3.0.5 and from [`components/icons/assets`](../../../components/icons/assets). See the [generator script](../../../components/icons/scripts/generate.ts).

## Import an icon

The public name of an icon is its component name: the line-md icon name in PascalCase, without the variant suffix. Example: the line-md icons `bell`, `bell-loop`, `bell-filled`, and `bell-filled-loop` are the variants of the component `Bell`.

Import from the package root:

```tsx
import { Bell, Heart } from "@cyclone-ui/icons";

<Bell />
<Heart variant="filled" color="red" size={32} />
```

Import one icon module. This keeps the import small:

```tsx
import { Loading } from "@cyclone-ui/icons/icons/Loading"

;<Loading variant="loop" size={20} />
```

Package exports (from `components/icons/package.json`):

| Import path                      | Contents                                                                |
| -------------------------------- | ----------------------------------------------------------------------- |
| `@cyclone-ui/icons`              | Every icon, `allIcons`, `createIcon`, `resolveIconSize`, and the types. |
| `@cyclone-ui/icons/icons/<Name>` | One icon, for example `@cyclone-ui/icons/icons/Bell`.                   |
| `@cyclone-ui/icons/all`          | The `allIcons` object. It maps each component name to its component.    |
| `@cyclone-ui/icons/create-icon`  | `createIcon` and `resolveIconSize`.                                     |
| `@cyclone-ui/icons/types`        | `ICON_VARIANTS` and the TypeScript types.                               |

## Props

Every icon takes the props of a Tamagui icon (`size`, `color`, `style`, `disableTheme`, and the other `react-native-svg` props). It adds `variant`, `animated`, and `mirrored`.

| Prop       | Type                                                           | Default           | Description                                                        |
| ---------- | -------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------ |
| `size`     | `number`, a size token, a font size token, or a token variable | `24`              | The width and height of the icon.                                  |
| `color`    | `string`                                                       | The theme `color` | The color of the icon's strokes and fills.                         |
| `variant`  | `"regular"`, `"loop"`, `"filled"`, or `"filled-loop"`          | `"regular"`       | The style of the icon.                                             |
| `animated` | `boolean`                                                      | `true`            | Plays the drawing animation on mount and when the variant changes. |
| `mirrored` | `boolean`                                                      | `false`           | Flips the icon horizontally, for right-to-left layouts.            |

The `disableTheme` prop comes from `@tamagui/helpers-icon`. Its effect is not documented here.

Source: [`types.ts`](../../../components/icons/src/types.ts) and [`create-icon.tsx`](../../../components/icons/src/create-icon.tsx).

### Size

- A number is a size in pixels. The icon is square. Its `viewBox` is `0 0 24 24`.
- A string is read as a [size token](../tokens/sizes.md) first. Example: `size="4xl"` is the `4xl` size, 20px. A `$` prefix on the name is ignored.
- If the string is not a size token, the icon treats it as a font size token. The icon then matches text of that size.
- `resolveIconSize` applies the same rules.

```tsx
<Bell size={32} />
<Bell size="4xl" />
```

### Color

- `color` paints the icon's `currentColor` strokes and fills. `strokeWidth` has no effect.
- A string can be a theme key, a [color token](../tokens/semantic-colors.md), or a literal color such as `"red"` or `"#1fb2a6"`.
- With no `color`, the icon uses the theme `color`. If the theme has none, it uses `#000`.
- The color changes with a 200ms transition on web.

```tsx
<Heart color="red" />
<Heart variant="filled" color="#1fb2a6" />
```

### Variant

`ICON_VARIANTS` lists the variants: `regular`, `loop`, `filled`, `filled-loop`.

- `regular` is the outline icon. `filled` adds a solid fill.
- `loop` and `filled-loop` keep animating after the icon is drawn, for example a ringing bell or a spinning `Loading` arc.
- Not every icon has every variant. The [catalog](#catalog) lists the variants of each icon. If an icon does not have the requested variant, it uses the closest one it has: the same fill first, then the same looping. Example: `<Bell variant="filled-loop" />` falls back to `filled`, then `loop`, then `regular`.

### Animation

line-md animates its icons with SVG `<animate>` elements, which `react-native-svg` does not run. The generator turns each animation into data, and `createIcon` plays it with `requestAnimationFrame`, so an icon animates the same way on web and on React Native.

- An icon draws itself in when it mounts, and again when its variant changes. The drawing takes about 0.3 to 1.3 seconds.
- `loop` and `filled-loop` variants repeat while the icon is mounted.
- With `animated={false}`, or when the user prefers reduced motion, the icon renders its final frame, and loops stay still.

```tsx
<Bell variant="loop" />
<Heart animated={false} />
```

### Stroke width

line-md draws its lines 2px wide. The generator scales every stroke to 75%, so lines render at 1.5px, closer to [Material Design Light](https://github.com/Templarian/MaterialDesignLight). `STROKE_SCALE` in the generator sets the factor.

### Accessibility

The source does not add an accessible name to an icon. It does not hide an icon from assistive technology. Pass `aria-hidden` for decorative icons, or label the control that contains the icon.

## Browse the icons in Storybook

The `Display/Icons` story has a `Gallery` view. It shows a preview of every icon and a text filter. It also has stories for the variants, the `Loading` spinner, static icons, colors, sizes, and `mirrored`, plus a **Replay** button to play the drawing animation again. See [`Icons.stories.tsx`](../../../components/icons/src/Icons.stories.tsx).

## Catalog

The catalog has 581 icons. 123 of them (marked *) are drawn for Cyclone UI in the line-md style, most of them after [Material Design Icons](https://pictogrammers.com/library/mdi/) shapes. The variant counts are: `regular` 572, `loop` 86, `filled` 309, `filled-loop` 49.

| Component                   | `regular` | `loop` | `filled` | `filled-loop` |
| --------------------------- | :-------: | :----: | :------: | :-----------: |
| `Account`                   |     ✓     |        |          |               |
| `AccountAdd`                |     ✓     |        |          |               |
| `AccountAlert`              |     ✓     |   ✓    |          |               |
| `AccountCircle` *           |     ✓     |        |    ✓     |               |
| `AccountDelete`             |     ✓     |        |          |               |
| `AccountRemove`             |     ✓     |        |          |               |
| `AccountSmall`              |     ✓     |        |          |               |
| `Alarm` *                   |     ✓     |   ✓    |    ✓     |       ✓       |
| `AlarmCheck` *              |     ✓     |        |    ✓     |               |
| `AlarmOff` *                |     ✓     |        |    ✓     |               |
| `AlarmPlus` *               |     ✓     |        |    ✓     |               |
| `Alert`                     |     ✓     |   ✓    |          |               |
| `AlertCircle`               |     ✓     |   ✓    |          |               |
| `AlertSquare`               |     ✓     |   ✓    |          |               |
| `AlignCenter`               |     ✓     |        |          |               |
| `AlignJustify`              |     ✓     |        |          |               |
| `AlignLeft`                 |     ✓     |        |          |               |
| `AlignRight`                |     ✓     |        |          |               |
| `Anchor` *                  |     ✓     |        |          |               |
| `ArrowAlignBottom`          |     ✓     |        |          |               |
| `ArrowAlignCenter`          |     ✓     |        |          |               |
| `ArrowAlignLeft`            |     ✓     |        |          |               |
| `ArrowAlignMiddle`          |     ✓     |        |          |               |
| `ArrowAlignRight`           |     ✓     |        |          |               |
| `ArrowAlignTop`             |     ✓     |        |          |               |
| `ArrowCloseDown`            |     ✓     |        |          |               |
| `ArrowCloseLeft`            |     ✓     |        |          |               |
| `ArrowCloseRight`           |     ✓     |        |          |               |
| `ArrowCloseUp`              |     ✓     |        |          |               |
| `ArrowDown`                 |     ✓     |        |          |               |
| `ArrowDownCircle`           |     ✓     |        |          |               |
| `ArrowDownSquare`           |     ✓     |        |          |               |
| `ArrowLeft`                 |     ✓     |        |          |               |
| `ArrowLeftCircle`           |     ✓     |        |          |               |
| `ArrowLeftSquare`           |     ✓     |        |          |               |
| `ArrowOpenDown`             |     ✓     |        |          |               |
| `ArrowOpenLeft`             |     ✓     |        |          |               |
| `ArrowOpenRight`            |     ✓     |        |          |               |
| `ArrowOpenUp`               |     ✓     |        |          |               |
| `ArrowRight`                |     ✓     |        |          |               |
| `ArrowRightCircle`          |     ✓     |        |          |               |
| `ArrowRightSquare`          |     ✓     |        |          |               |
| `ArrowsDiagonal`            |     ✓     |        |          |               |
| `ArrowsDiagonalRotated`     |     ✓     |        |          |               |
| `ArrowsHorizontal`          |     ✓     |        |          |               |
| `ArrowsHorizontalAlt`       |     ✓     |        |          |               |
| `ArrowsLongDiagonal`        |     ✓     |        |          |               |
| `ArrowsLongDiagonalRotated` |     ✓     |        |          |               |
| `ArrowSmallDown`            |     ✓     |        |          |               |
| `ArrowSmallLeft`            |     ✓     |        |          |               |
| `ArrowSmallRight`           |     ✓     |        |          |               |
| `ArrowSmallUp`              |     ✓     |        |          |               |
| `ArrowsVertical`            |     ✓     |        |          |               |
| `ArrowsVerticalAlt`         |     ✓     |        |          |               |
| `ArrowUp`                   |     ✓     |        |          |               |
| `ArrowUpCircle`             |     ✓     |        |          |               |
| `ArrowUpSquare`             |     ✓     |        |          |               |
| `Asterisk` *                |     ✓     |        |          |               |
| `At`                        |     ✓     |        |          |               |
| `Attachment` *              |     ✓     |        |          |               |
| `AutoFix` *                 |     ✓     |   ✓    |          |               |
| `AutoMode` *                |     ✓     |   ✓    |          |               |
| `Aws` *                     |     ✓     |        |          |               |
| `BackupRestore`             |     ✓     |        |          |               |
| `BadgeAccount` *            |     ✓     |        |    ✓     |               |
| `BadgeAccountHorizontal` *  |     ✓     |        |    ✓     |               |
| `Bank` *                    |     ✓     |        |    ✓     |               |
| `BankCircle` *              |     ✓     |        |    ✓     |               |
| `Barcode` *                 |     ✓     |        |          |               |
| `BarcodeScan` *             |     ✓     |        |          |               |
| `Beer`                      |     ✓     |   ✓    |    ✓     |       ✓       |
| `BeerAlt`                   |     ✓     |   ✓    |    ✓     |       ✓       |
| `Bell`                      |     ✓     |   ✓    |    ✓     |       ✓       |
| `BellAlert`                 |     ✓     |   ✓    |    ✓     |       ✓       |
| `BellOff` *                 |     ✓     |        |    ✓     |               |
| `BellPlus` *                |     ✓     |        |    ✓     |               |
| `BellRemove` *              |     ✓     |        |    ✓     |               |
| `BellRing` *                |     ✓     |   ✓    |    ✓     |       ✓       |
| `Bluesky`                   |     ✓     |        |    ✓     |               |
| `Brake`                     |     ✓     |        |    ✓     |               |
| `BrakeAbs`                  |     ✓     |        |    ✓     |               |
| `BrakeAlert`                |     ✓     |        |    ✓     |               |
| `BrakeHold`                 |     ✓     |        |    ✓     |               |
| `BrakeParking`              |     ✓     |        |    ✓     |               |
| `Briefcase`                 |     ✓     |        |    ✓     |               |
| `BriefcaseCancel`           |     ✓     |        |    ✓     |               |
| `BriefcaseCheck`            |     ✓     |        |    ✓     |               |
| `BriefcaseMinus`            |     ✓     |        |    ✓     |               |
| `BriefcasePlus`             |     ✓     |        |    ✓     |               |
| `BriefcaseRemove`           |     ✓     |        |    ✓     |               |
| `Bug` *                     |     ✓     |        |    ✓     |               |
| `BuyMeACoffee`              |     ✓     |        |    ✓     |               |
| `Cake`                      |     ✓     |        |    ✓     |               |
| `Calendar`                  |     ✓     |        |          |               |
| `Camera` *                  |     ✓     |        |    ✓     |               |
| `Cancel`                    |     ✓     |        |          |               |
| `CardAccountDetails` *      |     ✓     |        |    ✓     |               |
| `CarLight`                  |     ✓     |        |    ✓     |               |
| `CarLightAlert`             |     ✓     |        |    ✓     |               |
| `CarLightAlertOff`          |     ✓     |        |    ✓     |               |
| `CarLightDimmed`            |     ✓     |        |    ✓     |               |
| `CarLightDimmedOff`         |     ✓     |        |    ✓     |               |
| `CarLightOff`               |     ✓     |        |    ✓     |               |
| `Cart` *                    |     ✓     |        |    ✓     |               |
| `CartVariant` *             |     ✓     |        |          |               |
| `Cctv` *                    |     ✓     |        |          |               |
| `CctvOff` *                 |     ✓     |        |          |               |
| `Cellphone`                 |     ✓     |        |          |               |
| `CellphoneAndroid` *        |     ✓     |        |          |               |
| `CellphoneArrowDown`        |     ✓     |        |          |               |
| `CellphoneArrowUp`          |     ✓     |        |          |               |
| `CellphoneCheck` *          |     ✓     |        |          |               |
| `CellphoneKey` *            |     ✓     |        |          |               |
| `CellphoneOff`              |     ✓     |        |          |               |
| `CellphoneScreenshot`       |     ✓     |        |          |               |
| `Certificate` *             |     ✓     |        |    ✓     |               |
| `Chat`                      |     ✓     |        |    ✓     |               |
| `ChatAlert`                 |     ✓     |        |    ✓     |               |
| `ChatAlertOff`              |     ✓     |        |    ✓     |               |
| `ChatBubble`                |     ✓     |        |    ✓     |               |
| `ChatBubbleOff`             |     ✓     |        |    ✓     |               |
| `ChatOff`                   |     ✓     |        |    ✓     |               |
| `ChatRound`                 |     ✓     |        |    ✓     |               |
| `ChatRoundAlert`            |     ✓     |        |    ✓     |               |
| `ChatRoundAlertOff`         |     ✓     |        |    ✓     |               |
| `ChatRoundDots`             |     ✓     |        |    ✓     |               |
| `ChatRoundDotsOff`          |     ✓     |        |    ✓     |               |
| `ChatRoundOff`              |     ✓     |        |    ✓     |               |
| `CheckAll`                  |     ✓     |        |          |               |
| `CheckList3`                |     ✓     |        |    ✓     |               |
| `ChevronDoubleDown`         |     ✓     |        |          |               |
| `ChevronDoubleLeft`         |     ✓     |        |          |               |
| `ChevronDoubleRight`        |     ✓     |        |          |               |
| `ChevronDoubleUp`           |     ✓     |        |          |               |
| `ChevronDown`               |     ✓     |        |          |               |
| `ChevronDownCircle`         |     ✓     |        |          |               |
| `ChevronDownSquare`         |     ✓     |        |          |               |
| `ChevronLeft`               |     ✓     |        |          |               |
| `ChevronLeftCircle`         |     ✓     |        |          |               |
| `ChevronLeftSquare`         |     ✓     |        |          |               |
| `ChevronRight`              |     ✓     |        |          |               |
| `ChevronRightCircle`        |     ✓     |        |          |               |
| `ChevronRightSquare`        |     ✓     |        |          |               |
| `ChevronSmallDoubleDown`    |     ✓     |        |          |               |
| `ChevronSmallDoubleLeft`    |     ✓     |        |          |               |
| `ChevronSmallDoubleRight`   |     ✓     |        |          |               |
| `ChevronSmallDoubleUp`      |     ✓     |        |          |               |
| `ChevronSmallDown`          |     ✓     |        |          |               |
| `ChevronSmallLeft`          |     ✓     |        |          |               |
| `ChevronSmallRight`         |     ✓     |        |          |               |
| `ChevronSmallTripleDown`    |     ✓     |        |          |               |
| `ChevronSmallTripleLeft`    |     ✓     |        |          |               |
| `ChevronSmallTripleRight`   |     ✓     |        |          |               |
| `ChevronSmallTripleUp`      |     ✓     |        |          |               |
| `ChevronSmallUp`            |     ✓     |        |          |               |
| `ChevronTripleDown`         |     ✓     |        |          |               |
| `ChevronTripleLeft`         |     ✓     |        |          |               |
| `ChevronTripleRight`        |     ✓     |        |          |               |
| `ChevronTripleUp`           |     ✓     |        |          |               |
| `ChevronUp`                 |     ✓     |        |          |               |
| `ChevronUpCircle`           |     ✓     |        |          |               |
| `ChevronUpSquare`           |     ✓     |        |          |               |
| `Circle`                    |     ✓     |        |    ✓     |               |
| `Clipboard` *               |     ✓     |        |    ✓     |               |
| `ClipboardArrow`            |     ✓     |        |          |               |
| `ClipboardCheck`            |     ✓     |        |          |               |
| `ClipboardList`             |     ✓     |        |          |               |
| `ClipboardMinus`            |     ✓     |        |          |               |
| `ClipboardPlus`             |     ✓     |        |          |               |
| `ClipboardRemove`           |     ✓     |        |          |               |
| `ClipboardText` *           |     ✓     |        |    ✓     |               |
| `Clock` *                   |     ✓     |   ✓    |    ✓     |       ✓       |
| `Close`                     |     ✓     |        |          |               |
| `CloseCircle`               |     ✓     |        |    ✓     |               |
| `CloseSmall`                |     ✓     |        |          |               |
| `CloseSquare`               |     ✓     |        |    ✓     |               |
| `Cloud`                     |     ✓     |        |    ✓     |               |
| `CloudAlt`                  |     ✓     |   ✓    |    ✓     |       ✓       |
| `CloudAltBraces`            |     ✓     |   ✓    |          |               |
| `CloudAltDownload`          |     ✓     |   ✓    |    ✓     |       ✓       |
| `CloudAltOff`               |     ✓     |   ✓    |    ✓     |       ✓       |
| `CloudAltPrint`             |     ✓     |   ✓    |    ✓     |       ✓       |
| `CloudAltTags`              |     ✓     |   ✓    |    ✓     |       ✓       |
| `CloudAltUpload`            |     ✓     |   ✓    |    ✓     |       ✓       |
| `CloudDown`                 |     ✓     |        |          |               |
| `CloudOff`                  |     ✓     |        |    ✓     |               |
| `CloudUp`                   |     ✓     |        |          |               |
| `Coffee`                    |     ✓     |   ✓    |    ✓     |       ✓       |
| `CoffeeArrow`               |     ✓     |        |    ✓     |               |
| `CoffeeHalfEmpty`           |           |        |          |       ✓       |
| `Cog`                       |     ✓     |   ✓    |    ✓     |       ✓       |
| `CogOff`                    |     ✓     |   ✓    |    ✓     |       ✓       |
| `Compass`                   |     ✓     |   ✓    |    ✓     |       ✓       |
| `CompassOff`                |     ✓     |   ✓    |    ✓     |       ✓       |
| `Computer`                  |     ✓     |        |    ✓     |               |
| `ComputerOff`               |     ✓     |        |    ✓     |               |
| `Confirm`                   |     ✓     |        |          |               |
| `ConfirmCircle`             |     ✓     |        |    ✓     |               |
| `ConfirmSquare`             |     ✓     |        |    ✓     |               |
| `Console` *                 |     ✓     |   ✓    |    ✓     |       ✓       |
| `ConsoleLine` *             |     ✓     |   ✓    |          |               |
| `Construction`              |     ✓     |        |          |               |
| `Cookie`                    |     ✓     |        |    ✓     |               |
| `CookieCheck`               |     ✓     |        |    ✓     |               |
| `CookieMinus`               |     ✓     |        |    ✓     |               |
| `CookieOff`                 |     ✓     |        |    ✓     |               |
| `CookiePlus`                |     ✓     |        |    ✓     |               |
| `CookieRemove`              |     ✓     |        |    ✓     |               |
| `CookieSettings`            |     ✓     |        |    ✓     |               |
| `Discord`                   |     ✓     |        |          |               |
| `Dns` *                     |     ✓     |        |    ✓     |               |
| `Document`                  |     ✓     |        |          |               |
| `DocumentAdd`               |     ✓     |        |          |               |
| `DocumentCode`              |     ✓     |        |          |               |
| `DocumentDelete`            |     ✓     |        |          |               |
| `DocumentList`              |     ✓     |        |          |               |
| `DocumentRemove`            |     ✓     |        |          |               |
| `DocumentReport`            |     ✓     |        |          |               |
| `Dot` *                     |     ✓     |        |    ✓     |               |
| `DotsHorizontal` *          |     ✓     |        |          |               |
| `DotsVertical` *            |     ✓     |        |          |               |
| `DoubleArrowHorizontal`     |     ✓     |        |          |               |
| `DoubleArrowVertical`       |     ✓     |        |          |               |
| `Download`                  |     ✓     |   ✓    |          |               |
| `Downloading`               |     ✓     |   ✓    |          |               |
| `DownloadOff`               |     ✓     |   ✓    |          |               |
| `DownloadOffOutline`        |     ✓     |   ✓    |          |               |
| `DownloadOutline`           |     ✓     |   ✓    |          |               |
| `Edit`                      |     ✓     |        |    ✓     |               |
| `EditFull`                  |           |        |    ✓     |               |
| `Email`                     |     ✓     |        |    ✓     |               |
| `EmailAlert`                |     ✓     |        |    ✓     |               |
| `EmailAlt`                  |           |        |    ✓     |               |
| `EmailArrowDown`            |     ✓     |        |    ✓     |               |
| `EmailArrowLeft`            |     ✓     |        |    ✓     |               |
| `EmailArrowRight`           |     ✓     |        |    ✓     |               |
| `EmailArrowUp`              |     ✓     |        |    ✓     |               |
| `EmailCheck`                |     ✓     |        |    ✓     |               |
| `EmailMinus`                |     ✓     |        |    ✓     |               |
| `EmailMultiple`             |     ✓     |        |    ✓     |               |
| `EmailOpened`               |     ✓     |        |    ✓     |               |
| `EmailOpenedAlt`            |           |        |    ✓     |               |
| `EmailOpenedMultiple`       |     ✓     |        |    ✓     |               |
| `EmailPlus`                 |     ✓     |        |    ✓     |               |
| `EmailRemove`               |     ✓     |        |    ✓     |               |
| `EmojiAngry`                |     ✓     |        |    ✓     |               |
| `EmojiCry`                  |     ✓     |        |    ✓     |               |
| `EmojiFrown`                |     ✓     |        |    ✓     |               |
| `EmojiFrownOpen`            |     ✓     |        |    ✓     |               |
| `EmojiGrin`                 |     ✓     |        |    ✓     |               |
| `EmojiNeutral`              |     ✓     |        |    ✓     |               |
| `EmojiSmile`                |     ✓     |        |    ✓     |               |
| `EmojiSmileWink`            |     ✓     |        |    ✓     |               |
| `Engine`                    |     ✓     |        |    ✓     |               |
| `EngineOff`                 |     ✓     |        |    ✓     |               |
| `ExternalLink`              |     ✓     |        |          |               |
| `ExternalLinkRounded`       |     ✓     |        |          |               |
| `Facebook` *                |     ✓     |        |    ✓     |               |
| `File`                      |     ✓     |        |    ✓     |               |
| `FileCancel`                |     ✓     |        |    ✓     |               |
| `FileDocument`              |     ✓     |        |    ✓     |               |
| `FileDocumentCancel`        |     ✓     |        |    ✓     |               |
| `FileDocumentMinus`         |     ✓     |        |    ✓     |               |
| `FileDocumentOff`           |     ✓     |        |    ✓     |               |
| `FileDocumentPlus`          |     ✓     |        |    ✓     |               |
| `FileDocumentRemove`        |     ✓     |        |    ✓     |               |
| `FileDownload`              |     ✓     |        |    ✓     |               |
| `FileExport`                |     ✓     |        |    ✓     |               |
| `FileImport`                |     ✓     |        |    ✓     |               |
| `FileMinus`                 |     ✓     |        |    ✓     |               |
| `FileOff`                   |     ✓     |        |    ✓     |               |
| `FilePlus`                  |     ✓     |        |    ✓     |               |
| `FileRemove`                |     ✓     |        |    ✓     |               |
| `FileSearch`                |     ✓     |        |    ✓     |               |
| `FileUpload`                |     ✓     |        |    ✓     |               |
| `Filter`                    |     ✓     |        |    ✓     |               |
| `FilterAlt`                 |     ✓     |        |          |               |
| `FilterAltOff`              |     ✓     |        |          |               |
| `FilterConfirm`             |     ✓     |        |    ✓     |               |
| `FilterMinus`               |     ✓     |        |    ✓     |               |
| `FilterOff`                 |     ✓     |        |    ✓     |               |
| `FilterPlus`                |     ✓     |        |    ✓     |               |
| `FilterRemove`              |     ✓     |        |    ✓     |               |
| `FilterVariant` *           |     ✓     |        |          |               |
| `Fingerprint` *             |     ✓     |        |          |               |
| `FingerprintPattern` *      |     ✓     |        |          |               |
| `FlipHorizontal` *          |     ✓     |        |          |               |
| `FlipToBack` *              |     ✓     |        |          |               |
| `FlipToFront` *             |     ✓     |        |          |               |
| `FlipVertical` *            |     ✓     |        |          |               |
| `Folder`                    |     ✓     |        |    ✓     |               |
| `FolderArrowDown`           |     ✓     |        |    ✓     |               |
| `FolderArrowLeft`           |     ✓     |        |    ✓     |               |
| `FolderArrowRight`          |     ✓     |        |    ✓     |               |
| `FolderArrowUp`             |     ✓     |        |    ✓     |               |
| `FolderCancel`              |     ✓     |        |    ✓     |               |
| `FolderCheck`               |     ✓     |        |    ✓     |               |
| `FolderMinus`               |     ✓     |        |    ✓     |               |
| `FolderMultiple`            |     ✓     |        |    ✓     |               |
| `FolderMusic`               |     ✓     |        |    ✓     |               |
| `FolderNetwork`             |     ✓     |        |    ✓     |               |
| `FolderOff`                 |     ✓     |        |    ✓     |               |
| `FolderOpen` *              |     ✓     |        |    ✓     |               |
| `FolderPlus`                |     ✓     |        |    ✓     |               |
| `FolderRemove`              |     ✓     |        |    ✓     |               |
| `FolderSettings`            |     ✓     |        |    ✓     |               |
| `FolderZip`                 |     ✓     |        |    ✓     |               |
| `ForkLeft`                  |     ✓     |        |          |               |
| `ForkRight`                 |     ✓     |        |          |               |
| `Gauge`                     |     ✓     |   ✓    |          |               |
| `GaugeEmpty`                |     ✓     |        |          |               |
| `GaugeFull`                 |     ✓     |        |          |               |
| `GaugeLow`                  |     ✓     |        |          |               |
| `Gift` *                    |     ✓     |        |    ✓     |               |
| `Github` *                  |     ✓     |   ✓    |    ✓     |       ✓       |
| `GithubBox` *               |     ✓     |   ✓    |    ✓     |       ✓       |
| `Grid3`                     |     ✓     |        |    ✓     |               |
| `HandClap` *                |     ✓     |        |    ✓     |               |
| `Hash`                      |     ✓     |        |          |               |
| `HashSmall`                 |     ✓     |        |          |               |
| `HazardLights`              |     ✓     |   ✓    |    ✓     |       ✓       |
| `HazardLightsOff`           |     ✓     |   ✓    |    ✓     |       ✓       |
| `Heart`                     |     ✓     |        |    ✓     |               |
| `HeartFilledHalf`           |     ✓     |        |          |               |
| `HeartHalf`                 |     ✓     |        |    ✓     |               |
| `Home`                      |     ✓     |        |          |               |
| `HomeMd`                    |     ✓     |        |          |               |
| `HomeSimple`                |     ✓     |        |    ✓     |               |
| `Iconify1`                  |     ✓     |        |          |               |
| `Iconify2`                  |     ✓     |        |          |               |
| `Iconify2Static`            |     ✓     |        |          |               |
| `Image`                     |     ✓     |        |    ✓     |               |
| `InformationSlabCircle` *   |     ✓     |        |    ✓     |               |
| `Instagram`                 |     ✓     |        |          |               |
| `Key` *                     |     ✓     |        |    ✓     |               |
| `KeyVariant` *              |     ✓     |        |    ✓     |               |
| `Kubernetes` *              |     ✓     |        |    ✓     |               |
| `LanguageC` *               |     ✓     |        |          |               |
| `LanguageCpp` *             |     ✓     |        |          |               |
| `LanguageCsharp` *          |     ✓     |        |          |               |
| `LanguageGo` *              |     ✓     |        |          |               |
| `LanguageHtml5` *           |     ✓     |        |    ✓     |               |
| `LanguageJava` *            |     ✓     |        |          |               |
| `LanguageJavascript` *      |     ✓     |        |    ✓     |               |
| `LanguageJsx` *             |     ✓     |        |    ✓     |               |
| `LanguageMarkdown` *        |     ✓     |        |    ✓     |               |
| `LanguagePhp` *             |     ✓     |        |    ✓     |               |
| `LanguagePython` *          |     ✓     |        |    ✓     |               |
| `LanguageRust` *            |     ✓     |        |          |               |
| `LanguageTypescript` *      |     ✓     |        |    ✓     |               |
| `Laptop`                    |     ✓     |        |    ✓     |               |
| `LaptopOff`                 |     ✓     |        |    ✓     |               |
| `License` *                 |     ✓     |        |    ✓     |               |
| `Lightbulb`                 |     ✓     |        |    ✓     |               |
| `LightbulbOff`              |     ✓     |   ✓    |    ✓     |       ✓       |
| `LightDark`                 |     ✓     |   ✓    |          |               |
| `Lightning` *               |     ✓     |        |    ✓     |               |
| `Link`                      |     ✓     |        |          |               |
| `Linkedin` *                |     ✓     |        |    ✓     |               |
| `List`                      |     ✓     |        |          |               |
| `List3`                     |     ✓     |        |    ✓     |               |
| `ListBox` *                 |     ✓     |        |    ✓     |               |
| `ListIndented`              |     ✓     |        |          |               |
| `ListIndentedReversed`      |     ✓     |        |          |               |
| `Loading`                   |           |   ✓    |          |               |
| `LoadingAlt`                |           |   ✓    |          |               |
| `Lock` *                    |     ✓     |        |    ✓     |               |
| `LockOpen` *                |     ✓     |        |    ✓     |               |
| `Login`                     |     ✓     |        |          |               |
| `LogIn2`                    |     ✓     |        |          |               |
| `Logout`                    |     ✓     |        |          |               |
| `LogOut2`                   |     ✓     |        |          |               |
| `Magnify` *                 |     ✓     |        |    ✓     |               |
| `Mailbox` *                 |     ✓     |        |    ✓     |               |
| `MapMarker`                 |     ✓     |   ✓    |    ✓     |       ✓       |
| `MapMarkerAlt`              |     ✓     |   ✓    |    ✓     |       ✓       |
| `MapMarkerAltOff`           |     ✓     |   ✓    |    ✓     |       ✓       |
| `MapMarkerMinus`            |     ✓     |        |    ✓     |               |
| `MapMarkerMultiple`         |     ✓     |   ✓    |    ✓     |       ✓       |
| `MapMarkerMultipleAlt`      |     ✓     |   ✓    |    ✓     |       ✓       |
| `MapMarkerMultipleAltOff`   |     ✓     |   ✓    |    ✓     |       ✓       |
| `MapMarkerMultipleOff`      |     ✓     |   ✓    |    ✓     |       ✓       |
| `MapMarkerOff`              |     ✓     |   ✓    |    ✓     |       ✓       |
| `MapMarkerPlus`             |     ✓     |        |    ✓     |               |
| `MapMarkerRadius`           |     ✓     |        |    ✓     |               |
| `MapMarkerRemove`           |     ✓     |        |    ✓     |               |
| `MapTrifold` *              |     ✓     |        |          |               |
| `Marker`                    |     ✓     |        |    ✓     |               |
| `Mastodon`                  |     ✓     |        |    ✓     |               |
| `MedicalServices`           |     ✓     |        |    ✓     |               |
| `Medium` *                  |     ✓     |        |          |               |
| `Menu`                      |     ✓     |        |          |               |
| `MenuFoldLeft`              |     ✓     |        |          |               |
| `MenuFoldRight`             |     ✓     |        |          |               |
| `MenuUnfoldLeft`            |     ✓     |        |          |               |
| `MenuUnfoldRight`           |     ✓     |        |          |               |
| `Microphone` *              |     ✓     |        |    ✓     |               |
| `MicrophoneOff` *           |     ✓     |        |    ✓     |               |
| `Minus`                     |     ✓     |        |          |               |
| `MinusCircle`               |     ✓     |        |    ✓     |               |
| `MinusSquare`               |     ✓     |        |    ✓     |               |
| `Monitor`                   |     ✓     |        |    ✓     |               |
| `MonitorArrowDown`          |     ✓     |        |    ✓     |               |
| `MonitorArrowUp`            |     ✓     |        |    ✓     |               |
| `MonitorMutlple`            |     ✓     |        |    ✓     |               |
| `MonitorOff`                |     ✓     |        |    ✓     |               |
| `MonitorScreenshot`         |     ✓     |        |    ✓     |               |
| `MonitorSmall`              |     ✓     |        |    ✓     |               |
| `MonitorSmallOff`           |     ✓     |        |    ✓     |               |
| `Moon`                      |     ✓     |   ✓    |    ✓     |       ✓       |
| `MoonAlt`                   |     ✓     |   ✓    |    ✓     |       ✓       |
| `MoonAltOff`                |     ✓     |   ✓    |    ✓     |       ✓       |
| `MoonOff`                   |     ✓     |   ✓    |    ✓     |       ✓       |
| `MoonRising`                |     ✓     |   ✓    |    ✓     |       ✓       |
| `MoonRisingAlt`             |     ✓     |   ✓    |    ✓     |       ✓       |
| `MoonSimple`                |     ✓     |        |    ✓     |               |
| `MoonSimpleOff`             |     ✓     |        |    ✓     |               |
| `Mushroom`                  |     ✓     |        |    ✓     |               |
| `MushroomOff`               |     ✓     |        |    ✓     |               |
| `MyLocation`                |     ✓     |   ✓    |          |               |
| `MyLocationOff`             |     ✓     |   ✓    |          |               |
| `NavigationLeftDown`        |     ✓     |        |          |               |
| `NavigationLeftUp`          |     ✓     |        |          |               |
| `NavigationRightDown`       |     ✓     |        |          |               |
| `NavigationRightUp`         |     ✓     |        |          |               |
| `NewspaperVariant` *        |     ✓     |        |    ✓     |               |
| `Nix` *                     |     ✓     |        |          |               |
| `Notebook` *                |     ✓     |        |    ✓     |               |
| `OpenSourceInitiative` *    |     ✓     |        |    ✓     |               |
| `PaintDrop`                 |     ✓     |        |    ✓     |               |
| `PaintDropHalf`             |           |        |    ✓     |               |
| `PaletteSwatchVariant` *    |     ✓     |        |    ✓     |               |
| `Patreon`                   |     ✓     |        |          |               |
| `Pause`                     |     ✓     |        |          |               |
| `PauseOff`                  |     ✓     |        |          |               |
| `Peanut`                    |     ✓     |        |    ✓     |               |
| `PeanutOff`                 |     ✓     |        |    ✓     |               |
| `Peertube`                  |     ✓     |        |          |               |
| `PeertubeAlt`               |     ✓     |        |          |               |
| `Pencil`                    |     ✓     |        |          |               |
| `Person`                    |     ✓     |        |    ✓     |               |
| `PersonAdd`                 |     ✓     |        |    ✓     |               |
| `PersonOff`                 |     ✓     |   ✓    |    ✓     |       ✓       |
| `PersonRemove`              |     ✓     |        |    ✓     |               |
| `PersonSearch`              |     ✓     |        |    ✓     |               |
| `Phone`                     |     ✓     |   ✓    |    ✓     |       ✓       |
| `PhoneAdd`                  |     ✓     |        |    ✓     |               |
| `PhoneCall`                 |     ✓     |   ✓    |    ✓     |       ✓       |
| `PhoneIncoming`             |     ✓     |        |    ✓     |               |
| `PhoneOff`                  |     ✓     |   ✓    |    ✓     |       ✓       |
| `PhoneOutgoing`             |     ✓     |        |    ✓     |               |
| `PhoneRemove`               |     ✓     |        |    ✓     |               |
| `Pin` *                     |     ✓     |        |    ✓     |               |
| `Pixelfed`                  |     ✓     |        |    ✓     |               |
| `Pizza`                     |     ✓     |        |    ✓     |               |
| `PizzaOff`                  |     ✓     |        |    ✓     |               |
| `Play`                      |     ✓     |        |    ✓     |               |
| `PlayOff`                   |     ✓     |        |    ✓     |               |
| `Pleroma`                   |     ✓     |        |          |               |
| `Plus`                      |     ✓     |        |          |               |
| `PlusCircle`                |     ✓     |        |    ✓     |               |
| `PlusSquare`                |     ✓     |        |    ✓     |               |
| `Puzzle` *                  |     ✓     |        |    ✓     |               |
| `Qrcode` *                  |     ✓     |        |          |               |
| `Question`                  |     ✓     |        |          |               |
| `QuestionCircle` *          |     ✓     |        |    ✓     |               |
| `QuestionSquare` *          |     ✓     |        |    ✓     |               |
| `Reddit`                    |     ✓     |   ✓    |          |               |
| `RedditCircle`              |     ✓     |   ✓    |          |               |
| `Remove`                    |     ✓     |        |          |               |
| `Robot` *                   |     ✓     |        |    ✓     |               |
| `Rotate90`                  |     ✓     |        |          |               |
| `Rotate180`                 |     ✓     |        |          |               |
| `Rotate270`                 |     ✓     |        |          |               |
| `Round360`                  |     ✓     |        |          |               |
| `RoundaboutLeft`            |     ✓     |        |          |               |
| `RoundaboutRight`           |     ✓     |        |          |               |
| `RoundRampLeft`             |     ✓     |        |          |               |
| `RoundRampRight`            |     ✓     |        |          |               |
| `Rss` *                     |     ✓     |   ✓    |          |               |
| `RssBox` *                  |     ✓     |        |    ✓     |               |
| `SafeSquare` *              |     ✓     |        |    ✓     |               |
| `SatelliteUplink` *         |     ✓     |   ✓    |    ✓     |       ✓       |
| `SatelliteVariant` *        |     ✓     |        |    ✓     |               |
| `Search`                    |     ✓     |        |    ✓     |               |
| `Security`                  |     ✓     |        |    ✓     |               |
| `SecurityOff`               |     ✓     |        |    ✓     |               |
| `Send` *                    |     ✓     |        |    ✓     |               |
| `Server` *                  |     ✓     |        |    ✓     |               |
| `Share` *                   |     ✓     |        |    ✓     |               |
| `ShareVariant` *            |     ✓     |        |    ✓     |               |
| `Shimmer` *                 |     ✓     |   ✓    |    ✓     |       ✓       |
| `Skull` *                   |     ✓     |        |    ✓     |               |
| `SortAscending` *           |     ✓     |        |          |               |
| `SortDescending` *          |     ✓     |        |          |               |
| `Soundcloud`                |     ✓     |        |          |               |
| `Speed`                     |     ✓     |   ✓    |          |               |
| `Speedometer`               |     ✓     |   ✓    |          |               |
| `Spotify`                   |     ✓     |        |    ✓     |               |
| `Square`                    |     ✓     |        |    ✓     |               |
| `Star`                      |     ✓     |        |    ✓     |               |
| `StarAlt`                   |     ✓     |        |    ✓     |               |
| `StarAltFilledHalf`         |     ✓     |        |          |               |
| `StarAltFilledRightHalf`    |     ✓     |        |          |               |
| `StarHalf`                  |     ✓     |        |    ✓     |               |
| `StarHalfAlt`               |     ✓     |        |    ✓     |               |
| `StarPulsating`             |           |   ✓    |          |       ✓       |
| `StarRightHalf`             |     ✓     |        |    ✓     |               |
| `StarRightHalfAlt`          |     ✓     |        |    ✓     |               |
| `Steering`                  |     ✓     |        |          |               |
| `SteeringOff`               |     ✓     |        |          |               |
| `Storefront` *              |     ✓     |        |    ✓     |               |
| `Sunny`                     |     ✓     |   ✓    |    ✓     |       ✓       |
| `SunnyOff`                  |     ✓     |   ✓    |    ✓     |       ✓       |
| `SunnyOutline`              |     ✓     |   ✓    |          |               |
| `SunRising`                 |     ✓     |   ✓    |    ✓     |       ✓       |
| `Switch`                    |     ✓     |        |    ✓     |               |
| `SwitchOff`                 |     ✓     |        |    ✓     |               |
| `Tablet`                    |     ✓     |        |          |               |
| `TabletArrowDown`           |     ✓     |        |          |               |
| `TabletArrowUp`             |     ✓     |        |          |               |
| `TabletOff`                 |     ✓     |        |          |               |
| `TabletScreenshot`          |     ✓     |        |          |               |
| `Taco`                      |     ✓     |        |          |               |
| `Tag` *                     |     ✓     |        |    ✓     |               |
| `TagOff` *                  |     ✓     |        |    ✓     |               |
| `TagPlus` *                 |     ✓     |        |    ✓     |               |
| `Tailwind` *                |     ✓     |        |    ✓     |               |
| `Telegram`                  |     ✓     |        |          |               |
| `Terraform` *               |     ✓     |        |    ✓     |               |
| `TextBox`                   |     ✓     |        |          |               |
| `TextBoxMultiple`           |     ✓     |        |          |               |
| `ThumbsDown` *              |     ✓     |        |    ✓     |               |
| `ThumbsUp` *                |     ✓     |        |    ✓     |               |
| `Tiktok`                    |     ✓     |        |          |               |
| `Tor` *                     |     ✓     |        |    ✓     |               |
| `Trash`                     |     ✓     |        |          |               |
| `TrayArrowDown` *           |     ✓     |   ✓    |          |               |
| `TrayArrowUp` *             |     ✓     |   ✓    |          |               |
| `Tune` *                    |     ✓     |   ✓    |          |               |
| `TuneVertical` *            |     ✓     |   ✓    |          |               |
| `TurnLeft`                  |     ✓     |        |          |               |
| `TurnRight`                 |     ✓     |        |          |               |
| `TurnSharpLeft`             |     ✓     |        |          |               |
| `TurnSharpRight`            |     ✓     |        |          |               |
| `TurnSlightLeft`            |     ✓     |        |          |               |
| `TurnSlightRight`           |     ✓     |        |          |               |
| `Twitter`                   |     ✓     |        |    ✓     |               |
| `TwitterX`                  |     ✓     |        |          |               |
| `TwitterXAlt`               |     ✓     |        |          |               |
| `TwoFactorAuthentication` * |     ✓     |        |          |               |
| `Update` *                  |     ✓     |   ✓    |          |               |
| `Upload`                    |     ✓     |   ✓    |          |               |
| `Uploading`                 |     ✓     |   ✓    |          |               |
| `UploadOff`                 |     ✓     |   ✓    |          |               |
| `UploadOffOutline`          |     ✓     |   ✓    |          |               |
| `UploadOutline`             |     ✓     |   ✓    |          |               |
| `UsbFlashDrive` *           |     ✓     |        |    ✓     |               |
| `UTurnLeft`                 |     ✓     |        |          |               |
| `UTurnRight`                |     ✓     |        |          |               |
| `ValignBaseline`            |     ✓     |        |          |               |
| `ValignBottom`              |     ✓     |        |          |               |
| `ValignMiddle`              |     ✓     |        |          |               |
| `ValignTop`                 |     ✓     |        |          |               |
| `VolumeHigh`                |     ✓     |        |    ✓     |               |
| `VolumeHighOff`             |     ✓     |        |    ✓     |               |
| `VolumeLow`                 |     ✓     |        |    ✓     |               |
| `VolumeLowOff`              |     ✓     |        |    ✓     |               |
| `VolumeMedium`              |     ✓     |        |    ✓     |               |
| `VolumeMediumOff`           |     ✓     |        |    ✓     |               |
| `VolumeMinus`               |     ✓     |        |    ✓     |               |
| `VolumePlus`                |     ✓     |        |    ✓     |               |
| `VolumeRemove`              |     ✓     |        |    ✓     |               |
| `Watch`                     |     ✓     |   ✓    |          |               |
| `WatchOff`                  |     ✓     |   ✓    |          |               |
| `Water`                     |     ✓     |        |    ✓     |               |
| `WaterOff`                  |     ✓     |        |    ✓     |               |
| `WeatherCloudy`             |           |   ✓    |          |               |
| `Web` *                     |     ✓     |        |          |               |
| `WebBox` *                  |     ✓     |        |    ✓     |               |
| `Youtube`                   |     ✓     |        |    ✓     |               |

## Related pages

- [Design system overview](../index.md)
- [Color tokens](../tokens/semantic-colors.md)
- [Size tokens](../tokens/sizes.md)

## License

The line-md icon artwork is © Vjacheslav Trushkin. It is licensed under the [MIT License](https://github.com/cyberalien/line-md/blob/main/license.txt).
