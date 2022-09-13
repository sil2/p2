import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite';
import path from 'path'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
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
      vueI18n({
        /* options */
        // locale messages resourece pre-compile option
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  })
}