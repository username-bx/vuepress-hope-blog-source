import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "软件(工具)集合",
      icon: "layer-group",
      prefix: "posts/software",
      children: "structure",
    },
    {
      text: "React",
      icon: "layer-group",
      prefix: "posts/react",
      children: "structure",
    },
    {
      text: "Nextjs",
      icon: "layer-group",
      prefix: "posts/nextjs",
      children: "structure",
    },
    {
      text: "React Native",
      icon: "layer-group",
      prefix: "posts/reactNative",
      children: "structure",
    },
    {
      text: "Vue",
      icon: "layer-group",
      prefix: "posts/vue3",
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
