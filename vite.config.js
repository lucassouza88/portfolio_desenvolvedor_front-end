import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' gera caminhos relativos, permitindo publicar tanto na Vercel/Netlify
// (raiz do domínio) quanto no GitHub Pages (subpasta /nome-do-repo/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
