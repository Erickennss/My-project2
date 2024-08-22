// eslint.config.cjs
"use strict";

const typescriptParser = require("@typescript-eslint/parser");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");

module.exports = [
  {
    root: true,
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    extends: [js.configs.recommended, "plugin:@typescript-eslint/recommended"],
  },
];
