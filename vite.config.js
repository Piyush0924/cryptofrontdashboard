import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for static assets
    manifest: true, // Generate manifest.json
    sourcemap: false, // Disable source maps for production
    rollupOptions: {
      output: {
        format: 'es', // ES module format
        strict: false, // Disable strict mode in the output
        entryFileNames: '[name].js', // Use .js for entry files (standard for browsers)
        dir: 'dist/', // Output directory for Rollup
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.coingecko.com/api/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix
      },
    },
  },
});
