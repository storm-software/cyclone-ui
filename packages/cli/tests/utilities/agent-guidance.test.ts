import { renderLlmsIndex } from "@razorwind/llms";
import razorwind from "@razorwind/shell-shock/plugin";
import { getGuidelines } from "@razorwind/shell-shock/runtime";
import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import "../../shell-shock.config";
import { metadata as addMetadata } from "../../src/commands/add/command";
import { metadata as docsMetadata } from "../../src/commands/docs/command";
import { metadata as initMetadata } from "../../src/commands/init/command";
import { metadata as updateMetadata } from "../../src/commands/update-components/command";
import { metadata as viewMetadata } from "../../src/commands/view/command";
import {
  COMPONENT_PROTECTION_INSTRUCTIONS,
  COMPONENT_PROTECTION_RULE,
  componentProtectionGuideline
} from "../../src/utilities/agent-guidance";

vi.mock("shell-shock:console", () => ({
  success: vi.fn(),
  write: vi.fn()
}));
vi.mock("@razorwind/shell-shock", () => ({
  paletteToTheme: vi.fn(),
  selectThemeTokens: vi.fn()
}));
vi.mock("@razorwind/shell-shock/plugin", () => ({ default: vi.fn() }));
vi.mock("@shell-shock/core/config", () => ({
  defineConfig: vi.fn(config => config)
}));
vi.mock("@shell-shock/preset-cli", () => ({ default: vi.fn() }));

describe("component protection guidance", () => {
  it("returns the protection rule through the CLI/MCP guidelines renderer", () => {
    const output = getGuidelines({
      spec: {
        name: "cyclone-ui",
        components: {},
        icons: {},
        fonts: {},
        tokens: {}
      },
      guidelines: [componentProtectionGuideline]
    });

    expect(output).toContain(COMPONENT_PROTECTION_INSTRUCTIONS);
  });

  it("supports the AI documentation generator's details field", () => {
    const output = renderLlmsIndex(
      {
        name: "cyclone-ui",
        components: {},
        icons: {},
        fonts: {},
        tokens: {}
      },
      { details: COMPONENT_PROTECTION_INSTRUCTIONS }
    );

    expect(output).toContain(COMPONENT_PROTECTION_INSTRUCTIONS);
  });

  it("registers the shared guideline with the CLI's design-system plugin", () => {
    expect(razorwind).toHaveBeenCalledWith(
      expect.objectContaining({ guidelines: [componentProtectionGuideline] })
    );
    expect(componentProtectionGuideline.content).toContain(
      COMPONENT_PROTECTION_INSTRUCTIONS
    );
  });

  it.each([
    addMetadata,
    docsMetadata,
    initMetadata,
    updateMetadata,
    viewMetadata
  ])("includes the rule in $title command metadata", metadata => {
    expect(metadata.description).toContain(COMPONENT_PROTECTION_RULE);
  });

  it.each(["setup", "nextjs", "vite"])(
    "keeps the reusable cyclone-ui-%s skill aligned with CLI guidance",
    async skill => {
      const content = await readFile(
        new URL(
          `../../../../skills/cyclone-ui-${skill}/SKILL.md`,
          import.meta.url
        ),
        "utf8"
      );

      expect(content).toContain(
        COMPONENT_PROTECTION_INSTRUCTIONS.split(". ")[0]
      );
      expect(content).toContain("components.json");
      expect(content).toContain("wrappers");
      expect(content).toContain("local edits");
    }
  );
});
