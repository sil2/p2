import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  
  server: {
    server: {
      proxy: {
        "/api": {
          target: "http://gxa.goli.local",
          changeOrigin: true,
          secure: false,
         // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    open: true,
    https: false, 
    host: "p2.goli.local",
   // port: 80,
    secure: false,
    strictPort: true,
    hmr: {
   //   port: 80,
      host: "p2.goli.local",
    }, 
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
