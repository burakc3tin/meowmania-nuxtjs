import { defineNuxtConfig } from "nuxt/config";

 
  export default defineNuxtConfig({
  modules: ['nuxt-icon', 'nuxt-auth-utils', "@pinia/nuxt"], 
auth: {
  provider: {
      type: 'authjs'
  }
},
 
vite: {
  server: {
    proxy: {
      '/api': {
        target: 'https://api.thecatapi.com/v1',
        changeOrigin: true,
        rewrite: (path) => `/images/search?${path.slice(1)}&limit=10&api_key=${process.env.CAT_API_KEY}`,
      },
    },
  },
},
 
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
         },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
 
})