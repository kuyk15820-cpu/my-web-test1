import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'rollup-plugin-obfuscator';

export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    modules: {
      generateScopedName: '_[hash:base64:6]'
    }
  },
  build: {
    outDir: 'dist',
    minify: false,
    cssMinify: 'lightningcss',
    cssCodeSplit: false,
    
    rollupOptions: {
      input: {
        repo: 'src/App.jsx' // หรือจุดที่เก็บไฟล์ React ของคุณ
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
