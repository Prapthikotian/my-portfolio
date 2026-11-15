import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// base './' keeps every asset path working on any GitHub Pages repo name.
export default defineConfig({plugins:[react()],base:'./'})
