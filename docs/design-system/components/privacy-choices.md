---
title: Privacy Choices
description: Reference for the Privacy Choices component, a footer link that opens a dialog where users review their privacy rights and turn categories of cookies or data sharing on or off.
documentType: reference
tags: [component, block, privacy, cookies, consent, dialog]
component:
  name: privacy-choices
  package: "@cyclone-ui/privacy-choices"
  stories:
    - title: Blocks/PrivacyChoices
      file: components/privacy-choices/src/PrivacyChoices.stories.tsx
---

# Privacy Choices

`PrivacyChoices` is a link-style button marked with the California "Privacy Options" icon. It opens a [Dialog](./dialog.md) where users read about their privacy rights and turn categories of cookies or data sharing on or off. Put it in a site footer.

Each category has a [Switch](./switch.md). A required category, such as strictly necessary cookies, shows "Always Active" instead. Changes stay a draft until the user confirms them or rejects all but the required categories. Then `onValueChange` receives the choice for every category.

Use `PrivacyChoices` for an opt-out flow with a fixed list of categories. To build a different dialog, use [Dialog](./dialog.md) directly.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add privacy-choices
pnpm install
```

- **File:** `PrivacyChoices.tsx`. The CLI writes it to `<path>/privacy-choices/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Dialog](./dialog.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Overlay](./overlay.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Switch](./switch.md), [Tabs](./tabs.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/core`, `@tamagui/use-controllable-state`, and `react-native-svg`.

## Import

```tsx
import { PrivacyChoices } from "@cyclone-ui/privacy-choices";
import type {
  PrivacyChoicesCategory,
  PrivacyChoicesValue
} from "@cyclone-ui/privacy-choices";
```

## Usage

```tsx
const categories: PrivacyChoicesCategory[] = [
  {
    id: "advertising",
    label: "Advertising and Marketing Cookies",
    description: "Our partners use these cookies to show you relevant ads."
  },
  {
    id: "necessary",
    label: "Strictly Necessary Cookies",
    required: true,
    description: "These cookies keep the site working and secure."
  }
];

<PrivacyChoices
  categories={categories}
  description="You can opt out of some sharing of your personal information."
  value={choices}
  onValueChange={setChoices}
/>
```

`onValueChange` receives an object with one `boolean` for each category `id`, for example `{ advertising: false, necessary: true }`. Save it, then apply it to your cookies or data sharing.

## Anatomy

`PrivacyChoices` is one component. It builds this tree:

```tsx
<Dialog>
  <Dialog.Trigger asChild={true}>
    <Button variant="link">{privacyOptionsIcon}{triggerLabel}</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Container>
      {/* Header */}
      <Dialog.Heading>{headerLabel}</Dialog.Heading>
      <Button aria-label="Close" tooltip="Close" />
      <ScrollView>
        <Tabs orientation="vertical">
          <Tabs.Header>{/* overview, then one tab per category */}</Tabs.Header>
          <Tabs.Content>{/* the selected panel */}</Tabs.Content>
        </Tabs>
      </ScrollView>
      {/* Actions */}
      <Dialog.Action>{confirmLabel}</Dialog.Action>
      <Dialog.Close>{rejectLabel}</Dialog.Close>
    </Dialog.Container>
  </Dialog.Portal>
</Dialog>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| Trigger | A `link` variant [Button](./button.md) inside `Dialog.Trigger`. It holds the "Privacy Options" icon (`react-native-svg`, not themed) and `triggerLabel`. It gets the props and ref that you pass to `PrivacyChoices`. | Opens the dialog. |
| Overlay | `Dialog.Overlay`, which draws the shared [Overlay](./overlay.md) | Dims the page behind the dialog. |
| Container | `Dialog.Container` in `Dialog.Portal`, with a maximum width of 880 px and a maximum height of 85% of the viewport | The dialog panel. |
| Header | `Dialog.Heading` (`headerLabel`) and a ghost, circular close `Button` with `aria-label="Close"` | Names the dialog. The close button closes it without saving. |
| Category list | A vertical, tabbed [Tabs](./tabs.md) in a [ScrollView](./scroll-view.md). The list is beside the panel on large screens and above it on small screens (`max-sm`). | The first tab is the overview (`headerLabel`). Then there is one tab for each category, in the order of `categories`. |
| Overview panel | `description` in [Body Text](./body-text.md) | Tells users about their rights. It is the panel that shows first. |
| Category panel | The category `label` as a small heading, a [Switch](./switch.md) labelled by that heading (or `requiredLabel` for a required category), and the category `description` | Lets the user turn one category on or off. |
| Actions | `Dialog.Action` (`confirmLabel`) and `Dialog.Close` (`rejectLabel`). Each closes the dialog. | Confirm saves the draft. Reject turns off every category that is not required. |

The header and the actions stay in view. The category list and the panels scroll. The dialog height animates when the selected tab changes, and each panel fades and rises in.

## Examples

The examples are the stories in [`PrivacyChoices.stories.tsx`](../../../components/privacy-choices/src/PrivacyChoices.stories.tsx). They use three categories: advertising, functional, and strictly necessary (required).

| Stories | What they show |
| --- | --- |
| `Base` | Its play function opens the dialog and turns off "Functional Cookies". It shows "Always Active" on the required tab, then confirms. `onValueChange` receives `{ advertising: true, functional: false, necessary: true }`. |
| `RejectAll` | Its play function opens the dialog and presses "Reject All But Necessary". `onValueChange` receives `{ advertising: false, functional: false, necessary: true }`. |
| `OptIn` | `defaultValue` turns off advertising and functional, so the user must opt in to them. |

## Props

`PrivacyChoices` also accepts the props of [Button](./button.md). It passes them to the trigger.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `categories` | `PrivacyChoicesCategory[]` | - | Required. The categories that the user can turn on or off, in the order listed. |
| `description` | `ReactNode` | - | Required. The overview that shows before the categories, such as the user's rights. |
| `value` | `PrivacyChoicesValue` | - | The confirmed choices (controlled). |
| `defaultValue` | `PrivacyChoicesValue` | `{}` | The choices before the user confirms any (uncontrolled). |
| `onValueChange` | `(value: PrivacyChoicesValue) => void` | - | Called with the choice for every category when the user confirms or rejects all but the required categories. Save the choices here. |
| `headerLabel` | `string` | `"Privacy Choices"` | The heading of the dialog and the label of the overview tab. It is also the default trigger text. |
| `triggerLabel` | `string \| null` | `headerLabel` | The text of the trigger. With `null`, the trigger shows only the icon. |
| `confirmLabel` | `string` | `"Confirm My Choices"` | The text of the confirm button. |
| `rejectLabel` | `string` | `"Reject All But Necessary"` | The text of the reject button. |
| `requiredLabel` | `string` | `"Always Active"` | The text that replaces the switch on a required category. |

### `PrivacyChoicesCategory`

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The key of the category in `PrivacyChoicesValue`. |
| `label` | `string` | The tab text and the panel heading, such as "Functional Cookies". |
| `description` | `ReactNode` | What the category is used for. |
| `required` | `boolean` | The user cannot turn it off. The panel shows `requiredLabel` instead of a switch. |

### `PrivacyChoicesValue`

`Record<string, boolean>`: whether each category is allowed, by `id`.

## Behavior

- **Allowed by default.** A category that is not in `value` or `defaultValue` is allowed. These choices opt out of sharing. To make users opt in, set the category to `false` in `defaultValue`.
- **Required categories.** A required category is always `true` in the result.
- **Draft.** When the dialog opens, the switches show the confirmed choices. Switch changes stay a draft. Confirm saves the draft. If the dialog closes any other way (the close button, `Escape`, or a press outside), the draft is lost.
- **Reject all.** Reject sets every category that is not required to `false`. It ignores the draft.
- **Result.** `onValueChange` always receives every category, including the required ones.

## Accessibility

- The trigger is a `button`. `Dialog.Trigger` sets `aria-haspopup="dialog"`, `aria-expanded`, and `aria-controls` on it. The icon has no text alternative. If you set `triggerLabel={null}`, give the trigger an `aria-label`.
- The dialog content has `role="dialog"` and `aria-modal`. `Dialog.Heading` names it through `aria-labelledby`.
- While the dialog is open, focus stays in it. Press `Escape` to close it. On close, focus goes back to the trigger.
- The categories are `tab` elements. Tamagui `Tabs` moves focus between them with the arrow keys.
- Each switch has `role="switch"`. Its accessible name is the category label, through `aria-labelledby`.
- The confirm and reject buttons use `confirmLabel` and `rejectLabel` as their `aria-label`. The close button in the header is named "Close".

## Related

- [Dialog](./dialog.md)
- [Tabs](./tabs.md)
- [Switch](./switch.md)
- [Button](./button.md)
- [Footer](./footer.md)

## Source

- [`components/privacy-choices/src/PrivacyChoices.tsx`](../../../components/privacy-choices/src/PrivacyChoices.tsx)
- [`components/privacy-choices/src/PrivacyChoices.stories.tsx`](../../../components/privacy-choices/src/PrivacyChoices.stories.tsx) (title: `Blocks/PrivacyChoices`)
