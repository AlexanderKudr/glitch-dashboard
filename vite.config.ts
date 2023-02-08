import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const ASSET_URL = process.env.ASSET_URL || '';
// const ASSET_URL = "";
// https://vitejs.dev/config/
export default defineConfig({
  base: `${ASSET_URL}`,
  // build: {
  // },
  plugins: [react()],
  
})
