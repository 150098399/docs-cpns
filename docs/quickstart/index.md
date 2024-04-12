---
outline: deep
---

# 快速上手
当前组件库是依赖于'Element Plus'二次开发，使用前确保项目中已经正确安装和引入`Element Plus`，[Element Plus安装使用指南](https://element-plus.org/zh-CN/guide/installation.html)

## 安装
```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm i -S li-components

# cnpm
$ cnpm i -S li-components

# Yarn
$ yarn add -S li-components

# pnpm
$ pnpm i -S li-components
```

## 引入
### 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mUI from 'li-components'
import 'li-components/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(mUI)
app.mount('#app')
```

### 按需引入
```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import chooseIcon from 'li-components/chooseIcon'
// ...
import 'li-components/chooseIcon/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(chooseIcon)
app.mount('#app')
```
## 开始使用
现在你可以启动项目了。 对于每个组件的用法，请查阅 对应的独立文档。
