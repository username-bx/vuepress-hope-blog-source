import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/software/",
  {
    text: "软件及工具",
    icon: "folder",
    prefix: "/posts/software/",
    children: [
      { text: "table 滚动", icon: "pen-to-square", link: "table" },
      { text: "魔方", icon: "pen-to-square", link: "mofang" },
      { text: "oxygen", icon: "pen-to-square", link: "oxygenNotIncluded" },
      { text: "homebrew", icon: "pen-to-square", link: "homebrew" },
      { text: "jdk", icon: "pen-to-square", link: "jdk" },
      { text: "util", icon: "pen-to-square", link: "UtilMethods" },
      { text: "vscode 插件", icon: "pen-to-square", link: "vscodeExtensions" },
      { text: "warp", icon: "pen-to-square", link: "warp" },
      { text: "mac shell", icon: "pen-to-square", link: "buildAndCopy" },
      { text: "certbot", icon: "pen-to-square", link: "certbot" },
      { text: "nvm", icon: "pen-to-square", link: "nvm" },
      { text: "docker", icon: "pen-to-square", link: "docker" },
      { text: "mongo", icon: "pen-to-square", link: "mongo" },
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
    icon: "layer-group",
    prefix: "/posts/react/",
    children: [
      { text: "体验react", icon: "pen-to-square", link: "experience" },
      { text: "React 搭建环境", icon: "pen-to-square", link: "env" },
      { text: "React extensions", icon: "pen-to-square", link: "extensions" },
      { text: "React jsx", icon: "pen-to-square", link: "jsx" },
      { text: "React comp", icon: "pen-to-square", link: "comp" },
      { text: "React state", icon: "pen-to-square", link: "state" },
      { text: "React event", icon: "pen-to-square", link: "event" },
      { text: "React effect", icon: "pen-to-square", link: "useEffect" },
    ]
  },
  {
    text: "Nextjs",
    icon: "ghost",
    prefix: "/posts/nextjs/",
    children: [
      { text: "1", icon: "pen-to-square", link: "1" },
      { text: "i18n", icon: "pen-to-square", link: "i18n" },
      { text: "主题", icon: "pen-to-square", link: "theme" },
      { text: "时间", icon: "pen-to-square", link: "timeZone" },
    ]
  },
  {
    text: "React Native",
    icon: "shop",
    prefix: "/posts/reactNative/",
    children: [
      { text: "React Native搭建环境", icon: "pen-to-square", link: "env" },
      { text: "[NativeWind Bug] The web platform does not word on windows", icon: "pen-to-square", link: "nativeWindBug" },
    ]
  },
  {
    text: "vue3",
    icon: "chalkboard",
    prefix: "/posts/vue3/",
    children: [
      { text: "vite", icon: "pen-to-square", link: "1" },
      { text: "reactivity", icon: "pen-to-square", link: "2" },
      { text: "composition", icon: "pen-to-square", link: "3" },
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
