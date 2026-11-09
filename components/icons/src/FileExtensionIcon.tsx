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

import type { GetProps } from "@tamagui/core";
import { createStyledHOC, styled, View } from "@tamagui/core";
import { Calendar } from "./icons/Calendar";
import { CardAccountDetails } from "./icons/CardAccountDetails";
import { Certificate } from "./icons/Certificate";
import { Cog } from "./icons/Cog";
import { Computer } from "./icons/Computer";
import { Console } from "./icons/Console";
import { DocumentCode } from "./icons/DocumentCode";
import { DocumentReport } from "./icons/DocumentReport";
import { Email } from "./icons/Email";
import { File } from "./icons/File";
import { FileDocument } from "./icons/FileDocument";
import { FolderZip } from "./icons/FolderZip";
import { Grid3 } from "./icons/Grid3";
import { Image } from "./icons/Image";
import { Key } from "./icons/Key";
import { LanguageC } from "./icons/LanguageC";
import { LanguageCpp } from "./icons/LanguageCpp";
import { LanguageCsharp } from "./icons/LanguageCsharp";
import { LanguageGo } from "./icons/LanguageGo";
import { LanguageHtml5 } from "./icons/LanguageHtml5";
import { LanguageJava } from "./icons/LanguageJava";
import { LanguageJavascript } from "./icons/LanguageJavascript";
import { LanguageJsx } from "./icons/LanguageJsx";
import { LanguageMarkdown } from "./icons/LanguageMarkdown";
import { LanguagePhp } from "./icons/LanguagePhp";
import { LanguagePython } from "./icons/LanguagePython";
import { LanguageRust } from "./icons/LanguageRust";
import { LanguageTypescript } from "./icons/LanguageTypescript";
import { Link } from "./icons/Link";
import { Lock } from "./icons/Lock";
import { Nix } from "./icons/Nix";
import { Notebook } from "./icons/Notebook";
import { PaletteSwatchVariant } from "./icons/PaletteSwatchVariant";
import { Play } from "./icons/Play";
import { Server } from "./icons/Server";
import { Terraform } from "./icons/Terraform";
import { TextBox } from "./icons/TextBox";
import { UsbFlashDrive } from "./icons/UsbFlashDrive";
import { VolumeHigh } from "./icons/VolumeHigh";
import type { IconComponent, IconProps } from "./types";

const FILE_EXTENSION_ICONS = new Map<string, IconComponent>(
  (
    [
      [FileDocument, "pdf doc docx odt rtf pages wpd"],
      [TextBox, "txt text log nfo"],
      [Grid3, "xls xlsx xlsm ods csv tsv numbers"],
      [DocumentReport, "ppt pptx pps ppsx odp"],
      [Notebook, "ipynb epub mobi azw azw3"],
      [
        Image,
        "png jpg jpeg jfif gif webp svg bmp ico tif tiff heic heif avif raw"
      ],
      [PaletteSwatchVariant, "psd ai sketch fig xd eps indd"],
      [VolumeHigh, "mp3 wav flac ogg oga m4a aac wma aiff aif opus mid midi"],
      [Play, "mp4 m4v mov avi mkv webm wmv flv mpg mpeg 3gp ogv"],
      [FolderZip, "zip rar 7z tar gz tgz bz2 xz zst lz cab"],
      [UsbFlashDrive, "iso img dmg vhd vmdk"],
      [Computer, "exe msi app apk ipa deb rpm appimage bin com"],
      [Server, "db sqlite sqlite3 mdb accdb sql dump"],
      [Console, "sh bash zsh fish ps1 psm1 bat cmd command"],
      [Cog, "ini cfg conf config env properties plist editorconfig"],
      [Lock, "lock lockb"],
      [Certificate, "pem crt cer der csr p7b p12 pfx"],
      [Key, "key pub gpg pgp asc kdbx"],
      [Email, "eml msg mbox emlx"],
      [Calendar, "ics ical ifb vcs"],
      [CardAccountDetails, "vcf vcard"],
      [Link, "url webloc lnk desktop"],
      [LanguageJavascript, "js mjs cjs"],
      [LanguageTypescript, "ts mts cts"],
      [LanguageJsx, "jsx tsx"],
      [LanguagePython, "py pyw pyi pyc whl"],
      [LanguageRust, "rs"],
      [LanguageGo, "go mod"],
      [LanguageJava, "java jar class war"],
      [LanguageC, "c h"],
      [LanguageCpp, "cpp cc cxx c++ hpp hh hxx"],
      [LanguageCsharp, "cs csx csproj sln"],
      [LanguagePhp, "php phtml"],
      [LanguageHtml5, "html htm xhtml"],
      [LanguageMarkdown, "md mdx markdown"],
      [Nix, "nix"],
      [Terraform, "tf tfvars hcl"],
      [
        DocumentCode,
        "json jsonc json5 xml yaml yml toml css scss sass less vue svelte astro rb swift kt kts scala dart lua pl r jl ex exs erl hs clj zig graphql gql proto wasm dockerfile makefile"
      ]
    ] as const
  ).flatMap(([icon, extensions]) =>
    extensions.split(" ").map(extension => [extension, icon])
  )
);

/**
 * Get the icon that represents a file extension.
 *
 * @param extension - A file extension (`"pdf"`, `".PDF"`), or a file name or path (`"docs/report.pdf"`, `"Dockerfile"`).
 * @returns The icon for the type of file, or the generic `File` icon when the extension is not recognized.
 */
export const getFileExtensionIcon = (extension: string): IconComponent => {
  const name = extension.trim().toLowerCase().split(/[/\\]/).pop() ?? "";

  return (
    FILE_EXTENSION_ICONS.get(name.slice(name.lastIndexOf(".") + 1)) ?? File
  );
};

const FileExtensionIconFrame = styled(View, {
  transition: "200ms",
  alignItems: "center",
  opacity: "enter:0 exit:0",
  scale: "enter:0.5 exit:0.5"
});

interface FileExtensionIconExtraProps {
  /**
   * A file extension (`"pdf"`, `".PDF"`), or a file name or path (`"docs/report.pdf"`).
   */
  extension: string;
}

type FileExtensionIconRenderProps = GetProps<typeof FileExtensionIconFrame> &
  Pick<IconProps, "color" | "size" | "variant" | "animated" | "mirrored"> &
  FileExtensionIconExtraProps;

export const getIconByFileExtension = ({
  extension,
  ...props
}: IconProps & FileExtensionIconExtraProps) => {
  const Icon = getFileExtensionIcon(extension);

  return <Icon {...props} />;
};

export const FileExtensionIcon = createStyledHOC(
  FileExtensionIconFrame,
  (
    {
      extension,
      color,
      size,
      variant = "regular",
      animated = false,
      mirrored = false,
      ...props
    }: FileExtensionIconRenderProps,
    forwardedRef
  ) => {
    return (
      <FileExtensionIconFrame ref={forwardedRef} {...props}>
        {getIconByFileExtension({
          extension,
          size,
          color,
          variant,
          animated,
          mirrored
        })}
      </FileExtensionIconFrame>
    );
  }
);

export type FileExtensionIconProps = GetProps<typeof FileExtensionIcon>;
