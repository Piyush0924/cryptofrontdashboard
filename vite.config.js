import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'vite-plugin-terser';

export default defineConfig({
  plugins: [react(), terser()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        format: 'es',
        strict: true,
        entryFileNames: "[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        dir: 'dist/',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'https://api.coingecko.com/api/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
