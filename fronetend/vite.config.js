import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables

  return {
    server: {
      proxy: {
        "/api":"https://mysterious-messenger.onrender.com/"
      },
    },
    plugins: [react()],
  }
});
