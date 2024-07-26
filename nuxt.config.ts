// nuxt.config.ts
// import { defineNuxtConfig } from 'nuxt'
import vuetify from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'; // 從 'nuxt/config' 導入


export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    async (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins = config.plugins || []
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  router: {
    mode: 'history'
  },  
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  // 啟用 SSR
  ssr: true, 

  // Firebase Functions 設定
  nitro: {
    preset: 'firebase', 
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    firebase: {
      nodeVersion: '18',
      gen: 2,
    }
  },

  // 其他 Nuxt 設定
  app: {
    baseURL: '/', 
    buildAssetsDir: '/_nuxt/' 
  },
})
