const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp');
const esbuild = require('esbuild');
const path = require('path');

console.log("Running esbuild in watch mode...");

esbuild.build({
  bundle: true,
  outfile: path.resolve(__dirname, "bundle.js"),
  entryPoints: ["./packages/packageA/index.js"],
  plugins: [pnpPlugin()],
  // plugins: [],
  watch: {
    onRebuild(error, result) {
      console.log("Rebuilding!");
    }
  }
});
