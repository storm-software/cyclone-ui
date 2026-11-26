/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

"use client";

import type {
  FileViewerProps as BaseFileViewerProps,
  ViewerOptions
} from "@file-viewer/react";
import { FileViewer as BaseFileViewer } from "@file-viewer/react";
import { pptxRenderer } from "@file-viewer/renderer-pptx";
import { spreadsheetRenderer } from "@file-viewer/renderer-spreadsheet";
import { wordRenderer } from "@file-viewer/renderer-word";
import { useThemeName } from "@tamagui/core";
import { useMemo } from "react";

// Office formats only: PDFs already render with pdf.js through
// `@cyclone-ui/pdf-document-display`, and File Viewer's CAD runtime is
// AGPL-3.0. The renderers type their target as the `div` the viewer always
// renders into, the options as any `HTMLElement`, hence the cast.
const RENDERERS = [
  wordRenderer,
  spreadsheetRenderer,
  pptxRenderer
] as unknown as ViewerOptions["renderers"];

// The parsing workers, resolved by the app's bundler from the packages instead
// of File Viewer's default `/file-viewer/` copy, so apps need no asset step.
// PPTX can't render without its worker; spreadsheets fall back to the main
// thread, and DOCX always parses there.
const PPTX_WORKER_URL = new URL(
  "@file-viewer/pptx/worker/pptx.worker.js",
  import.meta.url
).href;
const SPREADSHEET_WORKER_URL = new URL(
  "@file-viewer/renderer-spreadsheet/worker/sheet.worker.js",
  import.meta.url
).href;

// File Viewer declares these variables on its shell in both color modes.
// Apply Cyclone's tokens to that part in Shadow DOM and to the same element
// when a caller uses scoped or no style isolation.
const FILE_VIEWER_THEME_CSS = `
  [data-cyclone-file-viewer]::part(shell),
  div[data-cyclone-file-viewer] > [part~="shell"] {
    --file-viewer-bg: var(--canvas);
    --file-viewer-content-bg: var(--canvas);
    --file-viewer-text: var(--ink);
    --file-viewer-muted: var(--subtle);
    --file-viewer-font: var(--t-fontSize-xs, 14px)/1.45 var(--f-family, system-ui), sans-serif;
    --file-viewer-border: var(--hairline);
    --file-viewer-focus-ring: var(--primary);
    --file-viewer-toolbar-bg: var(--elevated);
    --file-viewer-toolbar-border: var(--hairline);
    --file-viewer-toolbar-shadow: var(--t-shadow-lg);
    --file-viewer-toolbar-radius: var(--t-radius-lg);
    --file-viewer-group-bg: var(--surface);
    --file-viewer-group-border: var(--hairline);
    --file-viewer-button-color: var(--ink);
    --file-viewer-button-hover-color: var(--ink-hovered);
    --file-viewer-button-hover-bg: var(--surface-hovered);
    --file-viewer-button-disabled-color: var(--ink-disabled);
    --file-viewer-button-radius: var(--t-radius-button);
    --file-viewer-input-bg: var(--sunken);
    --file-viewer-input-color: var(--ink);
  }
`;

export type FileViewerProps = BaseFileViewerProps;

/**
 * Renders a Word, Excel or PowerPoint file (see `isOfficeFile`) from a `url`
 * or `file`, filling its container. Web only.
 *
 * @remarks
 * A wrapper over File Viewer's React component with its Word, spreadsheet and
 * PPTX renderers, English labels, and styling from the active Cyclone theme.
 * `options` are merged over the defaults. Pass `name` (or `type`) when the
 * URL has no file extension, and serve cross-origin files with CORS headers.
 */
export const FileViewer = ({
  className,
  options,
  style,
  ...props
}: FileViewerProps) => {
  const theme = useThemeName().startsWith("light") ? "light" : "dark";
  const viewerOptions = useMemo<ViewerOptions>(
    () => ({
      renderers: RENDERERS,
      rendererMode: "replace",
      locale: "en-US",
      theme,
      // The theme follows Cyclone's, so the viewer's own toggle is hidden.
      toolbar: { theme: false },
      ...options,
      ui: { surfaceBackground: "var(--canvas)", ...options?.ui },
      presentation: { workerUrl: PPTX_WORKER_URL, ...options?.presentation },
      spreadsheet: {
        workerUrl: SPREADSHEET_WORKER_URL,
        ...options?.spreadsheet
      }
    }),
    [options, theme]
  );

  return (
    <>
      <BaseFileViewer
        {...props}
        className={className ? `font_body ${className}` : "font_body"}
        data-cyclone-file-viewer=""
        options={viewerOptions}
        style={{ width: "100%", height: "100%", ...style }}
      />
      <style href="cyclone-file-viewer-theme" precedence="default">
        {FILE_VIEWER_THEME_CSS}
      </style>
    </>
  );
};
