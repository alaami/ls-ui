import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    //  tailwindcss(),
    libInjectCss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ls-ui',
      formats: ['es'],
      fileName: 'ls-ui',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-native', 'react-dom'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  }
});
