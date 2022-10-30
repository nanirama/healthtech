import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { cutString } from '../../lib/functions'
import AuthorInfo from "../blog/AuthorInfo"

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
                        categories {
                            nodes {
                                name
                                slug
                            }
                        }
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
    const { title, slug, excerpt, author, featuredImage, blogSingle, categories } = LastPost.edges[0].node
    const category = categories.nodes[0]
    return (
        <>
            <div className="flex flex-col justify-start justify-items-stretch">
                <h6 className="text-xs uppercase cat_tlt pb-2">{category?.name}</h6>
                <h2 className="xl:text-4xl lg:text-3xl text-2xl font-bold text-black pb-4"><Link to={`/blog/${slug}`}>{title && title}</Link></h2>
                {excerpt && <div dangerouslySetInnerHTML={{ __html: cutString(excerpt, 130).replaceAll('&nbsp;', '') }} className="sm:pb-0 text-base mb-1" ></div>} 
                <div className="flex flex-col flex-end">
                    <div className="flex flex-row w-full items-center justify-between mt-10">
                        <AuthorInfo author={author}/>
                        <p>{blogSingle?.readingTime}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-2 w-full flex md:justify-end  justify-start justify-items-stretch">
                <GatsbyImage image={getImage(featuredImage.node.localFile)} alt={title && title} width={600} height={539} className="rounded-xl w-full" />
            </div>
        </>
    )
}
export default LatestPost
