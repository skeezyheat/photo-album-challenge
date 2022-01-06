import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'components', replacement: '/src/components' },
      { find: 'api', replacement: '/src/api' },
      { find: 'types', replacement: '/src/types' },
      { find: 'layout', replacement: '/src/layout' },
      { find: 'store', replacement: '/src/store' },
    ]
  },
  base: '/photo-album-challenge/'
})
