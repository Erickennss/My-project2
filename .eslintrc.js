module.exports = {
  // 设置为根配置文件
  root: true,
  // 指定解析器
  parser: "@typescript-eslint/parser",
  // 定义插件
  plugins: ["@typescript-eslint"],
  // 扩展规则集
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:node/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
