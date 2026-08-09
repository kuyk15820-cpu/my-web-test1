import { defineConfig } from 'vite';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig({
  // --- [เพิ่มส่วนนี้] บังคับให้ Vite มัดรวมและบีบอัด CSS ทั้งหมดลงบรรทัดเดียว ---
  build: {
    outDir: 'dist',
    minify: false, // ปิด JS minify เพื่อให้ Obfuscator จัดการ JS เอง
    cssMinify: 'lightningcss', // [เพิ่ม] บีบอัด CSS ทั้งหมดให้เหลือบรรทัดเดียวแบบแน่นที่สุด
    cssCodeSplit: false,       // [เพิ่ม] รวบรวม CSS ทั้งโปรเจกต์มัดเป็นไฟล์เดียว
    
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
          splitStringsChunkLength: 3, // [แก้ไข] ลดความยาวเหลือ 3 อักขระเพื่อย่อยข้อความให้ละเอียดขึ้นอีก

          // --- [เพิ่ม] เพิ่มระดับซับซ้อนในการแกะ String Array ---
          stringArrayWrappersChainedCalls: true,
          stringArrayCallsTransform: true,

          // --- เปลี่ยนชื่อตัวแปรเป็นเลขฐาน 16 ---
          identifierNamesGenerator: 'hexadecimal'
        })
      ]
    }
  }
});
