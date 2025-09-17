// vitest.config.ts
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'; // If you're testing Vue components
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [vue()], // Include the Vue plugin if needed
  test: {
    environment: 'jsdom', // or 'happy-dom'
    globals: true, // Optional: if you want global APIs like 'describe', 'it'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});