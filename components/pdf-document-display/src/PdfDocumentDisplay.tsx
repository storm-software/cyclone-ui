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

import { Spinner } from "@cyclone-ui/spinner";
import { PdfIcon } from "@cyclone-ui/vectors";
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";
import { isString } from "@stryke/type-checks/is-string";
import type { FileResult } from "@stryke/types/file";
import type { ViewProps } from "@tamagui/core";
import { styled, View } from "@tamagui/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import type {
  DocumentCallback,
  OnDocumentLoadError,
  OnDocumentLoadProgress,
  OnDocumentLoadSuccess
} from "react-pdf/dist/esm/shared/types.js";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const StyledPdfIcon = styled(PdfIcon, {
  animation: "200ms",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: "$2",

  variants: {
    visible: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0
      }
    }
  },

  defaultVariants: {
    visible: true
  }
});

interface PdfDocumentDisplayExtraProps {
  src: FileResult | string;
  onLoadProgress?: OnDocumentLoadProgress;
  onLoadSuccess?: OnDocumentLoadSuccess;
  onLoadError?: OnDocumentLoadError;
  pageNumber?: number;
  hideContextMenu?: boolean;
}

export type PdfDocumentDisplayProps = PdfDocumentDisplayExtraProps & ViewProps;

export const PdfDocumentDisplay = View.styleable<PdfDocumentDisplayExtraProps>(
  (
    {
      src,
      onLoadProgress,
      onLoadSuccess,
      onLoadError,
      pageNumber = 1,
      hideContextMenu = false,
      ...props
    }: PdfDocumentDisplayProps,
    forwardedRef
  ) => {
    useEffect(() => {
      const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
      };

      if (hideContextMenu) {
        document.addEventListener("contextmenu", handleContextMenu);
      }

      return () => {
        if (hideContextMenu) {
          document.removeEventListener("contextmenu", handleContextMenu);
        }
      };
    }, [hideContextMenu]);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const handleLoadError = useCallback(
      (error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error);

        setError(error);
        setLoading(false);
        onLoadError?.(error);
      },
      [onLoadError, setError, setLoading]
    );
    const handleLoadSuccess = useCallback(
      (document: DocumentCallback) => {
        setLoading(false);
        onLoadSuccess?.(document);
      },
      [onLoadSuccess, setLoading]
    );

    const file = useMemo(
      () => (isString(src) ? { url: src } : src.file),
      [src]
    );

    return (
      <View ref={forwardedRef} {...props}>
        <VisuallyHidden visible={loading || error !== null} animate={true}>
          <Spinner
            theme={"accent"}
            size="large"
            position="absolute"
            top="35%"
            margin="auto"
            zIndex="$3"
          />

          <StyledPdfIcon visible={loading || error !== null} />
        </VisuallyHidden>

        <VisuallyHidden visible={!loading && !error} animate={true}>
          <Document
            file={file}
            onLoadProgress={onLoadProgress}
            onLoadSuccess={handleLoadSuccess}
            onLoadError={handleLoadError}>
            <Page pageNumber={pageNumber} />
          </Document>
        </VisuallyHidden>
      </View>
    );
  }
);
