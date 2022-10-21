import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  define: {
    'global': 'window'
  },
  build: {
    target: 'esnext',
  },
});