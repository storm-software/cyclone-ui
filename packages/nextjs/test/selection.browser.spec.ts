import { expect, test } from "@playwright/test";

test("selected text uses the theme's primary colors", async ({ page }) => {
  await page.goto("/second");
  const colors = await page.getByTestId("second-page").evaluate(element => {
    const style = getComputedStyle(element);
    const selection = getComputedStyle(element, "::selection");

    return {
      expected: [
        style.getPropertyValue("--primary").trim(),
        style.getPropertyValue("--on-primary").trim()
      ],
      selection: [selection.backgroundColor, selection.color]
    };
  });

  expect(colors.expected.every(Boolean)).toBe(true);
  // Resolve the variables the same way the browser resolves `::selection`.
  const resolved = await page.evaluate(([background, color]) => {
    const probe = document.createElement("div");
    probe.style.backgroundColor = background!;
    probe.style.color = color!;
    document.body.append(probe);
    const { backgroundColor, color: resolvedColor } = getComputedStyle(probe);
    probe.remove();

    return [backgroundColor, resolvedColor];
  }, colors.expected);
  expect(colors.selection).toEqual(resolved);
});
