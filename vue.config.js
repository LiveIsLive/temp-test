// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
// transpileDependencies: true,
// })
module.exports = {
  // 部署坏境配置
  devServer: {
  // 端口号配置
  port: 3000,
  // 代理配置
  proxy: {
    // 代理表示所有请求连接代理到http://127.0.0.1:8080这个链接
    '/': {
      target: 'http://127.0.0.1:8080',
      // 是否变更来源
      changeOrigin: true,
      // 是否使用ws请求
      ws: false,
      // 路径重新规则
      pathReWrite: {
        '^/': ''
        }
      }
    }
  },
  // 编写浏览器title标签的值
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '123'
        return args
      })
  }
}

