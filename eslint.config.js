// eslint.config.js

import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";

export default [
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
