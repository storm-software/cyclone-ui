---
title: Address Input
description: Reference for the AddressInput component, a search field that suggests addresses from an API and shows a map of the chosen address.
documentType: reference
tags: [component, form, address, search, map]
component:
  name: address-input
  package: "@cyclone-ui/address-input"
  stories:
    - title: Form/AddressInput
      file: components/address-input/src/AddressInput.stories.tsx
---

# Address Input

`AddressInput` is a [Search Input](./search-input.md) whose suggestions come from an address search API. It can also show a map of the chosen address.

Use it when the user must enter a postal address and you have an endpoint that returns matches.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add address-input
pnpm install
```

- **File:** `AddressInput.tsx`. The CLI writes it to `<path>/address-input/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Context Menu](./context-menu.md), [Field](./field.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Input](./input.md), [Link](./link.md), [Link Text](./link-text.md), [Popover](./popover.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Search Input](./search-input.md), [Sheet](./sheet.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Validation Text](./validation-text.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core` and `@tamagui/image`.

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

## Anatomy

```tsx
<AddressInput>
  <AddressInput.Map />
  <Field>
    <AddressInput.Search>
      <AddressInput.TextBox />
    </AddressInput.Search>
  </Field>
</AddressInput>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `AddressInput` | A Tamagui `View` with a `4xl` gap | The root. It holds the endpoint and the chosen address. |
| `AddressInput.Map` | A Tamagui `View`, 240 px high, that clips its content. With an address, it has `role="img"` and holds 256 px raster tiles (Tamagui `Image`), a marker, and the attribution text. | A map of the chosen address. Without an address, it shows a map icon. |
| `AddressInput.Search` | A [Search Input](./search-input.md), which is an [Input](./input.md) frame | Gets its suggestions from the endpoint and holds the field value. |
| `AddressInput.TextBox` | `SearchInput.TextBox`: an `Input.TextBox` with a native `<input role="combobox">`. It anchors a [Context menu](./context-menu.md) popover with a `listbox` of `option` items. | The text box. It shows a map pin icon by default. |

`AddressInputMap`, `AddressInputSearch`, and `AddressInputSearchTextBox` are also exported by name. Use them in React Server Components, which cannot read `AddressInput.Map` from a client module.

## Examples

The examples are the stories in [`AddressInput.stories.tsx`](../../../components/address-input/src/AddressInput.stories.tsx). Each story renders the input in a `Form`, with the map above a `Field`. A mock `fetch` answers for `/api/addresses` with four Los Angeles addresses.

| Stories | What they show |
| --- | --- |
| `Base` | The play test types `200 spring` and chooses the first suggestion. The field gets the full label, `onAddressChange` gets the address, and the map centers on it. One more key press clears the address and the map. |
| `Description` | An `above` label with a `Field.Details` description. |
| `SavedAddress` | A `defaultAddress`. The map and the text show at the start, and `onAddressChange` is not called. |
| `Unavailable` | An endpoint that answers with status 503. The field shows the warning `Address suggestions are unavailable`. |
| `Disabled` | A disabled field. |
| `SmallSize`, `LargeSize` | The `sm` and `lg` sizes. |

## Props

### `AddressInput`

It also accepts the props of the Tamagui `View`.

| Prop              | Type                                      | Description                                                                      |
| ----------------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| `endpoint`        | `string`                                  | The address search API. Required.                                                |
| `defaultAddress`  | `AddressOption`                           | The address to show before the user chooses one, such as a saved address.        |
| `onAddressChange` | `(address?: AddressOption) => void`       | Called when the user chooses an address. Called with `undefined` when the text is edited away from it. |

### `AddressInput.Search`

It accepts the props of [Search Input](./search-input.md), except `suggestions` and `filterSuggestions`. The component replaces `renderSuggestion` with its own. The stories use `size` (`"sm"`, `"md"`, `"lg"`) and `disabled`. If you do not set `size`, the component uses the size of the surrounding form control, then `"md"`.

The value of the field is the `label` of the chosen address. Each suggestion shows the street on the first line and the rest of the address below it in smaller text.

Outside a `Field`, the first text is `defaultValue`. If `defaultValue` is not set, it is the `label` of `defaultAddress`. Set `readOnly` to stop the lookups.

### `AddressInput.TextBox`

It accepts the props of `SearchInput.TextBox`.

| Prop          | Type        | Default              | Description                                          |
| ------------- | ----------- | -------------------- | ---------------------------------------------------- |
| `placeholder` | `string`    | `"Search..."`        | The placeholder text.                                |
| `aria-label`  | `string`    | -                    | The accessible name, when there is no visible label. |
| `icon`        | `ReactNode` | `<MapMarkerRadius />` | The icon at the start of the text box. Set `null` to hide it. |

### `AddressInput.Map`

It also accepts the props of the Tamagui `View`.

| Prop          | Type     | Default                                         | Description                                                          |
| ------------- | -------- | ----------------------------------------------- | -------------------------------------------------------------------- |
| `zoom`        | `number` | `15`                                            | The zoom level, from 0 (the world) to 19 (a building).               |
| `tileUrl`     | `string` | `https://tile.openstreetmap.org/{z}/{x}/{y}.png` | A 256 px raster tile URL with `{z}`, `{x}`, and `{y}` placeholders. |
| `attribution` | `string` | `© OpenStreetMap contributors` for the default tiles, otherwise empty | The credit that the tile provider requires.  |

OpenStreetMap tiles are for light use only. In production, set your own `tileUrl` and `attribution`.

The map shows static tiles. The user cannot pan or zoom it.

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
- The component does not send a request when the text is empty, when the text is the chosen address, or when the field is read-only.
- If the request fails, the field shows the warning "Address suggestions are unavailable".

## States

- **No address.** The map shows a map icon.
- **Address chosen.** The map centers on the address and shows a marker.
- **Saved address.** Set `defaultAddress` to show an address at the start.
- **Lookup failed.** The field shows a warning message.
- **Disabled.** Set `disabled` on the `Field` or on `AddressInput.Search`.

## Accessibility

- The text box is a `combobox` with `aria-autocomplete="list"`. The suggestions are `option` items in a `listbox`.
- Focus stays in the text box. Arrow Down and Arrow Up highlight a suggestion, Enter chooses it, and Escape closes the list.
- The map has the `img` role. Its label is `Map of <address label>`.
- The map tile images have an empty `alt`.

## Related

- [Search Input](./search-input.md)
- [Context Menu](./context-menu.md), whose item parts render each suggestion
- [Design tokens](../tokens/index.md)

## Source

- [`components/address-input/src/AddressInput.tsx`](../../../components/address-input/src/AddressInput.tsx)
- [`components/address-input/src/AddressInput.stories.tsx`](../../../components/address-input/src/AddressInput.stories.tsx) (title: `Form/AddressInput`)
