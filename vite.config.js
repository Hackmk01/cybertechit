import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',                 // permite acceso desde otros dispositivos
    port: 5173,
    strictPort: true,
    allowedHosts: ['cybertech01', 'localhost'] // agrega tu host si quieres
  }
})
