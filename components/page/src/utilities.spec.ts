import { describe, expect, it } from "vitest";
import {
  clampPageWidth,
  getDraggedWidth,
  getKeyboardResizedWidth,
  getPanelWidthBounds,
  getSideNavWidthBounds,
  isSideNavShortcut,
  resolvePageWidth,
  sortSkipLinks
} from "./utilities";

describe("resolvePageWidth", () => {
  it("passes pixel numbers through", () => {
    expect(resolvePageWidth(320, 1440)).toBe(320);
  });

  it("parses px strings", () => {
    expect(resolvePageWidth("280px", 1440)).toBe(280);
  });

  it("resolves vw strings against the viewport", () => {
    expect(resolvePageWidth("50vw", 1440)).toBe(720);
  });
});

describe("clampPageWidth", () => {
  it("keeps widths inside the bounds and rounds them", () => {
    expect(clampPageWidth(300.4, { min: 240, max: 720 })).toBe(300);
    expect(clampPageWidth(100, { min: 240, max: 720 })).toBe(240);
    expect(clampPageWidth(900, { min: 240, max: 720 })).toBe(720);
  });

  it("prefers the minimum when the maximum is smaller", () => {
    expect(clampPageWidth(300, { min: 240, max: 200 })).toBe(240);
  });
});

describe("getSideNavWidthBounds", () => {
  it("defaults to 240px up to half of the viewport", () => {
    expect(getSideNavWidthBounds(1280, 240, "50vw")).toEqual({
      min: 240,
      max: 640
    });
  });
});

describe("getPanelWidthBounds", () => {
  it("uses the default width as the minimum", () => {
    expect(getPanelWidthBounds(1440, 320, 365).min).toBe(365);
  });

  it("caps the minimum at 400px", () => {
    expect(getPanelWidthBounds(1440, 320, 600).min).toBe(400);
  });

  it("allows half of the content area beside the side nav", () => {
    expect(getPanelWidthBounds(1440, 320, 365).max).toBe(560);
    expect(getPanelWidthBounds(1440, 0, 365).max).toBe(720);
  });

  it("honors an explicit maximum", () => {
    expect(getPanelWidthBounds(1440, 320, 365, "600px").max).toBe(600);
  });
});

describe("getDraggedWidth", () => {
  it("grows end-edge areas when dragged right", () => {
    expect(getDraggedWidth(320, 40, "end")).toBe(360);
  });

  it("grows start-edge areas when dragged left", () => {
    expect(getDraggedWidth(365, -40, "start")).toBe(405);
  });
});

describe("getKeyboardResizedWidth", () => {
  const bounds = { min: 240, max: 720 };

  it("maps arrow keys to the edge direction", () => {
    expect(getKeyboardResizedWidth(320, "ArrowRight", "end", bounds)).toBe(336);
    expect(getKeyboardResizedWidth(320, "ArrowLeft", "end", bounds)).toBe(304);
    expect(getKeyboardResizedWidth(320, "ArrowLeft", "start", bounds)).toBe(
      336
    );
  });

  it("jumps to the bounds with Home and End", () => {
    expect(getKeyboardResizedWidth(320, "Home", "end", bounds)).toBe(240);
    expect(getKeyboardResizedWidth(320, "End", "end", bounds)).toBe(720);
  });

  it("ignores other keys", () => {
    expect(getKeyboardResizedWidth(320, "Enter", "end", bounds)).toBe(
      undefined
    );
  });
});

describe("isSideNavShortcut", () => {
  const event = {
    key: "[",
    ctrlKey: true,
    metaKey: false,
    altKey: false,
    shiftKey: false
  };

  it("matches Ctrl + [", () => {
    expect(isSideNavShortcut(event)).toBe(true);
  });

  it("rejects other modifiers", () => {
    expect(isSideNavShortcut({ ...event, ctrlKey: false })).toBe(false);
    expect(isSideNavShortcut({ ...event, metaKey: true })).toBe(false);
    expect(isSideNavShortcut({ ...event, shiftKey: true })).toBe(false);
  });
});

describe("sortSkipLinks", () => {
  it("orders by index, then registration order", () => {
    expect(
      sortSkipLinks([
        { id: "panel", label: "Panel", index: 2, order: 0 },
        { id: "custom", label: "Custom", index: 2, order: 3 },
        { id: "main", label: "Main content", index: 0, order: 1 }
      ]).map(link => link.id)
    ).toEqual(["main", "panel", "custom"]);
  });
});
