import typescriptPlugin from "eslint-plugin-typescript-eslint";
module.exports = {
  languageOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: {
    "@typescript-eslint": typescriptPlugin,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // Add any custom rules here
  },
};
