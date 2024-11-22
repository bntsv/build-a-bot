const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: "http://localhost:8081",
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        // ws: true,
        // changeOrigin: true,
      },
    },
    configureWebpack: (config) => {
      // config.modules.rules.push({
      //   test: /\.coffee$/,
      //   use: ["coffee-loader"],
      // });
    },
  },
});
