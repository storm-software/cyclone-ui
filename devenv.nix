{ pkgs, lib, ... }:
{
  name = "storm-software/cyclone-ui";

  dotenv = {
    enable = lib.mkDefault true;
    filename = [
      ".env"
      ".env.local"
    ];
    disableHint = true;
  };

  packages = with pkgs; [ ttfautohint ];

  languages.python = {
    # Activate the uv-synced venv (see pyproject.toml) so Python tools such as
    # `fontmake` are directly on PATH inside `devenv shell`.
    venv.enable = true;

    # The manylinux2014 compat libs (nix glibc) end up on the Python wrapper's
    # LD_LIBRARY_PATH and get loaded by prebuilt binaries such as cffsubr's `tx`
    # alongside the host's /lib64/ld-linux loader. The glibc mismatch crashes
    # `fontmake` with "stack smashing detected" while subroutinizing CFF.
    # (Forced because the storm-ops python devenv module sets it to true.)
    manylinux.enable = lib.mkForce false;
  };
}
