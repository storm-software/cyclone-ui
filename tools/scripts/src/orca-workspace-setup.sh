#!/usr/bin/env bash
# Orca workspace setup hook for devenv/direnv workspaces.
#
# Wire via orca.yaml:
#   scripts:
#     setup: ./tools/scripts/src/orca-workspace-setup.sh
#
# Or set the same path as the repo's local Orca setup command in Settings.
# Orca provides ORCA_ROOT_PATH, ORCA_WORKTREE_PATH, and ORCA_WORKSPACE_NAME.
#
# Trusts direnv/devenv for the new worktree path (trust is per-directory),
# copies missing dotenv files from the primary checkout, and warms the env.

set -euo pipefail

log() {
  printf 'orca-workspace-setup: %s\n' "$*"
}

warn() {
  printf 'orca-workspace-setup: warn: %s\n' "$*" >&2
}

WORKTREE="${ORCA_WORKTREE_PATH:-$(pwd)}"
ROOT="${ORCA_ROOT_PATH:-$WORKTREE}"

if [[ ! -d "$WORKTREE" ]]; then
  printf 'orca-workspace-setup: error: worktree path does not exist: %s\n' "$WORKTREE" >&2
  exit 1
fi

cd "$WORKTREE"
log "workspace=${ORCA_WORKSPACE_NAME:-unknown} worktree=$WORKTREE root=$ROOT"

copy_if_missing() {
  local name="$1"
  local src="$ROOT/$name"
  local dest="$WORKTREE/$name"

  if [[ -f "$src" && ! -e "$dest" ]]; then
    cp -- "$src" "$dest"
    log "copied $name from ORCA_ROOT_PATH"
  elif [[ -f "$dest" ]]; then
    log "$name already present"
  elif [[ ! -f "$src" ]]; then
    log "skip $name (not in ORCA_ROOT_PATH)"
  fi
}

copy_if_missing ".env"
copy_if_missing ".env.local"

has_devenv_project=0
if [[ -f "$WORKTREE/devenv.nix" || -f "$WORKTREE/devenv.yaml" ]]; then
  has_devenv_project=1
fi

if ((has_devenv_project)); then
  if command -v devenv >/dev/null 2>&1; then
    log "running: devenv --profile development allow"
    devenv --profile development allow
  else
    warn "devenv project found but devenv is not on PATH"
  fi
else
  log "skip devenv allow (no devenv.nix/devenv.yaml)"
fi

if [[ -f "$WORKTREE/.envrc" ]]; then
  if command -v direnv >/dev/null 2>&1; then
    log "running: direnv allow ."
    direnv allow .
  else
    warn ".envrc found but direnv is not on PATH"
  fi
else
  log "skip direnv allow (no .envrc)"
fi

if [[ -f "$WORKTREE/.envrc" ]] && command -v direnv >/dev/null 2>&1; then
  log "warming environment: direnv exec . true"
  direnv exec . true
elif ((has_devenv_project)) && command -v devenv >/dev/null 2>&1; then
  log "warming environment: devenv shell --profile development -- true"
  devenv shell --profile development -- true
else
  log "skip environment warm (no direnv/devenv available)"
fi

log "done"
