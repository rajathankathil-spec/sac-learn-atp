import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The site is served from /courses/atp/ (Vercel). The GitHub Pages workflow
// sets VITE_BASE='./' so the same code still works at the github.io address.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/courses/atp/',
  plugins: [react(), tailwindcss()],
})
