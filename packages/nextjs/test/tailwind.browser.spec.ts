import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";

// The fixture only layers Tamagui's CSS when built with CYCLONE_UI_TAILWIND=1.
test.skip(
  process.env.CYCLONE_UI_TAILWIND !== "1",
  "Run with CYCLONE_UI_TAILWIND=1 to build the fixture with `tailwind: true`."
);

const style = (page: Page, id: string, property: string) =>
  page
    .locator(`#${id}`)
    .evaluate(
      (element, name) => getComputedStyle(element).getPropertyValue(name),
      property
    );

// Cascade layer names in the order the browser first sees them.
const layerOrder = (page: Page) =>
  page.evaluate(() => {
    const order: string[] = [];
    const visit = (rules: CSSRuleList) => {
      for (const rule of Array.from(rules)) {
        const names =
          rule instanceof CSSLayerStatementRule
            ? Array.from(rule.nameList)
            : rule instanceof CSSLayerBlockRule
              ? [rule.name]
              : [];
        for (const name of names) {
          if (!order.includes(name)) order.push(name);
        }
        if ("cssRules" in rule) visit((rule as CSSGroupingRule).cssRules);
      }
    };
    for (const sheet of Array.from(document.styleSheets)) {
      visit(sheet.cssRules);
    }
    return order.filter(name =>
      ["theme", "base", "tamagui", "components", "utilities"].includes(name)
    );
  });

const expectLayeredCascade = async (page: Page) => {
  expect(await layerOrder(page)).toEqual([
    "theme",
    "base",
    "tamagui",
    "components",
    "utilities"
  ]);
  // A Tailwind utility on a styled component beats the component's padding.
  expect(await style(page, "default-frame", "padding-left")).toBe("10px");
  expect(await style(page, "override-frame", "padding-left")).toBe("53px");
  // Tailwind's preflight (`border: 0 solid`) doesn't reset Tamagui borders.
  expect(await style(page, "default-frame", "border-top-width")).toBe("3px");
};

test("server-rendered HTML layers Tamagui below Tailwind utilities", async ({
  browser,
  baseURL
}) => {
  const context = await browser.newContext({
    baseURL,
    javaScriptEnabled: false
  });
  const page = await context.newPage();
  await page.goto("/tailwind-probe");

  // React merges `precedence="default"` styles into one tag, which comes
  // before Next.js's stylesheet links; the layer order has to lead it.
  const html = await page.content();
  const layerOrderStatement = html.indexOf(
    "@layer theme, base, tamagui, components, utilities;"
  );
  expect(layerOrderStatement).toBeGreaterThan(-1);
  expect(layerOrderStatement).toBeLessThan(html.indexOf("@layer tamagui {"));
  expect(layerOrderStatement).toBeLessThan(html.indexOf('rel="stylesheet"'));
  await expectLayeredCascade(page);
  await context.close();
});

test("Tailwind classes follow Tamagui themes after hydration", async ({
  page
}) => {
  await page.goto("/tailwind-probe");
  await expect(
    page.getByRole("heading", { name: "Tailwind probe" })
  ).toBeVisible();
  await page.waitForLoadState("networkidle");
  await expectLayeredCascade(page);

  const background = (id: string) => style(page, id, "background-color");
  const light = await background("tamagui-primary");
  expect(await background("tw-primary")).toBe(light);
  expect(await background("tw-dark")).toBe(await background("tamagui-canvas"));
  // `<Theme name="danger">` changes the variable the class reads.
  expect(await background("tw-danger")).toBe(
    await background("tamagui-danger")
  );
  expect(await background("tw-danger")).not.toBe(light);
  // Cyclone token names: space for padding, size for height, and
  // Tailwind's own container scale for `max-w-lg`.
  expect(await style(page, "tw-tokens", "padding-top")).toBe("4px");
  expect(await style(page, "tw-tokens", "height")).toBe("12px");
  expect(await style(page, "tw-tokens", "max-width")).toBe("512px");

  await page.getByRole("button", { name: "Force dark" }).click();
  await expect.poll(() => background("tamagui-primary")).not.toBe(light);
  const dark = await background("tamagui-primary");
  expect(await background("tw-primary")).toBe(dark);
  // `dark:` follows Tamagui's theme class, not the OS preference.
  expect(await background("tw-dark")).toBe(dark);
});
