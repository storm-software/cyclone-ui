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

import { afterEach, expect, it, vi } from "vitest";
import { writeClipboard } from "./clipboard";

afterEach(() => vi.unstubAllGlobals());

it("writes an empty string rather than skipping it", async () => {
  const writeText = vi.fn().mockResolvedValue(undefined);
  vi.stubGlobal("navigator", { clipboard: { writeText } });
  await writeClipboard("");
  expect(writeText).toHaveBeenCalledWith("");
});

it("starts a promised clipboard write before fetched text resolves", async () => {
  let resolveText!: (text: string) => void;
  const text = new Promise<string>(resolve => {
    resolveText = resolve;
  });
  let item!: Record<string, Promise<Blob>>;
  vi.stubGlobal(
    "ClipboardItem",
    class {
      constructor(data: Record<string, Promise<Blob>>) {
        item = data;
      }
    }
  );
  const write = vi.fn().mockResolvedValue(undefined);
  vi.stubGlobal("navigator", { clipboard: { write } });
  const result = writeClipboard(text);
  expect(write).toHaveBeenCalledTimes(1);
  resolveText("# Page contents");
  await result;
  expect(await (await item["text/plain"]!).text()).toBe("# Page contents");
});

it("uses writeText when ClipboardItem is unavailable", async () => {
  vi.stubGlobal("ClipboardItem", undefined);
  const writeText = vi.fn().mockResolvedValue(undefined);
  vi.stubGlobal("navigator", { clipboard: { writeText } });
  await writeClipboard(Promise.resolve("Firefox"));
  expect(writeText).toHaveBeenCalledWith("Firefox");
});

it("propagates permission denial without reporting success", async () => {
  vi.stubGlobal("navigator", {
    clipboard: {
      writeText: vi.fn().mockRejectedValue(new Error("Permission denied"))
    }
  });
  await expect(writeClipboard("private")).rejects.toThrow("Permission denied");
});

it("removes the fallback textarea even if the browser throws", async () => {
  vi.stubGlobal("navigator", {});
  const remove = vi.fn();
  const textarea = { value: "", style: {}, select: vi.fn(), remove };
  vi.stubGlobal("document", {
    createElement: () => textarea,
    body: { append: vi.fn() },
    execCommand: () => {
      throw new Error("Copy rejected");
    }
  });
  await expect(writeClipboard("fallback")).rejects.toThrow("Copy rejected");
  expect(remove).toHaveBeenCalledOnce();
});

it("rejects a fallback that did not copy", async () => {
  vi.stubGlobal("navigator", {});
  vi.stubGlobal("document", {
    createElement: () => ({
      value: "",
      style: {},
      select: vi.fn(),
      remove: vi.fn()
    }),
    body: { append: vi.fn() },
    execCommand: () => false
  });
  await expect(writeClipboard("fallback")).rejects.toThrow("rejected");
});
