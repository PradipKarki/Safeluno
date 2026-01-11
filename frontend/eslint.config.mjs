import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

export default [
  {
    ignores: [
      '**/dist/**',
      '**/.next/**',
      '**/node_modules/**',
      'postcss.config.mjs',
      'tailwind.config.mjs',
      'next.config.js',
      'eslint.config.mjs',
    ],
  },
  ...nextCoreWebVitals,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      'prettier/prettier': 'error',
      'unused-imports/no-unused-imports': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]
