#!/bin/sh
# Git calls this before merged sources are checked out. Keep %A temporarily;
# merge/commit hooks regenerate and stage the outputs before the commit.
set -eu

for name in pre-commit pre-merge-commit prepare-commit-msg; do
  hook=$(git rev-parse --git-path "hooks/$name")
  if [ "${LEFTHOOK:-}" = "0" ] || [ ! -x "$hook" ]; then
    echo "Razorwind merge requires installed, enabled hooks. Run pnpm bootstrap." >&2
    exit 1
  fi
done

pending=$(git rev-parse --git-path razorwind-merge-pending)
git rev-parse HEAD > "$pending"
