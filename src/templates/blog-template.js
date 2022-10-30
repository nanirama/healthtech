import React from "react"
import aa from 'search-insights';
import { Helmet } from "react-helmet";
import { graphql } from "gatsby"
import Layout from '../components/layout'
import BlogIndex from '../components/blog'
const BlogTemplate = (props) => {
  const { title } = props.data.postDetails
  return (
    <Layout>
      <Helmet>
      <script>
      {`
      var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@2.0.3";
      !function(e,a,t,n,s,i,c){e.AlgoliaAnalyticsObject=s,e[s]=e[s]||function(){
      (e[s].queue=e[s].queue||[]).push(arguments)},i=a.createElement(t),c=a.getElementsByTagName(t)[0],
      i.async=1,i.src=n,c.parentNode.insertBefore(i,c)
      }(window,document,"script",ALGOLIA_INSIGHTS_SRC,"aa");
      `}
      </script>
      </Helmet>
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