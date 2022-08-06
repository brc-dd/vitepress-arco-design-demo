import DefaultTheme from 'vitepress/theme'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ArcoVue)
  }
}
