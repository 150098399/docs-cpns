import { defineConfig } from 'vitepress'

const date = new Date().getFullYear();
export default defineConfig({
  lang: "zh-Hans",
  title: 'LiComponents',
  base: '/docs-cpns/',
  head: [['link', { rel: 'icon', href: 'https://github.com/150098399/docs-cpns/blob/main/docs/title.svg' }]],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'github站点',
        link: 'https://github.com/150098399/m-components',
        target: '_blank'
      },
      {
        text: 'gitee站点',
        link: 'https://github.com/150098399/m-components',
        target: '_blank'
      }
    ],
    sidebar: [
      {
        text: '介绍',
        link: '/intro/'
      },
      {
        text: '快速上手',
        link: '/quickstart/'
      },
      {
        text: '图标选择器',
        link: '/icon/'
      },
      {
        text: '省市区选择',
        link: '/city/'
      },
      {
        text: '表格',
        link: '/table/'
      }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有©  ${date} 李陇杰`,
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
  },
});
