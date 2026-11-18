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
