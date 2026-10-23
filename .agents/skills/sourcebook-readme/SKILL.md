---
name: sourcebook-readme
description: Use when creating or updating a specific project's README.md for an application or library, ensuring it contains Quick Features, Installation, Usage, and Development sections while preserving existing content.
license: Apache-2.0
metadata:
  author: storm-software
  version: "1.1.0"
---

# Sourcebook README

Write a useful entry point for users and contributors in a specific project's `README.md`. This skill owns that file; use `sourcebook-docs` for other project documentation and `sourcebook-blog` for articles.

1. Resolve exactly one target project before writing: the project path named in the request, otherwise the project containing the inspected files or working directory. In a monorepo, decide whether the root, a package, or an app is meant; ask if it stays ambiguous. Always write to that project's `README.md` (next to its manifest, such as `package.json` or `Cargo.toml`), never to another project's README or a separate file. Create the README only if it does not exist.
   - **"all":** If the user asks for "all" projects, target every project in the workspace instead: the root plus each workspace package and app (from the workspace config, such as `pnpm-workspace.yaml`, `package.json` `workspaces`, `nx.json`/`project.json`, or `Cargo.toml` `[workspace]`), skipping `node_modules`, build output, and vendored or external packages. Apply steps 2–6 to each project's own README independently, keeping the root README focused on the workspace as a whole, and give one combined report listing every README path.
2. Read the existing README in full before editing, along with the project manifests, source, examples, tests, and contributor instructions relevant to its claims. Most READMEs already exist, so treat current content as owned by the maintainers:
   - Edit in place with targeted changes; never rewrite or regenerate the whole file.
   - Preserve the existing voice, headings, badges, links, images, HTML, comments, and unrelated sections and their order.
   - Change existing text only when it is demonstrably wrong or outdated against the project (for example a renamed script or removed API), and mention each such correction in the report.
   - If an existing section covers a required point under a different name (for example "Getting Started" for Installation, or "Contributing" for Development), extend that section instead of adding a duplicate.
3. Ensure every one of these sections is present and complete, at the README's existing heading level. Add a missing section where it fits the existing flow (typically in this order after the introduction), and fill gaps in an existing section without removing what is already there:
   - **Quick Features:** A short, concrete list of capabilities supported by the current application or library. Avoid roadmap items and generic marketing claims.
   - **Installation:** Prerequisites and reproducible install or setup steps for a user. Distinguish published packages from source-checkout setup; do not claim a package or release exists without evidence.
   - **Usage:** The shortest working path from installation to a useful outcome. For an app, show how to run and use it; for a library, show a real import/API example. Include required configuration and commands only when supported by the project.
   - **Development:** Checkout setup, relevant scripts, tests, and local development tips for contributors. Keep contributor-only commands separate from user installation.

   `@sourcebook/core` compiles the README as a page from a level-1 title, an opening paragraph, and these four sections. Do not add YAML front matter. The compiler also accepts Features for Quick Features; Install, Getting Started, or Setup for Installation; Examples for Usage; and Contributing for Development.
4. Use the project's actual package manager, script names, paths, and supported APIs. Check examples against source or existing tests; run inexpensive focused checks when practical. If a necessary detail cannot be established, say what remains unverified instead of inventing a command or example.
5. Maintain the surrounding README structure, including links and any table of contents (add entries for new sections). Leave marked, tool-owned sections (for example between generator start/end comments) to their generator rather than hand-editing them.
6. Before finishing, re-read the diff: confirm all four sections are covered, no existing content was lost or reordered unintentionally, and every change is either an addition or a justified correction. Report the README path, the sections added or extended, any corrected existing text, and any verification limits.

Do not require `sourcebook.config.*` for a README update; select the README from the user's project path or the inspected workspace.
