import type { Icon } from 'astro-icon/components';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Tools', href: getPermalink('/tools') },
    { text: 'Templates', href: getPermalink('/templates') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ 
    text: 'WhatsApp', 
    href: 'https://wa.me/628213141688', 
    target: '_blank',
    icon: 'tabler:brand-whatsapp',
       }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Akuntansi F&B', href: getPermalink('/services') },
        { text: 'Perpajakan', href: getPermalink('/services') },
        { text: 'Konsultasi Keuangan', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Tools', href: getPermalink('/tools') },
        { text: 'Templates', href: getPermalink('/templates') },
        { text: 'FAQ', href: getPermalink('/faq') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Term of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/guslanputra' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/guslan.id' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/628213141688' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© ${new Date().getFullYear()} Guslan Putra · Konsultan Keuangan & Akuntansi F&B Bali · <a href="/privacy" class="hover:underline">Privacy</a> · <a href="/terms" class="hover:underline">Terms</a>`,
};