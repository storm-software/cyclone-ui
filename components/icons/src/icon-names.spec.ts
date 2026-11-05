import { readdir } from "node:fs/promises";

import { expect, it } from "vitest";

it("generates icon filenames that are unique on case insensitive filesystems", async () => {
  const files = (await readdir(new URL("./icons/", import.meta.url))).filter(
    file => file.endsWith(".tsx")
  );
  const names = files.map(file => file.toLowerCase());

  expect(new Set(names).size).toBe(files.length);
  expect(files).toEqual(
    expect.arrayContaining([
      "Login.tsx",
      "LogIn2.tsx",
      "Logout.tsx",
      "LogOut2.tsx"
    ])
  );
});
