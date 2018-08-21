const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const images = ['jpg', 'jpeg', 'png', 'gif', 'svg'];

let stylesLoader = [
  {loader: 'style-loader'},
  {loader: "css-loader"},
  {loader: "sass-loader"}
];
let pathsToClean = [
  'dist'
]

// the clean options to use
let cleanOptions = {
  root:     __dirname,
  exclude:  ['shared.js'],
  verbose:  true,
  dry:      false
}
console.log(__dirname);
const plugins = [
  new HtmlWebpackPlugin({
    title: 'Test app',
    template: 'index.html'
  }),
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  }),
  new CopyWebpackPlugin([
    ...images.map(ext => ({ from: `**/*/*.${ext}`, to: 'images/[name].[ext]' }))
  ])
];

module.exports = {
  entry: './app.js',
  context: path.resolve('src'),
  output: {
    filename: 'bundle-[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['syntax-dynamic-import', 'transform-class-properties', 'transform-object-rest-spread']
          }
        }
      },

      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: "css-loader" },
            {loader: "sass-loader"}
          ]
        })
      },
      {
        test: /\.svg$/,
        issuer: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      }       

    ]
  },

  plugins,

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve('dist'),
    publicPath: '/',
    port: 9000,
    hot: true,
    historyApiFallback: true
  }
};

