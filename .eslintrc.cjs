module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/extensions': ['error', 'always', {
      ts: 'never',
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts','.vue']
      }
    },
  }
};
