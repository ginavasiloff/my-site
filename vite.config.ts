import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [React()],
  test: {
    globals: true,
    /**
     * set the environment in the test file, not here if js-dom is needed
     * example:
     * // @vitest-environment jsdom
     * import { render } from '@testing-library/react'
     *
     * **/
    environment: 'node',
    setupFiles: './setup-tests.ts',
  },
})
