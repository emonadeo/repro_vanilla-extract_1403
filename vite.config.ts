import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import vike from "vike/plugin";
import vikeSolid from "vike-solid/vite";
import vikeNode from "vike-node/plugin";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vike(),
    vikeSolid(),
    vikeNode({
      entry: "server/index.ts",
      external: [
        "@brillout/picocolors",
        "@brillout/json-serializer",
        "@brillout/require-shim",
        "@brillout/vite-plugin-server-entry",
        "@brillout/import",
      ],
    }),
    vanillaExtractPlugin(),
  ],
});
