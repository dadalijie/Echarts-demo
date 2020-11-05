module.exports = {
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8080,
    https: false,
    proxy: { //配置跨域
      '/api': {
        target: 'http://localhost:5001', //后台的地址
        changOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }

    }
  }
}