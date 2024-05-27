import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/software/",
  {
    text: "软件及工具",
    icon: "folder",
    prefix: "/posts/software/",
    children: [
      { text: "git 头像 gitlens 头像", icon: "pen-to-square", link: "gitlen" },
      { text: "nginx 重启 linux 关闭防火墙", icon: "pen-to-square", link: "nginx" },
      { text: "查看端口占用 windows", icon: "pen-to-square", link: "netstat" },
      { text: "debugger时,get post请求的content-length", icon: "pen-to-square", link: "contentLengthInPost" },
      { text: "复制到剪切板功能", icon: "pen-to-square", link: "clipbord" },
      { text: "使用md5检查el-table中,被修改的一行数据", icon: "pen-to-square", link: "md5element" },
      { text: "VSCode使用Snippets设置代码块", icon: "pen-to-square", link: "snippets" },
      { text: "Linux 常用命令", icon: "pen-to-square", link: "liunx" },
      { text: "Navicat 重置试用期时间", icon: "pen-to-square", link: "navicat" },
      { text: "git 常用命令", icon: "pen-to-square", link: "git" },
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
    prefix: "/posts/react/",
    children: [
      { text: "体验react", icon: "pen-to-square", link: "experience" },
      { text: "React搭建环境", icon: "pen-to-square", link: "env" },
    ]
  },
  {
    text: "React Native",
    icon: "folder",
    prefix: "/posts/reactNative/",
    children: [
      { text: "React Native搭建环境", icon: "pen-to-square", link: "env" },
      { text: "[NativeWind Bug] The web platform does not word on windows", icon: "pen-to-square", link: "nativeWindBug" },
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
