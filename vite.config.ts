import { defineConfig, transformWithEsbuild } from 'vite';
import path, { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react'
import reactNativeWeb from "vite-plugin-react-native-web";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    //  tailwindcss(),
    libInjectCss(),
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/node_modules\/.*\.mjs$/)) return null

        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    react(),
    reactNativeWeb(),
    dts()
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.mjs': 'jsx',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ls-ui',
      formats: ['es'],
      fileName: 'ls-ui',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-native', 'react-dom'],
    }
  }
});
