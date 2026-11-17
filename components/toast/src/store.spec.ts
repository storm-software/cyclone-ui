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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createToastStore, TOAST_TIMING } from "./store";

const OPEN = TOAST_TIMING.openDelay;
const GONE = TOAST_TIMING.closing + TOAST_TIMING.exit;

describe("createToastStore", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("morphs the toast on screen instead of stacking a new one", () => {
    const store = createToastStore();
    const first = store.loading("Saving…");
    const second = store.success("Saved");

    expect(second).not.toBe(first);
    expect(store.getState().toasts).toMatchObject([
      { type: "success", title: "Saved", duration: TOAST_TIMING.duration }
    ]);
  });

  it("counts a repeat of the newest toast", () => {
    const store = createToastStore();
    store.info("Copied");
    store.info("Copied");

    expect(store.getState().toasts).toMatchObject([{ count: 2 }]);
  });

  it("counts a repeat of a toast that morphed in place", () => {
    const store = createToastStore();
    store.success("Saved");
    store.info("Copied");
    store.info("Copied");

    expect(store.getState().toasts).toMatchObject([
      { title: "Copied", count: 2 }
    ]);
  });

  it("opens quick toasts beside a held one in list mode", () => {
    const store = createToastStore();
    store.error("Payment failed");
    store.success("Saved");

    expect(store.getState().toasts.map(item => item.type)).toEqual([
      "error",
      "success"
    ]);
  });

  it("shows queued toasts once the held one is gone", () => {
    const store = createToastStore();
    store.configure({ held: "queue" });
    const error = store.error("Payment failed");
    store.success("Saved");
    vi.advanceTimersByTime(OPEN);

    expect(store.getState().toasts).toHaveLength(1);

    store.dismiss(error);
    vi.advanceTimersByTime(GONE);

    expect(store.getState().toasts).toMatchObject([{ title: "Saved" }]);
  });

  it("only lets the newest caller update the shared toast", () => {
    const store = createToastStore();
    const stale = store.loading("Uploading…");
    store.info("New version available");
    store.update(stale, { type: "success", title: "Uploaded" });

    expect(store.getState().toasts).toMatchObject([
      { title: "New version available" }
    ]);
  });

  it("closes after its duration unless paused", () => {
    const store = createToastStore();
    store.success("Saved");
    vi.advanceTimersByTime(OPEN);
    store.pause();
    vi.advanceTimersByTime(TOAST_TIMING.duration + GONE);

    expect(store.getState().toasts).toHaveLength(1);

    store.resume();
    vi.advanceTimersByTime(TOAST_TIMING.duration + GONE);

    expect(store.getState().toasts).toHaveLength(0);
  });

  it("morphs a loading toast into the promise's result", async () => {
    const store = createToastStore();
    await store.promise(Promise.resolve(3), {
      loading: "Saving…",
      success: count => `Saved ${count} files`,
      error: "Could not save"
    });

    expect(store.getState().toasts).toMatchObject([
      { type: "success", title: "Saved 3 files" }
    ]);
  });

  it("morphs on an action's patch and closes otherwise", () => {
    const store = createToastStore();
    store.success("Message deleted", {
      action: {
        label: "Undo",
        onClick: () => ({ type: "info", title: "Restored" })
      }
    });
    const [deleted] = store.getState().toasts;
    store.act(deleted!.id);

    expect(store.getState().toasts).toMatchObject([
      { type: "info", title: "Restored", action: undefined }
    ]);

    store.warning("Storage almost full", {
      action: { label: "Manage", onClick: () => undefined }
    });
    const [warning] = store.getState().toasts;
    vi.advanceTimersByTime(OPEN);
    store.act(warning!.id);

    expect(store.getState().toasts[0]?.phase).toBe("closing");
  });
});
