---
title: Submit Button
description: Reference for the Submit Button component, a Button preset that shows pending, success, and error states while an async submit runs.
documentType: reference
tags: [component, triggers, button, form, async, status]
component:
  name: submit-button
  package: "@cyclone-ui/submit-button"
  stories:
    - title: Triggers/SubmitButton
      file: components/submit-button/src/SubmitButton.stories.tsx
---

# Submit Button

`SubmitButton` is a [Button](./button.md) preset for a submit action. It shows the label "Submit" and a right arrow that extends on hover. When `onPress` returns a promise, the button shows a pending state with a spinner. When the promise settles, it shows a success or an error state, then goes back to idle.

Use it when a press starts an async task and the user must see the result on the button. For an action that finishes at once, use `Button`. `SubmitButton` does not read the [Form](./form.md) state. To submit a native form, pass `type="submit"`, or use `Form.Submit`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add submit-button
pnpm install
```

- **File:** `SubmitButton.tsx`. The CLI writes it to `<path>/submit-button/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/hooks`, `@tamagui/core`, and `@tamagui/stacks`.

## Import

```tsx
import { SubmitButton } from "@cyclone-ui/submit-button";
import type {
  SubmitButtonProps,
  SubmitButtonStatus
} from "@cyclone-ui/submit-button";
```

## Usage

```tsx
<SubmitButton variant="primary" onPress={async () => saveProfile(values)} />

<SubmitButton
  status={mutation.status}
  successText="Sent"
  onPress={() => mutation.mutate(values)}>
  Send message
</SubmitButton>
```

The state names match the `status` of a TanStack Query mutation, so `status={mutation.status}` works as is.

## Anatomy

```tsx
<SubmitButton>Submit</SubmitButton>
```

`SubmitButton` has no subparts. It renders this structure:

| Part           | Renders                                                                      | Purpose                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SubmitButton` | A `Button` (a Tamagui `View` as `<button role="button">`) with `aria-busy`   | The frame. It tracks the promise from `onPress`, sets the theme of the current state, and is disabled while pending.                                                                    |
| State rows     | Four Tamagui `XStack` rows in one Tamagui `View` with `display: grid`        | One row for each state: idle, pending, success, and error. All rows share one grid cell, so the button keeps the width of the widest label. Hidden rows have opacity 0 and `aria-hidden`. |
| Label          | `Button.Text`                                                                | The text of the state. It is not rendered when `hideText` is set.                                                                                                                       |
| Icon           | `Button.Icon`                                                                | `RightArrow` (idle), `Loading` (pending), `ConfirmCircle` (success), or `CloseCircle` (error). Each icon draws itself in when its state starts.                                          |

## Examples

The examples are the stories in [`SubmitButton.stories.tsx`](../../../components/submit-button/src/SubmitButton.stories.tsx).

| Stories      | What they show                                                                                                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`       | The default button. `onPress` resolves after 1.5 seconds, so a press shows the pending and then the success state.                                                                    |
| `CustomText` | The label "Send message" with the texts "Sending", "Sent", and "Not sent".                                                                                                            |
| `Primary`    | The `primary` variant.                                                                                                                                                                 |
| `Success`    | A press that resolves. The play function checks the label changes, `aria-busy`, that a second press while pending does not call `onPress` again, and that focus comes back to the button. `resetDelaySuccess` (500 ms) wins over `resetDelay={-1}`. |
| `Failure`    | A press that rejects. `resetDelayError={-1}` keeps "Try again" on the button, although `resetDelay` is 300 ms.                                                                         |
| `Horizontal` | `direction="horizontal"`: each state slides in from the left.                                                                                                                         |
| `HideText`   | An icon-only button (`hideText`).                                                                                                                                                      |
| `States`     | Four buttons side by side with a controlled `status`: `idle`, `pending`, `success`, and `error`.                                                                                       |

## Props

`SubmitButton` also accepts all [Button](./button.md#props) props.

| Prop                | Type                                              | Default        | Description                                                                                                                                                                         |
| ------------------- | ------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`          | `ReactNode`                                       | `"Submit"`     | The label of the idle state.                                                                                                                                                        |
| `onPress`           | `(event) => void`                                 | -              | Called on press. If it returns a promise, the button shows the pending state until the promise settles, then the success state (resolved) or the error state (rejected).            |
| `status`            | `SubmitButtonStatus`                              | -              | Controls the state. Use it instead of the promise from `onPress`. One of `"idle"`, `"pending"`, `"success"`, or `"error"`.                                                          |
| `pendingText`       | `string`                                          | `"Submitting"` | The label of the pending state.                                                                                                                                                     |
| `successText`       | `string`                                          | `"Submitted"`  | The label of the success state.                                                                                                                                                     |
| `errorText`         | `string`                                          | `"Try again"`  | The label of the error state.                                                                                                                                                       |
| `resetDelay`        | `number`                                          | `2000`         | The time in milliseconds that the success and error states show before the button goes back to idle. Set `-1` to never reset. It applies only to the state tracked from `onPress`, not to a controlled `status`. |
| `resetDelaySuccess` | `number`                                          | -              | Replaces `resetDelay` for the success state. Set `-1` to never reset.                                                                                                              |
| `resetDelayError`   | `number`                                          | -              | Replaces `resetDelay` for the error state. Set `-1` to never reset.                                                                                                                |
| `direction`         | `"vertical" \| "horizontal"`                      | `"vertical"`   | How the labels move between states. `vertical` slides the next state up from below, and back down when the state goes back to an earlier one. `horizontal` always slides the next state in from the left and the previous state out on the right. |
| `hideText`          | `boolean`                                         | `false`        | Hides the label, so only the icon shows. The label of the current state becomes the `tooltip`, and so the `aria-label`.                                                            |
| `animateShrink`     | `boolean`                                         | `false`        | Animates the arrow back to its short length when the hover ends. Without it, the arrow becomes short at once.                                                                      |
| `disabled`          | `boolean`                                         | `false`        | Disables the button. The button is also disabled while pending.                                                                                                                     |

The button sets its own `theme`: `success` in the success state, `danger` in the error state, and the current theme otherwise. A `theme` prop replaces this. A `tooltip` prop replaces the label tooltip of `hideText`.

Like `Button`, it renders `type="button"` by default. Inside a native `<form>`, set `type="submit"` to submit the form.

## States

| State     | Label          | Icon                      | Theme         |
| --------- | -------------- | ------------------------- | ------------- |
| `idle`    | `children`     | A right arrow             | Current theme |
| `pending` | `pendingText`  | A spinner (`Loading`)     | Current theme |
| `success` | `successText`  | A check in a circle       | `success`     |
| `error`   | `errorText`    | A cross in a circle       | `danger`      |

Each state change takes 300 ms. The old row fades out and the new row fades in.

## Accessibility

- The frame is the `Button` frame, a `<button>` element. It takes keyboard focus, and Enter or Space presses it.
- Only the row of the current state is exposed. The other rows have `aria-hidden`, so the accessible name is always the current label ("Submit", "Submitting", "Submitted", or "Try again").
- While pending, the button has `aria-busy="true"` and is disabled. A second press does not call `onPress` again.
- Disabling the button moves focus off it. When the pending state ends, focus comes back to the button if it had focus at the press and focus did not move to a different element.
- With `hideText`, the label of the current state becomes the `aria-label`.
- The source sets no live region for the state changes.

## Related

- [Button](./button.md), which `SubmitButton` is built on
- [Form](./form.md)
- [Field](./field.md), whose `Field.Button` can render a `SubmitButton` with `asChild`
- [Icons](../icons/index.md)

## Source

- [`components/submit-button/src/SubmitButton.tsx`](../../../components/submit-button/src/SubmitButton.tsx)
- [`components/submit-button/src/SubmitButton.stories.tsx`](../../../components/submit-button/src/SubmitButton.stories.tsx) (title: `Triggers/SubmitButton`)
