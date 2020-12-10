module.exports = {
  target: 'static',
  components: true,
  router: {
    base: '/peterkimzz/'
  },
  modules: ['@nuxt/content'],
  buildModules: ['@nuxtjs/tailwindcss'],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  }
}