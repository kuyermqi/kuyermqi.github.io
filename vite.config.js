import { defineConfig } from 'vite'
import { resolve } from 'path'
import markdown, { Mode } from 'vite-plugin-markdown'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: resolve(__dirname, './src'),
  build: {
    outDir: resolve(__dirname, './')
  },
  plugins: [
    react(),
    markdown({ mode: Mode.HTML }),
  ]
})
