---
name: sourcebook-docs
description: Use when generating or updating Markdown documentation for an application, library, or design system from a workspace's sourcebook.config file.
license: Apache-2.0
metadata:
  author: storm-software
  version: "1.0.0"
---

# Sourcebook Documentation

Document the projects described by the target workspace's `sourcebook.config.*`.

1. Identify the workspace root from the request or current workspace. Run `node <path-to-this-skill>/scripts/read-config.mjs <workspace-root> docs` and parse its JSON stdout. The reader loads the config with c12, validates documentation values, supplies defaults, and omits unrelated options. Stop and report an error if it fails.
2. Process each root config object when `config` is an array, then process every object in its `docs` option. Select **only** the reference matching the documentation object's `type`: [application](references/application.md), [library](references/library.md), or [design-system](references/design-system.md). Read its associated path fields, inspect those locations, and follow that type's guidance. If a path field is absent, inspect the workspace to locate the relevant project material; do not invent a source path.
3. Use root values for each documented project: `displayName`, `homepage`, and `description` provide project context. Apply the root `instructions` to all of its documentation, then apply each documentation object's `instructions` to that object. Ground claims in inspected files and preserve existing user content when updating documents.
4. Write Markdown under each documentation object's `outputPath` (default `docs`). With the root object's `useLocalOutput: true` (default), place documentation under each identified project's own directory; with `false`, place it under the workspace root. Resolve project directories from the repository's structure and manifests. Check final paths remain within the workspace, avoid collisions across config entries, and report the files written.
5. Use only the scoped JSON returned by the reader. Do not read or apply `blog` configuration; `sourcebook-blog` owns it.

The config selects projects and guidance, not an exact document list. Choose useful Markdown pages based on the inspected project and the user's request. Install this skill with its `scripts/` and `references/` directories. The scripts bundle `c12` and need no package install.

## Diagrams

When a visual would help the intended reader understand a relationship, flow,
state change, or comparison, use the [diagram guide](references/diagrams.md).
It covers choosing a diagram, making it clear and visually consistent, placing
it in Markdown, and checking the rendered result. Ground every diagram in the
same inspected sources as the surrounding text; a visual must not imply an
unverified contract or behavior.

## Documentation Instructions

Write documentation for anything that is currently missing it, but, unless explicitely told, when updating existing documentation, I should ensure we fall into one of the following scenarios:

1. The existing documentation is now out-of-date due to a specific code change I can identify
2. The existing documentation is no longer needed because of a specific code change I can identify

## Writing Style

We should write in a non-strict [ASD-STE100 Simplified Technical English, Issue 9 (15 January 2025)](references/asd-ste100.md) style - Karpathy suggests "80% of the way to ASD-STE100" for readability. That is the default here: short sentences, consistent terms, and direct verbs. It is a style choice, not a measured conformity score.

The writing reference links the official standard, maps specific rules, gives examples, and includes the tweet's attached image. It also records a dictionary error in that image. Strict drafts require the official rules and dictionary; this package does not certify compliance. The full standard is not redistributed.

## Structure of the Documentation

When writing documentation, it is important to know the audience you are writing for and what kind of document you are writing. We try to follow the framework listed below, but there are always some exceptions since the documentation is always changing. This framework is valuable to keep in mind, but we also follow the principle that if a PR is better than the existing content on the site, we'll merge it in and follow up to make it better later if it doesn't perfectly match the standards.

### Types of Documents

We are generally following the [Diataxis](https://diataxis.fr) model where documents are divided into tutorials, concept guides, recipes and reference.

- Tutorial - Focused on explaining a concept through step by step instructions.
- Concept guide - Explains why something works the way it does or how to think about something.
- Recipe - Focused directions to accomplish a specific task. Describes how to do something.
- Reference - Lists what you can do with the tool (i.e. API docs).

### Audiences

We also have different audiences in mind when writing docs:

👶 New user starting from scratch

- They know their frameworks of choice
- They have probably heard of a library/application similar to the one being documented but don't really know what it is
- They're smart and eager to learn

👶 New user migrating an existing repo

- They know their frameworks of choice
- They know details important to understanding the current library/application
- They're smart and eager to learn

👦 Intermediate User

- They have a good understanding of the library/application being documented and its ecosystem.
- They are comfortable with the library/application and can troubleshoot common issues independently.

👨‍🦳 Advanced User

- They know everything about the library/application being documented except the specific piece of knowledge that is being taught by this document.

### Outline

- Getting Started - These documents assume a new user and are generally concept guides with a lot of links to other parts of the site. There are some elements of recipes mixed in, but those should be kept to a minimum.
- Tutorials - These are tutorials written for a new user. After completing one of these tutorials, the user should have enough knowledge to be an intermediate user.
- Core Features - These are primarily recipes with a little concept mixed in. These documents should be short and provide the basic information that people will want 80% of the time and link to anything more complex. A new user should be able to click through these documents and skim them to get a good understanding of what the current library/application being documented does without getting overwhelmed with details.
- Concepts - These are concept guides written for a new user. Any recipe content should be split into a recipe document and linked.
- More Concepts (or other categories under Concepts) - These are concept guides written for an intermediate user.
- Recipes - These are recipes written for an advanced user.
- The Current Library/Application with Your Favorite Tech - These are tutorials written for an intermediate user.
- Benchmarks - Reference documents linking to external resources.
- Reference - Reference documents.

## Page fields

`@sourcebook/core` compiles each Markdown page. Write YAML front matter at the top of every generated page. These fields are required:

- `title`: the page title.
- `description`: one or two sentences.
- `documentType`: the Diataxis kind. Use `getting-started`, `tutorial`, `concept`, `recipe`, or `reference`. Map a Getting Started overview to `getting-started`, a concept guide to `concept`, a core-feature page to `recipe`, and benchmarks to `reference`.

`tags` is optional. Use a YAML list or a comma-separated string, and only tags the page has earned. Do not invent tags.

The compiler can derive a missing `title` from the first level-1 heading and a missing `description` from the first paragraph. `documentType` has no fallback. Write all three explicitly so a generated page does not depend on that fallback.

```markdown
---
title: Run the service locally
description: Install dependencies, start the service, and confirm it responds.
documentType: getting-started
tags: [setup]
---
```

## Markdown the compiler understands

The compiler uses remark and rehype. Write GitHub Flavored Markdown, including tables, task lists, strikethrough, footnotes, and GitHub alerts (`> [!NOTE]`). `:::note` blocks closed by `:::` become admonitions; a bracketed title such as `:::tip[Fast path]` sets the label. End a heading with `[#custom-id]` to choose its id. End a heading with `[!toc]` to keep it out of the table of contents, or `[toc]` to include it and omit it from the body. Level-1 headings are the page title and stay out of the table of contents unless marked `[toc]`.
