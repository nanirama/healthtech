import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"


const BlogItem = ({ data }) => {
    const { title, slug, excerpt, author, featuredImage, categories, blogSingle } = data
    const pcategory = categories?.nodes[0] ? categories.nodes[0] : {}
    const cutString = (s, n) => {
        var cut = s.indexOf(' ', n);
        if (cut == -1) return s;
        return s.substring(0, cut)
    }
    return (
            <div className="border border-gray-300 p-3">
                <Link to={`/blog/${slug}`}><GatsbyImage image={getImage(featuredImage.node.localFile)} alt={title && title} className="mb-4 w-full" /></Link>
                {pcategory && pcategory.name && (
                    <h4 className="uppercase text-xs text-slate-400 pb-1">{pcategory.name}</h4>
                )} 
                <h3 className="text-black text-2xl pb-6"><Link to={`/blog/${slug}`}>{title && cutString(title, 35)}</Link></h3>
                {excerpt && <div dangerouslySetInnerHTML={{ __html: cutString(excerpt, 100).replaceAll('&nbsp;', '') }} className="sm:pb-0 text-base" ></div>}                    
                <div className="mt-5 author flex justify-between xl:items-center lg:items-start md:items-center items-start gap-4 xl:flex-row lg:flex-col sm:flex-row flex-col mb-2">
                {author?.node?.name && (
                <div className="flex items-center gap-2">
                        {author?.node?.avatar?.url && (
                            <img src={author?.node?.avatar?.url} alt={author?.node?.name} width={40} height={40} className="rounded-full" />
                        )}                        
                        <h6 className="text-sm tracking-tight mb-0">{author?.node?.name}</h6>
                    </div>
                )}
                {blogSingle?.readingTime && (
                    <p className="flex gap-1 items-center text-sm text-gray-500 tracking-tight mb-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#5D6465" stroke-width="1.5" stroke-miterlimit="10" />
                        <path d="M10 5.625V10H14.375" stroke="#5D6465" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> {blogSingle?.readingTime} read</p>   
                )}
                    
                </div>
            </div>
    )
}

export default BlogItem