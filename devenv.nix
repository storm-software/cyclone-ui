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

  languages = {
    python = {
      venv.enable = true;
      manylinux.enable = lib.mkForce false;
    };
    java = {
      enable = true;
      lsp.enable = true;
      maven.enable = true;
    };
  };
}
