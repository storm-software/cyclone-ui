---
title: Address Map
description: Reference for the AddressMap component, a static map centered on an address, shared by Address Input and Manual Address Input.
documentType: reference
tags: [component, form, address, map]
component:
  name: address-map
  package: "@cyclone-ui/address-map"
  stories:
    - title: Form/AddressMap
      file: components/address-map/src/AddressMap.stories.tsx
---

# Address Map

`AddressMap` shows a map of an address: raster tiles centered on its latitude and longitude, with a marker and the tile provider's attribution. Without an address it shows a map icon.

[Address Input](./address-input.md) (`AddressInput.Map`) and [Manual Address Input](./manual-address-input.md) (`ManualAddressInputMap`) both draw it. Use it directly when you already have the coordinates.

## Installation

```bash
pnpm exec cyclone-ui add address-map
pnpm install
```

- **File:** `AddressMap.tsx`. The CLI writes it to `<path>/address-map/`.
- **Also copies:** [Body Text](./body-text.md) and [Icons](../icons/index.md).
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/image`.

## Import

```tsx
import { AddressMap, isAddressOption } from "@cyclone-ui/address-map";
import type { AddressOption } from "@cyclone-ui/address-map";
```

## Usage

```tsx
<AddressMap
  address={{
    label: "200 N Spring St, Los Angeles, CA 90012, USA",
    latitude: 34.0537,
    longitude: -118.2428
  }}
/>
```

## Examples

The stories in [`AddressMap.stories.tsx`](../../../components/address-map/src/AddressMap.stories.tsx):

| Stories | What they show |
| --- | --- |
| `Base` | Los Angeles City Hall. The play test finds the `Map of …` image and the OpenStreetMap credit. |
| `Empty` | No address: the map icon, and no `img` role. |
| `ZoomedOut` | `zoom={11}`. |

## Props

It also accepts the props of the Tamagui `View`. The frame is 240 px high and clips its content.

| Prop          | Type            | Default                                         | Description                                                          |
| ------------- | --------------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| `address`     | `AddressOption` | -                                               | The address to show. Without one, the map shows a map icon.          |
| `zoom`        | `number`        | `15`                                            | The zoom level, from 0 (the world) to 19 (a building).               |
| `tileUrl`     | `string`        | `https://tile.openstreetmap.org/{z}/{x}/{y}.png` | A 256 px raster tile URL with `{z}`, `{x}`, and `{y}` placeholders. |
| `attribution` | `string`        | `© OpenStreetMap contributors` for the default tiles, otherwise empty | The credit that the tile provider requires.  |

OpenStreetMap tiles are for light use only. In production, set your own `tileUrl` and `attribution`.

The map shows static tiles. The user cannot pan or zoom it.

```ts
interface AddressOption {
  label: string; // The full address, such as "123 Main Street, LA, CA 90012"
  latitude: number;
  longitude: number;
}
```

`isAddressOption(value)` checks for a string `label` and finite `latitude` and `longitude`, such as when reading an address API's answer.

## Accessibility

With an address, the map has `role="img"` and the name `Map of <label>`. The tiles have empty `alt` text. Without an address, the map is decorative.
