import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  plugins: [viteSingleFile()],

  build: {
    emptyOutDir: true,
  },
})
