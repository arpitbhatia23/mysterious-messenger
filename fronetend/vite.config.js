import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    server: {
      proxy: {
        '/api': {
          target: 'https://mysteriousmessenger-rydshff2.b4a.run/', // The backend server URL
          changeOrigin: true,  // Necessary for CORS
          secure: true,  // If you're using HTTPS
        }
      }
    },
    plugins: [react()],
  }
});
