import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cryptofrontdashboard/',
  build: {
    outDir: 'dist',  // Output directory for the build
   
    assetsDir: 'assets',  // Directory for static assets
 
    manifest: true, // Generate manifest.json
    sourcemap: false, // Disable source maps for production
    rollupOptions: {
      output:
      {
          format: 'es',
          strict: false,
          entryFileNames: "[name].jsx",
          dir: 'dist/'
      }
   }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.coingecko.com/api/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
     
    },
  },
 

});

