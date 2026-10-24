---
title: File picker
description: Reference for the FilePicker component, a drop zone on the web and a document picker on native.
documentType: reference
tags: [component, form, file]
---

# File picker

`FilePicker` selects files and images. On the web it is a dashed drop zone. On native it opens the document picker.

The files list shows each file's name, size, date, and MIME type over an image, text, or PDF preview. Inside a [Field](./field.md), the picked files are the field value.

Source: [`components/file-picker`](https://github.com/storm-software/cyclone-ui/tree/main/components/file-picker)

## Import

```tsx
import { FilePicker, MediaTypeOptions } from "@cyclone-ui/file-picker";
```

## Usage

```tsx
<FilePicker
  variant="dropzone"
  typeOfPicker="file"
  max={3}
  mediaTypes={[MediaTypeOptions.Images]}
  onChange={files => files}
>
  <FilePicker.Trigger>
    <FilePicker.Trigger.Button>Choose files</FilePicker.Trigger.Button>
  </FilePicker.Trigger>
  <FilePicker.Files />
</FilePicker>
```

`FilePicker.Files` lists the picked files when you omit children. Pass `FilePicker.Files.File` elements as children to replace that list. The simple variant renders no file list.

## Anatomy

| Part | Purpose |
| --- | --- |
| `FilePicker` | The drop zone and the file state. |
| `FilePicker.Trigger` | The control that opens the picker. |
| `FilePicker.Trigger.Button` | A button inside the trigger. |
| `FilePicker.Files` | The list of picked files. |
| `FilePicker.Files.File` | One file card, with a preview. |

`FilePickerPdfPreview` renders a PDF from a `uri` on web. The native file renders nothing.

## Props

Unset props fall back to the surrounding form control.

| Prop | Default | Purpose |
| --- | --- | --- |
| `variant` | `"dropzone"` | `"dropzone"` or `"simple"`. |
| `size` | `"md"` | `"sm"`, `"md"`, or `"lg"`. Inside a field, the field size wins when this is unset. |
| `typeOfPicker` | `"file"` | `"file"` or `"image"`. |
| `mediaTypes` | `[MediaTypeOptions.All]` | `All`, `Videos`, `Images`, or `Audios`. |
| `max` | `1` | Maximum number of files. |
| `files` | the field value, or `[]` | The current files. |
| `onChange` | the field `onChange` | Called with the next `ClientFileResult` list. |
| `disabled` | the field disabled state, or `false` | Blocks picking. |
| `name` | - | The control name. |

`useFilePicker` and `useDropZone` are exported for a custom drop target. `useFilePicker` returns `onOpen`, `getInputProps`, `getRootProps`, and, on web, `dragStatus` (`isDragAccept`, `isDragActive`, `isDragReject`).

## Related pages

- [Field](./field.md)
- [PDF document display](./pdf-document-display.md)
