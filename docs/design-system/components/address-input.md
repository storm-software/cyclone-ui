---
title: Address Input
description: Reference for the AddressInput component, a search field that suggests addresses from an API and shows a map of the chosen address.
documentType: reference
tags: [component, form, address, search, map]
---

# Address Input

`AddressInput` is a [Search Input](./search-input.md) whose suggestions come from an address search API. It can also show a map of the chosen address.

Use it when the user must enter a postal address and you have an endpoint that returns matches.

## Import

```tsx
import { AddressInput } from "@cyclone-ui/address-input";
import type { AddressOption } from "@cyclone-ui/address-input";
```

## Usage

```tsx
import { AddressInput } from "@cyclone-ui/address-input";
import { Field } from "@cyclone-ui/field";

export const AddressField = () => (
  <AddressInput
    endpoint="/api/addresses"
    onAddressChange={address => console.log(address)}>
    <AddressInput.Map />
    <Field name="address">
      <Field.Label>Address</Field.Label>
      <AddressInput.Search>
        <AddressInput.TextBox placeholder="Search for an address" />
      </AddressInput.Search>
    </Field>
  </AddressInput>
);
```

The map is a separate part. This lets you place it outside the `Field`.

## Endpoint contract

While the user types, the component sends `GET <endpoint>?q=<text>`. If the endpoint already has a `?`, the component adds `&q=<text>` instead.

The endpoint must answer with a JSON array of `AddressOption` objects. The component ignores items that do not have a string `label` and finite `latitude` and `longitude`.

```ts
interface AddressOption {
  label: string; // The full address, such as "123 Main Street, LA, CA 90012"
  latitude: number;
  longitude: number;
}
```

- The component waits 600 ms after the last key press before it sends a request.
- A new request cancels the older one.
- If the request fails, the field shows the warning "Address suggestions are unavailable".

## Anatomy

| Part                  | Purpose                                                                  |
| --------------------- | ------------------------------------------------------------------------ |
| `AddressInput`        | The root. It holds the endpoint and the chosen address.                  |
| `AddressInput.Map`    | A map of the chosen address. Without an address, it shows a map icon.    |
| `AddressInput.Search` | The [Search Input](./search-input.md) that gets its suggestions from the endpoint. |
| `AddressInput.TextBox`| The text box. It shows a map pin icon by default.                        |

## Props

### `AddressInput`

It also accepts the props of the Tamagui `View`.

| Prop              | Type                                      | Description                                                                      |
| ----------------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| `endpoint`        | `string`                                  | The address search API. Required.                                                |
| `defaultAddress`  | `AddressOption`                           | The address to show before the user chooses one, such as a saved address.        |
| `onAddressChange` | `(address?: AddressOption) => void`       | Called when the user chooses an address. Called with `undefined` when the text is edited away from it. |

### `AddressInput.Search`

It accepts the props of [Search Input](./search-input.md), except `suggestions` and `filterSuggestions`. The stories use `size` (`"sm"`, `"md"`, `"lg"`) and `disabled`. If you do not set `size`, the component uses the size of the surrounding form control, then `"md"`.

The value of the field is the `label` of the chosen address. Each suggestion shows the street on the first line and the rest of the address below it in smaller text.

### `AddressInput.Map`

It also accepts the props of the Tamagui `View`.

| Prop          | Type     | Default                                         | Description                                                          |
| ------------- | -------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| `zoom`        | `number` | `15`                                            | The zoom level, from 0 (the world) to 19 (a building).               |
| `tileUrl`     | `string` | `https://tile.openstreetmap.org/{z}/{x}/{y}.png` | A 256 px raster tile URL with `{z}`, `{x}`, and `{y}` placeholders. |
| `attribution` | `string` | `© OpenStreetMap contributors` for the default tiles, otherwise empty | The credit that the tile provider requires.  |

OpenStreetMap tiles are for light use only. In production, set your own `tileUrl` and `attribution`.

The map shows static tiles. The user cannot pan or zoom it.

## States

- **No address.** The map shows a map icon.
- **Address chosen.** The map centers on the address and shows a marker.
- **Saved address.** Set `defaultAddress` to show an address at the start.
- **Lookup failed.** The field shows a warning message.
- **Disabled.** Set `disabled` on `AddressInput.Search`.

## Accessibility

- The map has the `img` role. Its label is `Map of <address label>`.
- The map tile images have an empty `alt`.

## Related

- [Search Input](./search-input.md)
- [Context Menu](./context-menu.md), whose item parts render each suggestion
- [Design tokens](../tokens/index.md)

## Source

- [`components/address-input/src/AddressInput.tsx`](../../../components/address-input/src/AddressInput.tsx)
- [`components/address-input/src/AddressInput.stories.tsx`](../../../components/address-input/src/AddressInput.stories.tsx) (title: `Form/AddressInput`)
