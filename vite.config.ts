import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const date = new Date();
const appVersion = '0.0.' + date.getTime();
const buildDate = date.toISOString();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['prettier/standalone', 'prettier/parser-html', 'prettier/parser-postcss', 'prettier/parser-typescript'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(appVersion),
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
  base: process.env.NODE_ENV === 'production' ? "/trimble-modus-vue/" : "/"
})
