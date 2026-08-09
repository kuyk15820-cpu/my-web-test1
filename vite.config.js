import { defineConfig } from 'vite';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: false,
    cssMinify: 'lightningcss',
    cssCodeSplit: false, // มัดรวม CSS ทั้งหมดเป็นไฟล์เดียว
    
    rollupOptions: {
      input: {
        repo: 'src/assets/repo.js' 
        // [ลบออกแล้ว] ไม่ต้องใส่ style: 'src/assets/repo-style.css' ในนี้แล้ว
      },
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
      plugins: [
        obfuscator({
          compact: true,
          debugProtection: true,
          debugProtectionInterval: 2000,
          disableConsoleOutput: true,
          selfDefending: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 1,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.5,
          numbersToExpressions: true,
          simplify: true,
          stringArray: true,
          stringArrayEncoding: ['rc4'],
          stringArrayWrappersType: 'function',
          stringArrayWrappersCount: 5,
          stringArrayThreshold: 1,
          splitStrings: true,
          splitStringsChunkLength: 3,
          stringArrayWrappersChainedCalls: true,
          stringArrayCallsTransform: true,
          identifierNamesGenerator: 'hexadecimal'
        })
      ]
    }
  }
});
