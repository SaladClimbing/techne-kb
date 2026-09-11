import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PPBDS Knowledgebase',
  tagline: 'Everything you need for the data science course',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://saladclimbing.github.io',
  baseUrl: '/techne-kb/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PPBDS KB',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kbSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/tips-&-tricks/antigravity-tips',
          label: 'Getting Started',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Topics',
          items: [
            {label: 'R & Tidyverse', to: '/docs/tips-&-tricks/antigravity-tips'},
            {label: 'Python', to: '/docs/tips-&-tricks/antigravity-tips'},
            {label: 'Statistics', to: '/docs/tips-&-tricks/antigravity-tips'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Machine Learning', to: '/docs/tips-&-tricks/antigravity-tips'},
            {label: 'Visualization', to: '/docs/tips-&-tricks/antigravity-tips'},
            {label: 'Data Wrangling', to: '/docs/tips-&-tricks/antigravity-tips'},
          ],
        },
      ],
      copyright: `PPBDS Data Science Course`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['r', 'python', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
