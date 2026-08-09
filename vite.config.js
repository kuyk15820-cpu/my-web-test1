import { defineConfig } from 'vite';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: false, // ปิด minify เดิมเพื่อให้ obfuscator ทำหน้าที่จัดการทั้งหมดแทน
    rollupOptions: {
      input: {
        repo: 'src/assets/repo.js',
        style: 'src/assets/repo-style.css'
      },
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
      plugins: [
        obfuscator({
          compact: true,
          
          // --- ป้องกัน F12, Console & DevTools ---
          debugProtection: true,
          debugProtectionInterval: 2000,
          disableConsoleOutput: true,

          // --- ป้องกันการนำโค้ดไปจัดฟอร์แมตใหม่ (Un-minify) ---
          selfDefending: true,
          
          // --- ซ่อนตรรกะและโครงสร้างโค้ด (Control Flow) ---
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 1,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.5,
          numbersToExpressions: true,
          simplify: true,

          // --- เข้ารหัสข้อความและข้อมูลสายอักขระ (String) ---
          stringArray: true,
          stringArrayEncoding: ['rc4'],
          stringArrayWrappersType: 'function',
          stringArrayWrappersCount: 5,
          stringArrayThreshold: 1,
          splitStrings: true,
          splitStringsChunkLength: 5,

          // --- เปลี่ยนชื่อตัวแปรเป็นเลขฐาน 16 ---
          identifierNamesGenerator: 'hexadecimal'
        })
      ]
    }
  }
});
