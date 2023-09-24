const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Добавляем модуль CopyWebpackPlugin

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8082,
    }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // clean: true,
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
          filename: './src/styles/main.css'
      }),
      new CopyWebpackPlugin({ // Добавляем новый экземпляр плагина CopyWebpackPlugin
        patterns: [
            { from: './src/mail.html', to: 'mail.html' },
            { from: 'src/send.php', to: 'send.php' },
            { from: 'src/PHPMailer', to: 'phpmailer' }
        ]
    })
  ],
  module: {
      rules: [
          {
              test: /\.html$/i,
              loader: 'html-loader'
          },
          {
            test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
            type: 'asset/resource'
        },
          

          {
              test: /\.css$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader'
              ]
          },
          {
              test: /\.scss$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
              ]
          }
      ]
  },
  ...devServer(develop),
});