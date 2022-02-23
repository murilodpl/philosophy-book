import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set fetch '/api' to the philosophyapi (resolve CORS error)
  server: {
    proxy: {
      "/api": {
        target: "https://philosophyapi.herokuapp.com/api",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
