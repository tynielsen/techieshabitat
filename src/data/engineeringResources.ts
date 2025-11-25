import type { EngineeringResource } from '../types';

export const engineeringResources: EngineeringResource[] = [
  {
    category: 'Standards & Best Practices',
    links: [
      { name: 'Google Style Guides', url: 'https://google.github.io/styleguide/' },
      { name: 'Refactoring Guru', url: 'https://refactoring.guru' },
      { name: 'The Twelve-Factor App', url: 'https://12factor.net' },
      { name: 'WCAG Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
    ],
  },
  {
    category: 'Documentation',
    links: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
      { name: 'DevDocs', url: 'https://devdocs.io' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
      { name: 'GitHub Docs', url: 'https://docs.github.com' },
    ],
  },
  {
    category: 'Learning Platforms',
    links: [
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org' },
      { name: 'Exercism', url: 'https://exercism.org' },
      { name: 'LeetCode', url: 'https://leetcode.com' },
      { name: 'Coursera', url: 'https://www.coursera.org' },
    ],
  },
  {
    category: 'Freelance Platforms',
    links: [
      { name: 'Upwork', url: 'https://www.upwork.com' },
      { name: 'Toptal', url: 'https://www.toptal.com' },
      { name: 'Fiverr', url: 'https://www.fiverr.com' },
      { name: 'Gun.io', url: 'https://gun.io' },
    ],
  },
];
