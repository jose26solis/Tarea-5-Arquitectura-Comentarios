export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/content'],
  app: {
    head: {
      titleTemplate: '%s - Mi Sitio Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
