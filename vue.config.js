const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@views', resolve('src/views'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@static', resolve('src/static'))
            .set('@plugins', resolve('src/plugins'))
        config.plugins.delete('prefetch')
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: 51200 }))
         // config.output
         //        .set('path','/Users/admin/zw-partner/dist')
         //        .set('filename','js/[name].js')
         //        .set('publicPath','/')
         //        .set('chunkFilename','js/[name].js')
    },
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@assets/sass/modules/vars.scss";`
        },
        postcss: {
          // 这里的选项会传递给 postcss-loader
        }
      }
  },
  // filenameHashing: false,  // 文件名加hash 不包括js和img
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: {   // 设置代理
        //     '/api': {
        //         target: 'http://csapi.bbg.com.cn/api/',
        //         ws: true,
        //         changeOrigin: true
        //     },
        // },
        proxy: null,
        before: app => {}

    }
}
