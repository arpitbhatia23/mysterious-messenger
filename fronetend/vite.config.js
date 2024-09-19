import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      proxy: {
        "/api": {
          target: env.VITE_SERVER_URL, // Use loaded environment variable
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react()],
  }
});
