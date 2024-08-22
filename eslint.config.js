"use strict";

const typescriptParser = require("@typescript-eslint/parser");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");

// 提取 @eslint/js 的 recommended 配置中的规则和环境等
const eslintJsRecommendedRules = js.configs.recommended.rules || {};
// 这里不再需要提取 env，因为要转换方式

module.exports = [
  {
    languageOptions: {
      parser: typescriptParser,
      // 假设原来在 env 中定义的全局变量
      globals: {
        // 例如在 node 环境下可能有的全局变量
        process: "readonly",
        // 在 browser 环境下可能有的全局变量
        window: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      // 将 @eslint/js recommended 的规则合并进来
      ...eslintJsRecommendedRules,
      // 可以添加或覆盖一些你自己的通用规则，如果需要的话
      "no-console": "off",
    },
    // 提取 @typescript-eslint/recommended 的规则并合并进来
    ...(typescriptPlugin.configs.recommended.rules || {}),
    // 可以添加或覆盖一些你自己的 TypeScript 特定规则，如果需要的话
    "@typescript-eslint/no-explicit-any": "off",
  },
];
