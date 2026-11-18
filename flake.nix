{
  description = "Cyclone UI fonts (Storm Sans, Storm Serif)";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { nixpkgs, ... }:
    let
      fonts = [
        "storm-sans"
        "storm-serif"
      ];
      # Build each font's nixpkgs derivation from this checkout instead of the
      # tagged GitHub tarball, so the flake never needs a source hash.
      overlay =
        final: _prev:
        nixpkgs.lib.genAttrs fonts (
          font:
          (final.callPackage ./fonts/${font}/package.nix { }).overrideAttrs {
            src = nixpkgs.lib.fileset.toSource {
              root = ./.;
              fileset = ./fonts/${font};
            };
          }
        );
      forAllSystems = nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed;
    in
    {
      overlays.default = overlay;

      packages = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        overlay pkgs pkgs
      );
    };
}
