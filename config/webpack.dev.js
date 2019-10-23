const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//const path = require('./paths');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const eslintFormatter = require('react-dev-utils/eslintFormatter');

const mapStyle = process.env.MAP_STYLE === 'true';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 3042,
      historyApiFallback: true,
      overlay: true,
      open: true,
      stats: 'errors-only'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: mapStyle ? "css-loader?sourceMap" : "css-loader" }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            {
              loader: "sass-loader",
              options: {
              data: `
                @import "./src/styles/_variables.scss";
                @import "./src/styles/_mixins.scss";
              `
              }
            }
          ]
        },
        // {
        //   test: /\.(js|jsx|mjs)$/,
        //   enforce: 'pre',
        //   use: [
        //     {
        //       options: {
        //         formatter: eslintFormatter,
        //         eslintPath: require.resolve('eslint')
        //       },
        //       loader: require.resolve('eslint-loader')
        //     },
        //   ],
        //   include: path.appSrc,
        // }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          filename: "[name].css",
      }),
    ],
});
