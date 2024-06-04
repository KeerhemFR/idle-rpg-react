import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve('./', 'src') },
      { find: '@assets', replacement: resolve('./', 'src/assets') },
      { find: '@components', replacement: resolve('./', 'src/components') },
      { find: '@contents', replacement: resolve('./', 'src/contents') },
      { find: '@pages', replacement: resolve('./', 'src/pages') },
      { find: '@interfaces', replacement: resolve('./', 'src/interfaces') },
      { find: '@test', replacement: resolve('./', 'src/test') },
      { find: '@utils', replacement: resolve('./', 'src/utils') },
    ],
  },
});
