import React from "react"
import { Link } from "gatsby"
const BlogTag = ({tags, modified}) => {
    console.log('tags',tags)
    return (
            <div className="tag_blk text-center">
                <div className="lg:max-w-3xl md:max-w-xl max-w-full px-4 mx-auto mt-12">
                    <h6 className="mb-4">{modified}</h6>
                    <div className="flex justify-center items-center flex-wrap gap-3 tags-list">
                        {tags && tags.nodes && tags.nodes.map((tag,index)=>(
                            <span key={index} className="bg-gray-100 rounded-2xl uppercase text-black text-xs py-2.5 px-4">{tag.name}</span>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default BlogTag