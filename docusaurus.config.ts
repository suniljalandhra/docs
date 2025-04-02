// docusaurus.config.js or docusaurus.config.ts
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VEX Documentation',
  tagline: 'Verifiable Exchange Documentation',
  url: 'https://verifiable.exchange',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'trade-vex', // Usually your GitHub org/user name.
  projectName: 'vex-docs', // Usually your repo name.

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
          docId: 'what-is-vex',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/trade-vex/vex-docs',
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
              to: '/getting-started/signing-up',
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