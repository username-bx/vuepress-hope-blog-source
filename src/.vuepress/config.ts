import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  // 左上角名称
  title: "汤圆",
  description: "汤圆的随笔记录",

  theme,

  // 覆盖原来的组件,展示新组件
  // 新组件中,包含 必应壁纸 一言描述
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    )
  },

  // Enable it with pwa
  // shouldPrefetch: false,
  plugins: [
    googleAnalyticsPlugin({
      // 配置项
      id: "G-R1WPVQFH8L",
      debug: true,
    }),
  ]
});
