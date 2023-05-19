import { get } from './pages/rss.xml';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Case Studies',
          href: '#',
        },
        {
          text: 'Events',
          href: '#',
        },
        {
          text: 'Consulting',
          href: '#',
        },
        {
          text: 'Get Estimates',
          href: '#',
        },
         {
          text: 'Am I Available?',
          href: '#',
        },
        
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Accessibility, Web Performance, & SEO',
          href: getPermalink('/terms'),
        },
        {
          text: 'WordPress & NextJS',
          href: getPermalink('/privacy'),
        },
        {
          text: 'eCommerce',
          href: getPermalink('/terms'),
        },
        {
          text: '',
          href: getPermalink('/terms'),
        },
        {
          text: '',
          href: getPermalink('/privacy'),
        },
        {
          text: '',
          href: getPermalink('/privacy'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ]
    },
    {
      text: 'Contact Greg',
      href: getPermalink('/contact'),
    },
    {
      text: 'Articles',
      href: getBlogPermalink(),
    },
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://www.twitter.com/grmiller' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/gregraymiller/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/gregraymiller' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/shrinkray' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
