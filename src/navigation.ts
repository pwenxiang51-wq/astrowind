import { getPermalink } from './utils/permalinks';

export const headerData = {
  // 顶部的导航菜单，去掉了冗余的英文选项
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '极客建站方案',
      href: '#', // 以后有了具体页面再改链接
    },
    {
      text: '关于我们',
      href: '#',
    },
  ],
  // 右上角的按钮，把原来的 Download 换成了你的业务引导
  actions: [{ text: '联系站长建站', href: '#', target: '_blank', variant: 'primary' }],
};

export const footerData = {
  // 底部导航栏，变成了干净利落的三个板块
  links: [
    {
      title: '核心业务',
      links: [
        { text: '极速外贸独立站', href: '#' },
        { text: 'VPS 自动化部署', href: '#' },
        { text: '无头电商架构规划', href: '#' },
      ],
    },
    {
      title: '技术支持',
      links: [
        { text: '建站教程', href: '#' },
        { text: '常见问题解答', href: '#' },
      ],
    },
  ],
  // 底部左下角的版权旁边的小链接
  secondaryLinks: [
    { text: '隐私政策', href: getPermalink('/privacy') },
    { text: '服务条款', href: getPermalink('/terms') },
  ],
  // 底部的社交图标，只保留了 GitHub 和一个占位，你也可以全删了
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/pwenxiang51-wq' },
  ],
  // 核心：把底部的作者版权换成你的名字！
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="#">Velox Labs</a> · 极客出海 All rights reserved.
  `,
};
