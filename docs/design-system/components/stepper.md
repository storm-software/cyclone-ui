---
title: Stepper
description: A multi-step wizard with a vertical or horizontal header list, step content panels, and next and previous buttons.
documentType: reference
tags: [component, stepper, wizard, container]
---

# Stepper

`Stepper` is a multi-step wizard built on Tamagui `Tabs`. A vertical or horizontal header list shows each step in a ring marker, joined by lines. The rings and lines fill in as the stepper moves between steps. Steps can show numbers, descriptions, and custom markers.

## Import

```tsx
import { Stepper } from "@cyclone-ui/stepper";
```

## Usage

Each `Stepper.Header.Item` and `Stepper.Content.Item` pair share the same `value`.

```tsx
<Stepper gap="xl" numbered>
  <Stepper.Header>
    <Stepper.Header.Item value="tab1">Step One</Stepper.Header.Item>
    <Stepper.Header.Item value="tab2">Step Two</Stepper.Header.Item>
  </Stepper.Header>

  <Stepper.Content>
    <Stepper.Content.Item value="tab1">
      <Text color="ink">Content for step one.</Text>
    </Stepper.Content.Item>
    <Stepper.Content.Item value="tab2">
      <Text color="ink">Content for step two.</Text>
    </Stepper.Content.Item>
  </Stepper.Content>

  <XStack gap="xl">
    <Stepper.PreviousButton />
    <Stepper.NextButton />
  </XStack>
</Stepper>
```

## Parts

| Part | Description |
| --- | --- |
| `Stepper` | The root. Holds the current step and the list of visited steps. |
| `Stepper.Header` | The list of step headers, laid out in the root's `orientation`. It has the label `Stepper`. |
| `Stepper.Header.Item` | One step header. Needs a `value`. Its children are the step title. |
| `Stepper.Marker` | The default step marker: a ring that fills when the stepper reaches the step. Render it in a step's `marker` around your own icon. |
| `Stepper.Content` | The container for the step panels. |
| `Stepper.Content.Item` | The panel of one step. Needs the `value` of its header. |
| `Stepper.NextButton` | A [NextButton](./next-button.md) that goes to the next step. |
| `Stepper.PreviousButton` | A [PreviousButton](./previous-button.md) that goes to the previous step. |

## Props

### `Stepper`

It accepts the Tamagui `Tabs` props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `numbered` | `boolean` | `false` | Shows a two-digit step number (`01`, `02`) next to each step. |
| `size` | `"sm" \| "lg"` | `"lg"` | `sm` draws smaller markers with thinner rings and lines. |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | The direction of the header list. Horizontal puts the content below the header. |
| `showDescription` | `"always" \| "active"` | `"always"` | Shows each step's description always, or only on the current step. |
| `onValueChange` | `(value: string) => void` | — | Called with the new current step. |
| `theme` | theme name | — | Theme. |

The first step is selected at start. The root uses `activationMode="manual"`.

### `Stepper.Header.Item`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | The step's value, shared with its `Stepper.Content.Item`. |
| `description` | `ReactNode` | — | Shown below the step title. |
| `lineStyle` | `"solid" \| "dashed"` | `"solid"` | The style of the line leading to this step (the first step has none). Dashed lines fill dash by dash. |
| `marker` | `(step: StepperStep) => ReactNode` | `Stepper.Marker` with a status icon | Renders the step's marker. `step` has the `index`, `status` (`complete`, `current`, `visited`, or `locked`), `hovered`, and the `color` token the default marker uses. |

```tsx
<Stepper.Header.Item
  value="shipping"
  description="Enter the shipping details."
  marker={({ color }) => (
    <Stepper.Marker>
      <Briefcase color={color} size={20} />
    </Stepper.Marker>
  )}>
  Shipping
</Stepper.Header.Item>
```

### `Stepper.NextButton` and `Stepper.PreviousButton`

They accept the props of their button. They are disabled when there is no next or previous step, unless you set `disabled`. Your `onPress` handler runs before the step changes.

## Step states

| State | Status | Indicator | Selectable |
| --- | --- | --- | --- |
| Before the current step | `complete` | `ConfirmCircle` icon in `primary`. | Yes |
| Current step | `current` | `Pencil` icon in `primary`. | — |
| After the current step, visited before | `visited` | `ConfirmCircle` icon in `hairline`. | Yes |
| After the current step, not visited | `locked` | `Lock` icon in `hairline`. | No (`aria-disabled`, `not-allowed` cursor) |

The ring and the line leading to a step fill with `primary` when the stepper reaches it, over a `hairline` track. Moving several steps at once fills (or empties) each line and ring in turn. The title of the current step uses `primary`; other titles use `primary-inactive`.

Hovering a selectable step shows a pointer cursor and its hovered colors: `primary-hovered` (or `hairline-hovered`) for the marker, `primary-hovered` for the title, and `subtle-hovered` for the description.

## Variants

The stories show the default stepper, `numbered`, `size="sm"`, `orientation="horizontal"`, descriptions (`always` and `active`), dashed and mixed `lineStyle`s, custom markers, and the themes `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [NextButton](./next-button.md)
- [PreviousButton](./previous-button.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/stepper/src/Stepper.tsx`](../../../components/stepper/src/Stepper.tsx)
- [`components/stepper/src/Stepper.stories.tsx`](../../../components/stepper/src/Stepper.stories.tsx)
