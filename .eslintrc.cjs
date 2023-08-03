module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': { node: { extensions: ['.js', '.jsx'] } },
  },
  rules: {
    'linebreak-style': 'off',
    'no-promise-executor-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': ['error', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'only-multiline', exports: 'only-multiline', functions: 'never' }],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true },
      ObjectPattern: { multiline: true },
      ImportDeclaration: { multiline: true, consistent: true, minProperties: 6 },
      ExportDeclaration: { multiline: true, consistent: true, minProperties: 6 },
    }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['warn', { code: 120, ignoreTemplateLiterals: true, ignoreStrings: true }],
  },
};
