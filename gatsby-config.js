/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv  = require('dotenv');

dotenv.config()

module.exports = {
  /* Your site config here */
  plugins: [
    { 
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `brdbza16ixqm`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name:'images',
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_self",
            rel: "nofollow"
          }
        }
        ]
      }
    },
  ]
}
