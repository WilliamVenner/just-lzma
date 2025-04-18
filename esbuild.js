const { build } = require("esbuild");

build({
  bundle: true,
  target: ["es2017", "node16"],
  platform: "node",
  sourcemap: "external",
  entryPoints: ["./src/index.js"],
  outdir: "dist",
  minify: true,
});
