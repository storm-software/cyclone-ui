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

  packages = with pkgs; [
    ttfautohint
    (callPackage ./font-maker.nix { })
  ];

  # Orca confines MCP config reads to the workspace. The default Nix-store
  # symlink escapes that boundary; copy on each shell entry to keep it current.
  files.".mcp.json".copyMode = "copy";

  # The production profile installs dependencies as a visible task.
  # Disable the implicit install during shell capture for every profile.
  languages.javascript.pnpm.install.enable = lib.mkForce false;

  languages = {
    python = {
      venv.enable = true;
      manylinux.enable = lib.mkForce false;
    };
    java = {
      enable = true;
      jdk.package = pkgs.jdk25;
      lsp.enable = true;
      maven.enable = true;
    };
  };
}
