// docusaurus.config.js or docusaurus.config.ts
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VEX Documentation',
  tagline: 'Verifiable Exchange Documentation',
  url: 'https://suniljalandhra.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn', // TODO:- Remove the warn and add 'throw'
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'suniljalandhra', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Add deployment branch
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // This makes docs the default landing page
          editUrl: 'https://github.com/trade-vex/vex-docs/edit/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } as Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'VEX Logo',
        src: 'img/logo.svg',
        style: {
          verticalAlign: 'middle',
          position: 'relative',
        },
      },
      items: [
        {
          type: 'doc',
          docId: 'Intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/trade-vex',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/Getting-started/Signing-up',
            },
            {
              label: 'Exchange Design',
              to: '/exchange-design/order-matching',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/trade-vex',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/trade_vex',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trade VEX. Built with Docusaurus.`,
    },
  } as Preset.ThemeConfig,
};

export default config;