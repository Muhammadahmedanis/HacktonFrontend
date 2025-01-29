import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://hackthonbackend-production.up.railway.app'
      // http://localhost:4000
    },
  }
})
