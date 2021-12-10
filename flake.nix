{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-21.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem(system:
      let
        pkgs = import nixpkgs { system = system; };
      in {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [ nodejs-16_x python yarn yarn2nix ];
          installPhase = ''
            yarn
            yarn2nix > yarn.nix
          '';
        };
      }
    );
}
