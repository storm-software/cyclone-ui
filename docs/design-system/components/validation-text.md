---
title: Validation Text
description: Caption text that shows field validation messages with an enter and exit animation.
documentType: reference
tags: [component, validation-text, form, typography]
component:
  name: validation-text
  package: "@cyclone-ui/validation-text"
  stories:
    - title: Typography/ValidationText
      file: components/validation-text/src/ValidationText.stories.tsx
---

# Validation Text

`ValidationText` shows the validation messages of a form field. It uses caption text. Place it below a form field.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add validation-text
pnpm install
```

- **File:** `ValidationText.tsx`. The CLI writes it to `<path>/validation-text/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md) and [Icons](../icons/index.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/types`, `@tamagui/core`, and `@tamagui/stacks`.

## Import

```tsx
import { ValidationText } from "@cyclone-ui/validation-text";
```

## Usage

```tsx
import { ValidationText } from "@cyclone-ui/validation-text";

export function Example() {
  return (
    <ValidationText
      theme="danger"
      messages={[
        { type: "error", message: "The name is required" },
        { type: "error", message: "The name must be unique" }
      ]}
    />
  );
}
```

## Anatomy

```tsx
<ValidationText messages={messages} />
```

`ValidationText` has one part. What it renders depends on the messages:

| Part | Renders | Purpose |
| --- | --- | --- |
| Single text | `BodyText` as `<p>`, with the `caption` font | One message, or the disabled notice. It gets `id`, `ref`, and the other props. |
| List wrapper | A Tamagui `YStack` | Holds the heading and the items when there are several messages. It gets `id`. |
| List heading | `BodyText` as `<p>`, with the `caption` font | The heading text for the theme. It gets `ref` and the other props. |
| List item | A Tamagui `XStack` with a filled `Dot` icon in the `primary` color and a `BodyText` `<p>` | One message. Each item text also gets the other props. |

## Examples

The examples are the stories in [`ValidationText.stories.tsx`](../../../components/validation-text/src/ValidationText.stories.tsx). Unless a story sets its own messages, it shows a list of three `error` messages.

| Stories | What they show |
| --- | --- |
| `Base` | The list with no `theme`, so the heading is "Please review the following details: ". |
| `Brand`, `Discovery`, `Error`, `Warning`, `Info`, `Success` | The list in each theme. `Error` uses the `danger` theme. The heading text changes for `danger`, `warning`, and `success`. |
| `DisabledBase` | `disabled` with no messages, so the text is "This field is disabled". |
| `DisabledWarning` | `disabled` in the `warning` theme with one warning message, so the message shows. |

## Props

`ValidationText` accepts the props of `BodyText` (with the `caption` font) and these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `messages` | `ValidationDetail[]` | `[]` | The messages to show. Each item has a `message` and a `type`. The type is from `@stryke/types/validations`. |
| `theme` | `string` | Current theme name | Picks the heading text for a list of messages. |
| `disabled` | `boolean` | — | Shows a disabled notice. |
| `showDisabledMessage` | `boolean` | `true` | Lets `disabled` show the disabled notice. When `false`, `disabled` has no effect. |

## Behavior

| Case | Result |
| --- | --- |
| One message | The message shows as plain text. |
| Several messages | A heading, then a bulleted list. Each item has a filled `Dot` icon in the `primary` color. Items without a message are skipped. |
| No messages | Nothing renders. |
| `disabled` and no theme, or a `base` theme | `This field is disabled`. |
| `disabled` with another theme | The first message, or `This field is disabled` when the list is empty. |

The heading of a list depends on the theme name:

| Theme name includes | Heading |
| --- | --- |
| `danger` | `Please review the following errors: ` |
| `warning` | `Please review the following warnings: ` |
| `success` | `Successfully completed the following: ` |
| Anything else | `Please review the following details: ` |

## Variants and states

- **Enter and exit:** The text starts at opacity `0` and `10px` down for the `enter` and `exit` styles. The change lasts `400ms`.

## Accessibility

- The source sets no `role` or live region. The text is plain caption text. To announce a message to assistive technology, place the component in a field that does this.
- Set `id` and point the field's `aria-describedby` at it. For one message, the `id` is on the text. For several messages, it is on the list wrapper, so the description includes the heading and every item.

## Related

- [Design tokens](../tokens/index.md)
- [Themeable icon](../icons/themeable-icon.md)
- [Text area](./text-area.md)

## Source

- [`components/validation-text/src/ValidationText.tsx`](../../../components/validation-text/src/ValidationText.tsx)
- [`components/validation-text/src/ValidationText.stories.tsx`](../../../components/validation-text/src/ValidationText.stories.tsx)
