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

const SEP = "/";

export function dirname(filePath: string): string {
  const index = filePath.lastIndexOf(SEP);

  return index === -1 ? "." : filePath.slice(0, index) || "/";
}

export function basename(filePath: string, ext?: string): string {
  const base = filePath.split(SEP).pop() ?? "";
  if (ext && base.endsWith(ext)) {
    return base.slice(0, -ext.length);
  }

  return base;
}

export function extname(filePath: string): string {
  const base = basename(filePath);
  const index = base.lastIndexOf(".");

  return index > 0 ? base.slice(index) : "";
}

export function join(...parts: string[]): string {
  return parts.filter(Boolean).join(SEP).replace(/\/+/g, SEP);
}

export function isAbsolute(filePath: string): boolean {
  return filePath.startsWith(SEP) || /^[a-z]:[\\/]/i.test(filePath);
}

export function resolve(...parts: string[]): string {
  return join("/", ...parts);
}

export function relative(_from: string, to: string): string {
  return to;
}

export function normalize(filePath: string): string {
  return filePath.replace(/\\/g, SEP).replace(/\/+/g, SEP);
}

export function parse(filePath: string): {
  root: string;
  dir: string;
  base: string;
  ext: string;
  name: string;
} {
  const ext = extname(filePath);
  const base = basename(filePath);

  return {
    root: isAbsolute(filePath) ? SEP : "",
    dir: dirname(filePath),
    base,
    ext,
    name: basename(filePath, ext)
  };
}

export const sep = SEP;
export const delimiter = ":";
export const posix = {
  dirname,
  basename,
  extname,
  join,
  isAbsolute,
  resolve,
  relative,
  normalize,
  parse,
  sep,
  delimiter
};
export const win32 = posix;

export default {
  dirname,
  basename,
  extname,
  join,
  isAbsolute,
  resolve,
  relative,
  normalize,
  parse,
  sep,
  delimiter,
  posix,
  win32
};
