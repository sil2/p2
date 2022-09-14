// vite.config.js
import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";
import path from "path";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import svgLoader from "vite-svg-loader";
var __vite_injected_original_dirname = "/usr/local/var/www/p2";
var __vite_injected_original_import_meta_url = "file:///usr/local/var/www/p2/vite.config.js";
var vite_config_default = ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return defineConfig({
    esbuild: {
      drop: ["console", "debugger"]
    },
    server: {
      proxy: {
        "^/api/.*": {
          target: process.env.VITE_GXA_URI,
          changeOrigin: true,
          secure: false,
          rewrite: (path2) => path2.replace(/^\/api/, "/api/partners")
        }
      },
      open: true,
      https: false,
      secure: false
    },
    plugins: [
      vue(),
      svgLoader(),
      vueI18n({
        include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src/locales/**")
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvdXNyL2xvY2FsL3Zhci93d3cvcDJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi91c3IvbG9jYWwvdmFyL3d3dy9wMi92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vdXNyL2xvY2FsL3Zhci93d3cvcDIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdml0ZS1wbHVnaW4tdnVlLWkxOG4nXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gIHByb2Nlc3MuZW52ID0gT2JqZWN0LmFzc2lnbihwcm9jZXNzLmVudiwgbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJykpO1xuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIGVzYnVpbGQ6IHtcbiAgICAgIGRyb3A6IFsnY29uc29sZScsICdkZWJ1Z2dlciddLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICAnXi9hcGkvLionOiB7XG5cbiAgICAgICAgICB0YXJnZXQ6IHByb2Nlc3MuZW52LlZJVEVfR1hBX1VSSSxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJy9hcGkvcGFydG5lcnMnKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9wZW46IHRydWUsXG4gICAgICBodHRwczogZmFsc2UsXG4gICAgICAvLyBob3N0OiBcInAyLmdvbGkubG9jYWxcIixcbiAgICAgIHNlY3VyZTogZmFsc2VcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgc3ZnTG9hZGVyKCksXG4gICAgICB2dWVJMThuKHtcbiAgICAgICAgLyogb3B0aW9ucyAqL1xuICAgICAgICAvLyBsb2NhbGUgbWVzc2FnZXMgcmVzb3VyZWNlIHByZS1jb21waWxlIG9wdGlvblxuICAgICAgICBpbmNsdWRlOiByZXNvbHZlKGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSwgJy4vc3JjL2xvY2FsZXMvKionKSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlQLE9BQU8sU0FBUztBQUNqUSxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFVBQVU7QUFDakIsU0FBUyxTQUFTLGVBQWU7QUFDakMsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZUFBZTtBQU50QixJQUFNLG1DQUFtQztBQUF5RyxJQUFNLDJDQUEyQztBQVFuTSxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDM0IsVUFBUSxNQUFNLE9BQU8sT0FBTyxRQUFRLEtBQUssUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUV6RSxTQUFPLGFBQWE7QUFBQSxJQUNsQixTQUFTO0FBQUEsTUFDUCxNQUFNLENBQUMsV0FBVyxVQUFVO0FBQUEsSUFDOUI7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFlBQVk7QUFBQSxVQUVWLFFBQVEsUUFBUSxJQUFJO0FBQUEsVUFDcEIsY0FBYztBQUFBLFVBQ2QsUUFBUTtBQUFBLFVBQ1IsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsVUFBVSxlQUFlO0FBQUEsUUFDM0Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFFUCxRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLFFBR04sU0FBUyxRQUFRLFFBQVEsY0FBYyx3Q0FBZSxDQUFDLEdBQUcsa0JBQWtCO0FBQUEsTUFDOUUsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
