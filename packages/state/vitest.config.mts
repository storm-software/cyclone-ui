import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineConfig } from 'vitest/config';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/state',
  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  test: {
    name: 'state',
    watch: false,
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/state',
      provider: 'v8' as const
    }
  }
}));
