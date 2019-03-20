const path = require("path");
const webpack = require("webpack");
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')

const vendor = ['vue-router','vuex','vue/dist/vue.common.js','vue/dist/vue.js','vue-loader/lib/component-normalizer.js','axios','mint-ui','vue/dist/vue.esm.js','vue-i18n','lib-flexible']
const dllPath = path.join(__dirname, 'dll');

module.exports = {
  entry: {
    vendor: vendor
  },
  output: {
    path: path.join(__dirname, '../static/js'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library' 
    // vendor.dll.js中暴露出的全局变量名。
    // 主要是给DllPlugin中的name使用，
    // 故这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, ".",'[name]-manifest.json'),
      name: '[name]_library', 
      context: __dirname
    }),
    // 压缩打包的文件，与该文章主线无关
    new webpack.optimize.UglifyJsPlugin({ 
      compress: {
        warnings: false
      }
    })
  ]
}

