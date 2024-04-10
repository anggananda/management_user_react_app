import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: "3000"
  }, 
  define: {
    'import.meta.env.VITE_URL_USERS': JSON.stringify(process.env.VITE_URL_USERS),
  },
})
