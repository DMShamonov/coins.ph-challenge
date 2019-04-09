/* eslint-disable import/no-dynamic-require, global-require, import/no-extraneous-dependencies, camelcase, max-len */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.join(path.resolve(__dirname), '/../..');
const CONFIGS_PATH = path.join(ROOT_PATH, '/configs');
const POSTCSS_CONFIG = path.join(CONFIGS_PATH, '/postcss.config.js');
const ESLINT_CONFIG = path.join(CONFIGS_PATH, '/.eslintrc.json');
const IMG_SIZE_LIMIT = 10 * 1024; // 10kB
const FONTS_SIZE_LIMIT = 10 * 1024; // 10kB

module.exports = (options) => {
  const { IS_DEVELOPMENT_MODE, ENVIRONMENT } = options;
  const IS_DEBUG_MODE = IS_DEVELOPMENT_MODE;
  const APP_PATH = path.join(ROOT_PATH, '/app');
  const OUTPUT_PATH = path.join(ROOT_PATH, '/dist');

  return {
    mode: ENVIRONMENT,
    bail: true,
    devServer: IS_DEVELOPMENT_MODE ? require('./webpack.devserver.config') : undefined,
    devtool: IS_DEBUG_MODE ? 'inline-cheap-module-source-map' : undefined,
    node: {
      fs: 'empty',
      dns: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    entry: {
      app: [
        '@babel/polyfill',
        'react-hot-loader',
        path.join(APP_PATH, '/src/index.jsx'),
        path.join(APP_PATH, '/assets/sass/app.sass'),
      ],
    },
    output: {
      publicPath: '/',
      filename: IS_DEVELOPMENT_MODE ? '[name].js' : '[name].[chunkhash].js',
      chunkFilename: IS_DEVELOPMENT_MODE ? '[name].js' : '[name].[chunkhash].js',
      path: OUTPUT_PATH,
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.sass',
        '.json',
      ],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: /node_modules/,
          use: [
            IS_DEVELOPMENT_MODE && 'cache-loader',
            'react-hot-loader/webpack',
          ].filter(Boolean),
        },
        {
          test: /(?<!worker)\.js(x)?$/,
          exclude: '/node_modules/',
          use: [
            IS_DEVELOPMENT_MODE && 'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: 'eslint-loader',
              options: {
                configFile: ESLINT_CONFIG,
              },
            },
          ].filter(Boolean),
        },
        {
          test: /\.(css|sass)$/,
          use: [
            IS_DEVELOPMENT_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: IS_DEBUG_MODE,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: IS_DEBUG_MODE,
                config: {
                  path: POSTCSS_CONFIG,
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: IS_DEBUG_MODE,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: IMG_SIZE_LIMIT,
                name: '[name].[ext]?[hash]',
                outputPath: 'assets/img/',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                noquotes: true,
                limit: IMG_SIZE_LIMIT,
                iesafe: true,
                outputPath: 'assets/img/',
              },
            },
          ],
        },
        {
          test: /\.woff2?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: FONTS_SIZE_LIMIT,
                name: '[name].[ext]?[hash]',
                outputPath: 'assets/fonts/',
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          exclude: /\/node_modules/,
          parallel: true,
          terserOptions: {
            keep_fnames: true, // https://github.com/bitcoinjs/bitcoinjs-lib/issues/998#issuecomment-456184045
          },
        }),
      ],
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        BABEL_ENV: ENVIRONMENT,
        NODE_ENV: ENVIRONMENT,
      }),
      new MiniCssExtractPlugin({
        filename: IS_DEVELOPMENT_MODE ? '[name].css' : '[name].[hash].css',
        chunkFilename: IS_DEVELOPMENT_MODE ? '[id].css' : '[id].[hash].css',
      }),
      !IS_DEVELOPMENT_MODE && new ImageminWebpackPlugin({
        test: /\.(svg|png|jpe?g)$/i,
        svgo: {
          removeTitle: true,
          removeDesc: true,
        },
      }),
      !IS_DEVELOPMENT_MODE && new webpack.optimize.OccurrenceOrderPlugin(),
      !IS_DEVELOPMENT_MODE && new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        chunksSortMode: 'dependency',
        template: path.join(APP_PATH, '/index.html'),
        minify: {
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          removeComments: true,
          sortAttributes: true,
          sortClassName: true,
        },
      }),
      !IS_DEVELOPMENT_MODE && new CleanWebpackPlugin(),
    ].filter(Boolean),
  };
};
