import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import Layouts from 'vite-plugin-vue-layouts';
import path from 'path'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import { VitePWA } from 'vite-plugin-pwa'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import svgLoader from 'vite-svg-loader'

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
    esbuild: {
      drop: ['console', 'debugger'],
    },
    server: {
      proxy: {
        '^/api/.*': {
          target: process.env.VITE_GXA_URI,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api/partners')
        },
      },
      open: true,
      https: false,
      // host: "p2.goli.local",
      secure: false
    },
    plugins: [
      vue(),
      svgLoader(),
      Layouts(),
      VitePWA({
        includeAssets: [
          'favicon-16x16.png',
          'favicon-32x32.png',
          'favicon.ico',
          'robots.txt',
          'apple-touch-icon.png',
        ],
        manifest: {
          name: 'Vitailse',
          short_name: 'Vitailse',
          description: 'Opinionated vite template with TailwindCSS',
          theme_color: '#076AE0',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
      vueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
    },
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      format: 'cjs',
      // onFinished() {
      //   generateSitemap();
      // },
      mock: true
    },
  })
}