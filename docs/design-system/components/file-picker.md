---
title: File Picker
description: Reference for the FilePicker component, a drop zone on the web and a document picker on native.
documentType: reference
tags: [component, form, file]
component:
  name: file-picker
  package: "@cyclone-ui/file-picker"
  stories:
    - title: Form/FilePicker
      file: components/file-picker/src/FilePicker.stories.tsx
---

# File Picker

`FilePicker` selects files and images. On the web it is a dashed drop zone. On native it opens the document picker.

The files list shows each file's name, size, date, and MIME type over an image, text, or PDF preview. Inside a [Field](./field.md), the picked files are the field value.

Use the `dropzone` variant when files are the main input of a form. Use the `simple` variant for a single-line control that looks like an [Input](./input.md). To show a file that is already uploaded, without picking, use a [File](./file.md) card.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add file-picker
pnpm install
```

- **Files:** `file-picker-types.ts`, `FilePicker.tsx`, `useDropZone.ts`, and `useFilePicker.ts`. The CLI writes them to `<path>/file-picker/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Body Text](./body-text.md), [Button](./button.md), [Bytes Text](./bytes-text.md), [Container](./container.md), [File](./file.md), [Heading Text](./heading-text.md), [Icons](../icons/index.md), [Link](./link.md), [Link Text](./link-text.md), [Number Text](./number-text.md), [PDF Document Display](./pdf-document-display.md), [Progress](./progress.md), [Ripple Animation](./ripple-animation.md), [Spinner](./spinner.md), [Tooltip](./tooltip.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/hooks`, `@stryke/types`, `@tamagui/animate-presence`, `@tamagui/core`, `@tamagui/stacks`, `expo-document-picker`, `expo-image-picker`, `react-dropzone`, and `react-native-svg`.

## Import

```tsx
import { FilePicker } from "@cyclone-ui/file-picker";
```

The package root exports only the `FilePicker` module. `MediaTypeOptions`, `useFilePicker`, and `useDropZone` come from the subpaths `@cyclone-ui/file-picker/file-picker-types`, `@cyclone-ui/file-picker/useFilePicker`, and `@cyclone-ui/file-picker/useDropZone`.

## Usage

Put the picker in a [Field](./field.md) to connect it to a form:

```tsx
<Field name="attachments">
  <Field.Label>Attachments</Field.Label>
  <FilePicker variant="dropzone" typeOfPicker="file" max={3} mediaTypes={["Images"]}>
    <FilePicker.Files />
    <FilePicker.Trigger>
      <FilePicker.Trigger.Button>Choose files</FilePicker.Trigger.Button>
    </FilePicker.Trigger>
  </FilePicker>
</Field>
```

Inside a form control, a `FilePicker` without children renders `FilePicker.Files` and a `FilePicker.Trigger` with its `Button`. Outside a form control, pass the parts as children.

`FilePicker.Files` lists the picked files when you omit its children. Pass `FilePicker.Files.File` elements as children to replace that list. The `simple` variant renders no file list.

## Anatomy

```tsx
<FilePicker>
  <FilePicker.Files>
    <FilePicker.Files.File {...file} />
  </FilePicker.Files>
  <FilePicker.Trigger>
    <FilePicker.Trigger.Button />
  </FilePicker.Trigger>
</FilePicker>
```

| Part | Renders | Purpose |
| --- | --- | --- |
| `FilePicker` | A Tamagui `View` frame with `tabIndex` 0 and a dashed 2 px border (`dropzone`), or a single-line row with a 1 px solid border (`simple`). It holds a zero-size `<input>` from `react-dropzone`. | The drop zone and the file state. A press opens the file dialog. On the web, files dropped on the frame are picked. |
| `FilePicker.Trigger` | A `YStack` (`dropzone`) or an `XStack` (`simple`) | The prompt. With no files, `dropzone` shows an upload icon, or a lock icon when disabled. `simple` shows the file name, `N files`, or `No file chosen`, and a ghost remove [Button](./button.md) (`Remove file` or `Remove files`) when files are set. |
| `FilePicker.Trigger.Button` | A link [`Button`](./button.md) (`dropzone`), or a plain `View` segment (`simple`) | The call to action. Its default text changes with the file count and `max`, for example `Click or drop a file to upload` or `Choose File`. It is hidden on native and when disabled (`dropzone`). |
| `FilePicker.Files` | A `YStack` in `AnimatePresence` | The list of picked files. It renders nothing when there are no files or in the `simple` variant. |
| `FilePicker.Files.File` | A [`File`](./file.md) card | One file card, with a preview. Its remove button removes the file from the picker. A read-only picker has no remove button. |

`FilePickerTrigger`, `FilePickerTriggerButton`, `FilePickerFiles`, and `FilePickerFile` are also exported by name. Use them in React Server Components, which cannot read `FilePicker.Trigger` from a client module.

The package also exports `FilePickerContext` and the `FILE_PICKER_NAME` constant.

## Examples

The examples are the stories in [`FilePicker.stories.tsx`](../../../components/file-picker/src/FilePicker.stories.tsx). Most stories render the picker in a `Field` inside a `Form`.

| Stories | What they show |
| --- | --- |
| `Base` | One attached file. A click on `Click or drop a file to replace it` opens the dialog once. |
| `Multiple` | `max={10}`. A later pick adds to the list. A file added after a removal gets its own card. |
| `CustomText` | Custom text in `FilePicker.Trigger.Button`. |
| `Simple`, `SimpleMultiple`, `SimpleDisabled`, `SimpleError`, `SimpleSmallSize`, `SimpleLargeSize` | The `simple` variant: one file, up to 10 files, disabled, a danger message, and the `sm` and `lg` sizes. |
| `SimplePopulated` | A controlled `simple` picker with one file and its remove button. |
| `Required`, `Description`, `Disabled` | A required field, a long description, and a disabled picker. |
| `Discovery`, `Error`, `Warning`, `Info`, `Success` | Field validation messages of each type. |
| `SmallSize`, `MediumSize`, `LargeSize` | The `sm`, `md`, and `lg` sizes. |
| `PopulatedSizes` | A file card with an image preview at each size. |
| `PopulatedFileTypes` | Image, long-name, YAML text, and PDF previews. |
| `UploadProgress` | Cards that show upload progress. One upload fails at 60% with a danger message. |

## Props

`FilePicker` also accepts the props of a Tamagui `View`. Unset props fall back to the surrounding form control.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"dropzone" \| "simple"` | `"dropzone"` | A dashed drop zone, or a single-line control styled like `Input`. |
| `size` | `"sm" \| "md" \| "lg"` | the field size, or `"md"` | The form control size. |
| `typeOfPicker` | `"file" \| "image"` | `"file"` | On native, `"image"` opens the image library and `"file"` opens the document picker. |
| `mediaTypes` | `MediaTypeOptions[]` | `["All"]` | `"All"`, `"Videos"`, `"Images"`, or `"Audios"`. On the web, they set the accepted MIME types (`image/*`, `video/*`, `audio/*`, or `*/*`). |
| `max` | `number` | `1` | Maximum number of files. A value above 1 allows a multiple selection. When a pick goes over `max`, the oldest files are dropped. |
| `files` | `ClientFileResult[]` | the field value, or `[]` | The current files. |
| `onChange` | `(files: ClientFileResult[]) => void` | the field `onChange` | Called with the next file list. The prop type also includes the frame's DOM `onChange`, so a typed callback can need a cast. |
| `disabled` | `boolean` | the field disabled state, or `false` | Blocks picking. |
| `readOnly` | `boolean` | the field read-only state, or `false` | Blocks picking and removing without the disabled colors. |
| `name` | `string` | - | The control name. It is the `id` of the hidden input when there is no form control `id`. |

`useFilePicker` returns `onOpen`, `getInputProps`, `getRootProps`, and `dragStatus` (`isDragAccept`, `isDragActive`, `isDragReject`). On native, `getInputProps` and `getRootProps` return `null`. `useDropZone` wraps `react-dropzone`'s `useDropzone` and maps `mediaTypes` to its `accept` option.

## States

- **Drag active.** On the web, the frame shows the active border and surface while files are dragged over it.
- **Validation message.** Inside a field with a message, the frame border uses the `primary` color.
- **Disabled.** The frame uses the disabled colors and a `not-allowed` cursor. Presses do not open the dialog.

## Accessibility

- The frame has `tabIndex` 0, so it is in the tab order.
- In the `dropzone` variant, `FilePicker.Trigger.Button` is a real button that opens the dialog.
- Each file card has a remove button labeled `Remove <file name>`, or `Cancel uploading <file name>` during an upload.
- The `simple` remove button is labeled `Remove file` or `Remove files`, with a matching tooltip.

## Related

- [Field](./field.md)
- [File](./file.md)
- [PDF document display](./pdf-document-display.md)

## Source

- [`components/file-picker/src/FilePicker.tsx`](../../../components/file-picker/src/FilePicker.tsx)
- [`components/file-picker/src/useFilePicker.ts`](../../../components/file-picker/src/useFilePicker.ts) and [`useFilePicker.native.ts`](../../../components/file-picker/src/useFilePicker.native.ts)
- [`components/file-picker/src/useDropZone.ts`](../../../components/file-picker/src/useDropZone.ts)
- [`components/file-picker/src/file-picker-types.ts`](../../../components/file-picker/src/file-picker-types.ts)
- [`components/file-picker/src/FilePicker.stories.tsx`](../../../components/file-picker/src/FilePicker.stories.tsx) (title: `Form/FilePicker`)
