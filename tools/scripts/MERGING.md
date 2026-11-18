# Merging Razorwind outputs

`.gitattributes` assigns `merge=razorwind` to the outputs of
`pnpm nx run monorepo:build-tokens`. Token JSON inputs, generator configuration,
and handwritten helpers use Git's normal merge behavior.

`pnpm bootstrap` (also run by `pnpm install`) registers the driver in the clone's
local Git configuration and installs the Lefthook hooks. To install only the
merge integration in an existing checkout:

```sh
devenv shell -- node tools/scripts/src/razorwind-merge.mjs --install
```

Git does not load driver definitions from `.gitattributes`, so each clone needs
this setup. Linked worktrees share the repository's local Git configuration.
Keep the generated output patterns in sync with `razorwind.config.ts`.

The file driver temporarily keeps the current output and queues regeneration.
Generating inside the file driver would read sources before Git has merged them.
Once the merged sources are available, the hooks run
`pnpm nx run monorepo:build-tokens` once and stage only paths
marked `merge=razorwind`, including new outputs and deletions. Internal ancestor
merges use Git's `binary` driver instead.

When generation changes the merged tree, `git merge` stops with the regenerated
outputs staged. Run `git commit` to finish. Git caches an automatic merge's tree
before its commit hooks; stopping prevents it from committing stale artifacts.
The integration remembers the regenerated index, so finishing the same merge
does not generate again. `git merge --no-commit` followed by `git commit` also
works, with generation taking place during the commit.

Source conflicts still require resolution and staging before `git commit`.
Unstaged tracked changes block regeneration to preserve local work. If generation
fails, no merge commit is created: fix the failure, review and stage or restore
any partially written outputs, then retry `git commit`.

Keep hooks enabled. A `prepare-commit-msg` guard blocks stale merge commits even
with `--no-verify`; the file driver refuses to defer when required hooks are
missing or `LEFTHOOK=0`. This integration is for local merges; hosted merge
services do not install or execute custom drivers and hooks.
