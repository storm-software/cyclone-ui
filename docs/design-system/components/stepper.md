---
title: Stepper
description: A multi-step wizard with a vertical header list, step content panels, and next and previous buttons.
documentType: reference
tags: [component, stepper, wizard, container]
---

# Stepper

`Stepper` is a multi-step wizard built on Tamagui `Tabs`. A vertical header list shows each step and marks the completed and current steps with icons. Optional step numbers show next to each step.

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
| `Stepper.Header` | A vertical list of step headers. It has the label `Stepper`. |
| `Stepper.Header.Item` | One step header. Needs a `value`. Its children are the step title. |
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
| `onValueChange` | `(value: string) => void` | — | Called with the new current step. |
| `theme` | theme name | — | Theme. |

The first step is selected at start. The root uses `activationMode="manual"` and a vertical orientation.

### `Stepper.NextButton` and `Stepper.PreviousButton`

They accept the props of their button. They are disabled when there is no next or previous step, unless you set `disabled`. Your `onPress` handler runs before the step changes.

## Step states

| State | Indicator |
| --- | --- |
| Before the current step | `CheckCircle` icon in `primary`. |
| Current step | `PencilSimpleLine` icon in `primary`. |
| After the current step, visited before | `CheckCircle` icon in `hairline`. |
| After the current step, not visited | `Lock` icon in `hairline`. |

The step circle border and the connector line use `primary` for the current and earlier steps, and `hairline` for later steps. The title of the current step uses `primary`.

## Variants

The stories show the default stepper, `numbered`, and the themes `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [NextButton](./next-button.md)
- [PreviousButton](./previous-button.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/stepper/src/Stepper.tsx`](../../../components/stepper/src/Stepper.tsx)
- [`components/stepper/src/Stepper.stories.tsx`](../../../components/stepper/src/Stepper.stories.tsx)
