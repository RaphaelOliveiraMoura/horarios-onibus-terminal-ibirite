import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default tseslint.config(
  js.configs.recommended,
  react.configs.flat.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    // Os JSONs de horários (src/services/memory/buses) também passam pelo
    // lint-staged: sem isto o ESLint 9 os ignora com warning e o
    // --max-warnings=0 barra o commit. Aqui vale a formatação do prettier.
    files: ['**/*.json'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      'react-hooks': reactHooks
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-namespace': 'off'
    }
  }
)
