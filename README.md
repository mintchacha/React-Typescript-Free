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
편집 이탈키 : q

게행문자 처리
win : git config --global core.autocrlf true
mac : $ git config --global core.autocrlf false

git add README.md
git commit -m "first commit"
git remote add origin https://github.com/mintchacha/React-Typescript-Free.git
git pull origin main
git push origin main

git checkout main
git pull origin main
git merge 작업브랜치명
git branch -D 작업브랜치명
git branch 생성할브랜치명 복사할브랜치

git revert 커밋이름 (git log로 확인)
```
