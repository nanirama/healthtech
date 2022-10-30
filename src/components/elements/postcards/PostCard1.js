import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { cutString } from '../../../lib/functions'


import AuthorInfo from "../../blog/AuthorInfo"
import ArticleImg from "../../../assets/images/article-img.jpg"
import WriterImg from "../../../assets/images/author.png"


const PostCard1 = ({data})=>{
console.log('Postcard1data', data)
const { title, slug, author, excerpt, featuredImage, categories, blogSingle } = data

return(
<div class="grid lg:grid-cols-3 gap-5">
    <div class="flex flex justify-start items-stretch justify-items-stretch pb-5">
        <div class="flex flex-col justify-between">
            <div class="">
                <h6 class="text-sm uppercase text-slate-700 pb-2">Article Type</h6>
                <h2 class="lg:text-3xl text-2xl font-bold text-black mb-3"><Link to={`/blog/${slug}`}>{title && title}</Link></h2>
                {excerpt && <div dangerouslySetInnerHTML={{ __html: cutString(excerpt, 100).replaceAll('&nbsp;', '') }} className="sm:pb-0 text-base mb-1" ></div>} 
            </div>
            <div class="flex flex-col flex-end">
                <div class="flex flex-row w-full items-center justify-between mt-10">
                    <AuthorInfo author={author}/>
                    <p className="text-slate-700 text-sm">{blogSingle?.readingTime}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-2"><Link to={`/blog/${slug}`}><GatsbyImage image={getImage(featuredImage.node.localFile)} alt={title && title} className="mb-4 w-full" /></Link></div>
</div>
)
}

export default PostCard1