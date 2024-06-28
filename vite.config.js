import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cryptofrontdashboard/',
  build: {
    outDir: 'dist',  // Output directory for the build
    assetsDir: 'assets',  // Directory for static assets
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.coingecko.com/api/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/cryptoserver': {
        target: 'https://cryptoserver.onrender.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cryptoserver/, ''),
      },
    },
  },
});
