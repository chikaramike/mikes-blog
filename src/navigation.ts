import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Log', href: getPermalink('/log') },
    { text: 'Notes', href: getPermalink('/notes') },
    { text: 'Articles', href: getPermalink('/articles') },
    { text: 'Maps', href: getPermalink('/maps') },
    { text: 'Tools', href: getPermalink('/tools') },
    { text: 'Resume', href: getPermalink('/resume') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Garden',
      links: [
        { text: 'Log', href: getPermalink('/log') },
        { text: 'Notes', href: getPermalink('/notes') },
        { text: 'Articles', href: getPermalink('/articles') },
        { text: 'Maps', href: getPermalink('/maps') },
        { text: 'Tools', href: getPermalink('/tools') },
      ],
    },
    {
      title: 'About this site',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Resume', href: getPermalink('/resume') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: 'Built as a personal digital garden for useful ideas and honest iteration.',
};
