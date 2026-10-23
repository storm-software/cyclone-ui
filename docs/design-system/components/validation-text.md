---
title: Validation text
description: Caption text that shows field validation messages with an enter and exit animation.
documentType: reference
tags: [component, validation-text, form, typography]
---

# Validation text

`ValidationText` shows the validation messages of a form field. It uses caption text. Place it below a form field.

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

## Props

`ValidationText` accepts the props of `BodyText` (with the `caption` font) and these props:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `messages` | `ValidationDetail[]` | `[]` | The messages to show. Each item has a `message` and a `type`. The type is from `@stryke/types/validations`. |
| `theme` | `string` | Current theme name | Picks the heading text for a list of messages. |
| `disabled` | `boolean` | — | Shows a disabled notice. |

## Behavior

| Case | Result |
| --- | --- |
| One message | The message shows as plain text. |
| Several messages | A heading, then a bulleted list. Each item has a filled `DotOutline` icon in the `primary` color. Items without a message are skipped. |
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
- **Themes in stories:** `Base`, `Brand`, `Discovery`, `Error` (`danger`), `Warning`, `Info`, and `Success`. The `DisabledBase` and `DisabledWarning` stories show the disabled cases.

## Accessibility

The source sets no `role` or live region. The text is plain caption text. To announce a message to assistive technology, place the component in a field that does this.

## Related

- [Design tokens](../tokens/index.md)
- [Themeable icon](./themeable-icon.md)
- [Text area](./text-area.md)

## Source

- [`components/validation-text/src/ValidationText.tsx`](../../../components/validation-text/src/ValidationText.tsx)
- [`components/validation-text/src/ValidationText.stories.tsx`](../../../components/validation-text/src/ValidationText.stories.tsx)
