{ pkgs, ... }:
{
  name = "storm-software/cyclone-ui";

  dotenv = {
    enable = true;
    filename = [
      ".env"
      ".env.local"
    ];
    disableHint = true;
  };
}
