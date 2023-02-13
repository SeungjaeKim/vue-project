const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//prefetch 삭제
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}
