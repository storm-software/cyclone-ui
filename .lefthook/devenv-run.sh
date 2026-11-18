#!/usr/bin/env bash
# Runs a git hook command inside the project's devenv shell.
#
# Git hooks inherit the environment of whatever started `git commit` (an IDE,
# a GUI client, a shell without direnv), so tools provided by devenv, such as
# pnpm, may be missing. When the devenv shell is already active, the command
# runs as is; otherwise it runs through `devenv shell`, using the same profile
# as .envrc.

set -euo pipefail

if [ -n "${DEVENV_ROOT:-}" ]; then
  exec "$@"
fi

if ! command -v devenv >/dev/null 2>&1; then
  echo "devenv-run: devenv is not on PATH; install devenv (https://devenv.sh) or commit from a devenv shell." >&2
  exit 127
fi

exec devenv --quiet --no-tui --profile development shell -- "$@"
