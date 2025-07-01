import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    svgSpritePlugin({
      iconDirs: ['src/icons'],
      symbolId: 'icon-[name]',
      inject: 'body-last',
    }),
  ],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'DesignSystem',
      fileName: (format) => `design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
