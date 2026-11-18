---
title: Avatar
description: Reference for the Avatar component, an image of a person at a fixed size with an initials or icon fallback, a status dot, and an optional crop-and-upload flow.
documentType: reference
tags: [component, display, avatar, image, upload]
component:
  name: avatar
  package: "@cyclone-ui/avatar"
  stories:
    - title: Display/Avatar
      file: components/avatar/src/Avatar.stories.tsx
---

# Avatar

`Avatar` shows an image of a person or an account at a fixed size. It is round, or has rounded corners. While the image loads, or when it is missing or fails, it shows the initials of `name` or a person icon.

Use it to identify a person next to their content, for example in a comment, a list row, or an account menu. Set `status` to show a presence dot. Set `editable` to let the user upload a new, cropped image. To show a count or a dot on a different element, use [Badge](./badge.md). To let the user attach files to a form, use [File Picker](./file-picker.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add avatar
pnpm install
```

- **Files:** `Avatar.tsx`, `AvatarCropModal.tsx`, and `utilities.ts`. The CLI writes them to `<path>/avatar/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Badge](./badge.md), [Body Text](./body-text.md), [Button](./button.md), [Container](./container.md), [Dialog](./dialog.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Modal](./modal.md), [Overlay](./overlay.md), [Ripple Animation](./ripple-animation.md), [Scroll View](./scroll-view.md), [Slider](./slider.md), [Spinner](./spinner.md), and [Tooltip](./tooltip.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@tamagui/avatar` and `@tamagui/core`.

## Import

```tsx
import { Avatar } from "@cyclone-ui/avatar"
```

## Usage

```tsx
<Avatar src={user.photoUrl} name="Ada Lovelace" />

<Avatar name="Ada Lovelace" size="lg" status="success" statusLabel="Online" />

<Avatar src={src} name={name} size="2xl" editable={true} onUpload={uploadAvatar} />
```

## Anatomy

```tsx
<Avatar />
```

| Part           | Renders                                                                                                                                                  | Purpose                                                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `Avatar`       | The `@tamagui/avatar` `Avatar` frame (a Tamagui `Square`)                                                                                                 | The frame. It sets the size and the shape. It does not clip, so the status dot can sit over its edge.                           |
| Image layer    | `Avatar.Image` from `@tamagui/avatar`, an `<img>` on web with `alt` set to the name and status label                                                    | Shows `src`, or the uploaded image while the upload runs. It is hidden when the image fails to load.                            |
| Fallback layer | `Avatar.Fallback` from `@tamagui/avatar`. It has `role="img"` and an `aria-label` when there is a name, and `aria-hidden` when there is none.             | Shows `fallback`, the initials in a [Body Text](./body-text.md) `<span>`, or an `Account` icon until the image loads.            |
| Upload button  | A Tamagui `View` as `<button type="button">` with `aria-label="Upload image"`, and a hidden `<input type="file" accept="image/*">`. Only when `editable`. | Covers the avatar and shows a camera icon on hover and keyboard focus. It opens the file dialog. It shows a [Spinner](./spinner.md) during an upload. |
| Crop modal     | A [Modal](./modal.md) with a crop area, a [Slider](./slider.md) for zoom, and [Button](./button.md) controls. Only when `editable`.                     | Opens after the user picks a file. The user moves and zooms the image, then saves the cropped square.                           |
| Status dot     | A [Badge](./badge.md) with `variant="dot"`, which is `aria-hidden`. Only when `status` is set.                                                          | Shows the status color on the bottom-right edge. A CSS mask cuts a transparent ring around it out of the avatar layers.          |

## Examples

The examples are the stories in [`Avatar.stories.tsx`](../../../components/avatar/src/Avatar.stories.tsx). The stories use a photo, the name "Ada Lovelace", and the `lg` size unless they set other values.

| Stories                    | What they show                                                                                                                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`                     | A round photo avatar.                                                                                                                                                                           |
| `Initials`, `Icon`         | No `src`: the initials "AL". The play function finds the fallback by its role and name. With no `name` either, the person icon shows.                                                          |
| `BrokenImage`              | A `src` that fails to load. The fallback shows without the browser's broken-image icon.                                                                                                        |
| `Sizes`, `Rounded`         | All six sizes with a photo and with initials, round and then with rounded corners (`circular={false}`).                                                                                         |
| `Status`                   | The `success`, `warning`, `error`, and `default` status dots with the labels Online, Away, Busy, and Offline, at all six sizes and on editable avatars. A striped backdrop shows through the ring. |
| `Editable`, `EditableRounded` | A `2xl` editable avatar with a 1-second simulated upload. The play function uploads a 400 × 200 PNG, saves the default crop, and checks that `onUpload` gets a 200 × 200 image. `EditableRounded` has rounded corners and no photo. |

## Props

`Avatar` also accepts the props of the `@tamagui/avatar` `Avatar` frame (except `size` and `children`).

| Prop          | Type                                                    | Default | Description                                                                                                                                                                      |
| ------------- | ------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`         | `string \| null`                                        | -       | The image URL. The fallback shows while it loads, and when it is missing or fails. A new `src` replaces the image of an earlier upload.                                          |
| `name`        | `string`                                                | -       | The name of the person. It is the alt text of the image, and the source of the initials (the first letters of the first and last words).                                          |
| `size`        | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"`        | `"md"`  | The size of the avatar. See [Sizes](#sizes).                                                                                                                                     |
| `circular`    | `boolean`                                               | `true`  | Makes the avatar, and its crop window, round. `false` gives rounded corners.                                                                                                    |
| `fallback`    | `ReactNode`                                             | -       | Replaces the default fallback (the initials, or a person icon).                                                                                                                 |
| `status`      | `BadgeColor`                                            | -       | Shows a status dot in this [Badge](./badge.md) color, such as `"success"` for online, on the bottom-right edge.                                                                   |
| `statusLabel` | `string`                                                | -       | Describes the status to screen readers, such as `"Online"`. The dot itself is hidden from them.                                                                                  |
| `editable`    | `boolean`                                               | `false` | Adds an upload button that picks an image, crops it, and passes the result to `onUpload`. Web only.                                                                              |
| `onUpload`    | `(file: File) => void \| Promise<void>`                 | -       | Called with the cropped, square image. The avatar shows the image immediately. While a returned promise is pending, it shows a spinner. A rejected promise restores the previous image. |

The package also exports the `AvatarProps` and `AvatarSize` types.

## Sizes

| Size  | Frame  | Status dot |
| ----- | ------ | ---------- |
| `xs`  | 24 px  | 8 px       |
| `sm`  | 32 px  | 10 px      |
| `md`  | 42 px  | 12 px      |
| `lg`  | 62 px  | 16 px      |
| `xl`  | 92 px  | 20 px      |
| `2xl` | 132 px | 26 px      |

The size also sets the corner radius (when `circular={false}`), the initials font size, the fallback icon, the camera icon, and the width of the ring around the status dot.

## Behavior

- **Fallback.** The fallback shows until the image loads. When the image fails, the component hides it, so the browser's broken-image icon and alt text do not show over the fallback.
- **Upload.** When `editable`, the upload button opens the file dialog. After the user picks an image, the crop modal opens. The user can pick the same file again.
- **Crop.** The crop window is 80% of the crop area. A grid with stronger center lines shows over the image, and the area outside the window is dimmed. Drag the image, or use the arrow keys, to move it. The slider zooms from 1× to 3×. The image always covers the window.
- **Result.** Save draws the square under the window to a new file of at most 512 × 512 px. A JPEG photo stays a JPEG. Other images become a PNG, which keeps transparency. The file name follows the picked file.
- **Errors.** When the picked file cannot be opened, the modal shows "This image can't be opened. Try another one." and Save stays disabled.
- **Cancel.** Cancel, or closing the modal, discards the picked file.

## Accessibility

- With a `name`, the image has that name as its `alt` text, and the fallback has `role="img"` with the same `aria-label`. With a `status` and a `statusLabel`, the label is added, for example "Ada Lovelace, Online".
- Without a `name` and a status label, the image has an empty `alt` and the fallback is hidden from screen readers. The avatar is then decorative.
- The initials and the status dot are hidden from screen readers. Use `statusLabel` to describe the status.
- The upload button is a `<button type="button">` named "Upload image". It is in the tab order and shows on keyboard focus. During an upload it has `aria-busy` and is disabled.
- The file input is not in the tab order.
- The crop modal has the title "Crop image" and a description of the controls. The crop area is a focusable `role="group"` named "Image position". The arrow keys move the image. Hold `Shift` to move it 5 times farther. The zoom slider is named "Zoom".

## Related

- [Badge](./badge.md)
- [File Picker](./file-picker.md)
- [Modal](./modal.md)
- [Slider](./slider.md)

## Source

- [`components/avatar/src/Avatar.tsx`](../../../components/avatar/src/Avatar.tsx)
- [`components/avatar/src/AvatarCropModal.tsx`](../../../components/avatar/src/AvatarCropModal.tsx)
- [`components/avatar/src/utilities.ts`](../../../components/avatar/src/utilities.ts)
- [`components/avatar/src/Avatar.stories.tsx`](../../../components/avatar/src/Avatar.stories.tsx) (title: `Display/Avatar`)
