import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      // 字符串简写写法
      // 选项写法
      '/api': {
        target: 'https://www.mocky.io',
        changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [
    vue(),
    vitePluginImp({libList: []}),

    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})
