# React + TypeScript + Vite

이 프로젝트에 사용된 모듈

- react-router-dom
- styled-component
- react-icons

## ESLint 설정

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
          {
            pattern: "@hooks/*",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@pages/*",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@components/*",
            group: "internal",
            position: "after",
          },
        ],

        pathGroupsExcludedImportTypes: ["@tanstack*"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
```

## git 설명서

```
게행문자 처리
win : config --global core.autocrlf true
mac : $ git config --global core.autocrlf false

git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mintchacha/React-Typescript-Free.git
git push -u origin main
```
