import { defineConfig } from 'vite'
import { resolve } from 'path'
import markdown, { Mode } from 'vite-plugin-markdown'
import markdownIt from 'markdown-it'
import markdownItPrism from 'markdown-it-prism'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: resolve(__dirname, './src'),
  build: {
    outDir: resolve(__dirname, './'),
  },
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
      data: resolve(__dirname, './src/data'),
      routes: resolve(__dirname, './src/routes'),
      posts: resolve(__dirname, './src/posts'),
    },
  },
  plugins: [
    react(),
    markdown({
      mode: Mode.HTML,
      markdownIt: markdownIt().use(markdownItPrism),
    }),
  ]
})
