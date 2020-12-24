const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false, // 是否开启eslint保存检测
  publicPath: './', // 公共路径
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false, // 热模块更新
    proxy: {
      '/tencent': {
        target: 'https://wis.qq.com', //源接口地址,network请求地址中api前面的部分
        changeOrigin: true, //改变源
        pathRewrite: {
          '^/tencent': 'https://wis.qq.com'
        }
      }
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@public', resolve('public'))
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
  }
};