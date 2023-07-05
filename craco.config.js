const CracoAlias = require('craco-alias');
module.exports = {
    plugins: [
        /* https://github.com/risenforces/craco-alias */
        {
            plugin: CracoAlias,
            options: {
            source: "tsconfig",
            tsConfigPath: "./tsconfig.extend.json",
            },
        },
    ],

    // 配置代理服务
    server: {
        proxy: {
          '/app-dev': {
            //获取数据的服务器地址设置
            target: 'http://gmall-h5-api.atguigu.cn',
            //需要代理跨域
            changeOrigin: true,
            //路径重写
            rewrite: (path) => path.replace(/^\/app-dev/, ''),
          },
        },
      }
}