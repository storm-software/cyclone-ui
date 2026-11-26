# File Viewer Dialog

A `Modal` that previews a file, with a download button. This package is part of the **🌀 Cyclone UI** monorepo, which contains [Tamagui](https://tamagui.dev) based design components used by Storm Software.

## Quick Features

- The header shows the file's name, MIME type and size, and the footer has a download button.
- Images and text (up to 1 MB) preview on every platform.
- On the web, PDFs show one page at a time with page buttons, Word, Excel and PowerPoint files open in [`@cyclone-ui/file-viewer`](../file-viewer/README.md), and video and audio play in the browser's player. The PDF and Office viewers load the first time they're needed.
- Other files, and PDF, Office and media files on native, show a message to download them instead.
- Pass a trigger element as `children`, or control it with `open` and `onOpenChange` like any `Modal`.
- `getFilePreviewKind(name, mimeType)` sorts a file into `image`, `pdf`, `office`, `text`, `video`, `audio` or `other`.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../docs/packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add file-viewer-dialog
pnpm install
```

The `@cyclone-ui/file-viewer-dialog` package is not published to npm yet. After it is published, you can also install it with a package manager:

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/file-viewer-dialog
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/file-viewer-dialog
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/file-viewer-dialog
```

</details>

## Usage

```tsx
import { Button } from "@cyclone-ui/button"
import { FileViewerDialog } from "@cyclone-ui/file-viewer-dialog"

export const Example = () => (
  <FileViewerDialog
    uri="https://example.com/report.pdf"
    name="report.pdf"
    mimeType="application/pdf"
    size={204800}>
    <Button>
      <Button.Text>Open report</Button.Text>
    </Button>
  </FileViewerDialog>
)
```

Files from another origin need CORS headers to preview as text, PDF or Office documents.

## Development

This project is built using [Nx](https://nx.dev). To work on the package, check out the monorepo and run `pnpm install` from the repository root first.

- Run `pnpm build-storybook` from the root to check the stories for errors.
- Run `pnpm nx show project file-viewer-dialog` to list the Nx targets available for the package.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
