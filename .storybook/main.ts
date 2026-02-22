import type { StorybookConfig } from '@storybook/react-native-web-vite';
import { InlineConfig, mergeConfig } from 'vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  "addons": [
    "@storybook/addon-react-native-web",
    "@storybook/addon-docs"
  ],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          'react-native',
          'expo',
          'react-native-web',
          'nativewind',

        ],
      },
      build: {
        rollupOptions: {
          plugins: [
            {
              name: "nativewind-fix",
              transform: (code, id) => {
                if (id.includes("react-native-css-interop")) {
                  return { moduleSideEffects: "no-treeshake" };
                }
              },
            },
          ],
        },
        commonjsOptions: {
          transformMixedEsModules: true, // Converts CJS to ESM
        },
      },
    } satisfies InlineConfig);
  },

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      //Fix of tailwind classes not being applied in storybook
      pluginReactOptions: {
        jsxRuntime: 'automatic',
        jsxImportSource: "nativewind",
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',

  },
};
export default config;
