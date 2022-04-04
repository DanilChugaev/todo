import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      'Components' : path.resolve(__dirname, './src/components'),
      'Pages' : path.resolve(__dirname, './src/pages'),
      'Store' : path.resolve(__dirname, './src/store'),
      'Router' : path.resolve(__dirname, './src/router'),
    },
  },
  plugins: [vue()]
});
