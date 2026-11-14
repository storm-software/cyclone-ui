---
title: PDF Document Display
description: Renders one page of a PDF from a URL or file result, with a spinner and PDF icon while loading or after an error.
documentType: reference
tags: [component, pdf, document, display]
component:
  name: pdf-document-display
  package: "@cyclone-ui/pdf-document-display"
  stories:
    - title: Display/PdfDocumentDisplay
      file: components/pdf-document-display/src/PdfDocumentDisplay.stories.tsx
---

# PDF Document Display

`PdfDocumentDisplay` shows one page of a PDF. It uses `react-pdf`. While the document loads, or if loading fails, it shows a spinner over a PDF icon. It reports load progress, success, and errors through callbacks.

## Installation

Copy the component into your project with the [Cyclone UI CLI](../../packages/cli.md), then install the packages that it adds:

```bash
pnpm exec cyclone-ui add pdf-document-display
pnpm install
```

- **File:** `PdfDocumentDisplay.tsx`. The CLI writes it to `<path>/pdf-document-display/`. `path` comes from `components.json` and defaults to `components`.
- **Also copies:** [Icons](../icons/index.md), [Spinner](./spinner.md), and [Visually Hidden](./visually-hidden.md). Imports between copied components become relative paths.
- **Adds to `package.json`:** `@stryke/type-checks`, `@stryke/types`, `@tamagui/core`, `pdfjs-dist`, and `react-pdf`.

## Import

```tsx
import { PdfDocumentDisplay } from "@cyclone-ui/pdf-document-display";
```

## Usage

```tsx
<PdfDocumentDisplay
  src="https://example.com/document.pdf"
  pageNumber={1}
  height="375px"
  width="200px"
  onLoadError={error => reportError(error)}
/>
```

## Anatomy

```tsx
<PdfDocumentDisplay src={url} />
// renders:
<View>
  <VisuallyHidden visible={loading || failed}>
    <Spinner />
    <PdfIcon />
  </VisuallyHidden>
  <VisuallyHidden visible={loaded}>
    <Document file={file}>
      <Page pageNumber={pageNumber} />
    </Document>
  </VisuallyHidden>
</View>
```

| Part                 | Renders                                                                                                            | Purpose                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| `PdfDocumentDisplay` | A Tamagui `View`                                                                                                   | The frame. Set its size with `width` and `height`.             |
| Placeholder          | A [Visually Hidden](./visually-hidden.md) that holds a `large` [Spinner](./spinner.md) in the `accent` theme over the `PdfIcon` vector | Shows while the document loads, and after an error.            |
| Page                 | A [Visually Hidden](./visually-hidden.md) that holds the `react-pdf` `Document` and `Page`                          | Renders the selected page after the document loads.            |

The two `VisuallyHidden` wrappers fade in and out over 200ms.

## Examples

The examples are the stories in [`PdfDocumentDisplay.stories.tsx`](../../../components/pdf-document-display/src/PdfDocumentDisplay.stories.tsx).

| Stories | What they show                                                                                                       |
| ------- | -------------------------------------------------------------------------------------------------------------------- |
| `Base`  | The first page of `compressed.tracemonkey-pldi-09.pdf` from the `mozilla/pdf.js` repository, at 200 px by 375 px. The spinner shows until the file loads. |

## Props

`PdfDocumentDisplayProps` is the Tamagui `ViewProps` plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `FileResult \| string` | — | A URL string, or a `FileResult` from `@stryke/types` (its `file` field is used). Required. |
| `pageNumber` | `number` | `1` | The page to render. |
| `pageProps` | `Omit<PageProps, "pageNumber">` | — | Extra props for the `react-pdf` `Page`. |
| `onLoadProgress` | `OnDocumentLoadProgress` | — | Called while the document loads. |
| `onLoadSuccess` | `OnDocumentLoadSuccess` | — | Called when the document loads. |
| `onLoadError` | `OnDocumentLoadError` | — | Called when loading fails. The component also logs the error to the console. |
| `hideContextMenu` | `boolean` | `false` | Blocks the browser context menu on the whole document while mounted. |

## States

- **Loading:** The `large` [Spinner](./spinner.md) and the PDF icon show. The page is hidden.
- **Loaded:** The page shows. The spinner and icon fade out.
- **Error:** The spinner and icon stay. The page is hidden.

The PDF worker loads from `pdfjs-dist/build/pdf.worker.min.mjs`.

## Related

- [Spinner](./spinner.md)
- [Visually Hidden](./visually-hidden.md)
- [Design tokens](../tokens/index.md)

## Source

- [`components/pdf-document-display/src/PdfDocumentDisplay.tsx`](../../../components/pdf-document-display/src/PdfDocumentDisplay.tsx)
- [`components/pdf-document-display/src/PdfDocumentDisplay.stories.tsx`](../../../components/pdf-document-display/src/PdfDocumentDisplay.stories.tsx) (title: `Display/PdfDocumentDisplay`)
