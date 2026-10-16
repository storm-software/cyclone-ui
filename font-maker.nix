{
  stdenv,
  fetchgit,
  lib,
  pkg-config,
  boost,
  freetype,
}:

stdenv.mkDerivation {
  pname = "font-maker";
  version = "0-unstable-714ccae";

  src = fetchgit {
    url = "https://github.com/maplibre/font-maker.git";
    rev = "714ccaea67d384717890a3c2c27143dfdd4189b7";
    fetchSubmodules = true;
    hash = "sha256-xKU3U2wkqNhGIdeH4XXj29UCsFQbjrEgJpYzbLCl2/M=";
  };

  nativeBuildInputs = [ pkg-config ];
  buildInputs = [
    boost
    freetype
  ];
  dontConfigure = true;

  # Upstream's CMake file hardcodes /usr/bin/clang. Build its unchanged CLI
  # source with the Nix compiler instead; no upstream or vendored patches.
  buildPhase = ''
    runHook preBuild
    $CXX -std=c++17 -O2 main.cpp -o font-maker \
      -Ivendor/cxxopts/include -Ivendor/filesystem/include \
      -Ivendor/sdf-glyph-foundry/include -Ivendor/protozero/include \
      $(pkg-config --cflags --libs freetype2)
    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall
    install -Dm755 font-maker "$out/bin/font-maker"
    install -Dm644 LICENSE.txt "$out/share/licenses/font-maker/LICENSE.txt"
    mkdir -p "$out/share/font-maker"
    echo 714ccaea67d384717890a3c2c27143dfdd4189b7 > "$out/share/font-maker/revision"
    runHook postInstall
  '';

  meta = {
    description = "Generate MapLibre SDF glyph PBFs from fonts";
    homepage = "https://github.com/maplibre/font-maker";
    license = lib.licenses.bsd3;
    mainProgram = "font-maker";
    platforms = lib.platforms.unix;
  };
}
