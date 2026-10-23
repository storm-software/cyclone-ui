---
title: Alert
description: Reference for the Alert component, a banner that shows a status message with an icon and an optional close button.
documentType: reference
tags: [component, containers, alert, status, feedback]
---

# Alert

`Alert` is a banner for a short status message. It has an icon, a heading, a body, and an optional close button. The `type` prop sets the color theme.

For a message that blocks the page and needs a decision, use [Alert Dialog](./alert-dialog.md).

## Import

```tsx
import { Alert } from "@cyclone-ui/alert";
```

## Usage

```tsx
<Alert type="warning">
  <Alert.Icon />
  <Alert.Content>
    <Alert.Content.Heading>Storage almost full</Alert.Content.Heading>
    <Alert.Content.Body>Delete files to free up space.</Alert.Content.Body>
  </Alert.Content>
  <Alert.Close />
</Alert>
```

## Anatomy

| Part                    | Purpose                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `Alert`                 | The frame. It is a [Container](./container.md) with the `overlay` variant and no border. |
| `Alert.Icon`            | The status icon in a circle. Pass children to use a custom icon.                      |
| `Alert.Content`         | A vertical stack for the text.                                                        |
| `Alert.Content.Heading` | The heading (`HeadingMediumText`).                                                    |
| `Alert.Content.Body`    | The body text (`BodyText`).                                                           |
| `Alert.Close`           | A circular ghost [Button](./button.md) with an X icon. Pass children to replace the icon. It also has `Text` and `Icon` parts. |

## Props

### `Alert`

It accepts all props of [Container](./container.md), plus the props below.

| Prop      | Type        | Default     | Description                                                          |
| --------- | ----------- | ----------- | -------------------------------------------------------------------- |
| `type`    | `AlertType` | `undefined` | The status type. It selects the theme. Without it, the `theme` prop is used. |
| `hovered` | `boolean`   | `false`     | Shows the hovered shade of the surface. It is also passed to the icon background. |

### `AlertType`

`"base" | "brand" | "danger" | "warning" | "info" | "success" | "discovery"`

### `Alert.Icon`

If you pass no children, the icon comes from the theme (`getIconByTheme`). If the theme has no icon, a warning circle is used.

## Variants

The stories show one alert for each type: base, brand, danger, warning, info, success, and discovery. The icon, the heading, and the accent bar use the primary color of the theme. See [Design tokens](../tokens/index.md).

## Accessibility

The source sets no `role` or live region on `Alert`. Add them to your own markup if screen readers must announce the alert.

## Related

- [Alert Dialog](./alert-dialog.md)
- [Callout](./callout.md)
- [Container](./container.md)
- [Button](./button.md)

## Source

- [`components/alert/src/Alert.tsx`](../../../components/alert/src/Alert.tsx)
- [`components/alert/src/Alert.stories.tsx`](../../../components/alert/src/Alert.stories.tsx) (title: `Containers/Alert`)
