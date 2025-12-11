import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,             // akses dari luar
    port: 5173,             // port dev server
    strictPort: false,
    // pakai allowedHosts sebagai array wildcard
    allowedHosts: [
      'c8d0ffbb8e54.ngrok-free.app',    // semua subdomain ngrok
      'localhost'
    ],
  },
})
