---
name: sourcebook
description: Runs a workspace documentation pass by following the sourcebook-docs, sourcebook-guide, sourcebook-openapi, sourcebook-readme, and sourcebook-editor skills one at a time. Use when a schedule or the user asks to document a repository that has never been through Sourcebook, or to update Markdown docs, guides, OpenAPI descriptions, and READMEs after code changes. Not for a single README, one guide, one spec, a blog post, an ADR, or a review of one page.
argument-hint: "[first|update] [baseline git ref]"
license: Apache-2.0
metadata:
  author: storm-software
  version: "1.0.0"
---

# Sourcebook

Run one documentation pass over the workspace. Do the work by reading each skill below and following that skill, in order, one at a time. Finish the current skill and note what it wrote before starting the next. Follow the loaded skill when it is already available; otherwise read the sibling file.

These files must sit next to this skill: `../sourcebook-docs/SKILL.md`, `../sourcebook-guide/SKILL.md`, `../sourcebook-openapi/SKILL.md`, `../sourcebook-readme/SKILL.md`, `../sourcebook-editor/SKILL.md`. If one is missing, stop and name it.

This skill does not run `sourcebook-blog` or `sourcebook-adr`.

Write documentation only. Leave application source, generated specs, and tool-owned sections unchanged.

## 1. Classify the run

A scheduled run cannot stop to ask. Decide the mode before editing. An argument of `first` or `update`, or a baseline git ref, wins over the file.

| Mode | When |
| --- | --- |
| **First run** | The repository has not been through this skill: the caller says so, or neither a baseline ref nor `.sourcebook-version` exists. Also use a first run when the caller says update but supplies no ref and the file is missing. Survey the whole workspace. |
| **Update run** | The skill has run before. The caller gives a baseline git ref, or `.sourcebook-version` exists. Limit the pass to code that changed since that baseline. |

`.sourcebook-version` at the workspace root is one line: the commit sha the last finished pass used as its baseline. Keep it committable and out of gitignore; the next run reads it. One sha covers the workspace. Split it per project only when a monorepo pass keeps editing unrelated packages.

If the recorded sha is not in this clone, say so and do a first run.

## 2. Build the work list

On an update run, diff that baseline to the working tree, including staged, unstaged, and untracked files. Keep source, tests, and project manifests. Ignore documentation output, `README.md`, `guide/` and `guides/` files, OpenAPI and Swagger files, lockfiles, `.sourcebook-version`, and dependency or build directories (`node_modules`, `dist`, `build`, `out`, `coverage`, `vendor`, `.git`).

If that code diff is empty, write the current `HEAD` sha into `.sourcebook-version` when it differs, report that there is nothing to document, and stop.

On a first run, the work list is the workspace. `sourcebook-docs` needs `sourcebook.config.*` and `node`. If its reader fails, record the error, skip that skill, and continue with the others.

Carry the mode, baseline, and code-change list into every skill. On a conflict about one of its files, that skill's rules win.

## 3. Run the skills

Copy this list and complete it in order:

- [ ] sourcebook-docs
- [ ] sourcebook-guide
- [ ] sourcebook-openapi
- [ ] sourcebook-readme
- [ ] sourcebook-editor
- [ ] `.sourcebook-version`

### sourcebook-docs

Read `../sourcebook-docs/SKILL.md` and follow it.

- **First run:** create every page the surveyed code still lacks. Change an existing page when that code shows it is wrong or obsolete.
- **Update run:** add, change, or remove a page only when a listed code change makes it missing, wrong, or obsolete. Leave accurate pages alone.

### sourcebook-guide

Read `../sourcebook-guide/SKILL.md` and follow it once per flow, sequentially. It does not load on its own; read it anyway.

A guide walks through one flow. Skip a flow that only repeats a README usage example.

The request for each flow already includes the details below, and it is the confirmation to create or replace that file. Do not ask the user.

| Detail | Value |
| --- | --- |
| Functionality | The flow, and where it starts and ends. |
| Perspective | `hands-on` when a user or integrator performs it. `under-the-hood` when only a contributor reads the code. |
| Audience | End user or integrator for hands-on. New contributor for under-the-hood. |
| Output | `<docs>/guides/<flow>.md`. Use the docs `outputPath` when the reader returned it (default `docs`). With `useLocalOutput: true` (the default), place it under the project directory; otherwise under the workspace root. The `guides` directory makes the compiler treat the file as a guide. |

- **First run:** one guide for the primary flow of each documented project. Add an under-the-hood guide only when that project's main value is code a contributor extends. Skip a project with no such flow.
- **Update run:** add a guide for a new primary flow. Update a guide when a listed code change makes its steps wrong. Delete a guide when its flow is gone, and say so.

### sourcebook-openapi

Read `../sourcebook-openapi/SKILL.md` and follow it.

- **First run:** every maintained spec in the workspace.
- **Update run:** specs whose implemented operations the code diff touches. If none, skip this skill.

No spec is a finished step. Continue. Do not create a specification.

### sourcebook-readme

Read `../sourcebook-readme/SKILL.md` and follow it.

- **First run:** pass **all** projects.
- **Update run:** only projects whose install, usage, scripts, or user-facing capabilities the code diff changes. If none, skip this skill.

### sourcebook-editor

Read `../sourcebook-editor/SKILL.md` and follow it on the files this pass changed. The requested outcome is to improve those documents and apply the edits. Leave pages this pass did not touch.

## 4. Record the run and report

Write the current `HEAD` sha into `.sourcebook-version` only when the pass finished. A missing spec or a project with no guide still counts as finished. A missing sibling skill, a failed docs reader, or an unidentified workspace does not: leave any existing file unchanged so the next run repeats this mode. Skip this write when step 2 already refreshed the file and stopped. If `HEAD` is unavailable after a finished pass, write `none` and say the next run will be a first run.

Report the mode, the baseline, each skill you ran or skipped and why, the files written or updated, and anything you could not verify. Commit or push only when the caller already asked, and include `.sourcebook-version` in that commit.
