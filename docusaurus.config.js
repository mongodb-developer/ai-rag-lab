// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Change here to customise config

// Name of the Github Repo, it's also teh baseUrl
const workshopName = 'ai-rag-lab';
// Change this if hosting outside mongodb-developer
const organizationName = "mongodb-developer";

// Main page config
const title = "Build RAG Applications using MongoDB";
const tagLine = "";
const startButtonTitle = "Start Lab";
const favicon = "img/favicon.ico"

// Main Page Features
const featureList = [
  {
    title: 'Hands-On Experiences',
    illustration: 'img/coding.png',
    description: `
        Learn by doing, not by reading.
    `,
  },
  {
    title: 'Amazing Instructors',
    illustration: 'img/highfive.png',
    description: `
        Build it with the help of our amazing instructors, or just do it on your own.
    `,
  },
  {
    title: 'Take-Home Material',
    illustration: 'img/writing.png',
    description: `
        Take home the material and keep learning.
    `,
  },
];

// UTM stuff

const utmAdvocateName = `apoorva.joshi`;
const utmWorkshopName = 'ai_rag_lab'

const utmParams = `utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

// Footer links (probably no need to change them)

const footerLinks = [
  {
    label: "Try MongoDB Atlas",
    href: `https://www.mongodb.com/try?${utmParams}`,
  },
  {
    label: "Developer Center",
    href: `https://www.mongodb.com/developer?${utmParams}`,
  },
  {
    label: "GenAI Code Examples",
    href: `https://github.com/mongodb-developer/GenAI-Showcase`,
  },
  {
    label: "GenAI Forums",
    href: `https://www.mongodb.com/community/forums/c/generative-ai/162?${utmParams}`,
  },
  {
    href: `https://github.com/${organizationName}/${workshopName}`,
    label: "This lab in GitHub",
  },
];

///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${title}`,
  tagline: `${tagLine}`,
  url: `https://${workshopName}.github.io`,
  baseUrl: `/${workshopName}/`,
  projectName: `${organizationName}.github.io`,
  organizationName: `${organizationName}`,
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: `${favicon}`,
  deploymentBranch: "gh-pages",
  staticDirectories: ["static"],
  customFields: {
    startButtonTitle: `${startButtonTitle}`,
    featureList: featureList,
    utmParams
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/${organizationName}/${workshopName}/blob/main`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-ZJ28V71VTQ",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [require.resolve("docusaurus-lunr-search")],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        title: `${title}`,
        logo: {
          alt: "MongoDB Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          className: "navbar-logo",
          width: "135px",
          height: "100%",
        },
        items: [
         
        ],
      },
      footer: {
        style: "dark",
        links: footerLinks,
        copyright: `© ${new Date().getFullYear()} MongoDB, Inc.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell", "swift", "kotlin"],
      },
    }),
};

module.exports = config;
