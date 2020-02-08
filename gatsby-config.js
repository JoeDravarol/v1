module.exports = {
  siteMetadata: {
    title: `Joe Lee`,
    description: `Hello, My name is Joe. I'm a Fullstack Web Developer who enjoy spending my free time increasing my knowledge of Web Development, tinkering with new technologies and helping people new to Web Development in The Odin Project's community.`,
    author: `Joe Lee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`src`, `src/styles`],
        data: `@import 'src/styles/variables';`,
      },
    },
    `gatsby-alias-imports`,
  ],
}
