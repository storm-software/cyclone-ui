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

import { Button } from "@cyclone-ui/button";
import { isOfficeFile } from "@cyclone-ui/file-viewer/isOfficeFile";
import { Download } from "@cyclone-ui/icons";
import type { ModalProps } from "@cyclone-ui/modal";
import { Modal } from "@cyclone-ui/modal";
import { prettyBytes } from "@stryke/string-format/pretty-bytes";
import { Text } from "@tamagui/core";
import { Image } from "@tamagui/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  FILE_PREVIEW_HEIGHT,
  FileViewerDialogWebPreview
} from "./FileViewerDialogWebPreview";

export type FilePreviewKind =
  "image" | "pdf" | "office" | "text" | "video" | "audio" | "other";

const IMAGE_EXTENSION =
  /\.(?:png|jpe?g|gif|webp|avif|svg|bmp|ico|heic|heif|tiff?)$/i;

// Browsers often report source files as `video/mp2t` (`.ts`) or with no MIME
// type at all, so the extension is checked too, before the video types.
const TEXT_MIME_TYPE =
  /^text\/|json|xml|yaml|javascript|typescript|toml|x-sh|sql|graphql/i;
const TEXT_EXTENSION =
  /\.(?:txt|log|md|mdx|csv|tsv|json5?|jsonc|ya?ml|toml|ini|cfg|conf|env|xml|html?|css|scss|sass|less|[cm]?[jt]sx?|vue|svelte|astro|py|rb|go|rs|java|kts?|swift|c|h|cc|cpp|hpp|cs|php|lua|sh|bash|zsh|fish|ps1|sql|graphql|gql|proto|tf|nix|lock|gitignore|dockerfile)$/i;

const VIDEO_EXTENSION = /\.(?:mp4|m4v|webm|ogv|mov)$/i;
const AUDIO_EXTENSION = /\.(?:mp3|wav|ogg|oga|opus|m4a|aac|flac|weba)$/i;

/**
 * How a file is previewed, judged by its MIME type and name's extension.
 *
 * @remarks
 * Office comes before text because Office MIME types contain `xml`
 * (`openxmlformats`).
 */
export const getFilePreviewKind = (
  name = "",
  mimeType = ""
): FilePreviewKind => {
  if (mimeType.startsWith("image/") || IMAGE_EXTENSION.test(name)) {
    return "image";
  }
  if (mimeType === "application/pdf" || /\.pdf$/i.test(name)) {
    return "pdf";
  }
  if (isOfficeFile(name, mimeType)) {
    return "office";
  }
  if (TEXT_MIME_TYPE.test(mimeType) || TEXT_EXTENSION.test(name)) {
    return "text";
  }
  if (mimeType.startsWith("video/") || VIDEO_EXTENSION.test(name)) {
    return "video";
  }
  if (mimeType.startsWith("audio/") || AUDIO_EXTENSION.test(name)) {
    return "audio";
  }

  return "other";
};

// ponytail: reads the whole file into memory, so larger files get the
// download message; stream it in chunks if big logs ever need a preview.
const MAX_TEXT_FILE_SIZE = 1024 * 1024;

const FileViewerText = ({
  uri,
  size,
  fallback
}: {
  uri: string;
  size?: number;
  fallback: ReactNode;
}) => {
  const tooLarge = size !== undefined && size > MAX_TEXT_FILE_SIZE;
  // `null` once the file can't be read.
  const [text, setText] = useState<string | null>("");

  useEffect(() => {
    if (tooLarge) {
      return;
    }

    const controller = new AbortController();
    fetch(uri, { signal: controller.signal })
      .then(async response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.text();
      })
      .then(setText)
      .catch(() => {
        if (!controller.signal.aborted) {
          setText(null);
        }
      });

    return () => {
      controller.abort();
    };
  }, [uri, tooLarge]);

  if (tooLarge || text === null) {
    return fallback;
  }

  return (
    <Text
      fontFamily="code"
      fontSize={13}
      lineHeight="20px"
      color="ink"
      whiteSpace="pre-wrap"
      overflowWrap="anywhere">
      {text}
    </Text>
  );
};

export type FileViewerDialogProps = Omit<ModalProps, "children"> & {
  /** The file's URL. Without one, only the download message shows. */
  uri?: string;
  name?: string;
  mimeType?: string;
  /** In bytes. */
  size?: number;
  /** The element that opens the dialog, such as a button or link. */
  children?: ReactNode;
};

/**
 * A `Modal` that previews a file, with its name, MIME type and size in the
 * header and a download button in the footer.
 *
 * @remarks
 * Images and text show on every platform. On the web, PDFs show one page at a
 * time with page buttons, Word, Excel and PowerPoint files open in
 * `@cyclone-ui/file-viewer`, and video and audio play in the browser's player.
 * Other files (and those on native) show a message to download them instead.
 * The PDF and Office viewers load the first time they're needed.
 */
export const FileViewerDialog = ({
  uri,
  name,
  mimeType,
  size,
  children,
  ...props
}: FileViewerDialogProps) => {
  const kind = getFilePreviewKind(name, mimeType);
  // Without a trigger, Tamagui's dialog hands focus to the body on close, so
  // it goes back to whatever had it when the dialog opened (web only).
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const fallback = (
    <Modal.Body textAlign="center" paddingVertical="6xl">
      There's no preview for this file. Download it to open it.
    </Modal.Body>
  );

  let preview: ReactNode;
  if (!uri) {
    preview = fallback;
  } else if (kind === "image") {
    preview = (
      <Image
        src={uri}
        alt={name}
        width="100%"
        height={FILE_PREVIEW_HEIGHT}
        objectFit="contain"
      />
    );
  } else if (kind === "text") {
    preview = <FileViewerText uri={uri} size={size} fallback={fallback} />;
  } else {
    preview = (
      <FileViewerDialogWebPreview
        kind={kind}
        uri={uri}
        name={name}
        fallback={fallback}
      />
    );
  }

  return (
    <Modal {...props}>
      {children ? (
        <Modal.Trigger asChild={true}>{children}</Modal.Trigger>
      ) : null}
      <Modal.Frame
        maxWidth={960}
        onOpenAutoFocus={() => {
          if (!children && typeof document !== "undefined") {
            returnFocusRef.current = document.activeElement as HTMLElement;
          }
        }}
        onCloseAutoFocus={event => {
          if (returnFocusRef.current) {
            event.cancel();
            returnFocusRef.current.focus();
            returnFocusRef.current = null;
          }
        }}>
        <Modal.Content>
          <Modal.Header closable={true}>
            <Modal.Title>{name || "Unnamed File"}</Modal.Title>
            {(mimeType || size !== undefined) && (
              <Modal.Description>
                {[mimeType, size !== undefined && prettyBytes(size)]
                  .filter(Boolean)
                  .join(" • ")}
              </Modal.Description>
            )}
          </Modal.Header>
          {preview}
        </Modal.Content>
        {uri && (
          <Modal.Footer>
            <Modal.Footer.Actions.Primary>
              <Button
                render="a"
                href={uri}
                // Button types `download` as a boolean; the `<a>` attribute
                // also accepts the suggested file name.
                {...{ download: name }}
                variant="primary"
                size="sm">
                <Button.Icon>
                  <Download />
                </Button.Icon>
                <Button.Text>Download</Button.Text>
              </Button>
            </Modal.Footer.Actions.Primary>
          </Modal.Footer>
        )}
      </Modal.Frame>
    </Modal>
  );
};
