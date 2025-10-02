import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production"
    }
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "widget",
      fileName: (format) => `widget.${format}.js`
    },
    target: "esnext"
  }
})
