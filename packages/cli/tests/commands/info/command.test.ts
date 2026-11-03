import { write, writeLine } from "shell-shock:console";
import { beforeEach, describe, expect, it, vi } from "vitest";
import handler from "../../../src/commands/info/command";
import { readConfig } from "../../../src/utilities/config";

vi.mock("shell-shock:console", () => ({ write: vi.fn(), writeLine: vi.fn() }));
vi.mock("../../../src/utilities/config", () => ({
  CONFIG_FILE: "components.json",
  readConfig: vi.fn()
}));

describe("project information agent guidance", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(readConfig).mockResolvedValue(null);
  });

  it("includes component protection in machine-readable output", async () => {
    await handler({ json: true });

    const output = JSON.parse(vi.mocked(write).mock.calls[0]![0] as string);
    expect(output.agentInstructions).toContain(
      "Do not change installed or added Cyclone UI component files unless the user specifically instructs you to do so."
    );
    expect(output.agentInstructions).toContain("components.json");
    expect(output.agentInstructions).toContain("wrappers");
    expect(output.agentInstructions).toContain("--overwrite");
  });

  it("includes component protection in human-readable output", async () => {
    await handler({});

    expect(writeLine).toHaveBeenCalledWith(
      expect.stringContaining(
        "Do not change installed or added Cyclone UI component files unless the user specifically instructs you to do so."
      )
    );
  });
});
