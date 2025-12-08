import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for the project.
  // This is crucial for correct asset pathing in the built files.

  // **For Cloudflare Pages (or any root domain deployment):**
  // Use '/' if you are deploying to a root, like `my-project.pages.dev` or `www.mydomain.com`.
  base: '/',

  // **For your old GitHub Pages (project site):**
  // If you were deploying to your GitHub Pages URL, you would need to use the repository name.
  // base: '/WilliamLiu.github.io/',
})