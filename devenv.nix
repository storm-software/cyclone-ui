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

  # The imported production profile runs pnpm install as a visible task.
  # Avoid a second install during shell capture, where failures hide pnpm's error.
  profiles.production.module.languages.javascript.pnpm.install.enable = lib.mkForce false;

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
