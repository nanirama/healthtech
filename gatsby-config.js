require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});



const myQuery = `{
  posts: allWpPost {
    nodes {
      objectID:id
      title
      excerpt
      slug
      dateGmt
    }
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.posts.nodes,
    indexName : process.env.ALGOLIA_INDEX_NAME,
    settings: {
      attributesToSnippet: [`excerpt:20`],
    },
    matchFields: ['dateGmt'], // Array<String> overrides main match fields, optional
  },
];

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
        hostingWPCOM: false, 
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
          useGatsbyImage: false,
          createStaticFiles: process.env.NODE_ENV === 'development' ? false : true,
        },
        debug: {
          timeBuildSteps: true,
        },
        type: {
          __all: {
            limit: process.env.NODE_ENV === 'development' ? 10 : 3000,
          },
          Post:{
            limit: process.env.NODE_ENV === 'development' ? 10 : 3000, 
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
            limit: process.env.NODE_ENV === 'development' ? 10 : 250,
          },
          Category: {
            limit: 50,
          },
          User: {
            limit: process.env.NODE_ENV === 'development' ? 5 : 150,
          },
          MediaItem: {
            localFile: {
              requestConcurrency: process.env.NODE_ENV === 'development' ? 50 : 3000,
              maxFileSizeBytes: 5485760,
            },
          },
        },
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        skipIndexing: false,
        chunkSize: 10000
      },
    },
  ],
}