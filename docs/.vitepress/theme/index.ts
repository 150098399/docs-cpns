import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mUI from 'li-components'
import 'li-components/style.css'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(`el-icon-${toLine(key)}`, component);
    }
    app.use(ElementPlus)
    app.use(mUI)
  }
}