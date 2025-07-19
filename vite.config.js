import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/meu-site-react/', // coloque o nome do seu repositório aqui
  plugins: [react()],
})
