console.log("NODE_ENV", process.env.NODE_ENV)
module.exports = {
  siteMetadata: {
    title: `Virtually Lolly`,
    description: `Application to make virtual Lollies to send your friends.`,
    author: `@shahzad6077`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-apollo`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "LOLLY",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "lolly",
        // Url to query from
        url:
          "https://virtual-lolly-shahzad.netlify.app/.netlify/functions/graphql",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
