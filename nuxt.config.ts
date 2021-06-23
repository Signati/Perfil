import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  build: {},
  telemetry: false,
  target: 'server',
  ssr: true,
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', {
      theme: { dark: false }
    }]
  ],
  css: [],
  env: {},
  head: {
    title: 'Amir MIsael Marin Coh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portafolio de evidencias' }
    ],
    link: []
  },
  loading: { color: '#0c64c1' },
  modules: [],
  plugins: [
    '~/plugins/truncate'
  ]
}

export default config
