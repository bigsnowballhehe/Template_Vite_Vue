import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [vue({
    reactivityTransform: true,
  }), UnoCSS({
    presets: [presetUno(),
      AutoImport({
        imports: ['vue'],
        dts: true,
        vueTemplate: true,
        cache: true,
      }),
    ],
  })],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  server: {
    port: 3000,
  },
}))
