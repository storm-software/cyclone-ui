/*-------------------------------------------------------------------

                   ⚡ Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/cyclone-ui
 Documentation:   https://stormsoftware.com/projects/cyclone-ui/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/cyclone-ui/license

 -------------------------------------------------------------------*/

"use client";

import { ColorThemeName } from "@cyclone-ui/colors";
import { PdfIcon } from "@cyclone-ui/icons";
import { Spinner } from "@cyclone-ui/spinner";
import { VisuallyHidden } from "@cyclone-ui/visually-hidden";
import { isString } from "@storm-stack/types/type-checks/is-string";
import { FileResult } from "@storm-stack/types/utility-types/file";
import { styled, View, ViewProps } from "@tamagui/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
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

type PdfDocumentDisplayExtraProps = {
  src: FileResult | string;
  onLoadProgress?: OnDocumentLoadProgress;
  onLoadSuccess?: OnDocumentLoadSuccess;
  onLoadError?: OnDocumentLoadError;
  pageNumber?: number;
  hideContextMenu?: boolean;
};

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
            theme={ColorThemeName.ACCENT}
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
