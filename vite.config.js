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
    '@': path.resolve(__dirname, 'src'),
    '@c': path.resolve(__dirname, 'src/components'),
    '@views': path.resolve(__dirname, 'src/view'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@router': path.resolve(__dirname, 'src/router'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@styles': path.resolve(__dirname, 'src/styles')
  },
  plugins: [vue(), viteMockServe({ supportTs: false })]
})
