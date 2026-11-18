import { instant } from "@next/playwright";
import { expect, test } from "@playwright/test";
import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { promisify } from "node:util";

test("initial load keeps the styled shell while request content waits", async ({
  page,
  baseURL
}) => {
  await instant(
    page,
    async () => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await expect(
        page.getByRole("heading", { name: "Static shell" })
      ).toBeVisible();
      await expect(
        page.getByText("Loading request content", { exact: true })
      ).toBeVisible();
      await expect(
        page.getByText("Request content", { exact: true })
      ).toHaveCount(0);
    },
    { baseURL }
  );
  await expect(
    page.getByText("Request content", { exact: true })
  ).toBeVisible();
});

test("client navigation keeps the shell while request content waits", async ({
  page
}) => {
  await page.goto("/");
  await instant(page, async () => {
    await page.getByRole("link", { name: "Second page", exact: true }).click();
    await expect(page).toHaveURL("/second");
    const destination = page.getByTestId("second-page");
    await expect(
      destination.getByRole("heading", { name: "Static shell" })
    ).toBeVisible();
    await expect(
      destination.getByText("Loading request content", { exact: true })
    ).toBeVisible();
    await expect(
      destination.getByText("Request content", { exact: true })
    ).toHaveCount(0);
  });
  await expect(
    page
      .getByTestId("second-page")
      .getByText("Request content", { exact: true })
  ).toBeVisible();
});

test("themes persist through hydration, streaming and client navigation", async ({
  baseURL
}) => {
  const { stdout } = await promisify(execFile)(
    process.execPath,
    ["test/theme.browser.mjs"],
    {
      env: { ...process.env, TEST_URL: baseURL }
    }
  );
  expect(stdout).toContain("PASS: persisted modes");
});

test("server components compose flat client slots and cached helpers", async ({
  page,
  baseURL
}) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.addInitScript(() => localStorage.setItem("theme", "dark"));
  await instant(
    page,
    async () => {
      await page.goto("/composition", { waitUntil: "domcontentloaded" });
      await expect(
        page.getByRole("heading", { name: "Server composed shell" })
      ).toBeVisible();
      await expect(
        page.getByText("Server composed navigation", { exact: true })
      ).toBeVisible();
      await expect(
        page.getByText("Cached server value: 25%", { exact: true })
      ).toBeVisible();
      await expect(
        page.getByText("Server composed footer", { exact: true })
      ).toBeVisible();
      await expect(
        page.getByLabel("Loading chart").locator("rect")
      ).toHaveCount(4);
      await expect(page.getByLabel("Loading chart")).toHaveAttribute(
        "data-hydrated",
        "true"
      );
      await expect(page.getByTestId("composition-request")).toHaveCount(0);
      await page.screenshot({
        path: test.info().outputPath("composed-shell.png"),
        fullPage: true
      });
    },
    { baseURL }
  );
  await expect(page.getByTestId("composition-request")).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/t_dark/);
  await expect(
    page.getByRole("heading", { name: "Server composed shell" })
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("client input and focus survive the normal request-content stream", async ({
  page
}) => {
  await page.goto("/composition", { waitUntil: "commit" });
  await expect(page.getByLabel("Loading chart")).toHaveAttribute(
    "data-hydrated",
    "true"
  );
  await expect(page.getByTestId("composition-request")).toHaveCount(0);
  const input = page.getByRole("textbox", { name: "Shell note" });
  await input.fill("Keep my input");
  await expect(page.getByTestId("composition-request")).toBeVisible();
  await expect(input).toHaveValue("Keep my input");
  await expect(input).toBeFocused();
});

test("the current-date calendar streams behind its own loading boundary", async ({
  page,
  baseURL
}) => {
  const shell = await readFile(
    new URL("./fixture/.next/server/app/calendar-probe.html", import.meta.url),
    "utf8"
  );
  expect(shell).toContain("Loading calendar");
  await instant(
    page,
    async () => {
      await page.goto("/calendar-probe", { waitUntil: "domcontentloaded" });
      const destination = page.getByTestId("calendar-page");
      await expect(
        destination.getByRole("heading", { name: "Calendar shell" })
      ).toBeVisible();
      // The browser can resolve a client-only clock without waiting for server
      // data. Its prerender fallback is asserted in the build artifact above.
    },
    { baseURL }
  );
  const destination = page.getByTestId("calendar-page");
  await expect(
    destination.getByRole("status", { name: "Loading calendar" })
  ).toHaveCount(0);
  await expect(destination.getByRole("button").first()).toBeVisible();
});

test.describe("mobile composition", () => {
  test.use({ viewport: { width: 390, height: 844 } });
  test("flat slots preserve their shell on narrow screens", async ({
    page,
    baseURL
  }) => {
    await instant(
      page,
      async () => {
        await page.goto("/composition", { waitUntil: "domcontentloaded" });
        await expect(
          page.getByRole("heading", { name: "Server composed shell" })
        ).toBeVisible();
        await expect(
          page.getByText("Cached server value: 25%", { exact: true })
        ).toBeVisible();
        await expect(page.getByTestId("composition-request")).toHaveCount(0);
      },
      { baseURL }
    );
    await expect(page.getByTestId("composition-request")).toBeVisible();
  });
});

test("loading and loaded charts prerender and hydrate without clock or random mismatches", async ({
  page
}) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/charts-probe");
  await expect(
    page.getByRole("heading", { name: "Charts shell" })
  ).toBeVisible();
  await expect(page.locator(".recharts-surface")).toHaveCount(4);
  for (const surface of await page.locator(".recharts-surface").all()) {
    await expect(
      surface.locator(".recharts-bar-rectangle").first()
    ).toBeVisible();
  }
  expect(errors).toEqual([]);
});
