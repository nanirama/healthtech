import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { cutString } from '../../../lib/functions'


import AuthorInfo from "../../blog/AuthorInfo"

import ArticleImg from "../../../assets/images/blog-hero.png"
import CategoryImg from "../../../assets/images/article-img.jpg"
import Authorimg from "../../../assets/images/author.png"

const PostCard3 = ({ data }) => {
    console.log('Postcard1data', data)
    const { title, slug, author, excerpt, HeightImg, categories, blogSingle } = data
    const category = categories.nodes[0]

    return (
        <div className=" flex flex-row justify-items-stretch justify-start gap-4 border-b-2 border-gray-200 pb-4">
            <div class="w-1/2 flex flex-col justify-between">
                <div class="">
                    <h6 class="text-sm uppercase text-slate-700 pb-2">{category?.name}</h6>
                    <h2 class="lg:text-3xl text-2xl font-bold text-black mb-3"><Link to={`/blog/${slug}`}>{title && title}</Link></h2>
                    {excerpt && <div dangerouslySetInnerHTML={{ __html: cutString(excerpt, 100).replaceAll('&nbsp;', '') }} className="sm:pb-0 text-base mb-1" ></div>} 
                </div>
                <div class="flex flex-col flex-end">
                    <div class="flex flex-row w-full items-center justify-between mt-16">
                        <AuthorInfo author={author}/>
                        <p className="text-slate-700 text-sm">{blogSingle?.readingTime}</p></div>
                </div>
            </div>
            <div className="w-1/2"><GatsbyImage image={getImage(HeightImg.node.localFile)} alt={title && title} width={400} height={450} className="w-full" /></div>
        </div>
    )
}

export default PostCard3