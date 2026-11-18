import { instant } from "@next/playwright";
import { expect, test } from "@playwright/test";

test("default link prefetch prepares the shared shell and defers URL results", async ({
  page
}) => {
  await page.goto("/");
  await instant(page, async () => {
    await page
      .getByRole("link", { name: "Default prefetch", exact: true })
      .click();
    await expect(page).toHaveURL("/search?q=default");
    await expect(
      page.getByRole("heading", { name: "Search shell" })
    ).toBeVisible();
    await expect(
      page.getByText("Loading results", { exact: true })
    ).toBeVisible();
    await expect(page.getByTestId("search-results")).toHaveCount(0);
    await expect(page.getByTestId("search-request")).toHaveCount(0);
  });
  await expect(page.getByTestId("search-results")).toHaveText(
    "Results for default"
  );
  await expect(page.getByTestId("search-request")).toBeVisible();
});

test("opt-in link prefetch includes cached URL results and defers fresh content", async ({
  page
}) => {
  await page.goto("/");
  await instant(page, async () => {
    await page
      .getByRole("link", { name: "Prefetch results", exact: true })
      .click();
    await expect(page).toHaveURL("/search?q=prefetched");
    await expect(
      page.getByRole("heading", { name: "Search shell" })
    ).toBeVisible();
    await expect(page.getByTestId("search-results")).toHaveText(
      "Results for prefetched"
    );
    await expect(page.getByTestId("search-request")).toHaveCount(0);
  });
  await expect(page.getByTestId("search-request")).toBeVisible();
});
