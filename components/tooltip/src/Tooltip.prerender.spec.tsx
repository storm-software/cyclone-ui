import { createTamagui, TamaguiProvider } from "@tamagui/core";
import { renderToString } from "react-dom/server";
import { afterEach, expect, it, vi } from "vitest";
import { Tooltip } from "./Tooltip";

// Surface painting is unrelated to the closed tooltip's Popper contexts.
vi.mock("@cyclone-ui/container", () => ({
  ContainerBackground: () => null,
  containerShadows: { raised: "none" },
  containerVariants: { tertiary: {} }
}));

const config = createTamagui({
  tokens: {},
  themes: { light: {} }
});

afterEach(() => vi.restoreAllMocks());

it("keeps tooltip randomness inside its streaming boundary during prerender", () => {
  // Next.js interrupts prerender when a Client Component reads randomness.
  // Install the guard after imports/configuration to cover render-time reads.
  const random = vi.spyOn(Math, "random").mockImplementation(() => {
    throw new Error("Prerender cannot read Math.random()");
  });

  const html = renderToString(
    <TamaguiProvider config={config} defaultTheme="light">
      <header>
        <a href="/">Home</a>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <button>Menu</button>
          </Tooltip.Trigger>
          <Tooltip.Content>Open menu</Tooltip.Content>
        </Tooltip>
      </header>
    </TamaguiProvider>
  );

  expect(html).toContain('href="/"');
  expect(html).toContain("Home</a>");
  // The failed prerender belongs to the tooltip's boundary, not its parent.
  expect(random).toHaveBeenCalled();
  expect(html).not.toContain("Menu</button>");
  expect(html).toContain("<!--$!-->");
});

it("renders the trigger during ordinary SSR", () => {
  const html = renderToString(
    <TamaguiProvider config={config} defaultTheme="light">
      <Tooltip>
        <Tooltip.Trigger asChild>
          <button>Menu</button>
        </Tooltip.Trigger>
      </Tooltip>
    </TamaguiProvider>
  );

  expect(html).toContain("Menu</button>");
  expect(html).not.toContain("<!--$!-->");
});
