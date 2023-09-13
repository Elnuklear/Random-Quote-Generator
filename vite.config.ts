import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

base: "/Random_Quote_Generator"
export default defineConfig({
  plugins: [react()],
})
