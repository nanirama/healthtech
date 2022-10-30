import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { cutString } from '../../../lib/functions'

import AuthorInfo from "../../blog/AuthorInfo"
const PostCard2 = ({ data }) => {
    const { title, slug, author, featuredImage, blogSingle } = data
    return (
        <div class="flex flex-col justify-between lg:border-l lg:pl-5 pb-5">
            <div>
            <Link to={`/blog/${slug}`}><GatsbyImage image={getImage(featuredImage.node.localFile)} alt={title && title} className="mb-4 w-full" /></Link>
                <h6 class="text-xs uppercase text-slate-700 my-2">Article Type</h6>
                <h3 class="text-xl font-bold text-black mb-3"><Link to={`/blog/${slug}`}>{title && title}</Link></h3>

            </div>
            <div class="flex flex-row gap-4 justify-between my-2">
                <AuthorInfo author={author}/>
                <p className="text-slate-700 text-sm">{blogSingle?.readingTime}</p>
            </div>
        </div>
    )
}

export default PostCard2