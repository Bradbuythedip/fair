import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store',
      'Content-Type': 'application/javascript'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'marked']
  }
});