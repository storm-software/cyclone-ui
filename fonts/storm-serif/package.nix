# nixpkgs-ready derivation. The release process attaches a copy with the real
# `hash` to each `fonts-storm-serif@<version>` GitHub release; the in-repo flake
# overrides `src` with the local sources instead.
{
  lib,
  stdenvNoCC,
  fetchFromGitHub,
  python3Packages,
  nix-update-script,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "storm-serif";
  version = "1.0.54";

  src = fetchFromGitHub {
    owner = "storm-software";
    repo = "cyclone-ui";
    tag = "fonts-storm-serif@${finalAttrs.version}";
    hash = lib.fakeHash;
  };

  sourceRoot = "${finalAttrs.src.name}/fonts/storm-serif";

  nativeBuildInputs = [ python3Packages.fontmake ];

  buildPhase = ''
    runHook preBuild
    for designspace in *.designspace; do
      fontmake -m "$designspace" -o variable --output-dir build
      fontmake -m "$designspace" -o otf -i --output-dir build
    done
    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall
    install -Dm644 -t $out/share/fonts/opentype build/*.otf
    install -Dm644 -t $out/share/fonts/truetype build/*.ttf
    install -Dm644 -t $out/share/licenses/storm-serif OFL.txt
    runHook postInstall
  '';

  passthru.updateScript = nix-update-script {
    extraArgs = [
      "--version-regex"
      "fonts-storm-serif@(.*)"
    ];
  };

  meta = {
    description = "Text and display serif typeface from the Cyclone UI design system";
    homepage = "https://github.com/storm-software/cyclone-ui/tree/main/fonts/storm-serif";
    changelog = "https://github.com/storm-software/cyclone-ui/blob/fonts-storm-serif@${finalAttrs.version}/fonts/storm-serif/CHANGELOG.md";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
    maintainers = [ ];
  };
})
