import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import LatestPost from "../components/elements/LatestPost"
import CategoryListsection from "../components/elements/CategoryList"
import LatestArticle from "../components/elements/LatestArticles"

const IndexPage = (props) => {
  return (
    <Layout>
      <div className="bg-gradient relative md:pt-36 pt-32 md:pb-28 pb-20">
        <CategoryListsection />
        <LatestPost />
      </div>
      <LatestArticle data={props.data.LatestPosts.edges} />
    </Layout>
  )
}

export const query = graphql`
query HomePageQuery {
  LatestPosts : allWpPost(limit: 12, sort: {order: DESC, fields: modified}) {
    edges {
      node {
        title
        id
        slug
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(height: 400, width: 600)
              }
            }
          }
        }
        categories {
          nodes {
            name
          }
        }
        blogSingle {
          readingTime
        }
      }
    }
  }
}
`
export default IndexPage


