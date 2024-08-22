"use strict";

const typescriptParser = require("@typescript-eslint/parser");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");

// 提取 @eslint/js 的 recommended 配置中的规则和环境等
const eslintJsRecommendedRules = js.configs.recommended.rules || {};
const eslintJsRecommendedEnv = js.configs.recommended.env || {};

module.exports = [
  {
    languageOptions: {
      parser: typescriptParser,
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
    env: {
      // 将 @eslint/js recommended 的环境配置合并进来
      ...eslintJsRecommendedEnv,
      // 可以添加或覆盖一些你自己的环境配置，如果需要的话
      browser: true,
    },
    // 提取 @typescript-eslint/recommended 的规则并合并进来
    ...(typescriptPlugin.configs.recommended.rules || {}),
    // 可以添加或覆盖一些你自己的 TypeScript 特定规则，如果需要的话
    "@typescript-eslint/no-explicit-any": "off",
  },
];
