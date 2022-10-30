import * as React from "react"
import { Link } from "gatsby"
import WriterImg from "../../assets/images/author.png"
import ArticleImg from "../../assets/images/article-img.jpg"

import PostCard1 from '../elements/postcards/PostCard1'
import PostCard2 from "../elements/postcards/PostCard2"

const HomeCategoryArticles = ({ data, title, slug }) => {
    const firstData = data.slice(0, 1);
    const SecondData = data.slice(1, 2);
    const allData = data.slice(2, data.length);
    
    return (
        <div className="mx-auto pt-8 px-4 max-w-7xl">
            <div className="bg-gray-700 text-white px-5 py-2 text-xl mb-5">{title && title}</div>
            <div class="grid lg:grid-cols-4 gap-5 mb-8 flex justify-start items-stretch justify-items-stretch">
                <div class="col-span-3">
                    <PostCard1 data={firstData[0].node} />
                </div>
                <div className="flex flex justify-start items-stretch justify-items-stretch">
                    <PostCard2 data={SecondData[0].node} />
                </div>
            </div>

            <hr />
            <div class="grid lg:grid-cols-4 gap-4 my-5">
                {allData && allData.map((item, index)=> <PostCard2 data={item.node} key={index} />)}                
            </div>
            <hr />
            <div className="flex justify-center w-full my-3">
                <Link to={`/category/${slug}`} class="rounded-full bg-teal-400 px-10 py-1 text-dark mt-5">Show All</Link>
            </div>
        </div>

    )
}
export default HomeCategoryArticles