// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Baley Bits",
  tagline: "Simplified Tutorials, Tech and Sports",
  url: "https://polite-bay-0071b4b10.1.azurestaticapps.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Yoofi-A-Appiah", // Usually your GitHub org/user name.
  projectName: "my-blog", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Baley Bits",
        logo: {
          alt: "My Site Logo",
          src: "img/bb3.png",
        },
        items: [
          {
            type: "doc",
            docId: "about",
            position: "left",
            label: "Sports & Tech News",
          },
          { to: "/blog", label: "Tutorials", position: "left" },
          {
            href: "https://twitter.com/appiah1_yoofi",
            label: "Twitter",
            position: "right",
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/yoofi-appiah-4a7152222",
            position: "right",
          },
          {
            label: "GitHub",
            href: "https://github.com/Yoofi-A-Appiah",
            position: "right",
          },
          // ],
        ],
      },
      footer: {
        style: "dark",
        links: [
          
          {
            title: "Links",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/appiah1_yoofi",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/yoofi-appiah-4a7152222",
              },
              {
                label: "GitHub",
                href: "https://github.com/Yoofi-A-Appiah",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Barley Bits. Built with Docusaurus. <br> Powered by Azure Static Web Apps`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
