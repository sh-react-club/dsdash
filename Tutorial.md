# 项目搭建笔记

## 基本配置

- lerna init
- 修改lerna.json  添加 npmClient
- 添加 useWorkspaces 
- packages 添加 workspaces
- lerna create array 
- yarn add typescript -W 在全项目安装 
- npx tsc --init


package.json

```json
  "workspaces": [
    "packages/*"
  ],
```

lerna.json

```json

{
  "packages": [
    "packages/*"
  ],
  "npmClient": "yarn",
  "version": "0.0.3",
  "useWorkspaces": true
}

```

##  eslint 

### 安装相关 依赖

- eslint  javascript代码检测工具，使用espree解析器
- @typescript-eslint/parser 将 TypeScript 转换为 ESTree，使 eslint 可以识别
- @typescript-eslint/eslint-plugin 只是一个可以打开或关闭的规则列表

```bash
$ yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

```
自定义配置，添加配置文件 .eslintrc.js

```js

module.exports = {
  parser: {},  // 解析器
  extends: [], // 继承的规则 [扩展]
  plugins: [], // 插件
  rules: {}    // 规则
};

```

## prettier

- prettier  格式化规则程序
- eslint-config-prettier 禁用所有和 Prettier 产生冲突的规则
- eslint-plugin-prettier 把 Prettier 应用到 Eslint，配合 rules "prettier/prettier": "error" 实现 Eslint 提醒

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

eslitn + prettier 完整配置

```js

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
};

```
## vscode 自动格式化

vscode 添加项目配置文件

```json
{
       "eslint.enable": true,  //是否开启vscode的eslint
    //    "editor.formatOnSave": true,
       "editor.codeActionsOnSave": {
           "source.fixAll.eslint": true
       },
       "eslint.options": {    //指定vscode的eslint所处理的文件的后缀
           "extensions": [
               ".js",
               ".vue",
               ".ts",
               ".tsx"
           ]
       },
       "eslint.validate": [     //确定校验准则
           "javascript",
           "javascriptreact",
    ]
}
```

## jest

- jest
- @types/jest
- ts-jest