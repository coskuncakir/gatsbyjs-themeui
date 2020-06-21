module.exports = {
  siteMetadata: {
    title: `Coskun Cakir`,
    description: `I’m a front-end developer ...`,
    author: `@coscakir`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: "@jamesdanylik/gatsby-source-goodreads",
      options: {
        key: "45vD5s0OBPw0OMXApqtZw",
        id: "61767082-coskun-cakir",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coskun Cakir`,
        short_name: `coscakir`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/memoji.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
