const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基础路径，按需改
  publicPath: './',

  // 输出目录
  outputDir: 'dist',

  // 放置静态资源的目录
  assetsDir: 'static',

  // 开发环境是否开启eslint保存检测
  lintOnSave: true,

  // webpack 配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  // devServer 配置
  devServer: {
    open: true, // 启动后自动打开浏览器
    host: '0.0.0.0',
    port: 8080,
    https: false,
    proxy: {
      // 代理示例
      '/api': {
        target: 'http://localhost:8999',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};