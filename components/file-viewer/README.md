# File Viewer

A web-only viewer for Word, Excel and PowerPoint files, built on [File Viewer](https://github.com/flyfish-dev/file-viewer). This package is part of the **🌀 Cyclone UI** monorepo, which contains [Tamagui](https://tamagui.dev) based design components used by Storm Software.

## Quick Features

- Opens `.docx`, `.doc`, `.odt`, `.odp`, `.xlsx`, `.xls`, `.ods`, `.pptx` and their template and macro variants. Binary `.ppt` isn't supported.
- Only File Viewer's Word, spreadsheet and PPTX renderers are bundled. PDFs are left to `@cyclone-ui/pdf-document-display`, and File Viewer's AGPL-3.0 CAD runtime is never pulled in.
- The PPTX and spreadsheet workers are resolved by your bundler from the renderer packages, so there's no `file-viewer-copy-assets` step.
- Uses Cyclone theme tokens for the viewer surface and controls, with English labels.
- `isOfficeFile(name, mimeType)` (also at `@cyclone-ui/file-viewer/isOfficeFile`, without the viewer) checks whether a file can be opened.
- Fills its container, so give the container a height.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../docs/packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add file-viewer
pnpm install
```

The `@cyclone-ui/file-viewer` package is not published to npm yet. After it is published, you can also install it with a package manager:

Using [pnpm](http://pnpm.io):

```bash
pnpm add -D @cyclone-ui/file-viewer
```

<details>
  <summary>Using npm</summary>

```bash
npm install -D @cyclone-ui/file-viewer
```

</details>

<details>
  <summary>Using yarn</summary>

```bash
yarn add -D @cyclone-ui/file-viewer
```

</details>

## Usage

```tsx
import { FileViewer } from "@cyclone-ui/file-viewer"

export const Example = () => (
  <div style={{ height: 600 }}>
    <FileViewer url="/files/report.docx" name="report.docx" />
  </div>
)
```

Pass `name` when the URL has no file extension, and serve cross-origin files with CORS headers. A `File` or `Blob` can be passed as `file` instead of `url`. `options` are merged over the defaults (for example `{ toolbar: false }`).

Import the viewer lazily (`lazy(() => import("@cyclone-ui/file-viewer"))`), so the renderers only load when a file is opened.

## Development

This project is built using [Nx](https://nx.dev). To work on the package, check out the monorepo and run `pnpm install` from the repository root first.

- Run `pnpm build-storybook` from the root to check the stories for errors.
- Run `pnpm nx show project file-viewer` to list the Nx targets available for the package.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
