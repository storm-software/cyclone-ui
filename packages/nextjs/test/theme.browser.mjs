import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { chromium } from "playwright";

// Check the build artifact, not a completed dynamic response.
const shell = await readFile(
  new URL("./fixture/.next/server/app/index.html", import.meta.url),
  "utf8"
);
for (const content of [
  "Static shell",
  "Loading request content",
  "localStorage",
  "react-native-stylesheet",
  "tamagui-css"
]) {
  assert.ok(shell.includes(content), `Missing from static shell: ${content}`);
}
assert.ok(!shell.includes("Request content"));

const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_PATH
    ? { executablePath: process.env.CHROMIUM_PATH }
    : {})
});
try {
  const page = await browser.newPage({ colorScheme: "light" });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.addInitScript(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "dark");
  });
  const url = process.env.TEST_URL || "http://localhost:3197";
  await page.goto(url);
  async function expectMode(mode) {
    await page.waitForFunction(
      expected =>
        document.querySelector("#mode")?.textContent === expected &&
        document.querySelector("#late-mode")?.textContent === expected &&
        document.documentElement.classList.contains(`t_${expected}`) &&
        document.documentElement.style.colorScheme === expected &&
        !document.documentElement.classList.contains(
          `t_${expected === "dark" ? "light" : "dark"}`
        ),
      mode
    );
    assert.match(
      await page.evaluate(() => document.cookie),
      new RegExp(`mode=${mode}`)
    );
  }
  await expectMode("dark");
  const background = () =>
    page
      .locator("#mode")
      .evaluate(
        element => getComputedStyle(element.parentElement).backgroundColor
      );
  const darkBackground = await background();
  for (const mode of ["light", "dark"]) {
    await page
      .getByRole("button", {
        name: mode === "light" ? "Light" : "Dark",
        exact: true
      })
      .first()
      .click();
    await expectMode(mode);
    if (mode === "light") assert.notEqual(await background(), darkBackground);
    else assert.equal(await background(), darkBackground);
    await page.reload();
    await expectMode(mode);
  }
  await page
    .getByRole("button", { name: "Force light", exact: true })
    .first()
    .click();
  await expectMode("light");
  await page.getByRole("button", { name: "Dark", exact: true }).first().click();
  await expectMode("light");
  await page
    .getByRole("button", { name: "Force dark", exact: true })
    .first()
    .click();
  await expectMode("dark");
  await page
    .getByRole("button", { name: "Release theme", exact: true })
    .first()
    .click();
  await page
    .getByRole("button", { name: "System", exact: true })
    .first()
    .click();
  await expectMode("light");
  await page.emulateMedia({ colorScheme: "dark" });
  await expectMode("dark");
  await page.getByRole("link", { name: "Second page" }).click();
  await page.waitForURL("**/second");
  await expectMode("dark");
  await page
    .getByRole("button", { name: "Disable browser color scheme" })
    .click();
  await page.evaluate(() => {
    document.documentElement.style.colorScheme = "";
  });
  await page
    .getByRole("button", { name: "Light", exact: true })
    .first()
    .click();
  await page.waitForFunction(
    () => document.querySelector("#mode")?.textContent === "light"
  );
  assert.equal(
    await page.evaluate(() => document.documentElement.style.colorScheme),
    ""
  );
  assert.deepEqual(errors, []);
  // Block hydration bundles: the inline script and SSR CSS must style the shell.
  const beforeHydration = await browser.newPage({ colorScheme: "light" });
  await beforeHydration.addInitScript(() =>
    localStorage.setItem("theme", "dark")
  );
  await beforeHydration.route("**/*.js*", route => route.abort());
  await beforeHydration.goto(url, { waitUntil: "domcontentloaded" });
  assert.equal(await beforeHydration.locator("#mode").textContent(), "");
  assert.equal(
    await beforeHydration
      .locator("#mode")
      .evaluate(
        element => getComputedStyle(element.parentElement).backgroundColor
      ),
    darkBackground
  );
  await beforeHydration.close();
  console.log(
    "PASS: persisted modes, toggles, forced themes, system changes, cookies, hydration"
  );
} finally {
  await browser.close();
}
