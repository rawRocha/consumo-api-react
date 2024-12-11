import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  eslintPluginPrettierRecommended,
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      globals: globals.browser,
    },
  },
  {
    //define a versão do eslint-plugin-react
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {},
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    //Regras do react devem ser definidas após o plugin do react
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
