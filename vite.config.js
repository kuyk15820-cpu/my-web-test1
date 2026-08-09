import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'esbuild', // สั่งให้บีบอัดโค้ดซ่อนชื่อตัวแปร
    rollupOptions: {
      input: {
        repo: 'src/assets/repo.js',
        style: 'src/assets/repo-style.css'
      },
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
