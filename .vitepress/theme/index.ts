// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.scss'
import 'virtual:uno.css'
import Layout from "./Layout.vue"
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import ThemedImg from "./components/ThemedImg.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app)
    app.component('ThemedImg', ThemedImg)
  }
} satisfies Theme
