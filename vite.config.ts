import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from "unocss/vite";
import path from "path"
import presetUno from '@unocss/preset-uno'
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), UnoCSS({
    presets: [presetUno()
    ]
  }),],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  // esbuild: {
  //   drop: ['console', 'debugger']
  // },
  server: {
    port: 3000
  },
})
