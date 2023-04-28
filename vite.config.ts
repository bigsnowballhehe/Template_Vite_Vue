import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: './',
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetUno()],
    }),
    AutoImport({
      imports: ['vue'],
      dts: true,
      vueTemplate: true,
      cache: true,
    }),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  server: {
    port: 3000,
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  test: {
    environment: 'jsdom',
  },
}))
