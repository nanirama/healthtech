import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import BlogIndex from '../components/blog'
const BlogTemplate = (props) => {
  console.log('props', props)
  const { title } = props.data.postDetails
  return (
    <Layout>
      <div className="relative pt-28 md:pb-28 pb-20">
        <BlogIndex props={props}/>
      </div>    
    </Layout>
  )
}
export const query = graphql`
  query getPostDetails($id: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    postDetails:  wpPost(id: {eq: $id}) {
      content
      id
      title
      modified(formatString: "YYYY-MM-DD")
      date(formatString: "YYYY-MM-DD")
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      blogSingle {
        readingTime
        contentOverview {
          item
        }
      }
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData( width:2000)
            }
          }
        }
      }
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
      }
    }
  }
`

export default BlogTemplate