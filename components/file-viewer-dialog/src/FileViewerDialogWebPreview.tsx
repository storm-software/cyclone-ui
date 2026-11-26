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

import { BodyText } from "@cyclone-ui/body-text";
import { Button } from "@cyclone-ui/button";
import { ChevronLeft, ChevronRight } from "@cyclone-ui/icons";
import type { TamaguiWebElement } from "@tamagui/core";
import { View } from "@tamagui/core";
import { XStack, YStack } from "@tamagui/stacks";
import type { ReactNode } from "react";
import { lazy, Suspense, useLayoutEffect, useRef, useState } from "react";
import type { FilePreviewKind } from "./FileViewerDialog";

// Loaded on demand, so pdf.js and the Office renderers only ship to apps that
// open those files.
const PdfDocumentDisplay = lazy(async () =>
  import("@cyclone-ui/pdf-document-display").then(module => ({
    default: module.PdfDocumentDisplay
  }))
);
const FileViewer = lazy(async () =>
  import("@cyclone-ui/file-viewer").then(module => ({
    default: module.FileViewer
  }))
);

/** The height of image, video and Office previews. */
export const FILE_PREVIEW_HEIGHT = "60vh";

// The footer has its own download button.
const FILE_VIEWER_OPTIONS = { toolbar: { theme: false, download: false } };

const FileViewerPdf = ({ uri }: { uri: string }) => {
  const frameRef = useRef<TamaguiWebElement>(null);
  const [width, setWidth] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  // `offsetWidth`, unlike `onLayout`, ignores the dialog's opening scale.
  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      setWidth(frame.offsetWidth);
    });
    resizeObserver.observe(frame);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <YStack gap="xl" alignItems="center">
      {/* Above the page, which is usually taller than the dialog. */}
      {pageCount > 1 && (
        <XStack gap="lg" alignItems="center">
          <Button
            aria-label="Previous page"
            tooltip="Previous page"
            variant="ghost"
            size="sm"
            circular={true}
            flexGrow={0}
            disabled={page <= 1}
            onPress={() => setPage(current => current - 1)}>
            <Button.Icon>
              <ChevronLeft color="currentColor" />
            </Button.Icon>
          </Button>
          <BodyText size="sm" color="subtle" aria-live="polite">
            {`Page ${page} of ${pageCount}`}
          </BodyText>
          <Button
            aria-label="Next page"
            tooltip="Next page"
            variant="ghost"
            size="sm"
            circular={true}
            flexGrow={0}
            disabled={page >= pageCount}
            onPress={() => setPage(current => current + 1)}>
            <Button.Icon>
              <ChevronRight color="currentColor" />
            </Button.Icon>
          </Button>
        </XStack>
      )}
      <View ref={frameRef} width="100%">
        {width > 0 && (
          <Suspense fallback={null}>
            <PdfDocumentDisplay
              src={uri}
              pageNumber={page}
              onLoadSuccess={document => setPageCount(document.numPages)}
              // ponytail: no text layer, so PDF text can't be selected;
              // enabling it needs react-pdf's TextLayer.css.
              pageProps={{
                width,
                renderTextLayer: false,
                renderAnnotationLayer: false
              }}
            />
          </Suspense>
        )}
      </View>
    </YStack>
  );
};

/**
 * The previews that need the browser: PDF, Office, video and audio. Anything
 * else shows `fallback`.
 */
export const FileViewerDialogWebPreview = ({
  kind,
  uri,
  name,
  fallback
}: {
  kind: FilePreviewKind;
  uri: string;
  name?: string;
  fallback: ReactNode;
}) => {
  if (kind === "pdf") {
    return <FileViewerPdf key={uri} uri={uri} />;
  }
  if (kind === "office") {
    return (
      <View height={FILE_PREVIEW_HEIGHT}>
        <Suspense fallback={null}>
          <FileViewer url={uri} name={name} options={FILE_VIEWER_OPTIONS} />
        </Suspense>
      </View>
    );
  }
  // Users' files come without caption tracks.
  if (kind === "video") {
    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        src={uri}
        controls={true}
        style={{ width: "100%", maxHeight: FILE_PREVIEW_HEIGHT }}
      />
    );
  }
  if (kind === "audio") {
    // eslint-disable-next-line jsx-a11y/media-has-caption
    return <audio src={uri} controls={true} style={{ width: "100%" }} />;
  }

  return fallback;
};
