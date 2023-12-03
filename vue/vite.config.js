// given code, commented out for vite.

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})

// vite.config.js sampl code below
// const path = require('path')

// export default {
//   root: path.resolve(__dirname, 'src'),
//   server: {
//     port: 8080,
//     hot: true
//   }
// }