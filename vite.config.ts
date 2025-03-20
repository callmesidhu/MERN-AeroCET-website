import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // Allows network access
    port: 3000, // You can specify any available port
  },
  plugins: [react()],
})
