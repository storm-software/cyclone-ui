# Article quality check

Use this after editing, with the rendered Markdown or a preview when available. Fix issues that affect the article; do not add content solely to satisfy a checklist.

1. **Reader payoff:** Can a reader tell from the title and opening what they will learn or be able to do? Does each section advance that promise?
2. **Evidence:** For product behavior, numbers, dates, quotations, and version-specific claims, find an authoritative source in the workspace or a current primary source. Keep the scope and date of evidence visible when they change the meaning. Remove or qualify claims that cannot be verified.
3. **Examples:** For commands and code, check names, imports, options, prerequisites, and expected output against the actual version or source. Run a safe representative example when practical. Label illustrative snippets as such; never present an untested example as verified.
4. **Navigation:** Check local link targets and image paths relative to the article. Use link text that names the destination. Give informative images alt text that conveys their purpose; decorative images can have empty alt text if the renderer supports it.
5. **Metadata and scanability:** Front matter includes `title`, `description`, and `summary`, and each one describes the article as written. `@sourcebook/core` requires those three fields. Use tags already meaningful to the site, or omit tags. Keep headings, lists, and figures where they help a reader scan or understand the content.

Report any material uncertainty instead of silently turning it into a factual statement.
