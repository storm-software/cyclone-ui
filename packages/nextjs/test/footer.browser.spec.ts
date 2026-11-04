import { expect, test } from "@playwright/test";

test("footer links render without invalid boolean group attributes", async ({ page }) => {
  const groupWarnings: string[] = [];
  page.on("console", message => {
    if (/non-boolean attribute.*group/s.test(message.text())) {
      groupWarnings.push(message.text());
    }
  });

  await page.goto("/footer-probe");
  for (const name of [
    "Plain footer link",
    "Composed footer link",
    "Legal footer link"
  ]) {
    const link = page.getByRole("link", { name, exact: true });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", "/second");
    await expect(link).not.toHaveAttribute("group");
  }
  expect(groupWarnings).toEqual([]);
});
