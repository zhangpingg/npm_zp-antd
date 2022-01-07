const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  // 配置开发服务器
  devServer: {
    // 根目录下dist为基本目录
    // contentBase: path.join(__dirname, 'dist'),   // webpack5之前用
    static: {                                       // webpack5之后用
      directory: path.join(__dirname, 'dist')
    },
    compress: true,                           // 自动压缩代码
    port: 8000,
    open: true,                               // 自动打开浏览器
  },
  // 配置loader
  module: {
    rules: [
      { test: /\.js|tsx$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        // 从JS字符串创建样式节点 <= 将CSS转换为CommonJS <= 将Sass编译为CSS
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  // 装载插件
  plugins: [
    // 负责将html文档虚拟到根目录下
    new HtmlWebpackPlugin({
      filename: 'index.html',                 // 虚拟的html文件名 index.html
      template: path.resolve(__dirname, './src/index.html')   // 虚拟html的模板为 src下的index.html
    })
  ],
}