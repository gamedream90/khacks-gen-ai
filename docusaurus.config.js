const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Gen AI',
  url: 'https://github.com',
  baseUrl: '/khacks-gen-ai/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gamedream90', // Usually your GitHub org/user name.
  projectName: 'khacks-gen-ai', // Usually your repo name.
  deploymentBranch: "gh-pages",
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Gen AI',
        logo: {
          alt: 'KhacksLogo',
          src: 'img/khlogo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Start Learning',
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
                label: 'Start Learning',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/karunyahacks?lang=en',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/karunyahacks/',
              },
              {
                label: 'Linkdein',
                href: 'https://www.linkedin.com/company/karunyahacks/?originalSubdomain=in',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ReMo ${new Date().getFullYear()} khacks.org Built by KHacks`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
