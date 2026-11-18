---
title: File
description: Reference for the File component, a card that shows a file's name, size, date, and type over a preview, with download and remove buttons and an upload status.
documentType: reference
tags: [component, display, file, upload, preview]
component:
  name: file
  package: "@cyclone-ui/file"
  stories:
    - title: Display/File
      file: components/file/src/File.stories.tsx
---

# File

`File` is a card for one file. It shows the file name, size, modified date, and MIME type over a preview of the file. The preview is an image, the first lines of a text file, or the top of the first page of a PDF. On hover, the card shows a download button and, when you give `onRemove`, a remove button. During an upload, it shows a progress bar, then a short success or a failure state.

Use it to show a file that the user picked or uploaded. [File Picker](./file-picker.md) uses it to list its files. To let the user pick files, use File Picker. To show all pages of a PDF, use [PDF document display](./pdf-document-display.md).

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add file
pnpm install
```

- **Files:** `File.tsx` and `FilePdfPreview.tsx`. The CLI writes them to `<path>/file/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Bytes Text](./bytes-text.md), [Container](./container.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Link](./link.md), [Link Text](./link-text.md), [Number Text](./number-text.md), [PDF Document Display](./pdf-document-display.md), [Progress](./progress.md), [Ripple Animation](./ripple-animation.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/date`, `@tamagui/core`, `@tamagui/image`, `@tamagui/linear-gradient`, `@tamagui/stacks`, `@tamagui/text`, and `react-native-svg`.

## Import

```tsx
import { File } from "@cyclone-ui/file"
```

`File` has the same name as the DOM `File` class. In a module that also uses the DOM class, import it with an alias, for example `import { File as FileCard } from "@cyclone-ui/file"`.

## Usage

```tsx
<File
  id={1}
  name="report.pdf"
  status="uploaded"
  uri={reportUrl}
  size={204800}
  mimeType="application/pdf"
  lastModified={Date.now()}
  onRemove={remove}
/>

<File {...file} progress={42} onCancel={cancelUpload} onRemove={remove} />
```

## Anatomy

```tsx
<File />
```

| Part            | Renders                                                                                                                                                                       | Purpose                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `File`          | A Tamagui `View` in the `file` group, with a 1 px border and the `card` radius                                                                                                | The card. It animates in and out with opacity and scale. It stops click and press events, so they do not reach a parent such as a drop zone. |
| Preview         | An `@tamagui/image` `Image`; a Tamagui `Text` in the code font with `aria-hidden`; or a PDF page drawn by [PDF document display](./pdf-document-display.md) and kept as an `Image` | Fills the card behind the text. It zooms in on hover. See [Previews](#previews).                                                              |
| Overlays        | A black Tamagui `View` and an `@tamagui/linear-gradient` `LinearGradient`                                                                                                     | Dim the preview so the text is easy to read. They get darker on hover.                                                                        |
| Name            | A [Link](./link.md) `<a target="_blank">` to `uri`, or a Tamagui `SizableText` when there is no `uri`                                                                           | Shows `name`, or "Unnamed File".                                                                                                              |
| Metadata        | [Body Text](./body-text.md) `<span>` items, with the size in [Bytes Text](./bytes-text.md)                                                                                      | Shows the size, the modified date and time (`MM-DD-YYYY HH:mm:ss`), and the MIME type. On small screens each item has its own line.           |
| Download button | A [Button](./button.md) with `render="a"`, `href={uri}`, and `download` set to the name, with the tooltip "Download". Only when there is a `uri`.                             | Downloads the file. During an upload, an animated `Uploading` icon with `aria-hidden` replaces it.                                            |
| Remove button   | A `danger` ghost [Button](./button.md) with a `Trash` icon, or a `Close` icon during an upload                                                                                 | Calls `onRemove`, or `onCancel` during an upload. It does not show when `disabled`, or when there is no handler.                             |
| Upload status   | A dashed [Progress](./progress.md) bar and text; a `role="alert"` row in the `danger` theme; or a `role="status"` row in the `success` theme                                    | Shows the upload progress, the failure message, or "Upload complete". A `danger` or `success` outline goes around the card for the last two. |

The package also exports `FileMetadataText`, the [Body Text](./body-text.md) style of the metadata line with a `controlSize` variant. File Picker uses it.

## Examples

The examples are the stories in [`File.stories.tsx`](../../../components/file/src/File.stories.tsx). Each story shows a 500 px wide card for `sample.svg` (1,024 bytes, `image/svg+xml`) with an SVG data URL as `uri`.

| Stories                                      | What they show                                                                                                                                       |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Base`                                       | The card with an image preview, the metadata, and a download button. There is no remove button.                                                     |
| `Removable`, `Disabled`                      | With `onRemove`, the remove button shows on hover. With `disabled`, it does not.                                                                     |
| `SmallSize`, `LargeSize`                     | `controlSize="sm"` and `controlSize="lg"`.                                                                                                           |
| `UploadProgress`                             | `progress={42}`. The play function finds the progress bar named "Uploading sample.svg", presses the cancel button, and checks that `onCancel` runs and `onRemove` does not. |
| `UploadFailed`, `UploadFailedDefaultMessage` | `status="failed"`. The alert shows the message of the `danger` issue, or "Upload failed" when there is no issue. The progress bar does not show.      |
| `UploadComplete`                             | A card that starts at `progress={100}` with `status="uploaded"`. No progress bar and no success state show.                                         |
| `UploadSucceeded`                            | The progress changes from 90 to 100 after 0.5 seconds. "Upload complete" shows, then goes away.                                                    |
| `SimulatedUpload`                            | The progress loops from 0 to 100 in steps of 5 every 300 ms.                                                                                        |

## Props

`FileProps` is the `ClientFileResult` type from `@cyclone-ui/state` (a file result with an `id` and `progress`), plus the props below. The card does not pass other props to its frame.

| Prop           | Type                                                    | Default | Description                                                                                                                         |
| -------------- | ------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `id`           | `number`                                                | -       | Required. The key of the preview. A new `id` mounts a new preview.                                                                  |
| `name`         | `string`                                                | -       | Required. The file name. It is the title, the suggested download name, and part of the button labels.                             |
| `status`       | `"initialized" \| "validated" \| "uploaded" \| "failed"` | -       | Required. `"failed"` shows the failure state.                                                                                       |
| `uri`          | `string`                                                | -       | The URL of the file. It is the source of the preview, the target of the name link, and the download link. Give `uri` or `file`.     |
| `file`         | `File` (DOM)                                            | -       | The file object. The card does not read it. Give `uri` or `file`.                                                                   |
| `size`         | `number`                                                | -       | The size in bytes. Text files larger than 1 MB get no preview.                                                                       |
| `mimeType`     | `string`                                                | -       | The MIME type. It shows in the metadata and selects the preview.                                                                    |
| `lastModified` | `number`                                                | -       | The modified time, in milliseconds since the epoch.                                                                                 |
| `issues`       | `ValidationDetail[]`                                    | -       | Validation issues. When `status` is `"failed"`, the card shows the message of the first `danger` issue.                            |
| `progress`     | `number`                                                | -       | The uploaded percentage, from 0 to 100. A value below 100 shows the upload progress.                                                |
| `controlSize`  | `"sm" \| "md" \| "lg"`                                  | `"md"`  | The form control size. It scales the card height, the buttons, the icons, and the text.                                             |
| `disabled`     | `boolean`                                               | `false` | Hides the remove button.                                                                                                            |
| `onRemove`     | `() => void`                                            | -       | Called by the remove button. Without it, there is no remove button (except during an upload with `onCancel`).                      |
| `onCancel`     | `() => void`                                            | -       | Called by the cancel button that replaces the remove button during an upload. Without it, the cancel button calls `onRemove`.       |

## Previews

The card selects the preview from `mimeType` and `name`:

| Preview | When                                                                                       | Shows                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Image   | `mimeType` starts with `image/`, or no other preview matches                               | A band from the middle of the image.                                                                    |
| PDF     | `mimeType` is `application/pdf`, or `name` ends in `.pdf`                                  | The top of the first page. The PDF library loads only when a card shows a PDF. On native, there is no preview. |
| Text    | A text, JSON, XML, YAML, script, or SQL MIME type, or a common text or source file extension | Up to the first 2,048 characters in the code font. Files larger than 1 MB, and files that cannot be read, show no text. |

There is no preview without a `uri`.

## States

- **Hover.** The overlays get darker, the preview zooms in, a ring shows around the card, and the buttons show. On touch screens (a coarse pointer), the buttons always show.
- **Uploading.** When `progress` is below 100 and `status` is not `"failed"`. A dashed progress bar and the text "Uploading… N%" show. The remove button becomes a cancel button.
- **Upload complete.** When an upload ends without a failure, a `success` outline and "Upload complete" show for 3 seconds. A card that mounts after its upload ends does not show this state.
- **Failed.** When `status` is `"failed"`. A `danger` outline and the failure message show. The progress bar does not show.
- **Transitions.** The old status fades out before the new one fades in. The status area changes its height smoothly.

## Accessibility

- The name is a link that opens the file in a new tab.
- The download button is an `<a>` with the accessible name "Download" from its tooltip.
- The remove button has the accessible name `Remove {name}`. During an upload it is `Cancel uploading {name}`. When there is no name, `file` replaces `{name}`.
- The download and remove buttons stay in the tab order. They show only on hover, or on touch screens.
- The progress bar has `role="progressbar"` and the name `Uploading {name}`. The percentage text has `aria-live="polite"`.
- The failure row has `role="alert"`. The success row has `role="status"`. A status that is fading out is `aria-hidden`.
- The text preview, the metadata separators, and the uploading icon are `aria-hidden`.

## Related

- [File Picker](./file-picker.md)
- [Progress](./progress.md)
- [PDF document display](./pdf-document-display.md)
- [Bytes Text](./bytes-text.md)

## Source

- [`components/file/src/File.tsx`](../../../components/file/src/File.tsx)
- [`components/file/src/FilePdfPreview.tsx`](../../../components/file/src/FilePdfPreview.tsx) and [`FilePdfPreview.native.tsx`](../../../components/file/src/FilePdfPreview.native.tsx)
- [`components/file/src/File.stories.tsx`](../../../components/file/src/File.stories.tsx) (title: `Display/File`)
