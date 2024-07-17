import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    {
        ignores: [
              'eslint.config.mjs',
        ],
    },
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...compat.extends('airbnb-base'),
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        rules: {
            'comma-dangle': ['error', 'only-multiline'],
            indent: ['error', 4],
            'object-curly-newline': ['error', {
                ObjectExpression: {
                    multiline: true, minProperties: 3
                },
                ObjectPattern: {
                    multiline: true, minProperties: 3
                },
                ImportDeclaration: {
                    multiline: true, minProperties: 3
                },
                ExportDeclaration: {
                    multiline: true, minProperties: 3
                }
            }],
            'object-property-newline': 'error',
        },
    },
];
