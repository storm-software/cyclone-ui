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

export const writeClipboard = async (text: string | Promise<string>) => {
  const clipboard =
    typeof navigator === "undefined" ? undefined : navigator.clipboard;
  // Start the write during the press, before a fetch loses Safari's user activation.
  if (
    typeof text !== "string" &&
    clipboard?.write &&
    typeof ClipboardItem !== "undefined"
  ) {
    await clipboard.write([
      new ClipboardItem({
        "text/plain": text.then(
          value => new Blob([value], { type: "text/plain" })
        )
      })
    ]);
    return;
  }

  const value = await text;
  if (clipboard?.writeText) {
    await clipboard.writeText(value);
    return;
  }

  if (typeof document === "undefined") {
    throw new TypeError(
      "Clipboard access is not available in this environment."
    );
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  try {
    textarea.select();
    if (!document.execCommand("copy")) {
      throw new Error("The browser rejected the clipboard operation.");
    }
  } finally {
    textarea.remove();
  }
};
