import {resolve} from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        career: resolve(root, "careers", "index.html"),
        // enterprise: resolve(root, "enterprise", "index.html"),
        // privacy: resolve(root, "privacy", "index.html"),
        // support: resolve(root, "support", "index.html"),
        roadmap: resolve(root, "roadmap", "index.html"),
        // reset: resolve(root, "reset-password", "index.html"),
        // login: resolve (root, "login", "index.html"),
        // create: resolve (root, "create", "index.html"),
        // forum: resolve (root, "nexus-forum", "index.html"),
        // drive: resolve (root, "drive", "index.html"),
        // wd: resolve (root, "web-dev-ide", "index.html"),
        // se: resolve (root, "software-engineering-ide", "index.html"),
        // ml: resolve (root, "machine-learning-ide", "index.html"),
        // ad: resolve (root, "app-dev-ide", "index.html"),
        // products: resolve( root, "products", "index.html"),
        careersapply: resolve(root, "career-apply", "index.html"),



      }
    }
  }

})
