---
title: Stepper
description: A multi-step wizard with a vertical or horizontal header list, step content panels, and next and previous buttons.
documentType: reference
tags: [component, stepper, wizard, container]
component:
  name: stepper
  package: "@cyclone-ui/stepper"
  stories:
    - title: Containers/Stepper
      file: components/stepper/src/Stepper.stories.tsx
---

# Stepper

`Stepper` is a multi-step wizard built on Tamagui `Tabs`. A vertical or horizontal header list shows each step in a ring marker, joined by lines. The rings and lines fill in as the stepper moves between steps. Steps can show numbers, descriptions, and custom markers.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add stepper
pnpm install
```

- **File:** `Stepper.tsx`. The CLI writes it to `<path>/stepper/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Next Button](./next-button.md), [Number Text](./number-text.md), [Previous Button](./previous-button.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/animate-presence`, `@tamagui/core`, `@tamagui/shapes`, `@tamagui/stacks`, `@tamagui/tabs`, `@tamagui/text`, and `react-native-svg`.

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

## Anatomy

```tsx
<Stepper>
  <Stepper.Header>
    <Stepper.Header.Item value="one" marker={step => <Stepper.Marker>{icon}</Stepper.Marker>}>
      Step one
    </Stepper.Header.Item>
  </Stepper.Header>
  <Stepper.Content>
    <Stepper.Content.Item value="one">{content}</Stepper.Content.Item>
  </Stepper.Content>
  <Stepper.PreviousButton />
  <Stepper.NextButton />
</Stepper>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `Stepper` | Tamagui `Tabs` with `activationMode="manual"`. | The root. Holds the current step and the list of visited steps. |
| `Stepper.Header` | A Tamagui `YStack` with a Tamagui `Tabs.List` (`role="tablist"`, `aria-label="Stepper"`). With `details="current"`, the current step's title and description show above the list. | The list of step headers, laid out in the root's `orientation`. |
| `Stepper.Header.Item` | A Tamagui `Tabs.Tab` (`role="tab"`), after an SVG line from the previous step (the first step has none). A locked step has `aria-disabled`. | One step header. Needs a `value`. Its children are the step title. With `details="current"`, a string title also becomes the tab's `aria-label`. |
| `Stepper.Marker` | A Tamagui `View` with an SVG ring (a `Circle` track and a `Path` fill). | The default step marker: a ring that fills when the stepper reaches the step. Render it in a step's `marker` around your own icon. |
| `Stepper.Content` | A Tamagui `View`. | The container for the step panels. |
| `Stepper.Content.Item` | A Tamagui `Tabs.Content` in an animated view. Only the current step's item renders. | The panel of one step. Needs the `value` of its header. |
| `Stepper.NextButton` | A [NextButton](./next-button.md). | Goes to the next step. |
| `Stepper.PreviousButton` | A [PreviousButton](./previous-button.md). | Goes to the previous step. |

The parts are also exported by name: `StepperFrame`, `StepperHeader`, `StepperHeaderItem`, `StepperMarker`, `StepperContent`, `StepperContentItem`, `StepperNextButton`, and `StepperPreviousButton`.

## Examples

The examples are the stories in [`Stepper.stories.tsx`](../../../components/stepper/src/Stepper.stories.tsx). Each story renders four steps, their content panels, and the previous and next buttons.

| Stories | What they show |
| --- | --- |
| `Base`, `Brand` | The default vertical stepper, and the `brand` theme. |
| `Numbered`, `Small` | `numbered` step numbers, and `size="sm"`. |
| `Horizontal` | `orientation="horizontal"` with descriptions. |
| `Descriptions`, `ActiveDescription` | Descriptions with `showDescription="always"` and `showDescription="active"`. |
| `CurrentDetails`, `CurrentDetailsNumbered` | `details="current"`. The second story is horizontal and numbered. Its play function presses next and checks that the counter and the title change. |
| `DashedLines`, `DashedHorizontal`, `MixedLines` | `lineStyle="dashed"` on every line (vertical and horizontal), and a dashed line into the last step only. |
| `CustomMarkers` | A `marker` function that puts an icon in `Stepper.Marker`. |
| `Themed` | `themed` on a horizontal stepper. Its play function presses next two times, so the completed steps show the `success` theme. |
| `Navigation` | A play function that checks that locked steps cannot be selected and visited steps can. |
| `Controlled` | A controlled stepper that starts on step three. Its play function checks that the earlier steps are selectable and step four stays locked. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | The `discovery`, `danger`, `warning`, `info`, and `success` themes. |

## Props

### `Stepper`

It accepts the Tamagui `Tabs` props plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `numbered` | `boolean` | `false` | Shows a two-digit step number (`01.`, `02.`) next to each step. |
| `size` | `"sm" \| "lg"` | `"lg"` | `sm` draws smaller markers with thinner rings and lines. |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` | The direction of the header list. Horizontal puts the content below the header. |
| `showDescription` | `"always" \| "active"` | `"always"` | Shows each step's description always, or only on the current step. |
| `details` | `"all" \| "current"` | `"all"` | `all` shows each step's title and description next to its marker. `current` shows only the current step's, above the markers; it slides out and the next step's slides in as the stepper moves. With `numbered`, a counter (`2 / 4`) next to the title animates with [NumberText](./number-text.md). |
| `value` | `string` | — | The current step, for a controlled stepper (for example one that follows the URL). Header presses and `Stepper.NextButton` / `Stepper.PreviousButton` then only call `onValueChange`. |
| `defaultValue` | `string` | First step | The step an uncontrolled stepper shows first. |
| `onValueChange` | `(value: string) => void` | — | Called with the step the user moves to. |
| `themed` | `boolean` | `false` | Draws the markers and lines of completed steps with the `success` theme. |
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

The ring and the line leading to a step fill with `primary` when the stepper reaches it, over a `hairline` track. Moving several steps at once fills (or empties) each line and ring in turn. The title of the current step uses `emphasis`; other titles use `emphasis-inactive`. In a horizontal stepper, completed steps also use the active colors.

Hovering a selectable step shows a pointer cursor and its hovered colors: `primary-hovered` (or `hairline-hovered`) for the marker, `emphasis-hovered` for the title, `ink-hovered` for the step number, and `subtle-hovered` for the description.

## Variants

The stories show the default stepper, `numbered`, `size="sm"`, `orientation="horizontal"`, descriptions (`always` and `active`), `details="current"` (with and without `numbered`), dashed and mixed `lineStyle`s, custom markers, and the themes `brand`, `discovery`, `danger`, `warning`, `info`, and `success`.

## Related

- [NextButton](./next-button.md)
- [PreviousButton](./previous-button.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/stepper/src/Stepper.tsx`](../../../components/stepper/src/Stepper.tsx)
- [`components/stepper/src/Stepper.stories.tsx`](../../../components/stepper/src/Stepper.stories.tsx)
