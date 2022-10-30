import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import AuthorInfo from "../../blog/AuthorInfo"


const PostCard4 = ({ data }) => {
    const { title, slug, author, excerpt, featuredImage, categories, blogSingle } = data
    const category = categories.nodes[0]

    return (
        <div class="flex flex-col justify-between border-b-2 border-gray-200 pb-4">
            <div>
                <GatsbyImage image={getImage(featuredImage.node.localFile)} alt={title && title} width={600} height={539} className="w-full" />
                <h6 class="text-xs uppercase text-slate-700 my-2">{category?.name}</h6>
                <h3 class="text-xl font-bold text-black mb-3"><Link to={`/blog/${slug}`}>{title && title}</Link></h3>
            </div>
            <div class="flex flex-row gap-4 justify-between">
                <AuthorInfo author={author}/>
                <p className="text-slate-700 text-sm">{blogSingle?.readingTime}</p>
            </div>
        </div>
    )
}

export default PostCard4