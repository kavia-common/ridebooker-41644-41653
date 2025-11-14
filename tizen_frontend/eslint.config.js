import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * ESLint config:
 * - Limit linting to our source and config files only.
 * - Ignore node_modules, backup node_modules, build outputs, and vite cache/temp.
 * - Keep recommended react hooks and vite refresh configs.
 */
export default defineConfig([
  // Ignore vendor/build/cache folders and backup directories
  globalIgnores([
    'node_modules',
    'node_modules.backup.*',
    'dist',
    '.vite',
    '**/.vite/**',
    '**/deps_temp_*',
    '.init',
    // common package manager artifacts
    'package-lock.backup.*',
  ]),
  {
    // Lint only project sources and key config files (exclude HTML)
    files: ['src/**/*.{js,jsx}', 'vite.config.js', 'eslint.config.js'],
    ignores: [
      'index.html',
      '**/node_modules/**',
      '**/node_modules.backup.*/**',
      'dist/**',
      '.vite/**',
      '**/.vite/**',
      '**/deps_temp_*',
      '.init/**',
    ],
    extends: [
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Ensure core safety rules
      'no-undef': 'error',
      'no-const-assign': 'error',
      'no-dupe-keys': 'error',
      'no-dupe-args': 'error',
      'no-duplicate-case': 'error',
      'constructor-super': 'error',
    },
  },
])
