import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout'
// import SEO from '../components/seo'
import CategoryIndex from '../components/blog/CategoryIndex';
import CategoryListsection from "../components/elements/CategoryList"
const Blog = (props) => {  
    const { currentPage, numPages } = props.pageContext     
    const { CatData, PostData } = props.data
    return (
    <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 pagecontainer">
        <CategoryListsection />
        <CategoryIndex category={CatData} data={PostData} />
        </div>
        {/* <SEO cpath = {props.cpath} /> */}
        {/* <div className="blog_blk w-100 float-left py-4">   
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-8 col-xs-12">
                    {CatData.name && <h1 className="tlt">{CatData.name}</h1> }
                </div>
                <div className="col-md-4 col-xs-12">
                  {CatData.slug && <BlogFilter path={CatData.slug}/>}                  
                </div>
            </div>     
            <div className="row d-flex align-items-stretch">                
                    { PostData.edges.map((item,index) => {
                        return (
                          <div className="col-md-4 col-sm-6 col-xs-12 align-self-stretch" key={index}>
                            <BlogCard data={item.node}/>
                          </div>
                        )
                    })}                
            </div>  
            {numPages>1 && <Paginate currentPage={currentPage} numPages={numPages} path={`blog/${CatData.slug}`}/> }         
        </div>
        </div> */}
    </Layout>
)
}

export const query = graphql`
query getAllCatPosts($skip: Int!, $limit: Int!, $id: String) {
    CatData :  wpCategory(id: {eq: $id}) {
      name
      slug
    }
    PostData : allWpPost(skip: $skip, limit: $limit, filter: {categories: {nodes: {elemMatch: {id: {eq: $id}}}}}) {
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
            blogSingle {
              readingTime
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
          }
        }
      }
}
`
export default Blog