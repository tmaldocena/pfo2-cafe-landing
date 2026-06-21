import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        hub: resolve(__dirname, 'index.html'),
        prompt: resolve(__dirname, 'prompt.html'),
        claude: resolve(__dirname, 'claude/index.html'),
        antigravity: resolve(__dirname, 'antigravity/index.html'),
      },
    },
  },
})
