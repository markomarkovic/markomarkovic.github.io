import Vue from '@vitejs/plugin-vue'
import path from 'path'
import { presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: false,
    }),

    // https://github.com/unocss/unocss
    Unocss({
      presets: [
        // https://github.com/unocss/unocss/tree/main/packages/preset-uno
        presetUno({}),
        // https://github.com/unocss/unocss/tree/main/packages/preset-icons
        presetIcons({
          scale: 1.2,
        }),
      ],
    }),
  ],

  build: {
    emptyOutDir: true,
  },
})
