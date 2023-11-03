import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/software/",
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
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
