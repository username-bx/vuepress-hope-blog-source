import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

// const MR_HOPE_AVATAR = '' ;

// 参考: https://theme-hope.vuejs.press/zh/guide/
// hopeTheme 可以传入第二个参数 
// 实现通过别名替换组件
// { custom: true }
// config.ts 添加 alias 配置

export default hopeTheme({
  hostname: "http://luogesidoc.com",

  author: {
    name: "tangyuan",
    url: "http://luogesidoc.com",
  },

  // 站点图标
  favicon: 'sun.svg',

  // 设置图标资源
  iconAssets: 'fontawesome-with-brands',
  // iconAssets: 'iconfont',
  // iconPrefix: 'icon-',
  // iconAssets: [
  //   "iconfont",
  //   "fontawesome-with-brands",
  //   "//at.alicdn.com/t/c/font_4314330_7v1yy674fxp.css",
  // ],

  docsDir: "src",

  // navbar 导航栏
  navbar,
  // 导航栏 左上角logo 和 头像   (导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径)
  logo: "/sun.svg",
  // 导航栏 左上角logo 和 头像   (夜间模式下导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径)
  logoDark: '/sun.svg',
  // 导航栏 右上角 github 链接
  repo: "username-bx/vuepress-hope-blog-source",
  // 导航栏 右上角 github 无障碍标签
  repoLabel: 'github',
  // 导航栏 向下滚动时自动隐藏导航栏
  navbarAutoHide: 'always',

  // sidebar
  sidebar,
  // 侧边栏 排序器
  sidebarSorter: 'date',

  hotReload: true,

  footer: "默认页脚",

  displayFooter: true,

  blog: {
    // 博主姓名
    name: 'Tang Yuan',
    // 博主头像
    avatar: '/sun.svg',
    // 博主介绍
    description: "love coding, happy life",
    intro: "/intro.html",
    medias: {
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "bx.ma0327@gmail.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,
      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
}, { custom: true });
