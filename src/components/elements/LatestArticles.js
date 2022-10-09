import * as React from "react"
import BlogItem from "../blog/BlogItem"

const LatestArticle = ({data}) => {
    return (
        <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl">
                <h2 className="text-5xl font-normal tracking-tight text-gray-900 mb-8">Latest Articles</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data && data.map((item, index)=> <BlogItem key={index} data={item.node}/>)}
                </div>
            </div>
        </div>
    )
}
export default LatestArticle