import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from other devices like your phone
    allowedHosts: ['.ngrok-free.app'], // Wildcard: allows any ngrok domain
  }
})
