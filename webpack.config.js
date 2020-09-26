const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename:'./index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    overlay: true, // 빌드시 에러나 경고를 브라우져 화면에 표시한다.
    contentBase: "./public",
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
