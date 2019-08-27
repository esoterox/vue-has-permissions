module.exports = {
  chainWebpack: config => {
    config.externals({
      vue: 'vue'
    })
  },
  css: {
    extract: false
  }
}
