# nixpkgs-ready derivation. The release process attaches a copy with the real
# `hash` to each `fonts-storm-sans@<version>` GitHub release; the in-repo flake
# overrides `src` with the local sources instead.
{
  lib,
  stdenvNoCC,
  fetchFromGitHub,
  python3Packages,
  nix-update-script,
}:

stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "storm-sans";
  version = "1.0.34";

  src = fetchFromGitHub {
    owner = "storm-software";
    repo = "cyclone-ui";
    tag = "fonts-storm-sans@${finalAttrs.version}";
    hash = lib.fakeHash;
  };

  sourceRoot = "${finalAttrs.src.name}/fonts/storm-sans";

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
    install -Dm644 -t $out/share/licenses/storm-sans OFL.txt
    runHook postInstall
  '';

  passthru.updateScript = nix-update-script {
    extraArgs = [
      "--version-regex"
      "fonts-storm-sans@(.*)"
    ];
  };

  meta = {
    description = "Humanist sans-serif typeface from the Cyclone UI design system";
    homepage = "https://github.com/storm-software/cyclone-ui/tree/main/fonts/storm-sans";
    changelog = "https://github.com/storm-software/cyclone-ui/blob/fonts-storm-sans@${finalAttrs.version}/fonts/storm-sans/CHANGELOG.md";
    license = lib.licenses.ofl;
    platforms = lib.platforms.all;
    maintainers = [ ];
  };
})
