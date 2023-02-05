const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
 mode: 'production',
 entry: './src/index.js',
 output: {
  filename: 'main.js',
  // clean: true,  // 自动清理打包目录
  path: path.resolve(__dirname,'dist')
 },
 resolve:{
  alias:{
   '@': path.resolve(__dirname,'src')
  }
 },
 module:{
  rules: [
   {
    test: /\.css$/i,
    use: ['style-loader','css-loader']
   },
   {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
   },
   {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
     loader: 'babel-loader',
     options: {
      presets: ['@babel/preset-env']
     }
    }
   }
  ]
 },
 plugins: [
  new HtmlWebpackPlugin({
   title: 'test'
  }),
  new CopyPlugin({
   patterns: [
    { from: path.resolve(__dirname, 'robots.txt'), to: path.resolve(__dirname, 'dist') },
   ],
  }),
 ],
 devtool: 'source-map'
}
