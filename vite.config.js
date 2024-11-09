import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
      port:3000,
    proxy: {
      '/wss': {
        target: 'wss://localhost:8080',
        ws: true,
      },
      '/api': {
        target: 'https://localhost:8080',
        changeOrigin: true,
      }
    }
  }
})