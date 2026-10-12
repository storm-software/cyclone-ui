---
name: sourcebook-adr
description: Use when recording an Architecture Decision Record (ADR) in log4brains/MADR format. Trigger proactively, without being asked, right after an agent makes a significant technology change (adopting, replacing, or removing a framework, library, language, build tool, data store, protocol, or hosting/infra; changing a public API contract, architecture pattern, or security model) or after the user settles a significant design decision the agent asked them to make. Also use when the user asks to write, supersede, or deprecate an ADR. Not for bug fixes, routine refactors, or minor dependency bumps.
license: Apache-2.0
metadata:
  author: storm-software
  version: "1.0.0"
---

# Sourcebook ADR

Capture why a significant decision was made, so future readers (human or agent) do not have to reverse-engineer it from diffs or relitigate it. An ADR records one decision, the context that forced it, the options weighed, and the consequences accepted. The format follows [log4brains](https://github.com/thomvaill/log4brains), which uses the MADR template.

## When a decision deserves an ADR

Write one when a future contributor would reasonably ask "why did we do it this way?" and the answer is not obvious from the code. Typical cases:

- Adopting, replacing, or removing a framework, library, runtime, language, build/test tool, data store, message broker, or hosting provider.
- Changing a public API, data schema, file format, or package boundary that other code or users depend on.
- Choosing an architecture or cross-cutting pattern (state management, error handling, auth, caching, monorepo layout).
- Any design question the agent put to the user because it had real trade-offs — the user's answer is the decision.

Skip it for bug fixes, refactors that keep behavior and structure, patch/minor version bumps, formatting, and choices fully dictated by an existing ADR. When unsure, prefer a short ADR over none; a two-paragraph record is still useful.

## Steps

1. **Find the ADR folder.** Read `.log4brains.yml` at the repository root if it exists and use `project.adrFolder`, or the matching `project.packages[].adrFolder` when the decision only affects one package. Otherwise use `docs/adr/` for repository-wide decisions; in a monorepo, a decision scoped to one package goes in `<package path>/docs/adr/`. Create the folder if needed, but do not create `.log4brains.yml` or install log4brains unless asked.
2. **Check existing ADRs.** List the folder and skim titles. If an earlier ADR covers the same topic, this decision probably supersedes or refines it (see step 5). Match the existing files' naming, heading style, and tag vocabulary.
3. **Gather the facts from the work itself**: the problem or request that triggered the change, the constraints and drivers (performance, compatibility, cost, team familiarity, licensing, maintenance), the options actually considered, what the user said when they decided, and the files or packages affected. Use the conversation, the diff, issue links, and the code. Do not invent options, benchmarks, deciders, or rationale that did not come up — an ADR that sounds plausible but misstates why something happened is worse than a short one. If an obvious alternative was not discussed, you may list it as considered only if you actually evaluated it, and say what ruled it out.
4. **Write the file** as `YYYYMMDD-short-kebab-title.md` using today's date (date-prefixed names avoid merge conflicts; do not use sequential numbers unless the folder already does). If the folder has a `template.md`, follow it. Otherwise use the template below.
   - **Title:** the problem and chosen solution in a few words, e.g. "Use pnpm workspaces for package management".
   - **Status:** `accepted` when the change has been made or the user approved it; `proposed` when written before the user has decided (then ask them and update it); `draft` only if the user asks.
   - **Deciders:** the people who actually decided — the user (from `git config user.name` if they made the call) and anyone named in the conversation. Omit the line rather than guess.
   - **Technical Story:** an issue/PR URL or one-line description of the triggering request, if there is one.
   - Keep it brief and concrete. Context should let a newcomer understand the problem without the conversation. Consequences must include the real negatives (new dependency, migration work, lock-in, things that got harder), since those are what a future reader needs to judge whether to revisit the decision.
5. **Supersede, don't rewrite.** ADRs are immutable history; only an existing ADR's `Status` line may change. When the new decision replaces an old one, set the old ADR's status to `superseded by [Title](YYYYMMDD-new-slug.md)` and add a `Links` entry in the new ADR such as `Supersedes [Old title](YYYYMMDD-old-slug.md)`. For a decision that narrows or extends an earlier one without replacing it, use `Refines` links and leave both accepted.
6. **Report** the ADR path and a one-line summary to the user. If the ADR was written proactively, mention it in passing rather than asking permission — the user can edit or delete it. Do not commit unless the user's workflow already commits the related change.

## Template

Optional sections may be removed when they would be empty or padding; keep the required ones (title, Context and Problem Statement, Considered Options, Decision Outcome).

```markdown
# [Short title of solved problem and solution]

- Status: [proposed | accepted | rejected | deprecated | superseded by [title](yyyymmdd-slug.md)]
- Deciders: [people involved in the decision] <!-- optional -->
- Date: [YYYY-MM-DD]
- Tags: [comma-separated tags] <!-- optional -->

Technical Story: [description | ticket/issue URL] <!-- optional -->

## Context and Problem Statement

[Two or three sentences on the situation and the problem, optionally phrased as a question.]

## Decision Drivers <!-- optional -->

- [driver, e.g. a constraint, quality goal, or concern]

## Considered Options

- [option 1]
- [option 2]

## Decision Outcome

Chosen option: "[option 1]", because [justification tied to the drivers].

### Positive Consequences <!-- optional -->

- [e.g. improvement, follow-up decisions enabled]

### Negative Consequences <!-- optional -->

- [e.g. cost, risk, migration work, follow-up decisions required]

## Pros and Cons of the Options <!-- optional -->

### [option 1]

- Good, because [argument]
- Bad, because [argument]

### [option 2]

- Good, because [argument]
- Bad, because [argument]

## Links <!-- optional -->

- [Link type] [title](yyyymmdd-slug.md) <!-- e.g. Refines, Supersedes, Related to -->
```
