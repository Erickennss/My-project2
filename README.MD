# TypeScript build first time

## 2021 年使用现代工具启动 TypeScript 项目的指南。

=======

- （可选）esbuild 以捆绑用于浏览器（和 Node.js）
- 使用 typescript-eslint 进行 linting（tslint 已弃用）
- 使用 Jest （和 ts-jest ）进行测试)
- 将包发布到 npm
- 持续集成（GitHub Actions / GitLab CI)
- # 使用 TypeDoc 自动编写 API 文档

### 开始

```# Create project folder
mkdir my-project
cd my-project

# Create source folder and files
mkdir src
touch src/main.ts src/main.test.ts src/cli.ts

# Create a package.json
npm init -y

# Install TypeScript, linter and Jest
npm install --save-dev typescript @types/node ts-node
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install --save-dev jest ts-jest @types/jest

# Get a .gitignore
wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/.gitignore

# Get a tsconfig.json with some defaults (adapt as needed)
wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/tsconfig.json

# Get a .eslintrc.js
wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/.eslintrc.js

# Get a jest.config.js
wget https://raw.githubusercontent.com/metachris/typescript-boilerplate/master/jest.config.js

# Create a git repo and make the first commit
git init
git add .
git commit -am "initial commit"
```
