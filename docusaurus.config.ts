import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Techne Knowledgebase',
  tagline: 'Core concepts, tools, and tips for the data science course',
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
      title: 'Techne KB',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kbSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/techne-fundamentals/terminal-basics',
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
            {label: 'Techne Fundamentals', to: '/docs/techne-fundamentals/terminal-basics'},
            {label: 'VS Code', to: '/docs/vs-code/vscode-tips'},
            {label: 'Source Control', to: '/docs/source-control/git-tips'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Tips & Tricks', to: '/docs/tips-&-tricks/ai-prompting-tips'},
          ],
        },
      ],
      copyright: `Techne Data Science Course`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['r', 'python', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
