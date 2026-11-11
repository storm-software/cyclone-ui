import { instant } from "@next/playwright";
import { expect, test } from "@playwright/test";

test("labeled controls are in the static shell without hydration", async ({
  page,
  baseURL
}) => {
  await instant(
    page,
    async () => {
      await page.goto("/controls-probe", { waitUntil: "domcontentloaded" });
      // Select and RadioGroup stream behind their own Suspense boundaries;
      // the shell holds their native fallbacks.
      for (const label of [
        "Email",
        "Password",
        "Name",
        "Message",
        "Plan",
        "By email"
      ]) {
        await expect(page.getByLabel(label, { exact: true })).toBeVisible();
      }
    },
    { baseURL }
  );
});

test("controls support typing, named dialogs, and composed navigation", async ({
  page
}) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (
      message.type() === "error" ||
      /non-boolean attribute.*group/s.test(message.text())
    )
      errors.push(message.text());
  });
  await page.goto("/controls-probe");
  const email = page.getByLabel("Email", { exact: true });
  await email.fill("test@example.com");
  await expect(email).toHaveValue("test@example.com");
  const password = page.getByLabel("Password", { exact: true });
  await password.fill("secret123");
  await password.blur();
  await expect(password).toHaveAttribute("type", "password");
  await expect(password).toHaveValue("secret123");
  await page.getByLabel("Name", { exact: true }).fill("Test user");
  await page.getByLabel("Message", { exact: true }).fill("Hello team");
  await expect(email).toHaveValue("test@example.com");
  await page.getByRole("button", { name: "Open drawer" }).click();
  const drawer = page.getByRole("dialog", {
    name: "Contact team",
    exact: true
  });
  await expect(drawer).toBeVisible();
  await expect(drawer).toHaveAccessibleDescription(
    "Send a message to the team"
  );
  await expect(page.getByRole("dialog")).toHaveCount(1);
  await page.keyboard.press("Escape");
  await expect(drawer).toBeHidden();
  await page.getByRole("button", { name: "Open drawer" }).click();
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await expect(drawer).toBeHidden();
  await page.evaluate(() => {
    (window as any).__navigationMarker = true;
  });
  await page.getByRole("link", { name: "Footer destination" }).click();
  await expect(page).toHaveURL("/second");
  expect(await page.evaluate(() => (window as any).__navigationMarker)).toBe(
    true
  );
  expect(errors).toEqual([]);
});

test("mobile controls stay usable across drawer open and close", async ({
  page
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/controls-probe");
  const email = page.getByLabel("Email", { exact: true });
  await email.fill("mobile@example.com");
  await page.getByRole("button", { name: "Open drawer" }).click();
  const drawer = page.getByRole("dialog", {
    name: "Contact team",
    exact: true
  });
  await expect(drawer).toBeVisible();
  await expect
    .poll(async () => {
      const box = await drawer.boundingBox();
      return box && box.x >= 0 && box.x + box.width <= 391;
    })
    .toBe(true);
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await expect(drawer).toBeHidden();
  await expect(email).toHaveValue("mobile@example.com");
});
