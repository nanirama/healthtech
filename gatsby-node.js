const _l = require('lodash');
const Promise = require('bluebird');
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
     graphql(`
        query{
            allPosts : allWpPost {
              edges {
                node {
                  id
                  slug
                }
              }
            }
            allWpCategory {
              edges {
                node {
                  id
                  slug
                  posts {
                    nodes {
                      id
                    }
                  }
                }
              }
            }
           
        }      
    `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        
      _l.each(result.data.allPosts.edges, (edge) => {
        createPage({
            path: `blog/${edge.node.slug}`,
            component: path.resolve("./src/templates/blog-template.js"),
            context: {
              id: edge.node.id
            },
        })
      })

      const postsPerPage = 14
      _l.each(result.data.allWpCategory.edges, (edge) => {
        let posts = edge.node.posts.nodes
        let numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog/category/${edge.node.slug}` : `/blog/category/${edge.node.slug}/${i + 1}`,
            component: path.resolve("./src/templates/blog-category-template.js"),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
              id: edge.node.id
            },
            })
          })
        })

      resolve();
    });
  })
}