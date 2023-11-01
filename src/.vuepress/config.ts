import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";


export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  // 左上角名称
  title: "汤圆",
  description: "汤圆的随笔记录",

  theme,

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
