

const path = require('path')
const webpack = require('webpack');


const resolve = dir => {
  return path.join(__dirname, dir)
};
const isDev = process.env.NODE_ENV !== 'production';
const BASE_URL = isDev ? '/' : '/';

module.exports = {
  publicPath: BASE_URL,

  chainWebpack: config =>
    config.resolve.alias
      .set('@', resolve('src')) 
      .set('@components', resolve('src/components/index.js'))
      .set('@images', resolve('src/assets/images'))
      .set('@css', resolve('src/assets/css'))
      .set('@libs', resolve('src/libs'))
      .set('@config', resolve('src/config')),

  // 打包时不生成.map文件
  productionSourceMap: isDev,

  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'http://localhost:3004'
  // },
  configureWebpack:{
    plugins: [
      new webpack.ProvidePlugin({
        moment:"moment",
      })
    ],
  },

  pluginOptions: {
    moment: {
      locales: [
        ''
      ]
    }
  }
}
