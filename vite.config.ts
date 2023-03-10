import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import AutoImport from 'unplugin-auto-import/vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetUno(),
      ],
    }),
    AutoImport({
      imports: ['vue'],
      dts: true,
      vueTemplate: true,
      cache: true,
    }),
    ReactivityTransform(),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  server: {
    port: 3000,
  },
  // If need
  // build: {
  //   outDir: mode,
  //   assetsDir: '',
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: '[name].js',

  //     },
  //   },
  // },
  test: {
    environment: 'jsdom',
  },
}))
