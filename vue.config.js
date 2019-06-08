// const TerserPlugin = require("terser-webpack-plugin");
// const isProd = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: './',

  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    performance: {
      maxEntrypointSize: 1400000,
      maxAssetSize: 1400000
    },
    // optimization: {
    //   // No splitting
    //   // splitChunks: false,
    //   splitChunks: {
    //     cacheGroups: {
    //       shared: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name: "vendor",
    //         enforce: true,
    //         chunks: "all"
    //       }
    //     }
    //   },
    //   minimizer: isProd
    //     ? [
    //         new TerserPlugin({
    //           terserOptions: {
    //             compress: {
    //               drop_console: true
    //             }
    //           }
    //         })
    //       ]
    //     : []
    // },
    devServer: {
      //   public: 'satellite.socgen'
      //   public: 'satellite.sgmarkets.com'
    }
  },

  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: '[name].css',
            chunkFilename: '[name].css'
          }
        ]);
    }
  }
};
