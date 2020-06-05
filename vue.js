module.exports = {
  extends: [
    'standard',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended'
  ],
  plugins: ['vue'],
  rules: {
    'vue/attributes-order': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
