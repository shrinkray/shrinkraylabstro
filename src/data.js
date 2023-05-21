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
          href: getPermalink('/projects/case-studies'),
        },
        {
          text: 'Consulting',
          href: '#',
        },
        {
          text: 'Get Estimates',
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
          text: 'Web Design & Development',
          href: getPermalink('#'),
        },
        {
          text: 'UX Engineering',
          href: getPermalink('/ux-engineering'),
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
      title: 'Projects',
      links: [
        { text: 'Case Studies', href: getPermalink('/case-studies') },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Accessibility', href: '#' },
        { text: 'Web Performance', href: '#' },
        { text: 'Web Development', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Greg', href: getPermalink('/about') },
        { text: 'Contact Me', href: getPermalink('/contact') },
        { text: 'Articles', href: getBlogPermalink() },
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
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(~/assets/images/favicon-48x48.png)]"></span>
    Made with ❤️ love by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://shrinkraylabs.com/">Shrinkray Labs</a> · All rights reserved.
  `,
};
