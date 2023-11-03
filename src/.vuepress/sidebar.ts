import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "软件(工具)集合",
      icon: "laptop-code",
      prefix: "posts/software",
      children: "structure",
    },
    {
      text: "vuepress1.0",
      icon: "book",
      prefix: "posts/vuepress",
      children: "structure",
    },
    {
      text: "博客帮助文档",
      icon: 'circle-info',
      prefix: "demo",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
