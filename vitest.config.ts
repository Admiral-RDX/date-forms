import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // your test configuration
  },
  esbuild: {
    target: 'esnext',
  },
});