---
title: PdfDocumentDisplay
description: Renders one page of a PDF from a URL or file result, with a spinner and PDF icon while loading or after an error.
documentType: reference
tags: [component, pdf, document, display]
---

# PdfDocumentDisplay

`PdfDocumentDisplay` shows one page of a PDF. It uses `react-pdf`. While the document loads, or if loading fails, it shows a spinner over a PDF icon. It reports load progress, success, and errors through callbacks.

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

## Props

`PdfDocumentDisplayProps` is the Tamagui `ViewProps` plus the props below.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `FileResult \| string` | — | A URL string, or a `FileResult` (its `file` field is used). Required. |
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
- [Design tokens](../tokens/index.md)

## Source

- [`components/pdf-document-display/src/PdfDocumentDisplay.tsx`](../../../components/pdf-document-display/src/PdfDocumentDisplay.tsx)
- [`components/pdf-document-display/src/PdfDocumentDisplay.stories.tsx`](../../../components/pdf-document-display/src/PdfDocumentDisplay.stories.tsx)
