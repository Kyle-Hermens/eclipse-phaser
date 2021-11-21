const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const path = require("path");

module.exports = {
  chainWebpack: config => {
    // rust wasm bindgen https://github.com/rustwasm/wasm-bindgen
    config
      .plugin("wasm-pack")
      .use(WasmPackPlugin)
      .init(
        Plugin =>
          new Plugin({
            crateDirectory: path.resolve(__dirname, "./wasm")
          })
      )
      .end()
  },

  transpileDependencies: [
    'vuetify'
  ]
};
