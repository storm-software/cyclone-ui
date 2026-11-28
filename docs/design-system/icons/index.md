---
title: "Icons"
description: "Catalog of all 852 Cyclone UI icon components, with import paths and the size, color, variant, animated, and mirrored props."
documentType: reference
tags: [icons, line-md, tamagui, animation]
component:
  name: icons
  package: "@cyclone-ui/icons"
  stories:
    - title: Display/Icons
      file: components/icons/src/Icons.stories.tsx
---

# Icons

The `@cyclone-ui/icons` package has one icon component for each icon in the [Material Line Icons](https://github.com/cyberalien/line-md) (line-md) collection, plus a few icons drawn for Cyclone UI in the same style. Each icon is a [Tamagui](https://tamagui.dev) component. It works on web and on React Native, and it draws itself in when it mounts.

Source: [`components/icons/src/icons`](../../../components/icons/src/icons). The files are generated. Do not edit them by hand. The generator reads the animated SVGs from `line-md` 3.0.5 and from [`components/icons/assets`](../../../components/icons/assets). See the [generator script](../../../components/icons/scripts/generate.ts).

The package also has [`ThemeableIcon` and `ThemedIcon`](./themeable-icon.md), which theme a child icon or show a status icon, and the [vectors](./vectors.md), a set of custom SVG graphics with state animations.

## Installation

Copy the package into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add icons
pnpm install
```

- **Files:** every icon module, `ThemeableIcon.tsx`, the vectors, and the helpers (`create-icon.tsx`, `animate.ts`, `types.ts`, `all.ts`, `FileExtensionIcon.tsx`). The CLI writes them to `<path>/icons/`. `path` comes from `components.json` and defaults to `components`.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/helpers`, `@tamagui/helpers-icon`, `@tamagui/helpers-tamagui`, `motion`, and `react-native-svg`.

Many components copy the icons package with them. See the Installation section of each [component page](../components/index.md).

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
| `@cyclone-ui/icons/ThemeableIcon` | [`ThemeableIcon`, `ThemedIcon`, and `getIconByTheme`](./themeable-icon.md). The package root exports them too. |
| `@cyclone-ui/icons/FileExtensionIcon` | `FileExtensionIcon`, `getFileExtensionIcon`, and `getIconByFileExtension`, which pick an icon for a file extension. The package root exports them too. |
| `@cyclone-ui/icons/vectors`      | The [vectors](./vectors.md). The package root exports them as the `vectors` namespace. |

## Props

Every icon takes the props of a Tamagui icon (`size`, `color`, `style`, `disableTheme`, and the other `react-native-svg` props). It adds `variant`, `animated`, and `mirrored`.

| Prop       | Type                                                           | Default           | Description                                                        |
| ---------- | -------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------ |
| `size`     | `number`, a size token, a font size token, or a token variable | `24`              | The width and height of the icon.                                  |
| `color`    | `string`                                                       | The theme `color` | The color of the icon's strokes and fills.                         |
| `variant`  | `"regular"`, `"bold"`, `"loop"`, `"filled"`, or `"filled-loop"` | `"regular"`      | The style of the icon.                                             |
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

`ICON_VARIANTS` lists the variants: `regular`, `bold`, `loop`, `filled`, `filled-loop`.

- `regular` is the outline icon. `bold` is the same outline with the original 2px line-md strokes. `filled` adds a solid fill.
- `loop` and `filled-loop` keep animating after the icon is drawn, for example a ringing bell or a spinning `Loading` arc.
- Not every icon has every variant. The [catalog](#catalog) lists the variants of each icon. If an icon does not have the requested variant, it uses the closest one it has: the same fill first, then the same looping. Example: `<Bell variant="filled-loop" />` falls back to `filled`, then `loop`, then `regular`. `bold` falls back to `regular`, then to the same order as `regular`.

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

line-md draws its lines 2px wide. The generator scales every stroke to 75%, so lines render at 1.5px, closer to [Material Design Light](https://github.com/Templarian/MaterialDesignLight). `STROKE_SCALE` in the generator sets the factor. The `bold` variant is not scaled: it keeps the 2px strokes. `BOLD_STROKE_SCALE` in the generator makes the strokes of a few `bold` icons thicker, where the original lines read too thin.

### Accessibility

The source does not add an accessible name to an icon. It does not hide an icon from assistive technology. Pass `aria-hidden` for decorative icons, or label the control that contains the icon.

## Browse the icons in Storybook

The `Display/Icons` story has a `Gallery` view. It shows a preview of every icon and a text filter. It also has stories for the variants, the `Loading` spinner, static icons, colors, sizes, and `mirrored`, plus a **Replay** button to play the drawing animation again. See [`Icons.stories.tsx`](../../../components/icons/src/Icons.stories.tsx).

## Catalog

The catalog has 852 icons. 400 of them (marked *) are drawn for Cyclone UI in the line-md style, after [Material Design Icons](https://pictogrammers.com/library/mdi/), [Lucide](https://lucide.dev), [Tabler](https://tabler.io/icons), [Solar](https://www.figma.com/community/file/1166831539721848736) and [Remix Icon](https://remixicon.com) shapes. An icon whose name was already taken has an `Alt` suffix, for example `GithubAlt` and `MediumAlt`. The variant counts are: `regular` 843, `bold` 843, `loop` 86, `filled` 433, `filled-loop` 49. Brand icons drop the `brand-` prefix of their source name, for example `Docker` and `Vercel`.

| Component                      | `regular` | `bold` | `loop` | `filled` | `filled-loop` |
| ------------------------------ | :-------: | :----: | :----: | :------: | :-----------: |
| `Account`                      |     ✓     |   ✓    |        |          |               |
| `AccountAdd`                   |     ✓     |   ✓    |        |          |               |
| `AccountAlert`                 |     ✓     |   ✓    |   ✓    |          |               |
| `AccountCircle` *              |     ✓     |   ✓    |        |    ✓     |               |
| `AccountDelete`                |     ✓     |   ✓    |        |          |               |
| `AccountRemove`                |     ✓     |   ✓    |        |          |               |
| `AccountSmall`                 |     ✓     |   ✓    |        |          |               |
| `Ad` *                         |     ✓     |   ✓    |        |          |               |
| `Ai` *                         |     ✓     |   ✓    |        |          |               |
| `AiAgent` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `AiGenerate2` *                |     ✓     |   ✓    |        |    ✓     |               |
| `AiGenerate2Alt` *             |     ✓     |   ✓    |        |          |               |
| `Alarm` *                      |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `AlarmCheck` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `AlarmOff` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `AlarmPlus` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `Album` *                      |     ✓     |   ✓    |        |          |               |
| `Alert`                        |     ✓     |   ✓    |   ✓    |          |               |
| `AlertCircle`                  |     ✓     |   ✓    |   ✓    |          |               |
| `AlertSquare`                  |     ✓     |   ✓    |   ✓    |          |               |
| `AlignCenter`                  |     ✓     |   ✓    |        |          |               |
| `AlignJustify`                 |     ✓     |   ✓    |        |          |               |
| `AlignLeft`                    |     ✓     |   ✓    |        |          |               |
| `AlignRight`                   |     ✓     |   ✓    |        |          |               |
| `Amazon` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Anchor` *                     |     ✓     |   ✓    |        |          |               |
| `Android` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Anthropic` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `ApiApp` *                     |     ✓     |   ✓    |        |          |               |
| `Apple` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `AppStore` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Archive` *                    |     ✓     |   ✓    |        |          |               |
| `Archive2` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `ArchiveStack` *               |     ✓     |   ✓    |        |    ✓     |               |
| `ArchiveX` *                   |     ✓     |   ✓    |        |          |               |
| `ArrowAlignBottom`             |     ✓     |   ✓    |        |          |               |
| `ArrowAlignCenter`             |     ✓     |   ✓    |        |          |               |
| `ArrowAlignLeft`               |     ✓     |   ✓    |        |          |               |
| `ArrowAlignMiddle`             |     ✓     |   ✓    |        |          |               |
| `ArrowAlignRight`              |     ✓     |   ✓    |        |          |               |
| `ArrowAlignTop`                |     ✓     |   ✓    |        |          |               |
| `ArrowCloseDown`               |     ✓     |   ✓    |        |          |               |
| `ArrowCloseLeft`               |     ✓     |   ✓    |        |          |               |
| `ArrowCloseRight`              |     ✓     |   ✓    |        |          |               |
| `ArrowCloseUp`                 |     ✓     |   ✓    |        |          |               |
| `ArrowDown`                    |     ✓     |   ✓    |        |          |               |
| `ArrowDownCircle`              |     ✓     |   ✓    |        |          |               |
| `ArrowDownSquare`              |     ✓     |   ✓    |        |          |               |
| `ArrowLeft`                    |     ✓     |   ✓    |        |          |               |
| `ArrowLeftCircle`              |     ✓     |   ✓    |        |          |               |
| `ArrowLeftSquare`              |     ✓     |   ✓    |        |          |               |
| `ArrowOpenDown`                |     ✓     |   ✓    |        |          |               |
| `ArrowOpenLeft`                |     ✓     |   ✓    |        |          |               |
| `ArrowOpenRight`               |     ✓     |   ✓    |        |          |               |
| `ArrowOpenUp`                  |     ✓     |   ✓    |        |          |               |
| `ArrowRight`                   |     ✓     |   ✓    |        |          |               |
| `ArrowRightCircle`             |     ✓     |   ✓    |        |          |               |
| `ArrowRightSquare`             |     ✓     |   ✓    |        |          |               |
| `ArrowsDiagonal`               |     ✓     |   ✓    |        |          |               |
| `ArrowsDiagonalRotated`        |     ✓     |   ✓    |        |          |               |
| `ArrowsHorizontal`             |     ✓     |   ✓    |        |          |               |
| `ArrowsHorizontalAlt`          |     ✓     |   ✓    |        |          |               |
| `ArrowsLongDiagonal`           |     ✓     |   ✓    |        |          |               |
| `ArrowsLongDiagonalRotated`    |     ✓     |   ✓    |        |          |               |
| `ArrowSmallDown`               |     ✓     |   ✓    |        |          |               |
| `ArrowSmallLeft`               |     ✓     |   ✓    |        |          |               |
| `ArrowSmallRight`              |     ✓     |   ✓    |        |          |               |
| `ArrowSmallUp`                 |     ✓     |   ✓    |        |          |               |
| `ArrowsVertical`               |     ✓     |   ✓    |        |          |               |
| `ArrowsVerticalAlt`            |     ✓     |   ✓    |        |          |               |
| `ArrowUp`                      |     ✓     |   ✓    |        |          |               |
| `ArrowUpCircle`                |     ✓     |   ✓    |        |          |               |
| `ArrowUpSquare`                |     ✓     |   ✓    |        |          |               |
| `Article` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Asterisk` *                   |     ✓     |   ✓    |        |          |               |
| `At`                           |     ✓     |   ✓    |        |          |               |
| `Atom` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `Attachment` *                 |     ✓     |   ✓    |        |          |               |
| `AudioLines` *                 |     ✓     |   ✓    |        |          |               |
| `Auth0` *                      |     ✓     |   ✓    |        |          |               |
| `AutoFix` *                    |     ✓     |   ✓    |   ✓    |          |               |
| `AutoMode` *                   |     ✓     |   ✓    |   ✓    |          |               |
| `Award` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `Aws` *                        |     ✓     |   ✓    |        |          |               |
| `BackupRestore`                |     ✓     |   ✓    |        |          |               |
| `BadgeAccount` *               |     ✓     |   ✓    |        |    ✓     |               |
| `BadgeAccountHorizontal` *     |     ✓     |   ✓    |        |    ✓     |               |
| `Bank` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `BankCircle` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Barcode` *                    |     ✓     |   ✓    |        |          |               |
| `BarcodeScan` *                |     ✓     |   ✓    |        |          |               |
| `Battery` *                    |     ✓     |   ✓    |        |          |               |
| `BatteryCharging` *            |     ✓     |   ✓    |        |          |               |
| `BatteryExclamationPoint` *    |     ✓     |   ✓    |        |          |               |
| `BatteryFull` *                |     ✓     |   ✓    |        |          |               |
| `BatteryLow` *                 |     ✓     |   ✓    |        |          |               |
| `BatteryMedium` *              |     ✓     |   ✓    |        |          |               |
| `Beer`                         |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `BeerAlt`                      |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `Behance` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Bell`                         |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `BellAlert`                    |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `BellOff` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `BellPlus` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `BellRemove` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `BellRing` *                   |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `BitCoin` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Blender` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Bluesky`                      |     ✓     |   ✓    |        |    ✓     |               |
| `Bluetooth` *                  |     ✓     |   ✓    |        |          |               |
| `BluetoothConnected` *         |     ✓     |   ✓    |        |          |               |
| `BluetoothOff` *               |     ✓     |   ✓    |        |          |               |
| `BluetoothSearching` *         |     ✓     |   ✓    |        |          |               |
| `Bold` *                       |     ✓     |   ✓    |        |          |               |
| `Booklet` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Bookmark` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Bookmark2` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `Bookmark3` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `BookMarked` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Brain` *                      |     ✓     |   ✓    |        |          |               |
| `BrainCircuit` *               |     ✓     |   ✓    |        |          |               |
| `Brake`                        |     ✓     |   ✓    |        |    ✓     |               |
| `BrakeAbs`                     |     ✓     |   ✓    |        |    ✓     |               |
| `BrakeAlert`                   |     ✓     |   ✓    |        |    ✓     |               |
| `BrakeHold`                    |     ✓     |   ✓    |        |    ✓     |               |
| `BrakeParking`                 |     ✓     |   ✓    |        |    ✓     |               |
| `Briefcase`                    |     ✓     |   ✓    |        |    ✓     |               |
| `BriefcaseCancel`              |     ✓     |   ✓    |        |    ✓     |               |
| `BriefcaseCheck`               |     ✓     |   ✓    |        |    ✓     |               |
| `BriefcaseMinus`               |     ✓     |   ✓    |        |    ✓     |               |
| `BriefcasePlus`                |     ✓     |   ✓    |        |    ✓     |               |
| `BriefcaseRemove`              |     ✓     |   ✓    |        |    ✓     |               |
| `Btc` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `Bug` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `BuyMeACoffee`                 |     ✓     |   ✓    |        |    ✓     |               |
| `Cake`                         |     ✓     |   ✓    |        |    ✓     |               |
| `Calendar`                     |     ✓     |   ✓    |        |          |               |
| `Camera` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Cancel`                       |     ✓     |   ✓    |        |          |               |
| `CardAccountDetails` *         |     ✓     |   ✓    |        |    ✓     |               |
| `CarLight`                     |     ✓     |   ✓    |        |    ✓     |               |
| `CarLightAlert`                |     ✓     |   ✓    |        |    ✓     |               |
| `CarLightAlertOff`             |     ✓     |   ✓    |        |    ✓     |               |
| `CarLightDimmed`               |     ✓     |   ✓    |        |    ✓     |               |
| `CarLightDimmedOff`            |     ✓     |   ✓    |        |    ✓     |               |
| `CarLightOff`                  |     ✓     |   ✓    |        |    ✓     |               |
| `Cart` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `CartVariant` *                |     ✓     |   ✓    |        |          |               |
| `CaseLower` *                  |     ✓     |   ✓    |        |          |               |
| `CaseSensitive` *              |     ✓     |   ✓    |        |          |               |
| `CaseUpper` *                  |     ✓     |   ✓    |        |          |               |
| `Cash` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `Cctv` *                       |     ✓     |   ✓    |        |          |               |
| `CctvOff` *                    |     ✓     |   ✓    |        |          |               |
| `Cellphone`                    |     ✓     |   ✓    |        |          |               |
| `CellphoneAndroid` *           |     ✓     |   ✓    |        |          |               |
| `CellphoneArrowDown`           |     ✓     |   ✓    |        |          |               |
| `CellphoneArrowUp`             |     ✓     |   ✓    |        |          |               |
| `CellphoneCheck` *             |     ✓     |   ✓    |        |          |               |
| `CellphoneKey` *               |     ✓     |   ✓    |        |          |               |
| `CellphoneOff`                 |     ✓     |   ✓    |        |          |               |
| `CellphoneScreenshot`          |     ✓     |   ✓    |        |          |               |
| `Certificate` *                |     ✓     |   ✓    |        |    ✓     |               |
| `Certificate2` *               |     ✓     |   ✓    |        |    ✓     |               |
| `ChartArea` *                  |     ✓     |   ✓    |        |          |               |
| `ChartBar` *                   |     ✓     |   ✓    |        |          |               |
| `ChartCandlestick` *           |     ✓     |   ✓    |        |          |               |
| `ChartColumn` *                |     ✓     |   ✓    |        |          |               |
| `ChartLine` *                  |     ✓     |   ✓    |        |          |               |
| `ChartNetwork` *               |     ✓     |   ✓    |        |          |               |
| `ChartPie` *                   |     ✓     |   ✓    |        |          |               |
| `Chat`                         |     ✓     |   ✓    |        |    ✓     |               |
| `ChatAlert`                    |     ✓     |   ✓    |        |    ✓     |               |
| `ChatAlertOff`                 |     ✓     |   ✓    |        |    ✓     |               |
| `ChatBubble`                   |     ✓     |   ✓    |        |    ✓     |               |
| `ChatBubbleOff`                |     ✓     |   ✓    |        |    ✓     |               |
| `ChatOff`                      |     ✓     |   ✓    |        |    ✓     |               |
| `ChatRound`                    |     ✓     |   ✓    |        |    ✓     |               |
| `ChatRoundAlert`               |     ✓     |   ✓    |        |    ✓     |               |
| `ChatRoundAlertOff`            |     ✓     |   ✓    |        |    ✓     |               |
| `ChatRoundDots`                |     ✓     |   ✓    |        |    ✓     |               |
| `ChatRoundDotsOff`             |     ✓     |   ✓    |        |    ✓     |               |
| `ChatRoundOff`                 |     ✓     |   ✓    |        |    ✓     |               |
| `CheckAll`                     |     ✓     |   ✓    |        |          |               |
| `CheckboxMultipleBlank` *      |     ✓     |   ✓    |        |    ✓     |               |
| `CheckList3`                   |     ✓     |   ✓    |        |    ✓     |               |
| `ChevronDoubleDown`            |     ✓     |   ✓    |        |          |               |
| `ChevronDoubleLeft`            |     ✓     |   ✓    |        |          |               |
| `ChevronDoubleRight`           |     ✓     |   ✓    |        |          |               |
| `ChevronDoubleUp`              |     ✓     |   ✓    |        |          |               |
| `ChevronDown`                  |     ✓     |   ✓    |        |          |               |
| `ChevronDownCircle`            |     ✓     |   ✓    |        |          |               |
| `ChevronDownSquare`            |     ✓     |   ✓    |        |          |               |
| `ChevronLeft`                  |     ✓     |   ✓    |        |          |               |
| `ChevronLeftCircle`            |     ✓     |   ✓    |        |          |               |
| `ChevronLeftSquare`            |     ✓     |   ✓    |        |          |               |
| `ChevronRight`                 |     ✓     |   ✓    |        |          |               |
| `ChevronRightCircle`           |     ✓     |   ✓    |        |          |               |
| `ChevronRightSquare`           |     ✓     |   ✓    |        |          |               |
| `ChevronSmallDoubleDown`       |     ✓     |   ✓    |        |          |               |
| `ChevronSmallDoubleLeft`       |     ✓     |   ✓    |        |          |               |
| `ChevronSmallDoubleRight`      |     ✓     |   ✓    |        |          |               |
| `ChevronSmallDoubleUp`         |     ✓     |   ✓    |        |          |               |
| `ChevronSmallDown`             |     ✓     |   ✓    |        |          |               |
| `ChevronSmallLeft`             |     ✓     |   ✓    |        |          |               |
| `ChevronSmallRight`            |     ✓     |   ✓    |        |          |               |
| `ChevronSmallTripleDown`       |     ✓     |   ✓    |        |          |               |
| `ChevronSmallTripleLeft`       |     ✓     |   ✓    |        |          |               |
| `ChevronSmallTripleRight`      |     ✓     |   ✓    |        |          |               |
| `ChevronSmallTripleUp`         |     ✓     |   ✓    |        |          |               |
| `ChevronSmallUp`               |     ✓     |   ✓    |        |          |               |
| `ChevronTripleDown`            |     ✓     |   ✓    |        |          |               |
| `ChevronTripleLeft`            |     ✓     |   ✓    |        |          |               |
| `ChevronTripleRight`           |     ✓     |   ✓    |        |          |               |
| `ChevronTripleUp`              |     ✓     |   ✓    |        |          |               |
| `ChevronUp`                    |     ✓     |   ✓    |        |          |               |
| `ChevronUpCircle`              |     ✓     |   ✓    |        |          |               |
| `ChevronUpSquare`              |     ✓     |   ✓    |        |          |               |
| `Circle`                       |     ✓     |   ✓    |        |    ✓     |               |
| `Clapperboard` *               |     ✓     |   ✓    |        |          |               |
| `Claude` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Clipboard` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `ClipboardArrow`               |     ✓     |   ✓    |        |          |               |
| `ClipboardCheck`               |     ✓     |   ✓    |        |          |               |
| `ClipboardList`                |     ✓     |   ✓    |        |          |               |
| `ClipboardMinus`               |     ✓     |   ✓    |        |          |               |
| `ClipboardPlus`                |     ✓     |   ✓    |        |          |               |
| `ClipboardRemove`              |     ✓     |   ✓    |        |          |               |
| `ClipboardText` *              |     ✓     |   ✓    |        |    ✓     |               |
| `Clock` *                      |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `Close`                        |     ✓     |   ✓    |        |          |               |
| `CloseCircle`                  |     ✓     |   ✓    |        |    ✓     |               |
| `ClosedCaption` *              |     ✓     |   ✓    |        |          |               |
| `CloseSmall`                   |     ✓     |   ✓    |        |          |               |
| `CloseSquare`                  |     ✓     |   ✓    |        |    ✓     |               |
| `Cloud`                        |     ✓     |   ✓    |        |    ✓     |               |
| `CloudAlt`                     |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CloudAltBraces`               |     ✓     |   ✓    |   ✓    |          |               |
| `CloudAltDownload`             |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CloudAltOff`                  |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CloudAltPrint`                |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CloudAltTags`                 |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CloudAltUpload`               |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CloudDown`                    |     ✓     |   ✓    |        |          |               |
| `Cloudflare` *                 |     ✓     |   ✓    |        |          |               |
| `CloudOff`                     |     ✓     |   ✓    |        |    ✓     |               |
| `CloudUp`                      |     ✓     |   ✓    |        |          |               |
| `Codepen` *                    |     ✓     |   ✓    |        |          |               |
| `Codesandbox` *                |     ✓     |   ✓    |        |          |               |
| `Coffee`                       |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CoffeeArrow`                  |     ✓     |   ✓    |        |    ✓     |               |
| `CoffeeHalfEmpty`              |           |        |        |          |       ✓       |
| `Cog`                          |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CogOff`                       |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `Coin` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `Command` *                    |     ✓     |   ✓    |        |          |               |
| `Compass`                      |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `CompassOff`                   |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `Component` *                  |     ✓     |   ✓    |        |          |               |
| `Computer`                     |     ✓     |   ✓    |        |    ✓     |               |
| `ComputerOff`                  |     ✓     |   ✓    |        |    ✓     |               |
| `Confirm`                      |     ✓     |   ✓    |        |          |               |
| `ConfirmCircle`                |     ✓     |   ✓    |        |    ✓     |               |
| `ConfirmSquare`                |     ✓     |   ✓    |        |    ✓     |               |
| `Console` *                    |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `ConsoleLine` *                |     ✓     |   ✓    |   ✓    |          |               |
| `Construction`                 |     ✓     |   ✓    |        |          |               |
| `ConstructionAlt` *            |     ✓     |   ✓    |        |          |               |
| `ContactsBook` *               |     ✓     |   ✓    |        |    ✓     |               |
| `ContactsBook2` *              |     ✓     |   ✓    |        |    ✓     |               |
| `ContactsBook3` *              |     ✓     |   ✓    |        |    ✓     |               |
| `Contrast` *                   |     ✓     |   ✓    |        |          |               |
| `Cookie`                       |     ✓     |   ✓    |        |    ✓     |               |
| `CookieCheck`                  |     ✓     |   ✓    |        |    ✓     |               |
| `CookieMinus`                  |     ✓     |   ✓    |        |    ✓     |               |
| `CookieOff`                    |     ✓     |   ✓    |        |    ✓     |               |
| `CookiePlus`                   |     ✓     |   ✓    |        |    ✓     |               |
| `CookieRemove`                 |     ✓     |   ✓    |        |    ✓     |               |
| `CookieSettings`               |     ✓     |   ✓    |        |    ✓     |               |
| `Copilot` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `CreditCard` *                 |     ✓     |   ✓    |        |          |               |
| `CreditCardCheck` *            |     ✓     |   ✓    |        |          |               |
| `CreditCardMinus` *            |     ✓     |   ✓    |        |          |               |
| `CreditCardPlus` *             |     ✓     |   ✓    |        |          |               |
| `CreditCardReader` *           |     ✓     |   ✓    |        |          |               |
| `CreditCardX` *                |     ✓     |   ✓    |        |          |               |
| `Currency` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `CursorAi` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `CustomerService` *            |     ✓     |   ✓    |        |    ✓     |               |
| `CustomerService2` *           |     ✓     |   ✓    |        |    ✓     |               |
| `Database` *                   |     ✓     |   ✓    |        |          |               |
| `Databricks` *                 |     ✓     |   ✓    |        |          |               |
| `Deepseek` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Dice5` *                      |     ✓     |   ✓    |        |          |               |
| `Dices` *                      |     ✓     |   ✓    |        |          |               |
| `Diff` *                       |     ✓     |   ✓    |        |          |               |
| `Discord`                      |     ✓     |   ✓    |        |          |               |
| `DiscordAlt` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Dns` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `Docker` *                     |     ✓     |   ✓    |        |          |               |
| `Document`                     |     ✓     |   ✓    |        |          |               |
| `DocumentAdd`                  |     ✓     |   ✓    |        |          |               |
| `DocumentCode`                 |     ✓     |   ✓    |        |          |               |
| `DocumentDelete`               |     ✓     |   ✓    |        |          |               |
| `DocumentList`                 |     ✓     |   ✓    |        |          |               |
| `DocumentRemove`               |     ✓     |   ✓    |        |          |               |
| `DocumentReport`               |     ✓     |   ✓    |        |          |               |
| `Dot` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `DotsHorizontal` *             |     ✓     |   ✓    |        |          |               |
| `DotsVertical` *               |     ✓     |   ✓    |        |          |               |
| `DoubleArrowHorizontal`        |     ✓     |   ✓    |        |          |               |
| `DoubleArrowVertical`          |     ✓     |   ✓    |        |          |               |
| `Download`                     |     ✓     |   ✓    |   ✓    |          |               |
| `Downloading`                  |     ✓     |   ✓    |   ✓    |          |               |
| `DownloadOff`                  |     ✓     |   ✓    |   ✓    |          |               |
| `DownloadOffOutline`           |     ✓     |   ✓    |   ✓    |          |               |
| `DownloadOutline`              |     ✓     |   ✓    |   ✓    |          |               |
| `DragHorizontal` *             |     ✓     |   ✓    |        |          |               |
| `DragVertical` *               |     ✓     |   ✓    |        |          |               |
| `Dribbble` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Edit`                         |     ✓     |   ✓    |        |    ✓     |               |
| `EditFull`                     |           |        |        |    ✓     |               |
| `Eject` *                      |     ✓     |   ✓    |        |          |               |
| `Elastic` *                    |     ✓     |   ✓    |        |          |               |
| `Email` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `EmailAdd` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `EmailAi` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `EmailAlert`                   |     ✓     |   ✓    |        |    ✓     |               |
| `EmailAlt`                     |           |        |        |    ✓     |               |
| `EmailArrowDown`               |     ✓     |   ✓    |        |    ✓     |               |
| `EmailArrowLeft`               |     ✓     |   ✓    |        |    ✓     |               |
| `EmailArrowRight`              |     ✓     |   ✓    |        |    ✓     |               |
| `EmailArrowUp`                 |     ✓     |   ✓    |        |    ✓     |               |
| `EmailCheck` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `EmailClose` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `EmailDownload` *              |     ✓     |   ✓    |        |    ✓     |               |
| `EmailForbid` *                |     ✓     |   ✓    |        |    ✓     |               |
| `EmailLock` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `EmailMinus`                   |     ✓     |   ✓    |        |    ✓     |               |
| `EmailMultiple`                |     ✓     |   ✓    |        |    ✓     |               |
| `EmailOpen` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `EmailOpened`                  |     ✓     |   ✓    |        |    ✓     |               |
| `EmailOpenedAlt`               |           |        |        |    ✓     |               |
| `EmailOpenedMultiple`          |     ✓     |   ✓    |        |    ✓     |               |
| `EmailPlus`                    |     ✓     |   ✓    |        |    ✓     |               |
| `EmailRemove`                  |     ✓     |   ✓    |        |    ✓     |               |
| `EmailSend` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `EmailSettings` *              |     ✓     |   ✓    |        |    ✓     |               |
| `EmailStar` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `EmailUnread` *                |     ✓     |   ✓    |        |    ✓     |               |
| `EmojiAngry`                   |     ✓     |   ✓    |        |    ✓     |               |
| `EmojiCry`                     |     ✓     |   ✓    |        |    ✓     |               |
| `EmojiFrown`                   |     ✓     |   ✓    |        |    ✓     |               |
| `EmojiFrownOpen`               |     ✓     |   ✓    |        |    ✓     |               |
| `EmojiGrin`                    |     ✓     |   ✓    |        |    ✓     |               |
| `EmojiNeutral`                 |     ✓     |   ✓    |        |    ✓     |               |
| `EmojiSmile`                   |     ✓     |   ✓    |        |    ✓     |               |
| `EmojiSmileWink`               |     ✓     |   ✓    |        |    ✓     |               |
| `Engine`                       |     ✓     |   ✓    |        |    ✓     |               |
| `EngineOff`                    |     ✓     |   ✓    |        |    ✓     |               |
| `Eth` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `Exchange` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Exchange2` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `ExchangeBox` *                |     ✓     |   ✓    |        |    ✓     |               |
| `ExchangeCny` *                |     ✓     |   ✓    |        |    ✓     |               |
| `ExchangeDollar` *             |     ✓     |   ✓    |        |    ✓     |               |
| `ExchangeFunds` *              |     ✓     |   ✓    |        |    ✓     |               |
| `ExternalLink`                 |     ✓     |   ✓    |        |          |               |
| `ExternalLinkRounded`          |     ✓     |   ✓    |        |          |               |
| `Facebook` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `FacebookBox` *                |     ✓     |   ✓    |        |    ✓     |               |
| `Figma` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `File`                         |     ✓     |   ✓    |        |    ✓     |               |
| `FileCancel`                   |     ✓     |   ✓    |        |    ✓     |               |
| `FileDocument`                 |     ✓     |   ✓    |        |    ✓     |               |
| `FileDocumentCancel`           |     ✓     |   ✓    |        |    ✓     |               |
| `FileDocumentMinus`            |     ✓     |   ✓    |        |    ✓     |               |
| `FileDocumentOff`              |     ✓     |   ✓    |        |    ✓     |               |
| `FileDocumentPlus`             |     ✓     |   ✓    |        |    ✓     |               |
| `FileDocumentRemove`           |     ✓     |   ✓    |        |    ✓     |               |
| `FileDownload`                 |     ✓     |   ✓    |        |    ✓     |               |
| `FileExport`                   |     ✓     |   ✓    |        |    ✓     |               |
| `FileImport`                   |     ✓     |   ✓    |        |    ✓     |               |
| `FileMinus`                    |     ✓     |   ✓    |        |    ✓     |               |
| `FileOff`                      |     ✓     |   ✓    |        |    ✓     |               |
| `FilePlus`                     |     ✓     |   ✓    |        |    ✓     |               |
| `FileRemove`                   |     ✓     |   ✓    |        |    ✓     |               |
| `FileSearch`                   |     ✓     |   ✓    |        |    ✓     |               |
| `FileUpload`                   |     ✓     |   ✓    |        |    ✓     |               |
| `FileZip` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Film` *                       |     ✓     |   ✓    |        |          |               |
| `Filter`                       |     ✓     |   ✓    |        |    ✓     |               |
| `FilterAlt`                    |     ✓     |   ✓    |        |          |               |
| `FilterAltOff`                 |     ✓     |   ✓    |        |          |               |
| `FilterConfirm`                |     ✓     |   ✓    |        |    ✓     |               |
| `FilterMinus`                  |     ✓     |   ✓    |        |    ✓     |               |
| `FilterOff`                    |     ✓     |   ✓    |        |    ✓     |               |
| `FilterPlus`                   |     ✓     |   ✓    |        |    ✓     |               |
| `FilterRemove`                 |     ✓     |   ✓    |        |    ✓     |               |
| `FilterVariant` *              |     ✓     |   ✓    |        |          |               |
| `Fingerprint` *                |     ✓     |   ✓    |        |          |               |
| `FingerprintPattern` *         |     ✓     |   ✓    |        |          |               |
| `Flag` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `FlipHorizontal` *             |     ✓     |   ✓    |        |          |               |
| `FlipToBack` *                 |     ✓     |   ✓    |        |          |               |
| `FlipToFront` *                |     ✓     |   ✓    |        |          |               |
| `FlipVertical` *               |     ✓     |   ✓    |        |          |               |
| `Folder`                       |     ✓     |   ✓    |        |    ✓     |               |
| `FolderArrowDown`              |     ✓     |   ✓    |        |    ✓     |               |
| `FolderArrowLeft`              |     ✓     |   ✓    |        |    ✓     |               |
| `FolderArrowRight`             |     ✓     |   ✓    |        |    ✓     |               |
| `FolderArrowUp`                |     ✓     |   ✓    |        |    ✓     |               |
| `FolderCancel`                 |     ✓     |   ✓    |        |    ✓     |               |
| `FolderCheck`                  |     ✓     |   ✓    |        |    ✓     |               |
| `FolderMinus`                  |     ✓     |   ✓    |        |    ✓     |               |
| `FolderMultiple`               |     ✓     |   ✓    |        |    ✓     |               |
| `FolderMusic`                  |     ✓     |   ✓    |        |    ✓     |               |
| `FolderNetwork`                |     ✓     |   ✓    |        |    ✓     |               |
| `FolderOff`                    |     ✓     |   ✓    |        |    ✓     |               |
| `FolderOpen` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `FolderPlus`                   |     ✓     |   ✓    |        |    ✓     |               |
| `FolderRemove`                 |     ✓     |   ✓    |        |    ✓     |               |
| `FolderSettings`               |     ✓     |   ✓    |        |    ✓     |               |
| `FolderZip`                    |     ✓     |   ✓    |        |    ✓     |               |
| `FolderZipAlt` *               |     ✓     |   ✓    |        |    ✓     |               |
| `FontMono` *                   |     ✓     |   ✓    |        |          |               |
| `FontSansSerif` *              |     ✓     |   ✓    |        |          |               |
| `FontSerif` *                  |     ✓     |   ✓    |        |          |               |
| `ForkLeft`                     |     ✓     |   ✓    |        |          |               |
| `ForkRight`                    |     ✓     |   ✓    |        |          |               |
| `Form` *                       |     ✓     |   ✓    |        |          |               |
| `FormatQuoteClose` *           |     ✓     |   ✓    |        |    ✓     |               |
| `FormatQuoteOpen` *            |     ✓     |   ✓    |        |    ✓     |               |
| `Fullscreen` *                 |     ✓     |   ✓    |        |          |               |
| `Funds` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `Gallery` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Gauge`                        |     ✓     |   ✓    |   ✓    |          |               |
| `GaugeEmpty`                   |     ✓     |   ✓    |        |          |               |
| `GaugeFull`                    |     ✓     |   ✓    |        |          |               |
| `GaugeLow`                     |     ✓     |   ✓    |        |          |               |
| `Gemini` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Ghost` *                      |     ✓     |   ✓    |        |          |               |
| `Gift` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `Github` *                     |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `GithubAlt` *                  |     ✓     |   ✓    |        |          |               |
| `GithubBox` *                  |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `GolfBall` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `GooglePlay` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Government` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Gps` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `GraduationCap` *              |     ✓     |   ✓    |        |    ✓     |               |
| `Graphql` *                    |     ✓     |   ✓    |        |          |               |
| `Grid3`                        |     ✓     |   ✓    |        |    ✓     |               |
| `GrokAi` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `HandClap` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `HardDrive` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `Hash`                         |     ✓     |   ✓    |        |          |               |
| `HashSmall`                    |     ✓     |   ✓    |        |          |               |
| `HazardLights`                 |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `HazardLightsOff`              |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `Hd` *                         |     ✓     |   ✓    |        |          |               |
| `Heading` *                    |     ✓     |   ✓    |        |          |               |
| `Heading1` *                   |     ✓     |   ✓    |        |          |               |
| `Heading2` *                   |     ✓     |   ✓    |        |          |               |
| `Heading3` *                   |     ✓     |   ✓    |        |          |               |
| `Heading4` *                   |     ✓     |   ✓    |        |          |               |
| `Heading5` *                   |     ✓     |   ✓    |        |          |               |
| `Heading6` *                   |     ✓     |   ✓    |        |          |               |
| `Heart`                        |     ✓     |   ✓    |        |    ✓     |               |
| `HeartFilledHalf`              |     ✓     |   ✓    |        |          |               |
| `HeartHalf`                    |     ✓     |   ✓    |        |    ✓     |               |
| `Home`                         |     ✓     |   ✓    |        |          |               |
| `HomeMd`                       |     ✓     |   ✓    |        |          |               |
| `HomeSimple` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Iconify1`                     |     ✓     |   ✓    |        |          |               |
| `Iconify2`                     |     ✓     |   ✓    |        |          |               |
| `Iconify2Static`               |     ✓     |   ✓    |        |          |               |
| `Image`                        |     ✓     |   ✓    |        |    ✓     |               |
| `Inbox2` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `IndentDecrease` *             |     ✓     |   ✓    |        |          |               |
| `IndentIncrease` *             |     ✓     |   ✓    |        |          |               |
| `InformationSlabCircle` *      |     ✓     |   ✓    |        |    ✓     |               |
| `Instagram`                    |     ✓     |   ✓    |        |          |               |
| `Install` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Italic` *                     |     ✓     |   ✓    |        |          |               |
| `Key` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `KeyRound` *                   |     ✓     |   ✓    |        |          |               |
| `KeySquare` *                  |     ✓     |   ✓    |        |          |               |
| `KeyVariant` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Kubernetes` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `LanguageC` *                  |     ✓     |   ✓    |        |          |               |
| `LanguageCpp` *                |     ✓     |   ✓    |        |          |               |
| `LanguageCsharp` *             |     ✓     |   ✓    |        |          |               |
| `LanguageGo` *                 |     ✓     |   ✓    |        |          |               |
| `LanguageHtml5` *              |     ✓     |   ✓    |        |    ✓     |               |
| `LanguageJava` *               |     ✓     |   ✓    |        |          |               |
| `LanguageJavascript` *         |     ✓     |   ✓    |        |    ✓     |               |
| `LanguageJsx` *                |     ✓     |   ✓    |        |    ✓     |               |
| `LanguageMarkdown` *           |     ✓     |   ✓    |        |    ✓     |               |
| `LanguagePhp` *                |     ✓     |   ✓    |        |    ✓     |               |
| `LanguagePython` *             |     ✓     |   ✓    |        |    ✓     |               |
| `LanguageRust` *               |     ✓     |   ✓    |        |          |               |
| `Languages` *                  |     ✓     |   ✓    |        |          |               |
| `LanguageTypescript` *         |     ✓     |   ✓    |        |    ✓     |               |
| `Laptop`                       |     ✓     |   ✓    |        |    ✓     |               |
| `LaptopOff`                    |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutBottom2` *              |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutBottombar` *            |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutBottombarCollapse` *    |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutBottombarExpand` *      |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutLeft2` *                |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutNavbar` *               |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutNavbarCollapse` *       |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutNavbarExpand` *         |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutRight2` *               |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutSidebar` *              |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutSidebarLeftCollapse` *  |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutSidebarLeftExpand` *    |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutSidebarRight` *         |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutSidebarRightCollapse` * |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutSidebarRightExpand` *   |     ✓     |   ✓    |        |    ✓     |               |
| `LayoutTop2` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `LetterSpacing` *              |     ✓     |   ✓    |        |          |               |
| `Library` *                    |     ✓     |   ✓    |        |          |               |
| `License` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Lightbulb`                    |     ✓     |   ✓    |        |    ✓     |               |
| `LightbulbOff`                 |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `LightDark`                    |     ✓     |   ✓    |   ✓    |          |               |
| `Lightning` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `LineHeight` *                 |     ✓     |   ✓    |        |          |               |
| `Link`                         |     ✓     |   ✓    |        |          |               |
| `Linkedin` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `List`                         |     ✓     |   ✓    |        |          |               |
| `List3`                        |     ✓     |   ✓    |        |    ✓     |               |
| `ListBox` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `ListIndented`                 |     ✓     |   ✓    |        |          |               |
| `ListIndentedReversed`         |     ✓     |   ✓    |        |          |               |
| `Loading`                      |           |        |   ✓    |          |               |
| `LoadingAlt`                   |           |        |   ✓    |          |               |
| `Lock` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `LockOpen` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Login`                        |     ✓     |   ✓    |        |          |               |
| `LogIn2`                       |     ✓     |   ✓    |        |          |               |
| `Logout`                       |     ✓     |   ✓    |        |          |               |
| `LogOut2`                      |     ✓     |   ✓    |        |          |               |
| `Magnify` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Mailbox` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `MapMarker`                    |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MapMarkerAlt`                 |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MapMarkerAltOff`              |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MapMarkerMinus`               |     ✓     |   ✓    |        |    ✓     |               |
| `MapMarkerMultiple`            |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MapMarkerMultipleAlt`         |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MapMarkerMultipleAltOff`      |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MapMarkerMultipleOff`         |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MapMarkerOff`                 |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MapMarkerPlus`                |     ✓     |   ✓    |        |    ✓     |               |
| `MapMarkerRadius`              |     ✓     |   ✓    |        |    ✓     |               |
| `MapMarkerRemove`              |     ✓     |   ✓    |        |    ✓     |               |
| `MapTrifold` *                 |     ✓     |   ✓    |        |          |               |
| `Marker`                       |     ✓     |   ✓    |        |    ✓     |               |
| `Mastodon`                     |     ✓     |   ✓    |        |    ✓     |               |
| `Matrix` *                     |     ✓     |   ✓    |        |          |               |
| `MedicalServices`              |     ✓     |   ✓    |        |    ✓     |               |
| `Medium` *                     |     ✓     |   ✓    |        |          |               |
| `MediumAlt` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `Menu`                         |     ✓     |   ✓    |        |          |               |
| `MenuFoldLeft`                 |     ✓     |   ✓    |        |          |               |
| `MenuFoldRight`                |     ✓     |   ✓    |        |          |               |
| `MenuUnfoldLeft`               |     ✓     |   ✓    |        |          |               |
| `MenuUnfoldRight`              |     ✓     |   ✓    |        |          |               |
| `Meta` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `Microfrontends` *             |     ✓     |   ✓    |        |          |               |
| `Microphone` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `MicrophoneOff` *              |     ✓     |   ✓    |        |    ✓     |               |
| `MindMap` *                    |     ✓     |   ✓    |        |          |               |
| `Minus`                        |     ✓     |   ✓    |        |          |               |
| `MinusCircle`                  |     ✓     |   ✓    |        |    ✓     |               |
| `MinusSquare`                  |     ✓     |   ✓    |        |    ✓     |               |
| `Monitor`                      |     ✓     |   ✓    |        |    ✓     |               |
| `MonitorArrowDown`             |     ✓     |   ✓    |        |    ✓     |               |
| `MonitorArrowUp`               |     ✓     |   ✓    |        |    ✓     |               |
| `MonitorMutlple`               |     ✓     |   ✓    |        |    ✓     |               |
| `MonitorOff`                   |     ✓     |   ✓    |        |    ✓     |               |
| `MonitorScreenshot`            |     ✓     |   ✓    |        |    ✓     |               |
| `MonitorSmall`                 |     ✓     |   ✓    |        |    ✓     |               |
| `MonitorSmallOff`              |     ✓     |   ✓    |        |    ✓     |               |
| `Moon`                         |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MoonAlt`                      |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MoonAltOff`                   |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MoonOff`                      |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MoonRising`                   |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MoonRisingAlt`                |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `MoonSimple`                   |     ✓     |   ✓    |        |    ✓     |               |
| `MoonSimpleOff`                |     ✓     |   ✓    |        |    ✓     |               |
| `Mushroom`                     |     ✓     |   ✓    |        |    ✓     |               |
| `MushroomOff`                  |     ✓     |   ✓    |        |    ✓     |               |
| `MyLocation`                   |     ✓     |   ✓    |   ✓    |          |               |
| `MyLocationOff`                |     ✓     |   ✓    |   ✓    |          |               |
| `NavigationLeftDown`           |     ✓     |   ✓    |        |          |               |
| `NavigationLeftUp`             |     ✓     |   ✓    |        |          |               |
| `NavigationRightDown`          |     ✓     |   ✓    |        |          |               |
| `NavigationRightUp`            |     ✓     |   ✓    |        |          |               |
| `Network` *                    |     ✓     |   ✓    |        |          |               |
| `Newspaper` *                  |     ✓     |   ✓    |        |          |               |
| `NewspaperVariant` *           |     ✓     |   ✓    |        |    ✓     |               |
| `Nextjs` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Nix` *                        |     ✓     |   ✓    |        |          |               |
| `Notebook` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Notion` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Npmjs` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `Oauth` *                      |     ✓     |   ✓    |        |          |               |
| `Openai` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `OpenSourceInitiative` *       |     ✓     |   ✓    |        |    ✓     |               |
| `OrganizationChart` *          |     ✓     |   ✓    |        |          |               |
| `Outbox` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Paintbrush` *                 |     ✓     |   ✓    |        |          |               |
| `PaintbrushVertical` *         |     ✓     |   ✓    |        |          |               |
| `PaintDrop`                    |     ✓     |   ✓    |        |    ✓     |               |
| `PaintDropHalf`                |           |        |        |    ✓     |               |
| `Palette` *                    |     ✓     |   ✓    |        |          |               |
| `PaletteSwatchVariant` *       |     ✓     |   ✓    |        |    ✓     |               |
| `Paperclip` *                  |     ✓     |   ✓    |        |          |               |
| `Patreon`                      |     ✓     |   ✓    |        |          |               |
| `PatreonAlt` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Pause`                        |     ✓     |   ✓    |        |          |               |
| `PauseOff`                     |     ✓     |   ✓    |        |          |               |
| `Paypal` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Peanut`                       |     ✓     |   ✓    |        |    ✓     |               |
| `PeanutOff`                    |     ✓     |   ✓    |        |    ✓     |               |
| `Peertube`                     |     ✓     |   ✓    |        |          |               |
| `PeertubeAlt`                  |     ✓     |   ✓    |        |          |               |
| `Pencil`                       |     ✓     |   ✓    |        |          |               |
| `Person`                       |     ✓     |   ✓    |        |    ✓     |               |
| `PersonAdd`                    |     ✓     |   ✓    |        |    ✓     |               |
| `PersonOff`                    |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `PersonRemove`                 |     ✓     |   ✓    |        |    ✓     |               |
| `PersonSearch`                 |     ✓     |   ✓    |        |    ✓     |               |
| `Phone`                        |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `PhoneAdd`                     |     ✓     |   ✓    |        |    ✓     |               |
| `PhoneCall`                    |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `PhoneIncoming`                |     ✓     |   ✓    |        |    ✓     |               |
| `PhoneOff`                     |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `PhoneOutgoing`                |     ✓     |   ✓    |        |    ✓     |               |
| `PhoneRemove`                  |     ✓     |   ✓    |        |    ✓     |               |
| `Pin` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `Pixelfed`                     |     ✓     |   ✓    |        |    ✓     |               |
| `Pizza`                        |     ✓     |   ✓    |        |    ✓     |               |
| `PizzaOff`                     |     ✓     |   ✓    |        |    ✓     |               |
| `Play`                         |     ✓     |   ✓    |        |    ✓     |               |
| `PlayingCards` *               |     ✓     |   ✓    |        |          |               |
| `PlayingCardsFan` *            |     ✓     |   ✓    |        |          |               |
| `PlayOff`                      |     ✓     |   ✓    |        |    ✓     |               |
| `Pleroma`                      |     ✓     |   ✓    |        |          |               |
| `Plus`                         |     ✓     |   ✓    |        |          |               |
| `PlusCircle`                   |     ✓     |   ✓    |        |    ✓     |               |
| `PlusSquare`                   |     ✓     |   ✓    |        |    ✓     |               |
| `Pnpm` *                       |     ✓     |   ✓    |        |          |               |
| `Podcast` *                    |     ✓     |   ✓    |        |          |               |
| `Power` *                      |     ✓     |   ✓    |        |          |               |
| `Powershell` *                 |     ✓     |   ✓    |        |          |               |
| `Prisma` *                     |     ✓     |   ✓    |        |          |               |
| `ProductHunt` *                |     ✓     |   ✓    |        |    ✓     |               |
| `Puzzle` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Qrcode` *                     |     ✓     |   ✓    |        |          |               |
| `Question`                     |     ✓     |   ✓    |        |          |               |
| `QuestionCircle` *             |     ✓     |   ✓    |        |    ✓     |               |
| `QuestionSquare` *             |     ✓     |   ✓    |        |    ✓     |               |
| `QwenAi` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Radar` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `Reactjs` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Reddit`                       |     ✓     |   ✓    |   ✓    |          |               |
| `Reddit2` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `RedditCircle`                 |     ✓     |   ✓    |   ✓    |          |               |
| `Regex` *                      |     ✓     |   ✓    |        |          |               |
| `Remove`                       |     ✓     |   ✓    |        |          |               |
| `Robot` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `RobotArm` *                   |     ✓     |   ✓    |        |          |               |
| `Rotate180`                    |     ✓     |   ✓    |        |          |               |
| `Rotate270`                    |     ✓     |   ✓    |        |          |               |
| `Rotate90`                     |     ✓     |   ✓    |        |          |               |
| `Round360`                     |     ✓     |   ✓    |        |          |               |
| `RoundaboutLeft`               |     ✓     |   ✓    |        |          |               |
| `RoundaboutRight`              |     ✓     |   ✓    |        |          |               |
| `RoundRampLeft`                |     ✓     |   ✓    |        |          |               |
| `RoundRampRight`               |     ✓     |   ✓    |        |          |               |
| `Rss` *                        |     ✓     |   ✓    |   ✓    |          |               |
| `RssBox` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Ruler` *                      |     ✓     |   ✓    |        |          |               |
| `RulerDimensionLine` *         |     ✓     |   ✓    |        |          |               |
| `Safe2` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `SafeSquare` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `SatelliteUplink` *            |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `SatelliteVariant` *           |     ✓     |   ✓    |        |    ✓     |               |
| `Save` *                       |     ✓     |   ✓    |        |          |               |
| `Save2` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `SaveAll` *                    |     ✓     |   ✓    |        |          |               |
| `Scales` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Scroll` *                     |     ✓     |   ✓    |        |          |               |
| `ScrollText` *                 |     ✓     |   ✓    |        |          |               |
| `Search`                       |     ✓     |   ✓    |        |    ✓     |               |
| `Security`                     |     ✓     |   ✓    |        |    ✓     |               |
| `SecurityOff`                  |     ✓     |   ✓    |        |    ✓     |               |
| `Send` *                       |     ✓     |   ✓    |        |    ✓     |               |
| `Sentry` *                     |     ✓     |   ✓    |        |          |               |
| `Server` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Share` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `ShareVariant` *               |     ✓     |   ✓    |        |    ✓     |               |
| `Shimmer` *                    |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `Shredder` *                   |     ✓     |   ✓    |        |          |               |
| `Signal` *                     |     ✓     |   ✓    |        |          |               |
| `SignalHigh` *                 |     ✓     |   ✓    |        |          |               |
| `SignalLow` *                  |     ✓     |   ✓    |        |          |               |
| `SignalMedium` *               |     ✓     |   ✓    |        |          |               |
| `SignalZero` *                 |     ✓     |   ✓    |        |          |               |
| `Sip` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `Skull` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `Slack` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `Slideshow` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `Snowflake` *                  |     ✓     |   ✓    |        |          |               |
| `SortAscending` *              |     ✓     |   ✓    |        |          |               |
| `SortDescending` *             |     ✓     |   ✓    |        |          |               |
| `Soundcloud`                   |     ✓     |   ✓    |        |          |               |
| `Sparkle` *                    |     ✓     |   ✓    |        |          |               |
| `Sparkles` *                   |     ✓     |   ✓    |        |          |               |
| `Speed`                        |     ✓     |   ✓    |   ✓    |          |               |
| `Speedometer`                  |     ✓     |   ✓    |   ✓    |          |               |
| `SpellCheck` *                 |     ✓     |   ✓    |        |          |               |
| `Spotify`                      |     ✓     |   ✓    |        |    ✓     |               |
| `Square`                       |     ✓     |   ✓    |        |    ✓     |               |
| `StackOverflow` *              |     ✓     |   ✓    |        |    ✓     |               |
| `Star`                         |     ✓     |   ✓    |        |    ✓     |               |
| `StarAlt`                      |     ✓     |   ✓    |        |    ✓     |               |
| `StarAltFilledHalf`            |     ✓     |   ✓    |        |          |               |
| `StarAltFilledRightHalf`       |     ✓     |   ✓    |        |          |               |
| `StarHalf`                     |     ✓     |   ✓    |        |    ✓     |               |
| `StarHalfAlt`                  |     ✓     |   ✓    |        |    ✓     |               |
| `StarPulsating`                |           |        |   ✓    |          |       ✓       |
| `StarRightHalf`                |     ✓     |   ✓    |        |    ✓     |               |
| `StarRightHalfAlt`             |     ✓     |   ✓    |        |    ✓     |               |
| `Steering`                     |     ✓     |   ✓    |        |          |               |
| `SteeringOff`                  |     ✓     |   ✓    |        |          |               |
| `Stethoscope` *                |     ✓     |   ✓    |        |          |               |
| `Stock` *                      |     ✓     |   ✓    |        |    ✓     |               |
| `Storefront` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `Storybook` *                  |     ✓     |   ✓    |        |          |               |
| `Strikethrough` *              |     ✓     |   ✓    |        |          |               |
| `Subscript` *                  |     ✓     |   ✓    |        |          |               |
| `Sunny`                        |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `SunnyOff`                     |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `SunnyOutline`                 |     ✓     |   ✓    |   ✓    |          |               |
| `SunRising`                    |     ✓     |   ✓    |   ✓    |    ✓     |       ✓       |
| `Superscript` *                |     ✓     |   ✓    |        |          |               |
| `Survey` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Switch`                       |     ✓     |   ✓    |        |    ✓     |               |
| `SwitchOff`                    |     ✓     |   ✓    |        |    ✓     |               |
| `Tablet`                       |     ✓     |   ✓    |        |          |               |
| `TabletArrowDown`              |     ✓     |   ✓    |        |          |               |
| `TabletArrowUp`                |     ✓     |   ✓    |        |          |               |
| `TabletOff`                    |     ✓     |   ✓    |        |          |               |
| `TabletScreenshot`             |     ✓     |   ✓    |        |          |               |
| `Taco`                         |     ✓     |   ✓    |        |          |               |
| `Tag` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `TagOff` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `TagPlus` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Tailwind` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Target` *                     |     ✓     |   ✓    |        |          |               |
| `Telegram` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Telegram2` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `TerminalBox` *                |     ✓     |   ✓    |        |    ✓     |               |
| `Terraform` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `TextBox`                      |     ✓     |   ✓    |        |          |               |
| `TextBoxMultiple`              |     ✓     |   ✓    |        |          |               |
| `Threejs` *                    |     ✓     |   ✓    |        |          |               |
| `ThumbsDown` *                 |     ✓     |   ✓    |        |    ✓     |               |
| `ThumbsUp` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Tiktok`                       |     ✓     |   ✓    |        |          |               |
| `Timeline` *                   |     ✓     |   ✓    |        |          |               |
| `Tor` *                        |     ✓     |   ✓    |        |    ✓     |               |
| `TowerControl` *               |     ✓     |   ✓    |        |          |               |
| `Trash`                        |     ✓     |   ✓    |        |          |               |
| `TrayArrowDown` *              |     ✓     |   ✓    |   ✓    |          |               |
| `TrayArrowUp` *                |     ✓     |   ✓    |   ✓    |          |               |
| `Trophy` *                     |     ✓     |   ✓    |        |          |               |
| `Tune` *                       |     ✓     |   ✓    |   ✓    |          |               |
| `TuneVertical` *               |     ✓     |   ✓    |   ✓    |          |               |
| `TurnLeft`                     |     ✓     |   ✓    |        |          |               |
| `TurnRight`                    |     ✓     |   ✓    |        |          |               |
| `TurnSharpLeft`                |     ✓     |   ✓    |        |          |               |
| `TurnSharpRight`               |     ✓     |   ✓    |        |          |               |
| `TurnSlightLeft`               |     ✓     |   ✓    |        |          |               |
| `TurnSlightRight`              |     ✓     |   ✓    |        |          |               |
| `Tv` *                         |     ✓     |   ✓    |        |          |               |
| `TvMinimal` *                  |     ✓     |   ✓    |        |          |               |
| `Twitter`                      |     ✓     |   ✓    |        |    ✓     |               |
| `TwitterX`                     |     ✓     |   ✓    |        |          |               |
| `TwitterXAlt`                  |     ✓     |   ✓    |        |          |               |
| `TwoFactorAuthentication` *    |     ✓     |   ✓    |        |          |               |
| `Underline` *                  |     ✓     |   ✓    |        |          |               |
| `Undo` *                       |     ✓     |   ✓    |        |          |               |
| `Undo2` *                      |     ✓     |   ✓    |        |          |               |
| `Uninstall` *                  |     ✓     |   ✓    |        |    ✓     |               |
| `Unsplash` *                   |     ✓     |   ✓    |        |    ✓     |               |
| `Update` *                     |     ✓     |   ✓    |   ✓    |          |               |
| `Upload`                       |     ✓     |   ✓    |   ✓    |          |               |
| `Uploading`                    |     ✓     |   ✓    |   ✓    |          |               |
| `UploadOff`                    |     ✓     |   ✓    |   ✓    |          |               |
| `UploadOffOutline`             |     ✓     |   ✓    |   ✓    |          |               |
| `UploadOutline`                |     ✓     |   ✓    |   ✓    |          |               |
| `UsbFlashDrive` *              |     ✓     |   ✓    |        |    ✓     |               |
| `UTurnLeft`                    |     ✓     |   ✓    |        |          |               |
| `UTurnRight`                   |     ✓     |   ✓    |        |          |               |
| `ValignBaseline`               |     ✓     |   ✓    |        |          |               |
| `ValignBottom`                 |     ✓     |   ✓    |        |          |               |
| `ValignMiddle`                 |     ✓     |   ✓    |        |          |               |
| `ValignTop`                    |     ✓     |   ✓    |        |          |               |
| `Vercel` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `VerifiedBadge` *              |     ✓     |   ✓    |        |    ✓     |               |
| `Video` *                      |     ✓     |   ✓    |        |          |               |
| `VideoOff` *                   |     ✓     |   ✓    |        |          |               |
| `VisualStudio` *               |     ✓     |   ✓    |        |          |               |
| `Vite` *                       |     ✓     |   ✓    |        |          |               |
| `VoiceAi` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Voicemail` *                  |     ✓     |   ✓    |        |          |               |
| `VolumeHigh`                   |     ✓     |   ✓    |        |    ✓     |               |
| `VolumeHighOff`                |     ✓     |   ✓    |        |    ✓     |               |
| `VolumeLow`                    |     ✓     |   ✓    |        |    ✓     |               |
| `VolumeLowOff`                 |     ✓     |   ✓    |        |    ✓     |               |
| `VolumeMedium`                 |     ✓     |   ✓    |        |    ✓     |               |
| `VolumeMediumOff`              |     ✓     |   ✓    |        |    ✓     |               |
| `VolumeMinus`                  |     ✓     |   ✓    |        |    ✓     |               |
| `VolumePlus`                   |     ✓     |   ✓    |        |    ✓     |               |
| `VolumeRemove`                 |     ✓     |   ✓    |        |    ✓     |               |
| `Vscode` *                     |     ✓     |   ✓    |        |          |               |
| `Wallet` *                     |     ✓     |   ✓    |        |          |               |
| `WalletCards` *                |     ✓     |   ✓    |        |          |               |
| `WalletMinimal` *              |     ✓     |   ✓    |        |          |               |
| `Wand` *                       |     ✓     |   ✓    |        |          |               |
| `WandSparkles` *               |     ✓     |   ✓    |        |          |               |
| `Watch`                        |     ✓     |   ✓    |   ✓    |          |               |
| `WatchOff`                     |     ✓     |   ✓    |   ✓    |          |               |
| `Water`                        |     ✓     |   ✓    |        |    ✓     |               |
| `WaterOff`                     |     ✓     |   ✓    |        |    ✓     |               |
| `WeatherCloudy`                |           |        |   ✓    |          |               |
| `Web` *                        |     ✓     |   ✓    |        |          |               |
| `WebBox` *                     |     ✓     |   ✓    |        |    ✓     |               |
| `Webhook` *                    |     ✓     |   ✓    |        |          |               |
| `Windows` *                    |     ✓     |   ✓    |        |    ✓     |               |
| `Wrench` *                     |     ✓     |   ✓    |        |          |               |
| `Yarn` *                       |     ✓     |   ✓    |        |          |               |
| `Ycombinator` *                |     ✓     |   ✓    |        |          |               |
| `Youtube`                      |     ✓     |   ✓    |        |    ✓     |               |

## Related

- [Themeable icon](./themeable-icon.md)
- [Vectors](./vectors.md)
- [Design system overview](../index.md)
- [Color tokens](../tokens/semantic-colors.md)
- [Size tokens](../tokens/sizes.md)

## License

The line-md icon artwork is © Vjacheslav Trushkin. It is licensed under the [MIT License](https://github.com/cyberalien/line-md/blob/main/license.txt).

The icons drawn after other sets keep their shapes: [Lucide](https://github.com/lucide-icons/lucide/blob/main/LICENSE) (ISC, © Lucide Contributors), [Tabler Icons](https://github.com/tabler/tabler-icons/blob/master/LICENSE) (MIT, © Paweł Kuna), [Solar](https://creativecommons.org/licenses/by/4.0/) (CC BY 4.0, © 480 Design; `Contrast`) and [Remix Icon](https://github.com/Remix-Design/RemixIcon/blob/master/License) (Remix Icon License v1.0, © Remix Design).
