import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import tseslint, { configs } from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        typescript: true
      }
    },
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-inline']
    }
  }
);
