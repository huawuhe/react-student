import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> pnpm i @types/node -D
import UnoCSS from 'unocss/vite';

function resolve(dir: string) {
  return path.join(__dirname, '.', dir);
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  resolve: {
    alias: {
      '@': resolve('src'), // 设置 `@` 指向 `src` 目录
    },
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#1DA57A', // 自定义变量
        },
      },
    },
  },
});
