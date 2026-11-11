import { expect, test } from "@playwright/test";

for (const placement of ["nested", "standalone"]) {
  test(`Next Link navigates from a Server Component ${placement} without reloading`, async ({
    page
  }) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto("/link-probe");
    const plain = page.getByRole("link", {
      name: `Plain ${placement}`,
      exact: true
    });
    const rendered = page.getByRole("link", {
      name: `Rendered ${placement}`,
      exact: true
    });
    await expect(plain).toHaveAttribute("href", "/second");
    await expect(rendered).toHaveAttribute("href", "/second");
    const styles = (element: HTMLElement) => {
      const style = getComputedStyle(element);
      return [
        style.color,
        style.fontSize,
        style.fontWeight,
        style.textDecorationLine,
        style.cursor
      ];
    };
    await expect(rendered).toBeVisible();
    expect(await rendered.evaluate(styles)).toEqual(
      await plain.evaluate(styles)
    );
    // A full browser navigation creates a new document and loses this marker.
    await page.evaluate(() => {
      document.documentElement.dataset.linkProbe = "preserved";
    });
    await rendered.click();
    await expect(page).toHaveURL(/\/second$/);
    await expect(page.getByTestId("second-page")).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute(
      "data-link-probe",
      "preserved"
    );
    expect(errors).toEqual([]);
  });
}
