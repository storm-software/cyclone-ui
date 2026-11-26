---
title: Alert
description: Reference for the Alert component, a banner that shows a status message with an icon, optional expandable details, and an optional close button.
documentType: reference
tags: [component, containers, alert, status, feedback]
component:
  name: alert
  package: "@cyclone-ui/alert"
  stories:
    - title: Containers/Alert
      file: components/alert/src/Alert.stories.tsx
---

# Alert

`Alert` is a banner for a short status message. It has an icon, a heading, a body, an optional "Show details" section, and an optional close button. The `type` prop sets the color theme.

For a message that blocks the page and needs a decision, use [Alert Dialog](./alert-dialog.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add alert
pnpm install
```

- **File:** `Alert.tsx`. The CLI writes it to `<path>/alert/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Accordion](./accordion.md), [Body Text](./body-text.md), [Button](./button.md), [Collapsible](./collapsible.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Ripple Animation](./ripple-animation.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/animate-presence`, `@tamagui/core`, `@tamagui/stacks`, and `@tamagui/web`.

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

```tsx
<Alert>
  <Alert.Icon />
  <Alert.Content>
    <Alert.Content.Heading>Heading</Alert.Content.Heading>
    <Alert.Content.Body>Body</Alert.Content.Body>
    <Alert.Content.Details>More information</Alert.Content.Details>
  </Alert.Content>
  <Alert.Close />
</Alert>
```

| Part                    | Renders | Purpose |
| ----------------------- | ------- | ------- |
| `Alert`                 | A Tamagui `YStack` that holds a [Container](./container.md) with the `floating` variant, no border, and hidden overflow | The frame. It fades and scales in on mount, and out when it is dismissed. It applies the `type` theme to its parts. |
| `Alert.Icon`            | A `ThemeableIcon` in a round `floating` background, next to an accent stripe (a Tamagui `View` in the `primary` color) | The status icon. The stripe slides in from the left on mount. Pass children to use a custom icon. |
| `Alert.Content`         | A Tamagui `YStack` | A vertical stack for the text. It fills the free width. |
| `Alert.Content.Heading` | `HeadingMediumText` as `<h3>` | The heading, in the `primary` color of the `type` theme. |
| `Alert.Content.Body`    | `BodyText` as `<p>`, in the `base` theme | The body text. |
| `Alert.Content.Details` | A ghost, borderless [Collapsible](./collapsible.md) | Optional. A small "Show details" / "Hide details" toggle with a plus / minus `AccordionToggle` icon, in the `type` color, centered at the bottom of the content. Its children expand above it, under the body. A string child is rendered as `Alert.Content.Body`. |
| `Alert.Close`           | A circular ghost [Button](./button.md) (`<button role="button">`) with an X icon and `tooltip="Dismiss"` | Dismisses the alert. Pass children to replace the icon. It also has `Text` and `Icon` parts. |

`AlertIcon`, `AlertContent`, `AlertHeading`, `AlertBody`, `AlertDetails`, `AlertClose`, `AlertCloseText`, and `AlertCloseIcon` are also exported by name. Use them in React Server Components, which cannot read `Alert.Icon` from a client module.

## Examples

The examples are the stories in [`Alert.stories.tsx`](../../../components/alert/src/Alert.stories.tsx). Each story renders all the parts, with the heading "Alert Heading" and a sample body.

| Stories | What they show |
| ------- | -------------- |
| `Base` | An alert without `type`. The icon comes from the current theme. |
| `Brand`, `Danger`, `Warning`, `Info`, `Success`, `Discovery` | Each `type`. Each type changes the icon, the heading color, and the stripe color. |
| `CustomIcon` | A `QuestionCircle` icon as the children of `Alert.Icon`. |
| `WithDetails` | A `danger` alert with `Alert.Content.Details`. Its play function opens and closes the details. |

## Props

### `Alert`

It accepts all props of [Container](./container.md), plus the props below. The frame always sets `variant="floating"`, `tight`, `borderWidth={0}`, and `overflow="hidden"`, so those props have no effect.

| Prop      | Type        | Default     | Description                                                          |
| --------- | ----------- | ----------- | -------------------------------------------------------------------- |
| `type`    | `AlertType` | `undefined` | The status type. It selects the theme. Without it, the `theme` prop is used. |
| `hovered` | `boolean`   | `false`     | Shows the hovered shade of the surface. It is also passed to the icon background. |
| `onDismiss` | `() => void` | `undefined` | Called after `Alert.Close` is pressed and the exit animation ends. The alert stays hidden until it mounts again, so clear the state that rendered it here. |

### `AlertType`

`"base" | "brand" | "danger" | "warning" | "info" | "success" | "discovery"`

### `Alert.Icon`

If you pass no children, the icon comes from the theme (`getIconByTheme`). If the theme has no icon, a warning circle is used.

### `Alert.Content.Details`

It accepts the props of [Collapsible](./collapsible.md), except that `value`, `defaultValue`, and `onValueChange` use a `boolean`. It sets `variant="ghost"`, `bordered={false}`, `direction="up"` (so the toggle stays at the bottom), and `icon="toggle"` with a 16px `iconSize="2xl"` on the header, and its theme follows `type`.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `label` | `ReactNode` | `undefined` | The toggle text. Without it, the toggle reads "Show details" or "Hide details". |
| `value` | `boolean` | `undefined` | Whether the details are shown. Set it to control the state. |
| `defaultValue` | `boolean` | `false` | Whether the details start shown. |
| `onValueChange` | `(value: boolean) => void` | `undefined` | Called when the toggle is pressed, with the new state. |

```tsx
<Alert type="danger">
  <Alert.Icon />
  <Alert.Content>
    <Alert.Content.Heading>Upload failed</Alert.Content.Heading>
    <Alert.Content.Body>The server did not respond.</Alert.Content.Body>
    <Alert.Content.Details>Request ID 7f3a-21c9. 503 after 3 retries.</Alert.Content.Details>
  </Alert.Content>
  <Alert.Close />
</Alert>
```

### `Alert.Close`

It accepts the props of [Button](./button.md). It sets `variant="ghost"`, `circular`, `tight`, `theme="base"`, and `tooltip="Dismiss"`, and your props can override them. Your `onPress` runs first, then the alert is dismissed.

The package also exports `AlertContext` and the `AlertProps`, `AlertFrameProps`, `AlertContextProps`, `AlertIconProps`, `AlertContentProps`, `AlertHeadingProps`, `AlertBodyProps`, and `AlertDetailsProps` types.

## Variants

The stories show one alert for each type: base, brand, danger, warning, info, success, and discovery. The icon, the heading, and the accent bar use the primary color of the theme. See [Design tokens](../tokens/index.md).

## Accessibility

- The source sets no `role` or live region on `Alert`. Add them to your own markup if screen readers must announce the alert.
- The heading is an `<h3>` element and the body is a `<p>` element.
- The `Alert.Content.Details` toggle is a native button with `aria-expanded`. Its name is the visible label, which changes between "Show details" and "Hide details". Collapsed details are removed from the DOM.
- `Alert.Close` is a native button. Its accessible name is "Dismiss", from its `tooltip`. The tooltip also shows on keyboard focus. Set `aria-label` or `tooltip` to change the name.

## Related

- [Alert Dialog](./alert-dialog.md)
- [Callout](./callout.md)
- [Collapsible](./collapsible.md)
- [Container](./container.md)
- [Button](./button.md)

## Source

- [`components/alert/src/Alert.tsx`](../../../components/alert/src/Alert.tsx)
- [`components/alert/src/Alert.stories.tsx`](../../../components/alert/src/Alert.stories.tsx) (title: `Containers/Alert`)
