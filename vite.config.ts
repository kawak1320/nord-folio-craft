import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/nord-folio-craft/', 
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), 
      },
    },
  },
});
