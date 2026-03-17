import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Products', href: '#' },
    { text: 'About', href: '#' },
  ],
  actions: [{ text: 'Contact Sales', href: '#', target: '_blank', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'VPS Scripts', href: '#' },
        { text: 'Digital Tools', href: '#' },
        { text: 'Hardware', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Documentation', href: '#' },
        { text: 'FAQ', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Service', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="#">VELOX</a> · All rights reserved.
  `,
};
