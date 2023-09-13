import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: "/Random-Quote-Generator",
  plugins: [react()],
})
