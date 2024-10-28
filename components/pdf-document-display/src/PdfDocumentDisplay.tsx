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

import { isString } from "@storm-stack/types/type-checks/is-string";
import { FileResult } from "@storm-stack/types/utility-types/file";
import { View, ViewProps } from "@tamagui/core";
import { useCallback, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  OnDocumentLoadError,
  OnDocumentLoadProgress,
  OnDocumentLoadSuccess
} from "react-pdf/dist/esm/shared/types.js";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

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

    const handleLoadError = useCallback(
      (error: Error) => {
        // eslint-disable-next-line no-console
        console.error(error);

        onLoadError?.(error);
      },
      [onLoadError]
    );

    return (
      <View ref={forwardedRef} {...props}>
        <Document
          file={isString(src) ? { url: src } : src.file}
          onLoadProgress={onLoadProgress}
          onLoadSuccess={onLoadSuccess}
          onLoadError={handleLoadError}>
          <Page pageNumber={pageNumber} />
        </Document>
      </View>
    );
  }
);
