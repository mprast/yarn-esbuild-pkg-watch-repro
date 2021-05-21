(() => {
  // pnp:/src/yarn-esbuild-pkg-watch-repro/packages/packageB/index.js
  var item = "this is from package B weehe!";

  // pnp:/src/yarn-esbuild-pkg-watch-repro/packages/packageA/index.js
  console.log("The item from package B is weehee: ", item);
})();
