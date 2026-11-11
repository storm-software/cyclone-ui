import type { Page } from "@playwright/test";
import { expect, test } from "@playwright/test";

const email = (page: Page) => page.getByLabel("Email", { exact: true });
const submit = (page: Page) => page.getByRole("button", { name: "Sign up" });

/** Collects the form posts (server action requests) the page makes. */
const recordPosts = (page: Page) => {
  const posts: string[] = [];
  page.on("request", request => {
    if (request.method() === "POST") {
      posts.push(request.url());
    }
  });

  return posts;
};

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("the browser blocks a submit with an empty required field", async ({
    page
  }) => {
    const posts = recordPosts(page);
    await page.goto("/action-probe");
    await submit(page).click();
    // Give a (wrongly allowed) submission time to start.
    await page.waitForTimeout(500);

    expect(posts).toEqual([]);
    await expect(page.getByRole("status")).toHaveCount(0);
  });

  test("a server action's errors and result render in the page", async ({
    page
  }) => {
    await page.goto("/action-probe");
    await email(page).fill("taken@example.com");
    await page.getByLabel("Plan").selectOption("pro");
    await page.getByLabel("By phone").check();
    await submit(page).click();

    await expect(
      page.getByText("This email is already registered")
    ).toBeVisible();
    await expect(email(page)).toHaveValue("taken@example.com");
    await expect(email(page)).toHaveAttribute("aria-invalid", "true");

    await email(page).fill("new@example.com");
    await submit(page).click();

    await expect(page.getByRole("status")).toHaveText(
      "Signed up new@example.com for pro by phone"
    );
  });
});

test.describe("with JavaScript", () => {
  const hydrate = async (page: Page) => {
    await page.goto("/action-probe");
    // The form turns off the browser's validation once it has hydrated.
    await expect(page.locator("form#signup")).toHaveAttribute("novalidate", "");
  };

  test("submitting shows every field's errors without sending", async ({
    page
  }) => {
    const posts = recordPosts(page);
    await hydrate(page);
    await submit(page).click();

    await expect(page.getByText("This field is required")).toHaveCount(3);
    await expect(email(page)).toBeFocused();
    await expect(email(page)).toHaveAttribute("aria-invalid", "true");
    expect(posts).toEqual([]);
  });

  test("the server action's errors show, and clear when edited", async ({
    page
  }) => {
    await hydrate(page);
    await email(page).fill("taken@example.com");
    // The resting floating label covers the trigger, as a user sees it.
    await page.locator("#plan-label").click();
    await page.getByRole("option", { name: "Pro" }).click();
    await page.getByText("By phone").click();
    await submit(page).click();

    await expect(
      page.getByText("This email is already registered")
    ).toBeVisible();

    await email(page).fill("new@example.com");
    await expect(
      page.getByText("This email is already registered")
    ).toHaveCount(0);

    await submit(page).click();
    await expect(page.getByRole("status")).toHaveText(
      "Signed up new@example.com for pro by phone"
    );
  });
});
