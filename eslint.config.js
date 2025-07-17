// eslint.config.js - Modern ESLint Configuration for Radio Flambeau-Banka
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  {
    // Global ignores
    ignores: [
      'dist/**/*',
      'build/**/*',
      'node_modules/**/*',
      'public/sw.js',
      'coverage/**/*',
      '.netlify/**/*',
      'reports/**/*',
      '*.config.js',
      '*.config.ts'
    ]
  },
  
  // Base JavaScript configuration
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2024,
        ...globals.node
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y
    },
    rules: {
      // Extend recommended configurations
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      
      // React specific rules
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/prop-types': 'off', // Using TypeScript for prop validation
      'react/jsx-uses-react': 'off', // Not needed with React 17+
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': ['error', { 
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true
      }],
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'warn',
      'react/no-deprecated': 'error',
      'react/no-unescaped-entities': 'error',
      'react/jsx-no-target-blank': ['error', { 
        allowReferrer: false,
        enforceDynamicLinks: 'always'
      }],
      'react/jsx-pascal-case': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', { 
        props: 'never',
        children: 'never'
      }],
      'react/self-closing-comp': 'error',
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }],
      
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // React Refresh rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      
      // Accessibility rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/media-has-caption': 'warn',
      'jsx-a11y/mouse-events-have-key-events': 'warn',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',
      'jsx-a11y/tabindex-no-positive': 'error',
      
      // General JavaScript rules
      'no-console': ['warn', { 
        allow: ['warn', 'error', 'info'] 
      }],
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-confirm': 'warn',
      'no-unused-vars': ['error', { 
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'prefer-spread': 'error',
      'prefer-destructuring': ['error', {
        array: true,
        object: true
      }],
      'arrow-spacing': 'error',
      'comma-dangle': ['error', 'es5'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'computed-property-spacing': 'error',
      'eol-last': 'error',
      'func-call-spacing': 'error',
      'indent': ['error', 2, { 
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false
      }],
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'no-multiple-empty-lines': ['error', { 
        max: 2,
        maxEOF: 1,
        maxBOF: 0
      }],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      'quotes': ['error', 'single', { 
        avoidEscape: true,
        allowTemplateLiterals: true
      }],
      'semi': ['error', 'always'],
      'semi-spacing': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'spaced-comment': ['error', 'always'],
      
      // Import/Export rules
      'no-duplicate-imports': 'error',
      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }],
      
      // Best practices
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'consistent-return': 'error',
      'curly': ['error', 'multi-line'],
      'default-case': 'error',
      'dot-notation': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'guard-for-in': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-fallthrough': 'error',
      'no-floating-decimal': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': ['warn', {
        ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        detectObjects: false
      }],
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': ['error', { props: false }],
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-return-assign': 'error',
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }],
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'no-warning-comments': ['warn', {
        terms: ['todo', 'fixme'],
        location: 'start'
      }],
      'no-with': 'error',
      'prefer-promise-reject-errors': 'error',
      'radix': 'error',
      'require-await': 'error',
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'outside'],
      'yoda': 'error',
      
      // Node.js specific rules
      'no-path-concat': 'error',
      'no-process-exit': 'error',
      
      // Performance rules
      'no-dupe-class-members': 'error',
      'no-duplicate-case': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-parens': ['error', 'all', {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
      }],
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-obj-calls': 'error',
      'no-regex-spaces': 'error',
      'no-sparse-arrays': 'error',
      'no-unreachable': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  },
  
  // Development environment specific rules
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'no-console': 'off', // Allow console.log in development
      'no-debugger': 'warn' // Warning instead of error in development
    },
    env: {
      development: true
    }
  },
  
  // Test files specific rules
  {
    files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}', '**/test/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.mocha
      }
    },
    rules: {
      'no-console': 'off',
      'no-magic-numbers': 'off',
      'max-lines-per-function': 'off'
    }
  },
  
  // Configuration files
  {
    files: ['*.config.{js,mjs,cjs}', '.*rc.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'off',
      'no-magic-numbers': 'off'
    }
  },
  
  // Service Worker specific rules
  {
    files: ['**/sw.js', '**/service-worker.js'],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    },
    rules: {
      'no-console': 'off',
      'no-restricted-globals': 'off'
    }
  }
];