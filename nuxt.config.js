import createMeta from "./service/meta"
import axios from "axios"

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Laravel JP Conference" ,
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...createMeta(),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css', integrity: 'sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP', crossorigin:'anonymous'}
      ]
    },
  generate: {
    async routes() {
      const path = []
      const request = axios.create({
        baseURL: 'https://fortee.jp/laravel-jp-conference-2019/api/'
      })
			const {data} = await request("/sponsors")
			for(let plan of data.sponsor_plans) {
			  for(let sponsor of plan.sponsors) {
			    path.push(`/sponsor/${sponsor.name}`)
        }
			}
      return path
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/common.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios"
  ],

  axios: {
    baseURL: "https://fortee.jp/laravel-jp-conference-2019/api/",
    debug: process.env.NODE_ENV !== "production"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
