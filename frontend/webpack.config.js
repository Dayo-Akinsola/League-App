const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    champions: './src/champions.js',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/htmlPages/index.html',
      chunks: ['index'],
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'champions.html',
      template: './src/htmlPages/champions.html',
      chunks: ['champions'],
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties'],
              ['@babel/transform-runtime'],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
