import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { defineConfig } from 'vite'
import path from 'path'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  alias: {
    '@c': path.resolve(__dirname, 'src/components'),
    '@': path.resolve(__dirname, 'src'),
    '@view': path.resolve(__dirname, 'src/view'),
    '@api': path.resolve(__dirname, 'src/api')
  },
  plugins: [vue(), viteMockServe({ supportTs: false })]
})
