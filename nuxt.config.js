module.exports = {
//   css: [
//     { src: '~/assets/scss/animations.scss', lang: 'scss' },
//     { src: '~/assets/scss/utilities.scss', lang: 'scss' }
//   ],
  generate: {
    minify: {
      collapseWhitespace: false
    }
  },
  performance: {
    gzip: true // Cloudflare already does it.
  },
  modules: [
    '@nuxtjs/vuetify'
  ],
  plugins: [
   // '~plugins/vue-lazyload.js'
  ],
  // Vuetify options
  vuetify: {
    theme: {
      primary: '#2196f3',
      secondary: '#e63a36',
      accent: '#82B1FF',
      error: '#e63a36',
      info: '#2196F3',
      success: '#2196f3',
      warning: '#FFC107'
    }
  },
  loading: {
    color: '#ff5252',
    height: '3px'
  },
  extractCSS: true,
  build: {
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 10KO
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
    vendor: ['vue-lazyload']
  },
  head: {
    titleTemplate: '%s - Gmelius',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        hid: 'description',
        name: 'description',
        content: 'Gmelius makes your Gmail inbox instantly smarter and safer with email tracking, scheduling, collaborative kanban boards, email notes, shared email templates, follow-ups, mail merge and more. Install for free!'
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'noodp,noydir'
      },
      // OG
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'Gmelius'
      }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:300'
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.png'
      }
    ]
  }
}
