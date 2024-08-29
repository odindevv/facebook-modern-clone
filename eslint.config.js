import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  { ignores: ['eslint.config.js', 'vite.config.ts'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          endOfLine: 'auto'
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'prefer-const': 'warn',
          "react/prop-types": "off"

    },
  },
];
