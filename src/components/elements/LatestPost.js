import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LatestPost = () => {
    const { LastPost } = useStaticQuery(
        graphql`
          query {
            LastPost : allWpPost(sort: {order: DESC, fields: date}, limit: 1) {
                    edges {
                    node {
                        id
                        slug
                        title
                        guid
                        date
                        featuredImage {
                        node {
                            localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                            }
                        }
                        }
                    }
                    }
                }
          }
        `
    )
    console.log('LastPost', LastPost.edges[0].node)
    const { title, featuredImage } = LastPost.edges[0].node
    return (
        <div className="max-w-7xl mx-auto px-4 md:mt-8 mt-4">
            <div className="bg-black/[.03] border border-gray-200 rounded-l-xl md:rounded-b-none md:rounded-bl-xl rounded-b-xl flex md:flex-row flex-col-reverse justify-between items-center h-100">
                <div className="md:w-1/2 w-full xl:px-16 sm:px-10 px-4 md:py-5 py-14 flex flex-col lg:gap-6 gap-4 justify-center h-100">
                    <h6 className="text-xs uppercase cat_tlt">Nutrition</h6>
                    <h2 className="xl:text-6xl lg:text-5xl text-4xl text-black tracking-tight">{title && title}</h2>
                    <div className="w-100 flex flex-col">
                        <div className="w-100 text-sm font-bold">Braden McCarthy</div>
                        <div className="w-100 text-xs text-gray-400">11 min read</div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex md:justify-end justify-center">
                    <GatsbyImage image={getImage(featuredImage.node.localFile)} alt={title && title} width={600} height={539} className="md:rounded-r-xl md:rounded-l-none rounded-t-xl w-full" />
                    {/* <img src={Bloghero} alt="" width={600} height={539} className="md:rounded-r-xl md:rounded-t-none rounded-t-xl w-full" /> */}
                </div>
            </div>
        </div>
    )
}
export default LatestPost
