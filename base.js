const { NODE_ENV } = process.env
const isLocal = [undefined, 'local', 'developemnt'].includes(NODE_ENV)

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  extends: ['standard', 'plugin:import/recommended'],
  rules: {
    curly: [2, 'multi-line'],
    'import/newline-after-import': 2,
    'import/no-useless-path-segments': [
      2,
      {
        noUselessIndex: true
      }
    ],
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/no-unresolved': 0,
    'no-empty-function': 2,
    'no-multi-spaces': 2,
    'no-new': 0,
    'no-var': 2,
    // NOTE: Cannot read property 'range' of null Occurred (https://github.com/babel/babel-eslint/issues/681)
    'template-curly-spacing': 0,
    indent: 0,
    'object-shorthand': 2,
    'padded-blocks': [2, 'never'],
    'prefer-const': 2,
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-alert': isLocal ? 0 : 2,
    'no-console': isLocal ? 0 : 2,
    'no-debugger': isLocal ? 0 : 2
  },
  globals: {
    wx: true,
    WeixinJSBridge: true
  }
}
