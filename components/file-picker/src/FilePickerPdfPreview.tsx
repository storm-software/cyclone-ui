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

import { View } from "@tamagui/core";
import { Image } from "@tamagui/image";
import { lazy, Suspense, useRef, useState } from "react";

// Loaded on demand so pdfjs only ships to pickers that actually show a PDF.
const PdfDocumentDisplay = lazy(async () =>
  import("@cyclone-ui/pdf-document-display").then(module => ({
    default: module.PdfDocumentDisplay
  }))
);

// The package compiles without the DOM lib, so only the canvas members used here.
interface PreviewCanvas {
  width: number;
  height: number;
  toDataURL: () => string;
}

/**
 * Renders the top of a PDF's first page, filling the available width.
 *
 * @remarks
 * The page is drawn once and kept as a still image. Web `onLayout` measures
 * with `getBoundingClientRect`, which includes the card's hover scale, so a
 * live page would redraw on every frame of that transition.
 */
export const FilePickerPdfPreview = ({ uri }: { uri: string }) => {
  const [width, setWidth] = useState(0);
  const [snapshot, setSnapshot] = useState<{ src: string; height: number }>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (snapshot) {
    return <Image width="100%" height={snapshot.height} src={snapshot.src} />;
  }

  return (
    <View
      width="100%"
      // Keep the first measurement so later (scaled) layouts are ignored.
      onLayout={event =>
        setWidth(current => current || event.nativeEvent.layout.width)
      }>
      {width > 0 && (
        <Suspense fallback={null}>
          <PdfDocumentDisplay
            src={uri}
            width="100%"
            pageProps={{
              width,
              canvasRef,
              renderTextLayer: false,
              renderAnnotationLayer: false,
              onRenderSuccess: () => {
                const canvas = canvasRef.current as PreviewCanvas | null;
                if (canvas) {
                  setSnapshot({
                    src: canvas.toDataURL(),
                    height: (width * canvas.height) / canvas.width
                  });
                }
              }
            }}
          />
        </Suspense>
      )}
    </View>
  );
};
