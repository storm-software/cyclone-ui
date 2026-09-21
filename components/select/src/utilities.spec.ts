import { describe, expect, it, vi } from "vitest";

vi.mock("@cyclone-ui/helpers", () => ({
  getSized: () => 42
}));

import { getSelectContentSize } from "./utilities";

describe("getSelectContentSize", () => {
  it("uses the small space token for option text vertical padding", () => {
    expect(getSelectContentSize("$10xl").itemTextPaddingVertical).toBe("$sm");
  });
});
