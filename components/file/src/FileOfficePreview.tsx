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

import type { FileViewerProps } from "@cyclone-ui/file-viewer";
import { lazy, Suspense, useEffect, useRef } from "react";

// File Viewer renders into an open shadow root, where outside CSS can't reach.
// The preview is clipped by the card and never scrolled, so its scrollbars
// only show up as a stray bar along the right edge:
// - Word and PowerPoint scroll natively.
// - Spreadsheets draw 14px scrollbars (the table library's
//   `SCROLLER_TRACK_SIZE`) on their canvas, so the table is widened for its
//   wrapper to clip them.
// - The sheet tabs are hidden: on load the spreadsheet renderer scrolls the
//   active tab into view, which would scroll the card down to them.
// The renderers adopt their own sheets after this one, hence `!important`.
const PREVIEW_STYLE = [
  "*{scrollbar-width:none}",
  "*::-webkit-scrollbar{display:none}",
  ".excel-wrapper .table-host{inset:0 -14px -14px 0!important}",
  ".excel-wrapper>.toolbar{display:none!important}"
].join("");

// Loaded on demand so the Office renderers only ship to files that show one.
const FileViewer = lazy(async () =>
  import("@cyclone-ui/file-viewer").then(({ FileViewer: Viewer }) => {
    const PreviewViewer = (props: FileViewerProps) => {
      const ref = useRef<HTMLDivElement>(null);

      // The viewer attaches its shadow root in its own mount effect, which
      // runs before this one.
      useEffect(() => {
        const root = ref.current?.firstElementChild?.shadowRoot;
        if (!root) {
          return;
        }

        const sheet = new CSSStyleSheet();
        sheet.replaceSync(PREVIEW_STYLE);
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
      }, []);

      return (
        <div ref={ref} style={{ display: "contents" }}>
          <Viewer {...props} />
        </div>
      );
    };

    return { default: PreviewViewer };
  })
);

// A backdrop under the card's overlay, so no toolbar.
const OPTIONS = { toolbar: false };

/**
 * Renders the start of a Word document, the first sheet of a workbook or the
 * first slide of a presentation.
 */
export const FileOfficePreview = ({
  uri,
  name
}: {
  uri: string;
  name?: string;
}) => (
  <Suspense fallback={null}>
    <FileViewer
      url={uri}
      name={name}
      options={OPTIONS}
      style={{ height: 500 }}
      // Decorative: kept out of the accessibility tree and the tab order (its
      // scroll areas would otherwise take focus).
      aria-hidden={true}
      inert={true}
    />
  </Suspense>
);
