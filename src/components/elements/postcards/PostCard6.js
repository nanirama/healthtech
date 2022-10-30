import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import AuthorInfo from "../../blog/AuthorInfo"


const PostCard6 = ({ data }) => {
    const { title, slug, author, featuredImage } = data
    return (
        <div className="w-100 flex flex-row justify-between justify-items-stretch mt-4 pb-4 border-b-2 border-gray-200">
            <div className="flex flex-col gap-1">
                <h4 className="text-2xl font-bold text-black"><Link to={`/blog/${slug}`}>{title && title}</Link></h4>
                <AuthorInfo author={author}/>
            </div>
            <div className="flex justify-end w-40 pt-2 content-end">
                <GatsbyImage image={getImage(featuredImage.node.localFile)} alt={title && title} width={60} height={60}  />
            </div>
        </div>
    )
}

export default PostCard6