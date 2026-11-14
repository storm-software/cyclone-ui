/* -------------------------------------------------------------------

                   🗲 Storm Software - Cyclone UI

 This code was released as part of the Cyclone UI project. Cyclone UI
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/cyclone-ui.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/cyclone-ui
 Documentation:            https://docs.stormsoftware.com/projects/cyclone-ui
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { formatRelativeTime } from "./utilities";

const NOW = Date.UTC(2026, 10, 14, 12);
const ago = (seconds: number) => new Date(NOW - seconds * 1000);

describe("formatRelativeTime", () => {
  it("uses the largest unit the difference reaches", () => {
    expect(formatRelativeTime(ago(30), NOW, "en")).toBe("30 seconds ago");
    expect(formatRelativeTime(ago(5 * 60), NOW, "en")).toBe("5 minutes ago");
    expect(formatRelativeTime(ago(3 * 86_400), NOW, "en")).toBe("3 days ago");
    expect(formatRelativeTime(ago(2 * 604_800), NOW, "en")).toBe("2 weeks ago");
    expect(formatRelativeTime(ago(400 * 86_400), NOW, "en")).toBe("last year");
  });

  it("describes future dates and the present", () => {
    expect(formatRelativeTime(ago(-2 * 3600), NOW, "en")).toBe("in 2 hours");
    expect(formatRelativeTime(ago(86_400), NOW, "en")).toBe("yesterday");
    expect(formatRelativeTime(ago(0), NOW, "en")).toBe("now");
  });
});
