import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import pluginImport from 'eslint-plugin-import'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js,jsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**']),

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

  ...pluginOxlint.configs['flat/recommended'],

  {
    name: 'app/import-plugin',
    plugins: {
      import: pluginImport,
    },
  },

  {
    name: 'app/custom-rules',
    rules: {
      'import/extensions': ['error', 'ignorePackages'],
      'import/no-extraneous-dependencies': ['off',],

      'no-undef': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',

      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],

      'vue/v-bind-style': ['error', 'longform'],
      'vue/v-on-style': ['error', 'longform'],
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },

  skipFormatting,
)