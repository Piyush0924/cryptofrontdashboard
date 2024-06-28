import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [{ enforce: 'pre', ...mdx() },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],

  base: '/cryptofrontdashboard/',
  build: {
    outDir: 'dist',  // Output directory for the build
   
    assetsDir: 'assets',  // Directory for static assets
 
    manifest: true, // Generate manifest.json
    sourcemap: false, // Disable source maps for production
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
