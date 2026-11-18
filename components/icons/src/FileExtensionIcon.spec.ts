import { expect, it } from "vitest";
import { getFileExtensionIcon } from "./FileExtensionIcon";
import { DocumentCode } from "./icons/DocumentCode";
import { File } from "./icons/File";
import { FileDocument } from "./icons/FileDocument";
import { LanguageTypescript } from "./icons/LanguageTypescript";

it("maps extensions, file names and paths to file type icons", () => {
  expect(getFileExtensionIcon("pdf")).toBe(FileDocument);
  expect(getFileExtensionIcon(".PDF")).toBe(FileDocument);
  expect(getFileExtensionIcon("src/index.ts")).toBe(LanguageTypescript);
  expect(getFileExtensionIcon("C:\\repo\\Dockerfile")).toBe(DocumentCode);
  expect(getFileExtensionIcon("unknown")).toBe(File);
  expect(getFileExtensionIcon("")).toBe(File);
  expect(getFileExtensionIcon("constructor")).toBe(File);
});
