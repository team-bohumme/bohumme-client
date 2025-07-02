import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';
import { resolve } from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    vanillaExtractPlugin(),
    svgSpritePlugin({
      iconDirs: [resolve(__dirname, '../../packages/bds-icon/src/icon')],
      symbolId: 'icon-[name]',
      inject: 'body-last',
    }),
  ],
});
