module.exports = {
  devServer: {
    // host:'192.168.0.222',//要设置当前访问的ip 否则失效
    // open: true, //浏览器自动打开页面
    proxy: {
      '/frequency/': {
        target: 'http://192.168.1.53:9201',      
        // ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      // 配置全局样式变量
      sass: {
        data: `@import "@/assets/scss/mixin.scss";`
      }
    }
  }
}