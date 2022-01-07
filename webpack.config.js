const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 虚拟的html文件名 index.html
  filename: 'index.html',
  // 虚拟html的模板为 src下的index.html
  template: path.resolve(__dirname, './expmale/index.html')
})

module.exports = {
  // 开发模式
  mode: 'development',
  // 配置入口文件
  entry: './src/index.js',
  // 出口文件目录为根目录下dist, 输出的文件名为main
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  // 配置开发服务器, 并配置自动刷新
  devServer: {
    // 根目录下dist为基本目录
    //contentBase: path.join(__dirname, 'dist'),    // webpack5之前用
    static: {                                       // webpack5之后用
      directory: path.join(__dirname, 'dist')
    },
    // 自动压缩代码
    compress: true,
    // 服务端口为1208
    port: 1208,
    // 自动打开浏览器
    open: true
  },
  // 装载虚拟目录插件
  plugins: [htmlWebpackPlugin],
  // 配置loader
  module: {
    // 根据文件后缀匹配规则
    rules: [
      // 配置js/jsx语法解析
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  }
}