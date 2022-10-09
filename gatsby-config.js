const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

module.exports = {
  siteMetadata: {
    title: `Levels Blog: Ultimate Source for Metabolic Health Information and Advice`,
    description: `The Levels Blog is the leading source of information on the importance of metabolic health and the utility of continuous glucose monitors as biofeedback.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          backgroundColor: `transparent`,
          webpOptions: {quality: 100}
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://www.levelshealth.com/graphql`,     
        production: {
          allow404Images: false
        },    
        schema: {
          requestConcurrency: 50,
          queryDepth: 5,
          perPage: 10,
          timeout: 36000000,
        },
        html: {
          useGatsbyImage: true,
          createStaticFiles: true,
        },
        debug: {
          timeBuildSteps: true,
        },
        type: {
          __all: {
            limit: process.env.NODE_ENV === 'development' ? 6 : 6,
          },
          Page: {
            exclude: true,
          },
          MenuItem: {
            exclude: true,
          },
          Menu: {
            exclude: true,
          },
          Comment: {
            exclude: true,
          },
          Tag: {
            limit: 250,
          },
          Category: {
            limit: 20,
          },
          User: {
            limit: 150,
          },
          MediaItem: {
            localFile: {
              requestConcurrency: process.env.NODE_ENV === 'development' ? 5 : 5,
              maxFileSizeBytes: 5485760,
            },
          },
        },
      }
    },
  ],
}
