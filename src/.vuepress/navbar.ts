import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/software/",
  {
    text: "软件及工具",
    icon: "folder",
    prefix: "/posts/software/",
    children: [
      { text: "Linux 常用命令", icon: "pen-to-square", link: "liunx" },
      { text: "Navicat 重置试用期时间", icon: "pen-to-square", link: "navicat" },
      {
        text: "ssh", children: [
          { text: "SSH生成密钥,git使用ssh连接", icon: "pen-to-square", link: "ssh" },
          { text: "使用ssh同时连接gitlab&github", icon: "pen-to-square", link: "ssh2" },
          { text: "linux使用ssh连接github", icon: "pen-to-square", link: "ssh3" },
        ]
      }
    ]
  },
  {
    text: "React",
    icon: "folder",
    prefix: "/react/",
    children: [
      { text: "React搭建环境", icon: "pen-to-square", link: "env" },
    ]
  },
  {
    text: "React Native",
    icon: "folder",
    prefix: "/reactNative/",
    children: [
      { text: "React Native搭建环境", icon: "pen-to-square", link: "env" },
    ]
  },
  {
    text: "博文",
    icon: "newspaper",
    prefix: "/posts/",
    children: [
      {
        text: "vuepress1.0",
        prefix: "vuepress/",
        children: [
          { text: "vuepress1.0 搭建", icon: "pen-to-square", link: "1" },
          { text: "vuepress1.0 部署", icon: "pen-to-square", link: "2" },
          { text: "vuepress1.0 记录", icon: "pen-to-square", link: "3" },
        ],
      },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // "strawberry",
    ],
  },
  {
    text: "博客帮助文档",
    icon: "circle-info",
    prefix: "/demo/",
    children: [
      { text: "Markdown 展示", icon: "pen-to-square", link: "markdown" },
      { text: "页面展示", icon: "pen-to-square", link: "page" },
      { text: "禁用展示", icon: "pen-to-square", link: "disable" },
      { text: "加密展示", icon: "pen-to-square", link: "encrypt" },
    ]
  }
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
